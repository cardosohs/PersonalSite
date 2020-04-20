function randomBetween1and6() {
  return Math.floor(Math.random() * 6 + 1);
}

function imageName(number) {
  var imgName;
  switch (number) {
    case 1:
      imgName = "images/dice1.png";
      break;
    case 2:
      imgName = "images/dice2.png";
      break;
    case 3:
      imgName = "images/dice3.png";
      break;
    case 4:
      imgName = "images/dice4.png";
      break;
    case 5:
      imgName = "images/dice5.png";
      break;
    case 6:
      imgName = "images/dice6.png";
      break;
  }
  return imgName;
}


function rollDice() {

  var player1Number = randomBetween1and6();
  var player2Number = randomBetween1and6();

  document.querySelector(".img1").setAttribute("src", imageName(player1Number));

  document.querySelector(".img2").setAttribute("src", imageName(player2Number));

  if (player1Number > player2Number) {
    document.querySelector("h1").textContent = "🏆 Player 1 Wins!";
  } else if (player1Number < player2Number) {
    document.querySelector("h1").textContent = "Player 2 Wins! 🏆";
  } else {
    document.querySelector("h1").textContent = "Draw!";
  }
}
