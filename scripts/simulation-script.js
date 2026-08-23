// =============================
// CONSTANTES VARIÁVEIS GLOBAIS
// =============================
const ROLE_OPTIONS_IDOL = ["Posição","Main Vocal","Lead Vocal","Main Dancer","Lead Dancer","Main Rapper","Lead Rapper","Visual","Center"];
const ROLE_OPTIONS_MUSIC = ["Gênero","EDM","Electro/Synth","Emotional","Experimental","Groove","Hip-Hop","Pop","R&B","Rock","Tropical"];
const ROLE_OPTIONS_PRODUCER = ["Conceito","Conceptual","Cute","Dark","Dreamcore","Elegant","Girl Crush","Mature","Performance","Swag","Teen Crush"];
const NUMBERED_ROLES = ["Lead Vocal","Lead Dancer","Lead Rapper"];
// Controle da área de resultados:
// false = o botão "Calcular Score" e o placar não são exibidos.
// true  = o botão volta a aparecer após todos os jogadores travarem suas escolhas.
const MOSTRAR_SCORE = true;
// Os valores internos (value) permanecem fixos em pt para não quebrar a lógica de
// validação/pontuação. Apenas o texto exibido (option.text) do placeholder inicial
// de cada combo é traduzido — os demais itens já são termos padrão da indústria K-pop.
const ROLE_PLACEHOLDER_KEYS = {
  "Posição": "role_placeholder_posicao",
  "Gênero":  "role_placeholder_genero",
  "Conceito": "role_placeholder_conceito"
};
let simData       = null;
let boardSlots    = {};
let poolCards     = {}; 
let roleBoard     = {};
let lockedPlayers = {};

// =====================
// VARIÁVEIS DE DRAG  
// =====================
let draggedItem = null;
let draggedElement = null;
let dragOrigin = null;
let dragPayload = null;
let ghostCard = null;
let dragStartX = null;
let dragStartY = null;
let dragMoved = false;
let justDragged = false;

// =====================
// INICIALIZAÇÃO
// =====================

//f:onWindowLoad
window.onload = function () {
  document.addEventListener("keydown", (e) => { 
    if (e.key === "Escape") 
      fecharModal(); 
  });
  const raw = localStorage.getItem("simulacaoData");
  if (!raw) {
    document.getElementById("simBoard").innerHTML = "<p>Erro ao carregar dados.</p>";
    return;
  }
  simData = JSON.parse(raw);
  simData.ordem.forEach(pi => {
  const p = simData.picks[pi];
  if (simData.pickOrder?.[pi]?.length) {
    poolCards[pi] = simData.pickOrder[pi].map(c => ({...c}));
  } else {
    const cards = [];
    if (p) {
      (p.idol     || []).forEach(c => { if (c) cards.push({...c}); });
      (p.music    || []).forEach(c => { if (c) cards.push({...c}); });
      (p.producer || []).forEach(c => { if (c) cards.push({...c}); });
    }
    poolCards[pi] = cards;
  }
    boardSlots[pi] = {
      idol:     Array(simData.config.integrantes).fill(null),
      music:    simData.config.usarMusica    ? [null] : [],
      producer: simData.config.usarProdutor  ? [null] : []
    };
    roleBoard[pi] = {
      idol:     Array(simData.config.integrantes).fill("—"),
      music:    simData.config.usarMusica    ? ["—"] : [],
      producer: simData.config.usarProdutor  ? ["—"] : []
    };
    lockedPlayers[pi] = false;
  });
  render();
};

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
  // Verifica se o jogador está travado - impede drag
  if (playerIndex !== null && lockedPlayers[playerIndex]) {
    return;
  }
  draggedItem = item;
  draggedElement = e.currentTarget;
  dragOrigin = origem;
  dragPayload = {
    item,
    fromPool: origem === "pool",
    fromPlayer: playerIndex,
    fromType: origem === "board" ? getItemType(item) : null,
    fromIndex: slotIndex
  };
  dragStartX = e.clientX;
  dragStartY = e.clientY;
  dragMoved = false;
  document.addEventListener("mousemove", rastrearDrag);
  document.addEventListener("mouseup", finalizarDrag);
}

//f:rastrearDrag
function rastrearDrag(e) {
  if (dragStartX === null || dragStartY === null) return;
  const dx = e.clientX - dragStartX;
  const dy = e.clientY - dragStartY;
  if (!dragMoved && Math.hypot(dx, dy) >= 8) {
    dragMoved = true;
    ghostCard = criarGhostCard(draggedElement);
  }
  if (!ghostCard) return;
  ghostCard.style.left = e.clientX + "px";
  ghostCard.style.top = e.clientY + "px";
}

