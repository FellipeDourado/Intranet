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

formulario.addEventListener("submit", async (evento) => {
  evento.preventDefault();

  removerMensagem();

  const valorUsuario = usuario.value.trim();
  const valorSenha = senha.value;


  /* VALIDAR USUÁRIO */

  if (!valorUsuario) {
    mostrarMensagem(
      "Digite seu usuário.",
      "erro"
    );

    usuario.focus();
    return;
  }


  /* VALIDAR SENHA */

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


  /* DESABILITAR BOTÃO */

  botaoEntrar.disabled = true;
  botaoEntrar.textContent = "Entrando...";


  try {

    /* ENVIO PARA O BACKEND */

    const resposta = await fetch("/api/login", {
      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        usuario: valorUsuario,
        senha: valorSenha
      })
    });


    /* RESPOSTA DO BACKEND */

    const resultado = await resposta.json();


    /* LOGIN INVÁLIDO */

    if (!resposta.ok) {
      mostrarMensagem(
        resultado.mensagem || "Usuário ou senha inválidos.",
        "erro"
      );

      return;
    }


    /* LOGIN VÁLIDO */

    mostrarMensagem(
      "Login realizado com sucesso.",
      "sucesso"
    );


    /* IR PARA A TELA PRINCIPAL */

    window.location.href = "html/acesso.html";

  } catch (erro) {

    /* ERRO DE CONEXÃO */

    mostrarMensagem(
      "Não foi possível conectar ao servidor.",
      "erro"
    );

    console.error(
      "Erro ao realizar login:",
      erro
    );

  } finally {

    /* RESTAURAR BOTÃO */

    botaoEntrar.disabled = false;
    botaoEntrar.textContent = "Entrar";
  }
});


/* LIMPAR MENSAGEM AO DIGITAR */

usuario.addEventListener("input", () => {
  removerMensagem();
});

senha.addEventListener("input", () => {
  removerMensagem();
});


/* CHECKBOX LEMBRAR-ME */

lembrar.addEventListener("change", () => {
  if (!lembrar.checked) {
    localStorage.removeItem("usuarioKrona");
  }
});

/* COPYRIGHT */

const anoAtual = new Date().getFullYear();

document.getElementById("ano-atual").textContent = anoAtual;