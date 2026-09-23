/* ELEMENTOS */

const botaoTema = document.getElementById("botao-tema");
const logoKrona = document.getElementById("logo-krona");


/* CAMINHO DOS ASSETS */

const caminhoAssets = window.location.pathname.includes("/html/")
  ? "../assets/"
  : "assets/";


/* APLICAR TEMA */

function aplicarTema(tema) {
  if (tema === "light") {
    document.body.classList.add("tema-light");

    if (botaoTema) {
      botaoTema.style.backgroundImage =
        `url("${caminhoAssets}lua.png")`;

      botaoTema.setAttribute(
        "aria-label",
        "Ativar modo escuro"
      );
    }

    if (logoKrona) {
      logoKrona.src =
        `${caminhoAssets}Logotipo Branco.png`;
    }

  } else {
    document.body.classList.remove("tema-light");

    if (botaoTema) {
      botaoTema.style.backgroundImage =
        `url("${caminhoAssets}lua.png")`;

      botaoTema.setAttribute(
        "aria-label",
        "Ativar modo claro"
      );
    }

    if (logoKrona) {
      logoKrona.src =
        `${caminhoAssets}Logotipo Preto.png`;
    }
  }
}


/* CARREGAR TEMA SALVO */

const temaSalvo = localStorage.getItem("temaKrona") || "dark";

aplicarTema(temaSalvo);


/* ALTERAR TEMA */

if (botaoTema) {
  botaoTema.addEventListener("click", () => {
    const temaAtual = document.body.classList.contains("tema-light")
      ? "light"
      : "dark";

    const novoTema = temaAtual === "light"
      ? "dark"
      : "light";

    localStorage.setItem("temaKrona", novoTema);

    aplicarTema(novoTema);
  });
}