//f:finalizarDrag
function finalizarDrag(e) {
  document.removeEventListener("mousemove", rastrearDrag);
  document.removeEventListener("mouseup", finalizarDrag);
  //verifica qual elemento está sob o cursor
  const elementoAlvo = document.elementFromPoint(e.clientX, e.clientY);
  const wasDragged = dragMoved;
  if (ghostCard) {
    document.body.removeChild(ghostCard);
    ghostCard = null;
  }
  if (wasDragged) {
    justDragged = true;
    setTimeout(() => { justDragged = false; }, 0);
    if (elementoAlvo) {
      //procura o slot ou pool mais próximo
      let slot = elementoAlvo.closest(".slot");
      let poolDiv = elementoAlvo.closest(".simPoolCards");
      if (slot) {
        //drop em um slot
        executarDropNoSlot(slot, dragPayload);
      } else if (poolDiv) {
        //drop no pool (devolve item)
        executarDropNoPool(poolDiv, dragPayload);
      }
    }
  }
  draggedItem = null;
  draggedElement = null;
  dragOrigin = null;
  dragPayload = null;
  dragStartX = null;
  dragStartY = null;
  dragMoved = false;
}

// =====================
// BTS - MIC DROP
// =====================

//f:getItemType
function getItemType(item) {
  return item?.type?.toString().toLowerCase();
}

//f:executarDropNoSlot
function executarDropNoSlot(slot, data) {
  if (!data) return;
  const tipo = slot.dataset.tipo;
  const pi = slot.dataset.pi;
  const slotIndex = Number(slot.dataset.idx);
  if (!tipo || pi === undefined || Number.isNaN(slotIndex)) return;
  if (data.fromPool) {
    const item = data.item;
    if (getItemType(item) !== tipo) return;
    if (String(data.fromPlayer) !== String(pi)) return;
    const current = boardSlots[pi][tipo][slotIndex];
    if (current) {
      poolCards[pi].push(current);
    }
    boardSlots[pi][tipo][slotIndex] = item;
    poolCards[pi] = poolCards[pi].filter(c => c.id !== item.id);
    render();
    return;
  }
  if (data.fromPlayer !== undefined) {
    const fromPI = data.fromPlayer;
    const fromType = data.fromType;
    const fromIndex = Number(data.fromIndex);
    if (String(fromPI) !== String(pi)) return;
    if (fromType !== tipo) return;
    if (Number.isNaN(fromIndex)) return;
    if (fromIndex === slotIndex) return;
    const origemItem = boardSlots[fromPI][fromType][fromIndex];
    if (!origemItem || getItemType(origemItem) !== tipo) return;
    const destinoItem = boardSlots[pi][tipo][slotIndex];
    boardSlots[fromPI][fromType][fromIndex] = null;
    boardSlots[pi][tipo][slotIndex] = origemItem;
    if (destinoItem) {
      boardSlots[fromPI][fromType][fromIndex] = destinoItem;
    }
    render();
  }
}

//f:executarDropNoPool
function executarDropNoPool(poolDiv, data) {
  if (!data || data.fromPlayer === undefined || !poolDiv.dataset.pi) return;
  const pi = poolDiv.dataset.pi;
  if (String(data.fromPlayer) !== String(pi)) return;
  const tipo = data.fromType;
  const fromIndex = Number(data.fromIndex);
  if (!tipo || Number.isNaN(fromIndex)) return;
  const item = boardSlots[pi][tipo][fromIndex];
  if (!item) return;
  boardSlots[pi][tipo][fromIndex] = null;
  poolCards[pi].push(item);
  render();
}

// =====================
// RENDER
// =====================

//f:render
function render() {
  const container = document.getElementById("simBoard");
  container.innerHTML = "";
  simData.ordem.forEach((pi, pos) => {
    const nome     = simData.jogadores[pi];
    const isLocked = lockedPlayers[pi];
    const section = document.createElement("div");
  section.className = "simSection";
  // Linha do jogador
  const playerRow = document.createElement("div");
  playerRow.className = "simPlayerRow";
  const meta = document.createElement("div");
  meta.className = "simMeta";
  meta.innerHTML = `<span class="simPos">${pos+1}º</span><span class="simName">${nome}</span>`;
    playerRow.appendChild(meta);
    // Board de idols
    const idolBoard = document.createElement("div");
    idolBoard.className = "simIdolBoard";
    const idolTitle = document.createElement("div");
    idolTitle.className = "simBoardTitle";
    idolTitle.innerText = t("sim_formacao");
    idolBoard.appendChild(idolTitle);
    const idolSlotsRow = document.createElement("div");
    idolSlotsRow.className = "simBoardSlots";
    boardSlots[pi].idol.forEach((item, idx) => {
      idolSlotsRow.appendChild(criarSlotWrapper(pi, "idol", idx, item, isLocked));
    });
    idolBoard.appendChild(idolSlotsRow);
    playerRow.appendChild(idolBoard);
    // Extras
    const extras = document.createElement("div");
    extras.className = "simExtras";
    if (simData.config.usarMusica && boardSlots[pi].music.length > 0) {
      const box = criarExtraBox(t("board_musica"), "simMusicBox");
      box.appendChild(criarSlotWrapper(pi, "music", 0, boardSlots[pi].music[0], isLocked));
      extras.appendChild(box);
    }
    if (simData.config.usarProdutor && boardSlots[pi].producer.length > 0) {
      const box = criarExtraBox(t("board_produtor"), "simProducerBox");
      box.appendChild(criarSlotWrapper(pi, "producer", 0, boardSlots[pi].producer[0], isLocked));
      extras.appendChild(box);
    }
    playerRow.appendChild(extras);
    // Botão travar
    const btn = document.createElement("button");
    const pronto = podeTravar(pi);
    btn.className = "btnTravar" + (isLocked ? " btnTravado" : "") + (!pronto ? " btnDesabilitado" : "");
    btn.innerText = isLocked ? t("btn_travado") : t("btn_travar_escolha");
    btn.disabled  = isLocked;
    if (!isLocked && !pronto) btn.title = t("sim_tooltip_travar");
    btn.onclick   = () => {
      if (pronto) {
        lockedPlayers[pi] = true;
        render();
      } else {
        mostrarMensagemErro(pi, t("sim_erro_travar"));
      }
    };
    const btnWrapper = document.createElement("div");
    btnWrapper.className = "btnTravarWrapper";

    const msgErro = document.createElement("div");
    msgErro.className = "simMensagemErro";
    msgErro.id = `msgErro-${pi}`;
    msgErro.style.display = "none";
    btnWrapper.appendChild(msgErro);

    btnWrapper.appendChild(btn);
    playerRow.appendChild(btnWrapper);
    section.appendChild(playerRow);
    // Pool pessoal
    const poolSection = document.createElement("div");
    poolSection.className = "simPoolSection";
    const poolHeader = document.createElement("div");
    poolHeader.className = "simPoolHeader";
    poolHeader.innerText = `${t("sim_pool_pessoal_de")}${nome}`;
    poolSection.appendChild(poolHeader);

    const poolWrap = document.createElement("div");
    poolWrap.className = "simPoolCards";
    poolWrap.dataset.pi = pi;

    poolCards[pi].forEach((item, idx) => {
      const wrap = document.createElement("div");
      wrap.className = "simPoolCardWrap";
      const card = criarCard(item, isLocked, "pool", pi, idx);
      wrap.appendChild(card);
      poolWrap.appendChild(wrap);
    });
    injetarBotaoResultado();
    poolSection.appendChild(poolWrap);
    section.appendChild(poolSection);
    container.appendChild(section);
  });
}

