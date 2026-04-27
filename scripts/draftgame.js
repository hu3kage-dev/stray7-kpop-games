// ===================
// VARIÁVEIS GLOBAIS
// ===================
let jogadores = [];
let ordem = [];
let turno = 0;
let pool = [];
let picks = {};
let jogouNoTurno = false;
let escolhaDoTurno = null;
let avisoTurno = null;

// =====================
// VARIÁVEIS DE DRAG  
// =====================
let draggedItem = null;
let draggedElement = null;
let dragOrigin = null;
let dragPayload = null;
let ghostCard = null;

// =====================
// INICIALIZAÇÃO
// =====================

//f:onWindowLoad
window.onload = function () {
  inicializarAviso();
  const dados = JSON.parse(localStorage.getItem("draftData"));
  if (!dados) {
    mostrarAviso("Erro ao carregar draft");
    return;
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      fecharModal();
    }
  });
  jogadores = dados.jogadores;
  pool = dados.pool;
  window.config = {
    integrantes: dados.integrantes,
    usarMusica: dados.usarMusica,
    usarProdutor: dados.usarProdutor
  };
  let totalRodadas = dados.integrantes + (dados.usarMusica ? 1 : 0) + (dados.usarProdutor ? 1 : 0);
  ordem = gerarOrdemCobrinha(jogadores.length, totalRodadas);
  render();
};

//f:getItemType
function getItemType(item) {
  return item?.type?.toString().toLowerCase();
}

//f:inicializarAviso
function inicializarAviso() {
  const gameScreen = document.getElementById("gameScreen");
  if (!gameScreen) return;
  avisoTurno = document.createElement("div");
  avisoTurno.id = "avisoTurno";
  avisoTurno.style.margin = "10px 0";
  avisoTurno.style.padding = "12px";
  avisoTurno.style.borderRadius = "8px";
  avisoTurno.style.backgroundColor = "#3a1a1a";
  avisoTurno.style.color = "#ffd9d9";
  avisoTurno.style.border = "1px solid #b35b5b";
  avisoTurno.style.display = "none";
  avisoTurno.style.minHeight = "24px";
  avisoTurno.style.fontSize = "14px";
  const botaoTurno = document.querySelector("#gameScreen button");
  if (botaoTurno) {
    botaoTurno.insertAdjacentElement("afterend", avisoTurno);
  } else {
    gameScreen.insertBefore(avisoTurno, gameScreen.firstChild);
  }
}

// =====================
// DRAG QUEEN
// =====================

//f:criarGhostCard
function criarGhostCard(card) {
  let ghost = card.cloneNode(true);
  const rect = card.getBoundingClientRect();
  ghost.style.position = "fixed";
  ghost.style.pointerEvents = "none";
  ghost.style.opacity = "0.7";
  ghost.style.zIndex = "10000";
  ghost.style.boxShadow = "0 8px 16px rgba(0,0,0,0.5)";
  ghost.style.cursor = "grabbing";
  ghost.style.width = rect.width + "px";
  ghost.style.height = rect.height + "px";
  ghost.style.transform = "translate(-50%, -50%)";
  document.body.appendChild(ghost);
  return ghost;
}

//f:iniciarDrag
function iniciarDrag(e, item, origem, playerIndex = null, slotIndex = null) {
  e.preventDefault();
  if (item.locked) return;
  draggedItem = item;
  draggedElement = e.currentTarget;
  dragOrigin = origem;
  //criar payload
  if (origem === "pool") {
    dragPayload = { ...item, fromPool: true };
  } else {
    dragPayload = { ...item, fromPlayer: playerIndex, fromIndex: slotIndex };
  }
  //criar ghost card que segue o mouse
  ghostCard = criarGhostCard(draggedElement);
  //rastrear movimento do mouse
  document.addEventListener("mousemove", rastrearDrag);
  document.addEventListener("mouseup", finalizarDrag);
}

//f:rastrearDrag
function rastrearDrag(e) {
  if (!ghostCard) return;
  ghostCard.style.left = e.clientX + "px";
  ghostCard.style.top = e.clientY + "px";
}

