// ====================================================================
// simulation-script.js — exclusivo de simulation-page.html
//   • boards de cada jogador, posições (roles), travar escolha e troca de gênero da música
//   • cálculo do score e ranking
//   • regras de drag and drop da simulação (card, modal e motor do drag ficam em cards-script.js)
// Depende de pages-script.js (t, aoMudarIdioma) e de cards-script.js.
// ====================================================================

// =============================
// CONSTANTES VARIÁVEIS GLOBAIS
// =============================
const ROLE_OPTIONS_IDOL = ["Main Vocal","Lead Vocal","Main Dancer","Lead Dancer","Main Rapper","Lead Rapper","Visual","Center"];
// Gêneros que podem entrar na música pela troca de gênero.
const GENEROS_DISPONIVEIS = ["EDM","Electro-Synth","Emotional","Experimental","Groove","Hip-Hop","Pop","R&B","Rock","Tropical"];
const NUMBERED_ROLES = ["Lead Vocal","Lead Dancer","Lead Rapper"];
// Controle da área de resultados:
// false = o botão "Calcular Score" e o placar não são exibidos.
// true  = o botão volta a aparecer após todos os jogadores travarem suas escolhas.
const MOSTRAR_SCORE = false;
// Controle da troca de gênero da música:
// false = a chave "Mudar gênero" não aparece e a música mantém os gêneros originais.
// O resultado do sorteio só é revelado (para todos) quando o último jogador trava a escolha.
const PERMITIR_TROCA_GENERO = true;
// Os valores das posições (ROLE_OPTIONS_IDOL) permanecem fixos em pt para não quebrar a lógica de
// validação/pontuação — são termos padrão da indústria K-pop. O placeholder "Selecione" é traduzido.
// Dicas do carrossel do painel do produtor (chaves em translations.js). Adicione ou remova chaves à vontade.
const DICAS_SIMULACAO = ["sim_dica_1", "sim_dica_2", "sim_dica_3", "sim_dica_4", "sim_dica_5", "sim_dica_6"];
const DICAS_INTERVALO_MS = 8000;
let simData       = null;
let boardSlots    = {};
let roleBoard     = {};
let lockedPlayers = {};
let trocaGenero   = {};   // por jogador: { mudarGenero, entra, sai, resolvida, sucesso, chance }
let indiceDica    = 0;    // dica atual do carrossel (a mesma em todos os jogadores)
let animarPainelTroca = {};   // por jogador: true só no render logo após ligar a chave (evita piscar nos demais renders)

// =====================
// INICIALIZAÇÃO
// =====================

//f:iniciarPaginaSimulacao
//Carrega o simulacaoData, monta os boards de cada jogador e desenha a tela
function iniciarPaginaSimulacao() {
  configurarDragSimulacao();
  const raw = localStorage.getItem("simulacaoData");
  if (!raw) {
    document.getElementById("simBoard").innerHTML = "<p>Erro ao carregar dados.</p>";
    return;
  }
  simData = JSON.parse(raw);
  const cfg = simData.config;
  // Ajusta a lista salva no draft ao número de slots esperado (preenche com null)
  const ajustarSlots = (lista, tamanho) =>
    Array.from({ length: tamanho }, (_, i) => (lista && lista[i]) ? { ...lista[i] } : null);
  simData.ordem.forEach(pi => {
    const p = simData.picks[pi] || {};
    // Os cards já entram nas mesmas posições em que ficaram no draft
    boardSlots[pi] = {
      idol:     ajustarSlots(p.idol, cfg.integrantes),
      music:    cfg.usarMusica   ? ajustarSlots(p.music, 1)    : [],
      producer: cfg.usarProdutor ? ajustarSlots(p.producer, 1) : []
    };
    roleBoard[pi] = {
      idol:     Array(simData.config.integrantes).fill("—"),
      music:    simData.config.usarMusica    ? ["—"] : [],
      producer: simData.config.usarProdutor  ? ["—"] : []
    };
    lockedPlayers[pi] = false;
    trocaGenero[pi] = criarEstadoTrocaGenero();
  });
  iniciarDropdowns();
  iniciarCarrosselDicas();
  render();
}

//f:atualizarIdiomaSimulacao
//Redesenha o tabuleiro (e o placar, se aberto) no novo idioma
function atualizarIdiomaSimulacao() {
  if (!simData) return;   // os dados ainda não foram carregados (primeira aplicação do idioma)
  render();
  const resultado = document.getElementById("resultadoContainer");
  if (resultado && resultado.children.length) mostrarResultados();
}

aoMudarIdioma(atualizarIdiomaSimulacao);
window.addEventListener("DOMContentLoaded", iniciarPaginaSimulacao);

// =====================
// DRAG QUEEN (regras da simulação)
// =====================

//f:configurarDragSimulacao
//Registra no motor de drag (cards-script.js) o que pode ser arrastado e o que acontece ao soltar
function configurarDragSimulacao() {
  configurarDrag({
    // jogador que já travou a escolha não move mais os cards
    podeArrastar: (item, origem, playerIndex) => playerIndex === null || !lockedPlayers[playerIndex],
    criarPayload(item, origem, playerIndex, slotIndex) {
      if (playerIndex !== null && lockedPlayers[playerIndex]) return null;
      return {
        item,
        fromPlayer: playerIndex,
        fromType: origem === "board" ? getItemType(item) : null,
        fromIndex: slotIndex
      };
    },
    aoSoltar(elementoAlvo, payload) {
      //drop em um slot (fora de um slot, o card simplesmente volta ao lugar)
      const slot = elementoAlvo.closest(".slot");
      if (slot) executarDropNoSlot(slot, payload);
    }
  });
}

// =====================
// BTS - MIC DROP
// =====================

//f:executarDropNoSlot
function executarDropNoSlot(slot, data) {
  if (!data) return;
  const tipo = slot.dataset.tipo;
  const pi = slot.dataset.pi;
  const slotIndex = Number(slot.dataset.idx);
  if (!tipo || pi === undefined || Number.isNaN(slotIndex)) return;
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
    validarTrocaGenero(pi);
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
    } else {
      extras.appendChild(criarBoxAcoes(pi, isLocked));   // sem produtor, as ações ficam numa caixa própria
    }
    playerRow.appendChild(extras);
    section.appendChild(playerRow);
    container.appendChild(section);
  });
  injetarBotaoResultado();
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
//Cria o slot com o card e, abaixo dele, o painel do tipo: posição (idol), troca de gênero (música) ou ações (produtor)
function criarSlotWrapper(pi, tipo, idx, item, isLocked) {
  const wrapper = document.createElement("div");
  wrapper.className = "simSlotWrapper";
  const slot = document.createElement("div");
  slot.className = "slot simBoardSlot";
  slot.dataset.pi   = pi;
  slot.dataset.tipo = tipo;
  slot.dataset.idx  = idx;
  if (item) {
    const card = criarCard(item, { bloqueado: isLocked, origem: "board", playerIndex: pi, slotIndex: idx });
    slot.appendChild(card);
  }
  wrapper.appendChild(slot);
  const painel = tipo === "idol"  ? criarPainelPosicao(pi, idx, item, isLocked)
               : tipo === "music" ? criarPainelTrocaGenero(pi, isLocked)
               :                    criarPainelAcoes(pi, isLocked);
  if (painel) wrapper.appendChild(painel);
  return wrapper;
}

// =====================
// PAINÉIS DOS CARDS
// =====================

//f:criarLinhaInfo
//Cria uma linha "Rótulo: valor" do painel (dica opcional como tooltip).
//Com quebrarLinha, o valor vai para a linha de baixo e sempre ocupa uma linha só (assim os painéis têm a mesma altura)
function criarLinhaInfo(rotulo, valor, dica = "", quebrarLinha = false) {
  const linha = document.createElement("div");
  linha.className = "simInfoLinha";
  if (dica) linha.title = dica;
  const negrito = document.createElement("b");
  negrito.textContent = `${rotulo}:`;
  linha.append(negrito);
  if (quebrarLinha) {
    const texto = document.createElement("span");
    texto.className = "simInfoValor";
    texto.textContent = valor;
    texto.title = valor;   // se algum dia não couber, o texto completo aparece ao passar o mouse
    linha.append(document.createElement("br"), texto);
  } else {
    linha.append(` ${valor}`);
  }
  return linha;
}

//f:formatarListaInfo
//Converte uma lista (ou texto) de conceitos/gêneros em "A, B" para o painel ("-" se vazia)
function formatarListaInfo(valor) {
  if (Array.isArray(valor)) return valor.filter(Boolean).join(", ") || "-";
  return (valor ?? "").toString().trim() || "-";
}

