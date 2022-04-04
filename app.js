var numSelected = null;
var tileSelected = null;
var errors = 0;


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

function selectTile() {
    console.log(numSelected);
    console.log(this);
    // "0-0" "0-1" .. "3-1"
    let coords = this.id.split("-"); //["0", "0"]
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);

    if (numSelected) {
        if (this.innerText != "") {
            return;
        }
        if (easy_solution[r][c] == numSelected.id) {
            this.innerText = numSelected.id;
        } else {
            errors += 1;
            document.getElementById("errors").innerText = errors;
            //alert("This is an invalid placement. One error has been added to your total.");
        }
        // for (let k = 0; k < 9; k++) {
        //     console.log(easy_board[r][k]);
        // }
        console.log("num selcted " + numSelected.id);
        //Highlight columns and rows when numpad is selected.

        for (let k = 0; k < 9; k++) {
            console.log(easy_board[k][c]);
            //this.classList.add(highlight-cols);
            let col = document.getElementById(k + '-' + c)
            let row = document.getElementById(r + '-' + k);
            //console.log(element);
            if (numSelected.id === easy_board[k][c]) {
                //alert("This is an invalid placement.");
                console.log("invalid");
            }
            if ((!col.classList.contains("tile-start")))
                col.classList.add("highlight-cols");
            if ((!row.classList.contains("tile-start")))
                row.classList.add("highlight-cols");
        }
    } else {
        //Highlight columns and rows when numpad is not selected.
        for (let k = 0; k < 9; k++) {
            console.log(easy_board[k][c]);
            //this.classList.add(highlight-cols);
            let col = document.getElementById(k + '-' + c)
            let row = document.getElementById(r + '-' + k);
            //console.log(element);
            if ((!col.classList.contains("tile-start")))
                col.classList.add("highlight-cols");
            if ((!row.classList.contains("tile-start")))
                row.classList.add("highlight-cols");

        }
    }
}

function start() {
    clearBoard()
    for (let i = 0; i < 6; i++) {
        document.getElementsByClassName("box")[i].setAttribute("onclick", "return false;");
    }
    // if user selects easy difficulty
    if (document.getElementById("easy").checked) {
        level = 'easy';
        var easy_random = Math.floor(Math.random() * 5);
        choice = easy_random;
        for (let i = 0; i < 81; i++) {
            if (easy_game[easy_random][i] != '-') {
                document.getElementById((i + 1).toString()).value = easy_game[easy_random][i];
                document.getElementById((i + 1).toString()).readOnly = true;
            }
        }
    }
    // if user selects medium difficulty
    if (document.getElementById("medium").checked) {
        level = 'medium';
        var medium_random = Math.floor(Math.random() * 5);
        choice = medium_random;
        for (let i = 0; i < 81; i++) {
            if (medium_game[medium_random][i] != '-') {
                document.getElementById((i + 1).toString()).value = medium_game[medium_random][i];
                document.getElementById((i + 1).toString()).readOnly = true;
            }
        }
    }

    // if user selects hard difficulty
    if (document.getElementById("hard").checked) {
        level = 'hard';
        var hard_random = Math.floor(Math.random() * 5);
        choice = hard_random;
        for (let i = 0; i < 81; i++) {
            if (hard_game[hard_random][i] != '-') {
                document.getElementById((i + 1).toString()).value = hard_game[hard_random][i];
                document.getElementById((i + 1).toString()).readOnly = true;
            }
        }
    }

}

/* Clear Board */
function clearBoard() {
    for (let i = 0; i < 81; i++) {
        document.getElementById((i + 1).toString()).value = '';
        document.getElementById((i + 1).toString()).readOnly = false;
        clearInterval(id);
        //window.location.reload();
    }
}

/* How to Play */
function help() {
    window.open("https://sudoku.com/how-to-play/sudoku-rules-for-complete-beginners/", "_blank");
}