// =====================
// AJUDANTES DE RENDER
// =====================

//f:criarExtraBox
function criarExtraBox(titulo, className) {
  const box = document.createElement("div");
  box.className = "simExtraBox " + className;
  const titleEl = document.createElement("div");
  titleEl.className = "simExtraTitle";
  titleEl.innerText = titulo;
  box.appendChild(titleEl);
  return box;
}

//f:criarSlotWrapper
function criarSlotWrapper(pi, tipo, idx, item, isLocked) {
  const wrapper = document.createElement("div");
  wrapper.className = "simSlotWrapper";
  const select = document.createElement("select");
  select.className = "roleSelect";
  select.disabled = isLocked;
  const currentRole = roleBoard[pi][tipo][idx] || "—";
  const opcoes = tipo === "idol" ? ROLE_OPTIONS_IDOL
             : tipo === "music" ? ROLE_OPTIONS_MUSIC
             : ROLE_OPTIONS_PRODUCER;
  opcoes.forEach(opt => {
    const o = document.createElement("option");
    o.value = opt;
    o.text  = ROLE_PLACEHOLDER_KEYS[opt] ? t(ROLE_PLACEHOLDER_KEYS[opt]) : getRoleDisplay(pi, tipo, idx, opt);
    if (opt === currentRole) o.selected = true;
    select.appendChild(o);
  });
  select.onchange = () => {
    roleBoard[pi][tipo][idx] = select.value;
    render();
  };
  const slot = document.createElement("div");
  slot.className = "slot simBoardSlot";
  slot.dataset.pi   = pi;
  slot.dataset.tipo = tipo;
  slot.dataset.idx  = idx;
  if (item) {
    const card = criarCard(item, isLocked, "board", pi, idx);
    slot.appendChild(card);
  }
  wrapper.appendChild(select);
  wrapper.appendChild(slot);
  return wrapper;
}

// =====================
// ROLE DISPLAY NUMERADO
// =====================

//f:getRoleDisplay
function getRoleDisplay(pi, tipo, idx, opt) {
  if (!NUMBERED_ROLES.includes(opt)) return opt;
  let count = 0;
  (roleBoard[pi][tipo] || []).forEach((r, i) => {
    if (r === opt && i <= idx) count++;
  });
  return count > 0 ? `${opt} ${count}` : opt;
}

// =====================
// IMAGENS
// =====================

//f:sanitizeSlug
function sanitizeSlug(text) {
  return text.toString().trim()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .toLowerCase().replace(/[^a-z0-9]+/g, "")
    .replace(/^-+|-+$/g, "");
}

