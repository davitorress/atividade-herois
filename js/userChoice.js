function userChoice() {
	const universeMarvel = {
		name: "marvel",
		heroes: {
			id: ["ironMan", "doctorStrange", "scarletWitch", "thor", "groot"],
			name: ["homem de ferro", "doutor estranho", "feiticeira escarlate", "thor", "groot"],
			text: [
				[
					`O Homem de Ferro (Iron Man) foi um personagem dos quadrinhos publicados pela Marvel Comics. Sua verdadeira identidade é o empresário e bilionário Tony Stark, que usou armaduras de alta tecnologia no combate ao crime.`,
					`Foi criado em 1963 pelo escritor Stan Lee, o roteirista Larry Lieber e os desenhistas Jack Kirby e Don Heck. Stan Lee aceitou o desafio de fazer um personagem ser odiado e depois amado pelo público, criando um dos super-heróis mais marcantes de todos os tempos.`,
				],
				[
					`O doutor Stephen Vincent Strange, mais conhecido como Doutor Estranho, é um super-herói que aparece nos quadrinhos publicados pela Marvel Comics. Criado pelo desenhista Steve Ditko e pelo roteirista Stan Lee, o personagem apareceu pela primeira vez em Strange Tales #110 (julho de 1963).`,
					`O Doutor Estranho serve como o Mago Supremo, o principal protetor da Terra contra ameaças mágicas e místicas. Inspirado por histórias de magia negra e o programa de rádio Chandu, the Magician, Strange foi criado durante a Era de Prata das histórias em quadrinhos e trouxe temas de misticismo para a Marvel Comics.`,
				],
				[
					`Feiticeira Escarlate (Scarlet Witch no original) é uma super-heroína que aparece nos quadrinhos americanos publicados pela Marvel Comics. A personagem foi criada pelo roteirista Stan Lee e pelo desenhista Jack Kirby. Sua primeira aparição foi em "X-Men" # 4 (março de 1964) na Era de prata das histórias em quadrinhos americanas.`,
					`Dizia originalmente que tinha a capacidade de alterar a probabilidade, a Feiticeira Escarlate foi retratada como uma feiticeira poderosa desde os anos 1980 e mais tarde foi considerada poderosa o suficiente para alterar a realidade. Na maior parte de sua história em quadrinhos, ela é retratada como uma mutante, um membro de uma subespécie fictícia de humanos nascidos com um "gene X" que concede habilidades e características sobre-humanas, mas no Universo Cinematográfico Marvel, a Marvel revisou suas características sobre-humanas sendo magia natural amplificada por uma experimentação de Hidra quando ela era criança.`,
				],
				[
					`Thor Odinson, geralmente simplesmente Thor, é um personagem fictício que aparece nos quadrinhos americanos publicados pela Marvel Comics. O personagem é baseado no deus mitológico nórdico de mesmo nome, o deus asgardiano do trovão, cujo martelo encantado Mjolnir lhe permite voar e manipular o clima, entre outros atributos sobre-humanos. Um membro fundador da equipe de super-heróis dos Vingadores, Thor tem uma série de personagens coadjuvantes e inimigos.`,
					`Estreando na Era de Prata dos Quadrinhos, o personagem apareceu pela primeira vez em Journey into Mystery #83 (agosto de 1962) e foi criado pelo artista Jack Kirby, escritor Stan Lee e roteirista Larry Lieber.`,
				],
				[
					`Groot é um personagem fictício que aparece nas histórias em quadrinhos publicadas pela Marvel Comics. Sua primeira versão foi criada por Stan Lee, Jack Kirby e Dick Ayers, aparecendo pela primeira vez em "Tales to Astonish" #13 (Novembro de 1960). Nessa versão Groot era uma criatura com a aparência de uma árvore Humanoide, que buscava seres alienígenas para usá-las em experimentos científicos.`,
					`O personagem foi reformulado em 2006 por Keith Giffen e Timothy Green II para ser um nobre herói, aparecendo pela primeira vez no enredo Annihilation: Conquest (Setembro de 2007). Groot passou a estrelar sua série spin-off, Guardiões da Galáxia, juntando-se à equipe de mesmo nome.`,
				],
			],
		},
		src: "https://i.pinimg.com/originals/e6/01/46/e60146b3187908f5a06c17620d9a027e.png",
		altImg: "Logo da Marvel",
		width: "150px",
	};
	let getMarvel = universeMarvel.name.toLowerCase();
	let getMarvelHero = universeMarvel.heroes.name;
	let getMarvelHeroId = universeMarvel.heroes.id;

	const universeDc = {
		name: "dc",
		heroes: {
			id: ["catwoman", "batman", "superman", "wonderWoman", "flash"],
			name: ["mulher gato", "batman", "superman", "mulher maravilha", "flash"],
			text: [
				[
					`Mulher-Gato (em inglês, Catwoman) é o alter ego de Selina Kyle, uma personagem fictícia de histórias em quadrinhos; publicada pela editora estadunidense DC Comics, comumente em associação com o Batman. Criada por Bill Finger e Bob Kane, teve sua primeira aparição na edição número 1 de Batman, em 1940, no qual ela é conhecida como "A Gata".`,
					`A Mulher Gato foi tradicionalmente retratada como vilã do Batman, mas desde o final da década de 60, ela veem sendo escrita mais simpática. Com a sua série mensal dos anos 90, Selina Kyle foi restabelecida como anti-heroína no cânone da DC. Mulher Gato é conhecida por compartilhar uma rivalidade e romance complexo com Batman, permanecendo o mais longo interesse amoroso do super-herói.`,
				],
				[
					`O Batman (inicialmente chamado o Bat-Man) também conhecido pelas alcunhas Homem-Morcego, Cavaleiro das Trevas, Cruzado Encapuzado, Maior Detetive do Mundo, é um personagem fictício e super-herói encapuçado da editora norte-americana DC Comics, criado pelo desenhista Bob Kane e pelo escritor Bill Finger, aparecendo pela primeira vez na história em quadrinhos Detective Comics#27 (maio de 1939) com o nome "o Bat-Man".`,
					`A identidade secreta do Batman é Bruce Wayne, um bilionário americano, playboy, magnata de negócios, filantropo e dono da corporação Wayne Enterprises. Depois de testemunhar o assassinato dos seus pais enquanto criança, Wayne jurou vingança contra os criminosos — um juramento moderado por um ideal justiça. Wayne, então, treina física e intelectualmente e cria uma persona inspirada no morcego para combater o crime.`,
				],
				[
					`Superman ou Super-Homem é um super-herói de histórias em quadrinhos publicadas pela DC Comics. Foi criado pela dupla de autores de quadrinhos Joe Shuster e Jerry Siegel. Sua primeira aparição aconteceu no verão de 1938, na revista Action Comics #1. O personagem nasceu no planeta fictício Krypton e tinha o nome de Kal-El.`,
					`É um dos mais importantes personagens da cultura pop ocidental, sendo o primeiro herói dos quadrinhos a ter uma revista intitulada com seu nome: Superman #1. Para acompanhar a evolução do público, sua origem e seus poderes foram expandidos e alterados ao longo dos anos. A história do Superman foi alterada para permitir as aventuras do Superboy e outros sobreviventes como a Supergirl e Krypto, o supercão. O personagem foi revisado e atualizado mais recentemente em 1986.`,
				],
				[
					`Mulher Maravilha é uma super-heroína americana de quadrinhos criada pelo psicólogo e escritor americano William Moulton Marston (pseudônimo: Charles Moulton), e pelo artista Harry G. Peter. A esposa de Marston, Elizabeth, e sua parceira de vida, Olive Byrne, são creditadas como sendo sua inspiração para a aparência do personagem.`,
					`Mulher Maravilha é publicado pela DC Comics. O personagem é um membro fundador da Liga da Justiça. A personagem apareceu pela primeira vez em All Star Comics #8 publicado em 21 de outubro de 1941 com seu primeiro longa em Sensation Comics #1 em janeiro de 1942.`,
				],
				[
					`The Flash (ou simplesmente Flash) é o nome de vários super-heróis que aparecem nos quadrinhos americanos publicados pela DC Comics. Criado pelo escritor Gardner Fox e pelo artista Harry Lampert, o Flash original apareceu pela primeira vez em Flash Comics #1 (data de capa janeiro de 1940/mês de lançamento novembro de 1939). Apelidado de "o Velocista Escarlate", todas as encarnações do Flash possuem "supervelocidade", que inclui a capacidade de correr, se mover e pensar extremamente rápido, usar reflexos sobre-humanos e aparentemente violar certas leis da física.`,
					`Até agora, pelo menos cinco personagens diferentes - cada um dos quais de alguma forma ganhou o poder da "Força de Aceleração" - assumiram o manto do Flash na história da DC: o atleta universitário Jay Garrick (1940-1951, 1961-2011, 2017-presente ), o cientista forense Barry Allen (1956–1985, 2008–presente), o sobrinho de Barry Wally West (1986–2011, 2016–presente), o neto de Barry Bart Allen (2006–2007) e o chinês-americano Avery Ho (2017–presente) ). Cada encarnação do Flash tem sido um membro-chave de pelo menos uma das principais equipes da DC: a Sociedade da Justiça da América, a Liga da Justiça e os Jovens Titãs.`,
				],
			],
		},
		src: "https://logodownload.org/wp-content/uploads/2017/05/dc-comics-logo.png",
		altImg: "Logo da DC",
		width: "50px",
	};
	let getDc = universeDc.name.toLowerCase();
	let getDcHero = universeDc.heroes.name;
	let getDcHeroId = universeDc.heroes.id;

	let universeLogo = document.getElementById("universe-logo");
	let heroName = document.querySelector("#hero-name");
	let heroImg = document.querySelector(".hero-img");

	let content = document.querySelector(".content");
	content.hasChildNodes() ? deleteChild(content, content.childElementCount) : console.log(content.hasChildNodes());

	let setUniverse = prompt("Escolha o universo (Marvel e DC)").toLowerCase();

	if (setUniverse == getMarvel) {
		universeLogo.src = universeMarvel.src;
		universeLogo.alt = universeMarvel.altImg;
		universeLogo.style.width = universeMarvel.width;

		let setHero = prompt(
			"Escolha o herói (Homem de Ferro, Doutor Estranho, Feiticeira Escarlate, Thor e Groot)"
		).toLowerCase();

		if (getMarvelHero.includes(setHero)) {
			let heroIndex = getMarvelHero.indexOf(setHero);

			heroName.innerHTML = getMarvelHero[heroIndex];
			heroImg.innerHTML = `<div id=${getMarvelHeroId[heroIndex]}>`;

			for (let i = 0; i < universeMarvel.heroes.text[heroIndex].length; i++) {
				let p = document.createElement("p");
				p.innerHTML = `<p>${universeMarvel.heroes.text[heroIndex][i]}</p>`;

				content.appendChild(p);
			}
		} else {
			heroName.innerHTML = "Herói Inválido";
			heroImg.hasChildNodes() ? heroImg.removeChild(heroImg.firstChild) : console.log(heroImg.hasChildNodes());
		}
	} else if (setUniverse == getDc) {
		universeLogo.src = universeDc.src;
		universeLogo.alt = universeDc.altImg;
		universeLogo.style.width = universeDc.width;

		let setHero = prompt("Escolha o herói (Mulher Gato, Batman, Superman, Mulher Maravilha e Flash)").toLowerCase();

		if (getDcHero.includes(setHero)) {
			let heroIndex = getDcHero.indexOf(setHero);

			heroName.innerHTML = getDcHero[heroIndex];
			heroImg.innerHTML = `<div id=${getDcHeroId[heroIndex]}>`;

			for (let i = 0; i < universeDc.heroes.text[heroIndex].length; i++) {
				let p = document.createElement("p");
				p.innerHTML = `<p>${universeDc.heroes.text[heroIndex][i]}</p>`;

				content.appendChild(p);
			}
		} else {
			heroName.innerHTML = "Herói Inválido";
			heroImg.hasChildNodes() ? heroImg.removeChild(heroImg.firstChild) : console.log(heroImg.hasChildNodes());
		}
	} else {
		alert("Universo Inválido!");
	}

	document.getElementById("main").style.visibility = "visible";
}

function deleteChild(parent, count) {
	for (let i = 0; i < count; i++) {
		parent.removeChild(document.querySelector("p"));
	}
}
