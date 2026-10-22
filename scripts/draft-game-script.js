// ====================================================================
// draft-game-script.js — exclusivo de draft-game-page.html
//   • turnos em cobrinha, pool, boards dos jogadores e encerramento do draft
//   • regras de drag and drop do draft (o motor do drag e o card/modal ficam em cards-script.js)
//   • ações rápidas: Ctrl + clique, botão "escolher" do modal e barra de espaço
//   • botão Exportar Draft no header
// Depende de pages-script.js (t, aoMudarIdioma, pegarHrefJogo) e de cards-script.js.
// ====================================================================

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
let avisoChave = null;       // chave do aviso na tela, para retraduzi-lo ao trocar de idioma
let draftIniciado = false;   // true depois que os dados do draft foram carregados
let draftEncerrado = false;  // true quando todos os boards estão completos

// =====================
// INICIALIZAÇÃO
// =====================

//f:iniciarPaginaDraftGame
//Carrega o draftData, define a ordem dos turnos e desenha a tela
function iniciarPaginaDraftGame() {
  inicializarAviso();
  configurarDragDraft();
  const dados = JSON.parse(localStorage.getItem("draftData"));
  if (!dados) {
    mostrarAvisoPorChave("aviso_erro_carregar_draft");
    return;
  }
  jogadores = dados.jogadores;
  pool = dados.pool;
  window.config = {
    integrantes: dados.integrantes,
    usarMusica: dados.usarMusica,
    usarProdutor: dados.usarProdutor
  };
  let totalRodadas = dados.integrantes + (dados.usarMusica ? 1 : 0) + (dados.usarProdutor ? 1 : 0);
  // Se vier de importação, restaurar ordemBase fixa; senão sortear normalmente
  if (dados.ordemBase) {
    const base = dados.ordemBase;
    ordem = [];
    for (let i = 0; i < totalRodadas; i++) {
      ordem = ordem.concat(i % 2 === 0 ? base : [...base].reverse());
    }
  } else {
    ordem = gerarOrdemCobrinha(jogadores.length, totalRodadas);
    // persistir ordemBase para eventual exportação/re-importação
    const ordemBase = ordem.slice(0, jogadores.length);
    const draftAtual = JSON.parse(localStorage.getItem("draftData"));
    draftAtual.ordemBase = ordemBase;
    localStorage.setItem("draftData", JSON.stringify(draftAtual));
  }
  draftIniciado = true;
  iniciarAtalhosDraft();
  render();
  injetarBotaoExportar();
}

//f:atualizarIdiomaDraftGame
//Refaz o que depende de idioma: o header é recriado (o botão Exportar volta), e boards, turno e aviso são retraduzidos
function atualizarIdiomaDraftGame() {
  injetarBotaoExportar();
  if (!draftIniciado) return;
  render();
  if (avisoChave) mostrarAviso(t(avisoChave));
}

aoMudarIdioma(atualizarIdiomaDraftGame);
window.addEventListener("DOMContentLoaded", iniciarPaginaDraftGame);

//f:inicializarAviso
function inicializarAviso() {
  const gameScreen = document.getElementById("gameScreen");
  if (!gameScreen) return;
  avisoTurno = document.createElement("div");
  avisoTurno.id = "avisoTurno";
  avisoTurno.style.margin = "10px 0";
  avisoTurno.style.padding = "0 16px";
  avisoTurno.style.borderRadius = "8px";
  avisoTurno.style.backgroundColor = "#3a1a1a";
  avisoTurno.style.color = "#ffd9d9";
  avisoTurno.style.border = "1px solid #b35b5b";
  avisoTurno.style.display = "none";
  avisoTurno.style.minHeight = "44px";
  avisoTurno.style.height = "44px";
  avisoTurno.style.lineHeight = "44px";
  avisoTurno.style.fontSize = "14px";
  avisoTurno.style.alignItems = "center";
  avisoTurno.style.justifyContent = "center";
  const botaoTurno = document.querySelector("#gameScreen button");
  if (botaoTurno) {
    botaoTurno.insertAdjacentElement("beforebegin", avisoTurno);
  } else {
    gameScreen.insertBefore(avisoTurno, gameScreen.firstChild);
  }
}

