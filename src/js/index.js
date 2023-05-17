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



var botaoAlterarImagem = document.getElementById('botao-alterar-imagem');
var imagemBotaoTrocaImagem = botaoAlterarImagem.querySelector('img');

var liData = {
	bulbasaur: {
		novaImagem: "./src/imagens/card-bulbasaur.png"
	},
	Ivysaur: {
		novaImagem: "./src/imagens/card-ivysaur.png"
	},
	Venusaur: {
		novaImagem: "./src/imagens/card-venusaur.png"
	},
	Charmander: {
		novaImagem: "./src/imagens/card-Charmander.png"
	},
	Charmeleon: {
		novaImagem: "./src/imagens/card-charmeleon.png"
	},
	Charizard: {
		novaImagem: "./src/imagens/card-charizard.png"
	},
    Squirtle: {
		novaImagem: "./src/imagens/card-squirtle.png"
	},
    Wartortle: {
		novaImagem: "./src/imagens/card-wartortle.png"
	},
    Blastoise: {
		novaImagem: "./src/imagens/card-blastoise.png"
	},
    Caterpie: {
		novaImagem: "./src/imagens/card-caterpie.png"
	}
};

botaoAlterarImagem.addEventListener("click", function() {
	for (var liId in liData) {
		var liElement = document.getElementById(liId);
		var liInfo = liData[liId];
		var trocarImagem = liElement.classList.contains("trocar-imagem");
		
		if (trocarImagem) {
			// Voltar para a imagem original
			imagemBotaoTrocaImagem.setAttribute("src", "./src/imagens/pokeball.png");
			liElement.innerHTML = liElement.dataset.conteudoOriginal;
			liElement.classList.remove('nova-imagem-li');
		} else {
		// Substituir pela nova imagem
		imagemBotaoTrocaImagem.setAttribute("src", "./src/imagens/logo-pokebola-aberta.png");
		
		if (!liElement.dataset.conteudoOriginal) {
        // Salvar o conteúdo original
        liElement.dataset.conteudoOriginal = liElement.innerHTML;
		}
		
		// Limpar o conteúdo atual da <li>
		liElement.innerHTML = '';
		
		// Criar a nova imagem
		var novaImagem = document.createElement('img');
		novaImagem.src = liInfo.novaImagem;
		novaImagem.alt = "Nova Imagem";
		novaImagem.classList.add('nova-imagem');
		
		// Estilizar a nova imagem
		novaImagem.style.padding = "0";
		novaImagem.style.width = "100%";
		novaImagem.style.height = "100%";
		novaImagem.style.objectFit = "cover";
		
		// Anexar a nova imagem à <li>
		liElement.appendChild(novaImagem);
		
		// Adicionar classes para estilização
		liElement.classList.add('nova-imagem-li');
		}
		
		// Alternar a classe "trocar-imagem"
		liElement.classList.toggle("trocar-imagem");
		}
		});
		
		
		
		
		
		
		
		
				