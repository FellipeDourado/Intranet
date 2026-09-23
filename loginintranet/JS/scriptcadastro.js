/* ELEMENTOS DO FORMULÁRIO */

const formulario = document.querySelector(".form-cadastro");

const nome = document.getElementById("nome");
const email = document.getElementById("email");
const setor = document.getElementById("setor");
const cargo = document.getElementById("cargo");
const matricula = document.getElementById("matricula");
const usuario = document.getElementById("usuario");
const senha = document.getElementById("senha");
const confirmarSenha = document.getElementById("confirmar-senha");

const botaoCadastro = formulario.querySelector("button");


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


/* VALIDAR E-MAIL */

function validarEmail(valor) {
  const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return formatoEmail.test(valor);
}


/* ENVIO DO FORMULÁRIO */

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  removerMensagem();


  /* PEGAR VALORES */

  const dados = {
    nome: nome.value.trim(),
    email: email.value.trim(),
    setor: setor.value.trim(),
    cargo: cargo.value.trim(),
    matricula: matricula.value.trim(),
    usuario: usuario.value.trim(),
    senha: senha.value,
    confirmarSenha: confirmarSenha.value
  };


  /* VALIDAR NOME */

  if (!dados.nome) {
    mostrarMensagem("Digite seu nome completo.", "erro");
    nome.focus();
    return;
  }


  /* VALIDAR E-MAIL */

  if (!dados.email) {
    mostrarMensagem("Digite seu e-mail corporativo.", "erro");
    email.focus();
    return;
  }

  if (!validarEmail(dados.email)) {
    mostrarMensagem("Digite um e-mail válido.", "erro");
    email.focus();
    return;
  }


  /* VALIDAR SETOR */

  if (!dados.setor) {
    mostrarMensagem("Digite seu setor.", "erro");
    setor.focus();
    return;
  }


  /* VALIDAR CARGO */

  if (!dados.cargo) {
    mostrarMensagem("Digite seu cargo.", "erro");
    cargo.focus();
    return;
  }


  /* VALIDAR MATRÍCULA */

  if (!dados.matricula) {
    mostrarMensagem("Digite sua matrícula.", "erro");
    matricula.focus();
    return;
  }


  /* VALIDAR USUÁRIO */

  if (!dados.usuario) {
    mostrarMensagem("Digite seu usuário.", "erro");
    usuario.focus();
    return;
  }


  /* VALIDAR SENHA */

  if (!dados.senha) {
    mostrarMensagem("Digite sua senha.", "erro");
    senha.focus();
    return;
  }

  if (dados.senha.length < 6) {
    mostrarMensagem(
      "A senha deve ter pelo menos 6 caracteres.",
      "erro"
    );

    senha.focus();
    return;
  }


  /* VALIDAR CONFIRMAÇÃO DA SENHA */

  if (!dados.confirmarSenha) {
    mostrarMensagem(
      "Confirme sua senha.",
      "erro"
    );

    confirmarSenha.focus();
    return;
  }

  if (dados.senha !== dados.confirmarSenha) {
    mostrarMensagem(
      "As senhas não coincidem.",
      "erro"
    );

    confirmarSenha.focus();
    return;
  }


  /* PREPARAR ENVIO */

  botaoCadastro.disabled = true;
  botaoCadastro.textContent = "Criando cadastro...";


  /* DADOS QUE SERÃO ENVIADOS AO BACKEND */

  const dadosCadastro = {
    nome: dados.nome,
    email: dados.email,
    setor: dados.setor,
    cargo: dados.cargo,
    matricula: dados.matricula,
    usuario: dados.usuario,
    senha: dados.senha
  };


  console.log("Dados do cadastro:", dadosCadastro);


  /* FINALIZAR */

  botaoCadastro.disabled = false;
  botaoCadastro.textContent = "Criar cadastro";
});/* ELEMENTOS DO FORMULÁRIO */

const formulario = document.querySelector(".form-cadastro");

const nome = document.getElementById("nome");
const email = document.getElementById("email");
const setor = document.getElementById("setor");
const cargo = document.getElementById("cargo");
const matricula = document.getElementById("matricula");
const usuario = document.getElementById("usuario");
const senha = document.getElementById("senha");
const confirmarSenha = document.getElementById("confirmar-senha");

const botaoCadastro = formulario.querySelector("button");


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


/* VALIDAR E-MAIL */

function validarEmail(valor) {
  const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return formatoEmail.test(valor);
}


/* ENVIO DO FORMULÁRIO */

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  removerMensagem();


  /* PEGAR VALORES */

  const dados = {
    nome: nome.value.trim(),
    email: email.value.trim(),
    setor: setor.value.trim(),
    cargo: cargo.value.trim(),
    matricula: matricula.value.trim(),
    usuario: usuario.value.trim(),
    senha: senha.value,
    confirmarSenha: confirmarSenha.value
  };


  /* VALIDAR NOME */

  if (!dados.nome) {
    mostrarMensagem("Digite seu nome completo.", "erro");
    nome.focus();
    return;
  }


  /* VALIDAR E-MAIL */

  if (!dados.email) {
    mostrarMensagem("Digite seu e-mail corporativo.", "erro");
    email.focus();
    return;
  }

  if (!validarEmail(dados.email)) {
    mostrarMensagem("Digite um e-mail válido.", "erro");
    email.focus();
    return;
  }


  /* VALIDAR SETOR */

  if (!dados.setor) {
    mostrarMensagem("Digite seu setor.", "erro");
    setor.focus();
    return;
  }


  /* VALIDAR CARGO */

  if (!dados.cargo) {
    mostrarMensagem("Digite seu cargo.", "erro");
    cargo.focus();
    return;
  }


  /* VALIDAR MATRÍCULA */

  if (!dados.matricula) {
    mostrarMensagem("Digite sua matrícula.", "erro");
    matricula.focus();
    return;
  }


  /* VALIDAR USUÁRIO */

  if (!dados.usuario) {
    mostrarMensagem("Digite seu usuário.", "erro");
    usuario.focus();
    return;
  }


  /* VALIDAR SENHA */

  if (!dados.senha) {
    mostrarMensagem("Digite sua senha.", "erro");
    senha.focus();
    return;
  }

  if (dados.senha.length < 6) {
    mostrarMensagem(
      "A senha deve ter pelo menos 6 caracteres.",
      "erro"
    );

    senha.focus();
    return;
  }


  /* VALIDAR CONFIRMAÇÃO DA SENHA */

  if (!dados.confirmarSenha) {
    mostrarMensagem(
      "Confirme sua senha.",
      "erro"
    );

    confirmarSenha.focus();
    return;
  }

  if (dados.senha !== dados.confirmarSenha) {
    mostrarMensagem(
      "As senhas não coincidem.",
      "erro"
    );

    confirmarSenha.focus();
    return;
  }


  /* PREPARAR ENVIO */

  botaoCadastro.disabled = true;
  botaoCadastro.textContent = "Criando cadastro...";


  /* DADOS QUE SERÃO ENVIADOS AO BACKEND */

  const dadosCadastro = {
    nome: dados.nome,
    email: dados.email,
    setor: dados.setor,
    cargo: dados.cargo,
    matricula: dados.matricula,
    usuario: dados.usuario,
    senha: dados.senha
  };


  console.log("Dados do cadastro:", dadosCadastro);


  /* FINALIZAR */

  botaoCadastro.disabled = false;
  botaoCadastro.textContent = "Criar cadastro";
});