//f:getCardImageCandidates
function getCardImageCandidates(item) {
  const itemType = getItemType(item);
  const candidates = [];
  const idSlug   = sanitizeSlug(item.id || item.name);
  const nameSlug = item.name;

  if (itemType === "idol") {
    const groupSlug = item.group;
    const query = encodeURIComponent(`${groupSlug} ${nameSlug}`);
    candidates.push(`../assets/draft-cards/idol_${idSlug}.jpg`);
    candidates.push(`../assets/draft-cards/idol_${idSlug}.png`);
    candidates.push(`../assets/draft-cards/idol_${idSlug}.jpeg`);
    candidates.push(`https://dummyimage.com/160x200/ffff00/000000&text=${query}`);
    candidates.push(`https://via.placeholder.com/160x200/ffff00/000000?text=${query}`);
    return candidates;
  }

  if (itemType === "music") {
    const fonteSlug = sanitizeSlug(item.fonte || "");
    const query = encodeURIComponent(`${fonteSlug} ${nameSlug}`);
    if (fonteSlug) {
      candidates.push(`../assets/draft-cards/music_${idSlug}.jpg`);
      candidates.push(`../assets/draft-cards/music_${idSlug}.png`);
      candidates.push(`../assets/draft-cards/music_${idSlug}.jpeg`);
    }
    candidates.push(`https://dummyimage.com/160x200/0000ff/ffffff&text=${query}`);
    candidates.push(`https://via.placeholder.com/160x200/0000ff/ffffff?text=${query}`);
    return candidates;
  }

  if (itemType === "producer") {
    const query = encodeURIComponent(`Producer ${nameSlug}`);
    candidates.push(`../assets/draft-cards/producer_${idSlug}.jpg`);
    candidates.push(`../assets/draft-cards/producer_${idSlug}.png`);
    candidates.push(`../assets/draft-cards/producer_${idSlug}.jpeg`);
    candidates.push(`https://dummyimage.com/160x200/800080/ffffff&text=${query}`);
    candidates.push(`https://via.placeholder.com/160x200/800080/ffffff?text=${query}`);
    return candidates;
  }

  candidates.push(`../assets/draft-cards/${itemType}_${idSlug}.jpg`);
  candidates.push(`../assets/draft-cards/${itemType}_${idSlug}.png`);
  return candidates;
}

// =====================
// CARD
// =====================

//f:criarCard
function criarCard(item, isLocked = false, origem = "pool", pi = null, idx = null) {
  // Limpa aspas extras dos dados
  const cleanText = val => {
    if (!val) return "";
    return val.toString().replace(/"{3}/g, '"').replace(/^["']|["']$/g, "").trim();
  };
  const card = document.createElement("div");
  card.className = "card";
  const itemType = getItemType(item);
  // Type colour coded lyrics
  if (itemType === "idol")     card.classList.add("card-idol");
  if (itemType === "music")    card.classList.add("card-music");
  if (itemType === "producer") card.classList.add("card-producer");
  if (isLocked) card.classList.add("locked");
  // Imagem com fallback chain
  const candidates = getCardImageCandidates(item);
  let candidateIndex = 0;
  const img = document.createElement("img");
  img.src = candidates[0];
  img.onerror = () => {
    candidateIndex++;
    if (candidateIndex < candidates.length) {
      img.src = candidates[candidateIndex];
      return;
    }
    img.onerror = null;
    const fn = item.name.toString().replace(/\s+/g,"_").replace(/[^a-zA-Z0-9_\-]/g,"");
    if (itemType === "idol") {
      const fg = item.group.toString().replace(/\s+/g,"_").replace(/[^a-zA-Z0-9_\-]/g,"");
      img.src = `../assets/draft-cards/idol_${fg}_${fn}.jpg`;
    } else {
      img.src = `../assets/draft-cards/${itemType}_${fn}.jpg`;
    }
  };
  card.appendChild(img);
  const label = document.createElement("div");
  label.className = "cardLabel";
  // Estruturar informações baseado no tipo
  if (itemType === "idol") {
    label.innerHTML = `<div class="cardInfo">${cleanText(item.group)}</div><div class="cardName">${item.name}</div>`;
  } else if (itemType === "music") {
    label.innerHTML = `<div class="cardInfo">${cleanText(item.fonte)}</div><div class="cardName">${item.name}</div>`;
  } else if (itemType === "producer") {
    label.innerHTML = `<div class="cardInfo">producer</div><div class="cardName">${item.name}</div>`;
  } else {
    label.innerText = item.name;
  }
  card.appendChild(label);
  // Drag
  card.style.cursor = "grab";
  card.addEventListener("mousedown", e => {
    if (e.button !== 0) return;
    iniciarDrag(e, item, origem, pi, idx);
  });
  // Modal
  card.addEventListener("click", () => {
    if (justDragged) { justDragged = false; return; }
    abrirModal(item);
  });
  return card;
}

// =====================
// MODAL
// =====================

//f:abrirModal
function abrirModal(item) {
  const modal = document.getElementById("modal");
  if (!modal) return;
  modal.style.display = "flex";
  const itemType = getItemType(item);
  const cleanText = val => {
    if (!val || (Array.isArray(val) && !val.length)) return "-";
    if (Array.isArray(val)) return val.join(", ");
    return val.toString().replace(/"{3}/g, '"').replace(/^['"]|['"]$/g, "").trim();
  };
  const listText = val => {
    if (!val || (Array.isArray(val) && !val.length)) return "-";
    if (Array.isArray(val)) return val.join("<br>");
    return val.toString().replace(/"{3}/g, '"').replace(/^['"]|['"]$/g, "").trim();
  };
  let bodyContent = "";
  if (itemType === "idol") {
    bodyContent = `
      <p><b>${t("modal_grupo")}:</b> ${cleanText(item.group)}</p>
      <p><b>${t("modal_aniversario")}:</b> ${cleanText(item.aniversario)}</p>
      <p><b>${t("modal_vocal")}:</b> ${cleanText(item.vocal)}</p>
      <p><b>${t("modal_dance")}:</b> ${cleanText(item.dance)}</p>
      <p><b>${t("modal_rap")}:</b> ${cleanText(item.rap)}</p>
      <p><b>${t("modal_center")}:</b> ${cleanText(item.center)}</p>
      <p><b>${t("modal_visual")}:</b> ${cleanText(item.visual)}</p>
      <p><b>${t("modal_especialidade")}:</b> ${cleanText(item.especialidade)}</p>
      <p><b>${t("modal_conceitos_predominantes")}:</b> ${cleanText(item.conceitos)}</p>
      <p><b>${t("modal_generos_predominantes")}:</b> ${cleanText(item.generos)}</p>
      <p><b>${t("modal_pontos_fortes")}:</b> ${cleanText(item.fortes)}</p>
      <p><b>${t("modal_pontos_fracos")}:</b> ${cleanText(item.fracos)}</p>
    `;
  } else if (itemType === "music") {
    bodyContent = `
      <p><b>${t("modal_fonte")}:</b> ${cleanText(item.fonte)}</p>
      <p><b>${t("modal_conceitos_originais")}:</b> ${cleanText(item.conceitos)}</p>
      <p><b>${t("modal_generos_originais")}:</b> ${cleanText(item.generos)}</p>
    `;
  } else if (itemType === "producer") {
    bodyContent = `
      <p><b>${t("modal_conceitos_predominantes")}:</b> ${cleanText(item.conceitos)}</p>
      <p><b>${t("modal_generos_predominantes")}:</b> ${cleanText(item.generos)}</p>
      <p><b>${t("modal_musicas_conhecidas")}:</b><br> ${listText(item.musicas)}</p>
    `;
  }
  modal.innerHTML = `
    <div class="modalContent">
      <img src="${getCardImageCandidates(item)[0]}" class="modalImg"
           onerror="this.onerror=null;this.src='';">
      <div class="modalBody">
        <span class="closeBtn" onclick="fecharModal()">✕</span>
        <h2>${cleanText(item.name)}</h2>
        ${bodyContent}
      </div>
    </div>
  `;
  modal.onclick = e => { if (e.target === modal) fecharModal(); };
}

