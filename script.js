$(document).ready(function() {
    console.log( "ready!" );

var user;
var question;
//add click listeners to the new game button DONE
//when new game is clicked, prompt the user to enter their name DONE
//add short game description and instructions
$("button").click(function(){
  console.log("started a new game")
  user = prompt("Please enter your name")
  console.log(user);
})


//add click listeners to each card DONE
//prompt a question when a card is clicked
//allow only the first question to be clicked, and all others in numbered order

$(".cards div").click(function(){
    console.log($(".cards div").eq(1).html() + " button was clicked");
})


//if question is answered correctly, display congratulatory message and increase score by 1
//if question is answered incorrectly, display disapproving message and do not increase the score


//alert results when all questions have been answered
//////////Icebox///////////
//create button to alert a table of high scores//


});