//f:finalizarDrag
function finalizarDrag(e) {
  if (!ghostCard) return;
  document.removeEventListener("mousemove", rastrearDrag);
  document.removeEventListener("mouseup", finalizarDrag);
  //remove ghost card
  document.body.removeChild(ghostCard);
  ghostCard = null;
  //verifica qual elemento está sob o cursor
  const elementoAlvo = document.elementFromPoint(e.clientX, e.clientY);
  if (elementoAlvo) {
    //procura o slot ou pool mais próximo
    let slot = elementoAlvo.closest(".slot");
    let poolDiv = elementoAlvo.closest("#pool");
    if (slot) {
      //drop em um slot
      executarDropNoSlot(slot, dragPayload);
    } else if (poolDiv) {
      //drop no pool (devolve item)
      executarDropNoPool(dragPayload);
    }
  }
  draggedItem = null;
  draggedElement = null;
  dragOrigin = null;
  dragPayload = null;
}

// =====================
// BTS - MIC DROP
// =====================

//f:criarDropZone
function criarDropZone(playerIndex, tipo) {
  let bloco = document.createElement("div");
  bloco.className = "board " + tipo + "Board";
  let titulo = document.createElement("div");
  titulo.className = "boardTitle";
  titulo.innerText =
    tipo === "idol" ? "Idols" :
    tipo === "music" ? "Música" :
    "Produtor";
  let slotsContainer = document.createElement("div");
  slotsContainer.className = "slotsContainer";
  bloco.appendChild(titulo);
  bloco.appendChild(slotsContainer);
  //estrutura correta por tipo
  if (!picks[playerIndex]) {
    picks[playerIndex] = {
      idol: Array(config.integrantes).fill(null),
      music: [null],
      producer: [null]
    };
  }
  let lista = picks[playerIndex][tipo];
  let totalSlots = lista.length;
  for (let i = 0; i < totalSlots; i++) {
    let slot = document.createElement("div");
    slot.className = "slot";
    let item = lista[i];
    //render card
    if (item) {
      let card = criarCard(item, "board", playerIndex, i);
      slot.appendChild(card);
    }
    slotsContainer.appendChild(slot);
  }
  return bloco;
}

//f:executarDropNoSlot
function executarDropNoSlot(slot, data) {
  let playerIndex = null;
  let tipo = null;
  let block = slot.closest(".board");
  if (!block) return;
  if (block.classList.contains("idolBoard")) tipo = "idol";
  else if (block.classList.contains("musicBoard")) tipo = "music";
  else if (block.classList.contains("producerBoard")) tipo = "producer";
  else return;
  let playerRow = block.closest(".playerRow");
  if (!playerRow) return;
  let board = playerRow.closest("#playersBoard");
  let allRows = Array.from(board.querySelectorAll(".playerRow"));
  let rowIndex = allRows.indexOf(playerRow);
  let ordemBase = ordem.slice(0, jogadores.length);
  playerIndex = ordemBase[rowIndex];
  if (playerIndex !== jogadorAtual()) return;
  let slotsContainer = block.querySelector(".slotsContainer");
  let allSlots = Array.from(slotsContainer.querySelectorAll(".slot"));
  let slotIndex = allSlots.indexOf(slot);
  //swap interno (mesmo player)
  if (data.fromPlayer === playerIndex) {
    let origemLista = picks[playerIndex][tipo];
    let origemItem = origemLista[data.fromIndex];
    if (getItemType(origemItem) !== tipo) return;
    let lista = picks[playerIndex][tipo];
    let destinoItem = lista[slotIndex];
    if (destinoItem && destinoItem.locked) return;
    lista[slotIndex] = origemItem;
    origemLista[data.fromIndex] = destinoItem || null;
    render();
    return;
  }
  //vindo do pool
  if (data.fromPool) {
    let itemNovo = data;
    if (getItemType(itemNovo) !== tipo) return;
    let remocaoAntiga = null;
    if (escolhaDoTurno) {
      remocaoAntiga = desfazerEscolhaDoTurno(playerIndex);
    }
    let lista = picks[playerIndex][tipo];
    if (tipo === "idol") {
      let vazio = lista.findIndex(x => !x);
      if (vazio !== -1) {
        lista[vazio] = itemNovo;
      } else {
        let indexSwap = lista.findIndex(x => x && !x.locked);
        if (indexSwap === -1) {
          if (remocaoAntiga) {
            restaurarEscolhaDoTurno(remocaoAntiga, playerIndex);
          }
          return;
        }
        pool.push(lista[indexSwap]);
        lista[indexSwap] = itemNovo;
      }
    } else {
      let atual = lista[0];
      if (atual && atual.locked) {
        if (remocaoAntiga) {
          restaurarEscolhaDoTurno(remocaoAntiga, playerIndex);
        }
        return;
      }
      if (atual) pool.push(atual);
      lista[0] = itemNovo;
    }
    pool = pool.filter(p => p.id !== itemNovo.id);
    escolhaDoTurno = itemNovo;
    jogouNoTurno = true;
    render();
  }
}