//f:fecharModal
function fecharModal() {
  const modal = document.getElementById("modal");
  if (modal) modal.style.display = "none";
}

//f:podeTravar
function podeTravar(pi) {
  const slots = boardSlots[pi];
  const roles = roleBoard[pi];
  for (const tipo of ["idol", "music", "producer"]) {
    for (let i = 0; i < (slots[tipo] || []).length; i++) {
      if (!slots[tipo][i]) return false;
      if (!roles[tipo][i] || roles[tipo][i] === "—") return false;
    }
  }
  return true;
}

//f:mostrarMensagemErro
function mostrarMensagemErro(pi, mensagem) {
  const msgElement = document.getElementById(`msgErro-${pi}`);
  if (msgElement) {
    msgElement.innerText = mensagem;
    msgElement.style.display = "block";
    // Esconder após 5 segundos
    setTimeout(() => {
      msgElement.style.display = "none";
    }, 5000);
  }
}

// =====================
// CÁLCULOS
// =====================

//f:todosTravados
function todosTravados() {
  return simData.ordem.every(pi => lockedPlayers[pi]);
}

//f:injetarBotaoResultado
function injetarBotaoResultado() {
  const jaExiste = document.getElementById("btnResultado");

  // Mantém toda a lógica de cálculo disponível, mas não cria nem exibe a interface
  // de Score enquanto a configuração estiver desativada.
  if (!MOSTRAR_SCORE) {
    jaExiste?.remove();
    document.getElementById("resultadoContainer")?.remove();
    return;
  }

  // Só mostra se todos estiverem travados
  if (!todosTravados()) {
    if (jaExiste) jaExiste.style.display = "none";
    return;
  }

  if (jaExiste) {
    jaExiste.innerText = t("sim_calcular_resultado");
    jaExiste.style.display = "";
    return;
  }

  const btn = document.createElement("button");
  btn.id        = "btnResultado";
  btn.innerText = t("sim_calcular_resultado");
  btn.style.cssText = `
    display:block; 
    margin: 20px auto 0;
    background-color:#7e22ce; 
    border:2px solid yellow;
    color:white; 
    padding:12px 32px; 
    font-size:15px;
    border-radius:6px; 
    cursor:pointer;
  `;
  btn.onmouseover = () => btn.style.backgroundColor = "#6b21a8";
  btn.onmouseout  = () => btn.style.backgroundColor = "#7e22ce";
  btn.onclick     = mostrarResultados;
  document.getElementById("simBoard").after(btn);

  // Container de resultados (criado uma vez)
  if (!document.getElementById("resultadoContainer")) {
    const container = document.createElement("div");
    container.id        = "resultadoContainer";
    container.style.cssText = `
      max-width:700px; margin:30px auto; padding:20px;
      background:#1c1c1c; border:1px solid #333; border-radius:10px;
    `;
    btn.after(container);
  }
}

