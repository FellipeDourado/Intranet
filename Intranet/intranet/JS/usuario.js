/* DADOS DO USUÁRIO */

const usuarioNome =
  document.getElementById("usuarioNome");

const usuarioCargo =
  document.getElementById("usuarioCargo");

const usuarioNomeCompleto =
  document.getElementById("usuarioNomeCompleto");

const usuarioEmail =
  document.getElementById("usuarioEmail");

const usuarioSetor =
  document.getElementById("usuarioSetor");

const usuarioCargoCompleto =
  document.getElementById("usuarioCargoCompleto");


/* BUSCAR USUÁRIO LOGADO */

async function carregarUsuario() {

  try {

    const resposta =
      await fetch("/api/usuario");

    if (!resposta.ok) {

      throw new Error(
        "Não foi possível carregar os dados do usuário."
      );

    }


    const usuario =
      await resposta.json();


    /* PREENCHER CABEÇALHO */

    usuarioNome.textContent =
      usuario.nome;

    usuarioCargo.textContent =
      usuario.cargo;


    /* PREENCHER DADOS */

    usuarioNomeCompleto.textContent =
      usuario.nome;

    usuarioEmail.textContent =
      usuario.email;

    usuarioSetor.textContent =
      usuario.setor;

    usuarioCargoCompleto.textContent =
      usuario.cargo;

  } catch (erro) {

    console.error(
      "Erro ao carregar usuário:",
      erro
    );

  }

}


/* CARREGAR USUÁRIO */

carregarUsuario();