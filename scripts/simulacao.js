// =============================
// CONSTANTES VARIÁVEIS GLOBAIS
// =============================
const ROLE_OPTIONS_IDOL = ["Posição","Main Vocal","Sub-vocal","Main Dancer","Lead Dancer","Main Rapper","Lead Rapper","Visual","Center"];
const ROLE_OPTIONS_MUSIC = ["Gênero","EDM","Electro/Synth","Emotional","Experimental","Groove","Hip-Hop","Pop","R&B","Rock","Tropical"];
const ROLE_OPTIONS_PRODUCER = ["Conceito","Conceptual","Cute","Dark","Dreamcore","Elegant","Girl Crush","Mature","Performance","Swag","Teen Crush"];
const NUMBERED_ROLES = ["Sub-vocal","Lead Dancer","Lead Rapper"];
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
    const cards = [];
    if (p) {
      (p.idol     || []).forEach(c => { if (c) cards.push({...c}); });
      (p.music    || []).forEach(c => { if (c) cards.push({...c}); });
      (p.producer || []).forEach(c => { if (c) cards.push({...c}); });
    }
    poolCards[pi]  = cards;
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
    idolTitle.innerText = "Formação";
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
      const box = criarExtraBox("Música", "simMusicBox");
      box.appendChild(criarSlotWrapper(pi, "music", 0, boardSlots[pi].music[0], isLocked));
      extras.appendChild(box);
    }
    if (simData.config.usarProdutor && boardSlots[pi].producer.length > 0) {
      const box = criarExtraBox("Produtor", "simProducerBox");
      box.appendChild(criarSlotWrapper(pi, "producer", 0, boardSlots[pi].producer[0], isLocked));
      extras.appendChild(box);
    }
    playerRow.appendChild(extras);
    // Botão travar
    const btnWrapper = document.createElement("div");
    btnWrapper.className = "btnTravarWrapper";
    const msgErro = document.createElement("div");
    msgErro.className = "simMensagemErro";
    msgErro.innerText = "Preencha todos os slots e defina todos os papéis antes de travar.";
    const btn = document.createElement("button");
    const pronto = podeTravar(pi);
    btn.className = "btnTravar" + (isLocked ? " btnTravado" : !pronto ? " btnDesabilitado" : "");
    btn.innerText = isLocked ? "🔒 Travado" : "Travar Escolha";
    btn.disabled  = isLocked;
    btn.onclick = () => {
      if (isLocked) return;
      if (!podeTravar(pi)) {
        msgErro.style.display = "block";
        clearTimeout(msgErro._timeout);
        msgErro._timeout = setTimeout(() => { msgErro.style.display = "none"; }, 3000);
        return;
      }
      lockedPlayers[pi] = true;
      render();
    };
    btnWrapper.appendChild(msgErro);
    btnWrapper.appendChild(btn);
    playerRow.appendChild(btnWrapper);
    section.appendChild(playerRow);
    // Pool pessoal
    const poolSection = document.createElement("div");
    poolSection.className = "simPoolSection";
    const poolHeader = document.createElement("div");
    poolHeader.className = "simPoolHeader";
    poolHeader.innerText = `Pool pessoal de ${nome}`;
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
  const t = document.createElement("div");
  t.className = "simExtraTitle";
  t.innerText = titulo;
  box.appendChild(t);
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
  const opcoes = tipo === "idol"
    ? ROLE_OPTIONS_IDOL
    : tipo === "music"
      ? ROLE_OPTIONS_MUSIC
      : ROLE_OPTIONS_PRODUCER;
  opcoes.forEach(opt => {
    const o = document.createElement("option");
    o.value = opt;
    o.text  = getRoleDisplay(pi, tipo, idx, opt);
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
    candidates.push(`../assets/images/idol_${idSlug}.jpg`);
    candidates.push(`../assets/images/idol_${idSlug}.png`);
    candidates.push(`../assets/images/idol_${idSlug}.jpeg`);
    candidates.push(`https://dummyimage.com/160x200/ffff00/000000&text=${query}`);
    candidates.push(`https://via.placeholder.com/160x200/ffff00/000000?text=${query}`);
    return candidates;
  }

  if (itemType === "music") {
    const fonteSlug = sanitizeSlug(item.fonte || "");
    const query = encodeURIComponent(`${fonteSlug} ${nameSlug}`);
    if (fonteSlug) {
      candidates.push(`../assets/images/music_${idSlug}.jpg`);
      candidates.push(`../assets/images/music_${idSlug}.png`);
      candidates.push(`../assets/images/music_${idSlug}.jpeg`);
    }
    candidates.push(`https://dummyimage.com/160x200/0000ff/ffffff&text=${query}`);
    candidates.push(`https://via.placeholder.com/160x200/0000ff/ffffff?text=${query}`);
    return candidates;
  }

  if (itemType === "producer") {
    const query = encodeURIComponent(`Producer ${nameSlug}`);
    candidates.push(`../assets/images/producer_${idSlug}.jpg`);
    candidates.push(`../assets/images/producer_${idSlug}.png`);
    candidates.push(`../assets/images/producer_${idSlug}.jpeg`);
    candidates.push(`https://dummyimage.com/160x200/800080/ffffff&text=${query}`);
    candidates.push(`https://via.placeholder.com/160x200/800080/ffffff?text=${query}`);
    return candidates;
  }

  candidates.push(`../assets/images/${itemType}_${idSlug}.jpg`);
  candidates.push(`../assets/images/${itemType}_${idSlug}.png`);
  return candidates;
}