//f:executarDropNoPool
function executarDropNoPool(data) {
  if (data.fromPlayer !== undefined) {
    let dataPlayer = picks[data.fromPlayer];
    let tipo = data.type?.toString().toLowerCase();
    let lista = dataPlayer[tipo];
    let item = lista[data.fromIndex];
    if (item.locked) return;
    if (escolhaDoTurno && escolhaDoTurno.id === item.id) {
      escolhaDoTurno = null;
      jogouNoTurno = false;
      mostrarAviso("");
    }
    pool.push(item);
    lista[data.fromIndex] = null;
    render();
  }
}

//f:mostrarAviso
function mostrarAviso(texto) {
  if (!avisoTurno) return;
  if (!texto) {
    avisoTurno.style.display = "none";
    avisoTurno.innerText = "";
    return;
  }
  avisoTurno.style.display = "block";
  avisoTurno.innerText = texto;
}

// =====================
// TURNO
// =====================

//f:gerarOrdemCobrinha
function gerarOrdemCobrinha(qtdJogadores, rodadas) {
  // 1. Criar ordem base
  let base = [];
  for (let i = 0; i < qtdJogadores; i++) {
    base.push(i);
  }
  // 2. Embaralhar a ordem base
  for (let i = base.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [base[i], base[j]] = [base[j], base[i]];
  }
  // 3. Gerar cobrinha com base embaralhada
  let ordem = [];
  for (let i = 0; i < rodadas; i++) {
    if (i % 2 === 0) {
      // rodada normal
      ordem = ordem.concat(base);
    } else {
      // rodada invertida
      ordem = ordem.concat([...base].reverse());
    }
  }
  return ordem;
}

//f:jogadorAtual
function jogadorAtual() {
  return ordem[turno];
}

//f:adicionarItem
function adicionarItem(item) {
  let player = jogadorAtual();
  if (!podeAdicionarItem(player, item)) return;
  if (!picks[player]) {
    picks[player] = {
      idol: Array(config.integrantes).fill(null),
      music: [null],
      producer: [null]
    };
  }
  if (escolhaDoTurno) {
    desfazerEscolhaDoTurno(player);
  }
  const itemType = getItemType(item);
  let lista = picks[player][itemType];
  if (itemType === "idol") {
    let vazio = lista.findIndex(x => !x);
    if (vazio !== -1) {
      lista[vazio] = item;
    } else {
      let indexSwap = lista.findIndex(x => x && !x.locked);
      if (indexSwap === -1) return;
      pool.push(lista[indexSwap]);
      lista[indexSwap] = item;
    }
  } else {
    let atual = lista[0];
    if (atual && atual.locked) return;
    if (atual) pool.push(atual);
    lista[0] = item;
  }
  pool = pool.filter(p => p.id !== item.id);
  escolhaDoTurno = item;
  jogouNoTurno = true;
  render();
}

//f:encerrarTurno
function encerrarTurno() {
  if (!escolhaDoTurno) {
    mostrarAviso("Escolha um Card!");
    return;
  }
  let player = jogadorAtual();
  //trava picks
 let data = picks[player];
    ["idol", "music", "producer"].forEach(tipo => {
    if (data[tipo]) {
        data[tipo].forEach(item => {
        if (item) item.locked = true;
        });
    }
    });
  //reset do turno
  escolhaDoTurno = null;
  jogouNoTurno = false;
  turno++;
  //verificar se o jogo acabou
  if (verificarFimDoJogo()) {
    encerrarDraft();
    return;
  }
  mostrarAviso("");
  render();
}

//f:podeAdicionarItem
function podeAdicionarItem(playerIndex, item) {
  let data = picks[playerIndex];
if (!data) return true;
let lista = [
  ...(data.idol || []),
  ...(data.music || []),
  ...(data.producer || [])
];
  let idols = lista.filter(i => i && getItemType(i) === "idol").length;
  let temMusic = lista.some(i => i && getItemType(i) === "music");
  let temProducer = lista.some(i => i && getItemType(i) === "producer");
  const itemType = getItemType(item);
  if (itemType === "idol") {
    if (idols >= config.integrantes) return false;
  }
  if (itemType === "music") {
    if (!config.usarMusica) return false;
    if (temMusic) return false;
  }
  if (itemType === "producer") {
    if (!config.usarProdutor) return false;
    if (temProducer) return false;
  }
  return true;
}

