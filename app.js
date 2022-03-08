count=0
for (var i=0;i<9;i++){
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

// Easy difficulty pre load values hard coded for now
easy_game=['2-5---7--45---9----2-6-81----9---8567--------2418---2----43-7-1----1---85--6---7-8','----35-86-1-9-7-----269----54------------527-9--75----7-6---3-----2-----56---2-14','3-549-6----396--81-5-2--1494-276-1-39---583-46-1549--7-6-1-824558-7-3-924---7-3-6','47----3-------179--4-93--5----6---7-48---------2716-34-9----6----6--2381---54--1-','-2--18573-31--5-96---16----5--4-26--97--86--------98--1-6--79--2-5---8144-9-7---1'
];




// will finish hardcode sol'n later, this is not full sol'n
// easy=[215986734452869371527648193379124856781543692418937265864357219693172485936521748']


function start(){
    for(var i=0;i<6;i++){
        document.getElementsByClassName("label")[i].setAttribute("onclick","return false;");
    }
    if(document.getElementById("easy").checked){
        level='easy';
        var easy_random=Math.floor(Math.random()*5);
        choice=easy_random;
        for(var i=0;i<81;i++){
            if(easy_game[easy_random][i]!='-'){
                document.getElementById((i+1).toString()).
                value=easy_board[easy_random][i];
                document.getElementById((i+1).toString()).
                readOnly=true;
            }
        }
    }

    document.getElementById("start").removeAttribute("onclick");

}
