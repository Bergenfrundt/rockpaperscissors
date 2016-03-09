// This makes the play button work. Taken from arsh-sim.
window.onload = function () {
	var play = document.getElementById('play');
	play.title = '';
    play.onclick = function () {
        rps();
		return false;
    };
};
