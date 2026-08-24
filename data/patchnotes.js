// ========================
// DADOS DE PATCH NOTES
// Adicione novos patches aqui, do mais recente para o mais antigo.
// Tipos de patch: "major" | "minor" | "fix" | "hotfix"
// Tipos de seção: "new" | "change" | "fix" | "remove" | "balance"
// title e cada item de "items" são objetos { pt, en } — adicione ambos os idiomas.
// O label da seção (Novo/Correções/etc.) vem automaticamente do "type" via t(), não precisa declarar.
// ========================
const PATCHES = [
  {
    version: "v0.4.5",
    title: { pt: "Sistema de Idiomas (PT/EN)", en: "Language System (PT/EN)" },
    date: "2026-08-23",
    type: "major",
    sections: [
      {
        type: "new",
        items: [
          { pt: "Adicionado suporte a <span class='hl'>Português e Inglês</span> em todo o site, com seletor de bandeiras no header.",
            en: "Added <span class='hl'>Portuguese and English</span> support across the whole site, with a flag selector in the header." },
          { pt: "Toda a interface (botões, avisos, validações, boards, modais de cartas e tutoriais) agora é traduzida dinamicamente ao trocar de idioma, sem precisar recarregar a página.",
            en: "The entire interface (buttons, warnings, validations, boards, card modals, and tutorials) is now dynamically translated when switching languages, with no page reload needed." },
          { pt: "Os Patch Notes agora também são bilíngues — cada atualização é exibida no idioma selecionado.",
            en: "Patch Notes are now bilingual too — each update is shown in the selected language." },
          { pt: "A escolha de idioma é salva automaticamente e mantida entre sessões.",
            en: "The language choice is saved automatically and persists between sessions." },
        ]
      },
      {
        type: "fix",
        items: [
          { pt: "Corrigido um bug onde o bônus de Especialidade era concedido mesmo com a idol estando alocada em outra posição.",
            en: "Fixed a bug where the Specialty bonus was granted even when an idol was placed in the wrong position." },
        ]
      }
    ]
  },
  {
    version: "v0.4.4",
    title: { pt: "Nova Database de músicas e fotos.", en: "New song & photo database." },
    date: "2026-05-06",
    type: "minor",
    sections: [
      {
        type: "new",
        items: [
          { pt: "Foram adicionadas mais de 90 novas músicas com imagens de card, descrição de conceitos e gêneros.",
            en: "Added over 90 new songs with card images, concept, and genre descriptions." },
        ]
      },
      {
        type: "fix",
        items: [
          { pt: "Corrigido um erro onde os cards puxavam dados incorretos para músicas e produtores de mesmo nome.",
            en: "Fixed a bug where cards pulled incorrect data for songs and producers sharing the same name." },
        ]
      }
    ]
  },
  {
    version: "v0.4.3",
    title: { pt: "Melhorias na Exibição dos Tutoriais.", en: "Tutorial display improvements." },
    date: "2026-05-03",
    type: "minor",
    sections: [
      {
        type: "new",
        items: [
          { pt: "Um tutorial mais completo sobre as regras do jogo foi adicionado em <span class='hl'>Configuração do Draft</span> para garantir que os jogadores entendam as mecânicas básicas antes de iniciar o draft.",
            en: "A more complete game-rules tutorial was added to <span class='hl'>Draft Setup</span> to make sure players understand the basic mechanics before starting a draft." },
          { pt: "Um tutorial de importação e exportação foi adicionado em <span class='hl'>Configuração do Draft</span> para orientar os jogadores sobre como usar os novos recursos de importação de lobby e database volátil.",
            en: "An import/export tutorial was added to <span class='hl'>Draft Setup</span> to guide players through the new lobby import and volatile database import features." },
        ]
      },
      {
        type: "fix",
        items: [
          { pt: "Os modais foram ajustados para que nenhum conteúdo de texto escape, e a identidade visual também foi atualizada para combinar com o sistema.",
            en: "Modals were adjusted so no text content overflows, and the visual identity was updated to match the rest of the system." },
        ]
      }
    ]
  },
  {
    version: "v0.4.2",
    title: { pt: "Filtros e Importação de Database Volátil", en: "Filters & Volatile Database Import" },
    date: "2026-05-01",
    type: "minor",
    sections: [
      {
        type: "new",
        items: [
          { pt: "Implementada a importação de lobby, agora os jogadores podem inserir o mesmo sorteio em computadores diferentes ou compartilhar seus sorteios com amigos via arquivo .txt (a importação de database volátil não funciona com este recurso).",
            en: "Implemented lobby import — players can now load the same draw on different computers or share their draws with friends via a .txt file (volatile database import doesn't work with this feature)." },
          { pt: "Implementada a importação de database volátil, agora os jogadores podem inserir seus próprios grupos personalizados via arquivo .csv (Excel).",
            en: "Implemented volatile database import — players can now add their own custom groups via a .csv (Excel) file." },
        ]
      },
      {
        type: "fix",
        items: [
          { pt: "O filtro em configuração agora suporta seleção por geração e por grupo, permitindo uma personalização mais granular do pool de idols para o draft.",
            en: "The setup filter now supports selection by generation and by group, allowing more granular customization of the idol pool for the draft." },
          { pt: "Os botões <span class='hl'>Marcar Todos</span> e <span class='hl'>Desmarcar Todos</span> agora respeitam o filtro aplicado.",
            en: "The <span class='hl'>Select All</span> and <span class='hl'>Deselect All</span> buttons now respect the applied filter." },
        ]
      }
    ]
  },
  {
    version: "v0.4.1",
    title: { pt: "Nova Identidade Visual e Validações", en: "New Visual Identity & Validations" },
    date: "2026-04-28",
    type: "minor",
    sections: [
      {
        type: "new",
        items: [
          { pt: "A identidade visual do site foi reestruturada para um deisgn mais moderno.",
            en: "The site's visual identity was overhauled for a more modern design." },
        ]
      },
      {
        type: "fix",
        items: [
          { pt: "Uma validação foi adicionada para impedir que o draft seja iniciado se as regras não forem atendidas, com mensagens de erro específicas para cada tipo de inconsistência (ex: número insuficiente de idols, músicas ou produtores selecionados).",
            en: "Added validation to prevent starting a draft if the rules aren't met, with specific error messages for each type of issue (e.g. not enough idols, songs, or producers selected)." },
          { pt: "Uma validação foi adicionada para impedir que o mesmo nome de jogador seja adicionado mais de uma vez, garantindo que cada jogador tenha um nome único no draft.",
            en: "Added validation to prevent the same player name from being added more than once, ensuring every player has a unique name in the draft." },
          { pt: "Ajustado o visual do botão de <span class='hl'>Travar Escolha</span> para indicar claramente quando ele está habilitado ou desabilitado, melhorando a experiência do usuário durante a fase de simulação.",
            en: "Adjusted the <span class='hl'>Lock In</span> button's visuals to clearly show when it's enabled or disabled, improving the user experience during the simulation phase." },
          { pt: "Um aviso é emitido se o jogador tentar clicar no botão de <span class='hl'>Travar Escolha</span> sem que todos os slots estejam preenchidos ou sem que todos os roles estejam atribuídos.",
            en: "A warning is now shown if the player tries to click <span class='hl'>Lock In</span> without filling every slot or assigning every role." },
          { pt: "Os Cards retornam para sua posição original do Pool caso sejam trocados ou devolvidos.",
            en: "Cards now return to their original position in the Pool when swapped or returned." },
        ]
      }
    ]
  },
  {
    version: "v0.4.0",
    title: { pt: "Fase de Simulação", en: "Simulation Phase" },
    date: "2026-04-27",
    type: "major",
    sections: [
      {
        type: "new",
        items: [
          { pt: "Adicionada a <span class='hl'>Fase de Simulação</span> após o encerramento do draft.",
            en: "Added the <span class='hl'>Simulation Phase</span> after the draft ends." },
          { pt: "Board de formação por jogador com slots de idol, música e produtor.",
            en: "Per-player lineup board with idol, song, and producer slots." },
          { pt: "Pool pessoal: cards do draft ficam disponíveis para organização livre.",
            en: "Personal pool: draft cards become available for free organization." },
          { pt: "Combo de papel por slot (<span class='hl'>Main Vocal, Sub-vocal, Main Dancer</span> etc.) com numeração automática para papéis repetidos.",
            en: "Role dropdown per slot (<span class='hl'>Main Vocal, Sub-vocal, Main Dancer</span>, etc.) with automatic numbering for repeated roles." },
          { pt: "Roles distintos para músicas e produtores: <span class='hl'>Cute, Girl Crush, Performance</span> etc.",
            en: "Distinct roles for songs and producers: <span class='hl'>Cute, Girl Crush, Performance</span>, etc." },
          { pt: "Botão <span class='hl'>Travar Escolha</span> habilitado automaticamente quando todos os slots estão preenchidos e todos os roles atribuídos.",
            en: "<span class='hl'>Lock In</span> button automatically enabled once every slot is filled and every role assigned." },
          { pt: "Modal de detalhes acessível ao clicar nos cards do board e da pool.",
            en: "Detail modal accessible by clicking cards on the board and in the pool." },
          { pt: "Drag & drop com restrição de tipo: idol → slot idol, music → slot music, producer → slot producer.",
            en: "Drag & drop with type restriction: idol → idol slot, music → music slot, producer → producer slot." },
        ]
      },
      {
        type: "fix",
        items: [
          { pt: "Ghost card não persiste mais após soltar o card em qualquer área.",
            en: "Ghost card no longer persists after dropping a card in any area." },
          { pt: "Ghost card não persiste ao tentar abrir o modal.",
            en: "Ghost card no longer persists when opening the modal." },
          { pt: "Clique em card dentro do board não causa mais piscar da tela.",
            en: "Clicking a card inside the board no longer causes the screen to flicker." },
        ]
      }
    ]
  },
  {
    version: "v0.3.2",
    title: { pt: "Cards com fotos e Colour Coded Fallback", en: "Cards with Photos & Colour-Coded Fallback" },
    date: "2026-04-26",
    type: "minor",
    sections: [
      {
        type: "new",
        items: [
          { pt: "Cards de idols, músicas e produtores agora exibem fotos reais (quando disponíveis).",
            en: "Idol, song, and producer cards now show real photos (when available)." },
          { pt: "Placeholders coloridos com nome e identificador foram implementados para os cards sem fotos.",
            en: "Colored placeholders with name and identifier were implemented for cards without photos." },
        ]
      },
    ]
  },
  {
    version: "v0.3.1",
    title: { pt: "Filtros de Seleção", en: "Selection Filters" },
    date: "2026-04-25",
    type: "minor",
    sections: [
      {
        type: "new",
        items: [
          { pt: "Melhorias na interface de configuração:", en: "Setup interface improvements:" },
          { pt: "Campo <span class='hl'>Nome dos jogadores</span> com scroll box separada do lado de configuração.",
            en: "<span class='hl'>Player names</span> field with its own separate scroll box in the setup panel." },
          { pt: "Botões <span class='hl'>Marcar Todos / Desmarcar Todos</span> para músicas e produtores na tela de configuração.",
            en: "<span class='hl'>Select All / Deselect All</span> buttons for songs and producers on the setup screen." },
        ]
      },
      {
        type: "fix",
        items: [
          { pt: "Produtores e músicas desmarcados agora são corretamente excluídos do sorteio — antes o sistema ignorava o filtro e sorteava do pool completo.",
            en: "Unchecked producers and songs are now correctly excluded from the draw — previously the system ignored the filter and drew from the full pool." },
          { pt: "Novas funções foram adicionadas para ler checkboxes reais.",
            en: "New functions were added to read actual checkbox states." },
        ]
      }
    ]
  },
  {
    version: "v0.3.0",
    title: { pt: "Draft Game", en: "Draft Game" },
    date: "2026-04-24",
    type: "major",
    sections: [
      {
        type: "new",
        items: [
          { pt: "Tela de jogo do draft com ordem em cobrinha (snake draft).",
            en: "Draft game screen with snake-draft turn order." },
          { pt: "Board individual por jogador com slots de idol, música e produtor.",
            en: "Individual per-player board with idol, song, and producer slots." },
          { pt: "Pool global de cards com drag & drop para os slots.",
            en: "Global card pool with drag & drop into slots." },
          { pt: "Modal de detalhes ao clicar em qualquer card.",
            en: "Detail modal when clicking any card." },
          { pt: "Cards com color-code: <span class='hl'>amarelo</span> para idols, <span class='hl'>azul marinho</span> para músicas, <span class='hl'>roxo</span> para produtores.",
            en: "Color-coded cards: <span class='hl'>yellow</span> for idols, <span class='hl'>navy blue</span> for songs, <span class='hl'>purple</span> for producers." },
          { pt: "Destaque visual no jogador da vez.", en: "Visual highlight on the current player's turn." },
          { pt: "Botão <span class='hl'>Encerrar Turno</span> que avança a ordem de escolha.",
            en: "<span class='hl'>End Turn</span> button that advances the pick order." },
        ]
      }
    ]
  },
  {
    version: "v0.2.0",
    title: { pt: "Configuração do Draft", en: "Draft Setup" },
    date: "2026-04-23",
    type: "major",
    sections: [
      {
        type: "new",
        items: [
          { pt: "Tela de configuração do draft com 4 blocos: regras, opções, idols e músicas/produtores.",
            en: "Draft setup screen with 4 blocks: rules, options, idols, and songs/producers." },
          { pt: "Filtro por geração (4ª e 5ª) na seleção de idols.",
            en: "Generation filter (4th and 5th) in idol selection." },
          { pt: "Seleção granular de idols por grupo.", en: "Granular idol selection by group." },
          { pt: "Sorteio aleatório de tamanho de grupo com distribuição ponderada.",
            en: "Random group-size draw with weighted distribution." },
          { pt: "Seleção de músicas e produtores com checkboxes individuais.",
            en: "Song and producer selection with individual checkboxes." },
        ]
      }
    ]
  },
  {
    version: "v0.1.0",
    title: { pt: "Lançamento Inicial", en: "Initial Release" },
    date: "2026-04-23",
    type: "major",
    sections: [
      {
        type: "new",
        items: [
          { pt: "Página inicial com seleção de modos de jogo.", en: "Home page with game mode selection." },
          { pt: "Modo Draft disponível; Quiz, Gacha e Manager em desenvolvimento.",
            en: "Draft mode available; Quiz, Gacha, and Manager still in development." },
          { pt: "Database com idols, músicas e produtores.", en: "Database with idols, songs, and producers." },
          { pt: "Paleta de cores definida: roxo, amarelo, azul, cinza escuro.",
            en: "Defined color palette: purple, yellow, blue, dark gray." },
        ]
      }
    ]
  }
];