//f:criarPainelPosicao
//Cria o painel abaixo do card da idol: atributos, especialidade e o menu para escolher a posição
function criarPainelPosicao(pi, idx, item, isLocked) {
  if (!item) return null;
  const painel = document.createElement("div");
  painel.className = "simPanel posPanel" + (isLocked ? " locked" : "");

  const titulo = document.createElement("div");
  titulo.className = "simPanelTitle";
  titulo.textContent = t("sim_painel_posicao");

  // depois de travar, o painel avisa que a posição foi registrada (como no painel da troca de gênero)
  const registrada = document.createElement("div");
  registrada.className = "simStatusRegistrado";
  registrada.textContent = `🔒 ${t("sim_posicao_registrada")}`;

  // ordem dos atributos igual à do modal: Vocal, Dance, Rap, Center, Visual
  const nomes = ["modal_vocal", "modal_dance", "modal_rap", "modal_center", "modal_visual"].map(chave => t(chave));
  const ranks = [item.vocal, item.dance, item.rap, item.center, item.visual].map(r => r || "-");
  const dica  = nomes.map((nome, i) => `${nome} ${ranks[i]}`).join(" · ");
  const info = document.createElement("div");
  info.className = "simPanelInfo";
  info.append(
    criarLinhaInfo(t("sim_atributos"), ranks.join(" "), dica),
    criarLinhaInfo(t("modal_especialidade"), item.especialidade || "-"),
    criarLinhaInfo(t("sim_conceitos"), formatarListaInfo(item.conceitos), "", true),
    criarLinhaInfo(t("sim_generos"), formatarListaInfo(item.generos), "", true)
  );

  const atual = roleBoard[pi].idol[idx];
  const posicao = ROLE_OPTIONS_IDOL.includes(atual) ? atual : null;
  const menu = criarDropdown({
    classe: "pos", valor: posicao, desabilitado: isLocked,
    textoValor: posicao ? getRoleDisplay(pi, "idol", idx, posicao) : null,
    opcoes: ROLE_OPTIONS_IDOL,
    aoEscolher: (role) => { roleBoard[pi].idol[idx] = role; render(); }
  });

  painel.append(titulo);
  if (isLocked) painel.append(registrada);
  painel.append(info, menu);
  return painel;
}

//f:criarBotaoTravar
//Cria o botão "Travar Escolha" (com a mensagem de erro acima dele) do jogador
function criarBotaoTravar(pi, isLocked) {
  const btn = document.createElement("button");
  const pronto = podeTravar(pi);
  btn.className = "btnTravar" + (isLocked ? " btnTravado" : "") + (!pronto ? " btnDesabilitado" : "");
  btn.innerText = isLocked ? t("btn_travado") : t("btn_travar_escolha");
  btn.disabled  = isLocked;
  const motivo = motivoBloqueioTravar(pi);
  if (!isLocked && !pronto) btn.title = t(motivo === "troca" ? "sim_tooltip_travar_troca" : "sim_tooltip_travar");
  btn.onclick   = () => {
    if (pronto) {
      resolverTrocaGenero(pi);   // sorteio único: acontece ao travar e fica guardado
      lockedPlayers[pi] = true;
      render();
    } else {
      mostrarMensagemErro(pi, t(motivo === "troca" ? "sim_erro_travar_troca" : "sim_erro_travar"));
    }
  };
  const btnWrapper = document.createElement("div");
  btnWrapper.className = "btnTravarWrapper";

  // a mensagem de erro fica logo abaixo do botão
  const msgErro = document.createElement("div");
  msgErro.className = "simMensagemErro";
  msgErro.id = `msgErro-${pi}`;
  msgErro.style.display = "none";

  btnWrapper.append(btn, msgErro);
  return btnWrapper;
}

//f:criarPainelAcoes
//Cria o painel abaixo do card do produtor: chave "Mudar gênero", carrossel de dicas e botão Travar Escolha
function criarPainelAcoes(pi, isLocked) {
  const painel = document.createElement("div");
  painel.className = "simPanel acoesPanel" + (isLocked ? " locked" : "");
  if (trocaGeneroDisponivel(pi)) painel.appendChild(criarChaveMudarGenero(pi, isLocked));
  const dicas = criarCarrosselDicas();
  if (dicas) painel.appendChild(dicas);
  painel.appendChild(criarBotaoTravar(pi, isLocked));
  return painel;
}

//f:criarBoxAcoes
//Cria uma caixa só com o painel de ações (usada quando a partida não tem produtor)
function criarBoxAcoes(pi, isLocked) {
  const box = document.createElement("div");
  box.className = "simExtraBox simActionsBox";
  box.appendChild(criarPainelAcoes(pi, isLocked));
  return box;
}

// =====================
// CARROSSEL DE DICAS
// =====================

//f:criarCarrosselDicas
//Cria o carrossel de dicas (texto + pontos clicáveis); retorna null se não houver dicas
function criarCarrosselDicas() {
  if (!DICAS_SIMULACAO.length) return null;
  const carrossel = document.createElement("div");
  carrossel.className = "simDicas";
  carrossel.setAttribute("aria-label", t("sim_dicas"));

  const texto = document.createElement("div");
  texto.className = "simDicaTexto";
  texto.setAttribute("aria-live", "polite");

  const pontos = document.createElement("div");
  pontos.className = "simDicaPontos";
  DICAS_SIMULACAO.forEach((_, i) => {
    const ponto = document.createElement("button");
    ponto.type = "button";
    ponto.className = "simDicaPonto";
    ponto.setAttribute("aria-label", `${t("sim_dicas")} ${i + 1}`);
    ponto.onclick = () => mostrarDica(i);
    pontos.appendChild(ponto);
  });

  carrossel.append(texto, pontos);
  atualizarCarrosselDicas(carrossel, false);
  return carrossel;
}

//f:atualizarCarrosselDicas
//Mostra no carrossel a dica atual (com animação de entrada opcional) e marca o ponto correspondente
function atualizarCarrosselDicas(carrossel, animar) {
  const texto = carrossel.querySelector(".simDicaTexto");
  texto.textContent = t(DICAS_SIMULACAO[indiceDica]);
  if (animar) {
    texto.classList.remove("entrando");
    void texto.offsetWidth;   // reinicia a animação
    texto.classList.add("entrando");
  }
  carrossel.querySelectorAll(".simDicaPonto").forEach((ponto, i) => {
    ponto.classList.toggle("active", i === indiceDica);
  });
}

//f:mostrarDica
//Troca a dica atual em todos os carrosseis da tela (todos os jogadores veem a mesma dica)
function mostrarDica(indice) {
  const total = DICAS_SIMULACAO.length;
  indiceDica = ((indice % total) + total) % total;
  document.querySelectorAll(".simDicas").forEach(carrossel => atualizarCarrosselDicas(carrossel, true));
}

//f:iniciarCarrosselDicas
//Passa as dicas sozinho (pausa com o mouse em cima e não roda com "movimento reduzido" ativado)
function iniciarCarrosselDicas() {
  if (DICAS_SIMULACAO.length < 2) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  setInterval(() => {
    if (document.hidden || document.querySelector(".simDicas:hover")) return;
    mostrarDica(indiceDica + 1);
  }, DICAS_INTERVALO_MS);
}

// =====================
// MENU SUSPENSO
// =====================

//f:criarDropdown
//Cria um menu suspenso estilizado (botão + lista) usado nas posições e na troca de gênero; fecha com clique fora ou Esc.
//cfg: classe, rotulo/icone (opcionais), valor (escolhido ou null), textoValor (texto no botão; padrão = valor),
//opcoes (lista), desabilitado e aoEscolher(opcao)
function criarDropdown(cfg) {
  const drop = document.createElement("div");
  drop.className = `simDrop ${cfg.classe}` + (cfg.desabilitado ? " disabled" : "");

  if (cfg.rotulo) {
    const rotulo = document.createElement("div");
    rotulo.className = "simDropLabel";
    const icone = document.createElement("span");
    icone.className = "simDropIcon";
    icone.textContent = cfg.icone;
    const texto = document.createElement("span");
    texto.textContent = cfg.rotulo;
    rotulo.append(icone, texto);
    drop.appendChild(rotulo);
  }

  const botao = document.createElement("button");
  botao.type = "button";
  botao.className = "simDropBtn";
  botao.disabled = cfg.desabilitado;
  botao.setAttribute("aria-haspopup", "listbox");
  botao.setAttribute("aria-expanded", "false");
  const valor = document.createElement("span");
  valor.className = "simDropValue" + (cfg.valor ? "" : " placeholder");
  valor.textContent = cfg.valor ? (cfg.textoValor || cfg.valor) : t("gen_selecione");
  const seta = document.createElement("span");
  seta.className = "simDropChevron";
  botao.append(valor, seta);

  const menu = document.createElement("ul");
  menu.className = "simDropMenu";
  menu.setAttribute("role", "listbox");
  cfg.opcoes.forEach(opcao => {
    const item = document.createElement("li");
    const escolhida = cfg.valor && normalizarGenero(opcao) === normalizarGenero(cfg.valor);
    item.className = "simDropOpt" + (escolhida ? " selected" : "");
    item.textContent = opcao;
    item.tabIndex = -1;
    item.setAttribute("role", "option");
    item.setAttribute("aria-selected", escolhida ? "true" : "false");
    item.onclick = (e) => { e.stopPropagation(); cfg.aoEscolher(opcao); };
    item.onkeydown = (e) => navegarMenuDropdown(e, drop, item, opcao, cfg);
    menu.appendChild(item);
  });

  botao.onclick = (e) => { e.stopPropagation(); alternarDropdown(drop); };
  botao.onkeydown = (e) => {
    if (["ArrowDown", "Enter", " "].includes(e.key)) {
      e.preventDefault();
      if (!drop.classList.contains("open")) alternarDropdown(drop);
      menu.querySelector(".simDropOpt")?.focus();
    }
  };

  drop.append(botao, menu);
  return drop;
}

