$(document).ready(function() {
    console.log( "ready!" );

var user;
var score = 0;
//begin with all questions disabled
$(".cards div").css("pointer-events", "none")

//add click listeners to the new game button DONE
$("button").click(function(){
  console.log("started a new game")
  //when new game is clicked, prompt the user to enter their name DONE
  user = prompt("Please enter your name")
  //add short game description and instructions
  alert("Hi " + user)
  $(".cards div").eq(0).css("pointer-events", "auto")

})


//add click listeners to each card DONE
//prompt a question when a card is clicked
//allow only the first question to be enabled after new game DONE
//add 1 to the score if question is correctly answered
//allow each question in order after the preceding question has been answered

$(".cards div").eq(0).click(function(){
    var question0 = prompt("Is Pluto a planet?")
    if (question0.toLowerCase() == "no") {
      alert("Correct!")
      $(".cards div").eq(0).css("background-color", "chartreuse")
      $(".cards div").eq(1).css("pointer-events", "auto")
      score = score + 1
      $(".score").eq(0).html("Score: " + score)
    }
    else {
      alert("Incorrect.")
      $(".cards div").eq(0).css("background-color", "red")
      $(".cards div").eq(1).css("pointer-events", "auto")


    }
})

$(".cards div").eq(1).click(function(){
  var question1 = prompt("Is Pluto a planet?")
  if (question1.toLowerCase() == "no") {
    alert("Correct!")
    $(".cards div").eq(1).css("background-color", "chartreuse")
    $(".cards div").eq(2).css("pointer-events", "auto")
    score = score + 1
    $(".score").eq(1).html("Score: " + score)

  }
  else {
    alert("Incorrect.")
    $(".cards div").eq(1).css("background-color", "red")
    $(".cards div").eq(1).css("pointer-events", "auto")

  }


})

$(".cards div").eq(2).click(function(){
  var question2 = prompt("Is Pluto a planet?")
  if (question2.toLowerCase() == "no") {
    alert("Correct!")
    $(".cards div").eq(2).css("background-color", "chartreuse")
    $(".cards div").eq(3).css("pointer-events", "auto")
  }
  else {
    alert("Incorrect. Try again.")
  }
})

$(".cards div").eq(3).click(function(){
  var question3 = prompt("Is Pluto a planet?")
  if (question3.toLowerCase() == "no") {
    alert("Correct!")
    $(".cards div").eq(3).css("background-color", "chartreuse")
    $(".cards div").eq(4).css("pointer-events", "auto")
  }
  else {
    alert("Incorrect. Try again.")
  }
})

$(".cards div").eq(4).click(function(){
  var question4 = prompt("Is Pluto a planet?")
  if (question4.toLowerCase() == "no") {
    alert("Correct!")
    $(".cards div").eq(4).css("background-color", "chartreuse")
    $(".cards div").eq(5).css("pointer-events", "auto")
  }
  else {
    alert("Incorrect. Try again.")
  }
})


$(".cards div").eq(5).click(function(){
  var question5 = prompt("Is Pluto a planet?")
  if (question5.toLowerCase() == "no") {
    alert("Correct!")
    $(".cards div").eq(5).css("background-color", "chartreuse")
    $(".cards div").eq(6).css("pointer-events", "auto")
  }
  else {
    alert("Incorrect. Try again.")
  }
})

$(".cards div").eq(6).click(function(){
  var question6 = prompt("Is Pluto a planet?")
  if (question6.toLowerCase() == "no") {
    alert("Correct!")
    $(".cards div").eq(6).css("background-color", "chartreuse")
    $(".cards div").eq(7).css("pointer-events", "auto")
  }
  else {
    alert("Incorrect. Try again.")
  }
})

$(".cards div").eq(7).click(function(){
  var question7 = prompt("Is Pluto a planet?")
  if (question7.toLowerCase() == "no") {
    alert("Correct!")
    $(".cards div").eq(7).css("background-color", "chartreuse")
    $(".cards div").eq(8).css("pointer-events", "auto")
  }
  else {
    alert("Incorrect. Try again.")
  }
})


$(".cards div").eq(8).click(function(){
  var question8 = prompt("Is Pluto a planet?")
  if (question8.toLowerCase() == "no") {
    alert("Correct!")
    $(".cards div").eq(8).css("background-color", "chartreuse")
    $(".cards div").eq(9).css("pointer-events", "auto")
  }
  else {
    alert("Incorrect. Try again.")
  }
})

$(".cards div").eq(9).click(function(){
  var question9 = prompt("Is Pluto a planet?")
  if (question9.toLowerCase() == "no") {
    alert("Correct!")
    $(".cards div").eq(9).css("background-color", "chartreuse")
    $(".cards div").eq(10).css("pointer-events", "auto")
  }
  else {
    alert("Incorrect. Try again.")
  }
})

$(".cards div").eq(10).click(function(){
  var question10 = prompt("Is Pluto a planet?")
  if (question10.toLowerCase() == "no") {
    alert("Correct!")
    $(".cards div").eq(10).css("background-color", "chartreuse")
    $(".cards div").eq(11).css("pointer-events", "auto")
  }
  else {
    alert("Incorrect. Try again.")
  }
})


$(".cards div").eq(11).click(function(){
  var question11 = prompt("Is Pluto a planet?")
  if (question11.toLowerCase() == "no") {
    alert("Correct!")
    $(".cards div").eq(11).css("background-color", "chartreuse")
    $(".cards div").eq(12).css("pointer-events", "auto")
  }
  else {
    alert("Incorrect. Try again.")
  }
})

$(".cards div").eq(12).click(function(){
  var question12 = prompt("Is Pluto a planet?")
  if (question12.toLowerCase() == "no") {
    alert("Correct!")
    $(".cards div").eq(13).css("background-color", "chartreuse")
    $(".cards div").eq(13).css("pointer-events", "auto")
  }
  else {
    alert("Incorrect. Try again.")
  }
})

$(".cards div").eq(13).click(function(){
  var question13 = prompt("Is Pluto a planet?")
  if (question13.toLowerCase() == "no") {
    alert("Correct!")
    $(".cards div").eq(13).css("background-color", "chartreuse")
    $(".cards div").eq(14).css("pointer-events", "auto")
  }
  else {
    alert("Incorrect. Try again.")
  }
})


$(".cards div").eq(14).click(function(){
  var question14 = prompt("Is Pluto a planet?")
  if (question14.toLowerCase() == "no") {
    alert("Correct!")
    $(".cards div").eq(14).css("background-color", "chartreuse")
  }
  else {
    alert("Incorrect. Try again.");
  }
})



//if question is answered correctly, display congratulatory message and increase score by 1
//if question is answered incorrectly, display disapproving message and do not increase the score


//alert results when all questions have been answered
//////////Icebox///////////
//create button to alert a table of high scores//


});
