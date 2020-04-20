var allButtons = document.querySelectorAll(".drum");

//Iterar sobre a lista de botões e associar a cada um um event listener triggered quando há um click no botão.
for (var i = 0; i < allButtons.length; i++) {

  allButtons[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  });
}

//Associar a todo o objecto document um event listener triggered quando a tecla correspondente
//a um dos sete botoes é premida.
document.addEventListener("keydown", function() {
  playSound(event.key);
  buttonAnimation(event.key);
});


//Simula animacao premir um dos botoes - adiciona classe css 
//e remove-a após timeout
function buttonAnimation(key) {
  var activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}

//Reproduz determinado som consoante o nome da tecla pressionada
function playSound(key) {
  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "a":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
}
