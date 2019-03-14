$(document).ready(function () {

	const playBtn = document.querySelector('img#music-off-icon');
	const muteBtn = document.querySelector('img#music-on-icon');
	const soundEffectIncorrect = document.getElementById('incorrect-answer-sound');
	const soundEffectCorrect = document.getElementById('correct-answer-sound');
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
		soundEffectIncorrect.muted = true;
		soundEffectCorrect.muted = true;
	}

	// play and hide music off icon and show music on icon
	playBtn.onclick = function () {
		bgSound.play(id);
		$("img#music-on-icon").show();
		$("img#music-off-icon").hide();
		soundEffectIncorrect.muted = false;
		soundEffectCorrect.muted = false;
	}


	// // mute incorrect and correct sound effect
	// muteBtn.onclick = function pauseSoundEffect() {
	// 	soundEffect.pause();
	// 	console.log('pause sound effect')
	// }

	// muteBtn.onclick = function pauseSoundEffect() {
	// 	soundEffect.play('play sound effect');
	// }


});