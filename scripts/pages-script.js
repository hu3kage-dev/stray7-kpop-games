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

  // re-renderizar conteúdo dinâmico dependente de idioma, se presente na página
  if (typeof renderPatchNotes === "function" && document.querySelector(".patchnotes-page")) {
    document.querySelector(".patchnotes-page").remove();
    renderPatchNotes();
  }
  if (typeof render === "function" && document.getElementById("simBoard")) {
    render();
  }
  if (typeof mostrarResultados === "function") {
    const resultCont = document.getElementById("resultadoContainer");
    if (resultCont && resultCont.children.length) {
      mostrarResultados();
    }
  }
}

//f:mudarIdioma
function mudarIdioma(idioma) {
  aplicarIdioma(idioma);
}



const NAV_LINKS = [
  { key: "nav_inicio",      href: "index.html" },
  { key: "nav_draft",       href: "draft-config-page.html" },
  { key: "nav_patchnotes",  href: "patchnotes-page.html" },
];

//f:pegarHref
function pegarHref() {
  const path = location.pathname;
  return path.includes('/pages/') ? '../' : './';
}

//f:pegarNavLink
function pegarNavLink(href) {
  const base = pegarHref();
  const isScreensPage = location.pathname.includes('/pages/');
  const screenPages = NAV_LINKS.map(link => link.href).filter(href => href !== "index.html");
  if (isScreensPage) {
    if (screenPages.includes(href)) {
      return href;
    }
    return `${base}${href}`;
  }
  if (screenPages.includes(href)) {
    return `pages/${href}`;
  }
  return href;
}

