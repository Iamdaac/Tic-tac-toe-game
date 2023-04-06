const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');
const resetButton = document.getElementById('reset');

let turn = 'X';
let gameIsOver = false;

const winningCombinations = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
];

function checkForWin() {
	for (let i = 0; i < winningCombinations.length; i++) {
		const [a, b, c] = winningCombinations[i];
		if (cells[a].innerText === turn && cells[b].innerText === turn && cells[c].innerText === turn) {
			message.innerText = `Player ${turn} wins!`;
			gameIsOver = true;
			break;
		}
	}
	if (!gameIsOver && [...cells].every(cell => cell.innerText !== '')) {
		message.innerText = "It's a tie!";
		gameIsOver = true;
	}
}

function handleClick(e) {
	if (gameIsOver || e.target.innerText !== '') return;
	e.target.innerText = turn;
	checkForWin();
	if (!gameIsOver) {
		turn = turn === 'X' ? 'O' : 'X';
		message.innerText = `Player ${turn}'s turn`;
	}
}

function resetGame() {
	cells.forEach(cell => cell.innerText = '');
	message.innerText = '';
	turn = 'X';
	gameIsOver = false;
}

board.addEventListener('click', handleClick);
resetButton.addEventListener('click', resetGame);
