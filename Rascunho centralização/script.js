/* MENU HAMBURGUER */

const botaoMenu = document.getElementById("menuHamburguer");
const menu = document.getElementById("menu");

botaoMenu.addEventListener("click", () => {
    menu.classList.toggle("ativo");
});


/* MODAL DE CADASTRO */

const botaoAdicionar =
    document.getElementById("adicionarAcesso");

const modal =
    document.getElementById("modalCadastro");

const botaoFechar =
    document.getElementById("fecharModal");

const botaoCancelar =
    document.getElementById("cancelarCadastro");

const dataCriacao =
    document.getElementById("dataCriacao");


/* FORMULARIO */

const formulario =
    document.getElementById("formCadastro");

const tabelaAcessos =
    document.getElementById("tabelaAcessos");


/* ABRIR MODAL */

botaoAdicionar.addEventListener("click", () => {

    const data = new Date();

    const dataFormatada =
        data.toLocaleDateString("pt-BR");

    dataCriacao.value = dataFormatada;

    modal.classList.add("ativo");
});


/* FECHAR MODAL */

botaoFechar.addEventListener("click", () => {

    modal.classList.remove("ativo");

});


/* CANCELAR CADASTRO */

botaoCancelar.addEventListener("click", () => {

    modal.classList.remove("ativo");

});


/* CADASTRAR ACESSO */

formulario.addEventListener("submit", (evento) => {

    evento.preventDefault();


    const servico =
        document.getElementById("servico").value;

    const email =
        document.getElementById("email").value;

    const senha =
        document.getElementById("senha").value;

    const status =
        document.getElementById("status").value;

    const centralizado =
        document.getElementById("centralizado").value;

    const area =
        document.getElementById("area").value;

    const data =
        dataCriacao.value;


    /* CRIAR NOVA LINHA */

    const novaLinha =
        document.createElement("tr");


    novaLinha.innerHTML = `
        <td>${servico}</td>

        <td>${email}</td>

        <td>${senha}</td>

        <td>${status}</td>

        <td>${centralizado}</td>

        <td>${area}</td>

        <td>${data}</td>

        <td>
            <button
                class="btn-editar"
                type="button">

                <img
                    src="assets/edit.png"
                    alt="Editar">

            </button>
        </td>
    `;


    tabelaAcessos.appendChild(novaLinha);


    /* FINALIZAR CADASTRO */

    formulario.reset();

    modal.classList.remove("ativo");


    /* MOSTRAR TOAST */

    mostrarToast();


    /* CRIAR NOTIFICACAO */

    criarNotificacao(
        "Novo cadastro",
        `O acesso de ${servico} foi cadastrado com sucesso.`
    );

});


/* MODAL DE EDICAO */

const modalEdicao =
    document.getElementById("modalEdicao");

const fecharModalEdicao =
    document.getElementById("fecharModalEdicao");

const cancelarEdicao =
    document.getElementById("cancelarEdicao");

const formularioEdicao =
    document.getElementById("formEdicao");


let linhaEditando = null;


/* ABRIR MODAL DE EDICAO */

tabelaAcessos.addEventListener("click", (evento) => {

    const botaoEditar =
        evento.target.closest(".btn-editar");


    if (!botaoEditar) {
        return;
    }


    linhaEditando =
        botaoEditar.closest("tr");


    document.getElementById("editarServico").value =
        linhaEditando.cells[0].textContent;


    document.getElementById("editarEmail").value =
        linhaEditando.cells[1].textContent;


    document.getElementById("editarSenha").value =
        linhaEditando.cells[2].textContent;


    document.getElementById("editarStatus").value =
        linhaEditando.cells[3].textContent;


    document.getElementById("editarCentralizado").value =
        linhaEditando.cells[4].textContent;


    document.getElementById("editarArea").value =
        linhaEditando.cells[5].textContent;


    document.getElementById("editarDataCriacao").value =
        linhaEditando.cells[6].textContent;


    modalEdicao.classList.add("ativo");

});


/* SALVAR ALTERACOES */

formularioEdicao.addEventListener("submit", (evento) => {

    evento.preventDefault();


    linhaEditando.cells[0].textContent =
        document.getElementById("editarServico").value;


    linhaEditando.cells[1].textContent =
        document.getElementById("editarEmail").value;


    linhaEditando.cells[2].textContent =
        document.getElementById("editarSenha").value;


    linhaEditando.cells[3].textContent =
        document.getElementById("editarStatus").value;


    linhaEditando.cells[4].textContent =
        document.getElementById("editarCentralizado").value;


    linhaEditando.cells[5].textContent =
        document.getElementById("editarArea").value;


    linhaEditando.cells[6].textContent =
        document.getElementById("editarDataCriacao").value;


    modalEdicao.classList.remove("ativo");

});


/* FECHAR MODAL DE EDICAO */

fecharModalEdicao.addEventListener("click", () => {

    modalEdicao.classList.remove("ativo");

});


cancelarEdicao.addEventListener("click", () => {

    modalEdicao.classList.remove("ativo");

});


/* TOAST */

function mostrarToast() {

    const toast =
        document.getElementById("toast");


    if (!toast) {

        console.error(
            "Elemento #toast não encontrado."
        );

        return;
    }


    toast.classList.add("ativo");


    setTimeout(() => {

        fecharToast();

    }, 4000);

}


/* FECHAR TOAST */

function fecharToast() {

    const toast =
        document.getElementById("toast");


    if (!toast) {
        return;
    }


    toast.classList.remove("ativo");

}


/* SISTEMA DE NOTIFICACOES */

const botaoNotificacao =
    document.getElementById("botaoNotificacao");

const painelNotificacoes =
    document.getElementById("painelNotificacoes");

const contadorNotificacoes =
    document.getElementById("contadorNotificacoes");

const listaNotificacoes =
    document.getElementById("listaNotificacoes");

const marcarLidas =
    document.getElementById("marcarLidas");


let notificacoes = [];


/* ABRIR E FECHAR NOTIFICACOES */

botaoNotificacao.addEventListener("click", () => {

    painelNotificacoes.classList.toggle("ativo");

});


/* CRIAR NOTIFICACAO */

function criarNotificacao(titulo, mensagem) {

    notificacoes.unshift({

        titulo: titulo,

        mensagem: mensagem

    });


    atualizarNotificacoes();

}


/* ATUALIZAR NOTIFICACOES */

function atualizarNotificacoes() {

    listaNotificacoes.innerHTML = "";


    if (notificacoes.length === 0) {

        listaNotificacoes.innerHTML = `
            <div class="semnotificacoes">
                Nenhuma notificação nova.
            </div>
        `;


        contadorNotificacoes.textContent = "0";

        contadorNotificacoes.style.display = "none";


        return;
    }


    contadorNotificacoes.textContent =
        notificacoes.length;

    contadorNotificacoes.style.display =
        "flex";


    notificacoes.forEach((notificacao) => {

        const elemento =
            document.createElement("div");


        elemento.classList.add(
            "notificacao"
        );


        elemento.innerHTML = `
            <div class="notificacao-icone">
                ✓
            </div>

            <div class="notificacaoconteudo">

                <strong>
                    ${notificacao.titulo}
                </strong>

                <span>
                    ${notificacao.mensagem}
                </span>

            </div>
        `;


        listaNotificacoes.appendChild(
            elemento
        );

    });

}


/* MARCAR COMO LIDAS */

marcarLidas.addEventListener("click", () => {

    notificacoes = [];

    atualizarNotificacoes();

});