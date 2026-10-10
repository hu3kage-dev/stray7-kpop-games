// ========================
// FEEDBACK — envio do formulário
// ========================
// Isolado numa IIFE para não colidir com os globais de pages-script.js.
// Depende de t() e currentLanguage (pages-script.js) e de TRANSLATIONS (translations.js).
(function () {

  // --- CONFIGURAÇÃO -------------------------------------------------------
  // Site estático não envia e-mail sozinho: o envio é feito por um serviço de formulários
  // (Formspree). O destinatário (stray7team@gmail.com) é configurado na conta do serviço.
  const FEEDBACK_ENDPOINT = "https://formspree.io/f/mvkzrgnj";
  // Considera "configurado" só um endpoint no formato real do Formspree (e não o texto de exemplo).
  const ENDPOINT_CONFIGURADO = /^https:\/\/formspree\.io\/f\/(?!SEU_ID_AQUI$)[A-Za-z0-9]+$/.test(FEEDBACK_ENDPOINT);
  const TIMEOUT_MS = 15000;
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  const form = document.getElementById("feedbackForm");
  if (!form) return;

  const status    = document.getElementById("feedbackStatus");
  const submitBtn = document.getElementById("feedbackSubmit");
  const honeypot  = form.querySelector('[name="_gotcha"]');
  let enviando = false;

  // Mapa { name, email, message } -> { div, input, erro }
  const campos = {};
  form.querySelectorAll(".feedback-field").forEach(div => {
    campos[div.dataset.field] = {
      div,
      input: div.querySelector("input, textarea"),
      erro:  div.querySelector(".feedback-error")
    };
  });

  // --- MENSAGENS TRADUZÍVEIS ---------------------------------------------
  // Guardam a chave em data-i18n: ao trocar de idioma, aplicarIdioma() retraduz sozinho.
  //f:mostrarMensagem
  function mostrarMensagem(el, chave) {
    el.dataset.i18n = chave;
    el.textContent = t(chave);
    el.hidden = false;
  }

  //f:limparMensagem
  function limparMensagem(el) {
    delete el.dataset.i18n;
    el.textContent = "";
    el.hidden = true;
  }

  //f:mostrarStatus
  function mostrarStatus(tipo, chave) {
    status.className = "feedback-status " + tipo;
    mostrarMensagem(status, chave);
  }

  //f:limparStatus
  function limparStatus() {
    status.className = "feedback-status";
    limparMensagem(status);
  }

  // --- VALIDAÇÃO ----------------------------------------------------------
  //f:marcarInvalido
  function marcarInvalido(campo, chave) {
    campo.div.classList.add("invalid");
    campo.input.setAttribute("aria-invalid", "true");
    mostrarMensagem(campo.erro, chave);
  }

  //f:limparInvalido
  function limparInvalido(campo) {
    campo.div.classList.remove("invalid");
    campo.input.removeAttribute("aria-invalid");
    limparMensagem(campo.erro);
  }

  //f:validar
  function validar() {
    const regras = [
      { campo: campos.name,    chave: "feedback_err_name",    ok: v => v.length > 0 },
      { campo: campos.email,   chave: "feedback_err_email",   ok: v => EMAIL_RE.test(v) },
      { campo: campos.message, chave: "feedback_err_message", ok: v => v.length > 0 }
    ];
    let primeiroInvalido = null;
    regras.forEach(({ campo, chave, ok }) => {
      limparInvalido(campo);
      if (!ok(campo.input.value.trim())) {
        marcarInvalido(campo, chave);
        if (!primeiroInvalido) primeiroInvalido = campo.input;
      }
    });
    if (primeiroInvalido) primeiroInvalido.focus();
    return !primeiroInvalido;
  }

  // --- ENVIO --------------------------------------------------------------
  //f:setEnviando
  function setEnviando(valor) {
    enviando = valor;
    submitBtn.disabled = valor;
    form.setAttribute("aria-busy", String(valor));
    const chave = valor ? "feedback_btn_sending" : "feedback_btn_send";
    submitBtn.dataset.i18n = chave;
    submitBtn.textContent = t(chave);
  }

  //f:enviarFeedback
  async function enviarFeedback(dados) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
    try {
      const resp = await fetch(FEEDBACK_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(dados),
        signal: controller.signal
      });
      if (!resp.ok) throw new Error("HTTP " + resp.status);
    } finally {
      clearTimeout(timer);
    }
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (enviando) return;
    limparStatus();
    if (!validar()) return;

    // Preenchido só por bots: finge sucesso e não envia nada.
    if (honeypot && honeypot.value) {
      mostrarStatus("success", "feedback_success");
      form.reset();
      return;
    }

    // Evita "sucesso" falso enquanto o endpoint real não foi configurado.
    if (!ENDPOINT_CONFIGURADO) {
      console.warn("[feedback] FEEDBACK_ENDPOINT ainda não configurado em feedback-script.js");
      mostrarStatus("error", "feedback_not_configured");
      return;
    }

    const nome = campos.name.input.value.trim();
    setEnviando(true);
    try {
      await enviarFeedback({
        name:     nome,
        email:    campos.email.input.value.trim(),
        message:  campos.message.input.value.trim(),
        language: typeof currentLanguage !== "undefined" ? currentLanguage : "pt",
        _subject: "Stray7 Feedback — " + nome
      });
      mostrarStatus("success", "feedback_success");
      form.reset();
    } catch (err) {
      console.error("[feedback] falha no envio:", err);
      mostrarStatus("error", "feedback_error_send");
    } finally {
      setEnviando(false);
    }
  });

  // Corrige o erro do campo ao digitar; some com o "sucesso" ao começar outro feedback.
  form.addEventListener("input", (e) => {
    const alvo = e.target.closest(".feedback-field");
    if (alvo && campos[alvo.dataset.field]) limparInvalido(campos[alvo.dataset.field]);
    if (status.classList.contains("success")) limparStatus();
  });

})();
