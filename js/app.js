$(function(){

  // Display information modal box
  $(".what").click(function(event){
    event.preventDefault();
    $(".overlay").fadeIn(1000);
  });

  // Hide information modal box
  $("a.close").click(function(event){
    event.preventDefault();
    $(".overlay").fadeOut(1000);
  });

  // Very simple class, with min and max defined inside the class itself.
  function Game() {
    this.min = 1;
    this.max = 100;

    // Notice the use of the this keyword.
    // A new (and hopefully different) randomNum will be generated
    // with each instance of the class.
    this.randomNum = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;

    // For debugging purposes, let's log randomNum to the console.
    console.log(this.randomNum);

    // Function to check if a guess is correct.
    // Notice that the value of this.randomNum never leaves this class.
    // This is an important OOP principle called encapsulation.
    this.makeGuess = function(guess) {
      return this.randomNum == guess;
    };
  }

  // Creating a new Game just once upon first execution of code.
  var currentGame = new Game();

  // Set a click listener for the New Game button.
  // Your implementation may be different.
  $("#newGame").on("click", function(event) {
    event.preventDefault();
    // Replace the current game with a new one.
    currentGame = new Game();

    // Reset the form back to an empty state.
    // This is just to make the application useable
    // and your implementation may be different.
    $("#feedback").html("Make your Guess!");
    $("#count").html("0");
    $("#guessList").html("");
    $("#guess").val("");
    $("#makeGuess").removeAttr("disabled");
    $("#guess").removeAttr("disabled");
  });

// Start counter at zero to keep track of guesses until victory
var count = 0;

// Set a click listener for the Make Guess button.
// Your implementation may be different.
  $("#makeGuess").on("click", function(event) {
    event.preventDefault();

    // Get the guess from the input
    var guess = $("#guess").val();


    // Using the context of the current game, call the makeGuess() function
    var result = currentGame.makeGuess(guess);


    var currentRandomNum = currentGame.randomNum;

    // Build the list element
    var listElement = $("<li>").html(guess).
        css("color", result ? 'green' : 'red');

    // Add the list element
    $("#guessList").append(listElement);



    // Reset the form
    $("#guess").val("");

    // Error validation message area
    var successOrVictoryMsgClick = $("#feedback");


    // Count the number of guesses until success
    var guessCountNum = $("#count");
    if(currentRandomNum != guess) {
      count++;
      guessCountNum.html(count);
    }

    // Form validation if the numbers 1-100 aren't entered
    // Form submit success and error messages
    if(isNaN(guess) || guess != Math.floor(guess) || guess > 100 || guess < 1 || guess == "") {
      successOrVictoryMsgClick.html("Sorry, you need to enter a whole number from 1 - 100 inclusive. Please try again.");
      // If number that is NOT 1-100 is entered then remove the blank guess which is an empty LI tag
      if(!$.trim($("selector").html())) {
        $(listElement).remove();
      }
    }
    else if(Math.abs(currentRandomNum - guess) > 30) {
      successOrVictoryMsgClick.html("You're very cold");
    }
    else if(Math.abs(currentRandomNum - guess) < 30 && Math.abs(currentRandomNum - guess) > 15) {
      successOrVictoryMsgClick.html("You're getting warmer");
    }
    else if(Math.abs(currentRandomNum - guess) < 15 && Math.abs(currentRandomNum - guess) > 5) {
      successOrVictoryMsgClick.html("You're getting hotter");
    }
    else if(Math.abs(currentRandomNum - currentRandomNum) < 5 && Math.abs(currentRandomNum - guess) > 0) {
      successOrVictoryMsgClick.html("You're very hot!");
    }

    //Success message!
    else if(Math.abs(currentRandomNum - currentRandomNum == 0)) {
      successOrVictoryMsgClick.html("You win! The number was " + currentRandomNum + ".");
      $("#count").html(count + 1);
    }



  });
  
});