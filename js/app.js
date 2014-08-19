$(function(){



		// Get user number
		var userNum = $("#userGuess").val();
		// Error or Success Message Feedback
		var feedback = $("#feedback");


			/*--- Display information modal box ---*/
			$(".what").click(function(){
				$(".overlay").fadeIn(1000);

			});

			/*--- Hide information modal box ---*/
			$("a.close").click(function(){
				$(".overlay").fadeOut(1000);
			});



		// Resets all data on page to start new game


//			$(".new").on("click", function(event) {
//				event.preventDefault();
//				$("h1").html("HOT or COLD");
//				$("#feedback").html("Make your Guess!");
//				$("#userGuess").val("");
//				$("#count").html("0");
//
//			});

		// Constructor to reset game after clicking "New Game"
		function NewGame(newGameBtn, mainHeading, successOrVictoryMsg, userGuess, guessCount) {
			this.newGameBtn = newGameBtn;
//			this.randomNum = function() {
//				return Math.floor(Math.random() * (100) + 1);
//			};
			this.mainHeading = mainHeading;
			this.successOrVictoryMsg = successOrVictoryMsg;
			this.userGuess = userGuess;
			this.guessCount = guessCount;
			this.startNewGame = function() {
				return $(newGameBtn).on("click", function(event) {
					event.preventDefault();
					$(mainHeading).html("HOT or COLD");
					$(successOrVictoryMsg).html("Make your Guess!");
					$(userGuess).val("");
					$(guessCount).html("0");
				});

			}

		}

		// Instantiate NewGame class and then call startNewGame method from class including
		// setting random number
		var restartGame = new NewGame(".new", "h1", "#feedback", "#userGuess", "#count");
		restartGame.startNewGame();





			// On submit error, hot, cold & success messages of user number guesses
			$("#guessButton").on("click", function(event) {
				event.preventDefault();

				// Reset & generate random number from 1-100
				//var randomNum = Math.floor(Math.random() * (100) + 1);

				// Show answer
				$("h1").html("ANSWER: " + randomNum);

				// Error for not using a number or whole numbers not 1-100 inclusive
				//				if(isNaN(userNum) || userNum != Math.floor(userNum) || userNum > 100 || userNum < 1) {
				//					feedback.html("Sorry, you need to enter a whole number from 1 - 100 inclusive. Please try again.");
				//				}
				// Hot or cold error messages
				if(Math.abs(randomNum - userNum) > 30) {
					feedback.html("You're very cold");
				}
				else if(Math.abs(randomNum - userNum) < 30 && Math.abs(randomNum - userNum) > 15) {
					feedback.html("You're getting warmer");
				}
				else if(Math.abs(randomNum - userNum) < 15 && Math.abs(randomNum - userNum) > 5) {
					feedback.html("You're getting hotter");
				}
				else if(Math.abs(randomNum - userNum) < 5 && Math.abs(randomNum - userNum) > 0) {
					feedback.html("You're very hot!");
				}
				else if(randomNum == userNum) {
					feedback.html("You are correct!");
				}

			});








});