<<<<<<< HEAD
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

// for (let i = 0; i < 81; i++) {
//     let value = document.getElementById((i + 1).toString()).value;
//     console.log(value);
// }

var level;
var choice;

// Easy difficulty pre load values hard coded for now
easy_game = ['2-5---7--45---9----2-6-81----9---8567--------2418---2----43-7-1----1---85--6---7-8',
    '----35-86-1-9-7-----269----54------------527-9--75----7-6---3-----2-----56---2-14',
    '3-549-6----396--81-5-2--1494-276-1-39---583-46-1549--7-6-1-824558-7-3-924---7-3-6',
    '47----3-------179--4-93--5----6---7-48---------2716-34-9----6----6--2381---54--1-',
    '-2--18573-31--5-96---16----5--4-26--97--86--------98--1-6--79--2-5---8144-9-7---1'
];




// will finish hardcode sol'n later, this is not full sol'n
easy = ['215986734452869371527648193379124856781543692418937265864357219693172485936521748',
    '129735486213967854342691578543869127498315276981654632786421359675248193567832914',
    '315492678723964581857236149482765193916258374631549827967138245584713692429871356',
    '476285319523861794148932657123649578481397265952716834895137624976452381763548219',
    '429618573831245796382164957537492618974186325761259843186537942265793'
];



function start() {
    for (let i = 0; i < 9; i++) {
        document.getElementsByClassName("box")[i].setAttribute("onclick", "return false;");
        let box = document.getElementsByClassName("box")[i];
        console.log(box);
    }
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
    let cell = document.querySelectorAll(".cell");
    for (let i = 0; i < 81; i++) {
        console.log(cell[i]);
    }

    //else if(document.getElementById("medium".checked)){

    // medium code here
    //}

    document.getElementById("start").removeAttribute("onclick");
}

