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
	},
	Metapod: {
		novaImagem: "./src/imagens/card-metapod.png"
	},
	Butterfree: {
		novaImagem: "./src/imagens/card-butterfree.png"
	},
	Weedle: {
		novaImagem: "./src/imagens/card-weedle.png"
	},
	Kakuna: {
		novaImagem: "./src/imagens/card-kakuna.png"
	},
	Beedrill: {
		novaImagem: "./src/imagens/card-beedrill.png"
	},
	Pidgey: {
		novaImagem: "./src/imagens/card-pidgey.png"
	},
	Pidgeotto: {
		novaImagem: "./src/imagens/card-pidgeotto.png"
	},
	Pidgeot: {
		novaImagem: "./src/imagens/card-pidgeot.png"
	},
	Rattata: {
		novaImagem: "./src/imagens/card-rattata.png"
	},
	Raticate: {
		novaImagem: "./src/imagens/card-raticate.png"
	},
	Spearow: {
		novaImagem: "./src/imagens/card-spearow.png"
	},
	Fearow: {
		novaImagem: "./src/imagens/card-fearow.png"
	},
	Ekans: {
		novaImagem: "./src/imagens/card-ekans.png"
	},
	Arbok: {
		novaImagem: "./src/imagens/card-arbok.png"
	},
	Pikachu: {
		novaImagem: "./src/imagens/card-pikachu.png"
	},
	Raichu: {
		novaImagem: "./src/imagens/card-raichu.png"
	},
	Sandshrew: {
		novaImagem: "./src/imagens/card-sandshrew.png"
	},
	Sandslash: {
		novaImagem: "./src/imagens/card-sandslash.png"
	},
	NidoranF: {
		novaImagem: "./src/imagens/card-nidoranF.png"
	},
	Nidorina: {
		novaImagem: "./src/imagens/card-nidorina.png"
	},
	Nidoqueen: {
		novaImagem: "./src/imagens/card-nidoqueen.png"
	},
	NidoranMM: {
		novaImagem: "./src/imagens/card-nidoranMM.png"
	},
	Nidorino: {
		novaImagem: "./src/imagens/card-nidorino.png"
	},
	Nidoking: {
		novaImagem: "./src/imagens/card-nidoking.png"
	},
	Clefairy: {
		novaImagem: "./src/imagens/card-clefairy.png"
	},
	Clefable: {
		novaImagem: "./src/imagens/card-clefable.png"
	},
	Vulpix: {
		novaImagem: "./src/imagens/card-vulpix.png"
	},
	Ninetales: {
		novaImagem: "./src/imagens/card-ninetales.png"
	},
	Jigglypuff: {
		novaImagem: "./src/imagens/card-jigglypuff.png"
	},
	Wigglytuff: {
		novaImagem: "./src/imagens/card-wigglytuff.png"
	},
	Zubat: {
		novaImagem: "./src/imagens/card-zubat.png"
	},
	Golbat: {
		novaImagem: "./src/imagens/card-golbat.png"
	},
	Oddish: {
		novaImagem: "./src/imagens/card-oddish.png"
	},
	Gloom: {
		novaImagem: "./src/imagens/card-gloom.png"
	},
	Vileplume: {
		novaImagem: "./src/imagens/card-vileplume.png"
	},
	Paras: {
		novaImagem: "./src/imagens/card-paras.png"
	},
	Parasect: {
		novaImagem: "./src/imagens/card-parasect.png"
	},
	Venonat: {
		novaImagem: "./src/imagens/card-venonat.png"
	},
	Venomoth: {
		novaImagem: "./src/imagens/card-venomoth.png"
	},
	Diglett: {
		novaImagem: "./src/imagens/card-diglett.png"
	},
	Dugtrio: {
		novaImagem: "./src/imagens/card-dugtrio.png"
	},
	Meowth: {
		novaImagem: "./src/imagens/card-meowth.png"
	},
	Persian: {
		novaImagem: "./src/imagens/card-persian.png"
	},
	Psyduck: {
		novaImagem: "./src/imagens/card-psyduck.png"
	},
	Golduck: {
		novaImagem: "./src/imagens/card-golduck.png"
	},
	Mankey: {
		novaImagem: "./src/imagens/card-mankey.png"
	},
	Primeape: {
		novaImagem: "./src/imagens/card-primeape.png"
	},
	Growlithe: {
		novaImagem: "./src/imagens/card-growlithe.png"
	},
	Arcanine: {
		novaImagem: "./src/imagens/card-arcanine.png"
	},
	Poliwag: {
		novaImagem: "./src/imagens/card-poliwag.png"
	},
	Poliwhirl: {
		novaImagem: "./src/imagens/card-poliwhirl.png"
	},
	Poliwrath: {
		novaImagem: "./src/imagens/card-poliwrath.png"
	},
	Abra: {
		novaImagem: "./src/imagens/card-abra.png"
	},
	Kadabra: {
		novaImagem: "./src/imagens/card-kadabra.png"
	},
	Alakazam: {
		novaImagem: "./src/imagens/card-alakazam.png"
	},
	Machop: {
		novaImagem: "./src/imagens/card-machop.png"
	},
	Machoke: {
		novaImagem: "./src/imagens/card-machoke.png"
	},
	Machamp: {
		novaImagem: "./src/imagens/card-machamp.png"
	},
	bellsprout: {
		novaImagem: "./src/imagens/card-bellsprout.png"
	},
	Weepinbell: {
		novaImagem: "./src/imagens/card-weepinbell.png"
	},
	Victreebel: {
		novaImagem: "./src/imagens/card-victreebel.png"
	},
	Tentacool: {
		novaImagem: "./src/imagens/card-tentacool.png"
	},
	Tentacruel: {
		novaImagem: "./src/imagens/card-tentacruel.png"
	},
	Geodude: {
		novaImagem: "./src/imagens/card-geodude.png"
	},
	Graveler: {
		novaImagem: "./src/imagens/card-graveler.png"
	},
	Golem: {
		novaImagem: "./src/imagens/card-golem.png"
	},
	Ponyta: {
		novaImagem: "./src/imagens/card-ponyta.png"
	},
	Rapidash: {
		novaImagem: "./src/imagens/card-rapidash.png"
	},
	Slowpoke: {
		novaImagem: "./src/imagens/card-slowpoke.png"
	},
	Slowbro: {
		novaImagem: "./src/imagens/card-slowbro.png"
	},
	Magnemite: {
		novaImagem: "./src/imagens/card-magnemite.png"
	},
	Venomoth: {
		novaImagem: "./src/imagens/card-venomoth.png"
	},
	Magneton: {
		novaImagem: "./src/imagens/card-magneton.png"
	},
	Farfetchd : {
		novaImagem: "./src/imagens/card-farfetchd .png"
	},
	Doduo: {
		novaImagem: "./src/imagens/card-doduo.png"
	},
	Dodrio: {
		novaImagem: "./src/imagens/card-dodrio.png"
	},
	Seel: {
		novaImagem: "./src/imagens/card-seel.png"
	},
	Dewgong: {
		novaImagem: "./src/imagens/card-dewgong.png"
	},
	Grimer: {
		novaImagem: "./src/imagens/card-grimer.png"
	},
	Muk: {
		novaImagem: "./src/imagens/card-muk.png"
	},
	Shellder: {
		novaImagem: "./src/imagens/card-shellder.png"
	},
	Cloyster: {
		novaImagem: "./src/imagens/card-cloyster.png"
	},
	Gastly: {
		novaImagem: "./src/imagens/card-gastly.png"
	},
	Haunter: {
		novaImagem: "./src/imagens/card-haunter.png"
	},
	Gengar: {
		novaImagem: "./src/imagens/card-gengar.png"
	},
	Onix: {
		novaImagem: "./src/imagens/card-onix.png"
	},
	Drowzee: {
		novaImagem: "./src/imagens/card-drowzee.png"
	},
	Hypno: {
		novaImagem: "./src/imagens/card-hypno.png"
	},
	Krabby: {
		novaImagem: "./src/imagens/card-krabby.png"
	},
	Kingler: {
		novaImagem: "./src/imagens/card-kingler.png"
	},
	Voltorb: {
		novaImagem: "./src/imagens/card-voltorb.png"
	},
	Electrode: {
		novaImagem: "./src/imagens/card-electrode.png"
	},
	Exeggcute: {
		novaImagem: "./src/imagens/card-exeggcute.png"
	},
	Exeggutor: {
		novaImagem: "./src/imagens/card-exeggutor.png"
	},
	Cubone : {
		novaImagem: "./src/imagens/card-cubone.png"
	},
	Marowak: {
		novaImagem: "./src/imagens/card-marowak.png"
	},
	Hitmonlee: {
		novaImagem: "./src/imagens/card-hitmonlee.png"
	},
	Hitmonchan: {
		novaImagem: "./src/imagens/card-hitmonchan.png"
	},
	Lickitung: {
		novaImagem: "./src/imagens/card-lickitung.png"
	},
	Koffing: {
		novaImagem: "./src/imagens/card-koffing.png"
	},
	weezing: {
		novaImagem: "./src/imagens/card-weezing.png"
	},
	Rhyhorn: {
		novaImagem: "./src/imagens/card-rhyhorn.png"
	},
	Rhydon: {
		novaImagem: "./src/imagens/card-rhydon.png"
	},
	Chansey: {
		novaImagem: "./src/imagens/card-chansey.png"
	},
	Tangela: {
		novaImagem: "./src/imagens/card-tangela.png"
	},
	Kangaskhan: {
		novaImagem: "./src/imagens/card-kangaskhan.png"
	},
	Horsea: {
		novaImagem: "./src/imagens/card-horsea.png"
	},
	Seadra: {
		novaImagem: "./src/imagens/card-seadra.png"
	},
	Goldeen: {
		novaImagem: "./src/imagens/card-goldeen.png"
	},
	Seaking: {
		novaImagem: "./src/imagens/card-seaking.png"
	},
	Staryu: {
		novaImagem: "./src/imagens/card-staryu.png"
	},
	Starmie: {
		novaImagem: "./src/imagens/card-starmie.png"
	},
	MrMime: {
		novaImagem: "./src/imagens/card-MrMime.png"
	},
	Scyther: {
		novaImagem: "./src/imagens/card-scyther.png"
	},
	Jynx: {
		novaImagem: "./src/imagens/card-jynx.png"
	},
	Electabuzz: {
		novaImagem: "./src/imagens/card-electabuzz.png"
	},
	Magmar: {
		novaImagem: "./src/imagens/card-magmar.png"
	},
	Pinsir: {
		novaImagem: "./src/imagens/card-pinsir.png"
	},
	Tauros: {
		novaImagem: "./src/imagens/card-tauros.png"
	},
	Magikarp: {
		novaImagem: "./src/imagens/card-magikarp.png"
	},
	Gyarados: {
		novaImagem: "./src/imagens/card-gyarados.png"
	},
	Lapras: {
		novaImagem: "./src/imagens/card-lapras.png"
	},
	Ditto: {
		novaImagem: "./src/imagens/card-ditto.png"
	},
	Eevee: {
		novaImagem: "./src/imagens/card-eevee.png"
	},
	Vaporeon: {
		novaImagem: "./src/imagens/card-vaporeon.png"
	},
	Jolteon: {
		novaImagem: "./src/imagens/card-jolteon.png"
	},
	Flareon: {
		novaImagem: "./src/imagens/card-flareon.png"
	},
	Porygon : {
		novaImagem: "./src/imagens/card-porygon.png"
	},
	Omanyte: {
		novaImagem: "./src/imagens/card-omanyte.png"
	},
	Omastar: {
		novaImagem: "./src/imagens/card-omastar.png"
	},
	Kabuto: {
		novaImagem: "./src/imagens/card-kabuto.png"
	},
	Kabutops: {
		novaImagem: "./src/imagens/card-kabutops.png"
	},
	Aerodactyl: {
		novaImagem: "./src/imagens/card-aerodactyl.png"
	},
	Snorlax: {
		novaImagem: "./src/imagens/card-snorlax.png"
	},
	Articuno: {
		novaImagem: "./src/imagens/card-articuno.png"
	},
	Zapdos: {
		novaImagem: "./src/imagens/card-zapdos.png"
	},
	Moltres: {
		novaImagem: "./src/imagens/card-moltres.png"
	},
	Dratini: {
		novaImagem: "./src/imagens/card-dratini.png"
	},
	Dragonair: {
		novaImagem: "./src/imagens/card-dragonair.png"
	},
	Dragonite: {
		novaImagem: "./src/imagens/card-dragonite.png"
	},
	Mewtwo: {
		novaImagem: "./src/imagens/card-mewtwo.png"
	},
	Mew: {
		novaImagem: "./src/imagens/card-mew.png"
	}
};

botaoAlterarImagem.addEventListener("click", function() {
    for (var liId in liData) {
        var liElement = document.getElementById(liId);

        if (liElement) { // Verifica se o elemento existe
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
    }
});
		
		
		
document.addEventListener('DOMContentLoaded', function () {
    var geracoes = document.querySelectorAll('.teste > li');
    var cartoes = document.querySelectorAll('.listagem-pokemon .cartao-pokemon');

    geracoes.forEach(function (geracao) {
        geracao.addEventListener('click', function () {
            var geracaoSelecionada = this.getAttribute('data-geracao');
            cartoes.forEach(function (cartao) {
                if (cartao.getAttribute('data-geracao') === geracaoSelecionada) {
                    cartao.style.display = '';
                } else {
                    cartao.style.display = 'none';
                }
            });
        });
    });
});
				