const StarterBall = 8;
const StarterPrize = 100;
const StarterBonus = 0;
let minBall = 0;
let maxBall = StarterBall;
let range = 4;
let multiplier = 2; 
let attempts = 3;
let maxWin = StarterPrize;
let totalPrize = StarterBonus;
let firstround = 1;
let win;
let coef;

let game = confirm('Do you want to play a game?', '');

if (!game) {
	alert('You did not become a billionaire, but can.');
} else {
	while (game) {
		let AgainGame = true;
		while (AgainGame) {
			let WinNumber = Math.floor(Math.random() * (maxBall - minBall + 1)) + minBall;
			let UsersNumber = false;

			for (firstround = 1; firstround < attempts + 1; firstround++) {
				coef = Math.pow(multiplier, firstround - 1);
				const AttemptsLeft = attempts - firstround + 1;
				let numPocket = parseInt(prompt(`Choose a roulette pocket number from 0 to ${maxBall}.
					Attempts left: ${AttemptsLeft}
					Total prize: ${totalPrize}$
					Possible prize on current attempt: ${maxWin / coef}$`));

				if (numPocket < 0 || numPocket > maxBall) {
					alert('Chosen a roulette pocket number  incorrect')
				} else if (WinNumber === numPocket) {
					totalPrize += maxWin / coef;
					break;
				} else {
					if (firstround === attempts) {
						UsersNumber = true;
						break;
					}
				}
			}
			if (UsersNumber) {
				break;
			}
			AgainGame = confirm(
				'Congratulation, you won!Your prize is: '+ totalPrize +'$. Do you want to continue?’.'
				);
			if (AgainGame) {
				maxBall += range;
				maxWin *= multiplier;
			} else {
				break;
			}
		}
		alert('Thank you for your participation. Your prize is: '+ totalPrize +'$');
		maxBall = StarterBall;
		totalPrize = StarterPrize;
		maxWin = StarterPrize;
		game = confirm('Do you want to play again?');
	}
}