// ========================
// RENDER DA PÁGINA DE PATCH NOTES
// ========================
function renderPatchNotes() {
  const lang = (typeof currentLanguage !== "undefined" ? currentLanguage : "pt");
  const tr = (obj) => obj?.[lang] || obj?.pt || "";
  const tt = (chave) => (typeof t === "function" ? t(chave) : chave);

  const tagKeys = {
    major:  "patch_tag_major",
    minor:  "patch_tag_minor",
    fix:    "patch_tag_fix",
    hotfix: "patch_tag_hotfix",
  };
  const sectionKeys = {
    new:     "patch_section_new",
    change:  "patch_section_change",
    fix:     "patch_section_fix",
    remove:  "patch_section_remove",
    balance: "patch_section_balance",
  };

  const old = document.querySelector(".patchnotes-page");
  if (old) old.remove();

  const page = document.createElement("div");
  page.className = "patchnotes-page";
  page.innerHTML = `
    <div class="patchnotes-header">
      <h1>${tt("patchnotes_title")}</h1>
      <p>${tt("patchnotes_subtitle")}</p>
    </div>
  `;

  if (!PATCHES.length) {
    page.innerHTML += `<div class="patchnotes-empty">${tt("patchnotes_empty")}</div>`;
  } else {
    PATCHES.forEach((patch, i) => {
      const card = document.createElement("div");
      card.className = "patch-card" + (i === 0 ? " open" : "");

      const sectionsHTML = patch.sections.map(sec => `
        <div class="patch-section">
          <div class="patch-section-title ${sec.type}">${tt(sectionKeys[sec.type] || sec.type)}</div>
          <ul class="patch-list">
            ${sec.items.map(item => `<li>${tr(item)}</li>`).join("")}
          </ul>
        </div>
      `).join("");

      card.innerHTML = `
        <div class="patch-header">
          <div class="patch-header-left">
            <span class="patch-version">${patch.version}</span>
            <span class="patch-title">${tr(patch.title)}</span>
          </div>
          <span class="patch-tag tag-${patch.type}">${tt(tagKeys[patch.type] || patch.type)}</span>
          <span class="patch-date">${patch.date}</span>
          <span class="patch-chevron">▼</span>
        </div>
        <div class="patch-body">
          ${sectionsHTML}
        </div>
      `;

      card.querySelector(".patch-header").addEventListener("click", () => {
        card.classList.toggle("open");
      });

      page.appendChild(card);
    });
  }

  document.body.appendChild(page);
}
