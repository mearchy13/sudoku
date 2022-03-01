class Sudoku {
  constructor() {
		this.board = this.empty_array();
	}
	
	empty_array() {
		return [
			[0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0]
		];
	}
		
	for (let row = 0; row <= 8; row++) {
			for (let column = 0; column <= 8; column++) {
				this.board[row][column] = board_number.charAt(row*9+column);
			}
		}
	
	get_board_array() {
		return this.board;
	}
}
let test = new Sudoku();
let game = new Sudoku();
var difficulty_level;
let sudoku_cells = createArray(9,9);

for (let row = 0; row <= 8; row++) {
	for (let col = 0; col <= 8; col++) {
		sudoku_cells[row][col] =  document.getElementsByClassName('sudoku')[0].getElementsByTagName('tbody')[0].getElementsByTagName('tr')[row].getElementsByTagName('td')[col].getElementsByTagName('input')[0];
	}
}

function print_board(sudoku_game) {
	let board = sudoku_game.get_board_array();
	for (let row = 0; row <= 8; row++) {
		for (let col = 0; col <= 8; col++) {
			if (board[row][col] != 0) {
				let input = sudoku_cells[row][col];
				input.value = board[row][col];
				input.classList.add('imported_square');
			}
		}
	}
}

/* static clear_board(sudoku_cells) {
		for ( let row = 0; row <= 8; row++ ) {
			for ( let col = 0; col <= 8; col++ ) {
				sudoku_cells[row][col].value = "";
				sudoku_cells[row][col].classList.remove('imported_square');
			}
*/