//f:pegarHrefJogo
function pegarHrefJogo(pageName) {
  const isScreensPage = location.pathname.includes('/pages/');
  if (isScreensPage) {
    return pageName;
  }
  return `pages/${pageName}`;
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
      <span class="header-badge">v0.4.5</span>
    </div>
  `;
  document.body.prepend(header);
  header.querySelectorAll(".language-selector button").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === currentLanguage);
  });
}

// ========================
// VARIÁVEIS GLOBAIS
// ========================
let filtroAtivo = {
  gen: "all",
  letra: "all"
};
let draftWarningContainer = null;

// ========================
// DATABASE VOLÁTIL
// ========================

let extraIdols     = [];
let extraMusics    = [];
let extraProducers = [];

// Retorna a lista ativa mesclando base fixa + importados
function getIdols()     { return [...idols,     ...extraIdols];     }
function getMusics()    { return [...musics,     ...extraMusics];    }
function getProducers() { return [...producers,  ...extraProducers]; }


// ========================
// INDEX PAGE
// ========================

//f:irParaDraft
function irParaDraft() {
  const draftHref = pegarNavLink("draft-config-page.html");
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
// FUNÇÕES DE BLOCOS
// ========================

//f:criarInputsJogadores
function criarInputsJogadores() {
  const container = document.getElementById("playersContainer");
  container.innerHTML = "";
  let qtd = parseInt(document.getElementById("playerCount").value);
  for (let i = 1; i <= qtd; i++) {
    let input = document.createElement("input");
    input.placeholder = t("placeholder_nome_jogador_n") + " " + i;
    input.className = "playerNameInput";
    container.appendChild(input);
    container.appendChild(document.createElement("br"));
  }
}

//f:sortearIntegrantes
function sortearIntegrantes() {
  let chance = Math.random();
  let valor;
  if (chance <= 0.95) {
    valor = Math.floor(Math.random() * 9) + 4;
  } else {
    valor = Math.floor(Math.random() * 12) + 13;
  }
  document.getElementById("idolCount").value = valor;
}

//f:agruparPorGrupo
function agruparPorGrupo(lista) {
  let grupos = {};
  lista.forEach(idol => {
    if (!grupos[idol.group]) {
      grupos[idol.group] = [];
    }
    grupos[idol.group].push(idol);
  });
  return grupos;
}

//f:marcarTodosProdutores
function marcarTodosProdutores() {
  document.querySelectorAll("#producerContainer input[type='checkbox']")
    .forEach(cb => cb.checked = true);
}

//f:desmarcarTodosProdutores
function desmarcarTodosProdutores() {
  document.querySelectorAll("#producerContainer input[type='checkbox']")
    .forEach(cb => cb.checked = false);
}

//f:marcarTodasMusicas
function marcarTodasMusicas() {
  document.querySelectorAll("#musicContainer input[type='checkbox']")
    .forEach(cb => { cb.checked = true; cb.indeterminate = false; });
}

//f:desmarcarTodasMusicas
function desmarcarTodasMusicas() {
  document.querySelectorAll("#musicContainer input[type='checkbox']")
    .forEach(cb => { cb.checked = false; cb.indeterminate = false; });
}

// ========================
// AVISOS
// ======================== 

//f:iniciarAvisoDraft
function iniciarAvisoDraft() {
  const button = document.querySelector(".btn-iniciar-draft");
  if (!button) return;
  draftWarningContainer = document.createElement("div");
  draftWarningContainer.id = "draftWarning";
  draftWarningContainer.style.margin = "10px 0 0 0";
  draftWarningContainer.style.padding = "12px";
  draftWarningContainer.style.borderRadius = "8px";
  draftWarningContainer.style.backgroundColor = "#3a1a1a";
  draftWarningContainer.style.color = "#ffd9d9";
  draftWarningContainer.style.border = "1px solid #b35b5b";
  draftWarningContainer.style.display = "none";
  draftWarningContainer.style.fontSize = "14px";
  button.insertAdjacentElement("beforebegin", draftWarningContainer);
}

//f:draftAviso
function draftAviso(messages) {
  if (!draftWarningContainer) return;
  if (!messages || messages.length === 0) {
    draftWarningContainer.style.display = "none";
    draftWarningContainer.innerHTML = "";
    return;
  }
  draftWarningContainer.style.display = "block";
  draftWarningContainer.innerHTML = messages
    .map(msg => `<p style="margin:0 0 6px 0;">${msg}</p>`)
    .join("");
}

// ========================
// FUNÇÕES DE RENDERIZAÇÃO
// ========================

//f:renderizarGrupos
function renderizarGrupos() {
  const container = document.getElementById("groupsContainer");
  container.innerHTML = "";
  const grupos = agruparPorGrupo(getIdols());
  for (let nomeGrupo in grupos) {
    const idolsDoGrupo = grupos[nomeGrupo];
    let divGrupo = document.createElement("div");
    divGrupo.dataset.grupo = nomeGrupo;
    let checkboxGrupo = document.createElement("input");
    checkboxGrupo.type = "checkbox";
    checkboxGrupo.checked = true;
    let labelGrupo = document.createElement("label");
    labelGrupo.innerText = " " + nomeGrupo;
    divGrupo.appendChild(checkboxGrupo);
    divGrupo.appendChild(labelGrupo);
    let listaIdolsCheckbox = [];
    idolsDoGrupo.forEach(idol => {
      let divIdol = document.createElement("div");
      divIdol.dataset.gen = idol.gen || "";
      divIdol.dataset.nome = idol.name || "";
      let checkboxIdol = document.createElement("input");
      checkboxIdol.type = "checkbox";
      checkboxIdol.checked = true;
      checkboxIdol.value = idol.id;
      listaIdolsCheckbox.push(checkboxIdol);
      checkboxIdol.addEventListener("change", () => {
        let todosMarcados = true;
        let nenhumMarcado = true;
        // só conta os visíveis para o estado indeterminate
        const visiveis = listaIdolsCheckbox.filter(cb => cb.parentElement.style.display !== "none");
        visiveis.forEach(cb => {
          if (cb.checked) nenhumMarcado = false;
          else todosMarcados = false;
        });
        if (visiveis.length === 0) {
          checkboxGrupo.indeterminate = false;
        } else if (todosMarcados) {
          checkboxGrupo.checked = true;
          checkboxGrupo.indeterminate = false;
        } else if (nenhumMarcado) {
          checkboxGrupo.checked = false;
          checkboxGrupo.indeterminate = false;
        } else {
          checkboxGrupo.indeterminate = true;
        }
      });
      let labelIdol = document.createElement("label");
      labelIdol.innerText = " " + idol.name;
      divIdol.appendChild(checkboxIdol);
      divIdol.appendChild(labelIdol);
      divIdol.style.marginLeft = "15px";
      divGrupo.appendChild(divIdol);
    });
    checkboxGrupo.addEventListener("change", () => {
      // só altera os idols visíveis
      listaIdolsCheckbox.forEach(cb => {
        if (cb.parentElement.style.display !== "none") {
          cb.checked = checkboxGrupo.checked;
        }
      });
      checkboxGrupo.indeterminate = false;
    });
    container.appendChild(divGrupo);
  }
  aplicarFiltroVisual();
}

//f:renderizarProdutores
function renderizarProdutores() {
  const container = document.getElementById("producerContainer");
  container.innerHTML = "";
  getProducers().forEach(p => {
    let div = document.createElement("div");
    let cb = document.createElement("input");
    cb.type = "checkbox";
    cb.checked = true;
    cb.value = p.id;
    let label = document.createElement("label");
    label.innerText = " " + p.name;
    div.appendChild(cb);
    div.appendChild(label);
    container.appendChild(div);
  });
}

//f:renderizarMusicas
function renderizarMusicas() {
  const container = document.getElementById("musicContainer");
  container.innerHTML = "";

  // agrupar por fonte
  const porFonte = {};
  getMusics().forEach(m => {
    const fonte = m.fonte || "Sem Fonte";
    if (!porFonte[fonte]) porFonte[fonte] = [];
    porFonte[fonte].push(m);
  });

  for (const nomeFonte in porFonte) {
    const musicas = porFonte[nomeFonte];

    const divFonte = document.createElement("div");
    divFonte.dataset.fonte = nomeFonte;

    // checkbox + label do grupo (fonte)
    const cbFonte = document.createElement("input");
    cbFonte.type = "checkbox";
    cbFonte.checked = true;
    const labelFonte = document.createElement("label");
    labelFonte.innerText = " " + nomeFonte;
    divFonte.appendChild(cbFonte);
    divFonte.appendChild(labelFonte);

    // checkboxes filhos
    const listaFilhos = [];
    musicas.forEach(m => {
      const divMusica = document.createElement("div");
      divMusica.style.marginLeft = "15px";
      const cb = document.createElement("input");
      cb.type = "checkbox";
      cb.checked = true;
      cb.value = m.id;
      listaFilhos.push(cb);

      cb.addEventListener("change", () => {
        const total = listaFilhos.length;
        const marcados = listaFilhos.filter(c => c.checked).length;
        if (marcados === total) {
          cbFonte.checked = true;
          cbFonte.indeterminate = false;
        } else if (marcados === 0) {
          cbFonte.checked = false;
          cbFonte.indeterminate = false;
        } else {
          cbFonte.indeterminate = true;
        }
      });

      const label = document.createElement("label");
      label.innerText = " " + m.name;
      divMusica.appendChild(cb);
      divMusica.appendChild(label);
      divFonte.appendChild(divMusica);
    });

    cbFonte.addEventListener("change", () => {
      listaFilhos.forEach(cb => cb.checked = cbFonte.checked);
      cbFonte.indeterminate = false;
    });

    container.appendChild(divFonte);
  }
}

//f:setFiltro
function setFiltro(tipo, valor) {
  filtroAtivo[tipo] = valor;
  // atualizar visual das pills
  document.querySelectorAll(`.filter-pill[data-filter="${tipo}"]`).forEach(btn => {
    btn.classList.toggle("active", btn.dataset.value === valor);
  });
  aplicarFiltroVisual();
}

//f:aplicarFiltroVisual
function aplicarFiltroVisual() {
  const { gen, letra } = filtroAtivo;
  const grupos = document.querySelectorAll("#groupsContainer > div");
  grupos.forEach(grupoDiv => {
    const nomeGrupo = (grupoDiv.dataset.grupo || "").toUpperCase();
    const primeiraLetraGrupo = nomeGrupo.charAt(0);
    // filtro de letra — apenas pelo nome do grupo
    let grupoPassaLetra = true;
    if (letra !== "all") {
      if (letra === "09") {
        grupoPassaLetra = /[0-9@#]/.test(primeiraLetraGrupo);
      } else {
        grupoPassaLetra = primeiraLetraGrupo === letra;
      }
    }
    if (!grupoPassaLetra) {
      grupoDiv.style.display = "none";
      return;
    }
    const idolDivs = grupoDiv.querySelectorAll("div[data-gen]");
    let algumIdolVisivel = false;
    idolDivs.forEach(divIdol => {
      const idolGen = divIdol.dataset.gen || "";
      const passaGen = gen === "all" || idolGen === gen;
      divIdol.style.display = passaGen ? "" : "none";
      if (passaGen) algumIdolVisivel = true;
    });
    // esconde o bloco inteiro do grupo se nenhum idol passa no filtro de geração
    grupoDiv.style.display = algumIdolVisivel ? "" : "none";
  });
}

//f:marcarTodosGeracoes
function marcarTodosGeracoes() {
  document.querySelectorAll("#groupsContainer input[type='checkbox'][value]").forEach(cb => {
    const divIdol = cb.parentElement;
    const divGrupo = divIdol?.parentElement;
    if (divIdol?.style.display !== "none" && divGrupo?.style.display !== "none") {
      cb.checked = true;
    }
  });
  atualizarCheckboxesGrupo();
}

//f:desmarcarTodosGeracoes
function desmarcarTodosGeracoes() {
  document.querySelectorAll("#groupsContainer input[type='checkbox'][value]").forEach(cb => {
    const divIdol = cb.parentElement;
    const divGrupo = divIdol?.parentElement;
    if (divIdol?.style.display !== "none" && divGrupo?.style.display !== "none") {
      cb.checked = false;
    }
  });
  atualizarCheckboxesGrupo();
}

//f:atualizarCheckboxesGrupo
function atualizarCheckboxesGrupo() {
  const grupos = document.querySelectorAll("#groupsContainer > div");
  grupos.forEach(grupoDiv => {
    const checkboxGrupo = grupoDiv.querySelector("input[type='checkbox']:not([value])");
    const checkboxesIdol = grupoDiv.querySelectorAll("input[type='checkbox'][value]");
    let todosMarcados = true;
    let nenhumMarcado = true;
    checkboxesIdol.forEach(cb => {
      if (cb.checked) nenhumMarcado = false;
      else todosMarcados = false;
    });
    if (todosMarcados) {
      checkboxGrupo.checked = true;
      checkboxGrupo.indeterminate = false;
    } else if (nenhumMarcado) {
      checkboxGrupo.checked = false;
      checkboxGrupo.indeterminate = false;
    } else {
      checkboxGrupo.indeterminate = true;
    }
  });
}

// ==============================
// FUNÇÕES DE SORTEIO E SELEÇÃO
// ==============================

//f:pegarIdolsSelecionados
function pegarIdolsSelecionados() {
  let selecionados = [];
  const checkboxes = document.querySelectorAll("#groupsContainer input[type='checkbox']");
  checkboxes.forEach(cb => {
    if (cb.checked && cb.value) {
      let idol = getIdols().find(i => i.id === cb.value);
      if (idol) selecionados.push(idol);
    }
  });
  return selecionados;
}

//f:pegarMusicasSelecionadas
function pegarMusicasSelecionadas() {
  let selecionados = [];
  document.querySelectorAll("#musicContainer input[type='checkbox']").forEach(cb => {
    if (cb.checked && cb.value) {
      let music = getMusics().find(m => m.id === cb.value);
      if (music) selecionados.push(music);
    }
  });
  return selecionados;
}

//f:pegarProdutoresSelecionados
function pegarProdutoresSelecionados() {
  let selecionados = [];
  document.querySelectorAll("#producerContainer input[type='checkbox']").forEach(cb => {
    if (cb.checked && cb.value) {
      let producer = getProducers().find(p => p.id === cb.value);
      if (producer) selecionados.push(producer);
    }
  });
  return selecionados;
}

//f:sortearIdols
function sortearIdols(lista, quantidade) {
  let copia = [...lista];
  let resultado = [];
  for (let i = 0; i < quantidade; i++) {
    let index = Math.floor(Math.random() * copia.length);
    resultado.push(copia[index]);
    copia.splice(index, 1);
  }
  return resultado;
}

// ========================
// INICIALIZAÇÃO DO DRAFT
// ========================

//f:iniciarDraft
function iniciarDraft() {
  let inputs = document.querySelectorAll(".playerNameInput");
  let jogadores = [];
  let allNames = [];
  inputs.forEach(input => {
    allNames.push(input.value.trim());
  });
  const nomesVazios = allNames.filter(nome => nome === "");
  if (nomesVazios.length > 0) {
    jogadores = allNames.filter(nome => nome !== "");
  } else {
    jogadores = [...allNames];
  }
  let integrantes = parseInt(document.getElementById("idolCount").value, 10) || 0;
  let musicasSelecionadas = pegarMusicasSelecionadas();
  let produtoresSelecionados = pegarProdutoresSelecionados();
  let selecionados = pegarIdolsSelecionados();
  let totalIdols = jogadores.length * integrantes;
  const errors = [];
  if (nomesVazios.length > 0) {
    errors.push(t("err_nomes_vazios"));
  }
  const nomesUnicos = new Set(jogadores.map(nome => nome.toLowerCase()));
  if (jogadores.length > 0 && nomesUnicos.size !== jogadores.length) {
    errors.push(t("err_nomes_duplicados"));
  }
  if (produtoresSelecionados.length > 0 && produtoresSelecionados.length < jogadores.length) {
    errors.push(t("err_produtores_min"));
  }
  if (musicasSelecionadas.length > 0 && musicasSelecionadas.length < jogadores.length) {
    errors.push(t("err_musicas_min"));
  }
  if (selecionados.length < totalIdols) {
    errors.push(t("err_idols_min"));
  }
  if (integrantes <= 0) {
    errors.push(t("err_grupo_positivo"));
  }
  if (jogadores.length <= 0) {
    errors.push(t("err_sem_jogadores"));
  }
  if (errors.length > 0) {
    draftAviso(errors);
    return;
  }
  draftAviso([]);
  let usarMusica = musicasSelecionadas.length > 0;
  let usarProdutor = produtoresSelecionados.length > 0;
  let pool = [];
  //idols — forçar type explicitamente antes de entrar no pool
  const idolsComType = sortearIdols(selecionados, totalIdols).map(i => ({ ...i, type: i.type || "Idol" }));
  pool = pool.concat(idolsComType);
  //music
  if (usarMusica) {
    let musicas = sortearIdols(musicasSelecionadas, jogadores.length);
    musicas.forEach(m => m.type = "music");
    pool = pool.concat(musicas);
  }
  //producer
  if (usarProdutor) {
    let produtores = sortearIdols(produtoresSelecionados, jogadores.length);
    produtores.forEach(p => p.type = "producer");
    pool = pool.concat(produtores);
  }
  //garantir que idols têm type antes de salvar
  pool = pool.map(item => ({
    ...item,
    type: item.type && item.type !== "" ? item.type : "Idol"
  }));
  localStorage.setItem("draftData", JSON.stringify({
    jogadores,
    integrantes,
    pool,
    usarMusica,
    usarProdutor
  }));
  const draftgameHref = pegarHrefJogo("draft-game-page.html");
  window.location.href = draftgameHref;
}

// ========================
// IMPORTAÇÃO DE DATABASE
// ========================

//f:parseCSVLine (suporta aspas corretamente)
function parseCSVLine(line) {
  const result = [];
  let current = "";
  let insideQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') { insideQuotes = !insideQuotes; continue; }
    if (char === ',' && !insideQuotes) { result.push(current.trim()); current = ""; }
    else { current += char; }
  }
  result.push(current.trim());
  return result;
}

//f:normalizarChave
function normalizarChave(chave) {
  return chave.toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "");
}

//f:parseArrayDB (suporta "/" e " / " como separadores)
function parseArrayDB(valor) {
  if (!valor) return [];
  return valor.split(/\s*\/\s*/).map(v => v.trim()).filter(Boolean);
}

//f:csvParaObjetos
function csvParaObjetos(texto) {
  const linhas = texto.trim().split("\n");
  const headers = parseCSVLine(linhas[0]).map(h => normalizarChave(h));
  const resultado = [];
  for (let i = 1; i < linhas.length; i++) {
    if (!linhas[i].trim()) continue;
    const valores = parseCSVLine(linhas[i]);
    let obj = {};
    headers.forEach((h, idx) => { obj[h] = valores[idx] || ""; });
    resultado.push(obj);
  }
  return resultado;
}

//f:normalizarObjeto
function normalizarObjeto(obj) {
  const tipo = (obj.tipo || obj.type || "").toLowerCase();
  if (tipo === "idol") {
    return {
      gen:          obj.geracao       || obj.gen        || "",
      type:         "idol",
      id:           obj.id            || "",
      name:         obj.nome          || obj.name       || "",
      group:        obj.grupo         || obj.group      || "",
      aniversario:  obj.aniversario   || obj.birthday   || "",
      vocal:        obj.vocal         || "",
      dance:        obj.dance         || "",
      rap:          obj.rap           || "",
      center:       obj.center        || "",
      visual:       obj.visual        || "",
      especialidade: obj.especialidade || "",
      conceitos:    parseArrayDB(obj.conceitospredominantes || (Array.isArray(obj.conceitos) ? obj.conceitos.join("/") : obj.conceitos) || ""),
      generos:      parseArrayDB(obj.generospredominantes  || (Array.isArray(obj.generos)   ? obj.generos.join("/")   : obj.generos)   || ""),
      fortes:       obj.pontosfortes  || obj.fortes     || "",
      fracos:       obj.pontosfracos  || obj.fracos     || ""
    };
  }
  if (tipo === "music" || tipo === "musica" || tipo === "música") {
    return {
      type:     "music",
      id:       obj.id    || "",
      name:     obj.nome  || obj.name  || "",
      fonte:    obj.fonte || "",
      conceitos: parseArrayDB(obj.conceitosoriginais || (Array.isArray(obj.conceitos) ? obj.conceitos.join("/") : obj.conceitos) || ""),
      generos:   parseArrayDB(obj.generosoriginais   || (Array.isArray(obj.generos)   ? obj.generos.join("/")   : obj.generos)   || "")
    };
  }
  if (tipo === "producer" || tipo === "produtor") {
    return {
      type:     "producer",
      id:       obj.id   || "",
      name:     obj.nome || obj.name || "",
      conceitos: parseArrayDB(obj.conceitospredominantes || (Array.isArray(obj.conceitos) ? obj.conceitos.join("/") : obj.conceitos) || ""),
      generos:   parseArrayDB(obj.generospredominantes   || (Array.isArray(obj.generos)   ? obj.generos.join("/")   : obj.generos)   || ""),
      musicas:   parseArrayDB(obj.musicasconhecidas      || (Array.isArray(obj.musicas)   ? obj.musicas.join("/")   : obj.musicas)   || "")
    };
  }
  return null;
}

//f:importarDatabase
function importarDatabase(event) {
  const file = event.target.files[0];
  if (!file) return;
  const ext = file.name.split(".").pop().toLowerCase();
  const reader = new FileReader();
  reader.onload = function(e) {
    let objetos = [];
    try {
      if (ext === "json") {
        const parsed = JSON.parse(e.target.result);
        objetos = Array.isArray(parsed) ? parsed : [];
      } else if (ext === "csv") {
        objetos = csvParaObjetos(e.target.result);
      } else {
        alert(t("alert_formato_nao_suportado"));
        return;
      }
    } catch(err) {
      alert(t("alert_erro_ler_arquivo") + err.message);
      return;
    }
    let countIdols = 0, countMusics = 0, countProducers = 0, countIgnored = 0;
    objetos.forEach(obj => {
      const norm = normalizarObjeto(obj);
      if (!norm) { countIgnored++; return; }
      if (norm.type === "idol")     { extraIdols.push(norm);     countIdols++;     }
      else if (norm.type === "music")    { extraMusics.push(norm);    countMusics++;    }
      else if (norm.type === "producer") { extraProducers.push(norm); countProducers++; }
    });
    // re-renderizar tudo
    renderizarGrupos();
    renderizarMusicas();
    renderizarProdutores();
    // resetar o input para permitir reimportar o mesmo arquivo
    event.target.value = "";
    const resumo = [
      countIdols     > 0 ? `${countIdols} idol(s)`     : null,
      countMusics    > 0 ? `${countMusics} música(s)`  : null,
      countProducers > 0 ? `${countProducers} produtor(es)` : null,
      countIgnored   > 0 ? `${countIgnored} ignorado(s) (tipo desconhecido)` : null,
    ].filter(Boolean).join(", ");
    alert(`${t("alert_db_importada")}\n${resumo || t("alert_nenhum_item")}`);
  };
  reader.readAsText(file);
}


// ========================
// MODAL TUTORIAL
// ========================

const TUTORIAL_HTML = {
  pt: `
<div class="tut-config-grid">
  <div class="tut-config-block">
    <h3>Montagem do Jogo</h3>
    <ul>
      <li>Cada jogador monta um time escolhendo idols, músicas e produtores.</li>
      <li>A quantidade mínima de idols selecionadas deve ser igual ou superior ao número de jogadores multiplicado pelo número de integrantes.</li>
      <li>Incluir músicas e produtores é opcional.</li>
      <li>Ao desmarcar todas as músicas e produtores, o draft será realizado apenas com idols.</li>
      <li>Ao desmarcar todas as músicas, o draft será realizado apenas com idols e produtores.</li>
      <li>Ao desmarcar todos os produtores, o draft será realizado apenas com idols e músicas.</li>
      <li>Se decidir incluir músicas e produtores, o número mínimo deve ser igual ou superior ao número de jogadores.</li>
    </ul>
  </div>
  <div class="tut-config-block">
    <h3>Pool</h3>
    <ul>
      <li>O Pool é o conjunto de itens disponíveis para seleção.</li>
      <li>Em cada turno você pode escolher um item do Pool.</li>
      <ul><li>Idol, Música ou Produtor</li></ul>
      <li>Ele é limitado ao número de jogadores, ou seja, existe apenas a quantidade exata que cada um precisa.</li>
      <li>Isso significa que:</li>
      <ul>
        <li>Pegar um item do Pool pode prejudicar diretamente a estratégia de outros jogadores.</li>
        <li>Cada escolha importa de verdade, não é apenas montagem individual.</li>
      </ul>
    </ul>
  </div>
  <div class="tut-config-block">
    <h3>Sistema de Escolha (Snake Draft)</h3>
    <ul>
      <li>O draft acontece em turnos e rodadas.</li>
      <li>Cada rodada inverte a ordem dos turnos.</li>
      <li>Exemplo com 4 jogadores:</li>
      <ul>
        <li>Rodada 1: Jogador 1 → Jogador 2 → Jogador 3 → Jogador 4</li>
        <li>Rodada 2: Jogador 4 → Jogador 3 → Jogador 2 → Jogador 1</li>
        <li>Rodada 3: Jogador 1 → Jogador 2 → Jogador 3 → Jogador 4</li>
        <li>Rodada 4: Jogador 4 → Jogador 3 → Jogador 2 → Jogador 1</li>
      </ul>
      <li>Quem escolhe por último, joga duas vezes na mesma rodada.</li>
    </ul>
  </div>
  <div class="tut-config-block">
    <h3>Atributos e Multiplicadores</h3>
    <ul>
      <li>Existem multiplicadores de atributos que afetam a pontuação final do time.</li>
      <li>É extremamente importante escolher a posição certa para cada idol, assim como combinar conceitos e gêneros entre idols, músicas e produtores.</li>
      <li>Cada idol possui:</li>
      <ul>
        <li>Atributos (Vocal, Dance, Rap, Center, Visual)</li>
        <li>Especialidade (posição onde mais se destaca)</li>
        <li>Conceitos Predominantes (conceitos em que mais se destaca)</li>
        <li>Gêneros Predominantes (gêneros em que mais se destaca)</li>
      </ul>
      <li>Cada música possui:</li>
      <ul>
        <li>Conceitos Originais</li>
        <li>Gêneros Originais</li>
      </ul>
      <li>Cada produtor possui:</li>
      <ul>
        <li>Conceitos Predominantes (conceitos em que mais tem sucesso)</li>
        <li>Gêneros Predominantes (gêneros em que mais tem sucesso)</li>
      </ul>
    </ul>
  </div>
  <div class="tut-config-block">
    <h3>Combinações e Sinergias</h3>
    <ul>
      <li>Caso o gênero da música não combine com a sua formação de grupo, você pode tentar mudar o gênero.</li>
      <li>A chance de sucesso depende da sinergia entre os gêneros dos idols e produtores escolhidos.</li>
    </ul>
  </div>
  <div class="tut-config-block">
    <h3>Objetivo</h3>
    <ul>
      <li>O objetivo é criar o melhor time possível com as variáveis disponíveis.</li>
      <li>Este jogo ainda está em desenvolvimento, e os atributos não representam os valores reais das capacidades de um idol.</li>
    </ul>
  </div>
</div>`,
  en: `
<div class="tut-config-grid">
  <div class="tut-config-block">
    <h3>Building the Game</h3>
    <ul>
      <li>Each player builds a team by picking idols, songs, and producers.</li>
      <li>The minimum number of selected idols must be equal to or greater than the number of players multiplied by the group size.</li>
      <li>Including songs and producers is optional.</li>
      <li>If you uncheck all songs and producers, the draft runs with idols only.</li>
      <li>If you uncheck all songs, the draft runs with idols and producers only.</li>
      <li>If you uncheck all producers, the draft runs with idols and songs only.</li>
      <li>If you choose to include songs and producers, the minimum must be equal to or greater than the number of players.</li>
    </ul>
  </div>
  <div class="tut-config-block">
    <h3>Pool</h3>
    <ul>
      <li>The Pool is the set of items available for selection.</li>
      <li>On each turn you can pick one item from the Pool.</li>
      <ul><li>Idol, Song, or Producer</li></ul>
      <li>It's limited to the number of players — there's only exactly enough for everyone.</li>
      <li>This means:</li>
      <ul>
        <li>Taking an item from the Pool can directly hurt other players' strategy.</li>
        <li>Every pick genuinely matters — it's not just individual team-building.</li>
      </ul>
    </ul>
  </div>
  <div class="tut-config-block">
    <h3>Pick Order (Snake Draft)</h3>
    <ul>
      <li>The draft happens in turns and rounds.</li>
      <li>Each round reverses the turn order.</li>
      <li>Example with 4 players:</li>
      <ul>
        <li>Round 1: Player 1 → Player 2 → Player 3 → Player 4</li>
        <li>Round 2: Player 4 → Player 3 → Player 2 → Player 1</li>
        <li>Round 3: Player 1 → Player 2 → Player 3 → Player 4</li>
        <li>Round 4: Player 4 → Player 3 → Player 2 → Player 1</li>
      </ul>
      <li>Whoever picks last goes twice in the same round.</li>
    </ul>
  </div>
  <div class="tut-config-block">
    <h3>Attributes & Multipliers</h3>
    <ul>
      <li>There are attribute multipliers that affect your team's final score.</li>
      <li>It's extremely important to pick the right position for each idol, and to combine concepts and genres across idols, songs, and producers.</li>
      <li>Each idol has:</li>
      <ul>
        <li>Attributes (Vocal, Dance, Rap, Center, Visual)</li>
        <li>Specialty (the position they excel most at)</li>
        <li>Main Concepts (the concepts they excel most at)</li>
        <li>Main Genres (the genres they excel most at)</li>
      </ul>
      <li>Each song has:</li>
      <ul>
        <li>Original Concepts</li>
        <li>Original Genres</li>
      </ul>
      <li>Each producer has:</li>
      <ul>
        <li>Main Concepts (the concepts they're most successful with)</li>
        <li>Main Genres (the genres they're most successful with)</li>
      </ul>
    </ul>
  </div>
  <div class="tut-config-block">
    <h3>Combos & Synergies</h3>
    <ul>
      <li>If a song's genre doesn't match your group's lineup, you can try changing the genre.</li>
      <li>The success chance depends on the synergy between the genres of the chosen idols and producers.</li>
    </ul>
  </div>
  <div class="tut-config-block">
    <h3>Goal</h3>
    <ul>
      <li>The goal is to build the best possible team with the available variables.</li>
      <li>This game is still in development, and the attributes don't represent real idols' actual abilities.</li>
    </ul>
  </div>
</div>`
};

//f:abrirTutorial
function abrirTutorial() {
  const modal = document.getElementById("modalTutorial");
  const body  = document.getElementById("modalTutorialBody");
  if (!modal) return;
  if (body.dataset.loadedLang !== currentLanguage) {
    body.innerHTML = TUTORIAL_HTML[currentLanguage] || TUTORIAL_HTML.pt;
    body.dataset.loadedLang = currentLanguage;
  }
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

//f:fecharTutorial
function fecharTutorial() {
  const modal = document.getElementById("modalTutorial");
  if (modal) modal.style.display = "none";
  document.body.style.overflow = "";
}

//f:fecharTutorialFora
function fecharTutorialFora(event) {
  if (event.target === document.getElementById("modalTutorial")) fecharTutorial();
}

document.addEventListener("keydown", e => {
  if (e.key === "Escape") { fecharTutorial(); fecharTutorialLobby(); }
});

// ========================
// MODAL TUTORIAL LOBBY
// ========================

const TUTORIAL_LOBBY_HTML = {
  pt: `
<div class="tut-config-grid">

  <div class="tut-config-block" style="grid-column: 1 / -1">
    <h3>O que é o Lobby?</h3>
    <ul>
      <li>O Lobby é o estado inicial do draft: a <strong>ordem sorteada dos jogadores</strong> e o <strong>pool de itens</strong> (idols, músicas e produtores) selecionados para a partida.</li>
      <li>Exportar o Lobby salva um arquivo <code>.txt</code> com essas informações, permitindo retomar ou compartilhar exatamente a mesma configuração.</li>
      <li>Importar o Lobby restaura tudo automaticamente e redireciona para o jogo sem precisar reconfigurar nada.</li>
    </ul>
  </div>

  <div class="tut-config-block">
    <h3>Exportar o Lobby</h3>
    <ul>
      <li>Durante o Draft Game, clique em <strong>⬇ Exportar Draft</strong> no canto superior direito do header.</li>
      <li>Um arquivo <code>stray7_draft_AAAA-MM-DD.txt</code> será baixado automaticamente.</li>
      <li>O arquivo contém:</li>
      <ul>
        <li>A ordem sorteada dos jogadores</li>
        <li>O número de integrantes por time</li>
        <li>Todos os idols, músicas e produtores do pool</li>
      </ul>
      <li>Cada item do pool inclui seu <code>id</code> interno entre <code>{}</code> — não remova essa parte ao editar o arquivo.</li>
    </ul>
  </div>

  <div class="tut-config-block">
    <h3>Importar o Lobby</h3>
    <ul>
      <li>Na página de Configuração do Draft, clique em <strong>⬆ Importar Draft</strong>.</li>
      <li>Selecione o arquivo <code>.txt</code> exportado anteriormente.</li>
      <li>O sistema irá:</li>
      <ul>
        <li>Preencher automaticamente os nomes e quantidade de jogadores</li>
        <li>Restaurar o tamanho do grupo</li>
        <li>Pré-selecionar os checkboxes dos idols, músicas e produtores do pool original</li>
        <li>Preservar a ordem sorteada — sem novo sorteio</li>
      </ul>
      <li>Você será redirecionado ao jogo imediatamente.</li>
      <li>Se algum item do pool não for encontrado na database atual (ex: veio de uma database importada volatilmente), ele será ignorado e um aviso será exibido.</li>
    </ul>
  </div>

  <div class="tut-config-block" style="grid-column: 1 / -1">
  
  <h3>Importar Database externa (.csv)</h3>
    <ul>
      <li>O que é um arquivo CSV?</li>
      <ul>
        <li>CSV significa "Comma-Separated Values" (Valores Separados por Vírgula).</li>
        <li>É um formato de arquivo simples usado para armazenar dados tabulares, onde cada linha representa um registro e cada coluna representa um campo do registro.</li>
        <li>As colunas são separadas por vírgulas, e as linhas são separadas por quebras de linha.</li>
        <li>Para simplificar: é um arquivo Excel que computadores entendem.</li>
      </ul>
      <li>É possível adicionar idols, músicas e produtores além da database padrão usando um arquivo <code>.csv</code>.</li>
      <li>Clique em <strong>⬆ Importar Database</strong> no bloco de Seleção de Idols.</li>
      <li><strong>Atenção:</strong> a database importada é volátil — ela se perde ao recarregar a página.</li>
    </ul>
    
    <br>
    <strong style="color:#d4b4ff">Formato do CSV — Idols</strong>
    <p style="color:#b8b8c8; font-size:13px; margin: 6px 0 4px">Cabeçalho obrigatório (nomes das colunas, nessa ordem):</p>
    <code class="tut-code">Geracao,Tipo,ID,Nome,Grupo,Aniversário,Vocal,Dance,Rap,Center,Visual,Especialidade,ConceitosPredominantes,GenerosPredominantes,PontosFortes,PontosFracos</code>
    <img src="../assets/tutorial/exemplo_idol_csv.png" style="width:100%; border-radius:8px; margin:10px 0">
    <ul style="margin-top:10px">
      <li>Monte um arquivo Excel com as colunas correspondentes ao cabeçalho acima (obrigatório)</li>
      <li>A coluna <strong>Tipo</strong> deve ser preenchida com <code>idol</code></li>
      <li>A coluna <strong>ID</strong> é simplesmente o nome do grupo e o nome do idol juntos: sem espaços, caracteres especiais ou acentos (ex: <code>unchildyeeun</code>)</li>
      <li>As colunas dos <strong>Atributos (Vocal, Dance, Rap, Center, Visual)</strong> devem ser preenchidas com letras <code>S / A / B / C / D</code></li>
      <li>A coluna <strong>Aniversário</strong> é opcional, contém apenas a data de nascimento do Idol no formato dd-mm-aaaa. O formato pode ser alterado, inclusive, pode ser escrito por extenso. Evite usar vírgula, pois isso quebra o parse do <code>.csv</code></li>
      <li>As colunas <strong>Conceitos Predominantes</strong> e <strong>Gêneros Predominantes</strong> devem conter dois valores separados por <code>/</code> (ex: <code>Girl Crush / Performance</code>)</li>
      <li>As colunas <strong>Pontos Fortes</strong> e <strong>Pontos Fracos</strong> não precisam ser preenchidas, são apenas observações. Mas caso escolham preencher, usem aspas duplas <code>"</code> para envolver seu conteúdo</li>
    </ul>
    
    <br>
    <strong style="color:#d4b4ff">Formato do CSV — Músicas</strong>
    <code class="tut-code">Tipo,ID,Nome,Fonte,ConceitosOriginais,GenerosOriginais</code>
    <img src="../assets/tutorial/exemplo_music_csv.png" style="width:100%; max-width:1000px; border-radius:8px; margin:10px 0">
    <ul style="margin-top:10px">
      <li>Monte um arquivo Excel com as colunas correspondentes ao cabeçalho acima (obrigatório)</li>
      <li>A coluna <strong>Tipo</strong> deve ser preenchida com <code>music</code></li>
      <li>A coluna <strong>ID</strong> é simplesmente o nome da fonte e o nome da música juntos: sem espaços, caracteres especiais ou acentos (ex: <code>girlsplanet999anotherdream</code>)</li>
      <li>A coluna <strong>Fonte</strong> é o nome do programa ou álbum do qual a música faz parte</li>
      <li>As colunas <strong>Conceitos Originais</strong> e <strong>Gêneros Originais</strong> devem conter três valores separados por <code>/</code> (ex: <code>Girl Crush / Performance / Dreamcore</code>)</li>
    </ul>
    
    <br>
    <strong style="color:#d4b4ff">Formato do CSV — Produtores</strong>
    <code class="tut-code">Tipo,ID,Nome,ConceitosPredominantes,GenerosPredominantes,MusicasConhecidas</code>
    <img src="../assets/tutorial/exemplo_producer_csv.png" style="width:100%; border-radius:8px; margin:10px 0">
    <ul style="margin-top:10px">
      <li>Monte um arquivo Excel com as colunas correspondentes ao cabeçalho acima (obrigatório)</li>
      <li>A coluna <strong>Tipo</strong> deve ser preenchida com <code>producer</code></li>
      <li>A coluna <strong>ID</strong> é simplesmente producer mais o nome do produtor (ex: <code>producerartronicwaves</code>)</li>
      <li>As colunas <strong>Conceitos Predominantes</strong> e <strong>Gêneros Predominantes</strong> devem conter três valores separados por <code>/</code> (ex: <code>Girl Crush / Performance / Conceptual</code>)</li>
      <li>A coluna <strong>Músicas Conhecidas</strong> é opcional. Serve para exibir uma lista de músicas associadas ao produtor. Não existe um limite de músicas, mas devem estar separadas por / (ex: <code>tripleS - Rising / ARTMS - Icarus / LOONA Olivia Hye - Egoist / LOONA Hyunjin - Around You / LOONA Haseul - Let Me In</code>)</li>
    </ul>

    <br>
    <strong style="color:#d4b4ff">Como montar o arquivo CSV (Excel):</strong>
    <ul style="margin-top:10px 0 0">
      <li>Apenas baixe os arquivos criados acima no formato .csv</li>
    </ul>
    <img src="../assets/tutorial/exemplo_csv.png" style="width:100%; border-radius:8px; margin: 0">
    <p style="color:#b8b8c8; font-size:12px">O mesmo arquivo pode conter idols, músicas e produtores misturados — o sistema detecta pelo campo <code>Tipo</code>.</p>

  </div>

</div>`,
  en: `
<div class="tut-config-grid">

  <div class="tut-config-block" style="grid-column: 1 / -1">
    <h3>What is the Lobby?</h3>
    <ul>
      <li>The Lobby is the draft's starting state: the <strong>drawn player order</strong> and the <strong>item pool</strong> (idols, songs, and producers) selected for the match.</li>
      <li>Exporting the Lobby saves a <code>.txt</code> file with this info, letting you resume or share the exact same setup.</li>
      <li>Importing the Lobby restores everything automatically and redirects to the game without needing to reconfigure anything.</li>
    </ul>
  </div>

  <div class="tut-config-block">
    <h3>Export the Lobby</h3>
    <ul>
      <li>During the Draft Game, click <strong>⬇ Export Draft</strong> in the top-right corner of the header.</li>
      <li>A <code>stray7_draft_YYYY-MM-DD.txt</code> file will download automatically.</li>
      <li>The file contains:</li>
      <ul>
        <li>The drawn player order</li>
        <li>The number of members per team</li>
        <li>All idols, songs, and producers in the pool</li>
      </ul>
      <li>Each pool item includes its internal <code>id</code> between <code>{}</code> — don't remove that part if you edit the file.</li>
    </ul>
  </div>

  <div class="tut-config-block">
    <h3>Import the Lobby</h3>
    <ul>
      <li>On the Draft Setup page, click <strong>⬆ Import Draft</strong>.</li>
      <li>Select the previously exported <code>.txt</code> file.</li>
      <li>The system will:</li>
      <ul>
        <li>Automatically fill in the names and number of players</li>
        <li>Restore the group size</li>
        <li>Pre-select the checkboxes for the idols, songs, and producers from the original pool</li>
        <li>Preserve the drawn order — no new draw</li>
      </ul>
      <li>You'll be redirected to the game immediately.</li>
      <li>If any pool item isn't found in the current database (e.g. it came from a volatile imported database), it will be skipped and a warning shown.</li>
    </ul>
  </div>

  <div class="tut-config-block" style="grid-column: 1 / -1">
  
  <h3>Import an external Database (.csv)</h3>
    <ul>
      <li>What's a CSV file?</li>
      <ul>
        <li>CSV stands for "Comma-Separated Values".</li>
        <li>It's a simple file format used to store tabular data, where each line is a record and each column is a field.</li>
        <li>Columns are separated by commas, and lines are separated by line breaks.</li>
        <li>To put it simply: it's an Excel file that computers understand.</li>
      </ul>
      <li>You can add idols, songs, and producers beyond the default database using a <code>.csv</code> file.</li>
      <li>Click <strong>⬆ Import Database</strong> in the Idol Selection block.</li>
      <li><strong>Note:</strong> the imported database is volatile — it's lost when the page is reloaded.</li>
    </ul>
    
    <br>
    <strong style="color:#d4b4ff">CSV Format — Idols</strong>
    <p style="color:#b8b8c8; font-size:13px; margin: 6px 0 4px">Required header (column names, in this order):</p>
    <code class="tut-code">Geracao,Tipo,ID,Nome,Grupo,Aniversário,Vocal,Dance,Rap,Center,Visual,Especialidade,ConceitosPredominantes,GenerosPredominantes,PontosFortes,PontosFracos</code>
    <img src="../assets/tutorial/exemplo_idol_csv.png" style="width:100%; border-radius:8px; margin:10px 0">
    <ul style="margin-top:10px">
      <li>Build an Excel file with columns matching the header above (required)</li>
      <li>The <strong>Tipo</strong> column must be filled with <code>idol</code></li>
      <li>The <strong>ID</strong> column is simply the group name and idol name combined: no spaces, special characters, or accents (e.g. <code>unchildyeeun</code>)</li>
      <li>The <strong>Attribute (Vocal, Dance, Rap, Center, Visual)</strong> columns must be filled with the letters <code>S / A / B / C / D</code></li>
      <li>The <strong>Aniversário</strong> (birthday) column is optional, containing just the idol's birth date in dd-mm-yyyy format. The format can be changed, and it can even be written out in full. Avoid using commas, since that breaks the <code>.csv</code> parsing</li>
      <li>The <strong>Conceitos Predominantes</strong> and <strong>Gêneros Predominantes</strong> columns must contain two values separated by <code>/</code> (e.g. <code>Girl Crush / Performance</code>)</li>
      <li>The <strong>Pontos Fortes</strong> and <strong>Pontos Fracos</strong> columns don't need to be filled in — they're just notes. But if you do fill them in, wrap the content in double quotes <code>"</code></li>
    </ul>
    
    <br>
    <strong style="color:#d4b4ff">CSV Format — Songs</strong>
    <code class="tut-code">Tipo,ID,Nome,Fonte,ConceitosOriginais,GenerosOriginais</code>
    <img src="../assets/tutorial/exemplo_music_csv.png" style="width:100%; max-width:1000px; border-radius:8px; margin:10px 0">
    <ul style="margin-top:10px">
      <li>Build an Excel file with columns matching the header above (required)</li>
      <li>The <strong>Tipo</strong> column must be filled with <code>music</code></li>
      <li>The <strong>ID</strong> column is simply the source name and song name combined: no spaces, special characters, or accents (e.g. <code>girlsplanet999anotherdream</code>)</li>
      <li>The <strong>Fonte</strong> column is the name of the show or album the song is from</li>
      <li>The <strong>Conceitos Originais</strong> and <strong>Gêneros Originais</strong> columns must contain three values separated by <code>/</code> (e.g. <code>Girl Crush / Performance / Dreamcore</code>)</li>
    </ul>
    
    <br>
    <strong style="color:#d4b4ff">CSV Format — Producers</strong>
    <code class="tut-code">Tipo,ID,Nome,ConceitosPredominantes,GenerosPredominantes,MusicasConhecidas</code>
    <img src="../assets/tutorial/exemplo_producer_csv.png" style="width:100%; border-radius:8px; margin:10px 0">
    <ul style="margin-top:10px">
      <li>Build an Excel file with columns matching the header above (required)</li>
      <li>The <strong>Tipo</strong> column must be filled with <code>producer</code></li>
      <li>The <strong>ID</strong> column is simply "producer" plus the producer's name (e.g. <code>producerartronicwaves</code>)</li>
      <li>The <strong>Conceitos Predominantes</strong> and <strong>Gêneros Predominantes</strong> columns must contain three values separated by <code>/</code> (e.g. <code>Girl Crush / Performance / Conceptual</code>)</li>
      <li>The <strong>Músicas Conhecidas</strong> (known songs) column is optional. It shows a list of songs associated with the producer. There's no song limit, but they must be separated by / (e.g. <code>tripleS - Rising / ARTMS - Icarus / LOONA Olivia Hye - Egoist / LOONA Hyunjin - Around You / LOONA Haseul - Let Me In</code>)</li>
    </ul>

    <br>
    <strong style="color:#d4b4ff">How to build the CSV file (Excel):</strong>
    <ul style="margin-top:10px 0 0">
      <li>Just download the files you created above in .csv format</li>
    </ul>
    <img src="../assets/tutorial/exemplo_csv.png" style="width:100%; border-radius:8px; margin: 0">
    <p style="color:#b8b8c8; font-size:12px">The same file can contain idols, songs, and producers mixed together — the system detects the type via the <code>Tipo</code> field.</p>

  </div>

</div>`
};

//f:abrirTutorialLobby
function abrirTutorialLobby() {
  const modal = document.getElementById("modalTutorialLobby");
  const body  = document.getElementById("modalTutorialLobbyBody");
  if (!modal) return;
  if (body.dataset.loadedLang !== currentLanguage) {
    body.innerHTML = TUTORIAL_LOBBY_HTML[currentLanguage] || TUTORIAL_LOBBY_HTML.pt;
    body.dataset.loadedLang = currentLanguage;
  }
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

//f:fecharTutorialLobby
function fecharTutorialLobby() {
  const modal = document.getElementById("modalTutorialLobby");
  if (modal) modal.style.display = "none";
  document.body.style.overflow = "";
}

//f:fecharTutorialLobbyFora
function fecharTutorialLobbyFora(event) {
  if (event.target === document.getElementById("modalTutorialLobby")) fecharTutorialLobby();
}

//f:importarDraftTxt
function importarDraftTxt(event) {
  const file = event.target.files[0];
  if (!file) return;
  if (!file.name.endsWith(".txt")) { alert(t("alert_use_txt")); return; }

  const reader = new FileReader();
  reader.onload = function(e) {
    const texto = e.target.result.replace(/\r/g, "");
    // extrair jogadores e integrantes
    const jogadores = [];
    let integrantes = 0;
    const blocoJogadores = texto.match(/--- JOGADORES[\s\S]*?(?=\n---|$)/);
    if (blocoJogadores) {
      blocoJogadores[0].split("\n").forEach(linha => {
        const matchJog = linha.match(/^\s+\d+\.\s+(.+)$/);
        if (matchJog) jogadores.push(matchJog[1].trim());
        const matchInt = linha.match(/Integrantes por time:\s*(\d+)/);
        if (matchInt) integrantes = parseInt(matchInt[1]);
      });
    }

    // extrair objetos do pool a partir das databases disponíveis 
    const nomesIdols      = extrairNomesBloco(texto, "POOL DE IDOLS",     /^\s+\[.+?\]\s+(.+?)\s{2}/);
    const nomesMusicas    = extrairNomesBloco(texto, "POOL DE MÚSICAS",    /^\s+(.+?)(?:\s{2}|$)/);
    const nomesProdutores = extrairNomesBloco(texto, "POOL DE PRODUTORES", /^\s+(.+?)(?:\s{2}|$)/);

    const poolIdols     = nomesIdols.map(item =>
      getIdols().find(i => item.id ? i.id === item.id : i.name === item.name)
    ).filter(Boolean).map(i => ({ ...i, type: "Idol" }));

    const poolMusicas   = nomesMusicas.map(item =>
      getMusics().find(m => item.id ? m.id === item.id : m.name === item.name)
    ).filter(Boolean).map(m => ({ ...m, type: "music" }));

    const poolProdutores= nomesProdutores.map(item =>
      getProducers().find(p => item.id ? p.id === item.id : p.name === item.name)
    ).filter(Boolean).map(p => ({ ...p, type: "producer" }));

    const pool = [...poolIdols, ...poolMusicas, ...poolProdutores];

    if (jogadores.length === 0 || integrantes === 0) {
      alert(t("alert_arquivo_invalido"));
      event.target.value = "";
      return;
    }
    // desmarcar tudo e marcar só o que estava na pool
    desmarcarTodosGeracoes();
    desmarcarTodasMusicas();
    desmarcarTodosProdutores();

    document.querySelectorAll("#groupsContainer input[type='checkbox'][value]").forEach(cb => {
      if (poolIdols.some(i => i.id === cb.value)) cb.checked = true;
    });
    atualizarCheckboxesGrupo();
    document.querySelectorAll("#musicContainer input[type='checkbox']").forEach(cb => {
      if (poolMusicas.some(m => m.id === cb.value)) cb.checked = true;
    });
    document.querySelectorAll("#producerContainer input[type='checkbox']").forEach(cb => {
      if (poolProdutores.some(p => p.id === cb.value)) cb.checked = true;
    });

    // salvar no localStorage e redirecionar direto para o jogo
    localStorage.setItem("draftData", JSON.stringify({
      jogadores,
      integrantes,
      pool,
      usarMusica:   poolMusicas.length > 0,
      usarProdutor: poolProdutores.length > 0,
      // ordemBase = [0,1,...,n-1] pois jogadores já estão na ordem sorteada
      ordemBase: jogadores.map((_, i) => i)
    }));

    event.target.value = "";

    const ausentes = nomesIdols.length - poolIdols.length
                   + nomesMusicas.length - poolMusicas.length
                   + nomesProdutores.length - poolProdutores.length;

    if (ausentes > 0) {
      alert(t("alert_itens_ausentes").replace("{n}", ausentes).replace(/\\n/g, "\n"));
    }

    window.location.href = pegarHrefJogo("draft-game-page.html");
  };
  reader.readAsText(file);
}

//f:extrairNomesBloco — helper para pegar ids/nomes de uma seção do .txt
function extrairNomesBloco(texto, titulo, regex) {
  const itens = [];
  const escapado = titulo.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = texto.match(new RegExp(`--- ${escapado} ---([\\s\\S]*?)(?=\\n---|$)`));
  if (!match) return itens;
  match[1].split("\n").forEach(linha => {
    if (linha.trim() === "" || linha.trim() === "(nenhum)") return;
    const idMatch = linha.match(/\{id:([^}]+)\}/);
    const m = linha.match(regex);
    if (m) itens.push({ id: idMatch ? idMatch[1].trim() : null, name: m[1].trim() });
  });
  return itens;
}

// ========================
// EXPORTAR DRAFT
// ========================

//f:injetarBotaoExportar
function injetarBotaoExportar() {
  const headerRight = document.querySelector(".header-right");
  if (!headerRight) return;
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

window.addEventListener("DOMContentLoaded", () => {
  aplicarIdioma(currentLanguage);
});

//f:render onLoad
window.addEventListener("load", () => {
  if (document.getElementById("groupsContainer"))   renderizarGrupos();
  if (document.getElementById("producerContainer")) renderizarProdutores();
  if (document.getElementById("musicContainer"))    renderizarMusicas();
  if (document.querySelector(".btn-iniciar-draft")) iniciarAvisoDraft();
  if (document.querySelector(".game-modes")) iniciarCarouselMenus();
  const paginaAtual = location.pathname.split("/").pop();
  if (paginaAtual === "draft-game-page.html") injetarBotaoExportar();
  const isPatchPage = location.pathname.includes("patchnotes-page");
  if (isPatchPage) renderPatchNotes();
});