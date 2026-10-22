// ====================================================================
// pages-script.js — código COMUM a todas as páginas
//   • idioma (t, aplicarIdioma, mudarIdioma, aoMudarIdioma)
//   • caminhos e links de navegação
//   • injeção do header (logo, menu, seletor de idioma e badge da versão)
// Cada página tem seu próprio script (index-script.js, draft-setup-script.js...).
// Deve ser incluído DEPOIS de translations.js e patchnotes.js.
// ====================================================================

// ========================
// SISTEMA DE IDIOMAS (i18n)
// ========================
// As traduções vêm de assets/i18n/translations.js, que declara
// a variável global TRANSLATIONS. Deve ser incluído via <script>
// ANTES de pages-script.js (fetch não funciona em file://).

let currentLanguage = localStorage.getItem("siteLanguage") || "pt";

//f:t — atalho para obter texto traduzido
function t(chave) {
  if (typeof TRANSLATIONS === "undefined") return chave;
  return TRANSLATIONS[currentLanguage]?.[chave] ?? TRANSLATIONS["pt"]?.[chave] ?? chave;
}

// Funções registradas pelas páginas para rodar sempre que o idioma for aplicado.
const _callbacksIdioma = [];

//f:aoMudarIdioma
//Registra uma função que roda a cada aplicação de idioma (use no topo do script da página)
function aoMudarIdioma(callback) {
  _callbacksIdioma.push(callback);
}

//f:aplicarIdioma
function aplicarIdioma(idioma) {
  currentLanguage = idioma;
  localStorage.setItem("siteLanguage", idioma);
  document.documentElement.lang = idioma === "en" ? "en" : "pt-BR";

  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t(el.getAttribute("data-i18n"));
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    el.placeholder = t(el.getAttribute("data-i18n-placeholder"));
  });
  document.querySelectorAll("[data-i18n-title]").forEach(el => {
    el.title = t(el.getAttribute("data-i18n-title"));
  });

  const oldHeader = document.querySelector(".site-header");
  if (oldHeader) oldHeader.remove();
  injetarHeader();

  // cada página registra (com aoMudarIdioma) o que precisa refazer quando o idioma muda
  _callbacksIdioma.forEach(callback => callback(idioma));
}

//f:mudarIdioma
function mudarIdioma(idioma) {
  aplicarIdioma(idioma);
}

// ========================
// INJEÇÃO DO HEADER 
// ========================

const NAV_LINKS = [
  { key: "nav_inicio",      href: "index.html" },
  { key: "nav_draft",       href: "draft-setup-page.html" },
  { key: "nav_patchnotes",  href: "patchnotes-page.html" },
  { key: "nav_feedback",    href: "feedback-page.html" },
];

// Calculado uma única vez, enquanto document.currentScript ainda aponta para este
// arquivo (pages-script.js) — conta quantos "../" foram usados na própria tag
// <script src="..."> da página atual e usa isso para descobrir a profundidade real,
// sem depender de checar nomes de pasta fixos como "/pages/". Funciona em qualquer
// página, em qualquer nível de pasta, desde que o <script src> esteja correto.
const SCRIPT_DEPTH = (() => {
  const scriptEl = document.currentScript;
  const src = scriptEl ? (scriptEl.getAttribute("src") || "") : "";
  const matches = src.match(/\.\.\//g);
  return matches ? matches.length : 0;
})();

//f:pegarHref
function pegarHref() {
  return "../".repeat(SCRIPT_DEPTH);
}

//f:pegarNavLink
function pegarNavLink(href) {
  const base = pegarHref();
  if (href === "index.html") return `${base}index.html`;
  return `${base}pages/${href}`;
}

//f:pegarHrefJogo
function pegarHrefJogo(pageName) {
  return `${pegarHref()}pages/${pageName}`;
}

//f:pegarVersaoAtual
//Retorna a versão mais recente do patch notes (data/patchnotes.js) para o badge do header, ou "" se não houver
function pegarVersaoAtual() {
  return (typeof PATCHES !== "undefined" && PATCHES.length) ? PATCHES[0].version : "";
}

//f:injetarHeader
function injetarHeader() {
  const currentPage = location.pathname.split("/").pop() || "index.html";
  const header = document.createElement("header");
  header.className = "site-header";
  header.innerHTML = `
      <a href="${pegarNavLink("index.html")}" class="header-logo">
        <div>
          <div class="header-logo-text">STRAY7</div>
          <div class="header-logo-sub">K-Pop Games</div>
        </div>
      </a>
      <nav class="header-nav">
      ${NAV_LINKS.map(link => {
        const navHref = pegarNavLink(link.href);
        const ativo = link.href === currentPage ? "active" : "";
        return `<a href="${navHref}" class="${ativo}">${t(link.key)}</a>`;
      }).join("")}
    </nav>
    <div class="header-right">
      <div class="language-selector">
        <button data-lang="pt" title="Português" onclick="mudarIdioma('pt')">🇧🇷</button>
        <button data-lang="en" title="English" onclick="mudarIdioma('en')">🇺🇸</button>
      </div>
      <span class="header-badge">${pegarVersaoAtual()}</span>
    </div>
  `;
  document.body.prepend(header);
  header.querySelectorAll(".language-selector button").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === currentLanguage);
  });
}

window.addEventListener("DOMContentLoaded", () => {
  aplicarIdioma(currentLanguage);
});
