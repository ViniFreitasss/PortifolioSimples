(function(){
	//arrays que armazenam o estado do jogo e o de vitória, respectivamente
	var tiles = [],
		answer = [];
		
	//tela de start game
	var startScreen = document.querySelector("#startScreen");
		startScreen.addEventListener("click",startGame,false);
	var overScreen = document.querySelector("#overScreen");
		
	//função que inicializa os elementos do jogo
	function init(){
		//varre os elementos 'btn' adicionando a imagem e inserindo os elementos no array
		for(var i = 1; i < 9; i++){
			var tile = document.querySelector("#n"+i);
			tile.style.background = "url('img/n"+ i +".png')";
			tile.addEventListener("click",moveTile,false);
			tiles.push(tile);
		}
		//completa o array com um espaço nulo e o copia para a resposta, depois renderiza o tabuleiro
		tiles.push(null);
		answer = tiles;
		
		render();
	}
	
	//ajusta a exibição do tabuleiro em função do array tiles
	function render(){
		for(var i in tiles){
			var tile = tiles[i];
			if(tile){
				tile.style.left = (i%3) * 100 + 5 + "px";
				if(i<3){
					tile.style.top = "5px";
				} else 
				if(i<6){
					tile.style.top = "105px";
				} else {
					tile.style.top = "205px";
				}
			
			}
		}
	}
	
	//valida o array
	/*
	 * o sistema conta uma inversão ao comparar o valor do índice i com os seguintes e identificar valores menores
	 * Caso o array apresente um número ímpar de inversões, o sistema é insolucionável
	 * */
	function validGame(array){
		var inversions = 0;
		var len = array.length;
		for(var i = 0; i < len-1; i++){
			for(var j = i; j < len; j++){
				if(array[i] && array[j] && array[i].dataset.value > array[j].dataset.value){
					inversions++;
				}
			}
		}
		return inversions % 2 === 0;
	}
	
	//ordenação aleatória do array
	function randomSort(oldArray){
		var newArray;
		do{
			var newArray = [];
			while(newArray.length < oldArray.length){
				var i = Math.floor(Math.random() * oldArray.length);
				if(newArray.indexOf(oldArray[i]) < 0){
					newArray.push(oldArray[i]);
				}
			}
		}while(!validGame(newArray));
		
		return newArray;
	}
	
	//função que inicia o jogo embaralhando o array e desabilitando a tela inicial
	function startGame(){
		tiles = randomSort(tiles);
		this.removeEventListener("click",startGame,false);
		this.style.opacity = "0";
		this.style.zIndex = -1;
		render();
	}
	
	function moveTile(){
		var index = tiles.indexOf(this);
		
		//confere se a peça não está na coluna da esquerda
		if(index % 3 !== 0){
			//move a peça para a esquerda, caso o espaço esteja vazio
			if(!tiles[index-1]){
				tiles[index-1] = this;
				tiles[index] = null;
			}
		}
		
		//confere se a peça não está na coluna da esquerda
		if(index % 3 !== 2){
			//move a peça para a direita, caso o espaço esteja vazio
			if(!tiles[index+1]){
				tiles[index+1] = this;
				tiles[index] = null;
			}
		}
		
		//confere se a peça não está na coluna do topo
		if(index > 2){
			//move a peça para o topo, caso o espaço esteja vazio
			if(!tiles[index-3]){
				tiles[index-3] = this;
				tiles[index] = null;
			}
		}
		
		//confere se a peça não está na coluna do fundo
		if(index < 6){
			//move a peça para baixo, caso o espaço esteja vazio
			if(!tiles[index+3]){
				tiles[index+3] = this;
				tiles[index] = null;
			}
		}
		
		render();
		
		//verificar a condição de vitória
		if(chkWin()){
			gameOver();
		}
		
		function chkWin(){
			for(var i in tiles){
				var a = tiles[i];
				var b = answer[i];
				if(a !== b){
					return false;
				}
			}
			return true;
		}
		
		function gameOver(){
			overScreen.style.zIndex = "1";
			overScreen.style.opacity = "1";
			setTimeout(function(){
				overScreen.addEventListener("click",startGame,false);
			},500);
		}
	}
	
	init();
}());