//f:navegarMenuDropdown
//Trata o teclado dentro do menu (setas, Enter e Esc) para escolher uma opção sem usar o mouse
function navegarMenuDropdown(e, drop, item, opcao, cfg) {
  if (e.key === "ArrowDown") { e.preventDefault(); (item.nextElementSibling || item).focus(); }
  else if (e.key === "ArrowUp") { e.preventDefault(); (item.previousElementSibling || item).focus(); }
  else if (e.key === "Enter" || e.key === " ") { e.preventDefault(); cfg.aoEscolher(opcao); }
  else if (e.key === "Escape") { e.stopPropagation(); fecharDropdowns(); drop.querySelector(".simDropBtn")?.focus(); }
}

//f:alternarDropdown
//Abre o menu clicado (fechando os outros) ou fecha se já estava aberto
function alternarDropdown(drop) {
  const abrir = !drop.classList.contains("open");
  fecharDropdowns();
  if (!abrir) return;
  drop.classList.add("open");
  drop.querySelector(".simDropBtn")?.setAttribute("aria-expanded", "true");
}

//f:fecharDropdowns
//Fecha todos os menus suspensos abertos
function fecharDropdowns() {
  document.querySelectorAll(".simDrop.open").forEach(drop => {
    drop.classList.remove("open");
    drop.querySelector(".simDropBtn")?.setAttribute("aria-expanded", "false");
  });
}

//f:iniciarDropdowns
//Registra (uma vez) o fechamento dos menus ao clicar fora ou apertar Esc
function iniciarDropdowns() {
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".simDrop")) fecharDropdowns();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") fecharDropdowns();
  });
}

// =====================
// TROCA DE GÊNERO (INTERFACE)
// =====================

//f:criarChaveMudarGenero
//Cria a chave "Mudar gênero: Não | Sim" do painel do produtor (liga e desliga a troca de gênero)
function criarChaveMudarGenero(pi, isLocked) {
  const estado = trocaGenero[pi];
  const controle = document.createElement("div");
  controle.className = "genSwitch";

  const rotulo = document.createElement("span");
  rotulo.className = "genSwitchLabel";
  rotulo.textContent = t("gen_mudar_genero");

  const grupo = document.createElement("div");
  grupo.className = "genSwitchGroup";
  grupo.setAttribute("role", "radiogroup");
  grupo.setAttribute("aria-label", t("gen_mudar_genero"));

  [[true, "gen_sim"], [false, "gen_nao"]].forEach(([valor, chave]) => {
    const opcao = document.createElement("button");
    const ativa = estado.mudarGenero === valor;
    opcao.type = "button";
    opcao.className = "genSwitchOpt" + (ativa ? " active" : "") + (valor ? " on" : " off");
    opcao.textContent = t(chave);
    opcao.disabled = isLocked;
    opcao.setAttribute("role", "radio");
    opcao.setAttribute("aria-checked", ativa ? "true" : "false");
    opcao.onclick = () => alternarMudarGenero(pi, valor);
    grupo.appendChild(opcao);
  });

  controle.append(rotulo, grupo);
  return controle;
}

//f:alternarMudarGenero
//Liga ou desliga a troca de gênero do jogador (ao desligar, limpa os gêneros escolhidos)
function alternarMudarGenero(pi, valor) {
  const estado = trocaGenero[pi];
  if (lockedPlayers[pi] || estado.mudarGenero === valor) return;
  estado.mudarGenero = valor;
  if (!valor) { estado.entra = null; estado.sai = null; }
  animarPainelTroca[pi] = valor;   // o painel entra com animação só agora, não a cada render
  render();
}

//f:criarBlocoChance
//Cria o bloco com a chance de sucesso da troca (percentual, barra e composição do cálculo)
function criarBlocoChance(pi) {
  const bloco = document.createElement("div");
  if (!trocaGenero[pi].entra) {
    bloco.className = "genHint";
    bloco.textContent = t("gen_dica");
    return bloco;
  }
  const chance = calcularChanceTrocaGenero(pi);
  bloco.className = "genChance";

  const linha = document.createElement("div");
  linha.className = "genChanceRow";
  const rotulo = document.createElement("span");
  rotulo.textContent = t("gen_chance");
  const valor = document.createElement("span");
  valor.className = "genChanceValue";
  valor.textContent = formatarChance(chance.total);
  linha.append(rotulo, valor);

  const barra = document.createElement("div");
  barra.className = "genChanceBar";
  const preenchimento = document.createElement("div");
  preenchimento.className = "genChanceFill";
  preenchimento.style.width = `${Math.min(chance.total, 1) * 100}%`;
  barra.appendChild(preenchimento);

  const partes = [`${t("gen_chance_base")} ${formatarChance(chance.base)}`];
  if (chance.bonusProdutor > 0) partes.push(`${t("gen_chance_produtor")} +${formatarChance(chance.bonusProdutor)}`);
  if (chance.idolsComGenero > 0) partes.push(`${t("gen_chance_idols")} +${formatarChance(chance.bonusIdols)} (${chance.idolsComGenero}/${chance.tamanho})`);
  const info = document.createElement("div");
  info.className = "genChanceInfo";
  info.textContent = partes.join(" · ");

  bloco.append(linha, barra, info);
  return bloco;
}

//f:criarResultadoTrocaGenero
//Cria o resumo da troca depois que o jogador travou (resultado, gêneros que entram e saem e gêneros finais); o resultado só é revelado quando todos os jogadores travaram, até lá mostra apenas "Troca registrada"
function criarResultadoTrocaGenero(pi) {
  const estado = trocaGenero[pi];
  const revelar = todosTravados();
  const tipo = !revelar ? "pending" : (estado.sucesso ? "success" : "fail");
  const resultado = document.createElement("div");
  resultado.className = `genResult ${tipo}`;

  const cabecalho = document.createElement("div");
  cabecalho.className = "genResultHead";
  const icone = { pending: "🔒", success: "✔", fail: "✖" }[tipo];
  const mensagem = { pending: "gen_resultado_registrada", success: "gen_resultado_sucesso", fail: "gen_resultado_falha" }[tipo];
  cabecalho.textContent = `${icone} ${t(mensagem)}`;

  const troca = document.createElement("div");
  troca.className = "genResultSwap";
  const entra = document.createElement("span");
  entra.className = "genChip in";
  entra.textContent = `+ ${estado.entra}`;
  const sai = document.createElement("span");
  sai.className = "genChip out";
  sai.textContent = `− ${estado.sai}`;
  troca.append(entra, sai);

  const meta = document.createElement("div");
  meta.className = "genResultMeta";
  meta.textContent = `${t("gen_chance")}: ${formatarChance(estado.chance)}`;

  resultado.append(cabecalho, troca, meta);
  if (revelar) {
    const finais = document.createElement("div");
    finais.className = "genResultMeta";
    const generos = listarGenerosDaMusica(obterMusicaEfetiva(pi, pegarMusicaDoJogador(pi)));
    finais.textContent = estado.sucesso
      ? `${t("gen_generos_finais")}: ${generos.join(", ")}`
      : t("gen_mantidos");
    resultado.appendChild(finais);
  }
  return resultado;
}

