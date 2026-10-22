// ========================
// TRADUÇÕES DO SITE (i18n)
// Adicione novos idiomas ou chaves aqui.
// ========================
const TRANSLATIONS = {
  "pt": {
    // ===========================
    // Header Nav Links
    // ===========================
    "nav_inicio": "Início",
    "nav_draft": "Draft",
    "nav_patchnotes": "Patch Notes",

    // ===========================
    // Index Page
    // ===========================
    // Título e subtítulo
    "index_title": "Bem-vindo ao Stray7 K-Pop Idol Games!",
    "index_subtitle": "Entre no universo K-Pop e escolha o seu modo preferido de jogo.",
    // Modos
    "mode_draft_title": "Draft Game",
    "mode_draft_desc": "Faça um draft com suas idols preferidas e tente montar o time ideal com base nas variáveis de posições, conceitos e gêneros musicais.",
    "mode_quiz_title": "Quiz Game",
    "mode_quiz_desc": "Teste seus conhecimentos sobre K-Pop com perguntas desafiadoras.",
    "mode_gacha_title": "Gacha Game",
    "mode_gacha_desc": "Rode o gacha e obtenha novas idols para seu time, combinando sorte e estratégia.",
    "mode_manager_title": "Manager Game",
    "mode_manager_desc": "Gerencie seu grupo de idols, planeje estratégias e acompanhe o desempenho de suas atividades.",
    // Botões
    "btn_jogar": "Jogar",
    "btn_em_breve": "Jogar (em breve)",
    // Alertas
    "alert_em_desenvolvimento": "Este modo de jogo ainda está em desenvolvimento.",

    // ===========================
    // Draft Setup Page
    // ===========================
    // Título e subtítulo
    "draftconfig_title": "Configuração do Draft",
    "draftconfig_subtitle": "Defina os jogadores, tamanho do grupo e selecione grupos, idols, músicas e produtores para o sorteio.",
    // Bloco 1 - Regras do Jogo
    "block1_title": "Regras do Jogo",
    "rule_1": "Monte um time escolhendo idols, músicas e produtores no formato Snake Draft.",
    "rule_2": "O Pool é limitado ao número de jogadores — pegar um item prejudica diretamente os outros.",
    "rule_3": "A ordem dos turnos inverte a cada rodada (cobrinha): quem escolheu por último joga duas vezes seguidas.",
    "rule_4": "Combine conceitos e gêneros entre idols, músicas e produtores para maximizar a pontuação.",
    "rule_5": "Músicas e produtores são opcionais — ao desmarcá-los, o draft usa apenas idols.",
    "rule_6": "Este jogo ainda está em desenvolvimento.",
    "btn_tutorial_completo": "Ver Tutorial Completo",
    "btn_tutorial_lobby": "Ver Tutoriais de Importação",
    // Bloco 2 - Opções de Configuração
    "block2_title": "Opções de Configuração",
    "label_num_jogadores": "Número de jogadores:",
    "placeholder_num_jogadores": "Ex: 4 jogadores",
    "label_tamanho_grupo": "Tamanho do Grupo:",
    "placeholder_tamanho_grupo": "Ex: 6 integrantes",
    "btn_random": "Random",
    "btn_importar_draft": "⬆ Importar Draft",
    "btn_iniciar_draft": "Iniciar Draft",
    "label_nome_jogadores": "Nome dos jogadores:",
    "placeholder_nome_jogador_n": "Nome do jogador",
    // Bloco 3 - Seleção de Idols e Grupos
    "block3_title": "Seleção de Idols e Grupos",
    "filtro_geracao": "Geração:",
    "filtro_inicial": "Inicial:",
    "filtro_todas": "Todas",
    "btn_importar_db": "⬆ Importar Database",
    "btn_exportar_db": "⬇ Exportar Database",
    "btn_marcar_todos": "Marcar Todos",
    "btn_desmarcar_todos": "Desmarcar Todos",
    // Bloco 4 - Seleção de Músicas e Produtores
    "block4_title": "Seleção de Músicas e Produtores",
    "label_musicas": "♫ Músicas",
    "label_produtores": "🎧 Produtores",
    // Alertas de Validação
    "err_nomes_vazios": "Preencha o nome de todos os jogadores.",
    "err_nomes_duplicados": "Cada jogador deve ter um nome único.",
    "err_produtores_min": "O número de produtores deve ser maior ou igual ao número de jogadores.",
    "err_musicas_min": "O número de músicas deve ser maior ou igual ao número de jogadores.",
    "err_idols_min": "O número de idols selecionados é menor do que a quantidade mínima necessária para iniciar o draft. (Deve ser igual ao número de jogadores multiplicado pelo número de integrantes)",
    "err_grupo_positivo": "O tamanho do grupo deve ser um número positivo.",
    "err_sem_jogadores": "Informe pelo menos um jogador para iniciar o draft.",
    // Alertas de Importação
    "alert_db_importada": "Database importada com sucesso!",
    "alert_formato_nao_suportado": "Formato não suportado. Use .json ou .csv",
    "alert_erro_ler_arquivo": "Erro ao ler o arquivo: ",
    "alert_nenhum_item": "Nenhum item reconhecido.",
    "alert_itens_substituidos": "{n} substituído(s) (id já existente)",
    "alert_itens_sem_id": "{n} ignorado(s) (id vazio)",
    "alert_use_txt": "Use um arquivo .txt exportado pelo Stray7.",
    "alert_arquivo_invalido": "Arquivo inválido ou incompleto. Verifique se foi exportado pelo Stray7.",
    "alert_itens_ausentes": "Atenção: {n} item(s) da pool original não foram encontrados na database atual e foram ignorados.\\n\\nO draft será iniciado com os itens disponíveis.",
    "alert_nenhum_draft": "Nenhum dado de draft encontrado.",
    // Exportação de Database (colunas separadas por vírgula e nomes dos arquivos, sem a extensão)
    "export_colunas_idols": "Geração,Tipo,ID,Nome,Grupo,Aniversário,Vocal,Dance,Rap,Center,Visual,Especialidade,Conceitos,Gêneros,Pontos Fortes,Pontos Fracos",
    "export_colunas_musicas": "Tipo,ID,Nome,Fonte,Conceitos,Gêneros",
    "export_colunas_produtores": "Tipo,ID,Nome,Conceitos,Gêneros,Músicas Conhecidas",
    "export_arquivo_idols": "stray7_database_idols",
    "export_arquivo_musicas": "stray7_database_musicas",
    "export_arquivo_produtores": "stray7_database_produtores",
    
    // ===========================
    // Draft Game Page
    // ===========================
    // Título e subtítulo
    "draftgame_title": "Fase de Escolha",
    "draftgame_subtitle": "Escolha suas cartas e faça o melhor draft com idols, músicas e produtores.",
    // Labels
    "label_pool": "Pool",
    "turno_de": "Turno de: ",
    // Botões
    "btn_exportar_draft": "⬇ Exportar Draft",
    "btn_encerrar_turno": "Encerrar Turno",
    "btn_fase_simulacao": "Fase de Simulação",
    // Alertas
    "aviso_erro_carregar_draft": "Erro ao carregar draft",
    "aviso_escolha_card": "Escolha um Card!",
    "aviso_draft_encerrado": "🎉 Draft Encerrado! Todos os boards foram preenchidos com sucesso!",
    "aviso_sem_slot": "Não há slot disponível para este card.",
    "turno_encerrado": "Draft encerrado!",
    // Boards
    "board_idols": "Formação",
    "board_musica": "Música",
    "board_produtor": "Produtor",
    // Modal
    "modal_grupo": "Grupo",
    "modal_aniversario": "Aniversário",
    "modal_vocal": "Vocal",
    "modal_dance": "Dance",
    "modal_rap": "Rap",
    "modal_center": "Center",
    "modal_visual": "Visual",
    "modal_especialidade": "Especialidade",
    "modal_conceitos_predominantes": "Conceitos Predominantes",
    "modal_generos_predominantes": "Gêneros Predominantes",
    "modal_pontos_fortes": "Pontos Fortes",
    "modal_pontos_fracos": "Pontos Fracos",
    "modal_fonte": "Fonte",
    "modal_conceitos_originais": "Conceitos Originais",
    "modal_generos_originais": "Gêneros Originais",
    "modal_musicas_conhecidas": "Músicas Conhecidas",
    "modal_escolher_card": "Escolher este card",
    
    // ===========================
    // Simulation Phase Page
    // ===========================
    // Título e subtítulo
    "simulation_title": "Fase de Simulação",
    "simulation_subtitle": "Defina as posições, gêneros e conceitos ideais para seu grupo.",
    // Botões
    "btn_travar_escolha": "Travar Escolha",
    "btn_travado": "🔒 Travado",
    // Labels
    "sim_formacao": "Formação",
    "sim_painel_posicao": "Escolha de Posição",
    "sim_posicao_registrada": "Posição registrada!",
    "sim_atributos": "Atributos",
    "sim_conceitos": "Conceitos",
    "sim_generos": "Gêneros",
    "sim_dicas": "Dicas",
    // Alertas de validação
    "sim_tooltip_travar": "Defina todos os papéis antes de travar a escolha.",
    "sim_erro_travar": "Defina todos os papéis antes de travar a escolha.",
    "sim_tooltip_travar_troca": "Escolha o gênero que entra e o que sai.",
    "sim_erro_travar_troca": "Escolha o gênero que entra e o que sai antes de travar a escolha.",
    // Dicas do carrossel
    "sim_dica_1": "A especialidade da idol rende bônus quando ela ocupa a posição do mesmo atributo.",
    "sim_dica_2": "Duas idols na mesma posição dividem o destaque: o bônus de posição de ambas diminui.",
    "sim_dica_3": "Conceitos do produtor e gêneros da música em comum com as idols aumentam a pontuação.",
    "sim_dica_4": "A troca de gênero tem mais chance de dar certo quando o produtor e as idols já têm o gênero escolhido.",
    "sim_dica_5": "Main, Center e Visual têm um limite por posição, que depende do tamanho do grupo.",
    "sim_dica_6": "Alguns gêneros e conceitos exigem posições mínimas; sem elas, o grupo perde pontos.",
    // Cálculos e Pontuação
    "sim_calcular_resultado": "🏆 Calcular Resultado",
    "sim_resultado_final": "🏆 Resultado Final",
    "sim_detalhes": "▼ Detalhes",
    "sim_fechar": "▲ Fechar",
    "score_posicao": "posição",
    "score_especialidade": "especialidade",
    "score_base": "base",
    "score_score": "score",
    "score_final": "Score Final",
    "score_base_grupo": "base do grupo",
    "score_grupo": "score do grupo",
    "score_paridade": "Paridade",
    "score_excesso": "excesso",
    "score_posicao_excedida": "posição excedida",
    "score_bonus_conceito": "conceito",
    "score_bonus_genero": "gênero",
    "score_bonus_conceito_total": "conceito total",
    "score_bonus_conceito_parcial": "conceito parcial",
    "score_bonus_genero_total": "gênero total",
    "score_bonus_genero_parcial": "gênero parcial",
    "score_troca_genero": "Troca de gênero",
    "score_troca_sucesso": "realizada",
    "score_troca_falha": "falhou",
    "score_chance": "chance",
    "score_sem": "sem",
    "score_e": "e",
    // Mudança de gênero
    "gen_mudar_genero": "Mudar gênero",
    "gen_nao": "Não",
    "gen_sim": "Sim",
    "gen_troca_titulo": "Troca de Gênero",
    "gen_entra": "Entra",
    "gen_sai": "Sai",
    "gen_dica": "Escolha o gênero que entra e o que sai.",
    "gen_selecione": "Selecione",
    "gen_chance": "Chance",
    "gen_chance_base": "base",
    "gen_chance_produtor": "produtor",
    "gen_chance_idols": "idols",
    "gen_resultado_sucesso": "Troca realizada!",
    "gen_resultado_falha": "A troca falhou!",
    "gen_resultado_registrada": "Troca registrada!",
    "gen_generos_finais": "Gêneros finais",
    "gen_mantidos": "Gêneros Originais Mantidos",

    
    // ===========================
    // Patch Notes Page
    // ===========================
    // Título e subtítulo
    "patchnotes_title": "Patch Notes",
    "patchnotes_subtitle": "Histórico de atualizações do Stray7 K-Pop Games.",
    "patchnotes_empty": "Nenhuma patch note registrada ainda.",
    // Tipos de patch
    "patch_tag_major": "Major",
    "patch_tag_minor": "Minor",
    "patch_tag_fix": "Fix",
    "patch_tag_hotfix": "Hotfix",
    // Tipos de seção
    "patch_section_new": "Novo",
    "patch_section_change": "Alterado",
    "patch_section_fix": "Correções",
    "patch_section_remove": "Removido",
    "patch_section_balance": "Balanceamento",

    // ===========================
    // Feedback Page
    // ===========================
    // Título e subtítulo
    "nav_feedback": "Feedback",
    "feedback_title": "Fale com a gente",
    "feedback_subtitle": "Encontrou um bug, tem uma sugestão ou quer só dar um oi? Mande sua mensagem para a equipe do Stray7.",
    // Labels
    "feedback_label_name": "Nome ou apelido",
    "feedback_placeholder_name": "Como podemos te chamar?",
    "feedback_label_email": "E-mail",
    "feedback_placeholder_email": "seuemail@exemplo.com",
    "feedback_label_message": "Mensagem",
    "feedback_placeholder_message": "Escreva aqui seu feedback, sugestão ou problema encontrado...",
    "feedback_btn_send": "Enviar",
    "feedback_btn_sending": "Enviando...",
    // Alertas
    "feedback_success": "Feedback enviado com sucesso!",
    "feedback_error_send": "Não foi possível enviar agora. Tente novamente em instantes ou escreva para stray7team@gmail.com.",
    "feedback_not_configured": "O envio de feedback ainda não foi configurado. Escreva para stray7team@gmail.com.",
    "feedback_err_name": "Informe seu nome ou apelido.",
    "feedback_err_email": "Informe um e-mail válido.",
    "feedback_err_message": "Escreva sua mensagem." 
  },
  "en": {
    // ===========================
    // Header Nav Links
    // ===========================
    "nav_inicio": "Home",
    "nav_draft": "Draft",
    "nav_patchnotes": "Patch Notes",

    // ===========================
    // Index Page
    // ===========================
    // Title and subtitle
    "index_title": "Welcome to Stray7 K-Pop Idol Games!",
    "index_subtitle": "Step into the K-Pop universe and choose your favorite game mode.",
    // Modes
    "mode_draft_title": "Draft Game",
    "mode_draft_desc": "Draft your favorite idols and try to build the ideal team based on position, concept, and genre variables.",
    "mode_quiz_title": "Quiz Game",
    "mode_quiz_desc": "Test your K-Pop knowledge with challenging questions.",
    "mode_gacha_title": "Gacha Game",
    "mode_gacha_desc": "Roll the gacha and get new idols for your team, combining luck and strategy.",
    "mode_manager_title": "Manager Game",
    "mode_manager_desc": "Manage your idol group, plan strategies, and track the performance of your activities.",
    // Buttons
    "btn_jogar": "Play",
    "btn_em_breve": "Play (coming soon)",
    // Alerts
    "alert_em_desenvolvimento": "This game mode is still under development.",

    // ===========================
    // Draft Setup Page
    // ===========================
    // Title and subtitle
    "draftconfig_title": "Draft Setup",
    "draftconfig_subtitle": "Set the players, group size, and select groups, idols, songs, and producers for the draft.",
    // Block 1 - Game Rules
    "block1_title": "Game Rules",
    "rule_1": "Build a team by picking idols, songs, and producers in Snake Draft format.",
    "rule_2": "The Pool is limited to the number of players — taking an item directly affects the others.",
    "rule_3": "Turn order reverses each round (snake): whoever picked last goes twice in a row.",
    "rule_4": "Combine concepts and genres across idols, songs, and producers to maximize your score.",
    "rule_5": "Songs and producers are optional — unchecking them makes the draft idols-only.",
    "rule_6": "This game is still in development.",
    "btn_tutorial_completo": "View Full Tutorial",
    "btn_tutorial_lobby": "View Import Tutorials",
    // Block 2 - Setup Options
    "block2_title": "Setup Options",
    "label_num_jogadores": "Number of players:",
    "placeholder_num_jogadores": "e.g. 4 players",
    "label_tamanho_grupo": "Group Size:",
    "placeholder_tamanho_grupo": "e.g. 6 members",
    "btn_random": "Random",
    "btn_importar_draft": "⬆ Import Draft",
    "btn_iniciar_draft": "Start Draft",
    "label_nome_jogadores": "Player names:",
    "placeholder_nome_jogador_n": "Player name",
    // Block 3 - Idol & Group Selection
    "block3_title": "Idol & Group Selection",
    "filtro_geracao": "Generation:",
    "filtro_inicial": "Starts with:",
    "filtro_todas": "All",
    "btn_importar_db": "⬆ Import Database",
    "btn_exportar_db": "⬇ Export Database",
    "btn_marcar_todos": "Select All",
    "btn_desmarcar_todos": "Deselect All",
    // Block 4 - Song & Producer Selection
    "block4_title": "Song & Producer Selection",
    "label_musicas": "♫ Songs",
    "label_produtores": "🎧 Producers",
    // Validation Alerts
    "err_nomes_vazios": "Fill in the name for every player.",
    "err_nomes_duplicados": "Each player must have a unique name.",
    "err_produtores_min": "The number of producers must be greater than or equal to the number of players.",
    "err_musicas_min": "The number of songs must be greater than or equal to the number of players.",
    "err_idols_min": "The number of selected idols is below the minimum needed to start the draft. (Must equal the number of players multiplied by the number of members)",
    "err_grupo_positivo": "Group size must be a positive number.",
    "err_sem_jogadores": "Enter at least one player to start the draft.",
    // Import Alerts
    "alert_db_importada": "Database imported successfully!",
    "alert_formato_nao_suportado": "Unsupported format. Use .json or .csv",
    "alert_erro_ler_arquivo": "Error reading file: ",
    "alert_nenhum_item": "No items recognized.",
    "alert_itens_substituidos": "{n} replaced (id already exists)",
    "alert_itens_sem_id": "{n} ignored (empty id)",
    "alert_use_txt": "Use a .txt file exported by Stray7.",
    "alert_arquivo_invalido": "Invalid or incomplete file. Check that it was exported by Stray7.",
    "alert_itens_ausentes": "Note: {n} item(s) from the original pool were not found in the current database and were skipped.\\n\\nThe draft will start with the available items.",
    "alert_nenhum_draft": "No draft data found.",
    // Database Export (comma-separated columns and file names, without the extension)
    "export_colunas_idols": "Gen,Type,ID,Name,Group,Birthday,Vocal,Dance,Rap,Center,Visual,Specialty,Concepts,Genres,Strongpoints,Weakpoints",
    "export_colunas_musicas": "Type,ID,Name,Source,Concepts,Genres",
    "export_colunas_produtores": "Type,ID,Name,Concepts,Genres,Known Songs",
    "export_arquivo_idols": "stray7_database_idols",
    "export_arquivo_musicas": "stray7_database_songs",
    "export_arquivo_produtores": "stray7_database_producers",
    
    // ===========================
    // Draft Game Page
    // ===========================
    // Title and subtitle
    "draftgame_title": "Draft Phase",
    "draftgame_subtitle": "Pick your cards and put together the best draft with idols, songs, and producers.",
    // Labels
    "label_pool": "Pool",
    "turno_de": "Turn: ",
    // Buttons
    "btn_exportar_draft": "⬇ Export Draft",
    "btn_encerrar_turno": "End Turn",
    "btn_fase_simulacao": "Simulation Phase",
    // Alerts
    "aviso_erro_carregar_draft": "Error loading draft",
    "aviso_escolha_card": "Pick a card!",
    "aviso_draft_encerrado": "🎉 Draft Complete! All boards have been filled successfully!",
    "aviso_sem_slot": "There is no available slot for this card.",
    "turno_encerrado": "Draft complete!",
    // Boards
    "board_idols": "Lineup",
    "board_musica": "Song",
    "board_produtor": "Producer",
    // Modal
    "modal_grupo": "Group",
    "modal_aniversario": "Birthday",
    "modal_vocal": "Vocal",
    "modal_dance": "Dance",
    "modal_rap": "Rap",
    "modal_center": "Center",
    "modal_visual": "Visual",
    "modal_especialidade": "Specialty",
    "modal_conceitos_predominantes": "Main Concepts",
    "modal_generos_predominantes": "Main Genres",
    "modal_pontos_fortes": "Strengths",
    "modal_pontos_fracos": "Weaknesses",
    "modal_fonte": "Source",
    "modal_conceitos_originais": "Original Concepts",
    "modal_generos_originais": "Original Genres",
    "modal_musicas_conhecidas": "Known Songs",
    "modal_escolher_card": "Pick this card",
    
    // ===========================
    // Simulation Phase Page
    // ===========================
    // Title and subtitle
    "simulation_title": "Simulation Phase",
    "simulation_subtitle": "Define the ideal positions, genres, and concepts for your group.",
    // Buttons
    "btn_travar_escolha": "Lock In",
    "btn_travado": "🔒 Locked",
    // Labels
    "sim_formacao": "Lineup",
    "sim_painel_posicao": "Choose a Position",
    "sim_posicao_registrada": "Position Registered!",
    "sim_atributos": "Attributes",
    "sim_conceitos": "Concepts",
    "sim_generos": "Genres",
    "sim_dicas": "Tips",
    "role_placeholder_posicao": "Position",
    // Validation Alerts
    "sim_tooltip_travar": "Assign every role",
    "sim_erro_travar": "Assign every role before locking in.",
    "sim_tooltip_travar_troca": "Choose the genre that goes in and the one that goes out",
    "sim_erro_travar_troca": "Choose the genre that goes in and the one that goes out before locking in.",
    // Carousel tips
    "sim_dica_1": "An idol's specialty gives a bonus when she takes the position of the same attribute.",
    "sim_dica_2": "Two idols in the same position share the spotlight: both lose part of the position bonus.",
    "sim_dica_3": "Concepts from the producer and genres from the song that match your idols raise the score.",
    "sim_dica_4": "A genre swap is more likely to succeed when the producer and the idols already have the chosen genre.",
    "sim_dica_5": "Main, Center and Visual have a per-position limit that depends on the group size.",
    "sim_dica_6": "Some genres and concepts require a minimum number of a certain position; without them, the group loses points.",
    // Calcs and Scoring
    "sim_calcular_resultado": "🏆 Calculate Result",
    "sim_resultado_final": "🏆 Final Result",
    "sim_detalhes": "▼ Details",
    "sim_fechar": "▲ Close",
    "score_posicao": "position",
    "score_especialidade": "specialty",
    "score_base": "base",
    "score_score": "score",
    "score_final": "Final Score",
    "score_base_grupo": "group base",
    "score_grupo": "group score",
    "score_paridade": "Parity",
    "score_excesso": "excess",
    "score_posicao_excedida": "position over limit",
    "score_bonus_conceito": "concept",
    "score_bonus_genero": "genre",
    "score_bonus_conceito_total": "full concept",
    "score_bonus_conceito_parcial": "partial concept",
    "score_bonus_genero_total": "full genre",
    "score_bonus_genero_parcial": "partial genre",
    "score_troca_genero": "Genre swap",
    "score_troca_sucesso": "succeeded",
    "score_troca_falha": "failed",
    "score_chance": "chance",
    "score_sem": "without",
    "score_e": "and",
    // Genre Change
    "gen_mudar_genero": "Change Genre",
    "gen_nao": "No",
    "gen_sim": "Yes",
    "gen_troca_titulo": "Genre Swap",
    "gen_entra": "In",
    "gen_sai": "Out",
    "gen_dica": "Choose the genre that goes in and the one that goes out.",
    "gen_selecione": "Select",
    "gen_chance": "Chance",
    "gen_chance_base": "base",
    "gen_chance_produtor": "producer",
    "gen_chance_idols": "idols",
    "gen_resultado_sucesso": "Swap Successful!",
    "gen_resultado_falha": "Swap Failed!",
    "gen_resultado_registrada": "Swap Registered!",
    "gen_generos_finais": "Final Genres",
    "gen_mantidos": "Original Genres Retained",
    
    // ===========================
    // Patch Notes Page
    // ===========================
    // Title and subtitle
    "patchnotes_title": "Patch Notes",
    "patchnotes_subtitle": "Stray7 K-Pop Games update history.",
    "patchnotes_empty": "No patch notes recorded yet.",
    // Patch Types
    "patch_tag_major": "Major",
    "patch_tag_minor": "Minor",
    "patch_tag_fix": "Fix",
    "patch_tag_hotfix": "Hotfix",
    // Section Types
    "patch_section_new": "New",
    "patch_section_change": "Changed",
    "patch_section_fix": "Fixes",
    "patch_section_remove": "Removed",
    "patch_section_balance": "Balance",

    // ===========================
    // Feedback Page
    // ===========================
    // Title and subtitle
    "nav_feedback": "Feedback",
    "feedback_title": "Get in touch",
    "feedback_subtitle": "Want to report a bug, give a suggestion, or just say hi? Send a message to the Stray7 team.",
    // Labels
    "feedback_label_name": "Name or nickname",
    "feedback_placeholder_name": "What should we call you?",
    "feedback_label_email": "Email",
    "feedback_placeholder_email": "youremail@example.com",
    "feedback_label_message": "Message",
    "feedback_placeholder_message": "Write your feedback, suggestion, or the problem you found here...",
    "feedback_btn_send": "Send",
    "feedback_btn_sending": "Sending...",
    // Alerts
    "feedback_success": "Feedback sent successfully!",
    "feedback_error_send": "We couldn't send it right now. Please try again shortly or write to stray7team@gmail.com.",
    "feedback_not_configured": "Feedback sending hasn't been set up yet. Please write to stray7team@gmail.com.",
    "feedback_err_name": "Enter your name or nickname.",
    "feedback_err_email": "Enter a valid email.",
    "feedback_err_message": "Write your message."
  }
};
