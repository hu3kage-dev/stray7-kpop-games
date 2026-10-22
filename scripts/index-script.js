// ====================================================================
// index-script.js — exclusivo de index.html
//   • botões dos modos de jogo
//   • carrossel de imagens dos menus (assets/menus/menus.js)
// Depende de pages-script.js (t, pegarNavLink).
// ====================================================================

//f:irParaDraft
function irParaDraft() {
  const draftHref = pegarNavLink("draft-setup-page.html");
  window.location.href = draftHref;
}

//f:modoEmDesenvolvimento
function modoEmDesenvolvimento() {
  alert(t("alert_em_desenvolvimento"));
}

// ========================
// IMAGENS DE MENU
// ========================

const MENU_INTERVALO = 5000;
const menuEstado = {};

//f:trocarImagemMenu
function trocarImagemMenu(imgEl, lista) {
  const nome = imgEl.dataset.menu;
  if (menuEstado[nome] == null) menuEstado[nome] = 0;
  menuEstado[nome] = (menuEstado[nome] + 1) % lista.length;
  imgEl.classList.add("fade-out");
  setTimeout(() => {
    imgEl.src = lista[menuEstado[nome]];
    imgEl.onload = () => imgEl.classList.remove("fade-out");
  }, 250);
}

//f:iniciarCarouselMenus
function iniciarCarouselMenus() {
  if (typeof MENU_IMAGENS === "undefined") {
    console.warn("MENU_IMAGENS não encontrado. Crie assets/menus/menus.js com o manifesto.");
    return;
  }
  document.querySelectorAll(".mode-image[data-menu]").forEach(img => {
    const lista = MENU_IMAGENS[img.dataset.menu];
    if (!lista?.length) return;
    menuEstado[img.dataset.menu] = 0;
    img.src = lista[0];
    if (lista.length > 1) {
      setInterval(() => trocarImagemMenu(img, lista), MENU_INTERVALO);
    }
  });
}

// ========================
// INICIALIZAÇÃO DA PÁGINA
// ========================

//f:iniciarPaginaIndex
//Inicia o carrossel de imagens dos modos de jogo
function iniciarPaginaIndex() {
  iniciarCarouselMenus();
}

window.addEventListener("DOMContentLoaded", iniciarPaginaIndex);