//f:mostrarAviso
function mostrarAviso(texto) {
  if (!avisoTurno) return;
  if (!texto) {
    avisoChave = null;
    avisoTurno.style.display = "none";
    avisoTurno.innerText = "";
    return;
  }
  avisoTurno.style.display = "flex";
  avisoTurno.innerText = texto;
}

//f:mostrarAvisoPorChave
//Mostra um aviso traduzido guardando a chave, para ele trocar de idioma junto com a página
function mostrarAvisoPorChave(chave) {
  mostrarAviso(t(chave));
  avisoChave = chave;
}

// =====================
// DRAG QUEEN (regras do draft)
// =====================

//f:configurarDragDraft
//Registra no motor de drag (cards-script.js) o que pode ser arrastado e o que acontece ao soltar
function configurarDragDraft() {
  configurarDrag({
    podeArrastar: (item) => !item.locked,
    criarPayload(item, origem, playerIndex, slotIndex) {
      if (item.locked) return null;
      if (origem === "pool") {
        const poolIndex = pool.findIndex(p => p.id === item.id);
        return { ...item, fromPool: true, poolIndex };
      }
      return { ...item, fromPlayer: playerIndex, fromIndex: slotIndex };
    },
    aoSoltar(elementoAlvo, payload) {
      //procura o slot ou pool mais próximo
      const slot = elementoAlvo.closest(".slot");
      const poolDiv = elementoAlvo.closest("#pool");
      if (slot) executarDropNoSlot(slot, payload);        //drop em um slot
      else if (poolDiv) executarDropNoPool(payload);      //drop no pool (devolve item)
    }
  });
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
    tipo === "idol" ? t("board_idols") :
    tipo === "music" ? t("board_musica") :
    t("board_produtor");
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
      let card = criarCardDraft(item, "board", playerIndex, i);
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
  if (data.fromPool) colocarDoPoolNoBoard(data, playerIndex, tipo);
}

//f:colocarDoPoolNoBoard
//Move um item do pool para o board do jogador: primeiro slot vazio (idol) ou slot único (música/produtor);
//se estiver cheio, troca pelo primeiro item destravado. Retorna true se o item foi colocado.
function colocarDoPoolNoBoard(data, playerIndex, tipo) {
  let itemNovo = data;
  if (getItemType(itemNovo) !== tipo) return false;
  // Captura o index original ANTES de qualquer splice
  let originalIndex = data.poolIndex;
  let remocaoAntiga = null;
  if (escolhaDoTurno) {
    remocaoAntiga = desfazerEscolhaDoTurno(playerIndex);
    // Após desfazer, o pool mudou — recalcula onde o item novo está agora
    originalIndex = pool.findIndex(p => p.id === itemNovo.id);
  }
  let lista = picks[playerIndex][tipo];
  if (tipo === "idol") {
    let vazio = lista.findIndex(x => !x);
    if (vazio !== -1) {
      lista[vazio] = itemNovo;
      itemNovo.originalPoolIndex = originalIndex;
    } else {
      let indexSwap = lista.findIndex(x => x && !x.locked);
      if (indexSwap === -1) {
        if (remocaoAntiga) restaurarEscolhaDoTurno(remocaoAntiga, playerIndex);
        return false;
      }
      let itemSubstituido = lista[indexSwap];
      // Remove o novo do pool primeiro para não deslocar o index do substituído
      pool = pool.filter(p => p.id !== itemNovo.id);
      let insertIndex = itemSubstituido.originalPoolIndex !== undefined
        ? Math.min(itemSubstituido.originalPoolIndex, pool.length)
        : pool.length;
      pool.splice(insertIndex, 0, itemSubstituido);
      lista[indexSwap] = itemNovo;
      itemNovo.originalPoolIndex = originalIndex;
    }
  } else {
    let atual = lista[0];
    if (atual && atual.locked) {
      if (remocaoAntiga) restaurarEscolhaDoTurno(remocaoAntiga, playerIndex);
      return false;
    }
    if (atual) {
      pool = pool.filter(p => p.id !== itemNovo.id);
      let insertIndex = atual.originalPoolIndex !== undefined
        ? Math.min(atual.originalPoolIndex, pool.length)
        : pool.length;
      pool.splice(insertIndex, 0, atual);
    }
    lista[0] = itemNovo;
    itemNovo.originalPoolIndex = originalIndex;
  }
  // Remove o item novo do pool (caso ainda esteja — para o caso sem substituição)
  pool = pool.filter(p => p.id !== itemNovo.id);
  escolhaDoTurno = itemNovo;
  jogouNoTurno = true;
  render();
  return true;
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
    // Inserir na posição original no pool
    let insertIndex = item.originalPoolIndex !== undefined ? Math.min(item.originalPoolIndex, pool.length) : pool.length;
    pool.splice(insertIndex, 0, item);
    lista[data.fromIndex] = null;
    render();
  }
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

