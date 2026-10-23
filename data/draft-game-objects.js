//data:idols
/*const idols = [
  {
    "gen": "4",
    "type": "idol",
    "id": "aespakarina",
    "name": "Karina",
    "group": "aespa",
    "aniversario": "11-04-2000",
    "vocal": "B",
    "dance": "S",
    "rap": "B",
    "center": "A",
    "visual": "S",
    "especialidade": "Dance",
    "conceitos": [
      "Conceptual",
      "Girl Crush"
    ],
    "generos": [
      "EDM",
      "Experimental"
    ],
    "fortes": "Presença cênica, precisão e impacto em performances poderosas",
    "fracos": "Dificuldade em adaptar-se a conceitos leves ou cute"
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "aespagiselle",
    "name": "Giselle",
    "group": "aespa",
    "aniversario": "30-10-2000",
    "vocal": "C",
    "dance": "B",
    "rap": "A",
    "center": "C",
    "visual": "B",
    "especialidade": "Rap",
    "conceitos": [
      "Conceptual",
      "Girl Crush"
    ],
    "generos": [
      "EDM",
      "Experimental"
    ],
    "fortes": "Flow estável, versatilidade em rap e feature vocals",
    "fracos": "Projeção vocal limitada, dança menos técnica que as demais"
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "aespawinter",
    "name": "Winter",
    "group": "aespa",
    "aniversario": "01-01-2001",
    "vocal": "S",
    "dance": "B",
    "rap": "D",
    "center": "A",
    "visual": "A",
    "especialidade": "Vocal",
    "conceitos": [
      "Conceptual",
      "Girl Crush"
    ],
    "generos": [
      "EDM",
      "Experimental"
    ],
    "fortes": "Estabilidade vocal de elite, dicção clara, consistência ao vivo",
    "fracos": "Coreografias muito pesadas podem reduzir projeção vocal"
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "aespaningning",
    "name": "NingNing",
    "group": "aespa",
    "aniversario": "23-10-2002",
    "vocal": "S",
    "dance": "B",
    "rap": "D",
    "center": "C",
    "visual": "B",
    "especialidade": "Vocal",
    "conceitos": [
      "Conceptual",
      "Girl Crush"
    ],
    "generos": [
      "EDM",
      "Experimental"
    ],
    "fortes": "Alcance vocal excepcional, timbre único, técnica avançada",
    "fracos": "Presença de palco por vezes discreta, menos foco em dance"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "artmsjinsoul",
    "name": "JinSoul",
    "group": "ARTMS",
    "aniversario": "13-06-1997",
    "vocal": "B",
    "dance": "B",
    "rap": "B",
    "center": "B",
    "visual": "A",
    "especialidade": "Visual",
    "conceitos": [
      "Conceptual",
      "Performance"
    ],
    "generos": [
      "Experimental",
      "Synthpop"
    ],
    "fortes": "Rapper melódica com ótimo controle vocal, timbre distinto",
    "fracos": "Execução menos fluida em coreografias muito técnicas"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "artmshaseul",
    "name": "HaSeul",
    "group": "ARTMS",
    "aniversario": "18-08-1997",
    "vocal": "A",
    "dance": "B",
    "rap": "C",
    "center": "B",
    "visual": "A",
    "especialidade": "Vocal",
    "conceitos": [
      "Conceptual",
      "Dreamcore"
    ],
    "generos": [
      "Emotional",
      "Synthpop"
    ],
    "fortes": "Controle vocal limpo, excelente suporte respiratório",
    "fracos": "Expressividade corporal e dança mais contida"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "artmskimlip",
    "name": "Kim Lip",
    "group": "ARTMS",
    "aniversario": "10-02-1999",
    "vocal": "A",
    "dance": "S",
    "rap": "D",
    "center": "A",
    "visual": "B",
    "especialidade": "Dance",
    "conceitos": [
      "Conceptual",
      "Performance"
    ],
    "generos": [
      "Experimental",
      "Synthpop"
    ],
    "fortes": "Timbre expressivo, técnica vocal refinada, harmonia e emoção",
    "fracos": "Projeção vocal variável ao vivo em performances muito coreografadas"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "artmsheejin",
    "name": "HeeJin",
    "group": "ARTMS",
    "aniversario": "19-10-2000",
    "vocal": "A",
    "dance": "S",
    "rap": "C",
    "center": "S",
    "visual": "A",
    "especialidade": "All-Rounder",
    "conceitos": [
      "Conceptual",
      "Performance"
    ],
    "generos": [
      "Experimental",
      "Synthpop"
    ],
    "fortes": "All-rounder completa, força cênica, carisma e precisão coreográfica",
    "fracos": "Pode sobrecarregar-se em lineups longas por intensidade constante"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "artmschoerry",
    "name": "Choerry",
    "group": "ARTMS",
    "aniversario": "04-06-2001",
    "vocal": "B",
    "dance": "A",
    "rap": "D",
    "center": "A",
    "visual": "A",
    "especialidade": "Dance",
    "conceitos": [
      "Conceptual",
      "Performance"
    ],
    "generos": [
      "Experimental",
      "Synthpop"
    ],
    "fortes": "Energia cênica contagiante, versatilidade e presença natural",
    "fracos": "Técnica vocal limitada em notas graves"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "atheartmichi",
    "name": "Michi",
    "group": "AtHeart",
    "aniversario": "06-05-2007",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "C",
    "especialidade": "Dance",
    "conceitos": [
      "Performance",
      "Teen Crush"
    ],
    "generos": [
      "Emotional",
      "Synthpop"
    ],
    "fortes": "Execução de performance muito polida, controle corporal e presença de palco (destaque nas stages)",
    "fracos": "Em trechos vocais complexos pode perder estabilidade pela intensidade da dança"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "atheartarin",
    "name": "Arin",
    "group": "AtHeart",
    "aniversario": "01-07-2007",
    "vocal": "B",
    "dance": "S",
    "rap": "C",
    "center": "B",
    "visual": "B",
    "especialidade": "Dance",
    "conceitos": [
      "Performance",
      "Teen Crush"
    ],
    "generos": [
      "Emotional",
      "Synthpop"
    ],
    "fortes": "Flow e entrega rap consistente, presença carismática, boa versatilidade rítmica",
    "fracos": "Técnica vocal menos expressiva em notas longas, timbre médio"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "atheartkatelyn",
    "name": "Katelyn",
    "group": "AtHeart",
    "aniversario": "24-07-2007",
    "vocal": "B",
    "dance": "B",
    "rap": "C",
    "center": "B",
    "visual": "B",
    "especialidade": "Rap",
    "conceitos": [
      "Performance",
      "Teen Crush"
    ],
    "generos": [
      "Emotional",
      "Synthpop"
    ],
    "fortes": "Forte projeção vocal ao vivo, timbre marcante, rosto/visual com apelo alto (possível titular visual)",
    "fracos": "Menos foco em rap, movimentos muito técnicos podem reduzir consistência vocal"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "atheartbome",
    "name": "Bome",
    "group": "AtHeart",
    "aniversario": "26-11-2007",
    "vocal": "A",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "Vocal",
    "conceitos": [
      "Performance",
      "Teen Crush"
    ],
    "generos": [
      "Emotional",
      "Synthpop"
    ],
    "fortes": "Boa estabilidade vocal e controle em runs, interpretação musical sensível",
    "fracos": "Coreografias mais pesadas afetam ligeiramente a projeção"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "atheartseohyeon",
    "name": "Seohyeon",
    "group": "AtHeart",
    "aniversario": "12-09-2008",
    "vocal": "A",
    "dance": "A",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "Vocal",
    "conceitos": [
      "Performance",
      "Teen Crush"
    ],
    "generos": [
      "Emotional",
      "Synthpop"
    ],
    "fortes": "Excelente sincronização de grupo, bom suporte em harmonias e estabilidade em lives",
    "fracos": "Ainda em crescimento para solo vocal de destaque, presença solo moderada"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "atheartaurora",
    "name": "Aurora",
    "group": "AtHeart",
    "aniversario": "04-07-2009",
    "vocal": "A",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "C",
    "especialidade": "Vocal",
    "conceitos": [
      "Performance",
      "Teen Crush"
    ],
    "generos": [
      "Emotional",
      "Synthpop"
    ],
    "fortes": "Visual diferenciado e expressividade gestual, encaixa bem em passes atmosféricos",
    "fracos": "Projeção vocal e rap moderados, menos consistente em partes técnicas"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "atheartnahyun",
    "name": "Nahyun",
    "group": "AtHeart",
    "aniversario": "03-09-2009",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "A",
    "visual": "A",
    "especialidade": "Visual",
    "conceitos": [
      "Performance",
      "Teen Crush"
    ],
    "generos": [
      "Emotional",
      "Synthpop"
    ],
    "fortes": "Boa química em formações de grupo, consistente em linhas de apoio e adlibs",
    "fracos": "Não se destaca tecnicamente em vocal principal ou rap, presença visual média"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "babymonsterruka",
    "name": "Ruka",
    "group": "BABYMONSTER",
    "aniversario": "20-03-2002",
    "vocal": "B",
    "dance": "B",
    "rap": "S",
    "center": "B",
    "visual": "B",
    "especialidade": "Rap",
    "conceitos": [
      "Girl Crush",
      "Swag"
    ],
    "generos": [
      "Groove",
      "Hip-hop"
    ],
    "fortes": "Execução de dança de elite, presença forte no palco",
    "fracos": "Técnica vocal média em alta intensidade"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "babymonsterpharita",
    "name": "Pharita",
    "group": "BABYMONSTER",
    "aniversario": "26-08-2005",
    "vocal": "A",
    "dance": "C",
    "rap": "D",
    "center": "C",
    "visual": "B",
    "especialidade": "Vocal",
    "conceitos": [
      "Elegant",
      "Swag"
    ],
    "generos": [
      "Emotional",
      "Hip-hop"
    ],
    "fortes": "Vocal principal muito forte, domínio de inglês/tailandês",
    "fracos": "Rap e coreografia menos marcantes"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "babymonsterasa",
    "name": "Asa",
    "group": "BABYMONSTER",
    "aniversario": "17-04-2006",
    "vocal": "B",
    "dance": "B",
    "rap": "S",
    "center": "B",
    "visual": "S",
    "especialidade": "Rap",
    "conceitos": [
      "Girl Crush",
      "Swag"
    ],
    "generos": [
      "Groove",
      "Hip-hop"
    ],
    "fortes": "Flow limpo, rap de destaque, boa entrega",
    "fracos": "Vocal principal menos refinado"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "babymonsterahyeon",
    "name": "Ahyeon",
    "group": "BABYMONSTER",
    "aniversario": "11-04-2007",
    "vocal": "S",
    "dance": "B",
    "rap": "S",
    "center": "A",
    "visual": "A",
    "especialidade": "All-Rounder",
    "conceitos": [
      "Girl Crush",
      "Swag"
    ],
    "generos": [
      "Groove",
      "Hip-hop"
    ],
    "fortes": "Visual forte, vocal bom, versatilidade",
    "fracos": "Dança e rap menos consistentes"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "babymonsterrami",
    "name": "Rami",
    "group": "BABYMONSTER",
    "aniversario": "17-10-2007",
    "vocal": "S",
    "dance": "B",
    "rap": "B",
    "center": "B",
    "visual": "A",
    "especialidade": "Vocal",
    "conceitos": [
      "Girl Crush",
      "Swag"
    ],
    "generos": [
      "Emotional",
      "Hip-hop"
    ],
    "fortes": "Vocal estável, cresce no palco",
    "fracos": "Rap e dança com menor destaque"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "babymonsterrora",
    "name": "Rora",
    "group": "BABYMONSTER",
    "aniversario": "14-08-2008",
    "vocal": "A",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "A",
    "especialidade": "Visual",
    "conceitos": [
      "Elegant",
      "Swag"
    ],
    "generos": [
      "Groove",
      "Hip-hop"
    ],
    "fortes": "Boa presença corporal, dança sólida",
    "fracos": "Vocal principal falta refinamento"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "babymonsterchiquita",
    "name": "Chiquita",
    "group": "BABYMONSTER",
    "aniversario": "17-02-2009",
    "vocal": "B",
    "dance": "B",
    "rap": "A",
    "center": "B",
    "visual": "C",
    "especialidade": "Rap",
    "conceitos": [
      "Girl Crush",
      "Swag"
    ],
    "generos": [
      "Groove",
      "Hip-hop"
    ],
    "fortes": "Boa expressividade e carisma",
    "fracos": "Técnica vocal/rap iniciante, presença menor"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "fiftyfiftykeena",
    "name": "Keena",
    "group": "FIFTY FIFTY",
    "aniversario": "09-07-2002",
    "vocal": "B",
    "dance": "B",
    "rap": "B",
    "center": "B",
    "visual": "C",
    "especialidade": "Rap",
    "conceitos": [
      "Cute",
      "Dreamcore"
    ],
    "generos": [
      "Pop",
      "Synthpop"
    ],
    "fortes": "Rap strong, entrega internacional",
    "fracos": "Vocal principal menos desenvolvido"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "fiftyfiftychanellemoon",
    "name": "Chanelle Moon",
    "group": "FIFTY FIFTY",
    "aniversario": "14-06-2003",
    "vocal": "A",
    "dance": "A",
    "rap": "B",
    "center": "B",
    "visual": "C",
    "especialidade": "Vocal",
    "conceitos": [
      "Dreamcore",
      "Girl Crush"
    ],
    "generos": [
      "Emotional",
      "Synthpop"
    ],
    "fortes": "Vocais estáveis, presença de palco boa",
    "fracos": "Dança e rap menos destacados"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "fiftyfiftyyewon",
    "name": "Yewon",
    "group": "FIFTY FIFTY",
    "aniversario": "18-03-2005",
    "vocal": "B",
    "dance": "C",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "Vocal",
    "conceitos": [
      "Cute",
      "Dreamcore"
    ],
    "generos": [
      "Pop",
      "Synthpop"
    ],
    "fortes": "Dança técnica, boa execução",
    "fracos": "Vocais principais com menor amplitude"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "fiftyfiftyhana",
    "name": "Hana",
    "group": "FIFTY FIFTY",
    "aniversario": "05-09-2006",
    "vocal": "A",
    "dance": "B",
    "rap": "D",
    "center": "C",
    "visual": "B",
    "especialidade": "Vocal",
    "conceitos": [
      "Cute",
      "Dreamcore"
    ],
    "generos": [
      "Emotional",
      "Synthpop"
    ],
    "fortes": "Visual forte, presença marcante em palco",
    "fracos": "Técnica vocal moderada"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "fiftyfiftyathena",
    "name": "Athena",
    "group": "FIFTY FIFTY",
    "aniversario": "15-03-2007",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "A",
    "visual": "B",
    "especialidade": "Dance",
    "conceitos": [
      "Cute",
      "Dreamcore"
    ],
    "generos": [
      "Pop",
      "Synthpop"
    ],
    "fortes": "Desenvolvimento contínuo",
    "fracos": "Técnica vocal e rap ainda em crescimento"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "hearts2heartscarmen",
    "name": "Carmen",
    "group": "Hearts2Hearts",
    "aniversario": "28-03-2006",
    "vocal": "S",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "Vocal",
    "conceitos": [
      "Cute",
      "Dreamcore"
    ],
    "generos": [
      "Pop",
      "R&B"
    ],
    "fortes": "Técnica vocal boa, multinacional qualificação",
    "fracos": "Ainda em crescimento em dance e rap"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "hearts2heartsjiwoo",
    "name": "Jiwoo",
    "group": "Hearts2Hearts",
    "aniversario": "07-09-2006",
    "vocal": "B",
    "dance": "A",
    "rap": "C",
    "center": "B",
    "visual": "S",
    "especialidade": "Visual",
    "conceitos": [
      "Cute",
      "Dreamcore"
    ],
    "generos": [
      "Pop",
      "R&B"
    ],
    "fortes": "Vocais estáveis, presença forte, visual marcante",
    "fracos": "Rap/flow ainda limitado"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "hearts2heartsyuha",
    "name": "Yuha",
    "group": "Hearts2Hearts",
    "aniversario": "12-04-2007",
    "vocal": "A",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "A",
    "especialidade": "Vocal",
    "conceitos": [
      "Cute",
      "Dreamcore"
    ],
    "generos": [
      "Pop",
      "R&B"
    ],
    "fortes": "Dança de qualidade, vocais consistentes",
    "fracos": "Rap linha menos destacada"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "hearts2heartsstella",
    "name": "Stella",
    "group": "Hearts2Hearts",
    "aniversario": "18-06-2007",
    "vocal": "A",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "A",
    "especialidade": "Vocal",
    "conceitos": [
      "Cute",
      "Dreamcore"
    ],
    "generos": [
      "Pop",
      "R&B"
    ],
    "fortes": "Visual expressivo, boa performance em palco",
    "fracos": "Vocais principais e rap ainda em desenvolvimento"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "hearts2heartsjuun",
    "name": "Juun",
    "group": "Hearts2Hearts",
    "aniversario": "03-12-2008",
    "vocal": "B",
    "dance": "S",
    "rap": "B",
    "center": "B",
    "visual": "B",
    "especialidade": "Dance",
    "conceitos": [
      "Cute",
      "Performance"
    ],
    "generos": [
      "Groove",
      "Pop"
    ],
    "fortes": "Dança boa, presença juvenil",
    "fracos": "Técnica vocal/rap menos refinada"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "hearts2heartsana",
    "name": "A-na",
    "group": "Hearts2Hearts",
    "aniversario": "20-12-2008",
    "vocal": "B",
    "dance": "A",
    "rap": "B",
    "center": "S",
    "visual": "S",
    "especialidade": "Visual",
    "conceitos": [
      "Cute",
      "Dreamcore"
    ],
    "generos": [
      "Pop",
      "R&B"
    ],
    "fortes": "Presença de grupo estável",
    "fracos": "Pouco destaque em solo técnico"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "hearts2heartsian",
    "name": "Ian",
    "group": "Hearts2Hearts",
    "aniversario": "09-10-2009",
    "vocal": "B",
    "dance": "A",
    "rap": "D",
    "center": "S",
    "visual": "S",
    "especialidade": "Center",
    "conceitos": [
      "Cute",
      "Dreamcore"
    ],
    "generos": [
      "Pop",
      "R&B"
    ],
    "fortes": "Projeção para grupo futuro",
    "fracos": "Técnica ainda emergente em várias posições"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "hearts2heartsyeon",
    "name": "Ye-on",
    "group": "Hearts2Hearts",
    "aniversario": "19-04-2010",
    "vocal": "A",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "Vocal",
    "conceitos": [
      "Cute",
      "Dreamcore"
    ],
    "generos": [
      "Pop",
      "R&B"
    ],
    "fortes": "Potencial de crescimento",
    "fracos": "Trabalho técnico ainda em fase inicial"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "ifeyewonhwayeon",
    "name": "Won Hwayeon",
    "group": "ifeye",
    "aniversario": "24-06-2006",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "A",
    "especialidade": "Vocal",
    "conceitos": [
      "Cute",
      "Dreamcore"
    ],
    "generos": [
      "Groove",
      "Pop"
    ],
    "fortes": "Vocal promissor, timbre limpo",
    "fracos": "Dança e rap menos destacados"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "ifeyetaerin",
    "name": "Taerin",
    "group": "ifeye",
    "aniversario": "03-07-2006",
    "vocal": "B",
    "dance": "A",
    "rap": "D",
    "center": "C",
    "visual": "B",
    "especialidade": "Dance",
    "conceitos": [
      "Cute",
      "Dreamcore"
    ],
    "generos": [
      "Groove",
      "Pop"
    ],
    "fortes": "Dança muito boa, presença coreográfica forte",
    "fracos": "Técnica vocal principal mediana"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "ifeyerahee",
    "name": "Rahee",
    "group": "ifeye",
    "aniversario": "06-12-2007",
    "vocal": "C",
    "dance": "B",
    "rap": "B",
    "center": "B",
    "visual": "C",
    "especialidade": "Rap",
    "conceitos": [
      "Girl Crush",
      "Performance"
    ],
    "generos": [
      "EDM",
      "Groove"
    ],
    "fortes": "Versatilidade e suporte estável",
    "fracos": "Especialização técnica ainda em crescimento"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "ifeyekasia",
    "name": "Kasia",
    "group": "ifeye",
    "aniversario": "15-02-2008",
    "vocal": "C",
    "dance": "A",
    "rap": "B",
    "center": "A",
    "visual": "C",
    "especialidade": "Center",
    "conceitos": [
      "Dreamcore",
      "Performance"
    ],
    "generos": [
      "EDM",
      "Groove"
    ],
    "fortes": "Rap sólida, boa presença de palco",
    "fracos": "Técnica vocal principal ainda em evolução"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "ifeyemeu",
    "name": "Meu",
    "group": "ifeye",
    "aniversario": "09-06-2008",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "Vocal",
    "conceitos": [
      "Dreamcore",
      "Girl Crush"
    ],
    "generos": [
      "EDM",
      "Groove"
    ],
    "fortes": "Boa dança, presença de palco agradável",
    "fracos": "Alcance vocal mais limitado"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "ifeyesasha",
    "name": "Sasha",
    "group": "ifeye",
    "aniversario": "20-05-2009",
    "vocal": "A",
    "dance": "A",
    "rap": "B",
    "center": "A",
    "visual": "B",
    "especialidade": "All-Rounder",
    "conceitos": [
      "Dreamcore",
      "Performance"
    ],
    "generos": [
      "EDM",
      "Groove"
    ],
    "fortes": "Visual forte, expressividade para câmera",
    "fracos": "Técnica vocal e rap iniciante"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "illityunah",
    "name": "Yunah",
    "group": "ILLIT",
    "aniversario": "15-01-2004",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "Dance",
    "conceitos": [
      "Dreamcore",
      "Teen Crush"
    ],
    "generos": [
      "Pop",
      "R&B"
    ],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "illitminju",
    "name": "Minju",
    "group": "ILLIT",
    "aniversario": "11-05-2004",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "A",
    "especialidade": "Vocal",
    "conceitos": [
      "Cute",
      "Dreamcore"
    ],
    "generos": [
      "Pop",
      "R&B"
    ],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "illitmoka",
    "name": "Moka",
    "group": "ILLIT",
    "aniversario": "08-10-2004",
    "vocal": "C",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "A",
    "especialidade": "Dance",
    "conceitos": [
      "Cute",
      "Dreamcore"
    ],
    "generos": [
      "Pop",
      "R&B"
    ],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "illitwonhee",
    "name": "Wonhee",
    "group": "ILLIT",
    "aniversario": "26-06-2007",
    "vocal": "A",
    "dance": "B",
    "rap": "D",
    "center": "A",
    "visual": "A",
    "especialidade": "Vocal",
    "conceitos": [
      "Cute",
      "Dreamcore"
    ],
    "generos": [
      "Pop",
      "R&B"
    ],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "illitiroha",
    "name": "Iroha",
    "group": "ILLIT",
    "aniversario": "04-02-2008",
    "vocal": "B",
    "dance": "S",
    "rap": "D",
    "center": "B",
    "visual": "A",
    "especialidade": "Dance",
    "conceitos": [
      "Cute",
      "Dreamcore"
    ],
    "generos": [
      "Groove",
      "Pop"
    ],
    "fortes": "Dança de qualidade, vocal em constante melhora, versátil",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "ivegaeul",
    "name": "Gaeul",
    "group": "IVE",
    "aniversario": "24-09-2002",
    "vocal": "C",
    "dance": "B",
    "rap": "B",
    "center": "B",
    "visual": "A",
    "especialidade": "Dance",
    "conceitos": [
      "Elegant",
      "Performance"
    ],
    "generos": [
      "EDM",
      "Groove"
    ],
    "fortes": "Flow limpo e preciso, boa leitura rítmica, suporte vocal consistente",
    "fracos": "Falta destaque visual nas performances em grupo"
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "iveanyujin",
    "name": "An Yujin",
    "group": "IVE",
    "aniversario": "01-09-2003",
    "vocal": "S",
    "dance": "A",
    "rap": "D",
    "center": "A",
    "visual": "S",
    "especialidade": "Vocal",
    "conceitos": [
      "Elegant",
      "Performance"
    ],
    "generos": [
      "EDM",
      "Groove"
    ],
    "fortes": "Liderança e carisma natural, estabilidade vocal e energia de palco",
    "fracos": "Flow de rap limitado, estilo vocal pouco versátil"
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "iverei",
    "name": "Rei",
    "group": "IVE",
    "aniversario": "03-02-2004",
    "vocal": "C",
    "dance": "B",
    "rap": "B",
    "center": "B",
    "visual": "A",
    "especialidade": "Rap",
    "conceitos": [
      "Elegant",
      "Performance"
    ],
    "generos": [
      "EDM",
      "Groove"
    ],
    "fortes": "Timbre único, flow melódico e distintivo, composição própria",
    "fracos": "Resistência limitada em lives longas, coreografia precisa porém contida"
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "ivejangwonyoung",
    "name": "Jang Wonyoung",
    "group": "IVE",
    "aniversario": "31-08-2004",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "S",
    "visual": "S",
    "especialidade": "Visual",
    "conceitos": [
      "Elegant",
      "Performance"
    ],
    "generos": [
      "EDM",
      "Groove"
    ],
    "fortes": "Center carismática, postura e expressão excepcionais",
    "fracos": "Falta potência vocal, dificuldade em conceitos mais maduros"
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "iveliz",
    "name": "Liz",
    "group": "IVE",
    "aniversario": "21-11-2004",
    "vocal": "S",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "A",
    "especialidade": "Vocal",
    "conceitos": [
      "Elegant",
      "Performance"
    ],
    "generos": [
      "Emotional",
      "Groove"
    ],
    "fortes": "Controle vocal notável, alcance médio-alto excelente",
    "fracos": "Energia performática irregular, expressão limitada em girlcrush"
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "iveleeseo",
    "name": "Leeseo",
    "group": "IVE",
    "aniversario": "21-02-2007",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "A",
    "especialidade": "Vocal",
    "conceitos": [
      "Elegant",
      "Performance"
    ],
    "generos": [
      "EDM",
      "Groove"
    ],
    "fortes": "Boa presença, melhora técnica contínua, brilho em refrões",
    "fracos": "Falta de consistência vocal em notas altas, menor estabilidade em palco"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "iznamai",
    "name": "Mai",
    "group": "izna",
    "aniversario": "28-10-2004",
    "vocal": "B",
    "dance": "A",
    "rap": "D",
    "center": "B",
    "visual": "A",
    "especialidade": "Visual",
    "conceitos": [
      "Elegant",
      "Performance"
    ],
    "generos": [
      "Groove",
      "Synthpop"
    ],
    "fortes": "Vocal estável para rookie, visual marcante",
    "fracos": "Dança e rap ainda em fase de evolução"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "iznabangjeemin",
    "name": "Bang Jeemin",
    "group": "izna",
    "aniversario": "08-05-2005",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "S",
    "visual": "A",
    "especialidade": "Center",
    "conceitos": [
      "Elegant",
      "Performance"
    ],
    "generos": [
      "Groove",
      "Synthpop"
    ],
    "fortes": "Dança de nível elevado para rookie, presença de palco boa",
    "fracos": "Técnica vocal ainda menos refinada"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "iznayoonjiyoon",
    "name": "Yoon Jiyoon (former)",
    "group": "izna",
    "aniversario": "14-07-2005",
    "vocal": "S",
    "dance": "C",
    "rap": "D",
    "center": "C",
    "visual": "B",
    "especialidade": "Vocal",
    "conceitos": [
      "Elegant",
      "Performance"
    ],
    "generos": [
      "Emotional",
      "Synthpop"
    ],
    "fortes": "Forte background de survival show, presença cênica, bons momentos em stages iniciais",
    "fracos": "Saiu do grupo (reportado em agosto/2025), marca presença histórica mas não é mais ativa na formação atual"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "iznakoko",
    "name": "Koko",
    "group": "izna",
    "aniversario": "14-11-2006",
    "vocal": "B",
    "dance": "S",
    "rap": "A",
    "center": "B",
    "visual": "A",
    "especialidade": "Dance",
    "conceitos": [
      "Elegant",
      "Performance"
    ],
    "generos": [
      "Groove",
      "Synthpop"
    ],
    "fortes": "Rap de destaque, entrega lírica clara",
    "fracos": "Técnica vocal principal e dança ainda em desenvolvimento"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "iznaryusarang",
    "name": "Ryu Sarang",
    "group": "izna",
    "aniversario": "18-04-2007",
    "vocal": "B",
    "dance": "A",
    "rap": "B",
    "center": "B",
    "visual": "B",
    "especialidade": "Dance",
    "conceitos": [
      "Elegant",
      "Performance"
    ],
    "generos": [
      "Groove",
      "Synthpop"
    ],
    "fortes": "Projeção vocal boa para rookie, dance de suporte competente",
    "fracos": "Rap menos desenvolvido"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "iznachoijungeun",
    "name": "Choi Jungeun",
    "group": "izna",
    "aniversario": "04-08-2007",
    "vocal": "A",
    "dance": "A",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "Vocal",
    "conceitos": [
      "Elegant",
      "Performance"
    ],
    "generos": [
      "Emotional",
      "Groove"
    ],
    "fortes": "Visual forte, presença de câmera",
    "fracos": "Técnica vocal principal e rap ainda iniciante"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "iznajeongsaebi",
    "name": "Jeong Saebi",
    "group": "izna",
    "aniversario": "22-01-2008",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "Visual",
    "conceitos": [
      "Elegant",
      "Performance"
    ],
    "generos": [
      "Groove",
      "Synthpop"
    ],
    "fortes": "Potencial de crescimento, presença de grupo crescente",
    "fracos": "Técnica geral ainda em fase inicial"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "kiiikiiileesol",
    "name": "Leesol",
    "group": "KiiiKiii",
    "aniversario": "18-09-2005",
    "vocal": "B",
    "dance": "B",
    "rap": "A",
    "center": "B",
    "visual": "A",
    "especialidade": "Rap",
    "conceitos": [
      "Dreamcore",
      "Teen Crush"
    ],
    "generos": [
      "EDM",
      "Groove"
    ],
    "fortes": "Dança de nível elevado, presença cênica forte",
    "fracos": "Técnica vocal principal menos refinada"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "kiiikiiisui",
    "name": "Sui",
    "group": "KiiiKiii",
    "aniversario": "10-04-2006",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "A",
    "especialidade": "Vocal",
    "conceitos": [
      "Dreamcore",
      "Teen Crush"
    ],
    "generos": [
      "EDM",
      "Groove"
    ],
    "fortes": "Visual impactante, vocais razoáveis para rookie",
    "fracos": "Menos destaque em rap ou dança técnica"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "kiiikiiijiyu",
    "name": "Jiyu",
    "group": "KiiiKiii",
    "aniversario": "14-05-2006",
    "vocal": "B",
    "dance": "B",
    "rap": "B",
    "center": "A",
    "visual": "B",
    "especialidade": "Vocal",
    "conceitos": [
      "Dreamcore",
      "Teen Crush"
    ],
    "generos": [
      "EDM",
      "Groove"
    ],
    "fortes": "Liderança e estabilidade, bom equilíbrio nas três áreas principais",
    "fracos": "Técnica de rap mais fraca, ainda em construção de presença global"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "kiiikiiihaum",
    "name": "Haum",
    "group": "KiiiKiii",
    "aniversario": "14-11-2006",
    "vocal": "B",
    "dance": "A",
    "rap": "D",
    "center": "B",
    "visual": "A",
    "especialidade": "Dance",
    "conceitos": [
      "Dreamcore",
      "Teen Crush"
    ],
    "generos": [
      "EDM",
      "Groove"
    ],
    "fortes": "Boa execução de coreografia, presença estável",
    "fracos": "Técnica vocal e rap ainda em desenvolvimento"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "kiiikiiikya",
    "name": "Kya",
    "group": "KiiiKiii",
    "aniversario": "18-12-2010",
    "vocal": "B",
    "dance": "B",
    "rap": "A",
    "center": "B",
    "visual": "A",
    "especialidade": "Rap",
    "conceitos": [
      "Dreamcore",
      "Teen Crush"
    ],
    "generos": [
      "EDM",
      "Groove"
    ],
    "fortes": "Rap de destaque para rookie, flow sólido",
    "fracos": "Vocais principais e presença de centro menos evidentes"
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "lesserafimsakura",
    "name": "Sakura",
    "group": "LE SSERAFIM",
    "aniversario": "19-03-1998",
    "vocal": "C",
    "dance": "C",
    "rap": "D",
    "center": "B",
    "visual": "A",
    "especialidade": "Visual",
    "conceitos": [
      "Girl Crush",
      "Performance"
    ],
    "generos": [
      "EDM",
      "Groove"
    ],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "lesserafimkimchaewon",
    "name": "Kim Chaewon",
    "group": "LE SSERAFIM",
    "aniversario": "01-08-2000",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "A",
    "especialidade": "Vocal",
    "conceitos": [
      "Girl Crush",
      "Performance"
    ],
    "generos": [
      "EDM",
      "Groove"
    ],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "lesserafimhuhyunjin",
    "name": "Huh Yunjin",
    "group": "LE SSERAFIM",
    "aniversario": "08-10-2001",
    "vocal": "A",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "A",
    "especialidade": "Vocal",
    "conceitos": [
      "Girl Crush",
      "Performance"
    ],
    "generos": [
      "Emotional",
      "Groove"
    ],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "lesserafimkazuha",
    "name": "Kazuha",
    "group": "LE SSERAFIM",
    "aniversario": "09-08-2003",
    "vocal": "C",
    "dance": "A",
    "rap": "C",
    "center": "B",
    "visual": "A",
    "especialidade": "Dance",
    "conceitos": [
      "Girl Crush",
      "Performance"
    ],
    "generos": [
      "EDM",
      "Groove"
    ],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "lesserafimhongeunchae",
    "name": "Hong Eunchae",
    "group": "LE SSERAFIM",
    "aniversario": "10-11-2006",
    "vocal": "C",
    "dance": "B",
    "rap": "C",
    "center": "B",
    "visual": "A",
    "especialidade": "Dance",
    "conceitos": [
      "Girl Crush",
      "Performance"
    ],
    "generos": [
      "EDM",
      "Groove"
    ],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "meovvsooin",
    "name": "Sooin",
    "group": "MEOVV",
    "aniversario": "12-04-2005",
    "vocal": "B",
    "dance": "A",
    "rap": "D",
    "center": "A",
    "visual": "B",
    "especialidade": "Dance",
    "conceitos": [
      "Elegant",
      "Swag"
    ],
    "generos": [
      "EDM",
      "Groove"
    ],
    "fortes": "Forte nas duas áreas principais, presença de palco",
    "fracos": "Rap linha menos desenvolvida"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "meovvgawon",
    "name": "Gawon",
    "group": "MEOVV",
    "aniversario": "27-04-2005",
    "vocal": "A",
    "dance": "B",
    "rap": "S",
    "center": "B",
    "visual": "A",
    "especialidade": "Vocal",
    "conceitos": [
      "Elegant",
      "Swag"
    ],
    "generos": [
      "EDM",
      "Groove"
    ],
    "fortes": "Visual marcante, desempenho vocal sólido",
    "fracos": "Rap/dança de apoio menos destacado"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "meovvanna",
    "name": "Anna",
    "group": "MEOVV",
    "aniversario": "17-11-2005",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "S",
    "especialidade": "Visual",
    "conceitos": [
      "Elegant",
      "Swag"
    ],
    "generos": [
      "EDM",
      "Groove"
    ],
    "fortes": "Visual forte, presença internacional",
    "fracos": "Técnica vocal principal ainda em refinamento"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "meovvnarin",
    "name": "Narin",
    "group": "MEOVV",
    "aniversario": "15-08-2007",
    "vocal": "A",
    "dance": "B",
    "rap": "S",
    "center": "B",
    "visual": "B",
    "especialidade": "Rap",
    "conceitos": [
      "Elegant",
      "Swag"
    ],
    "generos": [
      "EDM",
      "Groove"
    ],
    "fortes": "Rap de destaque, fluxo bom",
    "fracos": "Técnica vocal principal moderada"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "meovvella",
    "name": "Ella",
    "group": "MEOVV",
    "aniversario": "01-12-2008",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "S",
    "visual": "S",
    "especialidade": "Center",
    "conceitos": [
      "Elegant",
      "Swag"
    ],
    "generos": [
      "EDM",
      "Groove"
    ],
    "fortes": "Visual altíssimo nível, presença para câmera",
    "fracos": "Técnica vocal/rap/dança ainda em fase inicial"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "newjeansminji",
    "name": "Minji",
    "group": "NewJeans",
    "aniversario": "07-05-2004",
    "vocal": "C",
    "dance": "B",
    "rap": "C",
    "center": "B",
    "visual": "A",
    "especialidade": "Visual",
    "conceitos": [
      "Dreamcore",
      "Teen Crush"
    ],
    "generos": [
      "Groove",
      "R&B"
    ],
    "fortes": "Boa versatilidade, presença forte no palco",
    "fracos": "Técnica de rap menos demonstrada"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "newjeanshanni",
    "name": "Hanni",
    "group": "NewJeans",
    "aniversario": "06-10-2004",
    "vocal": "B",
    "dance": "A",
    "rap": "C",
    "center": "A",
    "visual": "B",
    "especialidade": "Center",
    "conceitos": [
      "Dreamcore",
      "Teen Crush"
    ],
    "generos": [
      "Groove",
      "R&B"
    ],
    "fortes": "Voz clara, alcance sólido, apelo multicultural",
    "fracos": "Rap/dança técnica menor"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "newjeansdanielle",
    "name": "Danielle",
    "group": "NewJeans",
    "aniversario": "11-04-2005",
    "vocal": "A",
    "dance": "B",
    "rap": "C",
    "center": "B",
    "visual": "B",
    "especialidade": "Vocal",
    "conceitos": [
      "Dreamcore",
      "Teen Crush"
    ],
    "generos": [
      "Groove",
      "R&B"
    ],
    "fortes": "Visual muito forte, presença de palco",
    "fracos": "Técnica de dança/rap menos evidente"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "newjeanshaerin",
    "name": "Haerin",
    "group": "NewJeans",
    "aniversario": "15-05-2006",
    "vocal": "B",
    "dance": "A",
    "rap": "C",
    "center": "B",
    "visual": "B",
    "especialidade": "Dance",
    "conceitos": [
      "Dreamcore",
      "Teen Crush"
    ],
    "generos": [
      "Groove",
      "R&B"
    ],
    "fortes": "Coreografia fluida, presença natural",
    "fracos": "Técnica vocal principal menos refinada"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "newjeanshyein",
    "name": "Hyein",
    "group": "NewJeans",
    "aniversario": "21-04-2008",
    "vocal": "B",
    "dance": "B",
    "rap": "C",
    "center": "B",
    "visual": "B",
    "especialidade": "Vocal",
    "conceitos": [
      "Dreamcore",
      "Teen Crush"
    ],
    "generos": [
      "Groove",
      "R&B"
    ],
    "fortes": "Potencial visível, boa presença de grupo",
    "fracos": "Técnica vocal/rap/dança ainda iniciando"
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "nmixxlily",
    "name": "Lily",
    "group": "NMIXX",
    "aniversario": "17-10-2002",
    "vocal": "S",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "C",
    "especialidade": "Vocal",
    "conceitos": [
      "Girl Crush",
      "Performance"
    ],
    "generos": [
      "Emotional",
      "Experimental"
    ],
    "fortes": "Excelente alcance, experiência internacional",
    "fracos": "Rap quase ausente, dança mediana"
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "nmixxhaewon",
    "name": "Haewon",
    "group": "NMIXX",
    "aniversario": "25-02-2003",
    "vocal": "A",
    "dance": "B",
    "rap": "C",
    "center": "A",
    "visual": "A",
    "especialidade": "Vocal",
    "conceitos": [
      "Girl Crush",
      "Performance"
    ],
    "generos": [
      "Emotional",
      "Experimental"
    ],
    "fortes": "Vocal refinado para a posição, presença de palco forte",
    "fracos": "Rap/dança com menor foco técnico"
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "nmixxsullyoon",
    "name": "Sullyoon",
    "group": "NMIXX",
    "aniversario": "26-01-2004",
    "vocal": "A",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "S",
    "especialidade": "Visual",
    "conceitos": [
      "Girl Crush",
      "Performance"
    ],
    "generos": [
      "Experimental",
      "Groove"
    ],
    "fortes": "Dança excelente, boa presença no palco",
    "fracos": "Técnica vocal de topo ainda em pequena margem"
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "nmixxbae",
    "name": "Bae",
    "group": "NMIXX",
    "aniversario": "28-12-2004",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "C",
    "visual": "C",
    "especialidade": "Vocal",
    "conceitos": [
      "Girl Crush",
      "Performance"
    ],
    "generos": [
      "Experimental",
      "Groove"
    ],
    "fortes": "Visual forte, estabilidade vocal",
    "fracos": "Dança/rap menos destacadas"
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "nmixxjiwoo",
    "name": "Jiwoo",
    "group": "NMIXX",
    "aniversario": "13-04-2005",
    "vocal": "B",
    "dance": "B",
    "rap": "A",
    "center": "C",
    "visual": "B",
    "especialidade": "Rap",
    "conceitos": [
      "Girl Crush",
      "Performance"
    ],
    "generos": [
      "Experimental",
      "Groove"
    ],
    "fortes": "Rap de destaque, entrega articula bem",
    "fracos": "Técnica vocal principal menos refinada"
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "nmixxkyujin",
    "name": "Kyujin",
    "group": "NMIXX",
    "aniversario": "26-05-2006",
    "vocal": "B",
    "dance": "A",
    "rap": "A",
    "center": "S",
    "visual": "B",
    "especialidade": "All-Rounder",
    "conceitos": [
      "Girl Crush",
      "Performance"
    ],
    "generos": [
      "Experimental",
      "Groove"
    ],
    "fortes": "Dança de nível competitivo, presença consistente",
    "fracos": "Vocal/rap menos destacadas"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "ourbirthdaykukchorok",
    "name": "Kuk Chorok",
    "group": "OURBIRTHDAY",
    "aniversario": "28-07-2005",
    "vocal": "B",
    "dance": "B",
    "rap": "B",
    "center": "B",
    "visual": "B",
    "especialidade": "Rap",
    "conceitos": [
      "Performance",
      "Teen Crush"
    ],
    "generos": [
      "Groove",
      "Hip-Hop"
    ],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "ourbirthdayshinhyewon",
    "name": "Shin Hyewon",
    "group": "OURBIRTHDAY",
    "aniversario": "05-10-2005",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "Vocal",
    "conceitos": [
      "Performance",
      "Teen Crush"
    ],
    "generos": [
      "Groove",
      "Hip-Hop"
    ],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "ourbirthdaychohyejin",
    "name": "Cho Hyejin",
    "group": "OURBIRTHDAY",
    "aniversario": "24-10-2007",
    "vocal": "B",
    "dance": "A",
    "rap": "D",
    "center": "A",
    "visual": "B",
    "especialidade": "Dance",
    "conceitos": [
      "Performance",
      "Teen Crush"
    ],
    "generos": [
      "Groove",
      "Hip-Hop"
    ],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "ourbirthdayu",
    "name": "U",
    "group": "OURBIRTHDAY",
    "aniversario": "21-08-2008",
    "vocal": "B",
    "dance": "A",
    "rap": "B",
    "center": "B",
    "visual": "B",
    "especialidade": "Rap",
    "conceitos": [
      "Performance",
      "Teen Crush"
    ],
    "generos": [
      "Groove",
      "Hip-Hop"
    ],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "ourbirthdaybaby",
    "name": "Baby",
    "group": "OURBIRTHDAY",
    "aniversario": "10-02-2009",
    "vocal": "B",
    "dance": "A",
    "rap": "C",
    "center": "B",
    "visual": "B",
    "especialidade": "Dance",
    "conceitos": [
      "Performance",
      "Teen Crush"
    ],
    "generos": [
      "Groove",
      "Hip-Hop"
    ],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "ourbirthdayachiraya",
    "name": "Achiraya",
    "group": "OURBIRTHDAY",
    "aniversario": "18-08-2009",
    "vocal": "B",
    "dance": "B",
    "rap": "C",
    "center": "B",
    "visual": "B",
    "especialidade": "Vocal",
    "conceitos": [
      "Performance",
      "Teen Crush"
    ],
    "generos": [
      "Groove",
      "Hip-Hop"
    ],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "ourbirthdaykilala",
    "name": "Kilala",
    "group": "OURBIRTHDAY",
    "aniversario": "17-12-2010",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "Vocal",
    "conceitos": [
      "Performance",
      "Teen Crush"
    ],
    "generos": [
      "Groove",
      "Hip-Hop"
    ],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "rescenewoni",
    "name": "Woni",
    "group": "RESCENE",
    "aniversario": "25-05-2004",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "A",
    "visual": "S",
    "especialidade": "Center",
    "conceitos": [
      "Dreamcore",
      "Teen Crush"
    ],
    "generos": [
      "Pop",
      "Synthpop"
    ],
    "fortes": "Boa dança, presença de palco forte",
    "fracos": "Técnica vocal principal ainda em crescimento"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "resceneliv",
    "name": "Liv",
    "group": "RESCENE",
    "aniversario": "11-10-2006",
    "vocal": "A",
    "dance": "C",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "Vocal",
    "conceitos": [
      "Dreamcore",
      "Teen Crush"
    ],
    "generos": [
      "Pop",
      "Synthpop"
    ],
    "fortes": "Flow de rap promissor, presença única",
    "fracos": "Vocais principais menos evidentes"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "resceneminami",
    "name": "Minami",
    "group": "RESCENE",
    "aniversario": "29-11-2006",
    "vocal": "A",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "A",
    "especialidade": "Vocal",
    "conceitos": [
      "Dreamcore",
      "Teen Crush"
    ],
    "generos": [
      "Pop",
      "Synthpop"
    ],
    "fortes": "Vocal refinado para o período de estreia",
    "fracos": "Rap e dança com menos destaque inicial"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "rescenemay",
    "name": "May",
    "group": "RESCENE",
    "aniversario": "19-08-2008",
    "vocal": "B",
    "dance": "C",
    "rap": "D",
    "center": "C",
    "visual": "B",
    "especialidade": "Visual",
    "conceitos": [
      "Dreamcore",
      "Teen Crush"
    ],
    "generos": [
      "Pop",
      "Synthpop"
    ],
    "fortes": "Visual forte, estilo distinto",
    "fracos": "Técnica vocal/rap/dança ainda em fases iniciais"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "rescenezena",
    "name": "Zena",
    "group": "RESCENE",
    "aniversario": "27-11-2008",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "A",
    "especialidade": "Visual",
    "conceitos": [
      "Dreamcore",
      "Teen Crush"
    ],
    "generos": [
      "Pop",
      "Synthpop"
    ],
    "fortes": "Dança acima da média para rookie",
    "fracos": "Técnica vocal/rap menos refinada"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "saymynamehitomi",
    "name": "Hitomi",
    "group": "SAY MY NAME",
    "aniversario": "06-10-2001",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "Dance",
    "conceitos": [
      "Cute",
      "Teen Crush"
    ],
    "generos": [
      "Groove",
      "Pop"
    ],
    "fortes": "Visual forte e presença global, boas funções vocais",
    "fracos": "Técnica de rap e dança de destaque ainda em construção"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "saymynameshuie",
    "name": "Shuie",
    "group": "SAY MY NAME",
    "aniversario": "06-06-2004",
    "vocal": "C",
    "dance": "C",
    "rap": "A",
    "center": "B",
    "visual": "B",
    "especialidade": "Rap",
    "conceitos": [
      "Cute",
      "Teen Crush"
    ],
    "generos": [
      "Groove",
      "Pop"
    ],
    "fortes": "Boa dança, melhoria visível",
    "fracos": "Técnica vocal principal ainda em crescimento"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "saymynamemei",
    "name": "Mei",
    "group": "SAY MY NAME",
    "aniversario": "27-09-2005",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "A",
    "visual": "B",
    "especialidade": "Dance",
    "conceitos": [
      "Cute",
      "Teen Crush"
    ],
    "generos": [
      "Groove",
      "Pop"
    ],
    "fortes": "Vocais consistentes, bom desempenho de estreia",
    "fracos": "Dança e rap menos exploradas"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "saymynamekanny",
    "name": "Kanny",
    "group": "SAY MY NAME",
    "aniversario": "26-12-2005",
    "vocal": "B",
    "dance": "B",
    "rap": "B",
    "center": "B",
    "visual": "B",
    "especialidade": "Rap",
    "conceitos": [
      "Cute",
      "Teen Crush"
    ],
    "generos": [
      "Groove",
      "Pop"
    ],
    "fortes": "Dança de nível elevado para rookie",
    "fracos": "Técnica vocal principal ainda em refinamento"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "saymynamesoha",
    "name": "Soha",
    "group": "SAY MY NAME",
    "aniversario": "26-07-2006",
    "vocal": "A",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "A",
    "especialidade": "Vocal",
    "conceitos": [
      "Cute",
      "Teen Crush"
    ],
    "generos": [
      "Groove",
      "Pop"
    ],
    "fortes": "Rap entrega boa para rookie",
    "fracos": "Técnica vocal principal limitada"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "saymynamedohee",
    "name": "Dohee",
    "group": "SAY MY NAME",
    "aniversario": "09-12-2006",
    "vocal": "A",
    "dance": "B",
    "rap": "D",
    "center": "S",
    "visual": "A",
    "especialidade": "Center",
    "conceitos": [
      "Cute",
      "Teen Crush"
    ],
    "generos": [
      "Groove",
      "Pop"
    ],
    "fortes": "Visual forte, presença de grupo",
    "fracos": "Técnica vocal/rap/dança ainda emergente"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "saymynamejunhwi",
    "name": "Junhwi",
    "group": "SAY MY NAME",
    "aniversario": "11-06-2007",
    "vocal": "B",
    "dance": "B",
    "rap": "C",
    "center": "C",
    "visual": "A",
    "especialidade": "Visual",
    "conceitos": [
      "Cute",
      "Teen Crush"
    ],
    "generos": [
      "Groove",
      "Pop"
    ],
    "fortes": "Potencial visível",
    "fracos": "Técnicas principais menos maduras"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "saymynameseungjoo",
    "name": "Seungjoo",
    "group": "SAY MY NAME",
    "aniversario": "24-09-2010",
    "vocal": "B",
    "dance": "C",
    "rap": "D",
    "center": "C",
    "visual": "B",
    "especialidade": "Vocal",
    "conceitos": [
      "Cute",
      "Teen Crush"
    ],
    "generos": [
      "Groove",
      "Pop"
    ],
    "fortes": "Potencial e presença de grupo",
    "fracos": "Técnica vocal/rap/dança iniciante"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "triplesyooyeon",
    "name": "Yooyeon",
    "group": "tripleS",
    "aniversario": "09-02-2001",
    "vocal": "B",
    "dance": "B",
    "rap": "C",
    "center": "S",
    "visual": "S",
    "especialidade": "Center",
    "conceitos": [
      "Conceptual",
      "Performance"
    ],
    "generos": [
      "Pop",
      "Synthpop"
    ],
    "fortes": "Visual line forte, estabilidade vocal segura",
    "fracos": "Falta dinamismo nas coreografias"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "triplesmayu",
    "name": "Mayu",
    "group": "tripleS",
    "aniversario": "12-05-2002",
    "vocal": "A",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "Vocal",
    "conceitos": [
      "Conceptual",
      "Performance"
    ],
    "generos": [
      "Pop",
      "Synthpop"
    ],
    "fortes": "Leitura rítmica segura, contribui bem a harmonias",
    "fracos": "Projeção e alcance ainda moderados nas stages"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "triplesxinyu",
    "name": "Xinyu",
    "group": "tripleS",
    "aniversario": "25-05-2002",
    "vocal": "C",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "S",
    "especialidade": "Visual",
    "conceitos": [
      "Conceptual",
      "Performance"
    ],
    "generos": [
      "Pop",
      "Synthpop"
    ],
    "fortes": "Grande impacto visual e estabilidade vocal nas partes atribuídas",
    "fracos": "Movimentos coreográficos menos agressivos, projeção variável"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "triplesnakyoung",
    "name": "Nakyoung",
    "group": "tripleS",
    "aniversario": "13-10-2002",
    "vocal": "B",
    "dance": "A",
    "rap": "B",
    "center": "A",
    "visual": "B",
    "especialidade": "All-Rounder",
    "conceitos": [
      "Conceptual",
      "Performance"
    ],
    "generos": [
      "Hip-Hop",
      "Synthpop"
    ],
    "fortes": "Afinação segura, entrega consistente nas bridges, boa presença em câmeras",
    "fracos": "Pouca explosão nos clímaxes, presença de center limitada"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "triplessohyun",
    "name": "Sohyun",
    "group": "tripleS",
    "aniversario": "13-10-2002",
    "vocal": "B",
    "dance": "A",
    "rap": "B",
    "center": "A",
    "visual": "A",
    "especialidade": "All-Rounder",
    "conceitos": [
      "Conceptual",
      "Performance"
    ],
    "generos": [
      "Groove",
      "Synthpop"
    ],
    "fortes": "Excelente sincronização e limpeza em group-dance, confiável na execução",
    "fracos": "Voz de apoio, poucas linhas solo para destacar"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "triplesdahyun",
    "name": "Dahyun",
    "group": "tripleS",
    "aniversario": "08-01-2003",
    "vocal": "S",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "Vocal",
    "conceitos": [
      "Conceptual",
      "Performance"
    ],
    "generos": [
      "Emotional",
      "Synthpop"
    ],
    "fortes": "Entrega emotiva e afinação exemplar nas lives, ótimo controle dinâmico",
    "fracos": "Dança deliberadamente contida pelo concept, menor exposição de solo"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "triplesnien",
    "name": "Nien",
    "group": "tripleS",
    "aniversario": "02-06-2003",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "C",
    "visual": "A",
    "especialidade": "Dance",
    "conceitos": [
      "Conceptual",
      "Performance"
    ],
    "generos": [
      "Hip-Hop",
      "Synthpop"
    ],
    "fortes": "Melhora perceptível em projeção e estabilidade, performa bem em harmonias",
    "fracos": "Movimentos coreográficos às vezes mais robustos que fluidos"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "triplesseoyeon",
    "name": "Seoyeon",
    "group": "tripleS",
    "aniversario": "06-08-2003",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "S",
    "visual": "A",
    "especialidade": "Center",
    "conceitos": [
      "Conceptual",
      "Performance"
    ],
    "generos": [
      "Pop",
      "Synthpop"
    ],
    "fortes": "Controle de fraseado, sustain e presença de câmera, segura os momentos-chave da era",
    "fracos": "Em alguns cortes, expressão estática, pouca ênfase em dança intensa"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "triplesjiyeon",
    "name": "Jiyeon",
    "group": "tripleS",
    "aniversario": "13-02-2004",
    "vocal": "C",
    "dance": "B",
    "rap": "D",
    "center": "A",
    "visual": "A",
    "especialidade": "Visual",
    "conceitos": [
      "Conceptual",
      "Performance"
    ],
    "generos": [
      "Groove",
      "Synthpop"
    ],
    "fortes": "Bom suporte vocal, posição segura em formações, presença consistente",
    "fracos": "Falta destaque solo que mostre mais amplitude vocal"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "tripleskotone",
    "name": "Kotone",
    "group": "tripleS",
    "aniversario": "10-03-2004",
    "vocal": "B",
    "dance": "A",
    "rap": "B",
    "center": "B",
    "visual": "B",
    "especialidade": "Dance",
    "conceitos": [
      "Conceptual",
      "Performance"
    ],
    "generos": [
      "Hip-Hop",
      "Synthpop"
    ],
    "fortes": "Execução coreográfica consistente, ótima leitura de câmera, muito limpa ao vivo",
    "fracos": "Alcance vocal em registros graves/baixos ligeiramente restrito"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "tripleschaeyeon",
    "name": "Chaeyeon",
    "group": "tripleS",
    "aniversario": "04-12-2004",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "A",
    "visual": "A",
    "especialidade": "Vocal",
    "conceitos": [
      "Conceptual",
      "Performance"
    ],
    "generos": [
      "Emotional",
      "Synthpop"
    ],
    "fortes": "Entonação estável e presença refinada , boa em partes melódicas",
    "fracos": "Em climas muito altos pode perder ligeira potência"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "triplesyubin",
    "name": "Yubin",
    "group": "tripleS",
    "aniversario": "03-02-2005",
    "vocal": "B",
    "dance": "A",
    "rap": "D",
    "center": "A",
    "visual": "A",
    "especialidade": "Dance",
    "conceitos": [
      "Conceptual",
      "Performance"
    ],
    "generos": [
      "Hip-Hop",
      "Synthpop"
    ],
    "fortes": "Entrega limpinha nas linhas que tem, presença de apoio sólida",
    "fracos": "Ainda em crescimento para carregar solos longos"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "triplesjiwoo",
    "name": "Jiwoo",
    "group": "tripleS",
    "aniversario": "24-10-2005",
    "vocal": "A",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "C",
    "especialidade": "Vocal",
    "conceitos": [
      "Conceptual",
      "Performance"
    ],
    "generos": [
      "Emotional",
      "Synthpop"
    ],
    "fortes": "Marca de dança forte, excelente leitura rítmica e presença de palco",
    "fracos": "Runs vocais longos menos frequentes no setlist — menos oportunidade de brilhar vocalmente"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "tripleskaede",
    "name": "Kaede",
    "group": "tripleS",
    "aniversario": "20-12-2005",
    "vocal": "A",
    "dance": "S",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "Dance",
    "conceitos": [
      "Conceptual",
      "Performance"
    ],
    "generos": [
      "Groove",
      "Synthpop"
    ],
    "fortes": "Timing e precisão em dança, funciona bem em passagens sincronizadas",
    "fracos": "Range vocal menos explorado nas stages, pouco solo"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "triplesshion",
    "name": "Shion",
    "group": "tripleS",
    "aniversario": "03-04-2006",
    "vocal": "A",
    "dance": "B",
    "rap": "D",
    "center": "C",
    "visual": "B",
    "especialidade": "Vocal",
    "conceitos": [
      "Conceptual",
      "Performance"
    ],
    "generos": [
      "R&B",
      "Synthpop"
    ],
    "fortes": "Visual expressivo, suporte de performance estável",
    "fracos": "Poucas lines na era → dados limitados (±)"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "tripleslynn",
    "name": "Lynn",
    "group": "tripleS",
    "aniversario": "12-04-2006",
    "vocal": "C",
    "dance": "A",
    "rap": "C",
    "center": "C",
    "visual": "B",
    "especialidade": "Dance",
    "conceitos": [
      "Conceptual",
      "Performance"
    ],
    "generos": [
      "Groove",
      "Synthpop"
    ],
    "fortes": "Vocais limpos, boa estabilidade em letras, presença visual elegante",
    "fracos": "Energia de palco às vezes mais reservada, coreos mais simples"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "triplessullin",
    "name": "Sullin",
    "group": "tripleS",
    "aniversario": "30-11-2006",
    "vocal": "C",
    "dance": "C",
    "rap": "D",
    "center": "D",
    "visual": "B",
    "especialidade": "Visual",
    "conceitos": [
      "Conceptual",
      "Performance"
    ],
    "generos": [
      "R&B",
      "Synthpop"
    ],
    "fortes": "Participação de grupo consistente, execução de formação",
    "fracos": "Exposição limitada em stages, dados de solo escassos (±)"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "tripleshyerin",
    "name": "Hyerin",
    "group": "tripleS",
    "aniversario": "12-04-2007",
    "vocal": "B",
    "dance": "A",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "Dance",
    "conceitos": [
      "Conceptual",
      "Performance"
    ],
    "generos": [
      "Hip-Hop",
      "Synthpop"
    ],
    "fortes": "Ritmo e sincronização, preza a musicalidade no fraseado",
    "fracos": "Não sai muito do formato de suporte, menos solo"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "tripleschaewon",
    "name": "Chaewon",
    "group": "tripleS",
    "aniversario": "02-05-2007",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "Dance",
    "conceitos": [
      "Conceptual",
      "Performance"
    ],
    "generos": [
      "Pop",
      "Synthpop"
    ],
    "fortes": "Visual forte, contribuições seguras em formações",
    "fracos": "Poucas linhas , pouca exposição solo → nota conservadora"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "tripleshayeon",
    "name": "Hayeon",
    "group": "tripleS",
    "aniversario": "01-08-2007",
    "vocal": "B",
    "dance": "B",
    "rap": "C",
    "center": "B",
    "visual": "B",
    "especialidade": "Vocal",
    "conceitos": [
      "Conceptual",
      "Performance"
    ],
    "generos": [
      "Hip-Hop",
      "Synthpop"
    ],
    "fortes": "Entrosamento no grupo, presença correta",
    "fracos": "Dados de solo escassos, rank provisório"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "triplessoomin",
    "name": "Soomin",
    "group": "tripleS",
    "aniversario": "03-10-2007",
    "vocal": "B",
    "dance": "B",
    "rap": "C",
    "center": "B",
    "visual": "A",
    "especialidade": "Visual",
    "conceitos": [
      "Conceptual",
      "Performance"
    ],
    "generos": [
      "Pop",
      "Synthpop"
    ],
    "fortes": "Performance de grupo limpa, suporte em harmonias",
    "fracos": "Pouca exposição solo, avaliado conservativamente"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "tripleskwakyeonji",
    "name": "Kwak Yeonji",
    "group": "tripleS",
    "aniversario": "08-01-2008",
    "vocal": "C",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "Dance",
    "conceitos": [
      "Conceptual",
      "Performance"
    ],
    "generos": [
      "Pop",
      "Synthpop"
    ],
    "fortes": "Energia coreográfica alta, transições e expressão bem resolvidas",
    "fracos": "Afinação sob fadiga tem pequenos vacilos (observados em uma stage)"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "triplesjoobin",
    "name": "Joobin",
    "group": "tripleS",
    "aniversario": "16-01-2009",
    "vocal": "B",
    "dance": "C",
    "rap": "D",
    "center": "C",
    "visual": "B",
    "especialidade": "Vocal",
    "conceitos": [
      "Conceptual",
      "Performance"
    ],
    "generos": [
      "Pop",
      "Synthpop"
    ],
    "fortes": "Integra bem as coreografias, presença regular",
    "fracos": "Pouca exposição → nota provisória"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "triplesseoah",
    "name": "SeoAh",
    "group": "tripleS",
    "aniversario": "11-06-2010",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "C",
    "visual": "B",
    "especialidade": "Vocal",
    "conceitos": [
      "Conceptual",
      "Performance"
    ],
    "generos": [
      "Pop",
      "Synthpop"
    ],
    "fortes": "Cumpre bem as linhas atribuídas, boa conexão visual",
    "fracos": "Menos destaque solo, rank conservador"
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "unchildyeeun",
    "name": "Yeeun",
    "group": "UNCHILD",
    "aniversario": "21-12-2006",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "A",
    "visual": "A",
    "especialidade": "Visual",
    "conceitos": [
      "Performance",
      "Teen Crush"
    ],
    "generos": [
      "Experimental",
      "Groove"
    ],
    "fortes": "Cativa a audiência com seu visual e carisma, boa leitura de câmera e presença natural em palco, estabilidade sólida para linhas de apoio.",
    "fracos": "Ainda é inexperiente, falta refinamento técnico em vocal e dança, pouca potência em performances mais intensas."
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "unchildheekie",
    "name": "Heekie",
    "group": "UNCHILD",
    "aniversario": "17-03-2007",
    "vocal": "B",
    "dance": "A",
    "rap": "B",
    "center": "B",
    "visual": "B",
    "especialidade": "Rap",
    "conceitos": [
      "Performance",
      "Teen Crush"
    ],
    "generos": [
      "Experimental",
      "Groove"
    ],
    "fortes": "Entrega de rap equilibrada, boa estabilidade geral nas performances, presença energética e consistente em coreografias.",
    "fracos": "Ainda carece de identidade vocal mais marcante, impacto visual moderado comparado às integrantes centrais."
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "unchildtina",
    "name": "Tina",
    "group": "UNCHILD",
    "aniversario": "09-03-2008",
    "vocal": "B",
    "dance": "B",
    "rap": "C",
    "center": "B",
    "visual": "B",
    "especialidade": "Vocal",
    "conceitos": [
      "Performance",
      "Teen Crush"
    ],
    "generos": [
      "Experimental",
      "Groove"
    ],
    "fortes": "Timbre vocal agradável e estável, boa adaptabilidade entre linhas melódicas e performáticas, presença equilibrada.",
    "fracos": "Ainda falta estabilidade vocal em performances mais intensas, expressividade facial pode evoluir mais."
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "unchildako",
    "name": "Ako",
    "group": "UNCHILD",
    "aniversario": "08-07-2008",
    "vocal": "C",
    "dance": "B",
    "rap": "B",
    "center": "B",
    "visual": "B",
    "especialidade": "Rap",
    "conceitos": [
      "Performance",
      "Teen Crush"
    ],
    "generos": [
      "Experimental",
      "Groove"
    ],
    "fortes": "Boa dicção e timing em rap, energia jovem combina bem com conceitos experimentais, dança estável para rookie.",
    "fracos": "Vocais ainda limitados tecnicamente, presença de palco menos dominante em partes centrais."
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "unchildevon",
    "name": "Evon",
    "group": "UNCHILD",
    "aniversario": "11-07-2008",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "Vocal",
    "conceitos": [
      "Performance",
      "Teen Crush"
    ],
    "generos": [
      "Experimental",
      "Groove"
    ],
    "fortes": "Vocais limpos e consistentes, boa harmonia em grupo, transmite leveza e estabilidade nas stages.",
    "fracos": "Rap pouco desenvolvido, impacto performático ainda discreto em músicas mais agressivas."
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "unchildhaeun",
    "name": "Haeun",
    "group": "UNCHILD",
    "aniversario": "16-01-2009",
    "vocal": "B",
    "dance": "S",
    "rap": "B",
    "center": "A",
    "visual": "B",
    "especialidade": "Dance",
    "conceitos": [
      "Performance",
      "Teen Crush"
    ],
    "generos": [
      "Experimental",
      "Groove"
    ],
    "fortes": "Destaque absoluto em dança, excelente controle corporal e sincronização, presença forte em performances energéticas.",
    "fracos": "Vocais ainda menos refinados tecnicamente, pode perder estabilidade vocal em coreografias muito intensas."
  }
];
*/
const idols = [
  {
    "gen": "4",
    "type": "idol",
    "id": "3yeyurim",
    "name": "Yurim",
    "group": "3YE",
    "aniversario": "13-04-1998",
    "vocal": "C",
    "dance": "B",
    "rap": "B",
    "center": "C",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "3yeyuji",
    "name": "Yuji",
    "group": "3YE",
    "aniversario": "25-11-1998",
    "vocal": "B",
    "dance": "A",
    "rap": "B",
    "center": "B",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "3yehaeun",
    "name": "Haeun",
    "group": "3YE",
    "aniversario": "12-03-1999",
    "vocal": "C",
    "dance": "B",
    "rap": "A",
    "center": "B",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "aespakarina",
    "name": "Karina",
    "group": "aespa",
    "aniversario": "11-04-2000",
    "vocal": "B",
    "dance": "S",
    "rap": "B",
    "center": "A",
    "visual": "S",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "aespagiselle",
    "name": "Giselle",
    "group": "aespa",
    "aniversario": "30-10-2000",
    "vocal": "C",
    "dance": "B",
    "rap": "A",
    "center": "C",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "aespawinter",
    "name": "Winter",
    "group": "aespa",
    "aniversario": "01-01-2001",
    "vocal": "S",
    "dance": "B",
    "rap": "D",
    "center": "A",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "aespaningning",
    "name": "NingNing",
    "group": "aespa",
    "aniversario": "23-10-2002",
    "vocal": "S",
    "dance": "B",
    "rap": "D",
    "center": "C",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "alldayprojectannie",
    "name": "Annie",
    "group": "ALLDAY PROJECT",
    "aniversario": "23-01-2002",
    "vocal": "D",
    "dance": "C",
    "rap": "C",
    "center": "D",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "alldayprojectbailey",
    "name": "Bailey",
    "group": "ALLDAY PROJECT",
    "aniversario": "24-02-2004",
    "vocal": "D",
    "dance": "A",
    "rap": "B",
    "center": "B",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "alldayprojectyoungseo",
    "name": "Youngseo",
    "group": "ALLDAY PROJECT",
    "aniversario": "13-11-2005",
    "vocal": "A",
    "dance": "B",
    "rap": "D",
    "center": "A",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "artmsjinsoul",
    "name": "JinSoul",
    "group": "ARTMS",
    "aniversario": "13-06-1997",
    "vocal": "B",
    "dance": "B",
    "rap": "B",
    "center": "B",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "artmshaseul",
    "name": "HaSeul",
    "group": "ARTMS",
    "aniversario": "18-08-1997",
    "vocal": "A",
    "dance": "B",
    "rap": "C",
    "center": "B",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "artmskimlip",
    "name": "Kim Lip",
    "group": "ARTMS",
    "aniversario": "10-02-1999",
    "vocal": "A",
    "dance": "S",
    "rap": "D",
    "center": "A",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "artmsheejin",
    "name": "HeeJin",
    "group": "ARTMS",
    "aniversario": "19-10-2000",
    "vocal": "A",
    "dance": "S",
    "rap": "C",
    "center": "S",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "artmschoerry",
    "name": "Choerry",
    "group": "ARTMS",
    "aniversario": "04-06-2001",
    "vocal": "B",
    "dance": "A",
    "rap": "D",
    "center": "A",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "atheartmichi",
    "name": "Michi",
    "group": "AtHeart",
    "aniversario": "06-05-2007",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "atheartarin",
    "name": "Arin",
    "group": "AtHeart",
    "aniversario": "01-07-2007",
    "vocal": "B",
    "dance": "S",
    "rap": "C",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "atheartkatelyn",
    "name": "Katelyn",
    "group": "AtHeart",
    "aniversario": "24-07-2007",
    "vocal": "B",
    "dance": "B",
    "rap": "C",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "atheartbome",
    "name": "Bome",
    "group": "AtHeart",
    "aniversario": "26-11-2007",
    "vocal": "A",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "atheartseohyeon",
    "name": "Seohyeon",
    "group": "AtHeart",
    "aniversario": "12-09-2008",
    "vocal": "A",
    "dance": "A",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "atheartaurora",
    "name": "Aurora",
    "group": "AtHeart",
    "aniversario": "04-07-2009",
    "vocal": "A",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "atheartnahyun",
    "name": "Nahyun",
    "group": "AtHeart",
    "aniversario": "03-09-2009",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "A",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "babydontcryyihyun",
    "name": "Yihyun",
    "group": "Baby DONT Cry",
    "aniversario": "11-04-2006",
    "vocal": "A",
    "dance": "B",
    "rap": "D",
    "center": "A",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "babydontcrykumi",
    "name": "Kumi",
    "group": "Baby DONT Cry",
    "aniversario": "30-08-2007",
    "vocal": "C",
    "dance": "B",
    "rap": "B",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "babydontcrymia",
    "name": "Mia",
    "group": "Baby DONT Cry",
    "aniversario": "03-09-2007",
    "vocal": "C",
    "dance": "C",
    "rap": "D",
    "center": "B",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "babydontcrybeni",
    "name": "Beni",
    "group": "Baby DONT Cry",
    "aniversario": "23-12-2008",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "babymonsterruka",
    "name": "Ruka",
    "group": "BABYMONSTER",
    "aniversario": "20-03-2002",
    "vocal": "B",
    "dance": "B",
    "rap": "S",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "babymonsterpharita",
    "name": "Pharita",
    "group": "BABYMONSTER",
    "aniversario": "26-08-2005",
    "vocal": "A",
    "dance": "C",
    "rap": "D",
    "center": "C",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "babymonsterasa",
    "name": "Asa",
    "group": "BABYMONSTER",
    "aniversario": "17-04-2006",
    "vocal": "B",
    "dance": "B",
    "rap": "S",
    "center": "B",
    "visual": "S",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "babymonsterahyeon",
    "name": "Ahyeon",
    "group": "BABYMONSTER",
    "aniversario": "11-04-2007",
    "vocal": "S",
    "dance": "B",
    "rap": "S",
    "center": "A",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "babymonsterrami",
    "name": "Rami",
    "group": "BABYMONSTER",
    "aniversario": "17-10-2007",
    "vocal": "S",
    "dance": "B",
    "rap": "B",
    "center": "B",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "babymonsterrora",
    "name": "Rora",
    "group": "BABYMONSTER",
    "aniversario": "14-08-2008",
    "vocal": "A",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "babymonsterchiquita",
    "name": "Chiquita",
    "group": "BABYMONSTER",
    "aniversario": "17-02-2009",
    "vocal": "B",
    "dance": "B",
    "rap": "A",
    "center": "B",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "billliemoonsua",
    "name": "Moon Sua",
    "group": "Billlie",
    "aniversario": "09-09-1999",
    "vocal": "B",
    "dance": "A",
    "rap": "A",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "billliesuhyeon",
    "name": "Suhyeon",
    "group": "Billlie",
    "aniversario": "15-01-2000",
    "vocal": "A",
    "dance": "B",
    "rap": "C",
    "center": "B",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "billlieharam",
    "name": "Haram",
    "group": "Billlie",
    "aniversario": "13-01-2001",
    "vocal": "A",
    "dance": "C",
    "rap": "D",
    "center": "C",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "billlietsuki",
    "name": "Tsuki",
    "group": "Billlie",
    "aniversario": "21-09-2002",
    "vocal": "B",
    "dance": "S",
    "rap": "D",
    "center": "A",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "billliesheon",
    "name": "Sheon",
    "group": "Billlie",
    "aniversario": "28-01-2003",
    "vocal": "B",
    "dance": "A",
    "rap": "B",
    "center": "B",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "billliesiyoon",
    "name": "Siyoon",
    "group": "Billlie",
    "aniversario": "16-02-2005",
    "vocal": "C",
    "dance": "B",
    "rap": "B",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "billlieharuna",
    "name": "Haruna",
    "group": "Billlie",
    "aniversario": "30-01-2006",
    "vocal": "C",
    "dance": "B",
    "rap": "C",
    "center": "C",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "bvndityiyeon",
    "name": "Yiyeon",
    "group": "BVNDIT",
    "aniversario": "28-05-1995",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "C",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "bvnditsonghee",
    "name": "Songhee",
    "group": "BVNDIT",
    "aniversario": "08-11-1998",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "bvnditjungwoo",
    "name": "Jungwoo",
    "group": "BVNDIT",
    "aniversario": "02-04-1999",
    "vocal": "A",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "bvnditsimyeong",
    "name": "Simyeong",
    "group": "BVNDIT",
    "aniversario": "27-05-1999",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "C",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "bvnditseungeun",
    "name": "Seungeun",
    "group": "BVNDIT",
    "aniversario": "27-12-2000",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "cherrybullethaeyoon",
    "name": "Haeyoon",
    "group": "Cherry Bullet",
    "aniversario": "10-01-1996",
    "vocal": "S",
    "dance": "C",
    "rap": "D",
    "center": "B",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "cherrybulletyuju",
    "name": "Yuju",
    "group": "Cherry Bullet",
    "aniversario": "05-03-1997",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "cherrybulletbora",
    "name": "Bora",
    "group": "Cherry Bullet",
    "aniversario": "03-03-1999",
    "vocal": "S",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "cherrybulletjiwon",
    "name": "Jiwon",
    "group": "Cherry Bullet",
    "aniversario": "04-09-2000",
    "vocal": "B",
    "dance": "B",
    "rap": "C",
    "center": "S",
    "visual": "S",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "cherrybulletremi",
    "name": "Remi",
    "group": "Cherry Bullet",
    "aniversario": "26-04-2001",
    "vocal": "C",
    "dance": "A",
    "rap": "C",
    "center": "C",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "cherrybulletchaerin",
    "name": "Chaerin",
    "group": "Cherry Bullet",
    "aniversario": "13-03-2002",
    "vocal": "C",
    "dance": "A",
    "rap": "C",
    "center": "C",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "cherrybulletmay",
    "name": "May",
    "group": "Cherry Bullet",
    "aniversario": "16-11-2004",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "cignaturechaesol",
    "name": "Chaesol",
    "group": "cignature",
    "aniversario": "14-07-1998",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "cignaturejeewon",
    "name": "Jeewon",
    "group": "cignature",
    "aniversario": "01-04-1999",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "S",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "cignatureyeah",
    "name": "Ye Ah (former)",
    "group": "cignature",
    "aniversario": "09-10-1999",
    "vocal": "A",
    "dance": "C",
    "rap": "D",
    "center": "B",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "cignaturesunn",
    "name": "Sunn (former)",
    "group": "cignature",
    "aniversario": "07-02-2000",
    "vocal": "C",
    "dance": "A",
    "rap": "B",
    "center": "B",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "cignatureseline",
    "name": "Seline",
    "group": "cignature",
    "aniversario": "20-06-2000",
    "vocal": "C",
    "dance": "B",
    "rap": "C",
    "center": "C",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "cignaturechloe",
    "name": "Chloe",
    "group": "cignature",
    "aniversario": "06-01-2001",
    "vocal": "B",
    "dance": "C",
    "rap": "D",
    "center": "C",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "cignaturesemi",
    "name": "Semi",
    "group": "cignature",
    "aniversario": "10-04-2002",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "cignaturedohee",
    "name": "Dohee",
    "group": "cignature",
    "aniversario": "01-08-2002",
    "vocal": "C",
    "dance": "B",
    "rap": "C",
    "center": "C",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "classyhyungseo",
    "name": "Hyungseo",
    "group": "CLASSy",
    "aniversario": "25-06-2001",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "classychaewon",
    "name": "Chaewon",
    "group": "CLASSy",
    "aniversario": "04-06-2003",
    "vocal": "A",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "classyhyeju",
    "name": "Hyeju",
    "group": "CLASSy",
    "aniversario": "09-12-2003",
    "vocal": "C",
    "dance": "A",
    "rap": "C",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "classyriwon",
    "name": "Riwon",
    "group": "CLASSy",
    "aniversario": "11-01-2007",
    "vocal": "A",
    "dance": "C",
    "rap": "D",
    "center": "C",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "classyjimin",
    "name": "Jimin",
    "group": "CLASSy",
    "aniversario": "25-11-2007",
    "vocal": "A",
    "dance": "B",
    "rap": "C",
    "center": "A",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "classyboeun",
    "name": "Boeun",
    "group": "CLASSy",
    "aniversario": "11-02-2008",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "A",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "classyseonyou",
    "name": "Seonyou",
    "group": "CLASSy",
    "aniversario": "20-03-2008",
    "vocal": "D",
    "dance": "B",
    "rap": "C",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "cosmosyhimesha",
    "name": "Himesha",
    "group": "cosmosy",
    "aniversario": "23-01-2006",
    "vocal": "B",
    "dance": "B",
    "rap": "A",
    "center": "B",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "cosmosydehana",
    "name": "De_Hana",
    "group": "cosmosy",
    "aniversario": "10-05-2006",
    "vocal": "A",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "cosmosykamion",
    "name": "Kamión",
    "group": "cosmosy",
    "aniversario": "18-07-2006",
    "vocal": "A",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "cosmosyamei",
    "name": "A’mei",
    "group": "cosmosy",
    "aniversario": "30-10-2007",
    "vocal": "B",
    "dance": "B",
    "rap": "A",
    "center": "B",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "csrgeumhee",
    "name": "Geumhee",
    "group": "CSR",
    "aniversario": "04-03-2005",
    "vocal": "C",
    "dance": "C",
    "rap": "C",
    "center": "C",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "csrsihyeon",
    "name": "Sihyeon",
    "group": "CSR",
    "aniversario": "12-03-2005",
    "vocal": "C",
    "dance": "C",
    "rap": "D",
    "center": "C",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "csrseoyeon",
    "name": "Seoyeon",
    "group": "CSR",
    "aniversario": "26-03-2005",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "csryuna",
    "name": "Yuna",
    "group": "CSR",
    "aniversario": "23-04-2005",
    "vocal": "A",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "csrduna",
    "name": "Duna",
    "group": "CSR",
    "aniversario": "28-04-2005",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "csrsua",
    "name": "Sua",
    "group": "CSR",
    "aniversario": "23-07-2005",
    "vocal": "C",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "csryeham",
    "name": "Yeham",
    "group": "CSR",
    "aniversario": "07-10-2005",
    "vocal": "A",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "dreamnoteboni",
    "name": "BoNi",
    "group": "DreamNote",
    "aniversario": "30-10-1999",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "dreamnoteyoui",
    "name": "Youi",
    "group": "DreamNote",
    "aniversario": "24-04-2000",
    "vocal": "C",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "dreamnotelara",
    "name": "Lara",
    "group": "DreamNote",
    "aniversario": "09-08-2000",
    "vocal": "A",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "dreamnotemiso",
    "name": "Miso",
    "group": "DreamNote",
    "aniversario": "25-10-2000",
    "vocal": "A",
    "dance": "B",
    "rap": "C",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "dreamnotesumin",
    "name": "Sumin",
    "group": "DreamNote",
    "aniversario": "07-09-2001",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "A",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "dreamnoteeunjo",
    "name": "Eunjo",
    "group": "DreamNote",
    "aniversario": "07-03-2002",
    "vocal": "B",
    "dance": "B",
    "rap": "C",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "dreamnotehanbyeol",
    "name": "HanByeol",
    "group": "DreamNote",
    "aniversario": "13-10-2003",
    "vocal": "C",
    "dance": "B",
    "rap": "C",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "evergloweu",
    "name": "E:U",
    "group": "EVERGLOW",
    "aniversario": "19-05-1998",
    "vocal": "D",
    "dance": "B",
    "rap": "S",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "everglowsihyeon",
    "name": "Sihyeon",
    "group": "EVERGLOW",
    "aniversario": "05-08-1999",
    "vocal": "A",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "everglowmia",
    "name": "Mia",
    "group": "EVERGLOW",
    "aniversario": "13-01-2000",
    "vocal": "A",
    "dance": "S",
    "rap": "B",
    "center": "A",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "everglowonda",
    "name": "Onda",
    "group": "EVERGLOW",
    "aniversario": "18-05-2000",
    "vocal": "C",
    "dance": "A",
    "rap": "D",
    "center": "C",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "everglowaisha",
    "name": "Aisha",
    "group": "EVERGLOW",
    "aniversario": "21-07-2000",
    "vocal": "C",
    "dance": "A",
    "rap": "B",
    "center": "B",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "everglowyiren",
    "name": "Yiren",
    "group": "EVERGLOW",
    "aniversario": "29-12-2000",
    "vocal": "C",
    "dance": "B",
    "rap": "D",
    "center": "A",
    "visual": "S",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "fiftyfiftykeena",
    "name": "Keena",
    "group": "FIFTY FIFTY",
    "aniversario": "09-07-2002",
    "vocal": "B",
    "dance": "B",
    "rap": "B",
    "center": "B",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "fiftyfiftychanellemoon",
    "name": "Chanelle Moon",
    "group": "FIFTY FIFTY",
    "aniversario": "14-06-2003",
    "vocal": "A",
    "dance": "A",
    "rap": "B",
    "center": "B",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "fiftyfiftyyewon",
    "name": "Yewon",
    "group": "FIFTY FIFTY",
    "aniversario": "18-03-2005",
    "vocal": "B",
    "dance": "C",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "fiftyfiftyhana",
    "name": "Hana",
    "group": "FIFTY FIFTY",
    "aniversario": "05-09-2006",
    "vocal": "A",
    "dance": "B",
    "rap": "D",
    "center": "C",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "fiftyfiftyathena",
    "name": "Athena",
    "group": "FIFTY FIFTY",
    "aniversario": "15-03-2007",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "A",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "fromis9saerom",
    "name": "Saerom (former)",
    "group": "fromis_9",
    "aniversario": "07-01-1997",
    "vocal": "C",
    "dance": "A",
    "rap": "D",
    "center": "B",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "fromis9hayoung",
    "name": "Hayoung",
    "group": "fromis_9",
    "aniversario": "29-09-1997",
    "vocal": "S",
    "dance": "A",
    "rap": "D",
    "center": "B",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "fromis9gyuri",
    "name": "Gyuri (former)",
    "group": "fromis_9",
    "aniversario": "27-12-1997",
    "vocal": "A",
    "dance": "C",
    "rap": "D",
    "center": "B",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "fromis9jiwon",
    "name": "Jiwon",
    "group": "fromis_9",
    "aniversario": "20-03-1998",
    "vocal": "S",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "fromis9jisun",
    "name": "Jisun (former)",
    "group": "fromis_9",
    "aniversario": "23-11-1998",
    "vocal": "C",
    "dance": "C",
    "rap": "D",
    "center": "B",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "fromis9seoyeon",
    "name": "Seoyeon (former)",
    "group": "fromis_9",
    "aniversario": "22-01-2000",
    "vocal": "B",
    "dance": "B",
    "rap": "B",
    "center": "C",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "fromis9chaeyoung",
    "name": "Chaeyoung",
    "group": "fromis_9",
    "aniversario": "14-05-2000",
    "vocal": "B",
    "dance": "B",
    "rap": "C",
    "center": "B",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "fromis9nagyung",
    "name": "Nagyung",
    "group": "fromis_9",
    "aniversario": "01-06-2000",
    "vocal": "A",
    "dance": "B",
    "rap": "D",
    "center": "A",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "fromis9jiheon",
    "name": "Jiheon",
    "group": "fromis_9",
    "aniversario": "17-04-2003",
    "vocal": "C",
    "dance": "B",
    "rap": "D",
    "center": "C",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "h1keyseoi",
    "name": "Seoi",
    "group": "H1-KEY",
    "aniversario": "12-02-2000",
    "vocal": "B",
    "dance": "C",
    "rap": "D",
    "center": "B",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "h1keyriina",
    "name": "Riina",
    "group": "H1-KEY",
    "aniversario": "21-02-2001",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "h1keyhwiseo",
    "name": "Hwiseo",
    "group": "H1-KEY",
    "aniversario": "31-07-2002",
    "vocal": "A",
    "dance": "B",
    "rap": "C",
    "center": "A",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "h1keyyel",
    "name": "Yel",
    "group": "H1-KEY",
    "aniversario": "25-12-2004",
    "vocal": "B",
    "dance": "A",
    "rap": "C",
    "center": "A",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "hearts2heartscarmen",
    "name": "Carmen",
    "group": "Hearts2Hearts",
    "aniversario": "28-03-2006",
    "vocal": "S",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "hearts2heartsjiwoo",
    "name": "Jiwoo",
    "group": "Hearts2Hearts",
    "aniversario": "07-09-2006",
    "vocal": "B",
    "dance": "A",
    "rap": "C",
    "center": "B",
    "visual": "S",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "hearts2heartsyuha",
    "name": "Yuha",
    "group": "Hearts2Hearts",
    "aniversario": "12-04-2007",
    "vocal": "A",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "hearts2heartsstella",
    "name": "Stella",
    "group": "Hearts2Hearts",
    "aniversario": "18-06-2007",
    "vocal": "A",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "hearts2heartsjuun",
    "name": "Juun",
    "group": "Hearts2Hearts",
    "aniversario": "03-12-2008",
    "vocal": "B",
    "dance": "S",
    "rap": "B",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "hearts2heartsana",
    "name": "A-na",
    "group": "Hearts2Hearts",
    "aniversario": "20-12-2008",
    "vocal": "B",
    "dance": "A",
    "rap": "B",
    "center": "S",
    "visual": "S",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "hearts2heartsian",
    "name": "Ian",
    "group": "Hearts2Hearts",
    "aniversario": "09-10-2009",
    "vocal": "B",
    "dance": "A",
    "rap": "D",
    "center": "S",
    "visual": "S",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "hearts2heartsyeon",
    "name": "Ye-on",
    "group": "Hearts2Hearts",
    "aniversario": "19-04-2010",
    "vocal": "A",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "hitgsvv",
    "name": "VV",
    "group": "HITGS",
    "aniversario": "03-06-2006",
    "vocal": "D",
    "dance": "D",
    "rap": "D",
    "center": "D",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "hitgsseojin",
    "name": "Seojin",
    "group": "HITGS",
    "aniversario": "16-04-2008",
    "vocal": "D",
    "dance": "C",
    "rap": "D",
    "center": "C",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "hitgsseohee",
    "name": "Seohee",
    "group": "HITGS",
    "aniversario": "11-05-2009",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "hitgshyerin",
    "name": "Hyerin",
    "group": "HITGS",
    "aniversario": "10-12-2009",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "A",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "hitgsiyoo",
    "name": "Iyoo",
    "group": "HITGS",
    "aniversario": "26-03-2010",
    "vocal": "B",
    "dance": "B",
    "rap": "B",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "idlemiyeon",
    "name": "Miyeon",
    "group": "i-dle",
    "aniversario": "31-01-1997",
    "vocal": "S",
    "dance": "C",
    "rap": "D",
    "center": "B",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "idleminnie",
    "name": "Minnie",
    "group": "i-dle",
    "aniversario": "23-10-1997",
    "vocal": "A",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "idlesoyeon",
    "name": "Soyeon",
    "group": "i-dle",
    "aniversario": "26-08-1998",
    "vocal": "B",
    "dance": "B",
    "rap": "S",
    "center": "B",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "idleyuqi",
    "name": "Yuqi",
    "group": "i-dle",
    "aniversario": "23-09-1999",
    "vocal": "B",
    "dance": "B",
    "rap": "B",
    "center": "B",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "idleshuhua",
    "name": "Shuhua",
    "group": "i-dle",
    "aniversario": "06-01-2000",
    "vocal": "D",
    "dance": "B",
    "rap": "D",
    "center": "C",
    "visual": "S",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "ichillinjiyoon",
    "name": "Jiyoon",
    "group": "ICHILLIN'",
    "aniversario": "15-09-2000",
    "vocal": "A",
    "dance": "B",
    "rap": "D",
    "center": "C",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "ichillineji",
    "name": "E.Ji",
    "group": "ICHILLIN'",
    "aniversario": "08-11-2000",
    "vocal": "B",
    "dance": "A",
    "rap": "D",
    "center": "A",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "ichillinjackie",
    "name": "Jackie",
    "group": "ICHILLIN'",
    "aniversario": "17-11-2001",
    "vocal": "C",
    "dance": "B",
    "rap": "S",
    "center": "C",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "ichillinjoonie",
    "name": "Joonie",
    "group": "ICHILLIN'",
    "aniversario": "24-05-2002",
    "vocal": "C",
    "dance": "B",
    "rap": "A",
    "center": "C",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "ichillinchaerin",
    "name": "Chaerin",
    "group": "ICHILLIN'",
    "aniversario": "31-03-2003",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "ichillinyeju",
    "name": "Yeju",
    "group": "ICHILLIN'",
    "aniversario": "01-09-2004",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "A",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "ichillinchowon",
    "name": "Chowon",
    "group": "ICHILLIN'",
    "aniversario": "18-08-2005",
    "vocal": "A",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "ifeyewonhwayeon",
    "name": "Won Hwayeon",
    "group": "ifeye",
    "aniversario": "24-06-2006",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "ifeyetaerin",
    "name": "Taerin",
    "group": "ifeye",
    "aniversario": "03-07-2006",
    "vocal": "B",
    "dance": "A",
    "rap": "D",
    "center": "C",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "ifeyerahee",
    "name": "Rahee",
    "group": "ifeye",
    "aniversario": "06-12-2007",
    "vocal": "C",
    "dance": "B",
    "rap": "B",
    "center": "B",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "ifeyekasia",
    "name": "Kasia",
    "group": "ifeye",
    "aniversario": "15-02-2008",
    "vocal": "C",
    "dance": "A",
    "rap": "B",
    "center": "A",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "ifeyemeu",
    "name": "Meu",
    "group": "ifeye",
    "aniversario": "09-06-2008",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "ifeyesasha",
    "name": "Sasha",
    "group": "ifeye",
    "aniversario": "20-05-2009",
    "vocal": "A",
    "dance": "A",
    "rap": "B",
    "center": "A",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "iiitaeri",
    "name": "Taeri",
    "group": "iii",
    "aniversario": "21-09-2002",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "iiihana",
    "name": "Hana",
    "group": "iii",
    "aniversario": "22-05-2004",
    "vocal": "C",
    "dance": "B",
    "rap": "D",
    "center": "C",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "iiieungi",
    "name": "Eungi",
    "group": "iii",
    "aniversario": "16-08-2004",
    "vocal": "D",
    "dance": "D",
    "rap": "D",
    "center": "C",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "iiisoobin",
    "name": "Soobin",
    "group": "iii",
    "aniversario": "23-06-2006",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "iiihuran",
    "name": "Huran (former)",
    "group": "iii",
    "aniversario": "05-11-2006",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "iiinamkhing",
    "name": "Namkhing",
    "group": "iii",
    "aniversario": "19-12-2007",
    "vocal": "D",
    "dance": "A",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "illityunah",
    "name": "Yunah",
    "group": "ILLIT",
    "aniversario": "15-01-2004",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "illitminju",
    "name": "Minju",
    "group": "ILLIT",
    "aniversario": "11-05-2004",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "illitmoka",
    "name": "Moka",
    "group": "ILLIT",
    "aniversario": "08-10-2004",
    "vocal": "C",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "illitwonhee",
    "name": "Wonhee",
    "group": "ILLIT",
    "aniversario": "26-06-2007",
    "vocal": "A",
    "dance": "B",
    "rap": "D",
    "center": "A",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "illitiroha",
    "name": "Iroha",
    "group": "ILLIT",
    "aniversario": "04-02-2008",
    "vocal": "B",
    "dance": "S",
    "rap": "D",
    "center": "B",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "itzyyeji",
    "name": "Yeji",
    "group": "ITZY",
    "aniversario": "26-05-2000",
    "vocal": "A",
    "dance": "S",
    "rap": "C",
    "center": "A",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "itzylia",
    "name": "Lia",
    "group": "ITZY",
    "aniversario": "21-07-2000",
    "vocal": "A",
    "dance": "C",
    "rap": "D",
    "center": "C",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "itzyryujin",
    "name": "Ryujin",
    "group": "ITZY",
    "aniversario": "17-04-2001",
    "vocal": "B",
    "dance": "S",
    "rap": "A",
    "center": "A",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "itzychaeryeong",
    "name": "Chaeryeong",
    "group": "ITZY",
    "aniversario": "05-06-2001",
    "vocal": "B",
    "dance": "S",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "itzyyuna",
    "name": "Yuna",
    "group": "ITZY",
    "aniversario": "09-12-2003",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "A",
    "visual": "S",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "ivegaeul",
    "name": "Gaeul",
    "group": "IVE",
    "aniversario": "24-09-2002",
    "vocal": "C",
    "dance": "B",
    "rap": "B",
    "center": "B",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "iveanyujin",
    "name": "An Yujin",
    "group": "IVE",
    "aniversario": "01-09-2003",
    "vocal": "S",
    "dance": "A",
    "rap": "D",
    "center": "A",
    "visual": "S",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "iverei",
    "name": "Rei",
    "group": "IVE",
    "aniversario": "03-02-2004",
    "vocal": "C",
    "dance": "B",
    "rap": "B",
    "center": "B",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "ivejangwonyoung",
    "name": "Jang Wonyoung",
    "group": "IVE",
    "aniversario": "31-08-2004",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "S",
    "visual": "S",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "iveliz",
    "name": "Liz",
    "group": "IVE",
    "aniversario": "21-11-2004",
    "vocal": "S",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "iveleeseo",
    "name": "Leeseo",
    "group": "IVE",
    "aniversario": "21-02-2007",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "iznamai",
    "name": "Mai",
    "group": "izna",
    "aniversario": "28-10-2004",
    "vocal": "B",
    "dance": "A",
    "rap": "D",
    "center": "B",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "iznabangjeemin",
    "name": "Bang Jeemin",
    "group": "izna",
    "aniversario": "08-05-2005",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "S",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "iznayoonjiyoon",
    "name": "Yoon Jiyoon (former)",
    "group": "izna",
    "aniversario": "14-07-2005",
    "vocal": "S",
    "dance": "C",
    "rap": "D",
    "center": "C",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "iznakoko",
    "name": "Koko",
    "group": "izna",
    "aniversario": "14-11-2006",
    "vocal": "B",
    "dance": "S",
    "rap": "A",
    "center": "B",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "iznaryusarang",
    "name": "Ryu Sarang",
    "group": "izna",
    "aniversario": "18-04-2007",
    "vocal": "B",
    "dance": "A",
    "rap": "B",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "iznachoijungeun",
    "name": "Choi Jungeun",
    "group": "izna",
    "aniversario": "04-08-2007",
    "vocal": "A",
    "dance": "A",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "iznajeongsaebi",
    "name": "Jeong Saebi",
    "group": "izna",
    "aniversario": "22-01-2008",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "kep1eryujin",
    "name": "Yujin",
    "group": "Kep1er",
    "aniversario": "12-08-1996",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "kep1erxiaoting",
    "name": "Xiaoting",
    "group": "Kep1er",
    "aniversario": "12-11-1999",
    "vocal": "B",
    "dance": "S",
    "rap": "D",
    "center": "A",
    "visual": "S",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "kep1ermashiro",
    "name": "Mashiro (former)",
    "group": "Kep1er",
    "aniversario": "16-12-1999",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "kep1erchaehyun",
    "name": "Chaehyun",
    "group": "Kep1er",
    "aniversario": "26-04-2002",
    "vocal": "A",
    "dance": "C",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "kep1erdayeon",
    "name": "Dayeon",
    "group": "Kep1er",
    "aniversario": "02-03-2003",
    "vocal": "B",
    "dance": "S",
    "rap": "B",
    "center": "B",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "kep1erhikaru",
    "name": "Hikaru",
    "group": "Kep1er",
    "aniversario": "12-03-2004",
    "vocal": "C",
    "dance": "A",
    "rap": "A",
    "center": "C",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "kep1erhueningbahiyyih",
    "name": "Huening Bahiyyih",
    "group": "Kep1er",
    "aniversario": "27-07-2004",
    "vocal": "C",
    "dance": "C",
    "rap": "D",
    "center": "C",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "kep1eryoungeun",
    "name": "Youngeun (former)",
    "group": "Kep1er",
    "aniversario": "27-12-2004",
    "vocal": "A",
    "dance": "A",
    "rap": "B",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "kep1eryeseo",
    "name": "Yeseo (former)",
    "group": "Kep1er",
    "aniversario": "22-08-2005",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "kiiikiiileesol",
    "name": "Leesol",
    "group": "KiiiKiii",
    "aniversario": "18-09-2005",
    "vocal": "B",
    "dance": "B",
    "rap": "A",
    "center": "B",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "kiiikiiisui",
    "name": "Sui",
    "group": "KiiiKiii",
    "aniversario": "10-04-2006",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "kiiikiiijiyu",
    "name": "Jiyu",
    "group": "KiiiKiii",
    "aniversario": "14-05-2006",
    "vocal": "B",
    "dance": "B",
    "rap": "B",
    "center": "A",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "kiiikiiihaum",
    "name": "Haum",
    "group": "KiiiKiii",
    "aniversario": "14-11-2006",
    "vocal": "B",
    "dance": "A",
    "rap": "D",
    "center": "B",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "kiiikiiikya",
    "name": "Kya",
    "group": "KiiiKiii",
    "aniversario": "18-12-2010",
    "vocal": "B",
    "dance": "B",
    "rap": "A",
    "center": "B",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "kiiraslingling",
    "name": "LingLing",
    "group": "KIIRAS",
    "aniversario": "20-04-2005",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "kiiraskurumi",
    "name": "Kurumi",
    "group": "KIIRAS",
    "aniversario": "20-06-2006",
    "vocal": "A",
    "dance": "C",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "kiirasharin",
    "name": "Harin",
    "group": "KIIRAS",
    "aniversario": "03-01-2008",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "kiiraskylie",
    "name": "Kylie",
    "group": "KIIRAS",
    "aniversario": "17-05-2008",
    "vocal": "C",
    "dance": "B",
    "rap": "B",
    "center": "D",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "kiirasdoyeon",
    "name": "Doyeon",
    "group": "KIIRAS",
    "aniversario": "26-12-2009",
    "vocal": "C",
    "dance": "C",
    "rap": "D",
    "center": "D",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "kiirasroah",
    "name": "Roah",
    "group": "KIIRAS",
    "aniversario": "16-10-2011",
    "vocal": "S",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "lapilluschanty",
    "name": "Chanty",
    "group": "Lapillus",
    "aniversario": "15-12-2002",
    "vocal": "B",
    "dance": "C",
    "rap": "D",
    "center": "C",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "lapillusshana",
    "name": "Shana",
    "group": "Lapillus",
    "aniversario": "13-03-2003",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "lapillusyue",
    "name": "Yue",
    "group": "Lapillus",
    "aniversario": "03-07-2004",
    "vocal": "B",
    "dance": "C",
    "rap": "D",
    "center": "C",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "lapillusbessie",
    "name": "Bessie",
    "group": "Lapillus",
    "aniversario": "15-07-2004",
    "vocal": "A",
    "dance": "C",
    "rap": "C",
    "center": "C",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "lapillusseowon",
    "name": "Seowon",
    "group": "Lapillus",
    "aniversario": "05-12-2006",
    "vocal": "B",
    "dance": "B",
    "rap": "A",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "lapillushaeun",
    "name": "Haeun",
    "group": "Lapillus",
    "aniversario": "02-11-2008",
    "vocal": "B",
    "dance": "B",
    "rap": "B",
    "center": "B",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "lesserafimsakura",
    "name": "Sakura",
    "group": "LE SSERAFIM",
    "aniversario": "19-03-1998",
    "vocal": "C",
    "dance": "C",
    "rap": "D",
    "center": "B",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "lesserafimkimchaewon",
    "name": "Kim Chaewon",
    "group": "LE SSERAFIM",
    "aniversario": "01-08-2000",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "lesserafimhuhyunjin",
    "name": "Huh Yunjin",
    "group": "LE SSERAFIM",
    "aniversario": "08-10-2001",
    "vocal": "A",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "lesserafimkazuha",
    "name": "Kazuha",
    "group": "LE SSERAFIM",
    "aniversario": "09-08-2003",
    "vocal": "C",
    "dance": "A",
    "rap": "C",
    "center": "B",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "lesserafimhongeunchae",
    "name": "Hong Eunchae",
    "group": "LE SSERAFIM",
    "aniversario": "10-11-2006",
    "vocal": "C",
    "dance": "B",
    "rap": "C",
    "center": "B",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "lightsumsangah",
    "name": "Sangah",
    "group": "LIGHTSUM",
    "aniversario": "04-09-2002",
    "vocal": "C",
    "dance": "A",
    "rap": "B",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "lightsumchowon",
    "name": "Chowon",
    "group": "LIGHTSUM",
    "aniversario": "16-09-2002",
    "vocal": "A",
    "dance": "B",
    "rap": "C",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "lightsumnayoung",
    "name": "Nayoung",
    "group": "LIGHTSUM",
    "aniversario": "30-11-2002",
    "vocal": "B",
    "dance": "A",
    "rap": "D",
    "center": "A",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "lightsumhina",
    "name": "Hina",
    "group": "LIGHTSUM",
    "aniversario": "07-04-2003",
    "vocal": "C",
    "dance": "B",
    "rap": "D",
    "center": "C",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "lightsumjuhyeon",
    "name": "Juhyeon",
    "group": "LIGHTSUM",
    "aniversario": "08-04-2004",
    "vocal": "C",
    "dance": "A",
    "rap": "C",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "lightsumyujeong",
    "name": "Yujeong",
    "group": "LIGHTSUM",
    "aniversario": "14-06-2004",
    "vocal": "C",
    "dance": "B",
    "rap": "D",
    "center": "C",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "loossemblevivi",
    "name": "ViVi",
    "group": "Loossemble",
    "aniversario": "09-12-1996",
    "vocal": "C",
    "dance": "B",
    "rap": "D",
    "center": "C",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "loossemblehyunjin",
    "name": "HyunJin",
    "group": "Loossemble",
    "aniversario": "15-11-2000",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "A",
    "visual": "S",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "loossemblegowon",
    "name": "Go Won",
    "group": "Loossemble",
    "aniversario": "19-11-2000",
    "vocal": "C",
    "dance": "C",
    "rap": "C",
    "center": "C",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "loossemblehyeju",
    "name": "HyeJu",
    "group": "Loossemble",
    "aniversario": "13-11-2001",
    "vocal": "B",
    "dance": "A",
    "rap": "C",
    "center": "A",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "loossembleyeojin",
    "name": "YeoJin",
    "group": "Loossemble",
    "aniversario": "11-11-2002",
    "vocal": "C",
    "dance": "C",
    "rap": "D",
    "center": "C",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "meovvsooin",
    "name": "Sooin",
    "group": "MEOVV",
    "aniversario": "12-04-2005",
    "vocal": "B",
    "dance": "A",
    "rap": "D",
    "center": "A",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "meovvgawon",
    "name": "Gawon",
    "group": "MEOVV",
    "aniversario": "27-04-2005",
    "vocal": "A",
    "dance": "B",
    "rap": "S",
    "center": "B",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "meovvanna",
    "name": "Anna",
    "group": "MEOVV",
    "aniversario": "17-11-2005",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "S",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "meovvnarin",
    "name": "Narin",
    "group": "MEOVV",
    "aniversario": "15-08-2007",
    "vocal": "A",
    "dance": "B",
    "rap": "S",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "meovvella",
    "name": "Ella",
    "group": "MEOVV",
    "aniversario": "01-12-2008",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "S",
    "visual": "S",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "naturesohee",
    "name": "Sohee",
    "group": "NATURE",
    "aniversario": "20-01-1995",
    "vocal": "A",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "natureaurora",
    "name": "Aurora",
    "group": "NATURE",
    "aniversario": "14-01-1997",
    "vocal": "C",
    "dance": "C",
    "rap": "D",
    "center": "C",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "naturesaebom",
    "name": "Saebom",
    "group": "NATURE",
    "aniversario": "30-01-1997",
    "vocal": "B",
    "dance": "A",
    "rap": "C",
    "center": "A",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "naturelu",
    "name": "Lu",
    "group": "NATURE",
    "aniversario": "03-12-1997",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "naturechaebin",
    "name": "Chaebin",
    "group": "NATURE",
    "aniversario": "28-07-1999",
    "vocal": "A",
    "dance": "C",
    "rap": "D",
    "center": "C",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "natureharu",
    "name": "Haru",
    "group": "NATURE",
    "aniversario": "21-02-2000",
    "vocal": "C",
    "dance": "A",
    "rap": "D",
    "center": "C",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "natureloha",
    "name": "Loha",
    "group": "NATURE",
    "aniversario": "27-12-2001",
    "vocal": "C",
    "dance": "B",
    "rap": "C",
    "center": "B",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "natureuchae",
    "name": "Uchae",
    "group": "NATURE",
    "aniversario": "07-05-2002",
    "vocal": "C",
    "dance": "B",
    "rap": "C",
    "center": "C",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "naturesunshine",
    "name": "Sunshine",
    "group": "NATURE",
    "aniversario": "20-06-2002",
    "vocal": "B",
    "dance": "C",
    "rap": "D",
    "center": "C",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "newjeansminji",
    "name": "Minji",
    "group": "NewJeans",
    "aniversario": "07-05-2004",
    "vocal": "C",
    "dance": "B",
    "rap": "C",
    "center": "B",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "newjeanshanni",
    "name": "Hanni",
    "group": "NewJeans",
    "aniversario": "06-10-2004",
    "vocal": "B",
    "dance": "A",
    "rap": "C",
    "center": "A",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "newjeansdanielle",
    "name": "Danielle",
    "group": "NewJeans",
    "aniversario": "11-04-2005",
    "vocal": "A",
    "dance": "B",
    "rap": "C",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "newjeanshaerin",
    "name": "Haerin",
    "group": "NewJeans",
    "aniversario": "15-05-2006",
    "vocal": "B",
    "dance": "A",
    "rap": "C",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "newjeanshyein",
    "name": "Hyein",
    "group": "NewJeans",
    "aniversario": "21-04-2008",
    "vocal": "B",
    "dance": "B",
    "rap": "C",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "niziumako",
    "name": "Mako",
    "group": "NiziU",
    "aniversario": "04-04-2001",
    "vocal": "B",
    "dance": "B",
    "rap": "C",
    "center": "B",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "niziurio",
    "name": "Rio",
    "group": "NiziU",
    "aniversario": "04-02-2002",
    "vocal": "B",
    "dance": "B",
    "rap": "C",
    "center": "C",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "niziumaya",
    "name": "Maya",
    "group": "NiziU",
    "aniversario": "08-04-2002",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "niziuriku",
    "name": "Riku",
    "group": "NiziU",
    "aniversario": "26-10-2002",
    "vocal": "A",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "niziuayaka",
    "name": "Ayaka",
    "group": "NiziU",
    "aniversario": "20-06-2003",
    "vocal": "C",
    "dance": "C",
    "rap": "D",
    "center": "B",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "niziumayuka",
    "name": "Mayuka",
    "group": "NiziU",
    "aniversario": "13-11-2003",
    "vocal": "B",
    "dance": "B",
    "rap": "S",
    "center": "B",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "niziurima",
    "name": "Rima",
    "group": "NiziU",
    "aniversario": "26-03-2004",
    "vocal": "B",
    "dance": "B",
    "rap": "S",
    "center": "B",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "niziumiihi",
    "name": "Miihi",
    "group": "NiziU",
    "aniversario": "12-08-2004",
    "vocal": "A",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "niziunina",
    "name": "Nina",
    "group": "NiziU",
    "aniversario": "27-02-2005",
    "vocal": "A",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "nmixxlily",
    "name": "Lily",
    "group": "NMIXX",
    "aniversario": "17-10-2002",
    "vocal": "S",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "nmixxhaewon",
    "name": "Haewon",
    "group": "NMIXX",
    "aniversario": "25-02-2003",
    "vocal": "A",
    "dance": "B",
    "rap": "C",
    "center": "A",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "nmixxsullyoon",
    "name": "Sullyoon",
    "group": "NMIXX",
    "aniversario": "26-01-2004",
    "vocal": "A",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "S",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "nmixxbae",
    "name": "Bae",
    "group": "NMIXX",
    "aniversario": "28-12-2004",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "C",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "nmixxjiwoo",
    "name": "Jiwoo",
    "group": "NMIXX",
    "aniversario": "13-04-2005",
    "vocal": "B",
    "dance": "B",
    "rap": "A",
    "center": "C",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "nmixxkyujin",
    "name": "Kyujin",
    "group": "NMIXX",
    "aniversario": "26-05-2006",
    "vocal": "B",
    "dance": "A",
    "rap": "A",
    "center": "S",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "oddyouthmaika",
    "name": "Maika",
    "group": "ODD YOUTH",
    "aniversario": "16-02-2005",
    "vocal": "D",
    "dance": "B",
    "rap": "D",
    "center": "C",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "oddyouthmyah",
    "name": "Myah",
    "group": "ODD YOUTH",
    "aniversario": "19-06-2006",
    "vocal": "B",
    "dance": "A",
    "rap": "B",
    "center": "A",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "oddyouthkanie",
    "name": "Kanie",
    "group": "ODD YOUTH",
    "aniversario": "28-07-2007",
    "vocal": "C",
    "dance": "B",
    "rap": "D",
    "center": "C",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "oddyouthsummer",
    "name": "Summer",
    "group": "ODD YOUTH",
    "aniversario": "23-09-2007",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "oddyouthyeeum",
    "name": "Yeeum",
    "group": "ODD YOUTH",
    "aniversario": "27-12-2007",
    "vocal": "B",
    "dance": "C",
    "rap": "D",
    "center": "C",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "ourbirthdaykukchorok",
    "name": "Kuk Chorok",
    "group": "OURBIRTHDAY",
    "aniversario": "28-07-2005",
    "vocal": "B",
    "dance": "B",
    "rap": "B",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "ourbirthdayshinhyewon",
    "name": "Shin Hyewon",
    "group": "OURBIRTHDAY",
    "aniversario": "05-10-2005",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "ourbirthdaychohyejin",
    "name": "Cho Hyejin",
    "group": "OURBIRTHDAY",
    "aniversario": "24-10-2007",
    "vocal": "B",
    "dance": "A",
    "rap": "D",
    "center": "A",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "ourbirthdayu",
    "name": "U",
    "group": "OURBIRTHDAY",
    "aniversario": "21-08-2008",
    "vocal": "B",
    "dance": "A",
    "rap": "B",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "ourbirthdaybaby",
    "name": "Baby",
    "group": "OURBIRTHDAY",
    "aniversario": "10-02-2009",
    "vocal": "B",
    "dance": "A",
    "rap": "C",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "ourbirthdayachiraya",
    "name": "Achiraya",
    "group": "OURBIRTHDAY",
    "aniversario": "18-08-2009",
    "vocal": "B",
    "dance": "B",
    "rap": "C",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "ourbirthdaykilala",
    "name": "Kilala",
    "group": "OURBIRTHDAY",
    "aniversario": "17-12-2010",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "pixyella",
    "name": "Ella (former)",
    "group": "PIXY",
    "aniversario": "26-03-1998",
    "vocal": "A",
    "dance": "A",
    "rap": "D",
    "center": "B",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "pixylola",
    "name": "Lola",
    "group": "PIXY",
    "aniversario": "22-02-2001",
    "vocal": "B",
    "dance": "B",
    "rap": "C",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "pixysatbyeol",
    "name": "Satbyeol (former)",
    "group": "PIXY",
    "aniversario": "27-02-2001",
    "vocal": "D",
    "dance": "B",
    "rap": "C",
    "center": "C",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "pixydia",
    "name": "Dia",
    "group": "PIXY",
    "aniversario": "16-07-2001",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "pixysua",
    "name": "Sua",
    "group": "PIXY",
    "aniversario": "24-02-2003",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "C",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "pixydajeong",
    "name": "Dajeong",
    "group": "PIXY",
    "aniversario": "31-07-2003",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "C",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "primroserainie",
    "name": "Rainie",
    "group": "PRIMROSE",
    "aniversario": "16-11-2000",
    "vocal": "D",
    "dance": "C",
    "rap": "D",
    "center": "C",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "primrosenahyun",
    "name": "Nahyun",
    "group": "PRIMROSE",
    "aniversario": "25-01-2002",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "primroseruby",
    "name": "Ruby",
    "group": "PRIMROSE",
    "aniversario": "21-08-2002",
    "vocal": "D",
    "dance": "C",
    "rap": "D",
    "center": "C",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "primrosehayun",
    "name": "Hayun",
    "group": "PRIMROSE",
    "aniversario": "20-11-2003",
    "vocal": "C",
    "dance": "C",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "purplekissnagoeun",
    "name": "Na Goeun",
    "group": "PURPLE KISS",
    "aniversario": "03-09-1999",
    "vocal": "S",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "purplekissdosie",
    "name": "Dosie",
    "group": "PURPLE KISS",
    "aniversario": "11-02-2000",
    "vocal": "B",
    "dance": "A",
    "rap": "D",
    "center": "A",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "purplekissireh",
    "name": "Ireh",
    "group": "PURPLE KISS",
    "aniversario": "30-04-2002",
    "vocal": "B",
    "dance": "A",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "purplekissyuki",
    "name": "Yuki",
    "group": "PURPLE KISS",
    "aniversario": "06-11-2002",
    "vocal": "C",
    "dance": "B",
    "rap": "S",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "purplekisschaein",
    "name": "Chaein",
    "group": "PURPLE KISS",
    "aniversario": "05-12-2002",
    "vocal": "A",
    "dance": "A",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "purplekissswan",
    "name": "Swan",
    "group": "PURPLE KISS",
    "aniversario": "11-07-2003",
    "vocal": "S",
    "dance": "C",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "queenzeyewonchae",
    "name": "Wonchae",
    "group": "Queenz Eye",
    "aniversario": "22-12-2002",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "queenzeyeahyoon",
    "name": "Ahyoon",
    "group": "Queenz Eye",
    "aniversario": "24-09-2003",
    "vocal": "C",
    "dance": "B",
    "rap": "B",
    "center": "B",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "queenzeyekiirii",
    "name": "Kiirii",
    "group": "Queenz Eye",
    "aniversario": "08-06-2004",
    "vocal": "C",
    "dance": "B",
    "rap": "D",
    "center": "C",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "queenzeyeseovin",
    "name": "Seovin",
    "group": "Queenz Eye",
    "aniversario": "01-10-2004",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "C",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "queenzeyejinyul",
    "name": "Jinyul",
    "group": "Queenz Eye",
    "aniversario": "03-12-2004",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "queenzeyeseoha",
    "name": "Seoha",
    "group": "Queenz Eye",
    "aniversario": "28-08-2009",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "rescenewoni",
    "name": "Woni",
    "group": "RESCENE",
    "aniversario": "25-05-2004",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "A",
    "visual": "S",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "resceneliv",
    "name": "Liv",
    "group": "RESCENE",
    "aniversario": "11-10-2006",
    "vocal": "A",
    "dance": "C",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "resceneminami",
    "name": "Minami",
    "group": "RESCENE",
    "aniversario": "29-11-2006",
    "vocal": "A",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "rescenemay",
    "name": "May",
    "group": "RESCENE",
    "aniversario": "19-08-2008",
    "vocal": "B",
    "dance": "C",
    "rap": "D",
    "center": "C",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "rescenezena",
    "name": "Zena",
    "group": "RESCENE",
    "aniversario": "27-11-2008",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "rocketpunchjuri",
    "name": "Juri",
    "group": "Rocket Punch",
    "aniversario": "03-10-1997",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "rocketpunchyeonhee",
    "name": "Yeonhee",
    "group": "Rocket Punch",
    "aniversario": "06-12-2000",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "A",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "rocketpunchsuyun",
    "name": "Suyun",
    "group": "Rocket Punch",
    "aniversario": "17-03-2001",
    "vocal": "A",
    "dance": "B",
    "rap": "D",
    "center": "C",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "rocketpunchyunkyoung",
    "name": "Yunkyoung",
    "group": "Rocket Punch",
    "aniversario": "01-11-2001",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "C",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "rocketpunchsohee",
    "name": "Sohee",
    "group": "Rocket Punch",
    "aniversario": "14-08-2003",
    "vocal": "C",
    "dance": "B",
    "rap": "C",
    "center": "C",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "rocketpunchdahyun",
    "name": "Dahyun",
    "group": "Rocket Punch",
    "aniversario": "29-04-2005",
    "vocal": "B",
    "dance": "B",
    "rap": "C",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "saymynamehitomi",
    "name": "Hitomi",
    "group": "SAY MY NAME",
    "aniversario": "06-10-2001",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "saymynameshuie",
    "name": "Shuie",
    "group": "SAY MY NAME",
    "aniversario": "06-06-2004",
    "vocal": "C",
    "dance": "C",
    "rap": "A",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "saymynamemei",
    "name": "Mei",
    "group": "SAY MY NAME",
    "aniversario": "27-09-2005",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "A",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "saymynamekanny",
    "name": "Kanny",
    "group": "SAY MY NAME",
    "aniversario": "26-12-2005",
    "vocal": "B",
    "dance": "B",
    "rap": "B",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "saymynamesoha",
    "name": "Soha",
    "group": "SAY MY NAME",
    "aniversario": "26-07-2006",
    "vocal": "A",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "saymynamedohee",
    "name": "Dohee",
    "group": "SAY MY NAME",
    "aniversario": "09-12-2006",
    "vocal": "A",
    "dance": "B",
    "rap": "D",
    "center": "S",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "saymynamejunhwi",
    "name": "Junhwi",
    "group": "SAY MY NAME",
    "aniversario": "11-06-2007",
    "vocal": "B",
    "dance": "B",
    "rap": "C",
    "center": "C",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "saymynameseungjoo",
    "name": "Seungjoo",
    "group": "SAY MY NAME",
    "aniversario": "24-09-2010",
    "vocal": "B",
    "dance": "C",
    "rap": "D",
    "center": "C",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "secretnumberlea",
    "name": "Léa (former)",
    "group": "SECRET NUMBER",
    "aniversario": "12-08-1995",
    "vocal": "D",
    "dance": "B",
    "rap": "D",
    "center": "C",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "secretnumberdita",
    "name": "Dita (former)",
    "group": "SECRET NUMBER",
    "aniversario": "25-12-1996",
    "vocal": "B",
    "dance": "A",
    "rap": "D",
    "center": "A",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "secretnumberjinny",
    "name": "Jinny (former)",
    "group": "SECRET NUMBER",
    "aniversario": "20-01-1998",
    "vocal": "D",
    "dance": "B",
    "rap": "A",
    "center": "B",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "secretnumberminji",
    "name": "Minji (former)",
    "group": "SECRET NUMBER",
    "aniversario": "31-03-1999",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "C",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "secretnumbersoodam",
    "name": "Soodam (former)",
    "group": "SECRET NUMBER",
    "aniversario": "09-11-1999",
    "vocal": "C",
    "dance": "C",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "secretnumberzuu",
    "name": "Zuu (former)",
    "group": "SECRET NUMBER",
    "aniversario": "24-03-2000",
    "vocal": "D",
    "dance": "C",
    "rap": "D",
    "center": "C",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "secretnumberdenise",
    "name": "Denise (former)",
    "group": "SECRET NUMBER",
    "aniversario": "11-01-2001",
    "vocal": "A",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "secretnumbernavi",
    "name": "Navi",
    "group": "SECRET NUMBER",
    "aniversario": "13-04-2003",
    "vocal": "D",
    "dance": "D",
    "rap": "D",
    "center": "D",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "secretnumberdinda",
    "name": "Dinda",
    "group": "SECRET NUMBER",
    "aniversario": "22-08-2003",
    "vocal": "C",
    "dance": "C",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "secretnumberebin",
    "name": "Ebin",
    "group": "SECRET NUMBER",
    "aniversario": "28-01-2004",
    "vocal": "D",
    "dance": "D",
    "rap": "D",
    "center": "D",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "secretnumberminc",
    "name": "Min C",
    "group": "SECRET NUMBER",
    "aniversario": "21-04-2006",
    "vocal": "D",
    "dance": "D",
    "rap": "D",
    "center": "D",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "soloistkwoneunbi",
    "name": "Kwon Eunbi",
    "group": "Soloist",
    "aniversario": "27-09-1995",
    "vocal": "A",
    "dance": "A",
    "rap": "C",
    "center": "B",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "soloistyves",
    "name": "Yves",
    "group": "Soloist",
    "aniversario": "24-05-1997",
    "vocal": "B",
    "dance": "S",
    "rap": "C",
    "center": "B",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "soloistyena",
    "name": "Yena",
    "group": "Soloist",
    "aniversario": "29-09-1999",
    "vocal": "B",
    "dance": "B",
    "rap": "B",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "soloistchuu",
    "name": "Chuu",
    "group": "Soloist",
    "aniversario": "20-10-1999",
    "vocal": "S",
    "dance": "B",
    "rap": "C",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "soloistleechaeyeon",
    "name": "Lee Chaeyeon",
    "group": "Soloist",
    "aniversario": "11-01-2000",
    "vocal": "A",
    "dance": "S",
    "rap": "C",
    "center": "C",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "soloistjeonsomi",
    "name": "Jeon Somi",
    "group": "Soloist",
    "aniversario": "09-03-2001",
    "vocal": "B",
    "dance": "A",
    "rap": "C",
    "center": "S",
    "visual": "S",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "soloistjoyuri",
    "name": "Jo Yuri",
    "group": "Soloist",
    "aniversario": "22-10-2001",
    "vocal": "S",
    "dance": "C",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "staycsumin",
    "name": "Sumin",
    "group": "STAYC",
    "aniversario": "13-03-2001",
    "vocal": "B",
    "dance": "B",
    "rap": "C",
    "center": "C",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "staycsieun",
    "name": "Sieun",
    "group": "STAYC",
    "aniversario": "01-08-2001",
    "vocal": "S",
    "dance": "B",
    "rap": "A",
    "center": "A",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "staycisa",
    "name": "Isa",
    "group": "STAYC",
    "aniversario": "23-01-2002",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "staycseeun",
    "name": "Seeun",
    "group": "STAYC",
    "aniversario": "14-06-2003",
    "vocal": "C",
    "dance": "B",
    "rap": "D",
    "center": "C",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "staycyoon",
    "name": "Yoon",
    "group": "STAYC",
    "aniversario": "14-04-2004",
    "vocal": "A",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "staycj",
    "name": "J",
    "group": "STAYC",
    "aniversario": "09-12-2004",
    "vocal": "B",
    "dance": "B",
    "rap": "A",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "tribesongsun",
    "name": "Songsun",
    "group": "TRI.BE",
    "aniversario": "22-03-1997",
    "vocal": "A",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "tribekelly",
    "name": "Kelly",
    "group": "TRI.BE",
    "aniversario": "16-01-2002",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "tribejinha",
    "name": "Jinha (former)",
    "group": "TRI.BE",
    "aniversario": "21-11-2003",
    "vocal": "A",
    "dance": "B",
    "rap": "D",
    "center": "C",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "tribehyunbin",
    "name": "Hyunbin",
    "group": "TRI.BE",
    "aniversario": "26-05-2004",
    "vocal": "C",
    "dance": "A",
    "rap": "A",
    "center": "B",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "tribejia",
    "name": "Jia",
    "group": "TRI.BE",
    "aniversario": "30-07-2005",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "C",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "tribesoeun",
    "name": "Soeun",
    "group": "TRI.BE",
    "aniversario": "10-12-2005",
    "vocal": "C",
    "dance": "B",
    "rap": "B",
    "center": "C",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "tribemire",
    "name": "Mire",
    "group": "TRI.BE",
    "aniversario": "26-03-2006",
    "vocal": "B",
    "dance": "A",
    "rap": "A",
    "center": "A",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "triplesyooyeon",
    "name": "Yooyeon",
    "group": "tripleS",
    "aniversario": "09-02-2001",
    "vocal": "B",
    "dance": "B",
    "rap": "C",
    "center": "S",
    "visual": "S",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "triplesmayu",
    "name": "Mayu",
    "group": "tripleS",
    "aniversario": "12-05-2002",
    "vocal": "A",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "triplesxinyu",
    "name": "Xinyu",
    "group": "tripleS",
    "aniversario": "25-05-2002",
    "vocal": "C",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "S",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "triplesnakyoung",
    "name": "Nakyoung",
    "group": "tripleS",
    "aniversario": "13-10-2002",
    "vocal": "B",
    "dance": "A",
    "rap": "B",
    "center": "A",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "triplessohyun",
    "name": "Sohyun",
    "group": "tripleS",
    "aniversario": "13-10-2002",
    "vocal": "B",
    "dance": "A",
    "rap": "B",
    "center": "A",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "triplesdahyun",
    "name": "Dahyun",
    "group": "tripleS",
    "aniversario": "08-01-2003",
    "vocal": "S",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "triplesnien",
    "name": "Nien",
    "group": "tripleS",
    "aniversario": "02-06-2003",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "C",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "triplesseoyeon",
    "name": "Seoyeon",
    "group": "tripleS",
    "aniversario": "06-08-2003",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "S",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "triplesjiyeon",
    "name": "JiYeon",
    "group": "tripleS",
    "aniversario": "13-02-2004",
    "vocal": "C",
    "dance": "B",
    "rap": "D",
    "center": "A",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "tripleskotone",
    "name": "Kotone",
    "group": "tripleS",
    "aniversario": "10-03-2004",
    "vocal": "B",
    "dance": "A",
    "rap": "B",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "tripleschaeyeon",
    "name": "Chaeyeon",
    "group": "tripleS",
    "aniversario": "04-12-2004",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "A",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "triplesyubin",
    "name": "Yubin",
    "group": "tripleS",
    "aniversario": "03-02-2005",
    "vocal": "B",
    "dance": "A",
    "rap": "D",
    "center": "A",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "triplesjiwoo",
    "name": "Jiwoo",
    "group": "tripleS",
    "aniversario": "24-10-2005",
    "vocal": "A",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "tripleskaede",
    "name": "Kaede",
    "group": "tripleS",
    "aniversario": "20-12-2005",
    "vocal": "A",
    "dance": "S",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "triplesshion",
    "name": "Shion",
    "group": "tripleS",
    "aniversario": "03-04-2006",
    "vocal": "A",
    "dance": "B",
    "rap": "D",
    "center": "C",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "tripleslynn",
    "name": "Lynn",
    "group": "tripleS",
    "aniversario": "12-04-2006",
    "vocal": "C",
    "dance": "A",
    "rap": "C",
    "center": "C",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "triplessullin",
    "name": "Sullin",
    "group": "tripleS",
    "aniversario": "30-11-2006",
    "vocal": "C",
    "dance": "C",
    "rap": "D",
    "center": "D",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "tripleshyerin",
    "name": "Hyerin",
    "group": "tripleS",
    "aniversario": "12-04-2007",
    "vocal": "B",
    "dance": "A",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "tripleschaewon",
    "name": "Chaewon",
    "group": "tripleS",
    "aniversario": "02-05-2007",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "tripleshayeon",
    "name": "Hayeon",
    "group": "tripleS",
    "aniversario": "01-08-2007",
    "vocal": "B",
    "dance": "B",
    "rap": "C",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "triplessoomin",
    "name": "Soomin",
    "group": "tripleS",
    "aniversario": "03-10-2007",
    "vocal": "B",
    "dance": "B",
    "rap": "C",
    "center": "B",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "tripleskwakyeonji",
    "name": "Kwak Yeonji",
    "group": "tripleS",
    "aniversario": "08-01-2008",
    "vocal": "C",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "triplesjoobin",
    "name": "Joobin",
    "group": "tripleS",
    "aniversario": "16-01-2009",
    "vocal": "B",
    "dance": "C",
    "rap": "D",
    "center": "C",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "triplesseoah",
    "name": "SeoAh",
    "group": "tripleS",
    "aniversario": "11-06-2010",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "C",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "unchildyeeun",
    "name": "Yeeun",
    "group": "UNCHILD",
    "aniversario": "21-12-2006",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "A",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "unchildheekie",
    "name": "Heekie",
    "group": "UNCHILD",
    "aniversario": "17-03-2007",
    "vocal": "B",
    "dance": "A",
    "rap": "B",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "unchildtina",
    "name": "Tina",
    "group": "UNCHILD",
    "aniversario": "09-03-2008",
    "vocal": "B",
    "dance": "B",
    "rap": "C",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "unchildako",
    "name": "Ako",
    "group": "UNCHILD",
    "aniversario": "08-07-2008",
    "vocal": "C",
    "dance": "B",
    "rap": "B",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "unchildevon",
    "name": "Evon",
    "group": "UNCHILD",
    "aniversario": "11-07-2008",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "unchildhaeun",
    "name": "Haeun",
    "group": "UNCHILD",
    "aniversario": "16-01-2009",
    "vocal": "B",
    "dance": "S",
    "rap": "B",
    "center": "A",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "unishyeonju",
    "name": "Hyeonju",
    "group": "UNIS",
    "aniversario": "03-11-2001",
    "vocal": "A",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "unisnana",
    "name": "Nana",
    "group": "UNIS",
    "aniversario": "06-06-2007",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "unisgehlee",
    "name": "Gehlee",
    "group": "UNIS",
    "aniversario": "19-08-2007",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "C",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "uniskotoko",
    "name": "Kotoko",
    "group": "UNIS",
    "aniversario": "28-10-2007",
    "vocal": "B",
    "dance": "B",
    "rap": "C",
    "center": "A",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "unisyunha",
    "name": "Yunha",
    "group": "UNIS",
    "aniversario": "28-02-2009",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "uniselisia",
    "name": "Elisia",
    "group": "UNIS",
    "aniversario": "18-04-2009",
    "vocal": "S",
    "dance": "B",
    "rap": "D",
    "center": "C",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "unisyoona",
    "name": "Yoona",
    "group": "UNIS",
    "aniversario": "07-10-2009",
    "vocal": "B",
    "dance": "B",
    "rap": "B",
    "center": "C",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "unisseowon",
    "name": "Seowon",
    "group": "UNIS",
    "aniversario": "27-01-2011",
    "vocal": "S",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "uspeeryeowon",
    "name": "Yeowon (former)",
    "group": "USPEER",
    "aniversario": "10-04-2006",
    "vocal": "C",
    "dance": "B",
    "rap": "C",
    "center": "D",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "uspeersoee",
    "name": "Soee",
    "group": "USPEER",
    "aniversario": "11-03-2007",
    "vocal": "C",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "uspeersian",
    "name": "Sian",
    "group": "USPEER",
    "aniversario": "18-08-2007",
    "vocal": "A",
    "dance": "B",
    "rap": "D",
    "center": "A",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "uspeerseoyu",
    "name": "Seoyu",
    "group": "USPEER",
    "aniversario": "26-11-2007",
    "vocal": "C",
    "dance": "A",
    "rap": "C",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "uspeerdaon",
    "name": "Daon",
    "group": "USPEER",
    "aniversario": "07-07-2008",
    "vocal": "C",
    "dance": "C",
    "rap": "D",
    "center": "C",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "uspeerchaena",
    "name": "Chaena",
    "group": "USPEER",
    "aniversario": "08-06-2009",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "C",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "uspeerroa",
    "name": "Roa",
    "group": "USPEER",
    "aniversario": "28-10-2009",
    "vocal": "A",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "vivizeunha",
    "name": "Eunha",
    "group": "VIVIZ",
    "aniversario": "30-05-1997",
    "vocal": "A",
    "dance": "A",
    "rap": "D",
    "center": "B",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "vivizsinb",
    "name": "SinB",
    "group": "VIVIZ",
    "aniversario": "03-06-1998",
    "vocal": "B",
    "dance": "S",
    "rap": "C",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "vivizumji",
    "name": "Umji",
    "group": "VIVIZ",
    "aniversario": "19-08-1998",
    "vocal": "B",
    "dance": "A",
    "rap": "D",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "vvupkim",
    "name": "Kim",
    "group": "VVUP",
    "aniversario": "03-06-2006",
    "vocal": "A",
    "dance": "B",
    "rap": "D",
    "center": "A",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "vvuppaan",
    "name": "Paan",
    "group": "VVUP",
    "aniversario": "22-06-2006",
    "vocal": "C",
    "dance": "B",
    "rap": "B",
    "center": "B",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "vvupsuyeon",
    "name": "Suyeon",
    "group": "VVUP",
    "aniversario": "31-03-2007",
    "vocal": "C",
    "dance": "C",
    "rap": "C",
    "center": "C",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "vvupjiyoon",
    "name": "Jiyoon",
    "group": "VVUP",
    "aniversario": "15-07-2008",
    "vocal": "C",
    "dance": "C",
    "rap": "D",
    "center": "C",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "weeeklyleesoojin",
    "name": "Lee Soojin",
    "group": "Weeekly",
    "aniversario": "12-12-2001",
    "vocal": "B",
    "dance": "A",
    "rap": "C",
    "center": "A",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "weeeklyshinjiyoon",
    "name": "Shin Jiyoon (former)",
    "group": "Weeekly",
    "aniversario": "02-03-2002",
    "vocal": "B",
    "dance": "C",
    "rap": "D",
    "center": "C",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "weeeklymonday",
    "name": "Monday",
    "group": "Weeekly",
    "aniversario": "10-05-2002",
    "vocal": "S",
    "dance": "A",
    "rap": "B",
    "center": "B",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "weeeklyparksoeun",
    "name": "Park Soeun",
    "group": "Weeekly",
    "aniversario": "26-10-2002",
    "vocal": "A",
    "dance": "A",
    "rap": "C",
    "center": "B",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "weeeklyleejaehee",
    "name": "Lee Jaehee",
    "group": "Weeekly",
    "aniversario": "18-03-2004",
    "vocal": "C",
    "dance": "C",
    "rap": "D",
    "center": "C",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "weeeklyjihan",
    "name": "Jihan",
    "group": "Weeekly",
    "aniversario": "12-07-2004",
    "vocal": "B",
    "dance": "B",
    "rap": "D",
    "center": "A",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "weeeklyzoa",
    "name": "Zoa",
    "group": "Weeekly",
    "aniversario": "31-05-2005",
    "vocal": "C",
    "dance": "B",
    "rap": "C",
    "center": "B",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "wooahnana",
    "name": "Nana",
    "group": "WOOAH",
    "aniversario": "09-03-2001",
    "vocal": "B",
    "dance": "S",
    "rap": "B",
    "center": "S",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "wooahwooyeon",
    "name": "Wooyeon",
    "group": "WOOAH",
    "aniversario": "11-02-2003",
    "vocal": "B",
    "dance": "C",
    "rap": "D",
    "center": "B",
    "visual": "A",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "wooahsora",
    "name": "Sora",
    "group": "WOOAH",
    "aniversario": "30-08-2003",
    "vocal": "C",
    "dance": "C",
    "rap": "D",
    "center": "C",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "wooahlucy",
    "name": "Lucy",
    "group": "WOOAH",
    "aniversario": "09-04-2004",
    "vocal": "D",
    "dance": "B",
    "rap": "A",
    "center": "C",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "4",
    "type": "idol",
    "id": "wooahminseo",
    "name": "Minseo",
    "group": "WOOAH",
    "aniversario": "12-08-2004",
    "vocal": "A",
    "dance": "B",
    "rap": "D",
    "center": "B",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "youngpossesunhye",
    "name": "Sunhye",
    "group": "YOUNG POSSE",
    "aniversario": "12-04-2004",
    "vocal": "C",
    "dance": "B",
    "rap": "S",
    "center": "B",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "youngposseyeonjung",
    "name": "Yeonjung",
    "group": "YOUNG POSSE",
    "aniversario": "01-09-2004",
    "vocal": "C",
    "dance": "B",
    "rap": "S",
    "center": "B",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "youngpossejiana",
    "name": "Jiana",
    "group": "YOUNG POSSE",
    "aniversario": "02-02-2006",
    "vocal": "B",
    "dance": "C",
    "rap": "S",
    "center": "B",
    "visual": "B",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "youngpossedoeun",
    "name": "Doeun",
    "group": "YOUNG POSSE",
    "aniversario": "24-12-2007",
    "vocal": "C",
    "dance": "C",
    "rap": "A",
    "center": "C",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  },
  {
    "gen": "5",
    "type": "idol",
    "id": "youngpossejieun",
    "name": "Jieun",
    "group": "YOUNG POSSE",
    "aniversario": "05-11-2009",
    "vocal": "C",
    "dance": "C",
    "rap": "A",
    "center": "C",
    "visual": "C",
    "especialidade": "",
    "conceitos": [],
    "generos": [],
    "fortes": "",
    "fracos": ""
  }
];

