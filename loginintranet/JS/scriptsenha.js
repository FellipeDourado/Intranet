/* ELEMENTOS DO FORMULÁRIO */

const formulario = document.querySelector(".form-senha");
const identificacao = document.getElementById("identificacao");
const botaoContinuar = formulario.querySelector("button");


/* CRIAR MENSAGEM */

function mostrarMensagem(mensagem, tipo) {
  let mensagemElemento = document.querySelector(".mensagem");

  if (!mensagemElemento) {
    mensagemElemento = document.createElement("p");

    mensagemElemento.classList.add("mensagem");

    formulario.prepend(mensagemElemento);
  }

  mensagemElemento.textContent = mensagem;
  mensagemElemento.className = `mensagem ${tipo}`;
}


/* REMOVER MENSAGEM */

function removerMensagem() {
  const mensagemElemento = document.querySelector(".mensagem");

  if (mensagemElemento) {
    mensagemElemento.remove();
  }
}


/* ENVIO DO FORMULÁRIO */

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  removerMensagem();


  /* PEGAR VALOR */

  const valorIdentificacao = identificacao.value.trim();


  /* VALIDAR CAMPO */

  if (!valorIdentificacao) {
    mostrarMensagem(
      "Digite seu usuário ou e-mail corporativo.",
      "erro"
    );

    identificacao.focus();

    return;
  }


  /* ALTERAR BOTÃO */

  botaoContinuar.disabled = true;

  botaoContinuar.textContent = "Verificando...";


  /* PREPARAR DADOS */

  const dadosRecuperacao = {
    identificacao: valorIdentificacao
  };


  console.log("Dados para recuperação:", dadosRecuperacao);


  /* FINALIZAR TESTE */

  setTimeout(() => {
    mostrarMensagem(
      "Dados válidos. A recuperação poderá ser iniciada pelo sistema.",
      "sucesso"
    );

    botaoContinuar.disabled = false;

    botaoContinuar.textContent = "Continuar";
  }, 800);
});


/* REMOVER MENSAGEM AO DIGITAR */

identificacao.addEventListener("input", () => {
  removerMensagem();
});