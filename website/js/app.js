var numSelected = null;
var tileSelected = null;

const time_el = document.querySelector('.watch .time');
const startWatch_btn = document.getElementById('startWatch');
const stopWatch_btn = document.getElementById("stopWatch");
const resetWatch_btn = document.getElementById("resetWatch");

var seconds = 0;
var interval = null;

var easy_board = [
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---"
]

var easy_solution = [
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
]

var medium_board = [
    "-2-6-8---",
    "58---97--",
    "----4----",
    "37----5--",
    "6-------4",
    "--8----13",
    "----2----",
    "--98---36",
    "---3-6-9-"
]

var medium_solution = [
    "123678945",
    "584239761",
    "967145328",
    "372461589",
    "691583274",
    "458792613",
    "836924157",
    "219857436",
    "745316892"
]

var hard_board = [
    "---6--4--",
    "7----36--",
    "----91-8-",
    "---------",
    "-5-18---3",
    "---3-6-45",
    "-4-2---6-",
    "9-3------",
    "-2----1--"
]

var hard_solution = [
    "581672439",
    "792843651",
    "364591782",
    "438957216",
    "256184973",
    "179326845",
    "845219367",
    "913768524",
    "627435198"
]

var easy_board_2 = [
    "----14--3",
    "--32---1-",
    "-2198-4--",
    "28--95--4",
    "---428---",
    "9--67--25",
    "--5-4678-",
    "-4---26--",
    "6--83----"
]

var easy_solution_2 = [
    "869514273",
    "453267918",
    "721983456",
    "287395164",
    "516428397",
    "934671825",
    "395146782",
    "148752639",
    "672839541"
]

var medium_board_2 = [
    "--28---1-",
    "-743-1-8-",
    "----24---",
    "6--5--9--",
    "----8----",
    "--8--2--5",
    "---73----",
    "-8-4-672-",
    "-4---83--"
]

var medium_solution_2 = [
    "562879413",
    "974351682",
    "813624597",
    "621547938",
    "759183264",
    "438962175",
    "296735841",
    "385416729",
    "147298356"
]

var hard_board_2 = [
    "------68-",
    "----73--9",
    "3-9----45",
    "49-------",
    "8-3-5-9-2",
    "-------36",
    "96----3-8",
    "7--68----",
    "-28------"
]

var hard_solution_2 = [
    "172549683",
    "645873219",
    "389261745",
    "496327851",
    "813456972",
    "257198436",
    "964715328",
    "731682594",
    "528934167"
]

// Event listeners
startWatch_btn.addEventListener('click', startWatch);
stopWatch_btn.addEventListener("click", stopWatch);
resetWatch_btn.addEventListener("click", resetWatch);

window.onload = function() {
    setNumpad();
    setGame();
}

function setNumpad() {
    // Digits 1-9
    for (let i = 1; i <= 9; i++) {
        let number = document.createElement("div");
        number.id = i
        number.innerText = i;
        number.addEventListener("click", selectNumber);
        number.classList.add("number");
        document.getElementById("digits").appendChild(number);
    }
}

function setGame() {
    // Board 9x9
    if(document.getElementById("easy").checked){
        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                let tile = document.createElement("div");
                tile.id = r.toString() + "-" + c.toString();
                if (easy_board[r][c] != "-") {
                    tile.innerText = easy_board[r][c];
                    tile.classList.add("tile-start");
                    tile.setAttribute("contenteditable", "false"); //Make div(s) not editable. I.E the pre-values
    
                } else {
                    tile.setAttribute("contenteditable", "true"); //Make div(s) editable. I.E. the empty cells
                }
                if (r == 2 || r == 5) {
                    tile.classList.add("horizontal-line");
                }
                if (c == 2 || c == 5) {
                    tile.classList.add("vertical-line");
                }
                tile.addEventListener("click", selectTile);
                tile.addEventListener("input", inputTile);
    
                tile.classList.add("tile");
                document.getElementById("board").append(tile);
                }
            }
        }
    else if(document.getElementById("medium").checked){
        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                let tile = document.createElement("div");
                tile.id = r.toString() + "-" + c.toString();
                if (medium_board[r][c] != "-") {
                    tile.innerText = medium_board[r][c];
                    tile.classList.add("tile-start");
                    tile.setAttribute("contenteditable", "false"); //Make div(s) not editable. I.E the pre-values
    
                } else {
                    tile.setAttribute("contenteditable", "true"); //Make div(s) editable. I.E. the empty cells
                }
                if (r == 2 || r == 5) {
                    tile.classList.add("horizontal-line");
                }
                if (c == 2 || c == 5) {
                    tile.classList.add("vertical-line");
                }
                tile.addEventListener("click", selectTile);
                tile.addEventListener("input", inputTile);
    
                tile.classList.add("tile");
                document.getElementById("board").append(tile);
                }
            }
        }
    else if(document.getElementById("hard").checked){
        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                let tile = document.createElement("div");
                tile.id = r.toString() + "-" + c.toString();
                if (hard_board[r][c] != "-") {
                    tile.innerText = hard_board[r][c];
                    tile.classList.add("tile-start");
                    tile.setAttribute("contenteditable", "false"); //Make div(s) not editable. I.E the pre-values
    
                } else {
                    tile.setAttribute("contenteditable", "true"); //Make div(s) editable. I.E. the empty cells
                }
                if (r == 2 || r == 5) {
                    tile.classList.add("horizontal-line");
                }
                if (c == 2 || c == 5) {
                    tile.classList.add("vertical-line");
                }
                tile.addEventListener("click", selectTile);
                tile.addEventListener("input", inputTile);
    
                tile.classList.add("tile");
                document.getElementById("board").append(tile);
                }
            }
        }
    }

