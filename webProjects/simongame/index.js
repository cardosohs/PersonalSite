//armazena sequencias de cores geradas aleatoriamente pelo jogo
var gamePattern = [];
//armazena sequencia de cores clicadas pelo jogador
var userClickedPattern = [];
//as 4 cores possiveis
var buttonColours = ["red", "blue", "green", "yellow"];
//textos de congrat possiveis
var congratText = ["Good", "Nice!", "Great!", "Awesome!", "You're killing it!", "We've a champ here!", "I knew you were the CHOSEN ONE!"];
//variaveis de estado do jogo
var level = 0;
var gameStarted = false;
var gameIsOver = false;

/*Todo cria um listener para a página triggered assim que um tecla é premida*/
$(document).on("click", function() {
  //se o jogo não comecou E se o jogo nao acabou, chamar o proximo nivel e começar o jogo
  if (!gameStarted && !gameIsOver) {
    nextSequence();
    gameStarted = true;
  }
  //caso contrario, o jogo acabou
  if (gameIsOver) {
    restartValues();
  }
})

/*Trigger para clique em um dos botoes*/
$(".btn").on("click", function() {
  //seleciona o nome da cor do botao clicado...
  var userChosenColour = $(this).attr("id");
  //... adiciona ao array de cores clicadas pelo jogador...
  userClickedPattern.push(userChosenColour);
  //... reproduz o som do botao e aplica animacao...
  playSound(userChosenColour);
  animatePress(userChosenColour);
  //... e verifica A CADA CLIQUE se as sequencias coincidem
  checkAnswer(userClickedPattern.length - 1)
});

/*Funcao chamada para fazer o jogo subir de nivel*/
function nextSequence() {
  //reinicia os padroes clicados pelo jogador
  userClickedPattern = [];
  //acrescenta em um o nivel
  $("#level-title").text("Level " + level);
  level++;
  //calcula um random de 0 a 3
  var randomNumber = Math.floor(Math.random() * 4);
  //seleciona a proxima cor do array de cores disponiveis
  var randomChosenColour = buttonColours[randomNumber];
  //acrescenta a cor escolhida ao array da sequencia do jogo
  gamePattern.push(randomChosenColour);
  //ao escolher uma cor aleatória, mostra qual é a mesma
  //para o jogador através de uma animação e som da cor
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

/*Funcao callback para quando for clicado um dos quatro botoes coloridos*/
function playSound(colourName) {
  //cria um novo audio com base no som da cor e o reproduz
  var audio = new Audio("sounds/" + colourName + ".mp3")
  audio.play();
}

/*Funcao callback para quando for clicado um dos quatro botoes coloridos*/
function animatePress(colourName) {
  //animacao: faz o botao "piscar" quando pressionado
  $("#" + colourName).addClass("pressed");
  setTimeout(function() {
    $("#" + colourName).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel) {
  //compara os dois arrays de respostas - o criado pelo jogo e o clicado pelo jogador
  //se o elemento do level for igual e os arrays tiverem o mesmo tamanho...
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (gamePattern.length === userClickedPattern.length) {
      //... mudar o h1 para um texto de congrat...
      setTimeout(function() {
        $("#level-title").text(congratText[Math.floor((level+1)/5)]);
      }, 100);
      //... e seguir para o proximo level apos 1s.
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
  } else {
    gameOver();
  }
}


function gameOver() {
  playSound("wrong");
  //animação: faz toda a tela "piscar" a vermelho uma vez
  $("body").addClass("game-over");
  setTimeout(function() {
    $("body").removeClass("game-over");
  }, 200);
  //
  $("#level-title").text("Game Over 😥, Tap anywhere to Restart");
  //acabar o jogo
  gameIsOver = true;
}

/*Reinicializa as variáveis para um novo jogo*/
function restartValues() {
  gamePattern = [];
  userClickedPattern = [];
  gameStarted = false;
  gameIsOver = false;
  level = 0;
  $("#level-title").text("Tap anywhere to Start");
}
