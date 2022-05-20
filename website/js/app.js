document.querySelector('.input-checkbox').addEventListener('change', () => {
    document.body.classList.toggle('dark-theme');
    let currentMode = localStorage.getItem('darktheme')

    console.log(currentMode)
    if (currentMode == false || currentMode == "false" || currentMode == null || currentMode == undefined) {
        console.log("Setting darkmode to on")
        localStorage.setItem('darktheme', true)
    } else {
        console.log("Setting darkmode to off")
        localStorage.setItem('darktheme', false)
    }
});


let isDarkMode = localStorage.getItem('darktheme')
console.log("Init darkmode status", isDarkMode)

if (isDarkMode == true || isDarkMode == "true" || isDarkMode == null || isDarkMode == undefined) {
    document.body.classList.toggle('dark-theme');
} else {
    // Enable the checkbox for darkmode
    document.querySelector(".input-checkbox").checked = true
}

if (document.querySelector(".game-type")) {
    document.querySelector(".game-type").addEventListener('change', (...a) => {
        console.log(this, a)
    })
}



var numSelected = null;
var tileSelected = null;

const time_el = document.querySelector('.watch .time');
const startWatch_btn = document.getElementById('startWatch');
const stopWatch_btn = document.getElementById("stopWatch");
const resetWatch_btn = document.getElementById("resetWatch");

var seconds = 0;
var interval = null;

var easyBoard = ["--74916-5,2---6-3-9,-----7-1-,-586----4,--3----9-,--62--187,9-4-7---2,67-83----,81--45---",
    "68-----7-,---4-5-2-,-----1---,362----81,--96-----,71--9-4-5,-2---651-,--78----3,45---7---",
    "----14--3,--32---1-,-2198-4--,28--95--4,---428---,9--67--25,--5-4678-,-4---26--,6--83----"
];
var easySolution = ["387491625,241568379,569327418,758619234,123784596,496253187,934176852,675832941,812945763",
    "685329174,971485326,234761859,362574981,549618732,718293465,823946517,197852643,456137298",
    "869514273,453267918,721983456,287395164,516428397,934671825,395146782,148752639,672839541"
];

var mediumBoard = ["-2-6-8---,58---97--,----4----,37----5--,6-------4,--8----13,----2----,--98---36,---3-6-9-",
    "--28---1-,-743-1-8-,----24---,6--5--9--,-5--8----,--8--2--5,---73----,-8-4-672-,4---83---",
    "--9------,-4----6-7,58-31----,15--4-36-,------4-8,----9----,---75----,3--8----1,--2--3---"
];

var mediumSolution = ["123678945,584239761,967145328,372461589,691583274,458792613,836924157,219857436,745316892",
    "562879413,974351682,813624597,621547938,759183264,438962175,296735841,385416729,147298356",
    "619472583,243985617,587316924,158247369,926531478,734698152,891754236,365829741,472163895"
];

var hardBoard = ["---6--4--,7----36--,----91-8-,---------,-5-18---3,---3-6-45,-4-2---6-,9-3------,-2----1--",
    "------68-,----73--9,3-9----45,49-------,8-3-5-9-2,-------36,96----3-8,7--68----,-28------7",
    "-1-5-----,--97-42--,--5----7-,5---3---7,-6--2-41-,--8--5---,1-4------,2-3-----9,-7----8--"
];
var hardSolution = ["581672439,792843651,364591782,438957216,256184973,179326845,845219367,913768524,627435198",
    "172549683,645873219,389261745,496327851,813456972,257198436,964715328,731682594,528934167",
    "712583694,639714258,845269173,521436987,367928415,498175326,184697532,253841769,976352841"
];

var currentBoard = [];
var currentSoluton = [];

let mode = window.location.href.split("/").pop();
document.querySelector(".dropbtn").innerText = `${mode.replace(".html","").toUpperCase()}`

function getCurrentBoard() {
    let temp = Math.floor(Math.random() * 3) // 0 1 2
    let b;
    if (mode == "easy.html") {
        b = easyBoard[temp].split(',');
    } else if (mode == "medium.html") {
        b = mediumBoard[temp].split(',');
    } else if (mode == "hard.html") {
        b = hardBoard[temp].split(',');
    }
    while (b[0]) {
        currentBoard.push(b.splice(0, 9));
    }
    currentSoluton = getCurrentSolution(temp);
}