//f:criarPainelTrocaGenero
//Cria o painel abaixo da música com os menus "Entra" e "Sai" e a chance de sucesso (só aparece com a chave ligada)
function criarPainelTrocaGenero(pi, isLocked) {
  if (!trocaGeneroAtiva(pi)) return null;
  const estado = trocaGenero[pi];
  const painel = document.createElement("div");
  const entrando = animarPainelTroca[pi];
  animarPainelTroca[pi] = false;
  painel.className = "simPanel genPanel" + (isLocked ? " locked" : "") + (entrando ? " entrando" : "");

  const titulo = document.createElement("div");
  titulo.className = "simPanelTitle";
  titulo.textContent = `⇄ ${t("gen_troca_titulo")}`;
  painel.appendChild(titulo);

  if (isLocked && estado.resolvida) {
    painel.appendChild(criarResultadoTrocaGenero(pi));
    return painel;
  }

  const musica = pegarMusicaDoJogador(pi);
  painel.appendChild(criarDropdown({
    classe: "in", icone: "+", rotulo: t("gen_entra"), valor: estado.entra, desabilitado: isLocked,
    opcoes: listarGenerosParaEntrar(pi),
    aoEscolher: (g) => { estado.entra = g; render(); }
  }));
  painel.appendChild(criarDropdown({
    classe: "out", icone: "−", rotulo: t("gen_sai"), valor: estado.sai, desabilitado: isLocked,
    opcoes: listarGenerosDaMusica(musica),
    aoEscolher: (g) => { estado.sai = g; render(); }
  }));
  painel.appendChild(criarBlocoChance(pi));
  return painel;
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
// TRAVAR ESCOLHA
// =====================

//f:motivoBloqueioTravar
//Retorna null se o jogador pode travar; "formacao" se faltam cards/posições; "troca" se faltam os gêneros da troca
function motivoBloqueioTravar(pi) {
  const slots = boardSlots[pi];
  const roles = roleBoard[pi];
  for (const tipo of ["idol", "music", "producer"]) {
    for (let i = 0; i < (slots[tipo] || []).length; i++) {
      if (!slots[tipo][i]) return "formacao";
      // Só as idols têm posição (precisa ser uma das opções do menu); música e produtor só precisam estar no slot
      if (tipo === "idol" && !ROLE_OPTIONS_IDOL.includes(roles[tipo][i])) return "formacao";
    }
  }
  if (trocaGeneroAtiva(pi) && !trocaGeneroCompleta(pi)) return "troca";
  return null;
}

//f:podeTravar
//Indica se o jogador já pode travar a escolha
function podeTravar(pi) {
  return motivoBloqueioTravar(pi) === null;
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
//
// Fluxo do score (uma única fonte de verdade):
//   calcularResultado(pi)  ->  monta contexto, estrutura de posições, score de cada idol,
//                              bônus de grupo e penalidades de formação
//   calcularScore(pi)      ->  só chama calcularResultado e arredonda
//   montarDetalhesScore(pi)->  só chama calcularResultado e formata (nunca recalcula)
//
// Todos os números de balance ficam em BALANCE. Ajustar balance = trocar valores aqui.

// =====================
// CONFIGURAÇÃO DE BALANCE
// =====================

const BALANCE = {
  // Valor numérico de cada rank. Rank ausente/inválido usa valorRankPadrao.
  valorRank: { S: 100, A: 90, B: 80, C: 70, D: 60 },
  valorRankPadrao: 80,

  atributos: ["vocal", "dance", "rap", "center", "visual"],

  // Peso do atributo da posição na média da idol (os outros 4 dividem o restante).
  // 0.20 = média simples (comportamento antigo).
  pesoAtributoPosicao: 0.40,

  // Multiplicador aplicado apenas ao atributo da posição.
  posicoes: {
    "Main Vocal":  { atributo: "vocal",  tipo: "main",   mult: 1.25 },
    "Lead Vocal":  { atributo: "vocal",  tipo: "lead",   mult: 1.15 },
    "Main Dancer": { atributo: "dance",  tipo: "main",   mult: 1.25 },
    "Lead Dancer": { atributo: "dance",  tipo: "lead",   mult: 1.15 },
    "Main Rapper": { atributo: "rap",    tipo: "main",   mult: 1.35 },
    "Lead Rapper": { atributo: "rap",    tipo: "lead",   mult: 1.25 },
    "Center":      { atributo: "center", tipo: "center", mult: 1.25 },
    "Visual":      { atributo: "visual", tipo: "visual", mult: 1.25 }
  },

  // Especialidade: multiplica a idol inteira (todos os atributos).
  especialidade: {
    matchPrincipal: 1.15,      // especialidade = atributo da posição (Main, Center, Visual)
    matchLead: 1.10,           // especialidade = atributo da posição (Lead)
    foraDaEspecialidade: 0.97, // posição de outro atributo
    allRounder: {
      center: { S: 1.20, A: 1.17, B: 1.15, C: 1.15, D: 1.15 }, // depende do rank de Center
      main: 1.15,
      outras: 1.05                                             // Lead e Visual
    },
    // Aceita variações de escrita vindas do banco de dados.
    alias: {
      "vocal": "vocal", 
      "vocalist": "vocal", 
      "vocalista": "vocal", 
      "dance": "dance", 
      "dancer": "dance", 
      "dança": "dance", 
      "danca": "dance",
      "rap": "rap", 
      "rapper": "rap", 
      "raper": "rap", 
      "center": "center", 
      "centro": "center", 
      "visual": "visual",
      "all-rounder": "all-rounder", 
      "all rounder": "all-rounder", 
      "allrounder": "all-rounder"
    }
  },

  // Paridade: duas ou mais idols na mesma posição (Main X, Center ou Visual), dentro do limite.
  // O fator F reduz o bônus de posição (e de especialidade) das idols envolvidas:
  //   bônus efetivo = 1 + (multiplicador - 1) * F
  // A chave usa os dois menores ranks do conjunto: letra do maior + letra do menor.
  paridade: {
    tabela: { SS: 0.92, AA: 0.90, SA: 0.88, BB: 0.86, AB: 0.84, SB: 0.70 },
    baixa: 0.60,               // qualquer combinação com C ou menos
    reducaoPorExtra: 0.10,     // para 3 ou mais idols na mesma posição
    minimo: 0.05,
    aplicarNaEspecialidade: true
  },

  // Limites por posição, conforme o tamanho do grupo (total de slots).
  // Main é contado POR POSIÇÃO: Main Vocal, Main Dancer e Main Rapper não interferem entre si.
  // Para limitar Main Rapper a 2 em grupos grandes, basta trocar o valor da linha "rap".
  limites: [
    { ate: 7,        main: { "Main Vocal": 2, "Main Dancer": 2, "Main Rapper": 2 }, center: 1, visual: 1 },
    { ate: 12,       main: { "Main Vocal": 2, "Main Dancer": 2, "Main Rapper": 2 }, center: 2, visual: 2 },
    { ate: 23,       main: { "Main Vocal": 3, "Main Dancer": 3, "Main Rapper": 3 }, center: 3, visual: 3 },
    { ate: Infinity, main: { "Main Vocal": 4, "Main Dancer": 4, "Main Rapper": 4 }, center: 4, visual: 4 }
  ],

  // Excesso: posição com mais idols que o limite.
  excesso: {
    // Penalidade na nota de CADA idol da posição que estourou (não é mais penalidade do grupo).
    penalidadeIdol: { main: 0.05, centerVisual: 0.05 },
    // As idols além do limite (as de menor rank no atributo da posição) perdem
    // o bônus de posição e de especialidade.
    perdeBonusExcedente: true
  },

  // Sinergia de conceito (idol x produtor) e de gênero (idol x música).
  sinergia: {
    maxMatchesPorIdol: 2,
    individualConceito: [0, 0.03, 0.05], // por quantidade de matches (0, 1, 2)
    individualGenero:   [0, 0.03, 0.05],
    // Grupo: força do match = média de (matches / maxMatchesPorIdol) das idols.
    limiarParcial: 0.5,
    limiarTotal: 0.999,                  // todas as idols com match duplo
    grupoParcial: 0.04,
    grupoTotal: 0.08
  },

  // Troca de gênero da música: chance de sucesso = base + (produtor tem o gênero) + (idols com o gênero / total de idols)
  trocaGenero: {
    chanceBase: 0.05,
    bonusProdutor: 0.425,
    bonusIdols: 0.425
  },

  // Penalidades de formação (aplicadas no total do grupo): o gênero da música (já com a troca) ou o
  // conceito do produtor pede posições específicas. "penalidades"[i] vale quando faltam i+1 das posições
  // em "exige" (ex.: Girl Crush sem uma das duas = 3%, sem as duas = 5%). As penalidades se multiplicam.
  formacao: {
    genero: [
      { gatilho: "EDM",       exige: ["Main Dancer"], penalidades: [0.03] },
      { gatilho: "Emotional", exige: ["Main Vocal"],  penalidades: [0.05] },
      { gatilho: "Groove",    exige: ["Main Dancer"], penalidades: [0.05] },
      { gatilho: "Hip-Hop",   exige: ["Main Rapper"], penalidades: [0.05] },
      { gatilho: "R&B",       exige: ["Main Vocal"],  penalidades: [0.03] }
    ],
    conceito: [
      { gatilho: "Elegant",     exige: ["Visual"],                    penalidades: [0.03] },
      { gatilho: "Girl Crush",  exige: ["Main Dancer", "Main Rapper"], penalidades: [0.03, 0.05] },
      { gatilho: "Mature",      exige: ["Visual"],                    penalidades: [0.05] },
      { gatilho: "Performance", exige: ["Main Dancer"],               penalidades: [0.05] },
      { gatilho: "Swag",        exige: ["Main Rapper"],               penalidades: [0.05] }
    ]
  }
};

// =====================
// UTILITÁRIOS
// =====================

//f:normalizarTexto
//Converte qualquer valor em texto minúsculo e sem espaços nas pontas
function normalizarTexto(valor) {
  return (valor ?? "").toString().trim().toLowerCase();
}

//f:escaparHtml
//Escapa caracteres especiais para inserir texto com segurança via innerHTML
function escaparHtml(valor) {
  return (valor ?? "").toString()
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

//f:arredondarScore
//Arredonda o score final exibido no ranking
function arredondarScore(valor) {
  return Math.round(valor);
}

//f:formatarPercentual
//Formata uma variação em % com sinal (ex.: "+5%" ou "-3%")
function formatarPercentual(pct) {
  return `${pct >= 0 ? "+" : ""}${pct.toFixed(0)}%`;
}

//f:media
//Média simples de uma lista de números (0 se vazia)
function media(lista) {
  if (!lista.length) return 0;
  return lista.reduce((soma, v) => soma + v, 0) / lista.length;
}

//f:pegarValorRank
//Converte a letra do rank (S, A, B, C, D) em valor numérico
function pegarValorRank(rank) {
  const letra = normalizarTexto(rank).toUpperCase();
  return BALANCE.valorRank[letra] ?? BALANCE.valorRankPadrao;
}

//f:pegarLetraDoValor
//Converte o valor numérico de um rank de volta para a letra ("?" se não existir)
function pegarLetraDoValor(valor) {
  const achada = Object.keys(BALANCE.valorRank).find(l => BALANCE.valorRank[l] === valor);
  return achada ?? "?";
}

//f:temMatch
//Indica se duas listas (conceitos ou gêneros) têm pelo menos um item em comum
function temMatch(array1, array2) {
  return contarMatches(array1, array2) > 0;
}

//f:normalizarGenero
//Converte um gênero ou conceito em chave comparável: minúsculo e com "/" ou espaço virando "-" ("Electro/Synth" = "Electro-Synth")
function normalizarGenero(valor) {
  return normalizarTexto(valor).replace(/\s*\/\s*|\s+/g, "-");
}

//f:formatarChance
//Formata uma chance (0 a 1) como percentual com até 1 casa decimal (ex.: "53,5%")
function formatarChance(valor) {
  return `${(valor * 100).toLocaleString(undefined, { maximumFractionDigits: 1 })}%`;
}

//f:contarMatches
//Conta quantos itens distintos duas listas (conceitos ou gêneros) têm em comum, ignorando maiúsculas e "/" x "-"
function contarMatches(array1, array2) {
  if (!Array.isArray(array1) || !Array.isArray(array2)) return 0;
  const set1 = new Set(array1.map(normalizarGenero));
  const set2 = new Set(array2.map(normalizarGenero));
  let total = 0;
  set1.forEach(v => { if (set2.has(v)) total++; });
  return total;
}

// =====================
// POSIÇÃO E ESPECIALIDADE
// =====================

//f:pegarMultiplicador
//Multiplicador bruto da posição para um atributo (1.0 se o atributo não é o da posição)
function pegarMultiplicador(role, atributo) {
  const pos = BALANCE.posicoes[role];
  if (!pos || pos.atributo !== atributo) return 1.0;
  return pos.mult;
}

//f:normalizarEspecialidade
//Converte o texto da especialidade para o nome padrão usado nos cálculos ("" se vazia)
function normalizarEspecialidade(especialidade) {
  const texto = normalizarTexto(especialidade);
  return BALANCE.especialidade.alias[texto] ?? texto;
}

//f:pegarMultiplicadorEspecialidade
//Multiplicador bruto da especialidade da idol para a posição em que está alocada
function pegarMultiplicadorEspecialidade(idol, role) {
  const pos = BALANCE.posicoes[role];
  const cfg = BALANCE.especialidade;
  const esp = normalizarEspecialidade(idol.especialidade);

  if (!pos || !esp) return 1.0;

  if (esp === "all-rounder") {
    if (pos.tipo === "center") return cfg.allRounder.center[normalizarTexto(idol.center).toUpperCase()] ?? 1.0;
    if (pos.tipo === "main")   return cfg.allRounder.main;
    return cfg.allRounder.outras;
  }

  if (esp === pos.atributo) {
    return pos.tipo === "lead" ? cfg.matchLead : cfg.matchPrincipal;
  }
  return cfg.foraDaEspecialidade;
}

//f:calcularMultiplicadorPosicaoEfetivo
//Multiplicador da posição para um atributo, já considerando paridade e perda de bônus por excesso
function calcularMultiplicadorPosicaoEfetivo(role, atributo, infoPos) {
  if (infoPos.perdeBonus) return 1.0;
  const bruto = pegarMultiplicador(role, atributo);
  return 1 + (bruto - 1) * infoPos.fatorParidade;
}

//f:calcularMultiplicadorEspecialidadeEfetivo
//Multiplicador da especialidade, já considerando paridade e perda de bônus por excesso
function calcularMultiplicadorEspecialidadeEfetivo(idol, role, infoPos) {
  if (infoPos.perdeBonus) return 1.0;
  const bruto = pegarMultiplicadorEspecialidade(idol, role);
  if (!BALANCE.paridade.aplicarNaEspecialidade) return bruto;
  return 1 + (bruto - 1) * infoPos.fatorParidade;
}

// =====================
// ESTRUTURA DE POSIÇÕES (LIMITES, PARIDADE E EXCESSO)
// =====================

//f:criarInfoPosicaoNeutra
//Cria a informação de posição sem paridade, sem excesso e sem penalidade
function criarInfoPosicaoNeutra() {
  return { fatorParidade: 1, perdeBonus: false, estourou: false, multPenalidade: 1 };
}

//f:obterLimitePosicao
//Retorna quantas idols a posição aceita no tamanho de grupo informado (Infinity se não houver limite)
function obterLimitePosicao(role, tamanhoGrupo) {
  const pos = BALANCE.posicoes[role];
  if (!pos) return Infinity;
  const faixa = BALANCE.limites.find(f => tamanhoGrupo <= f.ate);
  if (!faixa) return Infinity;
  if (pos.tipo === "main")   return faixa.main[role] ?? Infinity;
  if (pos.tipo === "center") return faixa.center;
  if (pos.tipo === "visual") return faixa.visual;
  return Infinity; // Lead não tem limite
}

//f:posicaoTemLimite
//Indica se a posição é controlada por limite e paridade (Main, Center e Visual)
function posicaoTemLimite(role) {
  const pos = BALANCE.posicoes[role];
  return !!pos && pos.tipo !== "lead";
}

//f:calcularFatorParidade
//Calcula o fator F de paridade a partir dos valores de rank das idols que dividem a posição
function calcularFatorParidade(valores) {
  const P = BALANCE.paridade;
  if (valores.length < 2) return 1;

  const [menor, segundo] = [...valores].sort((a, b) => a - b);
  const chave = pegarLetraDoValor(segundo) + pegarLetraDoValor(menor);
  const base = P.tabela[chave] ?? P.baixa;
  const fator = base - P.reducaoPorExtra * (valores.length - 2);
  return Math.max(fator, P.minimo);
}

//f:calcularMultPenalidadeExcesso
//Calcula o multiplicador de penalidade aplicado a cada idol de uma posição que estourou o limite
function calcularMultPenalidadeExcesso(role) {
  const pen = BALANCE.excesso.penalidadeIdol;
  const tipo = BALANCE.posicoes[role].tipo;
  return 1 - (tipo === "main" ? pen.main : pen.centerVisual);
}

//f:analisarPosicaoLimitada
//Analisa uma posição limitada: quem fica dentro do limite, quem excede, paridade e penalidade
function analisarPosicaoLimitada(role, indices, entradas, tamanhoGrupo) {
  const atributo = BALANCE.posicoes[role].atributo;
  const valorDe = k => pegarValorRank(entradas[k].idol[atributo]);

  const limite = obterLimitePosicao(role, tamanhoGrupo);
  const ordenados = [...indices].sort((a, b) => (valorDe(b) - valorDe(a)) || (a - b));
  const mantidos = ordenados.slice(0, limite);
  const excedentes = ordenados.slice(limite);
  const estourou = excedentes.length > 0;

  return {
    role, indices, limite, mantidos, excedentes, estourou,
    quantidade: indices.length,
    fatorParidade: calcularFatorParidade(mantidos.map(valorDe)),
    multPenalidade: estourou ? calcularMultPenalidadeExcesso(role) : 1
  };
}

//f:agruparPosicoesLimitadas
//Agrupa os índices das entradas por posição limitada (Main X, Center, Visual)
function agruparPosicoesLimitadas(entradas) {
  const grupos = {};
  entradas.forEach((entrada, k) => {
    if (!posicaoTemLimite(entrada.role)) return;
    (grupos[entrada.role] = grupos[entrada.role] || []).push(k);
  });
  return grupos;
}

//f:aplicarAnaliseNasEntradas
//Distribui o resultado da análise de uma posição para cada idol envolvida
function aplicarAnaliseNasEntradas(analise, porEntrada) {
  analise.indices.forEach(k => {
    porEntrada[k].fatorParidade = analise.mantidos.includes(k) ? analise.fatorParidade : 1;
    porEntrada[k].multPenalidade = analise.multPenalidade;
    porEntrada[k].estourou = analise.estourou;
  });
  analise.excedentes.forEach(k => {
    porEntrada[k].perdeBonus = BALANCE.excesso.perdeBonusExcedente;
  });
}

//f:calcularEstruturaPosicoes
//Calcula limite, paridade e excesso de todas as posições do grupo
function calcularEstruturaPosicoes(entradas, tamanhoGrupo) {
  const porEntrada = entradas.map(() => criarInfoPosicaoNeutra());
  const grupos = agruparPosicoesLimitadas(entradas);
  const analises = Object.keys(grupos).map(role =>
    analisarPosicaoLimitada(role, grupos[role], entradas, tamanhoGrupo)
  );
  analises.forEach(analise => aplicarAnaliseNasEntradas(analise, porEntrada));
  return { porEntrada, posicoes: analises };
}

// =====================
// SCORE DA IDOL
// =====================

//f:calcularMediaSimples
//Média simples dos 5 atributos da idol (score base, sem posição)
function calcularMediaSimples(idol) {
  return media(BALANCE.atributos.map(attr => pegarValorRank(idol[attr])));
}

//f:calcularMediaPonderada
//Média dos atributos com peso maior no atributo da posição e multiplicador de posição aplicado nele
function calcularMediaPonderada(idol, role, infoPos) {
  if (!BALANCE.posicoes[role]) return calcularMediaSimples(idol); // sem posição definida: neutro

  const pesoPosicao = BALANCE.pesoAtributoPosicao;
  const pesoOutros = (1 - pesoPosicao) / (BALANCE.atributos.length - 1);
  const atributoPosicao = BALANCE.posicoes[role].atributo;

  return BALANCE.atributos.reduce((soma, attr) => {
    const peso = attr === atributoPosicao ? pesoPosicao : pesoOutros;
    const mult = calcularMultiplicadorPosicaoEfetivo(role, attr, infoPos);
    return soma + peso * pegarValorRank(idol[attr]) * mult;
  }, 0);
}

//f:calcularSinergiaIndividual
//Calcula o bônus individual de conceito (idol x produtor) e de gênero (idol x música)
function calcularSinergiaIndividual(idol, produtor, musica) {
  const S = BALANCE.sinergia;
  const matchesConceito = produtor ? Math.min(contarMatches(idol.conceitos, produtor.conceitos), S.maxMatchesPorIdol) : 0;
  const matchesGenero   = musica   ? Math.min(contarMatches(idol.generos, musica.generos), S.maxMatchesPorIdol) : 0;
  const bonusConceito = S.individualConceito[matchesConceito];
  const bonusGenero   = S.individualGenero[matchesGenero];

  return {
    matchesConceito, matchesGenero, bonusConceito, bonusGenero,
    multiplicador: 1 + bonusConceito + bonusGenero
  };
}

//f:calcularNucleoIdol
//Calcula média ponderada x especialidade (sem sinergia nem penalidade de excesso)
function calcularNucleoIdol(idol, role, infoPos) {
  return calcularMediaPonderada(idol, role, infoPos) * calcularMultiplicadorEspecialidadeEfetivo(idol, role, infoPos);
}

//f:calcularEfeitoParidade
//Calcula a variação (negativa) que a paridade causa na nota da idol, comparando com a mesma idol sem paridade
function calcularEfeitoParidade(idol, role, infoPos) {
  if (infoPos.fatorParidade >= 1) return 0;
  const semParidade = { ...infoPos, fatorParidade: 1 };
  return calcularNucleoIdol(idol, role, infoPos) / calcularNucleoIdol(idol, role, semParidade) - 1;
}

//f:calcularScoreIdol
//Calcula o score completo de uma idol (média ponderada x especialidade x sinergia x penalidade)
function calcularScoreIdol(entrada, infoPos, contexto) {
  const { idol, role } = entrada;
  const base = calcularMediaSimples(idol);
  const mediaPosicao = calcularMediaPonderada(idol, role, infoPos);
  const multEspecialidade = calcularMultiplicadorEspecialidadeEfetivo(idol, role, infoPos);
  const sinergia = calcularSinergiaIndividual(idol, contexto.produtor, contexto.musica);

  return {
    nome: idol.name,
    role,
    base,
    mediaPosicao,
    multEspecialidade,
    sinergia,
    fatorParidade: infoPos.fatorParidade,
    efeitoParidade: calcularEfeitoParidade(idol, role, infoPos),
    perdeBonus: infoPos.perdeBonus,
    estourou: infoPos.estourou,
    multPenalidade: infoPos.multPenalidade,
    score: mediaPosicao * multEspecialidade * sinergia.multiplicador * infoPos.multPenalidade
  };
}

// =====================
// SCORE DO GRUPO
// =====================

//f:pegarBonusGrupoPorForca
//Converte a força média do match (0 a 1) no bônus de grupo; informa também o nível atingido
function pegarBonusGrupoPorForca(forca) {
  const S = BALANCE.sinergia;
  if (forca >= S.limiarTotal)   return { bonus: S.grupoTotal, nivel: "total" };
  if (forca >= S.limiarParcial) return { bonus: S.grupoParcial, nivel: "parcial" };
  return { bonus: 0, nivel: null };
}

//f:calcularBonusGrupo
//Calcula os bônus de grupo de conceito (produtor) e de gênero (música) a partir dos matches das idols
function calcularBonusGrupo(idolsCalculadas) {
  const max = BALANCE.sinergia.maxMatchesPorIdol;
  const forcaConceito = media(idolsCalculadas.map(r => r.sinergia.matchesConceito / max));
  const forcaGenero   = media(idolsCalculadas.map(r => r.sinergia.matchesGenero / max));
  const conceito = pegarBonusGrupoPorForca(forcaConceito);
  const genero   = pegarBonusGrupoPorForca(forcaGenero);

  return {
    forcaConceito, forcaGenero,
    bonusConceito: conceito.bonus, nivelConceito: conceito.nivel,
    bonusGenero: genero.bonus,     nivelGenero: genero.nivel,
    multiplicador: 1 + conceito.bonus + genero.bonus
  };
}

//f:avaliarRegraFormacao
//Avalia uma regra: devolve { rotulo, multiplicador, faltantes } se o gatilho vale e falta alguma posição exigida (senão null)
function avaliarRegraFormacao(regra, listaGatilho, posicoesPresentes) {
  if (contarMatches([regra.gatilho], listaGatilho) === 0) return null;
  const faltantes = regra.exige.filter(role => !posicoesPresentes.has(role));
  if (!faltantes.length) return null;
  const penalidade = regra.penalidades[Math.min(faltantes.length, regra.penalidades.length) - 1];
  return {
    rotulo: `${regra.gatilho} ${t("score_sem")} ${faltantes.join(` ${t("score_e")} `)}`,
    multiplicador: 1 - penalidade,
    faltantes
  };
}

//f:calcularPenalidadesFormacao
//Aplica as penalidades de formação do gênero da música (já com a troca) e do conceito do produtor
function calcularPenalidadesFormacao(contexto, idolsCalculadas) {
  const presentes = new Set(contexto.entradas.map(entrada => entrada.role));
  const generos = listarGenerosDaMusica(contexto.musica);
  const conceitos = Array.isArray(contexto.produtor?.conceitos) ? contexto.produtor.conceitos : [];
  const regras = [
    ...BALANCE.formacao.genero.map(regra => [regra, generos]),
    ...BALANCE.formacao.conceito.map(regra => [regra, conceitos])
  ];
  const itens = regras.map(([regra, lista]) => avaliarRegraFormacao(regra, lista, presentes)).filter(Boolean);
  const multiplicador = itens.reduce((produto, item) => produto * item.multiplicador, 1);
  return { itens, multiplicador };
}

//f:somarScoresIdols
//Soma o score de todas as idols do grupo
function somarScoresIdols(idolsCalculadas) {
  return idolsCalculadas.reduce((soma, r) => soma + r.score, 0);
}

// =====================
// TROCA DE GÊNERO (LÓGICA)
// =====================
// Com a chave "Mudar gênero" ligada, o jogador informa um gênero que entra na música e um dos
// gêneros originais que sai. O sorteio acontece UMA vez, ao travar, e o resultado fica guardado
// em trocaGenero[pi] (calcularScore pode ser chamado várias vezes sem sortear de novo).

//f:criarEstadoTrocaGenero
//Cria o estado inicial da troca de gênero de um jogador (chave ligada por padrão, nada escolhido)
//Ligada por padrão: o jogador precisa escolher os gêneros ou desligar a chave de propósito antes de travar
function criarEstadoTrocaGenero() {
  return { mudarGenero: true, entra: null, sai: null, resolvida: false, sucesso: false, chance: 0 };
}

//f:pegarMusicaDoJogador
//Retorna a música colocada no slot do jogador (ou null)
function pegarMusicaDoJogador(pi) {
  return (boardSlots[pi].music || [])[0] || null;
}

//f:pegarProdutorDoJogador
//Retorna o produtor colocado no slot do jogador (ou null)
function pegarProdutorDoJogador(pi) {
  return (boardSlots[pi].producer || [])[0] || null;
}

//f:listarGenerosDaMusica
//Lista os gêneros de uma música (aceita lista ou texto separado por vírgula)
function listarGenerosDaMusica(musica) {
  if (!musica || !musica.generos) return [];
  if (Array.isArray(musica.generos)) return musica.generos.filter(Boolean);
  return String(musica.generos).split(",").map(g => g.trim()).filter(Boolean);
}

//f:trocaGeneroDisponivel
//Indica se a troca de gênero existe para o jogador (precisa de música e produtor na partida)
function trocaGeneroDisponivel(pi) {
  const cfg = simData && simData.config;
  return PERMITIR_TROCA_GENERO && !!cfg && !!cfg.usarMusica && !!cfg.usarProdutor && !!trocaGenero[pi];
}

//f:trocaGeneroAtiva
//Indica se o jogador ligou a chave "Mudar gênero" e tem uma música para alterar
function trocaGeneroAtiva(pi) {
  return trocaGeneroDisponivel(pi) && trocaGenero[pi].mudarGenero && !!pegarMusicaDoJogador(pi);
}

//f:trocaGeneroCompleta
//Indica se o jogador já escolheu o gênero que entra e o que sai
function trocaGeneroCompleta(pi) {
  return !!trocaGenero[pi].entra && !!trocaGenero[pi].sai;
}

//f:listarGenerosParaEntrar
//Lista os gêneros que podem entrar na música (todos menos os que ela já tem)
function listarGenerosParaEntrar(pi) {
  const originais = listarGenerosDaMusica(pegarMusicaDoJogador(pi)).map(normalizarGenero);
  return GENEROS_DISPONIVEIS.filter(g => !originais.includes(normalizarGenero(g)));
}

//f:validarTrocaGenero
//Descarta escolhas que deixaram de fazer sentido (ex.: o gênero que sai não está mais na música)
function validarTrocaGenero(pi) {
  const estado = trocaGenero[pi];
  if (!estado || estado.resolvida) return;
  const originais = listarGenerosDaMusica(pegarMusicaDoJogador(pi)).map(normalizarGenero);
  if (estado.sai && !originais.includes(normalizarGenero(estado.sai))) estado.sai = null;
  if (estado.entra && originais.includes(normalizarGenero(estado.entra))) estado.entra = null;
}

//f:calcularChanceTrocaGenero
//Calcula a chance de sucesso: base + bônus se o produtor tem o gênero + bônus proporcional às idols com o gênero
function calcularChanceTrocaGenero(pi) {
  const cfg = BALANCE.trocaGenero;
  const entra = trocaGenero[pi].entra;
  const produtor = pegarProdutorDoJogador(pi);
  const idols = boardSlots[pi].idol || [];
  const tamanho = Math.max(idols.length, 1);

  const noProdutor = !!entra && !!produtor && contarMatches([entra], produtor.generos) > 0;
  const idolsComGenero = entra ? idols.filter(i => i && contarMatches([entra], i.generos) > 0).length : 0;
  const bonusProdutor = noProdutor ? cfg.bonusProdutor : 0;
  const bonusIdols = cfg.bonusIdols * idolsComGenero / tamanho;

  return {
    base: cfg.chanceBase, bonusProdutor, bonusIdols, noProdutor, idolsComGenero, tamanho,
    total: Math.min(cfg.chanceBase + bonusProdutor + bonusIdols, 1)
  };
}

//f:resolverTrocaGenero
//Sorteia a troca de gênero uma única vez (ao travar) e guarda o resultado no estado do jogador
function resolverTrocaGenero(pi) {
  const estado = trocaGenero[pi];
  if (!trocaGeneroAtiva(pi) || !trocaGeneroCompleta(pi) || estado.resolvida) return;
  estado.chance = calcularChanceTrocaGenero(pi).total;
  estado.sucesso = Math.random() < estado.chance;
  estado.resolvida = true;
}

//f:montarGenerosFinaisMusica
//Monta a lista de gêneros da música depois da troca (remove o que sai e acrescenta o que entra)
function montarGenerosFinaisMusica(musica, entra, sai) {
  const chaveSai = normalizarGenero(sai);
  const restantes = listarGenerosDaMusica(musica).filter(g => normalizarGenero(g) !== chaveSai);
  return [...restantes, entra];
}

//f:obterResumoTrocaGenero
//Devolve uma cópia do estado da troca de gênero do jogador (usada no contexto do score e nos detalhes)
function obterResumoTrocaGenero(pi) {
  return { ...(trocaGenero[pi] || criarEstadoTrocaGenero()) };
}

// =====================
// CONTEXTO E RESULTADO
// =====================

//f:obterMusicaEfetiva
//Retorna a música usada nos cálculos: com os gêneros trocados se a troca foi sorteada com sucesso
function obterMusicaEfetiva(pi, musica) {
  const estado = trocaGenero[pi];
  if (!musica || !estado || !estado.mudarGenero || !estado.resolvida || !estado.sucesso) return musica;
  return { ...musica, generos: montarGenerosFinaisMusica(musica, estado.entra, estado.sai) };
}

//f:montarContextoScore
//Reúne os dados do jogador (idols com posição, produtor, música e tamanho do grupo)
function montarContextoScore(pi) {
  const slots = boardSlots[pi].idol || [];
  const roles = roleBoard[pi].idol || [];
  const entradas = [];

  slots.forEach((idol, i) => {
    if (!idol) return;
    entradas.push({ idol, role: roles[i] || "Posição", indice: i });
  });

  const produtor = (boardSlots[pi].producer || [])[0] || null;
  const musicaOriginal = (boardSlots[pi].music || [])[0] || null;

  return {
    pi,
    entradas,
    produtor,
    musica: obterMusicaEfetiva(pi, musicaOriginal),
    troca: obterResumoTrocaGenero(pi),
    tamanhoGrupo: Math.max(slots.length, entradas.length) // total de slots do grupo
  };
}

//f:montarResultadoFinal
//Junta os resultados parciais e aplica os multiplicadores de grupo ao score somado das idols
function montarResultadoFinal(idolsCalculadas, grupo, formacao, estrutura, troca) {
  const somaIdols = somarScoresIdols(idolsCalculadas);
  return {
    idols: idolsCalculadas,
    posicoes: estrutura.posicoes,
    grupo,
    formacao,
    troca,
    somaIdols,
    final: somaIdols * grupo.multiplicador * formacao.multiplicador
  };
}

//f:calcularResultado
//Executa todo o cálculo do jogador e devolve o resultado completo (usado por score e detalhes)
function calcularResultado(pi) {
  const contexto = montarContextoScore(pi);
  const estrutura = calcularEstruturaPosicoes(contexto.entradas, contexto.tamanhoGrupo);
  const idols = contexto.entradas.map((entrada, k) =>
    calcularScoreIdol(entrada, estrutura.porEntrada[k], contexto)
  );
  const grupo = calcularBonusGrupo(idols);
  const formacao = calcularPenalidadesFormacao(contexto, idols);
  return montarResultadoFinal(idols, grupo, formacao, estrutura, contexto.troca);
}

//f:calcularScore
//Retorna o score final arredondado do jogador
function calcularScore(pi) {
  return arredondarScore(calcularResultado(pi).final);
}

// =====================
// DETALHAMENTO
// =====================

//f:listarExtrasIdol
//Lista os textos de bônus e penalidades de uma idol (posição, especialidade, paridade, sinergia, excesso)
function listarExtrasIdol(r) {
  const extras = [];
  const pctPosicao = (r.mediaPosicao / r.base - 1) * 100;
  const pctEspecialidade = (r.multEspecialidade - 1) * 100;

  if (Math.abs(pctPosicao) > 0.1)        extras.push(`${formatarPercentual(pctPosicao)} ${t("score_posicao")}`);
  if (Math.abs(pctEspecialidade) > 0.1)  extras.push(`${formatarPercentual(pctEspecialidade)} ${t("score_especialidade")}`);
  if (r.efeitoParidade < -0.001)         extras.push(`${formatarPercentual(r.efeitoParidade * 100)} ${t("score_paridade")}`);
  if (r.estourou)                        extras.push(`${formatarPercentual((r.multPenalidade - 1) * 100)} ${t("score_excesso")}`);
  if (r.sinergia.matchesConceito > 0)    extras.push(`${formatarPercentual(r.sinergia.bonusConceito * 100)} ${t("score_bonus_conceito")}`);
  if (r.sinergia.matchesGenero > 0)      extras.push(`${formatarPercentual(r.sinergia.bonusGenero * 100)} ${t("score_bonus_genero")}`);
  return extras;
}

//f:formatarLinhaIdol
//Monta o HTML do detalhe de uma idol
function formatarLinhaIdol(r) {
  const extras = listarExtrasIdol(r);
  return `<b>${escaparHtml(r.nome)}</b> (${escaparHtml(r.role)})<br>
       ${t("score_base")} ${r.base.toFixed(2)} → ${t("score_score")} ${r.score.toFixed(2)}
       ${extras.length ? `(${extras.join(", ")})` : ""}`;
}

//f:listarExtrasGrupo
//Lista os textos de bônus e penalidades do grupo (conceito, gênero e posições que estouraram)
function listarExtrasGrupo(resultado) {
  const { grupo, posicoes } = resultado;
  const extras = [];

  if (grupo.nivelConceito) extras.push(`${formatarPercentual(grupo.bonusConceito * 100)} ${t(`score_bonus_conceito_${grupo.nivelConceito}`)}`);
  if (grupo.nivelGenero)   extras.push(`${formatarPercentual(grupo.bonusGenero * 100)} ${t(`score_bonus_genero_${grupo.nivelGenero}`)}`);

  posicoes.filter(p => p.estourou).forEach(p => {
    extras.push(`${t("score_posicao_excedida")} ${p.role} (${p.quantidade}/${p.limite})`);
  });

  resultado.formacao.itens.forEach(item => {
    extras.push(`${formatarPercentual((item.multiplicador - 1) * 100)} ${item.rotulo}`);
  });
  return extras;
}

//f:formatarLinhaTrocaGenero
//Monta a linha do detalhamento com o resultado da troca de gênero (vazia se não houve troca)
function formatarLinhaTrocaGenero(troca) {
  if (!troca || !troca.mudarGenero || !troca.resolvida) return "";
  const resultado = troca.sucesso ? t("score_troca_sucesso") : t("score_troca_falha");
  return `${t("score_troca_genero")}: ${resultado} (+${escaparHtml(troca.entra)}, -${escaparHtml(troca.sai)}) · ${t("score_chance")} ${formatarChance(troca.chance)}`;
}

//f:formatarDetalhesScore
//Monta o HTML completo do detalhamento a partir de um resultado já calculado
function formatarDetalhesScore(resultado) {
  const linhas = resultado.idols.map(formatarLinhaIdol);
  const extrasGrupo = listarExtrasGrupo(resultado);
  const linhaTroca = formatarLinhaTrocaGenero(resultado.troca);
  if (linhaTroca) linhas.push(`<br>${linhaTroca}`);

  linhas.push(
    `<br>${t("score_base_grupo")} ${resultado.somaIdols.toFixed(2)} → ${t("score_grupo")} ${resultado.final.toFixed(2)} ${
      extrasGrupo.length ? `(${extrasGrupo.join(", ")})` : ""
    }`
  );
  linhas.push(`<b>${t("score_final")}: ${arredondarScore(resultado.final)}</b>`);

  return linhas.join("<br>");
}

//f:montarDetalhesScore
//Retorna o HTML do detalhamento do score do jogador
function montarDetalhesScore(pi) {
  return formatarDetalhesScore(calcularResultado(pi));
}

// =====================
// INTERFACE DO RESULTADO
// =====================

//f:todosTravados
//Indica se todos os jogadores da ordem já travaram suas escolhas
function todosTravados() {
  return simData.ordem.every(pi => lockedPlayers[pi]);
}

//f:criarBotaoResultado
//Cria o botão "Calcular resultado" e o container de resultados logo abaixo do tabuleiro
function criarBotaoResultado() {
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

//f:injetarBotaoResultado
//Mostra, esconde ou remove o botão de resultado conforme MOSTRAR_SCORE e o estado dos jogadores
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

  criarBotaoResultado();
}

//f:calcularRankingJogadores
//Calcula o resultado de cada jogador e devolve a lista ordenada do maior para o menor score
function calcularRankingJogadores() {
  return simData.ordem
    .map(pi => {
      const resultado = calcularResultado(pi);
      return {
        nome: simData.jogadores[pi],
        pi,
        resultado,
        score: arredondarScore(resultado.final)
      };
    })
    .sort((a, b) => b.score - a.score);
}

//f:criarLinhaRanking
//Cria a linha de um jogador no ranking (medalha, nome e pontos)
function criarLinhaRanking(player, posicao) {
  const medalhas = ["🥇", "🥈", "🥉"];
  const primeiro = posicao === 0;

  const linha = document.createElement("div");
  linha.style.cssText = `
    display:flex; align-items:center; justify-content:space-between;
    padding:12px 16px; margin-bottom:8px; border-radius:8px;
    background:${primeiro ? "rgba(168,85,247,0.15)" : "#222"};
    border:1px solid ${primeiro ? "#a855f7" : "#333"};
  `;

  const medalha = document.createElement("span");
  medalha.style.cssText = "font-size:22px; min-width:36px;";
  medalha.textContent = medalhas[posicao] || `${posicao + 1}º`;

  const nome = document.createElement("span");
  nome.style.cssText = "flex:1; font-weight:bold; font-size:16px; color:#fff;";
  nome.textContent = player.nome;

  const pontos = document.createElement("span");
  pontos.style.cssText = "font-size:20px; font-weight:900; color:#a855f7;";
  pontos.textContent = `${player.score} pts`;

  linha.append(medalha, nome, pontos);
  return linha;
}

//f:criarDetalheExpansivel
//Cria o botão "detalhes" e a área expansível com o detalhamento do score
function criarDetalheExpansivel(resultado) {
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
  detalheDiv.innerHTML = formatarDetalhesScore(resultado);

  detalheBtn.onclick = () => {
    const aberto = detalheDiv.style.display !== "none";
    detalheDiv.style.display = aberto ? "none" : "block";
    detalheBtn.innerText = aberto ? t("sim_detalhes") : t("sim_fechar");
  };

  return { detalheBtn, detalheDiv };
}

//f:mostrarResultados
//Exibe o ranking final com o detalhamento expansível de cada jogador
function mostrarResultados() {
  const container = document.getElementById("resultadoContainer");
  if (!container) return;
  container.innerHTML = "";

  const titulo = document.createElement("h2");
  titulo.style.cssText = "text-align:center; color:#a855f7; margin-bottom:20px;";
  titulo.innerText = t("sim_resultado_final");
  container.appendChild(titulo);

  calcularRankingJogadores().forEach((player, i) => {
    const linha = criarLinhaRanking(player, i);
    const { detalheBtn, detalheDiv } = criarDetalheExpansivel(player.resultado);
    linha.appendChild(detalheBtn);

    const wrapper = document.createElement("div");
    wrapper.style.cssText = "margin-bottom:8px;";
    wrapper.appendChild(linha);
    wrapper.appendChild(detalheDiv);
    container.appendChild(wrapper);
  });
}