//f:mostrarResultados
function mostrarResultados() {
  const container = document.getElementById("resultadoContainer");
  if (!container) return;
  container.innerHTML = "";

  const titulo = document.createElement("h2");
  titulo.style.cssText = "text-align:center; color:#a855f7; margin-bottom:20px;";
  titulo.innerText = t("sim_resultado_final");
  container.appendChild(titulo);

  const resultados = simData.ordem.map(pi => ({
    nome:  simData.jogadores[pi],
    pi,
    score: calcularScore(pi)
  }));

  resultados.sort((a, b) => b.score - a.score);

  const medalhas = ["🥇","🥈","🥉"];

  resultados.forEach((player, i) => {
    const linha = document.createElement("div");
    linha.style.cssText = `
      display:flex; align-items:center; justify-content:space-between;
      padding:12px 16px; margin-bottom:8px; border-radius:8px;
      background:${i === 0 ? "rgba(168,85,247,0.15)" : "#222"};
      border:1px solid ${i === 0 ? "#a855f7" : "#333"};
    `;

    const detalhes = montarDetalhesScore(player.pi);

    linha.innerHTML = `
      <span style="font-size:22px; min-width:36px;">${medalhas[i] || `${i+1}º`}</span>
      <span style="flex:1; font-weight:bold; font-size:16px; color:#fff;">${player.nome}</span>
      <span style="font-size:20px; font-weight:900; color:#a855f7;">${player.score} pts</span>
    `;

    // Detalhe expansível
    const detalheBtn = document.createElement("button");
    detalheBtn.innerText = t("sim_detalhes");
    detalheBtn.style.cssText = `
      margin-left:12px; background:#333; color:#ccc; border:none;
      padding:4px 10px; border-radius:4px; cursor:pointer; font-size:12px;
    `;

    const detalheDiv = document.createElement("div");
    detalheDiv.style.cssText = `
      display:none; grid-column:1/-1; padding:10px 0 0;
      font-size:12px; color:#aaa; line-height:1.8;
      border-top:1px solid #333; margin-top:8px;
    `;
    detalheDiv.innerHTML = detalhes;

    detalheBtn.onclick = () => {
      const aberto = detalheDiv.style.display !== "none";
      detalheDiv.style.display = aberto ? "none" : "block";
      detalheBtn.innerText = aberto ? t("sim_detalhes") : t("sim_fechar");
    };

    linha.appendChild(detalheBtn);

    const wrapper = document.createElement("div");
    wrapper.style.cssText = "margin-bottom:8px;";
    wrapper.appendChild(linha);
    wrapper.appendChild(detalheDiv);
    container.appendChild(wrapper);
  });
}

//f:pegarMultiplicador
function pegarMultiplicador(role, atributo) {
  const MAIN = 1.25, 
        LEAD = 1.15,  
        NONE = 1.0, 
        MAIN_RAP = 1.35,
        LEAD_RAP = 1.25;

  if (atributo === "vocal") {
    if (role === "Main Vocal")  return MAIN;
    if (role === "Lead Vocal")  return LEAD;
    return NONE;
  }

  if (atributo === "dance") {
    if (role === "Main Dancer") return MAIN;
    if (role === "Lead Dancer") return LEAD;
    return NONE;
  }

  if (atributo === "rap") {
    if (role === "Main Rapper") return MAIN_RAP;
    if (role === "Lead Rapper") return LEAD_RAP;
    return NONE;
  }

  if (atributo === "center") {
    if (role === "Center") return MAIN;
    return NONE;
  }

  if (atributo === "visual") {
    if (role === "Visual") return MAIN;
    return NONE;
  }
  return NONE;
}

//f:pegarMultiplicadorEspecialidade
function pegarMultiplicadorEspecialidade(role, atributo, especialidade) {
  if (!especialidade) return 1.0;
  const esp = especialidade.toString().toLowerCase();

  // Mapeia cada role para o atributo que ela representa.
  const ROLE_ATTR = {
    "Main Vocal": "vocal",  "Lead Vocal": "vocal",
    "Main Dancer": "dance", "Lead Dancer": "dance",
    "Main Rapper": "rap",   "Lead Rapper": "rap",
    "Center": "center",
    "Visual": "visual"
  };

  // All-rounder não depende de role específica.
  const aplicarAllRounder = () => {
    if (esp !== "all-rounder") return 1.0;
    if (["vocal", "dance", "rap", "visual"].includes(atributo)) return 1.07;
    if (atributo === "center") return 1.10;
    return 1.0;
  };

  // O bônus de especialidade só se aplica se a idol estiver alocada numa
  // role que corresponda ao MESMO atributo da especialidade dela — evita
  // que "Main Vocal" com especialidade "Rap" receba bônus na coluna de rap.
  if (ROLE_ATTR[role] !== atributo) {
    return aplicarAllRounder();
  }

  const matchDireto = esp === atributo;
  if (matchDireto) {
    if (role === "Center" || role === "Visual") return 1.20;
    if (role.startsWith("Main")) return 1.20;
    if (role.startsWith("Lead")) return 1.15;
  }

  const allRounderMult = aplicarAllRounder();
  if (allRounderMult > 1) return allRounderMult;

  return 1.0;
}

//f:temMatch
function temMatch(array1, array2) {
  if (!Array.isArray(array1) || !Array.isArray(array2)) return false;
  const norm = v => v.toString().toLowerCase().trim();
  const set2 = new Set(array2.map(norm));
  return array1.some(v => set2.has(norm(v)));
}

