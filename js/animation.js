$(document).ready(function () {

  // Animate intro modal wrapper
  anime({
    targets: '.modal-wrapper.intro',
    delay: 700,
    translateY: [250, 0],
    duration: 1000,
    scale: [0.4, 0.9],
    opacity: [0, 1],
  });

  // Animate we bare bear logo
  anime({
    targets: '.we-bare-bears',
    delay: 900,
    translateY: [250, 0],
    duration: 1000,
    opacity: [0, 1],
    easing: 'spring(1, 100, 10, 0)',
  });

  // Animate card game word mark
  anime({
    targets: '.card-game',
    delay: 1200,
    translateY: [130, 0],
    duration: 1000,
    opacity: [0, 1],
    easing: 'spring(1, 100, 10, 0)',
  });

  // Animate illustration of the three bears
  anime({
    targets: '.three-bear',
    delay: 1500,
    translateY: [150, 0],
    duration: 1000,
    opacity: [0, 1],
    easing: 'spring(1, 100, 10, 10)'
  });

  // Animate start button
  anime({
    targets: '.start.btn',
    delay: 2000,
    duration: 1000,
    opacity: [0, 1],
    scale: [0.3, 1]
  });

  // Animate loader dots
  anime({
    targets: '.loader-dot',
    translateY: [{
        value: -12,
        duration: 500
      },
      {
        value: 0,
        duration: 500
      },
    ],
    loop: true,
    easing: 'spring(1, 80, 10, 0)',
    delay: function (el, i, l) {
      return i * 300
    }
  });

  // Animate pause container transition in
  $(function showPause() {
    anime({
      targets: '.overlay.game-pause',
      display: 'flex',
      autoplay: false, //if you don't want play animation on page load
    });
    anime({
      targets: '.game-pause-modal',
      translateY: [250, 0],
      duration: 1000,
      opacity: [0, 1],
      delay: 200,
      //autoplay: false, //if you don't want play animation on page load
    });

    //Show credit modal window when credit buttton is clicked
    $('#menu').on("click", function () {
      $('.overlay.game-pause').css("display", "flex");
      showPause()
      console.log('show credit button was clicked');
    });

    //Hide credit modal window when x buttton is clicked
    $('.pause-play-btn-icon').on("click", function () {
      $('.overlay.game-pause').css("display", "none");
    });

  });

  // Animate credit container transition in
  $(function showCredits() {
    anime({
      targets: '.overlay.credit',
      display: 'flex',
      autoplay: false, //if you don't want play animation on page load
    });
    anime({
      targets: '.modal-wrapper.credit',
      translateY: [250, 0],
      duration: 1000,
      scale: [0.7, 0.7],
      opacity: [0, 1],
      delay: 200,
      //autoplay: false, //if you don't want play animation on page load
    });

    //Show credit modal window when credit buttton is clicked
    $('.pause-credit-icon').on("click", function () {
      $('.overlay.credit').css("display", "flex");
      showCredits()
      console.log('show credit button was clicked');
    });

    //Hide credit modal window when x buttton is clicked
    $('.close, .overlay.credit').on("click", function () {
      $('.overlay.credit').css("display", "none");
    });

  });


  //Animate card flip
  $(function flipCards() {

    // Create a timeline with default parameters
    var flipCards = anime.timeline({
      easing: 'easeOutExpo',
      duration: 3000,
      delay: 100,
      autoplay: false, //if you don't want play animation on page load
    });

    // Add children
    flipCards
      .add({
        targets: '.card-container',
        rotateY: '180deg',
        duration: 2000,
        autoplay: false, //if you don't want play animation on page load
      })
      .add({
        targets: '.card-container',
        rotateY: '0deg',
        duration: 2000,
      })

    document.querySelector('#start').onclick = flipCards.play //onclick event

  });

});

// Animate you won modal wrapper
function youWon() {
  anime({
    targets: '.modal-wrapper.won',
    delay: 700,
    translateY: [250, 0],
    duration: 1000,
    scale: [0.8, 0.8],
    opacity: [0, 1],
  });
}