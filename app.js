var numSelected = null;
var tileSelected = null;
var errors = 0;

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


window.onload = function() {
        setGame();
    }
    // Event listeners
startWatch_btn.addEventListener('click', startWatch);
stopWatch_btn.addEventListener("click", stopWatch);
resetWatch_btn.addEventListener("click", resetWatch);

function setGame() {
    // Digits 1-9
    for (let i = 1; i <= 9; i++) {
        //<div id="1" class="number">1</div>
        let number = document.createElement("div");
        number.id = i
        number.innerText = i;
        number.addEventListener("click", selectNumber);
        number.classList.add("number");
        document.getElementById("digits").appendChild(number);
    }

    // Board 9x9
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



// Update the timer
function timer() {
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

function startWatch() {
    if (interval) {
        return
    }

    interval = setInterval(timer, 1000);
}

function stopWatch() {
    clearInterval(interval);
    interval = null;
}

function resetWatch() {
    stopWatch();
    seconds = 0;
    time_el.innerText = '00:00:00';
}

/* Clear Board */
// function clearBoard() {
//     for (let i = 0; i < 81; i++) {
//         document.getElementById((i + 1).toString()).value = '';
//         document.getElementById((i + 1).toString()).readOnly = false;
//         clearInterval(id);
//         //window.location.reload();
//     }
// }

/* How to Play */
function help() {
    window.open("https://sudoku.com/how-to-play/sudoku-rules-for-complete-beginners/", "_blank");
}