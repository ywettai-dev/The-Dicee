//Random Number One between 1 and 6
var randomNumberOne = Math.floor(Math.random() * 6) + 1;

//Random Image for Dicee One
var randomImageOne = "dice" + randomNumberOne + ".png";

//Random Image Source One
var randomImageSourceOne = "assets/images/";

//Create a query selector for Dicee One
var DiceeOne = document.querySelector(".dice .dice-one"); //document.querySelectorAll("img")[0];

//Replace Dicee One (6) with randowm generated image Dicee One
DiceeOne.setAttribute("src", randomImageSourceOne + randomImageOne);

//Random Number Two between 1 and 6
var randomNumberTwo = Math.floor(Math.random() * 6) + 1;

//Random Image for Dicee Two
var randomImageTwo = "dice" + randomNumberTwo + ".png";

//Random Image Source Two
var randomImageSourceTwo = "assets/images/";

//Create a query selector for Dicee Two
var DiceeTwo = document.querySelector(".dice .dice-two"); //document.querySelectorAll("img")[1];

//Replace Dicee Two (6) with random generate image Dicee Two
DiceeTwo.setAttribute("src", "assets/images/" + randomImageTwo);

//h1 element dom selector
var bigTitle = document.querySelector("h1");

//Manipulate h1 element to announce which player won or draw
if (randomNumberOne > randomNumberTwo) {

    bigTitle.innerHTML = "🚩Player 1 Wins";

}else if (randomNumberOne < randomNumberTwo) {

    bigTitle.innerHTML = "Player 2 Wins 🚩";
}else{

    bigTitle.innerHTML = "Draw!";
}