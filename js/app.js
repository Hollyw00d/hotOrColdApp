$(function(){

			// Display information modal box
			$(".what").click(function(){
				$(".overlay").fadeIn(1000);

			});

			// Hide information modal box
			$("a.close").click(function(){
				$(".overlay").fadeOut(1000);
			});


		// Constructor to reset game after clicking "New Game" button
		function NewGame(newGameBtn, min, max, guessButton, successOrVictoryMsg, userGuess, guessCount, guessList) {
			this.newGameBtn = newGameBtn;
			this.min = min;
			this.max = max;
			this.successOrVictoryMsg = successOrVictoryMsg;
			this.userGuess = userGuess;
			this.guessCount = guessCount;
			this.guessList = guessList;
			this.startNewGame = function() {
				return $(newGameBtn).on("click", function(event) {
					event.preventDefault();
					var randomNum = "";
					randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
					$(userGuess).val("");
					$(userGuess).val();
					$(successOrVictoryMsg).html("Make your Guess!");
					//$(userGuess).val("");
					$(guessCount).html("0");
					$(guessList).html("");

					// After clicking "Guess" button check to see if user number guess is cold, hot or correct
					// compared to random number

					// Start click counter at zero
					var count = 0;

					$(guessButton).on("click", function(event) {
						event.preventDefault();

						var userGuessNum = $("#userGuess").val();
						var successOrVictoryMsgClick = $("#feedback");
						var guessCountNum = $("#count");

						// Count clicks and user list of guessed numbers until correct guess
						if(randomNum != userGuessNum) {
							count++;
							guessCountNum.html(count);

							var userGuessList = $("<li>").html(userGuessNum);
							$("#guessList").append(userGuessList);
						}

						// Form submit success and error messages
						if(isNaN(userGuessNum) || userGuessNum != Math.floor(userGuessNum) || userGuessNum > 100 || userGuessNum < 1) {
							successOrVictoryMsgClick.html("Sorry, you need to enter a whole number from 1 - 100 inclusive. Please try again.::" + randomNum);
						}
						else if(Math.abs(randomNum - userGuessNum) > 30) {
							successOrVictoryMsgClick.html("You're very cold:: " + randomNum);
						}
						else if(Math.abs(randomNum - userGuessNum) < 30 && Math.abs(randomNum - userGuessNum) > 15) {
							successOrVictoryMsgClick.html("You're getting warmer:: " + randomNum);
						}
						else if(Math.abs(randomNum - userGuessNum) < 15 && Math.abs(randomNum - userGuessNum) > 5) {
							successOrVictoryMsgClick.html("You're getting hotter:: " + randomNum);
						}
						else if(Math.abs(randomNum - userGuessNum) < 5 && Math.abs(randomNum - userGuessNum) > 0) {
							successOrVictoryMsgClick.html("You're very hot!:: " + randomNum);
						}
						else if(randomNum == userGuessNum) {
							successOrVictoryMsgClick.html("You are correct!:: " + randomNum);
						}

					});

				});

			}

		}

		// Instantiate NewGame class and then call startNewGame method from class including
		// setting random number
		var restartGame = new NewGame(".new", 1, 100, "#guessButton", "#feedback", "#userGuess", "#count", "#guessList");
		restartGame.startNewGame();

});