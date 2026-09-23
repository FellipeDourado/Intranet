/* ELEMENTOS */

const menuHamburguer = document.getElementById("menuHamburguer");
const menu = document.getElementById("menu");
const pesquisa = document.getElementById("pesquisa");
const filtroArea = document.getElementById("filtroArea");
const tabelaControle = document.getElementById("tabelacontrole");

/* MENU HAMBÚRGUER */

menuHamburguer.addEventListener("click", () => {
  menu.classList.toggle("ativo");
});


/* FECHAR MENU AO CLICAR FORA */

document.addEventListener("click", (evento) => {
  if (
    !menu.contains(evento.target) &&
    !menuHamburguer.contains(evento.target)
  ) {
    menu.classList.remove("ativo");
  }
});


/* DADOS DOS USUÁRIOS */

const usuarios = [];


/* EXIBIR USUÁRIOS */

function exibirUsuarios(lista) {
  tabelaControle.innerHTML = "";

  lista.forEach((usuario) => {
    const linha = document.createElement("tr");

    linha.innerHTML = `
      <td>${usuario.usuario}</td>
      <td>${usuario.email}</td>
      <td>${usuario.setor}</td>
      <td>${usuario.status}</td>
      <td>${usuario.dataCriacao}</td>
      <td>
        <button type="button">Configurar</button>
      </td>
    `;

    tabelaControle.appendChild(linha);
  });
}


/* PREENCHER FILTRO DE SETOR */

function preencherSetores() {
  const setores = [];

  usuarios.forEach((usuario) => {
    if (!setores.includes(usuario.setor)) {
      setores.push(usuario.setor);
    }
  });

  setores.forEach((setor) => {
    const opcao = document.createElement("option");

    opcao.value = setor;
    opcao.textContent = setor;

    filtroArea.appendChild(opcao);
  });
}


/* FILTRAR USUÁRIOS */

function filtrarUsuarios() {
  const textoPesquisa = pesquisa.value.toLowerCase().trim();
  const setorSelecionado = filtroArea.value;

  const usuariosFiltrados = usuarios.filter((usuario) => {
    const correspondePesquisa =
      usuario.usuario.toLowerCase().includes(textoPesquisa) ||
      usuario.email.toLowerCase().includes(textoPesquisa) ||
      usuario.setor.toLowerCase().includes(textoPesquisa);

    const correspondeSetor =
      setorSelecionado === "todos" ||
      usuario.setor === setorSelecionado;

    return correspondePesquisa && correspondeSetor;
  });

  exibirUsuarios(usuariosFiltrados);
}


/* PESQUISA */

pesquisa.addEventListener("input", () => {
  filtrarUsuarios();
});


/* FILTRO DE SETOR */

filtroArea.addEventListener("change", () => {
  filtrarUsuarios();
});


/* COPYRIGHT */

const anoAtual = document.getElementById("ano-atual");

if (anoAtual) {
  anoAtual.textContent = new Date().getFullYear();
}


/* INICIALIZAÇÃO */

preencherSetores();
exibirUsuarios(usuarios);