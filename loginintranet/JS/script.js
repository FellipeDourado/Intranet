/* ELEMENTOS DO FORMULÁRIO */

const formulario = document.querySelector(".login");
const usuario = document.getElementById("username");
const senha = document.getElementById("password");
const lembrar = document.getElementById("lembrar");
const botaoEntrar = formulario.querySelector("button");


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


/* CARREGAR USUÁRIO SALVO */

const usuarioSalvo = localStorage.getItem("usuarioKrona");

if (usuarioSalvo) {
  usuario.value = usuarioSalvo;
  lembrar.checked = true;
}


/* ENVIO DO FORMULÁRIO */

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  removerMensagem();

  const valorUsuario = usuario.value.trim();
  const valorSenha = senha.value.trim();


  /* VALIDAÇÃO DO USUÁRIO */

  if (!valorUsuario) {
    mostrarMensagem(
      "Digite seu usuário.",
      "erro"
    );

    usuario.focus();
    return;
  }


  /* VALIDAÇÃO DA SENHA */

  if (!valorSenha) {
    mostrarMensagem(
      "Digite sua senha.",
      "erro"
    );

    senha.focus();
    return;
  }


  /* LEMBRAR USUÁRIO */

  if (lembrar.checked) {
    localStorage.setItem(
      "usuarioKrona",
      valorUsuario
    );
  } else {
    localStorage.removeItem(
      "usuarioKrona"
    );
  }


  /* ESTADO DO BOTÃO */

  botaoEntrar.disabled = true;
  botaoEntrar.textContent = "Entrando...";


  /* SIMULAÇÃO DE LOGIN */

  setTimeout(() => {
    mostrarMensagem(
      "Login validado com sucesso.",
      "sucesso"
    );

    botaoEntrar.disabled = false;
    botaoEntrar.textContent = "Entrar";
  }, 1000);
});


/* LIMPAR MENSAGEM AO DIGITAR */

usuario.addEventListener("input", () => {
  removerMensagem();
});

senha.addEventListener("input", () => {
  removerMensagem();
});


/* CHECKBOX LEMBRAR ME */

lembrar.addEventListener("change", () => {
  if (!lembrar.checked) {
    localStorage.removeItem(
      "usuarioKrona"
    );
  }
});