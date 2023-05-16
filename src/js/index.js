const botaoAlterarTema = document.getElementById("botao-alterar-tema");

console.log(botaoAlterarTema);

const body = document.querySelector("body");

const imagemBotaoTrocaTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {

    const modoEscuroAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");

    if (modoEscuroAtivo) {

        imagemBotaoTrocaTema.setAttribute("src", "./src/imagens/sun.png");

    } else {
        imagemBotaoTrocaTema.setAttribute("src", "./src/imagens/moon.png");

    };


});

const botaoAlterarImagem = document.getElementById("botao-alterar-imagem");

console.log(botaoAlterarImagem);

const imagemBotaoTrocaImagem = document.querySelector(".logo");


botaoAlterarImagem.addEventListener("click", () => {

    const trocarImagem = body.classList.contains("trocar-imagem");

    body.classList.toggle("trocar-imagem");

    if (trocarImagem) {

        imagemBotaoTrocaImagem.setAttribute("src", "./src/imagens/pokeball.png");

    } else {
        imagemBotaoTrocaImagem.setAttribute("src", "./src/imagens/logo-pokebola-aberta.png");

    };


});



var elementosBulbasaur = document.querySelectorAll('.cartao-pokemon:contains("Bulbasaur")');
elementosBulbasaur.forEach(function(elemento) {
  elemento.classList.add('bulbasaur');
});