//f:atualizarTurnoUI
function atualizarTurnoUI() {
  if (turno >= ordem.length) {
    document.getElementById("turnoAtual").innerText = "Draft encerrado!";
    return;
  }
  let index = jogadorAtual();
  document.getElementById("turnoAtual").innerText =
    "Turno de: " + jogadores[index];
}

//f:desfazerEscolhaDoTurno
function desfazerEscolhaDoTurno(playerIndex) {
  if (!escolhaDoTurno || !picks[playerIndex]) return null;
  let tipos = ["idol", "music", "producer"];
  for (let tipo of tipos) {
    let lista = picks[playerIndex][tipo];
    if (!lista) continue;
    for (let i = 0; i < lista.length; i++) {
      if (
        lista[i] &&
        lista[i].id === escolhaDoTurno.id &&
        !lista[i].locked
      ) {
        let item = lista[i];
        lista[i] = null;
        pool.push(item);
        escolhaDoTurno = null;
        jogouNoTurno = false;
        mostrarAviso("");
        return { item, type: tipo, slotIndex: i };
      }
    }
  }
  return null;
}

//f:restaurarEscolhaDoTurno
function restaurarEscolhaDoTurno(removido, playerIndex) {
  if (!removido || !picks[playerIndex]) return;
  let listaAtual = picks[playerIndex][removido.type];
  if (!listaAtual) return;
  listaAtual[removido.slotIndex] = removido.item;
  escolhaDoTurno = removido.item;
  jogouNoTurno = true;
  pool = pool.filter(p => p.id !== removido.item.id);
}

// =====================
// RENDER
// =====================

//f:render
function render() {
  renderPlayers();
  renderPool();
  atualizarTurnoUI();
}

//f:renderPlayers
function renderPlayers() {
  const board = document.getElementById("playersBoard");
  if (!board) return;
  board.innerHTML = "";
  if (!jogadores || jogadores.length === 0) return;
  const ordemBase = ordem.slice(0, jogadores.length);
  ordemBase.forEach((playerIndex, posicao) => {
    let nome = jogadores[playerIndex];
    let row = document.createElement("div");
    row.className = "playerRow";
    let meta = document.createElement("div");
    meta.className = "playerMeta";
    let ordemDiv = document.createElement("span");
    ordemDiv.className = "playerOrder";
    ordemDiv.innerText = `${posicao + 1}º`;
    let nomeDiv = document.createElement("span");
    nomeDiv.className = "playerName";
    nomeDiv.innerText = nome;
    meta.appendChild(ordemDiv);
    meta.appendChild(nomeDiv);
    row.appendChild(meta);
    let blocos = document.createElement("div");
    blocos.className = "playerBlocks";
    //idols (sempre)
    blocos.appendChild(criarDropZone(playerIndex, "idol"));
    //music (condicional)
    if (config.usarMusica) {
    blocos.appendChild(criarDropZone(playerIndex, "music"));
    }
    //producer (condicional)
    if (config.usarProdutor) {
    blocos.appendChild(criarDropZone(playerIndex, "producer"));
    }
    row.appendChild(blocos);
    if (playerIndex === jogadorAtual()) {
      row.classList.add("activePlayer");
    } else {
      row.style.opacity = "0.4";
    }
    board.appendChild(row);
  });
}

//f:renderPool
function renderPool() {
  const poolDiv = document.getElementById("pool");
  if (!poolDiv) return;
  poolDiv.innerHTML = "";
  pool.forEach(item => {
    let card = criarCard(item, "pool");
    poolDiv.appendChild(card);
  });
}

// =====================
// IMAGENS
// =====================