// check answer
var id = setInterval(() => {
    if (level == "easy") {
        if (document.activeElement.className == "input") {
            if ((document.getElementById(document.activeElement.id).value == easy[choice][document.activeElement.id - 1]) | (document.getElementById(document.activeElement.id).value == '')) {
                for (let i = 0; i < 81; i++) {
                    if (i == 80 && document.getElementById((81).toString()).value != '') {
                        alert("You win! Congratulations");
                        clearInterval(id);
                        window.location.reload();
                    } else if (document.getElementById((i + 1).toString()).value == '') {
                        break;
                    }
                }
            } else {
=======
count=0
for (let i=0;i<9;i++){
    count=9*i;
    document.getElementsByClassName("box")[i].innerHTML="<div class='cell'><input type='text' id='"+(count+1)+
    "'class='input'></div><div class='cell'><input type='text' id='"+(count+2)+
    "'class='input'></div><div class='cell'><input type='text' id='"+(count+3)+
    "'class='input'></div><div class='cell'><input type='text' id='"+(count+4)+
    "'class='input'></div><div class='cell'><input type='text' id='"+(count+5)+
    "'class='input'></div><div class='cell'><input type='text' id='"+(count+6)+
    "'class='input'></div><div class='cell'><input type='text' id='"+(count+7)+
    "'class='input'></div><div class='cell'><input type='text' id='"+(count+8)+
    "'class='input'></div><div class='cell'><input type='text' id='"+(count+9)+"'class='input'></div>"
}

var level;
var choice;

/* Easy difficulty */
easy_game=['2-5---7--45---9----2-6-81----9---8567--------2418---2----43-7-1----1---85--6---7-8','----35-86-1-9-7-----269----54------------527-9--75----7-6---3-----2-----56---2-14','3-549-6----396--81-5-2--1494-276-1-39---583-46-1549--7-6-1-824558-7-3-924---7-3-6','47----3-------179--4-93--5----6---7-48---------2716-34-9----6----6--2381---54--1-','-2--18573-31--5-96---16----5--4-26--97--86--------98--1-6--79--2-5---8144-9-7---1'
];

easy=['215986734452869371527648193379124856781543692418937265864357219693172485936521748', '129735486213967854342691578543869127498315276981654632786421359675248193567832914', '315492678723964581857236149482765193916258374631549827967138245584713692429871356', '476285319523861794148932657123649578481397265952716834895137624976452381763548219', '429618573831245796382164957537492618974186325761259843186537942265793814459378621'
];

/* Medium difficulty, will add rest */
medium_game=['--6----9---75-1---1------9-9-7-25-8-3-----4-3-92-1-8-2------7---6-19--5-8----1--'
];

medium=['876345291982754163417638529493712568135826947359271684251968473746319825682594137'
];

/* Hard difficulty, will add rest */
hard_game=['---789-----75-8-4---38-----8---1---6---7-9---2---7---1-----61---5-3-42-----439---'
];

hard=['165789432297518346973821654847312596463729158284675931923546178851364297615439782'
];

function start(){
    for(let i=0;i<6;i++){
        document.getElementsByClassName("box")[i].setAttribute("onclick","return false;");
    }
    // if user selects easy difficulty
    if(document.getElementById("easy").checked){
        level='easy';
        var easy_random=Math.floor(Math.random()*5);
        choice=easy_random;
        for(let i=0;i<81;i++){
            if(easy_game[easy_random][i]!='-'){
                document.getElementById((i+1).toString()).value=easy_game[easy_random][i];
                document.getElementById((i+1).toString()).readOnly=true;
            }
        }
    }
    // if user selects medium difficulty
    if(document.getElementById("medium").checked){
        level='medium';
        var medium_random=Math.floor(Math.random()*1);
        choice=medium_random;
        for(let i=0;i<81;i++){
            if(medium_game[medium_random][i]!='-'){
                document.getElementById((i+1).toString()).value=medium_game[medium_random][i];
                document.getElementById((i+1).toString()).readOnly=true;
            }
        }
    }

    // if user selects hard difficulty
    if(document.getElementById("hard").checked){
        level='hard';
        var hard_random=Math.floor(Math.random()*1);
        choice=hard_random;
        for(let i=0;i<81;i++){
            if(hard_game[hard_random][i]!='-'){
                document.getElementById((i+1).toString()).value=hard_game[hard_random][i];
                document.getElementById((i+1).toString()).readOnly=true;
            }
        }
    }
}

/* Check Answer and Affected Cells code likely will go below, in progress */

/* var id=setInterval(() => {
    if (level=="easy"){
    if(document.activeElement.className=="input"){
        if((document.getElementById(document.activeElement.id).value==easy[choice][document.activeElement.id-1])|(document.getElementById
            (document.activeElement.id).value=='')){
                for(let i=0;i<81;i++){
                    if(i==80 && document.getElementById((81).toString()).value!='' ){
                        alert("You win! Congratulations");
                        clearInterval(id);
                        window.location.reload();
                    }
                    else if(document.getElementById((i+1).toString()).value==''){
                        break;
                    }
                }
            }
            else{
>>>>>>> shane

                // code
            }
        }
    }
<<<<<<< HEAD
}, 500);



//Check if move is valid/legal
function isValid() {


}


// answer
function answer() {
    if (level == "easy") {
        for (let i = 0; i < 81; i++) {
            document.getElementById((i + 1).toString()).value = easy[choice][i];
        }
    }
    // else if(level=="medium"){
    // med code
}
=======
}, 500); */

/* Answer */ 
function answer(){
    if(level=="easy"){
        for(let i=0;i<81;i++){
            document.getElementById((i+1).toString()).value=easy[choice][i];
        }
     }
     if(level=="medium"){
        for(let i=0;i<81;i++){
            document.getElementById((i+1).toString()).value=medium[choice][i];
        }
     }
     if(level=="hard"){
        for(let i=0;i<81;i++){
            document.getElementById((i+1).toString()).value=hard[choice][i];
        }
     }
}
>>>>>>> shane