//data:musics
const musics = [
  {
    "type": "music",
    "id": "boysiiplanetbratattitude",
    "name": "Brat Attitude",
    "fonte": "BOYS II PLANET",
    "conceitos": [
      "Girl Crush",
      "Performance",
      "Swag"
    ],
    "generos": [
      "EDM",
      "Groove",
      "Hip-hop"
    ]
  },
  {
    "type": "music",
    "id": "boysiiplanetchains",
    "name": "Chains",
    "fonte": "BOYS II PLANET",
    "conceitos": [
      "Dark",
      "Dreamcore",
      "Performance"
    ],
    "generos": [
      "Experimental",
      "Groove",
      "Synthpop"
    ]
  },
  {
    "type": "music",
    "id": "boysiiplanetholasolar",
    "name": "HOLA SOLAR",
    "fonte": "BOYS II PLANET",
    "conceitos": [
      "Conceptual",
      "Dreamcore",
      "Teen Crush"
    ],
    "generos": [
      "Groove",
      "Pop",
      "Synthpop"
    ]
  },
  {
    "type": "music",
    "id": "boysiiplanethowtofly",
    "name": "How To Fly",
    "fonte": "BOYS II PLANET",
    "conceitos": [
      "Conceptual",
      "Cute",
      "Dreamcore"
    ],
    "generos": [
      "Emotional",
      "R&B",
      "Synthpop"
    ]
  },
  {
    "type": "music",
    "id": "boysiiplanetluckymacho",
    "name": "Lucky MACHO",
    "fonte": "BOYS II PLANET",
    "conceitos": [
      "Girl Crush",
      "Performance",
      "Swag"
    ],
    "generos": [
      "Experimental",
      "Hip-hop",
      "Tropical"
    ]
  },
  {
    "type": "music",
    "id": "boysiiplanetmaindish",
    "name": "MAIN DISH",
    "fonte": "BOYS II PLANET",
    "conceitos": [
      "Dark",
      "Girl Crush",
      "Swag"
    ],
    "generos": [
      "Experimental",
      "Hip-hop",
      "Rock"
    ]
  },
  {
    "type": "music",
    "id": "boysiiplanetneverbeen2heaven",
    "name": "Never Been 2 Heaven",
    "fonte": "BOYS II PLANET",
    "conceitos": [
      "Conceptual",
      "Cute",
      "Teen Crush"
    ],
    "generos": [
      "Groove",
      "Pop",
      "Synthpop"
    ]
  },
  {
    "type": "music",
    "id": "boysiiplanetsugarhigh",
    "name": "Sugar HIGH",
    "fonte": "BOYS II PLANET",
    "conceitos": [
      "Cute",
      "Dreamcore",
      "Teen Crush"
    ],
    "generos": [
      "Groove",
      "Pop",
      "Tropical"
    ]
  },
  {
    "type": "music",
    "id": "boysplanetengarde",
    "name": "En Garde",
    "fonte": "BOYS PLANET",
    "conceitos": [
      "Conceptual",
      "Elegant",
      "Performance"
    ],
    "generos": [
      "Experimental",
      "Groove",
      "Synthpop"
    ]
  },
  {
    "type": "music",
    "id": "boysplanethereiam",
    "name": "Here I Am",
    "fonte": "BOYS PLANET",
    "conceitos": [
      "Conceptual",
      "Dreamcore",
      "Teen Crush"
    ],
    "generos": [
      "EDM",
      "Groove",
      "Pop"
    ]
  },
  {
    "type": "music",
    "id": "boysplanethotsummer",
    "name": "Hot Summer",
    "fonte": "BOYS PLANET",
    "conceitos": [
      "Conceptual",
      "Elegant",
      "Mature"
    ],
    "generos": [
      "R&B",
      "Synthpop",
      "Tropical"
    ]
  },
  {
    "type": "music",
    "id": "boysplanetjellypop",
    "name": "Jelly Pop",
    "fonte": "BOYS PLANET",
    "conceitos": [
      "Cute",
      "Performance",
      "Teen Crush"
    ],
    "generos": [
      "Experimental",
      "Groove",
      "Pop"
    ]
  },
  {
    "type": "music",
    "id": "boysplanetnotalone",
    "name": "Not Alone",
    "fonte": "BOYS PLANET",
    "conceitos": [
      "Conceptual",
      "Dreamcore",
      "Elegant"
    ],
    "generos": [
      "Emotional",
      "R&B",
      "Synthpop"
    ]
  },
  {
    "type": "music",
    "id": "boysplanetoverme",
    "name": "Over Me",
    "fonte": "BOYS PLANET",
    "conceitos": [
      "Elegant",
      "Mature",
      "Performance"
    ],
    "generos": [
      "Experimental",
      "Groove",
      "R&B"
    ]
  },
  {
    "type": "music",
    "id": "boysplanetsaymyname",
    "name": "Say My Name",
    "fonte": "BOYS PLANET",
    "conceitos": [
      "Cute",
      "Dreamcore",
      "Teen Crush"
    ],
    "generos": [
      "Pop",
      "Rock",
      "Synthpop"
    ]
  },
  {
    "type": "music",
    "id": "boysplanetsupercharger",
    "name": "SuperCharger",
    "fonte": "BOYS PLANET",
    "conceitos": [
      "Girl Crush",
      "Performance",
      "Swag"
    ],
    "generos": [
      "EDM",
      "Experimental",
      "Hip-hop"
    ]
  },
  {
    "type": "music",
    "id": "boysplanetswitch",
    "name": "Switch",
    "fonte": "BOYS PLANET",
    "conceitos": [
      "Cute",
      "Swag",
      "Teen Crush"
    ],
    "generos": [
      "Experimental",
      "Groove",
      "Pop"
    ]
  },
  {
    "type": "music",
    "id": "girlsplanet999anotherdream",
    "name": "Another Dream",
    "fonte": "Girls Planet 999",
    "conceitos": [
      "Conceptual",
      "Dreamcore",
      "Elegant"
    ],
    "generos": [
      "Emotional",
      "R&B",
      "Synthpop"
    ]
  },
  {
    "type": "music",
    "id": "girlsplanet999ooooveroverover",
    "name": "O.O.O (Over & Over & Over)",
    "fonte": "Girls Planet 999",
    "conceitos": [
      "Conceptual",
      "Dreamcore",
      "Performance"
    ],
    "generos": [
      "EDM",
      "Experimental",
      "Pop"
    ]
  },
  {
    "type": "music",
    "id": "girlsplanet999shine",
    "name": "Shine",
    "fonte": "Girls Planet 999",
    "conceitos": [
      "Cute",
      "Performance",
      "Teen Crush"
    ],
    "generos": [
      "Experimental",
      "Pop",
      "Synthpop"
    ]
  },
  {
    "type": "music",
    "id": "girlsplanet999shoot",
    "name": "Shoot!",
    "fonte": "Girls Planet 999",
    "conceitos": [
      "Cute",
      "Performance",
      "Teen Crush"
    ],
    "generos": [
      "Groove",
      "Pop",
      "Synthpop"
    ]
  },
  {
    "type": "music",
    "id": "girlsplanet999snake",
    "name": "Snake",
    "fonte": "Girls Planet 999",
    "conceitos": [
      "Dark",
      "Girl Crush",
      "Mature"
    ],
    "generos": [
      "Experimental",
      "Groove",
      "Hip-hop"
    ]
  },
  {
    "type": "music",
    "id": "girlsplanet999umelove",
    "name": "U+Me=LOVE",
    "fonte": "Girls Planet 999",
    "conceitos": [
      "Dreamcore",
      "Elegant",
      "Performance"
    ],
    "generos": [
      "Groove",
      "Pop",
      "Synthpop"
    ]
  },
  {
    "type": "music",
    "id": "girlsplanet999utopia",
    "name": "Utopia",
    "fonte": "Girls Planet 999",
    "conceitos": [
      "Conceptual",
      "Dreamcore",
      "Elegant"
    ],
    "generos": [
      "Emotional",
      "R&B",
      "Synthpop"
    ]
  },
  {
    "type": "music",
    "id": "ilandcallingruntoyou",
    "name": "Calling (Run to You)",
    "fonte": "I-LAND",
    "conceitos": [
      "Dark",
      "Mature",
      "Performance"
    ],
    "generos": [
      "EDM",
      "Experimental",
      "R&B"
    ]
  },
  {
    "type": "music",
    "id": "ilandflicker",
    "name": "Flicker",
    "fonte": "I-LAND",
    "conceitos": [
      "Conceptual",
      "Dark",
      "Elegant"
    ],
    "generos": [
      "Emotional",
      "Groove",
      "R&B"
    ]
  },
  {
    "type": "music",
    "id": "ilandicredible",
    "name": "I&credible",
    "fonte": "I-LAND",
    "conceitos": [
      "Conceptual",
      "Dreamcore",
      "Elegant"
    ],
    "generos": [
      "Emotional",
      "Experimental",
      "Groove"
    ]
  },
  {
    "type": "music",
    "id": "ilandintotheiland",
    "name": "Into the I-LAND",
    "fonte": "I-LAND",
    "conceitos": [
      "Conceptual",
      "Dreamcore",
      "Performance"
    ],
    "generos": [
      "Emotional",
      "Pop",
      "Tropical"
    ]
  },
  {
    "type": "music",
    "id": "iland2drip",
    "name": "DRIP",
    "fonte": "I-LAND2",
    "conceitos": [
      "Mature",
      "Performance",
      "Swag"
    ],
    "generos": [
      "Experimental",
      "Groove",
      "Tropical"
    ]
  },
  {
    "type": "music",
    "id": "iland2fakeit",
    "name": "FAKE IT",
    "fonte": "I-LAND2",
    "conceitos": [
      "Conceptual",
      "Elegant",
      "Mature"
    ],
    "generos": [
      "Emotional",
      "Pop",
      "Synthpop"
    ]
  },
  {
    "type": "music",
    "id": "iland2finallovesong",
    "name": "FINAL LOVE SONG",
    "fonte": "I-LAND2",
    "conceitos": [
      "Conceptual",
      "Mature",
      "Performance"
    ],
    "generos": [
      "EDM",
      "Groove",
      "Synthpop"
    ]
  },
  {
    "type": "music",
    "id": "iland2iwaly",
    "name": "IWALY",
    "fonte": "I-LAND2",
    "conceitos": [
      "Conceptual",
      "Performance",
      "Teen Crush"
    ],
    "generos": [
      "Emotional",
      "Rock",
      "Synthpop"
    ]
  },
  {
    "type": "music",
    "id": "idolschoolhighfive",
    "name": "HIGH FIVE",
    "fonte": "Idol School",
    "conceitos": [
      "Conceptual",
      "Cute",
      "Dreamcore"
    ],
    "generos": [
      "Emotional",
      "Pop",
      "Synthpop"
    ]
  },
  {
    "type": "music",
    "id": "idolschoolmagical",
    "name": "MAGICAL",
    "fonte": "Idol School",
    "conceitos": [
      "Dreamcore",
      "Elegant",
      "Performance"
    ],
    "generos": [
      "EDM",
      "Pop",
      "Synthpop"
    ]
  },
  {
    "type": "music",
    "id": "idolschoolmiracle",
    "name": "Miracle",
    "fonte": "Idol School",
    "conceitos": [
      "Conceptual",
      "Dreamcore",
      "Elegant"
    ],
    "generos": [
      "Emotional",
      "Pop",
      "Synthpop"
    ]
  },
  {
    "type": "music",
    "id": "idolschoolpinocchio",
    "name": "Pinocchio",
    "fonte": "Idol School",
    "conceitos": [
      "Cute",
      "Performance",
      "Teen Crush"
    ],
    "generos": [
      "Experimental",
      "Groove",
      "Pop"
    ]
  },
  {
    "type": "music",
    "id": "idolschoolpretty",
    "name": "Pretty",
    "fonte": "Idol School",
    "conceitos": [
      "Conceptual",
      "Cute",
      "Teen Crush"
    ],
    "generos": [
      "Experimental",
      "Pop",
      "Rock"
    ]
  },
  {
    "type": "music",
    "id": "myteenagegirldreaming",
    "name": "DREAMING",
    "fonte": "My Teenage Girl",
    "conceitos": [
      "Cute",
      "Dreamcore",
      "Elegant"
    ],
    "generos": [
      "Emotional",
      "R&B",
      "Synthpop"
    ]
  },
  {
    "type": "music",
    "id": "myteenagegirllions",
    "name": "LIONS",
    "fonte": "My Teenage Girl",
    "conceitos": [
      "Elegant",
      "Performance",
      "Swag"
    ],
    "generos": [
      "Experimental",
      "Groove",
      "R&B"
    ]
  },
  {
    "type": "music",
    "id": "myteenagegirlsamesamedifferent",
    "name": "SAME SAME DIFFERENT",
    "fonte": "My Teenage Girl",
    "conceitos": [
      "Girl Crush",
      "Performance",
      "Teen Crush"
    ],
    "generos": [
      "EDM",
      "Experimental",
      "Synthpop"
    ]
  },
  {
    "type": "music",
    "id": "myteenagegirlsonicboom",
    "name": "SONIC BOOM",
    "fonte": "My Teenage Girl",
    "conceitos": [
      "Dark",
      "Girl Crush",
      "Swag"
    ],
    "generos": [
      "Groove",
      "Hip-hop",
      "Synthpop"
    ]
  },
  {
    "type": "music",
    "id": "myteenagegirlsun",
    "name": "SUN",
    "fonte": "My Teenage Girl",
    "conceitos": [
      "Cute",
      "Dreamcore",
      "Swag"
    ],
    "generos": [
      "Groove",
      "Pop",
      "Tropical"
    ]
  },
  {
    "type": "music",
    "id": "niziprojectbabyimastar",
    "name": "Baby I'm a Star",
    "fonte": "Nizi Project",
    "conceitos": [
      "Cute",
      "Performance",
      "Teen Crush"
    ],
    "generos": [
      "Groove",
      "Pop",
      "Rock"
    ]
  },
  {
    "type": "music",
    "id": "niziprojectbeyondtherainbow",
    "name": "Beyond the Rainbow",
    "fonte": "Nizi Project",
    "conceitos": [
      "Dark",
      "Elegant",
      "Performance"
    ],
    "generos": [
      "EDM",
      "Groove",
      "Pop"
    ]
  },
  {
    "type": "music",
    "id": "niziprojectboomboomboom",
    "name": "Boom Boom Boom",
    "fonte": "Nizi Project",
    "conceitos": [
      "Elegant",
      "Performance",
      "Swag"
    ],
    "generos": [
      "EDM",
      "Experimental",
      "Groove"
    ]
  },
  {
    "type": "music",
    "id": "niziprojectmakeyouhappy",
    "name": "Make you happy",
    "fonte": "Nizi Project",
    "conceitos": [
      "Cute",
      "Performance",
      "Teen Crush"
    ],
    "generos": [
      "Experimental",
      "Groove",
      "Pop"
    ]
  },
  {
    "type": "music",
    "id": "produce10124hours",
    "name": "24Hours",
    "fonte": "Produce 101",
    "conceitos": [
      "Conceptual",
      "Mature",
      "Performance"
    ],
    "generos": [
      "EDM",
      "Experimental",
      "Groove"
    ]
  },
  {
    "type": "music",
    "id": "produce101crush",
    "name": "Crush",
    "fonte": "Produce 101",
    "conceitos": [
      "Elegant",
      "Mature",
      "Performance"
    ],
    "generos": [
      "EDM",
      "Groove",
      "Synthpop"
    ]
  },
  {
    "type": "music",
    "id": "produce101dontmatter",
    "name": "Don't Matter",
    "fonte": "Produce 101",
    "conceitos": [
      "Elegant",
      "Mature",
      "Swag"
    ],
    "generos": [
      "Experimental",
      "Groove",
      "Hip-hop"
    ]
  },
  {
    "type": "music",
    "id": "produce101fingertips",
    "name": "FingerTips",
    "fonte": "Produce 101",
    "conceitos": [
      "Cute",
      "Mature",
      "Performance"
    ],
    "generos": [
      "Experimental",
      "Groove",
      "Synthpop"
    ]
  },
  {
    "type": "music",
    "id": "produce101inthesameplace",
    "name": "In The Same Place",
    "fonte": "Produce 101",
    "conceitos": [
      "Conceptual",
      "Dreamcore",
      "Elegant"
    ],
    "generos": [
      "Emotional",
      "R&B",
      "Synthpop"
    ]
  },
  {
    "type": "music",
    "id": "produce101pickme",
    "name": "PICK ME",
    "fonte": "Produce 101",
    "conceitos": [
      "Conceptual",
      "Performance",
      "Teen Crush"
    ],
    "generos": [
      "EDM",
      "Experimental",
      "Groove"
    ]
  },
  {
    "type": "music",
    "id": "produce101yumyum",
    "name": "Yum-Yum",
    "fonte": "Produce 101",
    "conceitos": [
      "Cute",
      "Performance",
      "Teen Crush"
    ],
    "generos": [
      "Groove",
      "Pop",
      "Synthpop"
    ]
  },
  {
    "type": "music",
    "id": "produce101japanthegirlsme",
    "name": "&ME",
    "fonte": "PRODUCE 101 JAPAN THE GIRLS",
    "conceitos": [
      "Cute",
      "Dreamcore",
      "Teen Crush"
    ],
    "generos": [
      "Experimental",
      "Pop",
      "Synthpop"
    ]
  },
  {
    "type": "music",
    "id": "produce101japanthegirlsatoz",
    "name": "AtoZ",
    "fonte": "PRODUCE 101 JAPAN THE GIRLS",
    "conceitos": [
      "Cute",
      "Dreamcore",
      "Teen Crush"
    ],
    "generos": [
      "Groove",
      "Pop",
      "Synthpop"
    ]
  },
  {
    "type": "music",
    "id": "produce101japanthegirlsbaddie",
    "name": "Baddie",
    "fonte": "PRODUCE 101 JAPAN THE GIRLS",
    "conceitos": [
      "Dark",
      "Girl Crush",
      "Swag"
    ],
    "generos": [
      "Experimental",
      "Hip-hop",
      "Synthpop"
    ]
  },
  {
    "type": "music",
    "id": "produce101japanthegirlsleaphigh",
    "name": "LEAP HIGH!",
    "fonte": "PRODUCE 101 JAPAN THE GIRLS",
    "conceitos": [
      "Conceptual",
      "Cute",
      "Teen Crush"
    ],
    "generos": [
      "EDM",
      "Experimental",
      "Groove"
    ]
  },
  {
    "type": "music",
    "id": "produce101japanthegirlspopcorn",
    "name": "Popcorn",
    "fonte": "PRODUCE 101 JAPAN THE GIRLS",
    "conceitos": [
      "Cute",
      "Dreamcore",
      "Performance"
    ],
    "generos": [
      "Groove",
      "Pop",
      "Tropical"
    ]
  },
  {
    "type": "music",
    "id": "produce101japanthegirlstoxic",
    "name": "TOXIC",
    "fonte": "PRODUCE 101 JAPAN THE GIRLS",
    "conceitos": [
      "Dark",
      "Girl Crush",
      "Swag"
    ],
    "generos": [
      "Experimental",
      "Groove",
      "Hip-hop"
    ]
  },
  {
    "type": "music",
    "id": "produce101season2always",
    "name": "Always",
    "fonte": "PRODUCE 101 season2",
    "conceitos": [
      "Conceptual",
      "Dreamcore",
      "Elegant"
    ],
    "generos": [
      "Emotional",
      "R&B",
      "Synthpop"
    ]
  },
  {
    "type": "music",
    "id": "produce101season2handsonme",
    "name": "Hands on Me",
    "fonte": "PRODUCE 101 season2",
    "conceitos": [
      "Elegant",
      "Mature",
      "Performance"
    ],
    "generos": [
      "Groove",
      "Pop",
      "Synthpop"
    ]
  },
  {
    "type": "music",
    "id": "produce101season2iknowyouknow",
    "name": "I Know You Know",
    "fonte": "PRODUCE 101 season2",
    "conceitos": [
      "Cute",
      "Dreamcore",
      "Swag"
    ],
    "generos": [
      "Groove",
      "Pop",
      "Synthpop"
    ]
  },
  {
    "type": "music",
    "id": "produce101season2itsmepickme",
    "name": "It's Me (PICK ME)",
    "fonte": "PRODUCE 101 season2",
    "conceitos": [
      "Conceptual",
      "Dreamcore",
      "Teen Crush"
    ],
    "generos": [
      "EDM",
      "Pop",
      "Synthpop"
    ]
  },
  {
    "type": "music",
    "id": "produce101season2never",
    "name": "NEVER",
    "fonte": "PRODUCE 101 season2",
    "conceitos": [
      "Conceptual",
      "Elegant",
      "Performance"
    ],
    "generos": [
      "Emotional",
      "Experimental",
      "Synthpop"
    ]
  },
  {
    "type": "music",
    "id": "produce101season2ohlittlegirl",
    "name": "Oh Little Girl",
    "fonte": "PRODUCE 101 season2",
    "conceitos": [
      "Cute",
      "Swag",
      "Teen Crush"
    ],
    "generos": [
      "Experimental",
      "Groove",
      "R&B"
    ]
  },
  {
    "type": "music",
    "id": "produce101season2openup",
    "name": "Open Up",
    "fonte": "PRODUCE 101 season2",
    "conceitos": [
      "Dark",
      "Elegant",
      "Mature"
    ],
    "generos": [
      "EDM",
      "Experimental",
      "Groove"
    ]
  },
  {
    "type": "music",
    "id": "produce101season2showtime",
    "name": "Show Time",
    "fonte": "PRODUCE 101 season2",
    "conceitos": [
      "Conceptual",
      "Performance",
      "Teen Crush"
    ],
    "generos": [
      "Groove",
      "Pop",
      "Synthpop"
    ]
  },
  {
    "type": "music",
    "id": "produce101season2superhot",
    "name": "Super Hot",
    "fonte": "PRODUCE 101 season2",
    "conceitos": [
      "Conceptual",
      "Performance",
      "Teen Crush"
    ],
    "generos": [
      "Groove",
      "Hip-hop",
      "Pop"
    ]
  },
  {
    "type": "music",
    "id": "produce481000",
    "name": "1000%",
    "fonte": "PRODUCE48",
    "conceitos": [
      "Conceptual",
      "Cute",
      "Dreamcore"
    ],
    "generos": [
      "Emotional",
      "Pop",
      "Synthpop"
    ]
  },
  {
    "type": "music",
    "id": "produce48aswedream",
    "name": "As We Dream",
    "fonte": "PRODUCE48",
    "conceitos": [
      "Cute",
      "Dreamcore",
      "Elegant"
    ],
    "generos": [
      "Emotional",
      "R&B",
      "Synthpop"
    ]
  },
  {
    "type": "music",
    "id": "produce48iam",
    "name": "IAM",
    "fonte": "PRODUCE48",
    "conceitos": [
      "Dark",
      "Mature",
      "Performance"
    ],
    "generos": [
      "Hip-hop",
      "R&B",
      "Synthpop"
    ]
  },
  {
    "type": "music",
    "id": "produce48nekkoyapickme",
    "name": "NEKKOYA (PICK ME)",
    "fonte": "PRODUCE48",
    "conceitos": [
      "Conceptual",
      "Performance",
      "Teen Crush"
    ],
    "generos": [
      "EDM",
      "Experimental",
      "Pop"
    ]
  },
  {
    "type": "music",
    "id": "produce48rollinrollin",
    "name": "Rollin' Rollin'",
    "fonte": "PRODUCE48",
    "conceitos": [
      "Cute",
      "Dreamcore",
      "Performance"
    ],
    "generos": [
      "Groove",
      "Pop",
      "Tropical"
    ]
  },
  {
    "type": "music",
    "id": "produce48rumor",
    "name": "Rumor",
    "fonte": "PRODUCE48",
    "conceitos": [
      "Dark",
      "Mature",
      "Performance"
    ],
    "generos": [
      "Groove",
      "Hip-hop",
      "Tropical"
    ]
  },
  {
    "type": "music",
    "id": "produce48seeyouagain",
    "name": "See You Again",
    "fonte": "PRODUCE48",
    "conceitos": [
      "Cute",
      "Dreamcore",
      "Elegant"
    ],
    "generos": [
      "Emotional",
      "Pop",
      "R&B"
    ]
  },
  {
    "type": "music",
    "id": "produce48toreachyou",
    "name": "To Reach You",
    "fonte": "PRODUCE48",
    "conceitos": [
      "Cute",
      "Dreamcore",
      "Elegant"
    ],
    "generos": [
      "Groove",
      "Pop",
      "R&B"
    ]
  },
  {
    "type": "music",
    "id": "produce48wetogether",
    "name": "We Together",
    "fonte": "PRODUCE48",
    "conceitos": [
      "Conceptual",
      "Cute",
      "Teen Crush"
    ],
    "generos": [
      "Groove",
      "R&B",
      "Synthpop"
    ]
  },
  {
    "type": "music",
    "id": "produce48youreinlovearentyou",
    "name": "You're In Love, Aren't You?",
    "fonte": "PRODUCE48",
    "conceitos": [
      "Conceptual",
      "Elegant",
      "Performance"
    ],
    "generos": [
      "Experimental",
      "Pop",
      "Synthpop"
    ]
  },
  {
    "type": "music",
    "id": "producex101boyness",
    "name": "Boyness",
    "fonte": "PRODUCE X 101",
    "conceitos": [
      "Dreamcore",
      "Elegant",
      "Mature"
    ],
    "generos": [
      "EDM",
      "Emotional",
      "R&B"
    ]
  },
  {
    "type": "music",
    "id": "producex101dreamforyou",
    "name": "Dream For You",
    "fonte": "PRODUCE X 101",
    "conceitos": [
      "Conceptual",
      "Dreamcore",
      "Elegant"
    ],
    "generos": [
      "Emotional",
      "R&B",
      "Rock"
    ]
  },
  {
    "type": "music",
    "id": "producex101mondaytosunday",
    "name": "Monday to Sunday",
    "fonte": "PRODUCE X 101",
    "conceitos": [
      "Cute",
      "Dreamcore",
      "Elegant"
    ],
    "generos": [
      "Emotional",
      "Pop",
      "Synthpop"
    ]
  },
  {
    "type": "music",
    "id": "producex101move",
    "name": "MOVE",
    "fonte": "PRODUCE X 101",
    "conceitos": [
      "Dark",
      "Mature",
      "Performance"
    ],
    "generos": [
      "EDM",
      "Experimental",
      "Tropical"
    ]
  },
  {
    "type": "music",
    "id": "producex101prettygirl",
    "name": "Pretty Girl",
    "fonte": "PRODUCE X 101",
    "conceitos": [
      "Cute",
      "Dreamcore",
      "Teen Crush"
    ],
    "generos": [
      "Pop",
      "Rock",
      "Synthpop"
    ]
  },
  {
    "type": "music",
    "id": "producex101superspecialgirl",
    "name": "Super Special Girl",
    "fonte": "PRODUCE X 101",
    "conceitos": [
      "Cute",
      "Performance",
      "Teen Crush"
    ],
    "generos": [
      "Groove",
      "Pop",
      "Tropical"
    ]
  },
  {
    "type": "music",
    "id": "producex101tomyworld",
    "name": "To My World",
    "fonte": "PRODUCE X 101",
    "conceitos": [
      "Dark",
      "Mature",
      "Performance"
    ],
    "generos": [
      "Groove",
      "Pop",
      "R&B"
    ]
  },
  {
    "type": "music",
    "id": "producex101ugotit",
    "name": "U GOT IT",
    "fonte": "PRODUCE X 101",
    "conceitos": [
      "Dark",
      "Mature",
      "Performance"
    ],
    "generos": [
      "Experimental",
      "Hip-hop",
      "Tropical"
    ]
  },
  {
    "type": "music",
    "id": "producex101x1ma",
    "name": "X1-MA",
    "fonte": "PRODUCE X 101",
    "conceitos": [
      "Conceptual",
      "Performance",
      "Teen Crush"
    ],
    "generos": [
      "EDM",
      "Experimental",
      "Pop"
    ]
  },
  {
    "type": "music",
    "id": "queendompuzzlebadblood",
    "name": "BAD BLOOD",
    "fonte": "QUEENDOM PUZZLE",
    "conceitos": [
      "Conceptual",
      "Mature",
      "Performance"
    ],
    "generos": [
      "Experimental",
      "Groove",
      "Tropical"
    ]
  },
  {
    "type": "music",
    "id": "queendompuzzlebillionaire",
    "name": "Billionaire",
    "fonte": "QUEENDOM PUZZLE",
    "conceitos": [
      "Girl Crush",
      "Performance",
      "Swag"
    ],
    "generos": [
      "Experimental",
      "Groove",
      "Hip-hop"
    ]
  },
  {
    "type": "music",
    "id": "queendompuzzlecharismatic",
    "name": "Charismatic",
    "fonte": "QUEENDOM PUZZLE",
    "conceitos": [
      "Cute",
      "Performance",
      "Teen Crush"
    ],
    "generos": [
      "Experimental",
      "Groove",
      "Tropical"
    ]
  },
  {
    "type": "music",
    "id": "queendompuzzleglowup",
    "name": "Glow-up",
    "fonte": "QUEENDOM PUZZLE",
    "conceitos": [
      "Girl Crush",
      "Performance",
      "Swag"
    ],
    "generos": [
      "Experimental",
      "Groove",
      "Hip-hop"
    ]
  },
  {
    "type": "music",
    "id": "queendompuzzleidgaidontgivea",
    "name": "i DGA (i DONT GIVE A)",
    "fonte": "QUEENDOM PUZZLE",
    "conceitos": [
      "Girl Crush",
      "Performance",
      "Swag"
    ],
    "generos": [
      "EDM",
      "Experimental",
      "Hip-hop"
    ]
  },
  {
    "type": "music",
    "id": "queendompuzzleido",
    "name": "I Do",
    "fonte": "QUEENDOM PUZZLE",
    "conceitos": [
      "Conceptual",
      "Cute",
      "Dreamcore"
    ],
    "generos": [
      "Experimental",
      "Groove",
      "Pop"
    ]
  },
  {
    "type": "music",
    "id": "queendompuzzlelastpiece",
    "name": "Last Piece",
    "fonte": "QUEENDOM PUZZLE",
    "conceitos": [
      "Dark",
      "Girl Crush",
      "Swag"
    ],
    "generos": [
      "EDM",
      "Experimental",
      "Groove"
    ]
  },
  {
    "type": "music",
    "id": "queendompuzzleoverwater",
    "name": "Overwater",
    "fonte": "QUEENDOM PUZZLE",
    "conceitos": [
      "Conceptual",
      "Dreamcore",
      "Elegant"
    ],
    "generos": [
      "Groove",
      "R&B",
      "Tropical"
    ]
  },
  {
    "type": "music",
    "id": "queendompuzzlepuzzlin",
    "name": "PUZZLIN'",
    "fonte": "QUEENDOM PUZZLE",
    "conceitos": [
      "Cute",
      "Dreamcore",
      "Elegant"
    ],
    "generos": [
      "Groove",
      "Pop",
      "Synthpop"
    ]
  },
  {
    "type": "music",
    "id": "queendompuzzleriseup",
    "name": "RISE UP",
    "fonte": "QUEENDOM PUZZLE",
    "conceitos": [
      "Conceptual",
      "Cute",
      "Elegant"
    ],
    "generos": [
      "Emotional",
      "R&B",
      "Synthpop"
    ]
  },
  {
    "type": "music",
    "id": "queendompuzzlesnap",
    "name": "SNAP",
    "fonte": "QUEENDOM PUZZLE",
    "conceitos": [
      "Dark",
      "Girl Crush",
      "Swag"
    ],
    "generos": [
      "Experimental",
      "Hip-hop",
      "Rock"
    ]
  },
  {
    "type": "music",
    "id": "queendompuzzleweb",
    "name": "WEB",
    "fonte": "QUEENDOM PUZZLE",
    "conceitos": [
      "Dark",
      "Mature",
      "Performance"
    ],
    "generos": [
      "Experimental",
      "Groove",
      "Rock"
    ]
  },
  {
    "type": "music",
    "id": "runextaimhigh",
    "name": "Aim High",
    "fonte": "R U Next?",
    "conceitos": [
      "Cute",
      "Performance",
      "Teen Crush"
    ],
    "generos": [
      "Groove",
      "Pop",
      "Synthpop"
    ]
  },
  {
    "type": "music",
    "id": "runextdesperate",
    "name": "Desperate",
    "fonte": "R U Next?",
    "conceitos": [
      "Dark",
      "Girl Crush",
      "Performance"
    ],
    "generos": [
      "EDM",
      "Experimental",
      "Groove"
    ]
  },
  {
    "type": "music",
    "id": "runextpride",
    "name": "Pride",
    "fonte": "R U Next?",
    "conceitos": [
      "Dark",
      "Girl Crush",
      "Swag"
    ],
    "generos": [
      "EDM",
      "Experimental",
      "Hip-hop"
    ]
  },
  {
    "type": "music",
    "id": "runextrun",
    "name": "R.U.N",
    "fonte": "R U Next?",
    "conceitos": [
      "Conceptual",
      "Dreamcore",
      "Teen Crush"
    ],
    "generos": [
      "Experimental",
      "Groove",
      "Synthpop"
    ]
  },
  {
    "type": "music",
    "id": "runextscrum",
    "name": "Scrum",
    "fonte": "R U Next?",
    "conceitos": [
      "Cute",
      "Performance",
      "Teen Crush"
    ],
    "generos": [
      "Groove",
      "Pop",
      "Synthpop"
    ]
  },
  {
    "type": "music",
    "id": "theunitlastone",
    "name": "Last One",
    "fonte": "THE UNI+",
    "conceitos": [
      "Conceptual",
      "Performance",
      "Teen Crush"
    ],
    "generos": [
      "EDM",
      "Experimental",
      "Groove"
    ]
  },
  {
    "type": "music",
    "id": "theunitmyturn",
    "name": "My Turn",
    "fonte": "THE UNI+",
    "conceitos": [
      "Conceptual",
      "Elegant",
      "Mature"
    ],
    "generos": [
      "Groove",
      "Pop",
      "Tropical"
    ]
  },
  {
    "type": "music",
    "id": "theunitshine",
    "name": "Shine",
    "fonte": "THE UNI+",
    "conceitos": [
      "Conceptual",
      "Cute",
      "Dreamcore"
    ],
    "generos": [
      "Pop",
      "Synthpop",
      "Tropical"
    ]
  },
  {
    "type": "music",
    "id": "universeticketcamera",
    "name": "Camera",
    "fonte": "Universe Ticket",
    "conceitos": [
      "Cute",
      "Swag",
      "Teen Crush"
    ],
    "generos": [
      "Experimental",
      "Hip-hop",
      "Pop"
    ]
  },
  {
    "type": "music",
    "id": "universeticketcomewithmeuniverse",
    "name": "Come with me? (Universe)",
    "fonte": "Universe Ticket",
    "conceitos": [
      "Conceptual",
      "Cute",
      "Dreamcore"
    ],
    "generos": [
      "Pop",
      "Rock",
      "Synthpop"
    ]
  },
  {
    "type": "music",
    "id": "universeticketdopamine",
    "name": "DOPAMINE",
    "fonte": "Universe Ticket",
    "conceitos": [
      "Dark",
      "Girl Crush",
      "Performance"
    ],
    "generos": [
      "Experimental",
      "Rock",
      "Synthpop"
    ]
  },
  {
    "type": "music",
    "id": "universeticketdreamofgirls",
    "name": "Dream of Girls",
    "fonte": "Universe Ticket",
    "conceitos": [
      "Conceptual",
      "Cute",
      "Dreamcore"
    ],
    "generos": [
      "Emotional",
      "Experimental",
      "Synthpop"
    ]
  },
  {
    "type": "music",
    "id": "universeticketrushhour",
    "name": "Rush Hour",
    "fonte": "Universe Ticket",
    "conceitos": [
      "Dark",
      "Girl Crush",
      "Swag"
    ],
    "generos": [
      "Experimental",
      "Groove",
      "Hip-hop"
    ]
  },
  {
    "type": "music",
    "id": "universetickettickettoyou",
    "name": "Ticket to You",
    "fonte": "Universe Ticket",
    "conceitos": [
      "Conceptual",
      "Cute",
      "Dreamcore"
    ],
    "generos": [
      "EDM",
      "Pop",
      "Synthpop"
    ]
  },
  {
    "type": "music",
    "id": "universeticketwhateva",
    "name": "WHATEVA",
    "fonte": "Universe Ticket",
    "conceitos": [
      "Cute",
      "Swag",
      "Teen Crush"
    ],
    "generos": [
      "Experimental",
      "Groove",
      "Pop"
    ]
  },
  {
    "type": "music",
    "id": "universeticketyummyyum",
    "name": "Yummy Yum",
    "fonte": "Universe Ticket",
    "conceitos": [
      "Dark",
      "Girl Crush",
      "Swag"
    ],
    "generos": [
      "Experimental",
      "Groove",
      "Hip-hop"
    ]
  }
];