//f:contarMatches
function contarMatches(array1, array2) {
  return array1.filter(v => array2.includes(v)).length;
}

//f:calcularScore
function calcularScore(pi) {
  const RANK_VALUE = { S:100, A:90, B:80, C:70, D:60 };

  function pegarRank(rank) {
    return RANK_VALUE[rank?.toString().trim().toUpperCase()] ?? 70;
  }

  function contarRoles(roles) {
    const count = {};
    roles.forEach(r => {
      if (!r) return;
      count[r] = (count[r] || 0) + 1;
    });
    return count;
  }

  function ajustarMultiplicador(base, role, roleCount, rank) {
    const qtd = roleCount[role] || 0;

    if (qtd === 1) return base;

    if (qtd === 2) {
      const r = rank?.toString().toUpperCase();
      const fator = (r === "S" || r === "A") ? 0.85 : 0.7;
      return 1 + ((base - 1) * fator);
    }

    if (qtd >= 3) return 1.0;

    return base;
  }

  let total = 0;

  const idols     = boardSlots[pi].idol     || [];
  const rolesIdol = roleBoard[pi].idol      || [];
  const musica    = (boardSlots[pi].music || [])[0] || null;
  const produtor  = (boardSlots[pi].producer || [])[0] || null;
  const roleMusic = roleBoard[pi].music?.[0] || "—";

  const roleCount = contarRoles(rolesIdol);

  // =========================
  // INDIVIDUAL
  // =========================
  idols.forEach((idol, i) => {
    if (!idol) return;

    const role = rolesIdol[i] || "Posição";

    const vocal = pegarRank(idol.vocal) *
      ajustarMultiplicador(pegarMultiplicador(role,"vocal"), role, roleCount, idol.vocal) * pegarMultiplicadorEspecialidade(role, "vocal", idol.especialidade);

    const dance = pegarRank(idol.dance) *
      ajustarMultiplicador(pegarMultiplicador(role,"dance"), role, roleCount, idol.dance) * pegarMultiplicadorEspecialidade(role, "dance", idol.especialidade);

    const rap = pegarRank(idol.rap) *
      ajustarMultiplicador(pegarMultiplicador(role,"rap"), role, roleCount, idol.rap) * pegarMultiplicadorEspecialidade(role, "rap", idol.especialidade);

    const center = pegarRank(idol.center) *
      ajustarMultiplicador(pegarMultiplicador(role,"center"), role, roleCount, idol.center) * pegarMultiplicadorEspecialidade(role, "center", idol.especialidade);

    const visual = pegarRank(idol.visual) *
      ajustarMultiplicador(pegarMultiplicador(role,"visual"), role, roleCount, idol.visual) * pegarMultiplicadorEspecialidade(role, "visual", idol.especialidade);

    let media = (vocal + dance + rap + center + visual) / 5;
    
    //OLHAR AQUI
    // sinergia individual
    if (produtor) {
      const conceitoProd = produtor.conceitos || [];
      const conceitoIdol = idol.conceitos || [];

      if (temMatch(conceitoIdol, conceitoProd)) {
        media *= 1.05;
      }

      if (musica) {
        const generoMusic = musica.generos || [];
        const generosIdol = idol.generos || [];
        if (temMatch(generosIdol, generoMusic)){
          media *= 1.05;
        }
      }
    }
    total += media;
  });

  
  // =========================
  // GLOBAL
  // =========================
  const qtdIdols = idols.filter(Boolean).length || 1;

  if (produtor) {
    const conceitoProd  = produtor.conceitos || [];
    const matchesConceito = idols.filter(idol => 
      temMatch(idol.conceitos || [], conceitoProd)
    ).length;

    if (matchesConceito === qtdIdols) {
      total *= 1.10;
    } else if (matchesConceito >= Math.ceil(qtdIdols * 0.5)) {
      total *= 1.05;
    }
  }

  if (musica) {
    const generoMusic = musica.generos || [];
    const matchesGenero = idols.filter(idol => 
      temMatch(idol.generos || [], generoMusic)
    ).length;
    if (matchesGenero === qtdIdols) {
      total *= 1.10;
    } else if (matchesGenero >= Math.ceil(qtdIdols * 0.5)) {
      total *= 1.05;
    }
  }
  // múltiplos centers
  const centerCount = rolesIdol.filter(r => r === "Center").length;
  if (centerCount > 1) total *= 0.9;

  return Math.round(total);
}