//f:encerrarTurno
function encerrarTurno() {
  if (!escolhaDoTurno) {
    mostrarAvisoPorChave("aviso_escolha_card");
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

//f:atualizarTurnoUI
function atualizarTurnoUI() {
  if (turno >= ordem.length) {
    document.getElementById("turnoAtual").innerText = t("turno_encerrado");
    return;
  }
  let index = jogadorAtual();
  document.getElementById("turnoAtual").innerText =
    t("turno_de") + jogadores[index];
}

//f:desfazerEscolhaDoTurno
function desfazerEscolhaDoTurno(playerIndex) {
  if (!escolhaDoTurno || !picks[playerIndex]) return null;
  let tipos = ["idol", "music", "producer"];
  for (let tipo of tipos) {
    let lista = picks[playerIndex][tipo];
    if (!lista) continue;
    for (let i = 0; i < lista.length; i++) {
      if (lista[i] && lista[i].id === escolhaDoTurno.id && !lista[i].locked) {
        let item = lista[i];
        lista[i] = null;
        // Restaura na posição original do pool
        let insertIndex = item.originalPoolIndex !== undefined
          ? Math.min(item.originalPoolIndex, pool.length)
          : pool.length;
        pool.splice(insertIndex, 0, item);
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
    let card = criarCardDraft(item, "pool");
    poolDiv.appendChild(card);
  });
}

// =====================
// CARDS DO DRAFT
// =====================

//f:criarCardDraft
//Cria um card do pool ou de um board: Ctrl + clique escolhe o card; clique simples abre o modal
function criarCardDraft(item, origem, playerIndex = null, slotIndex = null) {
  return criarCard(item, {
    bloqueado: !!item.locked,
    origem, playerIndex, slotIndex,
    aoClicar: (e) => {
      if (!e.ctrlKey || origem !== "pool") return false;
      if (!escolherCardDoPool(item)) mostrarAvisoPorChave("aviso_sem_slot");
      return true;
    },
    // o botão "escolher" do modal só aparece quando a escolha é possível
    opcoesModal: () => (origem === "pool" && podeEscolherCard(item))
      ? { escolher: () => escolherCardPeloModal(item) }
      : {}
  });
}

//f:podeEscolherCard
//Indica se o card do pool pode ir para o board do jogador ativo agora
function podeEscolherCard(item) {
  if (!draftIniciado || draftEncerrado || item.locked) return false;
  const tipo = getItemType(item);
  if (tipo === "music" && !config.usarMusica) return false;
  if (tipo === "producer" && !config.usarProdutor) return false;
  const lista = picks[jogadorAtual()]?.[tipo];
  if (!lista) return false;
  if (tipo === "idol") return lista.some(x => !x) || lista.some(x => x && !x.locked);
  return !(lista[0] && lista[0].locked);
}

//f:escolherCardDoPool
//Move o card do pool para o primeiro slot disponível do board do jogador ativo (como um "quick drag")
function escolherCardDoPool(item) {
  if (!podeEscolherCard(item)) return false;
  const poolIndex = pool.findIndex(p => p.id === item.id);
  if (poolIndex === -1) return false;
  return colocarDoPoolNoBoard({ ...item, fromPool: true, poolIndex }, jogadorAtual(), getItemType(item));
}

//f:escolherCardPeloModal
//Botão "escolher" do modal: fecha o modal, move o card e leva a página até o board do jogador ativo
function escolherCardPeloModal(item) {
  fecharModal();
  if (escolherCardDoPool(item)) centralizarBoardAtivo();
}

//f:centralizarBoardAtivo
//Rola a página para centralizar a linha do jogador ativo na tela
function centralizarBoardAtivo() {
  const linha = document.querySelector(".playerRow.activePlayer");
  if (linha) linha.scrollIntoView({ behavior: "smooth", block: "center" });
}

// =====================
// ATALHOS DE TECLADO
// =====================

let espacoTratado = false;   // true entre o keydown e o keyup de um espaço que acionou o botão

//f:iniciarAtalhosDraft
//Registra a barra de espaço como atalho do botão Encerrar Turno
function iniciarAtalhosDraft() {
  document.addEventListener("keydown", tratarTeclaDraft);
  document.addEventListener("keyup", tratarSoltarTeclaDraft);
}

//f:tratarTeclaDraft
//Espaço aciona o botão de encerrar turno, exceto com o modal aberto, durante um arrasto ou ao digitar em um campo.
//Combinações com Ctrl/Alt/Meta/Shift passam direto (Ctrl+C e Ctrl+V continuam funcionando).
function tratarTeclaDraft(e) {
  if (e.code !== "Space") return;
  if (e.repeat && espacoTratado) { e.preventDefault(); return; }   // segurar a tecla não rola a página nem repete
  if (e.ctrlKey || e.altKey || e.metaKey || e.shiftKey) return;
  if (draftEncerrado || modalAberto() || draggedElement) return;
  if (e.target.closest && e.target.closest("input, textarea, select, [contenteditable]")) return;
  const botao = document.querySelector("#turnActions button");
  if (!botao) return;
  e.preventDefault();
  espacoTratado = true;
  // tira o foco de um botão focado, senão o próprio espaço o ativaria de novo ao soltar a tecla
  if (document.activeElement && document.activeElement !== document.body) document.activeElement.blur();
  botao.click();
}

//f:tratarSoltarTeclaDraft
//Impede que o espaço ative, ao soltar, o botão que estava focado
function tratarSoltarTeclaDraft(e) {
  if (e.code === "Space" && espacoTratado) {
    espacoTratado = false;
    e.preventDefault();
  }
}

// =====================
// EXPORTAR DRAFT
// =====================

//f:injetarBotaoExportar
//Coloca o botão Exportar Draft no header (o header é recriado a cada troca de idioma, então isto roda de novo)
function injetarBotaoExportar() {
  const headerRight = document.querySelector(".header-right");
  if (!headerRight || document.getElementById("btnExportarDraft")) return;
  const btn = document.createElement("button");
  btn.id = "btnExportarDraft";
  btn.setAttribute("data-i18n", "btn_exportar_draft");
  btn.textContent = t("btn_exportar_draft");
  btn.onclick = exportarDraft;
  headerRight.insertBefore(btn, headerRight.firstChild);
}

//f:exportarDraft
function exportarDraft() {
  const raw = localStorage.getItem("draftData");
  if (!raw) { alert(t("alert_nenhum_draft")); return; }
  const { integrantes, pool } = JSON.parse(raw);

  // ler ordem real do DOM (sorteada pelo draft-game-script.js)
  // fallback para localStorage se o board não estiver disponível
  const playerRows = document.querySelectorAll("#playersBoard .playerRow");
  let jogadores;
  if (playerRows.length > 0) {
    jogadores = Array.from(playerRows).map(row => row.querySelector(".playerName")?.textContent?.trim()).filter(Boolean);
  } else {
    jogadores = JSON.parse(raw).jogadores;
  }

  const tipoLabel = { idol: "Idol", music: "Música", producer: "Produtor" };

  const idols     = pool.filter(i => i.type?.toLowerCase() === "idol");
  const musicas   = pool.filter(i => i.type?.toLowerCase() === "music");
  const produtores= pool.filter(i => i.type?.toLowerCase() === "producer");

  const linhas = [];

  linhas.push("=== STRAY7 DRAFT ===");
  linhas.push(`Data: ${new Date().toLocaleString("pt-BR")}`);
  linhas.push("");

  linhas.push("--- JOGADORES (ordem do draft) ---");
  jogadores.forEach((nome, i) => linhas.push(`  ${i + 1}. ${nome}`));
  linhas.push(`  Integrantes por time: ${integrantes}`);
  linhas.push("");

  linhas.push("--- POOL DE IDOLS ---");
  if (idols.length === 0) {
    linhas.push("  (nenhum)");
  } else {
    idols.forEach(idol => {
      linhas.push(`  [${idol.group}] ${idol.name}  {id:${idol.id}}  (Gen ${idol.gen || "?"} | Esp: ${idol.especialidade || "-"})`);
    });
  }
  linhas.push("");

  if (musicas.length > 0) {
    linhas.push("--- POOL DE MÚSICAS ---");
    musicas.forEach(m => linhas.push(`  ${m.name}  {id:${m.id}}${m.fonte ? "  (Fonte: " + m.fonte + ")" : ""}`));
    linhas.push("");
  }

  if (produtores.length > 0) {
    linhas.push("--- POOL DE PRODUTORES ---");
    produtores.forEach(p => linhas.push(`  ${p.name}  {id:${p.id}}`));
    linhas.push("");
  }

  const texto = linhas.join("\n");
  const blob = new Blob([texto], { type: "text/plain;charset=utf-8" });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement("a");
  a.href     = url;
  a.download = `stray7_draft_${new Date().toISOString().slice(0,10)}.txt`;
  a.click();
  URL.revokeObjectURL(url);
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
  const pickOrder = {};
  jogadores.forEach((_, pi) => { pickOrder[pi] = []; });
  ordem.forEach(pi => {
    const p = picks[pi];
    if (!p) return;
    ["idol","music","producer"].forEach(tipo => {
      (p[tipo] || []).forEach(c => { if (c && !pickOrder[pi].find(x => x.id === c.id)) pickOrder[pi].push(c); });
    });
  });
  mostrarAvisoPorChave("aviso_draft_encerrado");
  draftEncerrado = true;
  localStorage.setItem("simulacaoData", JSON.stringify({
    jogadores,
    ordem: ordem.slice(0, jogadores.length),
    picks,
    pickOrder,
    config: window.config
  }));
  const btn = document.querySelector("#gameScreen button");
  if (btn) {
    btn.dataset.i18n = "btn_fase_simulacao";   // sem isso, trocar o idioma devolveria o texto "Encerrar turno"
    btn.innerText = t("btn_fase_simulacao");
    btn.style.backgroundColor = "#7e22ce";
    btn.onclick = () => { 
      const simulacaoHref = pegarHrefJogo("simulation-page.html");
      window.location.href = simulacaoHref;
    };
  }
}

//tá lendo isso por quê, curioso?
