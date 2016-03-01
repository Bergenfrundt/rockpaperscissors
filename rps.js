(function rps () {
	rps.choice = prompt('[Rock], [paper], or [scissors]?').toLowerCase();
	rps.cpu = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
	while (rps.cpu !== 'rock' && rps.cpu !== 'paper' && rps.cpu !== 'scissors') {
		rps.choice = prompt('[Rock], [paper], or [scissors]?').toLowerCase();
		if (rps.cpu !== 'rock' && rps.cpu !== 'paper' && rps.cpu !== 'scissors') {
			alert('Pick [rock], [paper], or [scissors]!');
		}
	}
	rps.win = function() {
		return rps.choice + ' > ' + rps.cpu + '\nYou win!';
	};
	rps.lose = function() {
		return rps.cpu + ' > ' + rps.choice + '\nYou lose...';
	};
	if (rps.cpu !== rps.choice) {
		switch (rps.choice) {
			case 'rock':
				alert((rps.cpu === 'scissors') ? rps.win() : rps.lose());
				break;
			case 'paper':
				alert((rps.cpu === 'rock') ? rps.win() : rps.lose());
				break;
			case 'scissors':
				alert((rps.cpu === 'paper') ? rps.win() : rps.lose());
		}
	} else {
		alert(rps.choice + ' = ' + rps.cpu + '\nIt\'s a tie!');
	}
	if (confirm('Would you like to play again?')) {
		rps();
	}
})();
