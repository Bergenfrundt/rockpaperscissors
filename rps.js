(function rps() {
	var cpu = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
	var choice = prompt('[Rock], [paper], or [scissors]?').toLowerCase();
	function win() {
		return choice + ' > ' + cpu + '\nYou win!';
	}
	function lose() {
		return cpu + ' > ' + choice + '\nYou lose...';
	}
	if (cpu !== choice) {
		switch (choice) {
			case 'rock':
				alert((cpu === 'scissors') ? win() : lose());
				break;
			case 'paper':
				alert((cpu === 'rock') ? win() : lose());
				break;
			case 'scissors':
				alert((cpu === 'paper') ? win() : lose());
				break;
			default:
				alert('Pick rock], [paper], or [scissors]!');
				rps();
		}
	} else {
		alert(choice + ' = ' + cpu + '\nIt\'s a tie!');
	}
	if (confirm('Would you like to play again?')) {
		rps();
	}
})();