//f:getCardImageCandidates
function getCardImageCandidates(item) {
  const sanitize = (text) => text
    .toString()
    .trim()
    .normalize("NFD") // remove acentos
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "") // remove caracteres especiais e espaços
    .replace(/^-+|-+$/g, ""); // remove hífen nas pontas
    const itemType = getItemType(item);
    const candidates = [];
    const idSlug = sanitize(item.id);
    const nameSlug = item.name;
    
    if (itemType === "idol") {
      const groupSlug = item.group;
      const query = encodeURIComponent(`${groupSlug} ${nameSlug}`);
      candidates.push(`./assets/images/idol_${idSlug}.jpg`);
      candidates.push(`./assets/images/idol_${idSlug}.png`);
      candidates.push(`./assets/images/idol_${idSlug}.jpeg`);
      candidates.push(`https://dummyimage.com/160x200/ffff00/000000&text=${query}`);
      candidates.push(`https://via.placeholder.com/160x200/ffff00/000000?text=${query}`);
      return candidates;
    }

  if (itemType === "music") {
    const fonteSlug = sanitize(item.fonte || "");
    const query = encodeURIComponent(`${fonteSlug} ${nameSlug}`);
    if (fonteSlug) {
      candidates.push(`./assets/images/music_${idSlug}.jpg`);
      candidates.push(`./assets/images/music_${idSlug}.png`);
      candidates.push(`./assets/images/music_${idSlug}.jpeg`);
    }
    candidates.push(`https://dummyimage.com/160x200/0000ff/ffffff&text=${query}`);
    candidates.push(`https://via.placeholder.com/160x200/0000ff/ffffff?text=${query}`);
    return candidates;
  }

  if (itemType === "producer") {
    const query = encodeURIComponent(`Producer ${nameSlug}`);
    candidates.push(`./assets/images/producer_${idSlug}.jpg`);
    candidates.push(`./assets/images/producer_${idSlug}.png`);
    candidates.push(`./assets/images/producer_${idSlug}.jpeg`);
    candidates.push(`https://dummyimage.com/160x200/800080/ffffff&text=${query}`);
    candidates.push(`https://via.placeholder.com/160x200/800080/ffffff?text=${query}`);
    return candidates;
  }

  candidates.push(`./assets/images/${itemType}_${idSlug}.jpg`);
  candidates.push(`./assets/images/${itemType}_${idSlug}.png`);
  candidates.push(`./assets/images/${itemType}_${idSlug}.jpeg`);

  return candidates;
}

// =====================
// CARD
// =====================

//f:getCardImageSrc
function getCardImageSrc(item) {
  return getCardImageCandidates(item)[0];
}