// =====================
// CARD
// =====================

//f:criarCard
function criarCard(item, isLocked = false, origem = "pool", pi = null, idx = null) {
  // Limpa aspas extras dos dados
  const cleanText = t => {
    if (!t) return "";
    return t.toString().replace(/"{3}/g, '"').replace(/^["']|["']$/g, "").trim();
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
      img.src = `images/idol_${fg}_${fn}.jpg`;
    } else {
      img.src = `images/${itemType}_${fn}.jpg`;
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
  const cleanText = t => {
    if (!t || (Array.isArray(t) && !t.length)) return "-";
    if (Array.isArray(t)) return t.join(", ");
    return t.toString().replace(/"{3}/g, '"').replace(/^['"]|['"]$/g, "").trim();
  };
  const listText = t => {
    if (!t || (Array.isArray(t) && !t.length)) return "-";
    if (Array.isArray(t)) return t.join("<br>");
    return t.toString().replace(/"{3}/g, '"').replace(/^['"]|['"]$/g, "").trim();
  };
  let bodyContent = "";
  if (itemType === "idol") {
    bodyContent = `
      <p><b>Grupo:</b> ${cleanText(item.group)}</p>
      <p><b>Aniversário:</b> ${cleanText(item.aniversario)}</p>
      <p><b>Vocal:</b> ${cleanText(item.vocal)}</p>
      <p><b>Dance:</b> ${cleanText(item.dance)}</p>
      <p><b>Rap:</b> ${cleanText(item.rap)}</p>
      <p><b>Center:</b> ${cleanText(item.center)}</p>
      <p><b>Visual:</b> ${cleanText(item.visual)}</p>
      <p><b>Especialidade:</b> ${cleanText(item.especialidade)}</p>
      <p><b>Conceitos Predominantes:</b> ${cleanText(item.conceitos)}</p>
      <p><b>Gêneros Predominantes:</b> ${cleanText(item.generos)}</p>
      <p><b>Pontos Fortes:</b> ${cleanText(item.fortes)}</p>
      <p><b>Pontos Fracos:</b> ${cleanText(item.fracos)}</p>
    `;
  } else if (itemType === "music") {
    bodyContent = `
      <p><b>Fonte:</b> ${cleanText(item.fonte)}</p>
      <p><b>Conceitos Originais:</b> ${cleanText(item.conceitos)}</p>
      <p><b>Gêneros Originais:</b> ${cleanText(item.generos)}</p>
    `;
  } else if (itemType === "producer") {
    bodyContent = `
      <p><b>Conceitos Predominantes:</b> ${cleanText(item.conceitos)}</p>
      <p><b>Gêneros Predominantes:</b> ${cleanText(item.generos)}</p>
      <p><b>Músicas Conhecidas:</b><br> ${listText(item.musicas)}</p>
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

//tá lendo isso por quê, curioso?
