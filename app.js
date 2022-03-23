count = 0
for (let i = 0; i < 9; i++) {
    count = 9 * i;
    document.getElementsByClassName("box")[i].innerHTML = "<div class='cell'><input type='text' id='" + (count + 1) +
        "'class='input'></div><div class='cell'><input type='text' id='" + (count + 2) +
        "'class='input'></div><div class='cell'><input type='text' id='" + (count + 3) +
        "'class='input'></div><div class='cell'><input type='text' id='" + (count + 4) +
        "'class='input'></div><div class='cell'><input type='text' id='" + (count + 5) +
        "'class='input'></div><div class='cell'><input type='text' id='" + (count + 6) +
        "'class='input'></div><div class='cell'><input type='text' id='" + (count + 7) +
        "'class='input'></div><div class='cell'><input type='text' id='" + (count + 8) +
        "'class='input'></div><div class='cell'><input type='text' id='" + (count + 9) + "'class='input'></div>"
}

var level;
var choice;

/* Easy difficulty */
easy_game = ['2-5---7--45---9----2-6-81----9---8567--------2418---2----43-7-1----1---85--6---7-8',
    '----35-86-1-9-7-----269----54------------527-9--75----7-6---3-----2-----56---2-14',
    '3-549-6----396--81-5-2--1494-276-1-39---583-46-1549--7-6-1-824558-7-3-924---7-3-6',
    '47----3-------179--4-93--5----6---7-48---------2716-34-9----6----6--2381---54--1-',
    '-2--18573-31--5-96---16----5--4-26--97--86--------98--1-6--79--2-5---8144-9-7---1'
];

easy = ['215986734452869371527648193379124856781543692418937265864357219693172485936521748',
    '129735486213967854342691578543869127498315276981654632786421359675248193567832914',
    '315492678723964581857236149482765193916258374631549827967138245584713692429871356',
    '476285319523861794148932657123649578481397265952716834895137624976452381763548219',
    '429618573831245796382164957537492618974186325761259843186537942265793814459378621'
];

/* Medium difficulty, will add rest */
medium_game = ['--6----9---75-1---1------9-9-7-25-8-3-----4-3-92-1-8-2------7---6-19--5-8----1---',
    '------27----793--892-5-63--5--87-3---34-5-79---3-87--5--63-2-819--614----57------', '6-5-384--2----1--9-1----9-------53--7--8-4--3--21-------7----9-8--9----6--978-3-5','-8493--576--4----5---------2--84----4-1-7-6-2----28--3---------7----2--998--4721-', '43--7-2---2----1-----5--9-------349-741---865-241-------8--9-----6----4---7-3--61'
];

medium = ['876345291982754163417638529493712568135826947359271684251968473746319825682594137',
    '83461527915279346892154638751287934663425871463987125796342581978614235857123469', '695138472243761589817356924428975361796854213532149687137264598851923476649782315', '184936257623498715372561849259847136491375682514928763673521894758162439986347215', '439671258825764193316582947612583497741239865924176358578429613396185742857934261'
];

/* Hard difficulty, will add rest */
hard_game = ['---789-----75-8-4---38-----8---1---6---7-9---2---7---1-----61---5-3-42-----439---',
    '-6------2---9-83----6--3-79----368---2-----4---461----75-8--4----51-7---2------8-', '-8-------4---15--3---69-----2-73-1----9-----2-6----------19--875--9-2-1--2-835---', '----578------3--19---3---75-5-2-8--4------6---1-7-24---7----6----142---3---9--3--', '--346-5-------------9-4-8--5-9---18----4-3--7-------7--4--------9--81--6-3-71----'
];

hard = ['165789432297518346973821654847312596463729158284675931923546178851364297615439782',
    '861794532617948325156283479492536871928365147784619253753812496345127968239574681', '1872563494287159635346918729247381556619483572861247395356194287573962418729835641', '143657892526738419984361275956238174843591627315782469872149635691426583267954318', '783461592318627954179246835569732184625493817246358971142958673497581326835719264'
];

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

/* Check Input & Check Answer */

let id = setInterval( () => {
    if (level == "easy") {
        if (document.activeElement.className == "input") {
            if ((document.getElementById(document.activeElement.id).value == easy[choice][document.activeElement.id - 1]) || (document.getElementById(document.activeElement.id).value == '')) {
                for (let i = 0; i < 81; i++) {
                    if (i == 80 && document.getElementById((81).toString()).value != '') {
                        alert("You win! Congratulations");
                        // window.location.reload();
                    } 
                    else if(document.getElementById((i + 1).toString()).value == '') {
                        break;
                    } 
                    else {
                        alert("You chose the wrong number.");
                        document.activeElement.value = '';
                    }
                }
            }
        }
    } else if (level == "medium") {
        if (document.activeElement.className == "input") {
            if ((document.getElementById(document.activeElement.id).value == medium[choice][document.activeElement.id - 1]) || (document.getElementById(document.activeElement.id).value == '')) {
                for (let i = 0; i < 81; i++) {
                    if (i == 80 && document.getElementById((81).toString()).value != '') {
                        alert("You win! Congratulations");
                        clearInterval(id);
                        window.location.reload();
                    } 
                    else if(document.getElementById((i + 1).toString()).value == '') {
                        break;
                    }
                }
            }
            else {
                alert("You chose the wrong number.");
            }
        }
    } else if (level == "hard") {
        if (document.activeElement.className == "input") {
            if ((document.getElementById(document.activeElement.id).value == hard[choice][document.activeElement.id - 1]) || (document.getElementById(document.activeElement.id).value == '')) {
                for (let i = 0; i < 81; i++) {
                    if (i == 80 && document.getElementById((81).toString()).value != '') {
                        alert("You win! Congratulations");
                        clearInterval(id);
                        window.location.reload();
                    }
                    else if(document.getElementById((i + 1).toString()).value == '') {
                        break;
                    }
                    else {
                        alert("You chose the wrong number.");
                    }
                }
            }
        }
    }
}, 500);

/* Answer */
function answer() {
    if (level == "easy") {
        for (let i = 0; i < 81; i++) {
            document.getElementById((i + 1).toString()).value = easy[choice][i];
        }
    }
    if (level == "medium") {
        for (let i = 0; i < 81; i++) {
            document.getElementById((i + 1).toString()).value = medium[choice][i];
        }
    }
    if (level == "hard") {
        for (let i = 0; i < 81; i++) {
            document.getElementById((i + 1).toString()).value = hard[choice][i];
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
