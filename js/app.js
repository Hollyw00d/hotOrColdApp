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
		function NewGame(newGameBtn, min, max, mainHeading, guessButton, successOrVictoryMsg, userGuess, guessCount) {
			this.newGameBtn = newGameBtn;
			this.min = min;
			this.max = max;
			this.mainHeading = mainHeading;
			this.successOrVictoryMsg = successOrVictoryMsg;
			this.userGuess = userGuess;
			this.guessCount = guessCount;
			this.startNewGame = function() {
				return $(newGameBtn).on("click", function(event) {
					event.preventDefault();
					var randomNum = "";
					randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
					$(mainHeading).html("HOT or COLD");
					$(userGuess).val("");
					$(userGuess).val();
					$(successOrVictoryMsg).html("Make your Guess!");
					//$(userGuess).val("");
					$(guessCount).html("0");

					// After clicking "Guess" button check to see if user number guess is cold, hot or correct
					// compared to random number

					// Start click counter at zero
					var count = 0;

					$(guessButton).on("click", function(event) {
						event.preventDefault();

						var userGuessNum = $("#userGuess").val();
						var successOrVictoryMsgClick = $("#feedback");
						var guessCountNum = $("#count");

						// Count clicks until number guessed correctly
//						var userCounter = $("#count");
//						var counter = parseInt(guessButton.val());
//						counter++;
//						userCounter.html(counter);

							// Count clicks until number guessed correctly
							if(randomNum != userGuessNum) {
								count++;
								guessCountNum.html(count);
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
		var restartGame = new NewGame(".new", 1, 100, "h1", "#guessButton", "#feedback", "#userGuess", "#count");
		restartGame.startNewGame();





//			// On submit error, hot, cold & success messages of user number guesses
//			$("#guessButton").on("click", function(event) {
//				event.preventDefault();
//
//				// Reset & generate random number from 1-100
//				//var randomNum = Math.floor(Math.random() * (100) + 1);
//
//				// Show answer
//				$("h1").html("ANSWER: " + randomNum);
//
//				// Error for not using a number or whole numbers not 1-100 inclusive
//				//				if(isNaN(userNum) || userNum != Math.floor(userNum) || userNum > 100 || userNum < 1) {
//				//					feedback.html("Sorry, you need to enter a whole number from 1 - 100 inclusive. Please try again.");
//				//				}
//				// Hot or cold error messages
//				if(Math.abs(randomNum - userNum) > 30) {
//					feedback.html("You're very cold");
//				}
//				else if(Math.abs(randomNum - userNum) < 30 && Math.abs(randomNum - userNum) > 15) {
//					feedback.html("You're getting warmer");
//				}
//				else if(Math.abs(randomNum - userNum) < 15 && Math.abs(randomNum - userNum) > 5) {
//					feedback.html("You're getting hotter");
//				}
//				else if(Math.abs(randomNum - userNum) < 5 && Math.abs(randomNum - userNum) > 0) {
//					feedback.html("You're very hot!");
//				}
//				else if(randomNum == userNum) {
//					feedback.html("You are correct!");
//				}
//
//			});








});