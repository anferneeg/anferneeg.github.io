$(document).ready(function () {

	const playBtn = document.querySelector('img#music-off-icon');
	const muteBtn = document.querySelector('img#music-on-icon');
	let id;


	// Play background music
	var bgSound = new Howl({
		src: ['./asset/we-bare-bears-intro.wav'],
		autoplay: true,
		loop: true,
		volume: 0.1,
		mute: false,
	});

	// mute and hide music on icon and show music off icon
	muteBtn.onclick = function () {
		bgSound.pause(id);
		$("img#music-on-icon").hide();
		$("img#music-off-icon").show();
	}

	// play and hide music off icon and show music on icon
	playBtn.onclick = function () {
		bgSound.play(id);
		$("img#music-on-icon").show();
		$("img#music-off-icon").hide();
	}

});