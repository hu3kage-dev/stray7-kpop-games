//variáveis
let filtroGeracao = {
  gen4: true,
  gen5: true
};

//f:irParaDraft
function irParaDraft() {
  window.location.href = "draftconfig.html";
}

//f:modoEmDesenvolvimento
function modoEmDesenvolvimento() {
  alert("Este modo de jogo ainda está em desenvolvimento.");
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

//f:criarInputsJogadores
function criarInputsJogadores() {
  const container = document.getElementById("playersContainer");
  container.innerHTML = "";
  let qtd = parseInt(document.getElementById("playerCount").value);
  for (let i = 1; i <= qtd; i++) {
    let input = document.createElement("input");
    input.placeholder = "Nome do jogador " + i;
    input.className = "playerNameInput";
    container.appendChild(input);
    container.appendChild(document.createElement("br"));
  }
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
    .forEach(cb => cb.checked = true);
}

//f:desmarcarTodasMusicas
function desmarcarTodasMusicas() {
  document.querySelectorAll("#musicContainer input[type='checkbox']")
    .forEach(cb => cb.checked = false);
}

//f:renderizarGrupos
function renderizarGrupos() {
  const container = document.getElementById("groupsContainer");
  container.innerHTML = "";
  const grupos = agruparPorGrupo(idols);
  for (let nomeGrupo in grupos) {
    // Filtrar idols do grupo por geração
    const idolsFiltrados = grupos[nomeGrupo].filter(idol => {
      if (idol.gen === "4" && filtroGeracao.gen4) return true;
      if (idol.gen === "5" && filtroGeracao.gen5) return true;
      return false;
    });
    //se não há idols filtrados para este grupo, pular
    if (idolsFiltrados.length === 0) continue;
    let divGrupo = document.createElement("div");
    let checkboxGrupo = document.createElement("input");
    checkboxGrupo.type = "checkbox";
    checkboxGrupo.checked = true;
    let labelGrupo = document.createElement("label");
    labelGrupo.innerText = " " + nomeGrupo;
    divGrupo.appendChild(checkboxGrupo);
    divGrupo.appendChild(labelGrupo);
    let listaIdolsCheckbox = [];
    idolsFiltrados.forEach(idol => {
      let divIdol = document.createElement("div");
      let checkboxIdol = document.createElement("input");
      checkboxIdol.type = "checkbox";
      checkboxIdol.checked = true;
      checkboxIdol.value = idol.id;
      listaIdolsCheckbox.push(checkboxIdol);
      checkboxIdol.addEventListener("change", () => {
        let todosMarcados = true;
        let nenhumMarcado = true;
        listaIdolsCheckbox.forEach(cb => {
          if (cb.checked) {
            nenhumMarcado = false;
          } else {
            todosMarcados = false;
          }
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
      let labelIdol = document.createElement("label");
      labelIdol.innerText = " " + idol.name;
      divIdol.appendChild(checkboxIdol);
      divIdol.appendChild(labelIdol);
      divIdol.style.marginLeft = "15px";
      divGrupo.appendChild(divIdol);
    });
    checkboxGrupo.addEventListener("change", () => {
      listaIdolsCheckbox.forEach(cb => {
        cb.checked = checkboxGrupo.checked;
      });
      checkboxGrupo.indeterminate = false;
    });
    container.appendChild(divGrupo);
  }
}

//f:renderizarProdutores
function renderizarProdutores() {
  const container = document.getElementById("producerContainer");
  container.innerHTML = "";
  producers.forEach(p => {
    let div = document.createElement("div");
    let cb = document.createElement("input");
    cb.type = "checkbox";
    cb.checked = true;
    cb.value = p.name;
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
  musics.forEach(m => {
    let div = document.createElement("div");
    let cb = document.createElement("input");
    cb.type = "checkbox";
    cb.checked = true;
    cb.value = m.name;
    let label = document.createElement("label");
    label.innerText = " " + m.name;
    div.appendChild(cb);
    div.appendChild(label);
    container.appendChild(div);
  });
}

//f:pegarMusicasSelecionadas
function pegarMusicasSelecionadas() {
  let selecionados = [];
  document.querySelectorAll("#musicContainer input[type='checkbox']").forEach(cb => {
    if (cb.checked && cb.value) {
      let music = musics.find(m => m.name === cb.value);
      if (music) selecionados.push(music);
    }
  });
  return selecionados;
}

//f:pegarIdolsSelecionados
function pegarIdolsSelecionados() {
  let selecionados = [];
  const checkboxes = document.querySelectorAll("#groupsContainer input[type='checkbox']");
  checkboxes.forEach(cb => {
    if (cb.checked && cb.value) {
      let idol = idols.find(i => i.id === cb.value);
      if (idol) selecionados.push(idol);
    }
  });
  return selecionados;
}

//f:pegarProdutoresSelecionados
function pegarProdutoresSelecionados() {
  let selecionados = [];
  document.querySelectorAll("#producerContainer input[type='checkbox']").forEach(cb => {
    if (cb.checked && cb.value) {
      let producer = producers.find(p => p.name === cb.value);
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

//f:pegarProdutoresSelecionados
function pegarProdutoresSelecionados() {
  let selecionados = [];
  const checkboxes = document.querySelectorAll("#producerContainer input[type='checkbox']");
  checkboxes.forEach(cb => {
    if (cb.checked && cb.value) {
      let producer = producers.find(p => p.name === cb.value);
      if (producer) selecionados.push(producer);
    }
  });
  return selecionados;
}

//f:pegarMusicasSelecionadas
function pegarMusicasSelecionadas() {
  let selecionados = [];
  const checkboxes = document.querySelectorAll("#musicContainer input[type='checkbox']");
  checkboxes.forEach(cb => {
    if (cb.checked && cb.value) {
      let music = musics.find(m => m.name === cb.value);
      if (music) selecionados.push(music);
    }
  });
  return selecionados;
}

//f:iniciarDraft
function iniciarDraft() {
  let jogadores = [];
  let inputs = document.querySelectorAll(".playerNameInput");
  inputs.forEach(input => {
    if (input.value.trim()) {
      jogadores.push(input.value.trim());
    }
  });
  let integrantes = parseInt(document.getElementById("idolCount").value);
  let musicasSelecionadas = pegarMusicasSelecionadas();
  let produtoresSelecionados = pegarProdutoresSelecionados();
  let usarMusica = musicasSelecionadas.length > 0;
  let usarProdutor = produtoresSelecionados.length > 0;
  let pool = [];
  //idols
  let selecionados = pegarIdolsSelecionados();
  let totalIdols = jogadores.length * integrantes;
  pool = pool.concat(sortearIdols(selecionados, totalIdols));
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
  //garantir idol type
  pool = pool.map(item => ({
    ...item,
    type: item.type || "idol"
  }));
  localStorage.setItem("draftData", JSON.stringify({
    jogadores,
    integrantes,
    pool,
    usarMusica,
    usarProdutor
  }));
  window.location.href = "draftgame.html";
}

//f:aplicarFiltroGeracao
function aplicarFiltroGeracao() {
  const gen4Checked = document.getElementById("gen4Filter")?.checked || false;
  const gen5Checked = document.getElementById("gen5Filter")?.checked || false;
  
  filtroGeracao.gen4 = gen4Checked;
  filtroGeracao.gen5 = gen5Checked;
  
  renderizarGrupos();
}

//f:marcarTodosGeracoes
function marcarTodosGeracoes() {
  const checkboxes = document.querySelectorAll("#groupsContainer input[type='checkbox'][value]");
  checkboxes.forEach(cb => {
    cb.checked = true;
  });
  atualizarCheckboxesGrupo();
}

//f:desmarcarTodosGeracoes
function desmarcarTodosGeracoes() {
  const checkboxes = document.querySelectorAll("#groupsContainer input[type='checkbox'][value]");
  checkboxes.forEach(cb => {
    cb.checked = false;
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

//inicializar
window.onload = function () {
  renderizarGrupos();
  renderizarProdutores();
  renderizarMusicas();
};

//tá lendo isso por quê, curioso?