function getCurrentSolution(index) {
    let s;

    if (mode == "easy.html") {
        s = easySolution[index].split(',');
    } else if (mode == "medium.html") {
        s = mediumSolution[index].split(',');
    } else if (mode == "hard.html") {
        s = hardSolution[index].split(',');
    }
    let tempArr = [];
    while (s[0]) {
        tempArr.push(s.splice(0, 9));
    }
    return tempArr;
}

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
    if (mode == "easy.html" || mode == "medium.html" || mode == "hard.html") {
        getCurrentBoard();
        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                //console.log("Tile: " + easy_board[r][c]);
                //console.log("Result: " + currentBoard[0][r][c]);
                let tile = document.createElement("div");
                tile.id = r.toString() + "-" + c.toString();
                if (currentBoard[0][r][c] != "-") {
                    tile.innerText = currentBoard[0][r][c];
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
    // let input = this.innerText;
    // if (!input.match(/^[1-9]$/m)) {
    //     console.log("false");
    //     return false;
    // }
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
var hintNum = 0;
if (mode == "easy.html") {
    hintNum = 5;
} else if (mode == "medium.html") {
    hintNum = 4;
} else {
    hintNum = 3;
}

function selectTile() {
    console.log(this);
    let currentCell = this;
    removePrev();
    // "0-0" "0-1" .. "3-1"
    let coords = this.id.split("-"); //["0", "0"]
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);
    prevHighlightRow = r;
    prevHighlightCol = c;

    if (numSelected) {
        highlightCells(r, c);
        //console.log("current: " + currentSoluton[0][r][c])
        if (this.classList.contains("tile-start")) {
            return;
        }

        let occRow = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; //List number of occurence in row
        let occCol = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; //List number of occurence in col
        currentCell.innerHTML = numSelected.id;
        for (let i = 0; i < 9; i++) {
            let col = document.getElementById(i + '-' + c);
            let row = document.getElementById(r + '-' + i);
            if (row.innerHTML != "")
                occRow[row.innerHTML]++;
            if (col.innerHTML != "")
                occCol[col.innerHTML]++;

        }
        for (let i = 0; i < 9; i++) {
            let col = document.getElementById(i + '-' + c);
            let row = document.getElementById(r + '-' + i);
            //console.log(occ[row.innerHTML]);
            if (occRow[row.innerHTML] > 1) {
                row.classList.add("invalid");
                //occ[row.innerHTML]--;
            } else if (occRow[row.innerHTML] == 1) {
                if (row.classList.contains("invalid"))
                    row.classList.remove("invalid");
            }
            if (occCol[col.innerHTML] > 1) {
                col.classList.add("invalid");
                //occ[row.innerHTML]--;
            } else if (occCol[col.innerHTML] == 1 && occRow[row.innerHTML] <= 1) {
                if (col.classList.contains("invalid"))
                    col.classList.remove("invalid");
            }



        }

        // if (numSelected.id == currentSoluton[0][r][c]) {
        //     if (currentCell.classList.contains("invalid"))
        //         currentCell.classList.remove("invalid");
        //     currentCell.innerHTML = numSelected.id;
        //     currentCell.classList.add("valid");
        // } else {
        //     if (currentCell.classList.contains("valid")) {
        //         currentCell.classList.remove("valid");
        //     }
        //     currentCell.innerHTML = numSelected.id;
        //     currentCell.classList.add("invalid");
        // }

        //console.log("num selcted " + numSelected.id);
        // let col = document.getElementById(k + '-' + c)
        // let row = document.getElementById(r + '-' + k);

    } else {
        highlightCells(r, c);
    }

    document.getElementById("hint").onclick = function() {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                let temp = document.getElementById(row + '-' + col);
                if (hintNum <= 0) {
                    currentCell.innerHTML = currentSoluton[0][r][c]
                } else if (currentSoluton[0][row][col] == currentSoluton[0][r][c]) {
                    temp.innerHTML = currentSoluton[0][r][c];
                }
            }
        }
        hintNum--;
    }
}

// Update timer
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

/* How to Play */
function help() {
    window.open("https://sudoku.com/how-to-play/sudoku-rules-for-complete-beginners/", "_blank");
}

function newGame() {
    location.reload()
}


startWatch()

function highlightCells(row, col) {
    let r = row;
    let c = col;
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
    //HIGHLIGHT 3X3 GRIDE
    let r_offset = Math.floor(r / 3) * 3;
    let c_offset = Math.floor(c / 3) * 3;
    for (let i = 0 + r_offset; i <= 2 + r_offset; i++) {
        for (let j = 0 + c_offset; j <= 2 + c_offset; j++) {
            //console.log(document.getElementById(i + '-' + j));
            if ((!document.getElementById(i + '-' + j).classList.contains("tile-start"))) {
                document.getElementById(i + '-' + j).classList.add("highlight-grid");
            }
        }
    }
}

function removePrev() {
    for (let k = 0; k < 9; k++) {
        let prevCol = document.getElementById(k + '-' + prevHighlightCol)
        let prevRow = document.getElementById(prevHighlightRow + '-' + k);
        if (prevCol.classList.contains("highlight-cols"))
            prevCol.classList.remove("highlight-cols");
        if (prevRow.classList.contains("highlight-rows"))
            prevRow.classList.remove("highlight-rows");
    }
    let r_offset = Math.floor(prevHighlightRow / 3) * 3;
    let c_offset = Math.floor(prevHighlightCol / 3) * 3;
    for (let i = 0 + r_offset; i <= 2 + r_offset; i++) {
        for (let j = 0 + c_offset; j <= 2 + c_offset; j++) {
            if (document.getElementById(i + '-' + j).classList.contains("highlight-grid")) {
                document.getElementById(i + '-' + j).classList.remove("highlight-grid");
            }
        }
    }
}

function clearBoard() {
    if (mode == "easy.html") {
        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                let current = document.getElementById(r + '-' + c)
                if (current.classList.contains("invalid"))
                    current.classList.remove("invalid");
                //console.log("current: " + currentBoard[0][r][c]);
                //console.log("current: " + current.innerHTML);
                if (!current.classList.contains("tile-start")) {
                    //console.log("current: " + current.innerHTML);
                    current.innerHTML = "";
                }
            }
        }
    }
    if (mode == "medium.html") {
        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                let current = document.getElementById(r + '-' + c)
                    //console.log("current: " + currentBoard[0][r][c]);
                    //console.log("current: " + current.innerHTML);
                if (!current.classList.contains("tile-start")) {
                    console.log("current: " + current.innerHTML);
                    current.innerHTML = "";
                }
            }
        }
    }
    if (mode == "hard.html") {
        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                let current = document.getElementById(r + '-' + c)
                    //console.log("current: " + currentBoard[0][r][c]);
                    //console.log("current: " + current.innerHTML);
                if (!current.classList.contains("tile-start")) {
                    console.log("current: " + current.innerHTML);
                    current.innerHTML = "";
                }
            }
        }
    }
}