function inputTile() {
    let input = this.innerText;
    if (!input.match(/^[1-9]$/m)) {
        console.log("false");
        return false;
    }
}

function selectNumber() {
    if (numSelected != null) {
        numSelected.classList.remove("number-selected");
    }
    numSelected = this;
    numSelected.classList.add("number-selected");
}

var prevHighlightRow = 0,
    prevHighlightCol = 0;
var isAffected = false; //If row/col has same value as user input, set to true


function selectTile() {
    console.log(this);
    //REMOVE PREVIOUS HIGHLIGHTED ROW AND COLUMNS (TODO: AND AFFECTED CELL)
    for (let k = 0; k < 9; k++) {
        let prevCol = document.getElementById(k + '-' + prevHighlightCol)
        let prevRow = document.getElementById(prevHighlightRow + '-' + k);
        if (prevCol.classList.contains("highlight-cols"))
            prevCol.classList.remove("highlight-cols");
        if (prevRow.classList.contains("highlight-rows"))
            prevRow.classList.remove("highlight-rows");
    }
    // console.log(numSelected);
    // console.log(this);
    // "0-0" "0-1" .. "3-1"
    let coords = this.id.split("-"); //["0", "0"]
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);
    prevHighlightRow = r;
    prevHighlightCol = c;

    if (numSelected) {
        if (this.classList.contains("tile-start")) {
            return;
        }
        //this.innerText = numSelected.id;
        //this.classList.add("valid");

        // if (easy_solution[r][c] == numSelected.id) {
        //     this.innerText = numSelected.id;
        // } else {
        //     errors += 1;
        //     document.getElementById("errors").innerText = errors;
        //     //alert("This is an invalid placement. One error has been added to your total.");
        // }
        // for (let k = 0; k < 9; k++) {
        //     console.log(easy_board[r][k]);
        // }
        //isAffected
        console.log("num selcted " + numSelected.id);
        let seen = ["false", "false", "false", "false", "false", "false", "false", "false", "false", ];
        //BOARD FUNCTIONS WHEN numpad is selected.
        for (let k = 0; k < 9; k++) {
            let col = document.getElementById(k + '-' + c)
            let row = document.getElementById(r + '-' + k);
            //HIGHLIGHT ROW/COL
            if ((!col.classList.contains("tile-start")))
                col.classList.add("highlight-cols");
            if ((!row.classList.contains("tile-start")))
                row.classList.add("highlight-rows");
            //console.log(easy_board[k][c]);

            console.log(row);
            seen[row.innerHTML] = true;
            //AFFECTED CELLS IN CURRENT ROW
            if (numSelected.id === row.innerHTML) {
                //this.innerText = numSelected.id;
                //this.classList.add("invalid");
                if (this != row) {
                    row.classList.add("invalid");
                    this.innerText = numSelected.id;
                    this.classList.add("invalid");
                }
                //console.log("invalid");
            } else if (numSelected.id != row.innerHTML) {
                if (row.classList.contains("invalid") && !seen[row.innerHTML]) {
                    row.classList.remove("invalid");
                }
                if (this.classList.contains("invalid") && !seen[numSelected.id]) {
                    this.innerText = numSelected.id;
                    this.classList.remove("invalid");
                } else {
                    this.innerText = numSelected.id;
                }
                //this.classList.remove("invalid");
                //this.classList.remove("invalid");
                //document.getElementById(r + '-' + k).classList.remove("invalid");
            } else {
                this.innerText = numSelected.id;

            }
            // if (numSelected.id != row.innerHTML && !row.classList.contains("invalid")) {
            //     this.classList.remove("invalid");
            //     document.getElementById(r + '-' + k).classList.remove("invalid");
            // }

        }


    } else {
        //Highlight columns and rows when numpad is not selected.
        for (let k = 0; k < 9; k++) {
            //console.log(easy_board[k][c]);
            let col = document.getElementById(k + '-' + c)
            let row = document.getElementById(r + '-' + k);
            if ((!col.classList.contains("tile-start")))
                col.classList.add("highlight-cols");
            if ((!row.classList.contains("tile-start")))
                row.classList.add("highlight-rows");
        }
    }
}

// Update timer
function timer () {
	seconds++;

	// Format our time
	let hrs = Math.floor(seconds / 3600);
	let mins = Math.floor((seconds - (hrs * 3600)) / 60);
	let secs = seconds % 60;

	if (secs < 10) secs = '0' + secs;
	if (mins < 10) mins = "0" + mins;
	if (hrs < 10) hrs = "0" + hrs;

	time_el.innerText = `${hrs}:${mins}:${secs}`;
}

function startWatch () {
	if (interval) {
		return
	}
	interval = setInterval(timer, 1000);
}

function stopWatch () {
	clearInterval(interval);
	interval = null;
}

function resetWatch () {
	stopWatch();
	seconds = 0;
	time_el.innerText = '00:00:00';
}

/* How to Play */
function help() {
    window.open("https://sudoku.com/how-to-play/sudoku-rules-for-complete-beginners/", "_blank");
}

/* Clear Board (except for pre-import values) */
function clearBoard() {
    if(document.getElementById("easy").checked){
        location.href = "easy.html";
    }
    else if(document.getElementById("medium").checked){
        location.href = "medium.html";
    }
    else if(document.getElementById("hard").checked){
        location.href = "hard.html";
    }
}

function newGame() {
    console.log("New Game");
    if (document.getElementById("easy").checked) {
        location.href = "easy.html";
    }else if (document.getElementById("medium").checked) {
        location.href = "medium.html";
    }else if (document.getElementById("hard").checked) {
        location.href = "hard.html";
    }
}
