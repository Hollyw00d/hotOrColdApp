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

  // Class that defines variables or a new game
  // including min num, max num, random num and a
  // method to see if the random num is the same as the guess num
  function Game() {
    this.min = 1;
    this.max = 100;

    // Random num property from 1 - 100 inclusive
    this.randomNum = Math.floor(Math.random() * (this.max - this.min + 1)) +
        this.min;

    // Method to check if a guess is the same as the random num
    this.makeGuess = function(guess) {
      return this.randomNum == guess;
    };
  }

  // Instantiate the "Game" class
  var currentGame = new Game();

  // Set guess tracker "count" variable to zero
  var count = 0;

  // Set a click listener for the "New Game" button
  $("#newGame").on("click", function(event) { 
    event.preventDefault();

    // Replace the current game with a new one
    currentGame = new Game();

    // Reset the form but to it's empty state
    $("#feedback").html("Make your Guess!");

    // For new games set guess tracker "count" variable to zero
    count = 0;

    $("#count").html("0");
    $("#guessList").html("");
    $("#guess").val("").removeAttr("disabled");
    $("#makeGuess").removeAttr("disabled");
//    $("#guess").removeAttr("disabled");
  });


// Set a click listener for the Make Guess button.
// Your implementation may be different.
  $("#makeGuess").on("click", function(event) {
    event.preventDefault();

    // Get the number value from the "Enter Your Guess" field
    // *The "guess" variable here is NOT the same as the "guess" parameter
    // on lines 27 thru 28
    var guess = $("#guess").val();

    // The value of the "result" variable is true when the "guess" variable is
    // the same as the "randomNum" variable
    var result = currentGame.makeGuess(guess);

    // Assign the "randomNum" property to a "currentRandomNum" variable
    // for error reporting later
    var currentRandomNum = currentGame.randomNum;

    // Display the guesses inside <li> elements and it the guess random num
    // matches the guess color text green and if not color it red
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
      console.log("Guess Count: " + count);
    }

    // Form validation if the numbers 1-100 aren't entered
    // Form submit success and error messages
    if(isNaN(guess) || guess != Math.floor(guess) || guess > 100 ||
        guess < 1 || guess == "") {
      successOrVictoryMsgClick.html("Sorry, you need to enter a whole number " +
          "from 1 - 100 inclusive. Please try again.");
      // If number that is NOT 1-100 is entered then remove the blank guess
      // which is an empty <li> element
      if(!$.trim($("selector").html())) {
        $(listElement).remove();
      }
    }
    else if(Math.abs(currentRandomNum - guess) > 30) {
      successOrVictoryMsgClick.html("You're very cold");
    }
    else if(Math.abs(currentRandomNum - guess) < 30 && Math.abs(
      currentRandomNum - guess) > 15) {
      successOrVictoryMsgClick.html("You're getting warmer");
    }
    else if(Math.abs(currentRandomNum - guess) < 15 && Math.abs(
      currentRandomNum - guess) > 5) {
      successOrVictoryMsgClick.html("You're getting hotter");
    }
    else if(Math.abs(currentRandomNum - currentRandomNum) < 5 && Math.abs(
        currentRandomNum - guess) > 0) {
      successOrVictoryMsgClick.html("You're very hot!");
    }

    //Success message!
    else if(Math.abs(currentRandomNum - currentRandomNum == 0)) {
      successOrVictoryMsgClick.html("You win! The number was " +
        currentRandomNum + ".");
      $("#count").html(count + 1);
    }

  });
  
});