//data:producers
const producers = [
  {
    "type": "producer",
    "id": "producer13kor",
    "name": "13 (KOR)",
    "conceitos": [
      "Dark",
      "Mature",
      "Performance"
    ],
    "generos": [
      "EDM",
      "Rock",
      "Synthpop"
    ],
    "musicas": [
      "LE SSERAFIM - FEARLESS",
      "PRODUCE8 - Rumor",
      "LE SSERAFIM - Eve, Psyche and the Bluebeard's wife",
      "TAEMIN - Criminal",
      "BTOB - I'll be your man"
    ]
  },
  {
    "type": "producer",
    "id": "producerartiffect",
    "name": "ARTiffect",
    "conceitos": [
      "Elegant",
      "Girl Crush",
      "Performance"
    ],
    "generos": [
      "Experimental",
      "Groove",
      "Rock"
    ],
    "musicas": [
      "NMIXX - KNOW ABOUT ME",
      "Red Velvet - Feel My Rythm",
      "KAI - Peaches",
      "RIIZE - Get A Guitar",
      "SEVENTEEN - MAESTRO"
    ]
  },
  {
    "type": "producer",
    "id": "producerartronicwaves",
    "name": "Artronic Waves",
    "conceitos": [
      "Conceptual",
      "Dark",
      "Teen Crush"
    ],
    "generos": [
      "EDM",
      "Emotional",
      "Synthpop"
    ],
    "musicas": [
      "tripleS - Rising",
      "LOONA Olivia Hye - Egoist",
      "ARTMS - Icarus",
      "LOONA Hyunjin - Around You",
      "LOONA Haseul - Let Me In"
    ]
  },
  {
    "type": "producer",
    "id": "producerblackeyedpilseung",
    "name": "Black Eyed Pilseung",
    "conceitos": [
      "Cute",
      "Dreamcore",
      "Teen Crush"
    ],
    "generos": [
      "Emotional",
      "Pop",
      "R&B"
    ],
    "musicas": [
      "TWICE - LIKEY",
      "ITZY - CAKE",
      "STAYC - STEREOTYPE",
      "CHUNG HA - Gotta Go",
      "Apink - I'm so sick"
    ]
  },
  {
    "type": "producer",
    "id": "producerbravesound",
    "name": "Brave Sound",
    "conceitos": [
      "Cute",
      "Elegant",
      "Mature"
    ],
    "generos": [
      "Groove",
      "Pop",
      "Tropical"
    ],
    "musicas": [
      "AOA - Miniskirt",
      "SISTAR19 - Ma Boy",
      "Brave Girls - Rollin'",
      "BIGBANG - LIES",
      "HyunA - Ice Cream"
    ]
  },
  {
    "type": "producer",
    "id": "producercsashinsia",
    "name": "C'SA (Shin Sia)",
    "conceitos": [
      "Girl Crush",
      "Mature",
      "Teen Crush"
    ],
    "generos": [
      "Groove",
      "Pop",
      "R&B"
    ],
    "musicas": [
      "IVE - BANG BANG",
      "NMIXX - Blue Valentine",
      "fromis_9 - Supersonic",
      "VIVIZ - MANIAC",
      "Loossemble - Sensitive"
    ]
  },
  {
    "type": "producer",
    "id": "producercazziopeia",
    "name": "Cazzi Opeia",
    "conceitos": [
      "Cute",
      "Dark",
      "Teen Crush"
    ],
    "generos": [
      "EDM",
      "Pop",
      "Synthpop"
    ],
    "musicas": [
      "TXT - LO$ER = LOVER",
      "Red Velvet - Pick-A-Boo",
      "ILLIT - Do the Dance",
      "ENHYPEN - Given-Taken",
      "TWICE - Dance The Night Away"
    ]
  },
  {
    "type": "producer",
    "id": "producerdemjointz",
    "name": "Dem Jointz",
    "conceitos": [
      "Girl Crush",
      "Performance",
      "Swag"
    ],
    "generos": [
      "EDM",
      "Experimental",
      "Hip-hop"
    ],
    "musicas": [
      "aespa - Supernova",
      "NCT 127 - Kick It",
      "IVE - HEYA",
      "SHINee - Don't Call Me",
      "A2O LITE - NEON"
    ]
  },
  {
    "type": "producer",
    "id": "producerdevinechannel",
    "name": "Devine Channel",
    "conceitos": [
      "Elegant",
      "Performance",
      "Swag"
    ],
    "generos": [
      "EDM",
      "Experimental",
      "Hip-hop"
    ],
    "musicas": [
      "BTS - FIRE",
      "KANGDANIEL - What are you up to",
      "TAEYONG - SHALALA",
      "VIXX - Shangri-La",
      "PRODUCE 101 season2 - Open Up"
    ]
  },
  {
    "type": "producer",
    "id": "producerdublesidekick",
    "name": "Duble Sidekick",
    "conceitos": [
      "Cute",
      "Mature",
      "Performance"
    ],
    "generos": [
      "Groove",
      "Pop",
      "Tropical"
    ],
    "musicas": [
      "SISTAR - Loving U",
      "Girl's Day - Something",
      "MAMAMOO - You're the best",
      "Apink - Mr. Chu",
      "MOMOLAND - Wonderful love"
    ]
  },
  {
    "type": "producer",
    "id": "produceretribe",
    "name": "E-Tribe",
    "conceitos": [
      "Cute",
      "Performance",
      "Teen Crush"
    ],
    "generos": [
      "EDM",
      "Groove",
      "Pop"
    ],
    "musicas": [
      "Girls' Generation - Gee",
      "Lee Hyori feat. Nassun - U-Go-Girl",
      "SUPER JUNIOR - It's You",
      "miss A - Hush",
      "T-ARA - yayaya"
    ]
  },
  {
    "type": "producer",
    "id": "producereone",
    "name": "e.one",
    "conceitos": [
      "Cute",
      "Dreamcore",
      "Elegant"
    ],
    "generos": [
      "Emotional",
      "Groove",
      "Synthpop"
    ],
    "musicas": [
      "ME:I - MUSE",
      "Wanna One - Wanna",
      "WJSN (COSMIC GIRLS) - Secret",
      "APRIL - April Story",
      "KickFlip - Like A Monster"
    ]
  },
  {
    "type": "producer",
    "id": "producerelcapitxn",
    "name": "EL CAPITXN",
    "conceitos": [
      "Conceptual",
      "Dark",
      "Performance"
    ],
    "generos": [
      "Hip-hop",
      "Rock",
      "Synthpop"
    ],
    "musicas": [
      "IU feat. SUGA - eight",
      "Agust D - Daecwhita",
      "PLAVE - Dash",
      "tripleS - Girls Never Die",
      "TXT - Drama"
    ]
  },
  {
    "type": "producer",
    "id": "producerfull8loom",
    "name": "Full8loom",
    "conceitos": [
      "Cute",
      "Dreamcore",
      "Elegant"
    ],
    "generos": [
      "Groove",
      "Pop",
      "Synthpop"
    ],
    "musicas": [
      "GOT7 - Lullaby",
      "WJSN (COSMIC GIRLS) - SAVE ME, SAVE YOU",
      "TWICE - The Best Thing I Ever Did",
      "Kep1er - Up!",
      "IZ*ONE - D-D-DANCE"
    ]
  },
  {
    "type": "producer",
    "id": "producergalactika",
    "name": "GALACTIKA*",
    "conceitos": [
      "Girl Crush",
      "Performance",
      "Teen Crush"
    ],
    "generos": [
      "EDM",
      "Pop",
      "Rock"
    ],
    "musicas": [
      "ITZY - DALLA DALLA",
      "ITZY - WANNABE",
      "ITZY - LOCO",
      "LIGHTSUM - ALIVE",
      "BAE173 - Crush on U"
    ]
  },
  {
    "type": "producer",
    "id": "producerjadenjeong",
    "name": "Jaden Jeong",
    "conceitos": [
      "Conceptual",
      "Dreamcore",
      "Performance"
    ],
    "generos": [
      "Experimental",
      "Groove",
      "Synthpop"
    ],
    "musicas": [
      "LOONA - Butterfly",
      "LOONA - Hi High",
      "tripleS AAA - Generation",
      "tripleS - Rising",
      "ARTMS - Virtual Angel"
    ]
  },
  {
    "type": "producer",
    "id": "producerjamfactory",
    "name": "JamFactory",
    "conceitos": [
      "Cute",
      "Girl Crush",
      "Performance"
    ],
    "generos": [
      "EDM",
      "Groove",
      "Pop"
    ],
    "musicas": [
      "EXO - Growl",
      "Red Velvet - Dumb Dumb",
      "NCT 127 - TOUCH",
      "NCT DREAM - Hot Sauce",
      "Girls' Generation - Lion Heart"
    ]
  },
  {
    "type": "producer",
    "id": "producerjoombasmusicgroup",
    "name": "Joombas Music Group",
    "conceitos": [
      "Girl Crush",
      "Performance",
      "Teen Crush"
    ],
    "generos": [
      "EDM",
      "Experimental",
      "Pop"
    ],
    "musicas": [
      "aespa - Drama",
      "aespa - Armageddon",
      "ITZY - ICY",
      "NMIXX - O.O",
      "ILLIT - Lucky Girl Syndrome"
    ]
  },
  {
    "type": "producer",
    "id": "producerjyp",
    "name": "JYP",
    "conceitos": [
      "Cute",
      "Performance",
      "Teen Crush"
    ],
    "generos": [
      "Groove",
      "Pop",
      "R&B"
    ],
    "musicas": [
      "Wonder Girls - Tell Me",
      "TWICE - What is Love?",
      "miss A - Bad Girl, Good Girl",
      "2PM - Heartbeat",
      "TWICE - Signal"
    ]
  },
  {
    "type": "producer",
    "id": "producerkenzie",
    "name": "Kenzie",
    "conceitos": [
      "Cute",
      "Dark",
      "Swag"
    ],
    "generos": [
      "EDM",
      "Pop",
      "R&B"
    ],
    "musicas": [
      "aespa - Supernova",
      "Red Velvet - Red Flavor",
      "Red Velvet - Psycho",
      "Girls' Generation - Into the New World",
      "EXO - Monster"
    ]
  },
  {
    "type": "producer",
    "id": "producerkush",
    "name": "KUSH",
    "conceitos": [
      "Girl Crush",
      "Performance",
      "Swag"
    ],
    "generos": [
      "Hip-hop",
      "R&B",
      "Tropical"
    ],
    "musicas": [
      "2NE1 - I DON'T CARE",
      "Saja Boys - Soda Pop",
      "Saja Boys - Your Idol",
      "JISOO - FLOWER",
      "TAEYANG feat. LISA - Shoong!"
    ]
  },
  {
    "type": "producer",
    "id": "producerlalalastudio",
    "name": "lalala studio",
    "conceitos": [
      "Dark",
      "Girl Crush",
      "Teen Crush"
    ],
    "generos": [
      "Experimental",
      "Rock",
      "Synthpop"
    ],
    "musicas": [
      "ILLIT - Magnetic",
      "LE SSERAFIM - ANTIFRAGILE",
      "TXT feat. Seori -  0X1=LOVESONG (I Know I Love You)",
      "ENHYPEN - FEVER",
      "ENHYPEN - Drunk-Dazed"
    ]
  },
  {
    "type": "producer",
    "id": "producerldnnoise",
    "name": "LDN Noise",
    "conceitos": [
      "Girl Crush",
      "Performance",
      "Swag"
    ],
    "generos": [
      "EDM",
      "Groove",
      "Synthpop"
    ],
    "musicas": [
      "SHINee - View",
      "f(x) - 4 Walls",
      "EXO - Lotto",
      "NCT 127 - Fire Truck",
      "KiiiKiii - 404 (New Era)"
    ]
  },
  {
    "type": "producer",
    "id": "producerleesooman",
    "name": "Lee Sooman",
    "conceitos": [
      "Conceptual",
      "Cute",
      "Performance"
    ],
    "generos": [
      "EDM",
      "Experimental",
      "Pop"
    ],
    "musicas": [
      "aespa - Next Level",
      "SuperM - Jopping",
      "Girls' Generation - FOREVER 1",
      "Girls' Generation - Genie",
      "Red Velvet - Happiness"
    ]
  },
  {
    "type": "producer",
    "id": "producerleezollounder",
    "name": "LEEZ & Ollounder",
    "conceitos": [
      "Conceptual",
      "Dark",
      "Performance"
    ],
    "generos": [
      "EDM",
      "Hip-hop",
      "Rock"
    ],
    "musicas": [
      "Dreamcatcher - BOCA",
      "Dreamcatcher - Scream",
      "ATEEZ - WONDERLAND",
      "ATEEZ - Answer",
      "ifeye - NERDY"
    ]
  },
  {
    "type": "producer",
    "id": "producermonotree",
    "name": "MonoTree",
    "conceitos": [
      "Conceptual",
      "Dreamcore",
      "Elegant"
    ],
    "generos": [
      "Emotional",
      "Pop",
      "Synthpop"
    ],
    "musicas": [
      "LOONA - Butterfly",
      "ONF - Beautiful Beautiful",
      "X1 - FLASH",
      "OH MY GIRL - Twilight",
      "IVE - Kitsch"
    ]
  },
  {
    "type": "producer",
    "id": "producermoonshine",
    "name": "Moonshine",
    "conceitos": [
      "Cute",
      "Girl Crush",
      "Performance"
    ],
    "generos": [
      "EDM",
      "Groove",
      "Synthpop"
    ],
    "musicas": [
      "TWICE - Dance The Night Away",
      "Red Velvet - Peek-A-Boo",
      "Red Velvet IRENE & SEULGI - Naughty",
      "aespa - Spicy",
      "TWICE - FANCY"
    ]
  },
  {
    "type": "producer",
    "id": "producermumwmakeumineworks",
    "name": "MUMW (Makeumine Works)",
    "conceitos": [
      "Dark",
      "Performance",
      "Teen Crush"
    ],
    "generos": [
      "Pop",
      "Rock",
      "Synthpop"
    ],
    "musicas": [
      "NCT 127 - Simon Says",
      "STAYC - POPPY",
      "BOYS PLANET - Switch",
      "YENA - Lxxk 2 U",
      "ITZY - Boys Like You"
    ]
  },
  {
    "type": "producer",
    "id": "producernine",
    "name": "NiNE",
    "conceitos": [
      "Dreamcore",
      "Girl Crush",
      "Performance"
    ],
    "generos": [
      "EDM",
      "Groove",
      "Hip-hop"
    ],
    "musicas": [
      "BABYMONSTER - CHOOM",
      "Billlie - ZAP",
      "PRODUCE 101 JAPAN THE GIRLS - Baddie",
      "WJSN (COSMIC GIRLS) - Bloom Hour",
      "TREASURE - DARARI"
    ]
  },
  {
    "type": "producer",
    "id": "produceronclassa",
    "name": "ONCLASSA",
    "conceitos": [
      "Dreamcore",
      "Girl Crush",
      "Performance"
    ],
    "generos": [
      "EDM",
      "Experimental",
      "R&B"
    ],
    "musicas": [
      "NMIXX - Love Me Like This",
      "ifeye - Hazy (Daisy)",
      "NMIXX - DASH",
      "ALPHA DRIVE ONE - BORN DIRE",
      "ASTRO - Twilight"
    ]
  },
  {
    "type": "producer",
    "id": "producerpapermaker",
    "name": "Papermaker",
    "conceitos": [
      "Conceptual",
      "Girl Crush",
      "Performance"
    ],
    "generos": [
      "EDM",
      "R&B",
      "Synthpop"
    ],
    "musicas": [
      "BOYS PLANET - Here I Am",
      "VIVIZ - BOP BOP",
      "Girls Planet 999 - Snake",
      "Universe Ticket - Rush Hour",
      "Wanna One - Beautiful"
    ]
  },
  {
    "type": "producer",
    "id": "producerpdogg",
    "name": "Pdogg",
    "conceitos": [
      "Dreamcore",
      "Performance",
      "Teen Crush"
    ],
    "generos": [
      "Pop",
      "R&B",
      "Synthpop"
    ],
    "musicas": [
      "BTS - FAKE LOVE",
      "TXT - CROWN",
      "NAYEON - ABCD",
      "BTS - Boy With Luv",
      "ILLIT - Almond Chocolate"
    ]
  },
  {
    "type": "producer",
    "id": "producerrbw",
    "name": "RBW",
    "conceitos": [
      "Dark",
      "Elegant",
      "Girl Crush"
    ],
    "generos": [
      "Groove",
      "R&B",
      "Synthpop"
    ],
    "musicas": [
      "MAMAMOO - HIP",
      "MAMAMOO - Starry Night",
      "MAMAMOO - Decalcomanie",
      "ONEUS - Valkyrie",
      "Cherry Bullet - Love So Sweet"
    ]
  },
  {
    "type": "producer",
    "id": "producerryansjhun",
    "name": "Ryan S. Jhun",
    "conceitos": [
      "Dreamcore",
      "Elegant",
      "Teen Crush"
    ],
    "generos": [
      "EDM",
      "Pop",
      "Synthpop"
    ],
    "musicas": [
      "IVE - After LIKE",
      "OH MY GIRL - Dun Dun Dance",
      "IVE - LOVE DIVE",
      "IU - Celebrity",
      "TAEYEON feat. Verbal Jint - I"
    ]
  },
  {
    "type": "producer",
    "id": "producersaay",
    "name": "Saay",
    "conceitos": [
      "Elegant",
      "Girl Crush",
      "Mature"
    ],
    "generos": [
      "EDM",
      "Pop",
      "R&B"
    ],
    "musicas": [
      "VIVIZ - LOVEADE",
      "BAEKHYUN - Bambi",
      "aespa - YEPPI YEPPI",
      "BoA - ZIP",
      "Hearts2Hearts - Pretty Please"
    ]
  },
  {
    "type": "producer",
    "id": "producershinsadongtiger",
    "name": "Shinsadong Tiger",
    "conceitos": [
      "Cute",
      "Girl Crush",
      "Mature"
    ],
    "generos": [
      "EDM",
      "Groove",
      "Pop"
    ],
    "musicas": [
      "EXID - UP&DOWN",
      "MOMOLAND - BBoom BBoom",
      "T-ARA - Roly-Poly",
      "BEAST - FICTION",
      "Apink - NoNoNo"
    ]
  },
  {
    "type": "producer",
    "id": "producersweetune",
    "name": "Sweetune",
    "conceitos": [
      "Cute",
      "Performance",
      "Teen Crush"
    ],
    "generos": [
      "Groove",
      "Pop",
      "Synthpop"
    ],
    "musicas": [
      "KARA - Mister",
      "KARA - Pretty Girl",
      "Rainbow - A",
      "Lovelyz - That day",
      "KARA - STEP"
    ]
  },
  {
    "type": "producer",
    "id": "producerteddy",
    "name": "Teddy",
    "conceitos": [
      "Girl Crush",
      "Performance",
      "Swag"
    ],
    "generos": [
      "EDM",
      "Hip-hop",
      "Pop"
    ],
    "musicas": [
      "BLACKPINK - DDU-DU DDU-DU",
      "2NE1 - I AM THE BEST",
      "BIGBANG - BANG BANG BANG",
      "HUNTRX - Golden",
      "MEOVV - HANDS UP"
    ]
  },
  {
    "type": "producer",
    "id": "producerthemuze",
    "name": "The Muze",
    "conceitos": [
      "Cute",
      "Dreamcore",
      "Teen Crush"
    ],
    "generos": [
      "Pop",
      "R&B",
      "Synthpop"
    ],
    "musicas": [
      "RESCENE - LOVE ATTACK",
      "RESCENE - Glow Up",
      "RESCENE - Bloom",
      "RESCENE - UhUh",
      "RESCENE - Pinball"
    ]
  },
  {
    "type": "producer",
    "id": "producervendors",
    "name": "VENDORS",
    "conceitos": [
      "Conceptual",
      "Dreamcore",
      "Performance"
    ],
    "generos": [
      "Groove",
      "R&B",
      "Synthpop"
    ],
    "musicas": [
      "tripleS - Girls Never Die",
      "tripleS LOVElution - Girls' Capitalism",
      "GOT7 - ECLIPSE",
      "PSY feat. SUGA - That That",
      "Universe Ticket - Dream of Girls"
    ]
  },
  {
    "type": "producer",
    "id": "producervvn",
    "name": "VVN",
    "conceitos": [
      "Conceptual",
      "Dreamcore",
      "Elegant"
    ],
    "generos": [
      "Groove",
      "R&B",
      "Synthpop"
    ],
    "musicas": [
      "I-LAND2 - IWALY",
      "I.O.I - Suddenly",
      "ALLDAY PROJECT - ONE MORE TIME",
      "izna - SIGN",
      "Baby DONT Cry - I DONT CARE"
    ]
  },
  {
    "type": "producer",
    "id": "produceryg",
    "name": "YG",
    "conceitos": [
      "Girl Crush",
      "Performance",
      "Swag"
    ],
    "generos": [
      "EDM",
      "Hip-hop",
      "Pop"
    ],
    "musicas": [
      "BABYMONSTER - DRIP",
      "BABYMONSTER - SHEESH",
      "G-DRAGON - Without You",
      "PSY - GANGNAM STYLE",
      "BABYMONSTER - BATTER UP"
    ]
  }
];