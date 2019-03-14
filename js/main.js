// Memory card game//

// OBJECTIVE - User has to select 2 cards to a match a pair. Once all pairs have been selected user has won the game
let hasFlippedCard = false;
let firstCard, secondCard;
let $cardContainer = $('.card-container');
let cardsMatched = null;
let attempts = null;
let $cardAll = $('.memory-card').length;
let $cards = $('.memory-card');

// Generate Random Bg Color
let colors = ['#dcfc82', '#b5cef8', '#ffd461', '#eb9ea6', '#8ad0e4', '#ffb075'];
let rand = Math.floor(Math.random() * colors.length);
$('.container, .overlay.intro, body, .transition, .game-pause-modal').css('background-color', colors[rand]);


$(document).ready(function () {
	$cards.each(function () {
		$(this).on('click', function flipCard() {
			$(this).addClass('flip');
			// this.classList.toggle('flip');
			// console.log('flipCard was clicked')
			// console.log(this);

			if (!hasFlippedCard) {
				//first click
				hasFlippedCard = true;
				firstCard = this;
				console.log(firstCard);

				//Log out the name of the first card flipped to be checked later
				console.log(firstCard.dataset.name);
			} else {
				//second click
				hasFlippedCard = false;
				secondCard = this;
				console.log(secondCard);

				//Log out the name of the second card flipped to be checked later
				console.log(secondCard.dataset.name);

				// Check to see if first card and second card are a match
				if (firstCard.dataset.name === secondCard.dataset.name) {
					//Cards Match
					firstCard = $(firstCard);
					secondCard = $(secondCard);
					console.log(firstCard);

					firstCard.off('click', flipCard);
					secondCard.off('click', flipCard);

					cardsMatched = cardsMatched + 1;
					$('.cards-matched span').text(cardsMatched);
					$('audio#correct-answer-sound')[0].play();

					// Get percent rate of Card matched
					percentTotal();

					// If all cards Match compare the allMatch to $cardAll
					if (allMatch() == $cardAll) {
						console.log(`You've matched all ${$cardAll} cards`);

						function delay() {
							gameWon();
							youWon();
						}
						setTimeout(delay, 800);
					} else {
						console.log('Keep going');
					}

					// if(cardsMatched == $cardAll / 2){
					// console.log('You won');
					// alert('You won');
					// }
				} else {
					//If Cards do not a Match flip back (Remove class name)
					function delay() {
						firstCard.classList.remove('flip');
						secondCard.classList.remove('flip');

						console.log('You did not get a match');
						$('audio#incorrect-answer-sound')[0].play();

						// $.getScript("./js/audio.js", function(){
						//     incorrecAnswer()
						// });
					}
					//Create a delay to show card
					setTimeout(delay, 800);

					attempts = attempts + 1;
					$('.attempts span').text(attempts);
					console.log(`Attempts ${attempts}`);

					// Get percent rate of Card matched
					percentTotal();
				}
			}
		});
	});

	// Flip card when Start button is clicked
	$('#start').on('click', function () {
		// $(".memory-card").addClass("flip");
	});

	//Shuffle cards
	function Shuffle(items) {
		for (
			var j, x, i = items.length; i; j = parseInt(Math.random() * i), x = items[--i], items[i] = items[j], items[j] = x
		);
		return items;
	}

	Shuffle($cardContainer);

	// Reshuffle new values to row container
	$(function () {
		for (var i = 0; i < $cardContainer.length; i++) {
			$('.row').append($cardContainer[i]);
		}
	});

	// all match function return the value to compare in the if statement
	let allMatch = () => {
		let matches = $('.flip').length;
		console.log(`You've Matched, ${matches / 2} out of 16`);
		return matches;
	};

	// Get percent rate of Card matched
	function percentTotal() {
		let percent = Math.floor(cardsMatched * 100 / attempts);
		$('.percent').text(`${percent}%`);
		console.log(`Percent ${percent}`);
	}

	// Game won
	function gameWon() {
		$('.overlay.won').css('display', 'flex');
	}

	// Reload Game
	$('.pause-close-btn').on('click', function () {
		location.reload();
		console.log('Reload was clicked');
	});

	// Hide intro screen when button is clicked
	$('#start').on('click', function () {
		$('.overlay.intro').css({
			display: 'none'
		});
		console.log('start btn was clicked');
	});

	// Preloader
	$(window).on('load', function preloader() {
		setTimeout(function () {
			$('.preloader-wrapper').addClass('complete');
		});
		//   $('.preloader-bears-walk').hide();
		console.log('Preloader worked');
	});



	//Chagne color theme
	$(function () {

		$(this).on('click', function () {

			const $theme = $('.game-pause-color');
			const $themeItems = $('.container, .overlay.intro, body, .transition, .game-pause-modal');

			$('.neon-green').on('click', function () {
				$themeItems.css('background-color', colors[0]);
				$(this).addClass("selected");
				$($theme).not(this).removeClass('selected')
			});

			$('.light-blue').on('click', function () {
				$themeItems.css('background-color', colors[1]);
				$(this).addClass("selected");
				$($theme).not(this).removeClass('selected')
			});

			$('.yellow').on('click', function () {
				$themeItems.css('background-color', colors[2]);
				$(this).addClass("selected");
				$($theme).not(this).removeClass('selected')
			});

			$('.pink').on('click', function () {
				$themeItems.css('background-color', colors[3]);
				$(this).addClass("selected");
				$($theme).not(this).removeClass('selected')
			});

			$('.blue').on('click', function () {
				$themeItems.css('background-color', colors[4]);
				$(this).addClass("selected");
				$($theme).not(this).removeClass('selected')
			});

			$('.dark-orange').on('click', function () {
				$themeItems.css('background-color', colors[5]);
				$(this).addClass("selected");
				$($theme).not(this).removeClass('selected')
			});

		});

	});

});