//f:montarDetalhesScore
function montarDetalhesScore(pi) {
  const RANK_VALUE = { S:100, A:90, B:80, C:70, D:60 };

  function pegarRank(rank) {
    return RANK_VALUE[rank?.toString().trim().toUpperCase()] ?? 70;
  }

  function contarRoles(roles) {
    const count = {};
    roles.forEach(r => {
      if (!r) return;
      count[r] = (count[r] || 0) + 1;
    });
    return count;
  }

  function ajustarMultiplicador(base, role, roleCount, rank) {
    const qtd = roleCount[role] || 0;

    if (qtd === 1) return base;

    if (qtd === 2) {
      const r = rank?.toString().toUpperCase();
      const fator = (r === "S" || r === "A") ? 0.85 : 0.7;
      return 1 + ((base - 1) * fator);
    }

    if (qtd >= 3) return 1.0;

    return base;
  }

  const idols     = boardSlots[pi].idol     || [];
  const rolesIdol = roleBoard[pi].idol      || [];
  const musica    = (boardSlots[pi].music || [])[0] || null;
  const produtor  = (boardSlots[pi].producer || [])[0] || null;

  const roleCount = contarRoles(rolesIdol);

  let linhas = [];
  let totalGrupo = 0;

  // =========================
  // INDIVIDUAL
  // =========================
  idols.forEach((idol, i) => {
    if (!idol) return;

    const role = rolesIdol[i] || "Posição";

    const base =
      (pegarRank(idol.vocal) +
       pegarRank(idol.dance) +
       pegarRank(idol.rap) +
       pegarRank(idol.center) +
       pegarRank(idol.visual)) / 5;

    let teveEspecialidade = false;

    function calc(attr, usarEsp = true) {
      const rank = pegarRank(idol[attr]);

      const multRole = ajustarMultiplicador(
        pegarMultiplicador(role, attr),
        role,
        roleCount,
        idol[attr]
      );

      let multEsp = 1;

      if (usarEsp) {
        multEsp = pegarMultiplicadorEspecialidade(
          role,
          attr,
          idol.especialidade
        );

        if (multEsp > 1) teveEspecialidade = true;
      }

      return rank * multRole * multEsp;
    }

    // posição SEM especialidade
    const posSemEsp =
      (calc("vocal", false) +
       calc("dance", false) +
       calc("rap", false) +
       calc("center", false) +
       calc("visual", false)) / 5;

    // posição FINAL (com especialidade)
    const posicao =
      (calc("vocal") +
       calc("dance") +
       calc("rap") +
       calc("center") +
       calc("visual")) / 5;

    let individual = posicao;
    let bonus = [];

    // =========================
    // SINERGIA INDIVIDUAL
    // =========================
    if (produtor) {
      if (temMatch(idol.conceitos || [], produtor.conceitos || [])) {
        individual *= 1.05;
        bonus.push(t("score_bonus_conceito"));
      }

      if (musica) {
        if (temMatch(idol.generos || [], musica.generos || [])) {
          individual *= 1.05;
          bonus.push(t("score_bonus_genero"));
        }
      }
    }

    totalGrupo += individual;

    // =========================
    // % EXTRAS
    // =========================
    function calcPercent(novo, antigo) {
      if (!antigo) return 0;
      return ((novo / antigo) - 1) * 100;
    }

    let extras = [];

    const pctPos = calcPercent(posSemEsp, base);
    if (Math.abs(pctPos) > 0.1) {
      extras.push(`+${pctPos.toFixed(0)}% ${t("score_posicao")}`);
    }

    const pctEsp = calcPercent(posicao, posSemEsp);
    if (teveEspecialidade && Math.abs(pctEsp) > 0.1) {
      extras.push(`+${pctEsp.toFixed(0)}% ${t("score_especialidade")}`);
    }

    // =========================
    // LINHA FINAL
    // =========================
    linhas.push(
      `<b>${idol.name}</b> (${role})<br>
       ${t("score_base")} ${base.toFixed(2)} → ${t("score_score")} ${individual.toFixed(2)}
       ${(extras.length || bonus.length)
         ? `(${[...extras, ...bonus].join(", ")})`
         : ""}`
    );
  });

  // =========================
  // GLOBAL
  // =========================
  let final = totalGrupo;
  let global = [];

  const qtdIdols = idols.filter(Boolean).length;

  if (produtor) {
    const matchesConceito = idols.filter(idol =>
      temMatch(idol.conceitos || [], produtor.conceitos || [])
    ).length;

    if (matchesConceito === qtdIdols) {
      final *= 1.10;
      global.push(t("score_bonus_conceito_total"));
    } else if (matchesConceito >= Math.ceil(qtdIdols * 0.5)) {
      final *= 1.05;
      global.push(t("score_bonus_conceito_parcial"));
    }
  }

  if (musica) {
    const matchesGenero = idols.filter(idol =>
      temMatch(idol.generos || [], musica.generos || [])
    ).length;

    if (matchesGenero === qtdIdols) {
      final *= 1.10;
      global.push(t("score_bonus_genero_total"));
    } else if (matchesGenero >= Math.ceil(qtdIdols * 0.5)) {
      final *= 1.05;
      global.push(t("score_bonus_genero_parcial"));
    }
  }

  const centerCount = rolesIdol.filter(r => r === "Center").length;
  if (centerCount > 1) {
    final *= 0.9;
    global.push(t("score_multiplos_centers"));
  }

  // =========================
  // RESUMO FINAL
  // =========================
  linhas.push(
    `<br>${t("score_base_grupo")} ${totalGrupo.toFixed(2)} → ${t("score_grupo")} ${final.toFixed(2)} ${
      global.length ? `(${global.join(", ")})` : ""
    }`
  );

  linhas.push(`<b>${t("score_final")}: ${final.toFixed(2)}</b>`);

  return linhas.join("<br>");
}

//tá lendo isso por quê, curioso?
