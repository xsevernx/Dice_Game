


//Number 2 dice-set randomNumber1 + randomNumber2 to control image number 1-6
//Dice 1
var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;
//Dice 2
var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;

//Using randomNUmber 1 & 2 to change images of dice
document.querySelector("img.img1").setAttribute("src", "images/dice" + [randomNumber1] + ".png");
document.querySelector("img.img2").setAttribute("src", "images/dice" + [randomNumber2] + ".png");

// calculate winner and change title text to display Winner or Draw

  if (randomNumber1 > randomNumber2) {
    (document.querySelector("h1").innerHTML="Player 1 Wins");
  }
  else if (randomNumber1 < randomNumber2) {
    (document.querySelector("h1").innerHTML="Player 2 Wins");
  } else
  (document.querySelector("h1").innerHTML="Draw");
