/* MENU HAMBÚRGUER */

const botaoMenu =
    document.getElementById("menuHamburguer");

const menu =
    document.getElementById("menu");


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


/* FORMULÁRIO DE CADASTRO */

const formulario =
    document.getElementById("formCadastro");

const tabelaAcessos =
    document.getElementById("tabelaAcessos");


/* FILTRO POR ÁREA OU SETOR */

const filtroArea =
    document.getElementById("filtroArea");


/* LINHA ATUALMENTE SELECIONADA PARA EDIÇÃO */

let linhaEditando = null;


/* ABRIR MODAL DE CADASTRO */

botaoAdicionar.addEventListener("click", () => {

    const data = new Date();

    const dataFormatada =
        data.toLocaleDateString("pt-BR");

    dataCriacao.value =
        dataFormatada;

    modal.classList.add("ativo");

});


/* FECHAR MODAL DE CADASTRO */

botaoFechar.addEventListener("click", () => {

    modal.classList.remove("ativo");

});


/* CANCELAR CADASTRO */

botaoCancelar.addEventListener("click", () => {

    modal.classList.remove("ativo");

});


/* CADASTRAR NOVO ACESSO */

formulario.addEventListener("submit", (evento) => {

    evento.preventDefault();


    /* CAPTURAR DADOS DO FORMULÁRIO */

    const servico =
        document.getElementById("servico").value.trim();

    const email =
        document.getElementById("email").value;

    const senha =
        document.getElementById("senha").value;

    const status =
        document.getElementById("status").value;

    const centralizado =
        document.getElementById("centralizado").value;

    const area =
        document.getElementById("area").value.trim();

    const data =
        dataCriacao.value;


    /* CRIAR NOVA LINHA */

    const novaLinha =
        document.createElement("tr");


    novaLinha.innerHTML = `

        <td>
            ${servico}
        </td>

        <td>
            ${email}
        </td>

        <td>
            ${senha}
        </td>

        <td>
            ${status}
        </td>

        <td>
            ${centralizado}
        </td>

        <td>
            ${area}
        </td>

        <td>
            ${data}
        </td>

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


    /* ADICIONAR ACESSO NA TABELA */

    tabelaAcessos.appendChild(
        novaLinha
    );


    /* ATUALIZAR FILTRO */

    atualizarFiltroAreas();

    aplicarFiltroArea();


    /* LIMPAR FORMULÁRIO */

    formulario.reset();

    modal.classList.remove("ativo");


    /* MOSTRAR MENSAGEM DE SUCESSO */

    mostrarToast();


    /* CRIAR NOTIFICAÇÃO */

    criarNotificacao(
        "Novo cadastro",
        `O acesso de ${servico} foi cadastrado com sucesso.`
    );

});


/* MODAL DE EDIÇÃO */

const modalEdicao =
    document.getElementById("modalEdicao");

const fecharModalEdicao =
    document.getElementById("fecharModalEdicao");

const cancelarEdicao =
    document.getElementById("cancelarEdicao");

const formularioEdicao =
    document.getElementById("formEdicao");

const botaoDeletar =
    document.getElementById("deletarAcesso");


/* ABRIR MODAL DE EDIÇÃO */

tabelaAcessos.addEventListener("click", (evento) => {

    const botaoEditar =
        evento.target.closest(".btn-editar");


    if (!botaoEditar) {

        return;

    }


    /* GUARDAR LINHA SELECIONADA */

    linhaEditando =
        botaoEditar.closest("tr");


    /* PREENCHER DADOS DA EDIÇÃO */

    document.getElementById("editarServico").value =
        linhaEditando.cells[0].textContent.trim();

    document.getElementById("editarEmail").value =
        linhaEditando.cells[1].textContent.trim();

    document.getElementById("editarSenha").value =
        linhaEditando.cells[2].textContent.trim();

    document.getElementById("editarStatus").value =
        linhaEditando.cells[3].textContent.trim();

    document.getElementById("editarCentralizado").value =
        linhaEditando.cells[4].textContent.trim();

    document.getElementById("editarArea").value =
        linhaEditando.cells[5].textContent.trim();

    document.getElementById("editarDataCriacao").value =
        linhaEditando.cells[6].textContent.trim();


    /* ABRIR MODAL */

    modalEdicao.classList.add("ativo");

});


/* SALVAR ALTERAÇÕES */

formularioEdicao.addEventListener("submit", (evento) => {

    evento.preventDefault();


    if (!linhaEditando) {

        return;

    }


    /* ATUALIZAR SERVIÇO */

    linhaEditando.cells[0].textContent =
        document
            .getElementById("editarServico")
            .value
            .trim();


    /* ATUALIZAR EMAIL */

    linhaEditando.cells[1].textContent =
        document.getElementById("editarEmail").value;


    /* ATUALIZAR SENHA */

    linhaEditando.cells[2].textContent =
        document.getElementById("editarSenha").value;


    /* ATUALIZAR STATUS */

    linhaEditando.cells[3].textContent =
        document.getElementById("editarStatus").value;


    /* ATUALIZAR CENTRALIZADO */

    linhaEditando.cells[4].textContent =
        document.getElementById("editarCentralizado").value;


    /* ATUALIZAR ÁREA */

    linhaEditando.cells[5].textContent =
        document
            .getElementById("editarArea")
            .value
            .trim();


    /* ATUALIZAR DATA */

    linhaEditando.cells[6].textContent =
        document.getElementById("editarDataCriacao").value;


    /* ATUALIZAR FILTRO */

    atualizarFiltroAreas();

    aplicarFiltroArea();


    /* FECHAR MODAL */

    modalEdicao.classList.remove("ativo");


    /* LIMPAR LINHA EDITADA */

    linhaEditando = null;


    /* CRIAR NOTIFICAÇÃO */

    criarNotificacao(
        "Cadastro atualizado",
        "O acesso foi atualizado com sucesso."
    );

});


/* DELETAR ACESSO */

if (botaoDeletar) {

    botaoDeletar.addEventListener("click", () => {

        if (!linhaEditando) {

            alert("Nenhum acesso selecionado.");

            return;

        }


        /* PEGAR NOME DO SERVIÇO */

        const servico =
            linhaEditando.cells[0]
                .textContent
                .trim();


        /* CONFIRMAR EXCLUSÃO */

        const confirmar =
            confirm(
                `Tem certeza que deseja deletar o acesso de "${servico}"?`
            );


        if (!confirmar) {

            return;

        }


        /* REMOVER LINHA */

        linhaEditando.remove();


        /* ATUALIZAR FILTRO */

        atualizarFiltroAreas();

        aplicarFiltroArea();


        /* FECHAR MODAL */

        modalEdicao.classList.remove("ativo");


        /* LIMPAR LINHA EDITADA */

        linhaEditando = null;


        /* CRIAR NOTIFICAÇÃO */

        criarNotificacao(
            "Cadastro deletado",
            `O acesso de ${servico} foi deletado com sucesso.`
        );

    });

}


/* FECHAR MODAL DE EDIÇÃO */

fecharModalEdicao.addEventListener("click", () => {

    modalEdicao.classList.remove("ativo");

    linhaEditando = null;

});


/* CANCELAR EDIÇÃO */

cancelarEdicao.addEventListener("click", () => {

    modalEdicao.classList.remove("ativo");

    linhaEditando = null;

});


/* ATUALIZAR FILTRO DE ÁREAS */

function atualizarFiltroAreas() {

    if (!filtroArea) {

        return;

    }


    /* GUARDAR ÁREA SELECIONADA */

    const valorAtual =
        filtroArea.value;


    /* CRIAR LISTA DE ÁREAS */

    const areas = [];


    /* PERCORRER LINHAS DA TABELA */

    tabelaAcessos
        .querySelectorAll("tr")
        .forEach((linha) => {

            if (!linha.cells[5]) {

                return;

            }


            /* PEGAR ÁREA DA LINHA */

            const area =
                linha.cells[5]
                    .textContent
                    .trim();


            /* ADICIONAR ÁREA SEM REPETIR */

            if (
                area &&
                !areas.includes(area)
            ) {

                areas.push(area);

            }

        });


    /* ORDENAR ÁREAS */

    areas.sort((a, b) => {

        return a.localeCompare(
            b,
            "pt BR",
            {
                sensitivity: "base"
            }
        );

    });


    /* LIMPAR FILTRO */

    filtroArea.innerHTML = "";


    /* CRIAR OPÇÃO PARA TODAS AS ÁREAS */

    const opcaoTodos =
        document.createElement("option");

    opcaoTodos.value =
        "todos";

    opcaoTodos.textContent =
        "Todas as áreas";

    filtroArea.appendChild(
        opcaoTodos
    );


    /* ADICIONAR ÁREAS AO FILTRO */

    areas.forEach((area) => {

        const opcao =
            document.createElement("option");

        opcao.value =
            area;

        opcao.textContent =
            area;

        filtroArea.appendChild(
            opcao
        );

    });


    /* MANTER ÁREA SELECIONADA */

    if (
        areas.includes(valorAtual)
    ) {

        filtroArea.value =
            valorAtual;

    } else {

        filtroArea.value =
            "todos";

    }

}


/* APLICAR FILTRO DE ÁREA */

function aplicarFiltroArea() {

    if (!filtroArea) {

        return;

    }


    /* PEGAR ÁREA SELECIONADA */

    const areaSelecionada =
        filtroArea.value;


    /* PERCORRER LINHAS DA TABELA */

    tabelaAcessos
        .querySelectorAll("tr")
        .forEach((linha) => {

            if (!linha.cells[5]) {

                return;

            }


            /* PEGAR ÁREA DA LINHA */

            const area =
                linha.cells[5]
                    .textContent
                    .trim();


            /* MOSTRAR TODAS AS ÁREAS */

            if (
                areaSelecionada === "todos"
            ) {

                linha.style.display = "";

                return;

            }


            /* MOSTRAR ÁREA SELECIONADA */

            if (
                area === areaSelecionada
            ) {

                linha.style.display = "";

            } else {

                linha.style.display = "none";

            }

        });

}


/* ALTERAR FILTRO */

if (filtroArea) {

    filtroArea.addEventListener(
        "change",
        () => {

            aplicarFiltroArea();

        }
    );

}


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


    /* FECHAR AUTOMATICAMENTE */

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


/* SISTEMA DE NOTIFICAÇÕES */

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


/* LISTA DE NOTIFICAÇÕES */

let notificacoes = [];


/* ABRIR E FECHAR NOTIFICAÇÕES */

botaoNotificacao.addEventListener("click", () => {

    painelNotificacoes.classList.toggle(
        "ativo"
    );

});


/* CRIAR NOTIFICAÇÃO */

function criarNotificacao(
    titulo,
    mensagem
) {

    notificacoes.unshift({

        titulo: titulo,

        mensagem: mensagem

    });


    atualizarNotificacoes();

}


/* ATUALIZAR NOTIFICAÇÕES */

function atualizarNotificacoes() {

    listaNotificacoes.innerHTML = "";


    /* VERIFICAR SE EXISTEM NOTIFICAÇÕES */

    if (notificacoes.length === 0) {

        listaNotificacoes.innerHTML = `

            <div class="semnotificacoes">

                Nenhuma notificação nova.

            </div>

        `;


        contadorNotificacoes.textContent =
            "0";

        contadorNotificacoes.style.display =
            "none";

        return;

    }


    /* ATUALIZAR CONTADOR */

    contadorNotificacoes.textContent =
        notificacoes.length;

    contadorNotificacoes.style.display =
        "flex";


    /* MOSTRAR NOTIFICAÇÕES */

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


/* MARCAR NOTIFICAÇÕES COMO LIDAS */

marcarLidas.addEventListener("click", () => {

    notificacoes = [];

    atualizarNotificacoes();

});


/* INICIALIZAR FILTRO */

atualizarFiltroAreas();

aplicarFiltroArea();
