// ====================================================================
// patchnotes-script.js — exclusivo de patchnotes-page.html
//   • desenha a lista de patches (os dados ficam em data/patchnotes.js)
// Depende de pages-script.js (t, currentLanguage, aoMudarIdioma) e de PATCHES.
// ====================================================================

// Chaves de tradução das tags e dos títulos de seção
const PATCH_TAG_KEYS = {
  major:  "patch_tag_major",
  minor:  "patch_tag_minor",
  fix:    "patch_tag_fix",
  hotfix: "patch_tag_hotfix",
};

const PATCH_SECTION_KEYS = {
  new:     "patch_section_new",
  change:  "patch_section_change",
  fix:     "patch_section_fix",
  remove:  "patch_section_remove",
  balance: "patch_section_balance",
};

//f:traduzirCampo
//Retorna o texto de um objeto { pt, en } no idioma atual (usa pt se faltar a tradução)
function traduzirCampo(obj) {
  return obj?.[currentLanguage] || obj?.pt || "";
}

//f:montarSecaoPatch
//Monta o HTML de uma seção do patch (título traduzido + lista de itens)
function montarSecaoPatch(secao) {
  return `
        <div class="patch-section">
          <div class="patch-section-title ${secao.type}">${t(PATCH_SECTION_KEYS[secao.type] || secao.type)}</div>
          <ul class="patch-list">
            ${secao.items.map(item => `<li>${traduzirCampo(item)}</li>`).join("")}
          </ul>
        </div>
      `;
}

//f:montarCardPatch
//Cria o card de um patch (cabeçalho clicável que abre e fecha o corpo); o mais recente já vem aberto
function montarCardPatch(patch, aberto) {
  const card = document.createElement("div");
  card.className = "patch-card" + (aberto ? " open" : "");

  card.innerHTML = `
        <div class="patch-header">
          <div class="patch-header-left">
            <span class="patch-version">${patch.version}</span>
            <span class="patch-title">${traduzirCampo(patch.title)}</span>
          </div>
          <span class="patch-tag tag-${patch.type}">${t(PATCH_TAG_KEYS[patch.type] || patch.type)}</span>
          <span class="patch-date">${patch.date}</span>
          <span class="patch-chevron">▼</span>
        </div>
        <div class="patch-body">
          ${patch.sections.map(montarSecaoPatch).join("")}
        </div>
      `;

  card.querySelector(".patch-header").addEventListener("click", () => {
    card.classList.toggle("open");
  });
  return card;
}

//f:renderPatchNotes
//Desenha (ou redesenha, ao trocar o idioma) a lista de patches no fim do body
function renderPatchNotes() {
  const old = document.querySelector(".patchnotes-page");
  if (old) old.remove();

  const page = document.createElement("div");
  page.className = "patchnotes-page";

  if (!PATCHES.length) {
    page.innerHTML += `<div class="patchnotes-empty">${t("patchnotes_empty")}</div>`;
  } else {
    PATCHES.forEach((patch, i) => page.appendChild(montarCardPatch(patch, i === 0)));
  }

  document.body.appendChild(page);
}

// ========================
// INICIALIZAÇÃO DA PÁGINA
// ========================
// aplicarIdioma() chama este callback no carregamento e a cada troca de idioma.
aoMudarIdioma(renderPatchNotes);