//f:criarCard
function criarCard(item, origem = "pool", playerIndex = null, slotIndex = null) {
  let card = document.createElement("div");
  card.className = "card";
  // Limpa aspas extras dos dados
  const cleanText = (text) => {
    if (!text) return "";
    return text.replace(/\"{3}/g, '"').replace(/^["']|["']$/g, "").trim();
  };
  const itemType = getItemType(item);
  // Type colour coded lyrics
  if (itemType === "idol") {
    card.classList.add("card-idol");
  } else if (itemType === "music") {
    card.classList.add("card-music");
  } else if (itemType === "producer") {
    card.classList.add("card-producer");
  }
  if (item.locked) {
    card.classList.add("locked");
  }
  // Imagem com fallback chain
  const imageCandidates = getCardImageCandidates(item);
  let candidateIndex = 0;
  let img = document.createElement("img");
  img.src = imageCandidates[candidateIndex];
  img.onerror = () => {
    candidateIndex += 1;
    if (candidateIndex < imageCandidates.length) {
      img.src = imageCandidates[candidateIndex];
      return;
    }
    const fallbackType = getItemType(item);
    const fallbackName = item.name
      .toString()
      .replace(/\s+/g, "_")
      .replace(/[^a-zA-Z0-9_\-]/g, "");
    img.onerror = null;
    if (fallbackType === "idol") {
      const fallbackGroup = item.group
        .toString()
        .replace(/\s+/g, "_")
        .replace(/[^a-zA-Z0-9_\-]/g, "");
      img.src = `./assets/images/idol_${fallbackGroup}_${fallbackName}.jpg`;
    } else {
      img.src = `./assets/images/${fallbackType}_${fallbackName}.jpg`;
    }
  };
  let label = document.createElement("div");
  label.className = "cardLabel";
  // Estruturar informações baseado no tipo
  if (itemType === "idol") {
    label.innerHTML = `<div class="cardInfo">${cleanText(item.group)}</div><div class="cardName">${item.name}</div>`;
  } else if (itemType === "music") {
    label.innerHTML = `<div class="cardInfo">${cleanText(item.fonte)}</div><div class="cardName">${item.name}</div>`;
  } else if (itemType === "producer") {
    label.innerHTML = `<div class="cardInfo">${itemType}</div><div class="cardName">${item.name}</div>`;
  } else {
    label.innerText = item.name;
  }
  card.appendChild(img);
  card.appendChild(label);
  // Drag
  if (!item.locked) {
    card.style.cursor = "grab";
    card.addEventListener("mousedown", (e) => {
      if (e.button === 0) {
        iniciarDrag(e, item, origem, playerIndex, slotIndex);
      }
    });
    card.addEventListener("mouseenter", () => {
      if (!draggedElement) {
        card.style.cursor = "grab";
      }
    });
  }
  // Modal
  card.addEventListener("click", (e) => {
    //evita abrir modal se estiver fazendo drag
    if (!draggedElement) {
      abrirModal(item);
    }
  });
  return card;
}

// =====================
// MODAL
// =====================

//f:abrirModal
function abrirModal(item) {
  let modal = document.getElementById("modal");
  if (!modal) return;
  modal.style.display = "flex";
  const itemType = getItemType(item);
  const cleanText = (text) => {
    if (!text) return "-";
    return text.toString().replace(/"{3}/g, '"').replace(/^['"]|['"]$/g, "").trim();
  };
  let bodyContent = "";
  if (itemType === "idol") {
    bodyContent = `
    <p><b>Grupo:</b> ${cleanText(item.group)}</p>
    <p><b>Vocal:</b> ${cleanText(item.vocal)}</p>
    <p><b>Dance:</b> ${cleanText(item.dance)}</p>
    <p><b>Rap:</b> ${cleanText(item.rap)}</p>
    <p><b>Center:</b> ${cleanText(item.center)}</p>
    <p><b>Visual:</b> ${cleanText(item.visual)}</p>
    <p><b>Conceito Predominante:</b> ${cleanText(item.conceito)}</p>
    <p><b>Pontos Fortes:</b> ${cleanText(item.fortes)}</p>
    <p><b>Pontos Fracos:</b> ${cleanText(item.fracos)}</p>
    `;
  } else if (itemType === "music") {
    bodyContent = `
    <p><b>Fonte:</b> ${cleanText(item.fonte)}</p>
    <p><b>Conceito Original:</b> ${cleanText(item.conceito)}</p>
    `;
  } else if (itemType === "producer") {
    bodyContent = `
    <p><b>Conceito Predominante:</b> ${cleanText(item.conceito)}</p>
    <p><b>Outros Conceitos:</b> ${cleanText(item.outrosconceitos)}</p>
    `;
  } else {
    bodyContent = `<p><b>Tipo:</b> ${itemType}</p>`;
  }
  modal.innerHTML = `
  <div class="modalContent">
  <span class="closeBtn" onclick="fecharModal()">X</span>
  <img src="${getCardImageSrc(item)}" class="modalImg">
  <h2>${cleanText(item.name)}</h2>
  ${bodyContent}
  </div>
  `;
  modal.onclick = (e) => {
    if (e.target === modal) {
      fecharModal();
    }
  };
}

//f:fecharModal
function fecharModal() {
  document.getElementById("modal").style.display = "none";
}

// =====================
// ENCERRAR DRAFT
// =====================

//f:todosBoardsCompletos
function todosBoardsCompletos() {
  for (let i = 0; i < jogadores.length; i++) {
    if (!picks[i]) return false;
    //idols (obrigatório)
    let idols = picks[i].idol.filter(x => x).length;
    if (idols < config.integrantes) return false;
    //musicas (situacional)
    if (config.usarMusica) {
      let temMusica = picks[i].music.some(x => x);
      if (!temMusica) return false;
    }
    //produtores (situacional)
    if (config.usarProdutor) {
      let temProdutor = picks[i].producer.some(x => x);
      if (!temProdutor) return false;
    }
  }
  return true;
}

//f:verificarFimDoJogo
function verificarFimDoJogo() {
  return todosBoardsCompletos();
}

//f:encerrarDraft
function encerrarDraft() {
  mostrarAviso("🎉 Draft Encerrado! Todos os boards foram preenchidos com sucesso!");
  localStorage.setItem("simulacaoData", JSON.stringify({
    jogadores,
    ordem: ordem.slice(0, jogadores.length),
    picks,
    config: window.config
  }));
  const btn = document.querySelector("#gameScreen button");
  if (btn) {
    btn.innerText = "Fase de Simulação";
    btn.style.backgroundColor = "#7e22ce";
    btn.style.border = "2px solid yellow";
    btn.onclick = () => { window.location.href = "simulacao.html"; };
  }
}

//tá lendo isso por quê, curioso?