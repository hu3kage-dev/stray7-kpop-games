// ====================================================================
// cards-script.js — compartilhado por draft-game-page.html e simulation-page.html
//   • tipo do item e imagens dos cards (com fallback)
//   • criação do card (criarCard)
//   • modal de detalhes (abrirModal / fecharModal)
//   • arrastar e soltar com ghost card (cada página registra suas regras em configurarDrag)
// Depende de pages-script.js (t, aoMudarIdioma). Incluir ANTES do script da página.
// ====================================================================

// ========================
// TIPO E IMAGENS
// ========================

//f:getItemType
function getItemType(item) {
  return item?.type?.toString().toLowerCase();
}

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
  candidates.push(`../assets/draft-cards/${itemType}_${idSlug}.jpeg`);
  return candidates;
}

//f:getCardImageSrc
function getCardImageSrc(item) {
  return getCardImageCandidates(item)[0];
}

// =====================
// CARD
// =====================

//f:criarCard
//Cria o card de um item. Opções: bloqueado, origem ("pool" | "board"), playerIndex, slotIndex,
//aoClicar(e) (retorne true para impedir a abertura do modal) e opcoesModal (objeto ou função que o devolve)
function criarCard(item, opcoes = {}) {
  const { bloqueado = false, origem = "board", playerIndex = null, slotIndex = null,
          aoClicar = null, opcoesModal = null } = opcoes;
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
  if (bloqueado) card.classList.add("locked");
  // Imagem com fallback chain
  const candidates = getCardImageCandidates(item);
  let candidateIndex = 0;
  const img = document.createElement("img");
  img.draggable = false;
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
  // Drag (Ctrl + clique é reservado para ações rápidas da página, então não inicia arrasto)
  if (_dragHandlers && _dragHandlers.podeArrastar(item, origem, playerIndex)) card.style.cursor = "grab";
  card.addEventListener("mousedown", e => {
    if (e.button !== 0 || e.ctrlKey) return;
    iniciarDrag(e, item, origem, playerIndex, slotIndex);
  });
  // Clique: ação rápida da página (opcional) ou modal de detalhes
  card.addEventListener("click", e => {
    if (justDragged) { justDragged = false; return; }
    if (aoClicar && aoClicar(e) === true) return;
    abrirModal(item, typeof opcoesModal === "function" ? opcoesModal() : opcoesModal);
  });
  return card;
}

// =====================
// MODAL
// =====================

// Último modal aberto (para refazê-lo quando o idioma mudar com ele aberto)
let _modalAtual = null;

// Ícone do botão "escolher este card" (seta para cima = vai para o board)
const ICONE_ESCOLHER = `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5"/><path d="M5 12l7-7 7 7"/></svg>`;

//f:abrirModal
//Abre o modal de detalhes do item. Opções: escolher (função) — mostra o botão "escolher este card" ao lado do fechar
function abrirModal(item, opcoes = {}) {
  const modal = document.getElementById("modal");
  if (!modal) return;
  opcoes = opcoes || {};
  _modalAtual = { item, opcoes };
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
  } else {
    bodyContent = `<p><b>Tipo:</b> ${itemType}</p>`;
  }
  const botaoEscolher = opcoes.escolher
    ? `<button type="button" class="chooseBtn" title="${t("modal_escolher_card")}" aria-label="${t("modal_escolher_card")}">${ICONE_ESCOLHER}</button>`
    : "";
  modal.innerHTML = `
    <div class="modalContent">
      <img src="${getCardImageSrc(item)}" class="modalImg"
           onerror="this.onerror=null;this.src='';">
      <div class="modalBody">
        ${botaoEscolher}
        <span class="closeBtn" onclick="fecharModal()">✕</span>
        <h2>${cleanText(item.name)}</h2>
        ${bodyContent}
      </div>
    </div>
  `;
  const escolher = modal.querySelector(".chooseBtn");
  if (escolher) escolher.addEventListener("click", opcoes.escolher);
  modal.onclick = e => { if (e.target === modal) fecharModal(); };
}

//f:fecharModal
function fecharModal() {
  const modal = document.getElementById("modal");
  if (modal) modal.style.display = "none";
  _modalAtual = null;
}

//f:modalAberto
//Indica se o modal de detalhes está aberto
function modalAberto() {
  const modal = document.getElementById("modal");
  return !!modal && modal.style.display === "flex";
}

// Esc fecha o modal; ao trocar o idioma com o modal aberto, ele é refeito no novo idioma
document.addEventListener("keydown", e => {
  if (e.key === "Escape") fecharModal();
});

aoMudarIdioma(() => {
  if (modalAberto() && _modalAtual) abrirModal(_modalAtual.item, _modalAtual.opcoes);
});

// =====================
// DRAG QUEEN
// =====================
// O arrasto só começa depois que o mouse se move DRAG_LIMITE_PX pixels: um clique simples (ou
// segurar sem mover) não cria o ghost card e continua abrindo o modal. Cada página registra
// suas regras com configurarDrag({ podeArrastar, criarPayload, aoSoltar }).

const DRAG_LIMITE_PX = 8;

let draggedItem = null;
let draggedElement = null;
let dragOrigin = null;
let dragPayload = null;
let ghostCard = null;
let dragStartX = null;
let dragStartY = null;
let dragMoved = false;
let justDragged = false;
let _dragHandlers = null;

//f:configurarDrag
//Registra as regras de drag da página:
//podeArrastar(item, origem, playerIndex) -> boolean (só para o cursor),
//criarPayload(item, origem, playerIndex, slotIndex) -> objeto ou null (null = não pode arrastar),
//aoSoltar(elementoSobOCursor, payload) -> decide o que fazer com o drop
function configurarDrag(handlers) {
  _dragHandlers = handlers;
}

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
  e.preventDefault();   // evita o arrasto nativo da imagem e a seleção de texto
  if (!_dragHandlers) return;
  const payload = _dragHandlers.criarPayload(item, origem, playerIndex, slotIndex);
  if (!payload) return;   // a página não permite arrastar este card
  draggedItem = item;
  draggedElement = e.currentTarget;
  dragOrigin = origem;
  dragPayload = payload;
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
  if (!dragMoved && Math.hypot(dx, dy) >= DRAG_LIMITE_PX) {
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
    // o clique que o navegador dispara depois do arrasto não deve abrir o modal
    justDragged = true;
    setTimeout(() => { justDragged = false; }, 0);
    if (elementoAlvo && _dragHandlers) _dragHandlers.aoSoltar(elementoAlvo, dragPayload);
  }
  draggedItem = null;
  draggedElement = null;
  dragOrigin = null;
  dragPayload = null;
  dragStartX = null;
  dragStartY = null;
  dragMoved = false;
}
