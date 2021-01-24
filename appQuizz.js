let quest = [
    {
        "txt" : "Qui est Frodon ?",
        "good" : 0,
        "choice" : ["Un hobbit de la Comtée", "Le jardinier de Bilbon", "Un magicien", "Un futur pilote de X-Wing"],
        "answer" : "Frodon est un hobbit de la Comtée.",
        "pict" : "url('')",
    },
    {
        "txt" : "Quel est son lien de parenté avec Bilbon ?",
        "good" : 3,
        "choice" : ["Frère", "Aucun lien", "Fils", "Neveu"],
        "answer" : "Frodon est le neveu adoptif de Bilbon.",
        "pict" : "url('')",
    },
    {
        "txt" : "Combien de personne forme la communauté de l'anneau ?",
        "good" : 2,
        "choice" : ["3", "6", "9", "12"],
        "answer" : "A son départ, la communauté est formée de : 1 magicien, " +
            "2 hommes, 1 nain, 1 elfe et 4 hobbits, donc 9 en tout",
        "pict" : "url('')",
    },
    {
        "txt" : "Gimli est un ",
        "good" : 1,
        "choice" : ["elfe", "nain", "homme", "hobbit"],
        "answer" : "Gimli est le représentant des nains au sein de la communauté.",
        "pict" : "url('')",
    },
    {
        "txt" : "Quel est le surnom d'Aragorn ?",
        "good" : 0,
        "choice" : ["Grand-pas", "Long-bow", "Longue-barbe", "Roitelet"],
        "answer" : "Aragorn a pour surnom Grand-pas.",
        "pict" : "url('')",
    },
    {
        "txt" : "Rendez-vous est donné avec Gandalf à l'auberge :",
        "good" : 1,
        "choice" : ["du Dragon vert", "du Poney fringant", "du Chaudron baveu", "de la Cantina"],
        "answer" : "Ils se donnent rendez-vous à l'auberge du Poney fringant",
        "pict" : "url('')",
    },
    {
        "txt" : "Combien de nazgul se lancent à leur poursuite",
        "good" : 3,
        "choice" : ["1", "3", "6", "9"],
        "answer" : "Les spectres sont au nombre de 9.",
        "pict" : "url('')",
    },
    {
        "txt" : "Trouvé l'intrus",
        "good" : 2,
        "choice" : ["Gandalf le Blanc", "Gandalf le Gris", "Gandalf le Brun", "Mithrandir"],
        "answer" : "\"Le Brun\" ne fait pas partie des surnoms de Gandalf, mais il en a d'autres...",
        "pict" : "url('')",
    },
    {
        "txt" : "Qu'est-ce que le Lembas ?",
        "good" : 1,
        "choice" : ["la langue des elfe", "du pain elfique", "le minerai de la Moria", "l'herbe à pipe"],
        "answer" : "Une bouchée de lembas, le pain elfique, suffit à nourrir un adulte pour la journée.",
        "pict" : "url('')",
    },
    {
        "txt" : "Avec quelle créature combat Gandalf sur le pont la mine ?",
        "good" : 2,
        "choice" : ["un dragon", "un orque", "un balrog", "Sauron"],
        "answer" : "Il combat le balrog et lui dit : :\"Vous ne passerz-pas !\"",
        "pict" : "url('')",
    }
]

$('#container').css('background-color', "#ff7f5080");
// set display
$('.screen2').hide();
$('#screenEnd').hide();
$('#nbr').text(quest.length); // number of quest

let idx = 0;
let choice = $('.case');
// answer number = score + goodAns.length
let score = 0;
let goodAns = [];
let wrong = 0;


// start ==> first quest
$('#start').click(function (){
    $('.screen1').hide();
    nextQuest(0);
    $('.screen2').slideDown(500);
});

// first answer
choice.click(function () {
    if((score + wrong) < 9){
        check($(this), idx);
        idx++;
        setTimeout(nextQuest, 500, idx);
    }
    else {
        check($(this), idx);
        $('.screen2').slideUp();
        $('#screenEnd').show()
        $(goodAns).each(function (index) {
            $('#screenEnd').append('<div>' + goodAns[index] + '</div>');
        })
    }
})

// check user answer
function check(userChoice,idx){
    if (userChoice.index() === quest[idx].good) {
        userChoice.css('border', '2px solid green');
        score++;
        console.log("score : " + score);
    }
    else {
        userChoice.css('border', '2px solid red');
        wrong = goodAns.push(quest[idx].answer);  // score = quest.length - wrong
        console.log("w : " + wrong);
        console.log(goodAns);

    }
}

// function display the question index=idx
function nextQuest(idx){
    $('#questNbr').show().text('Question ' + (idx + 1));
    $('#quest').text(quest[idx].txt);
// one choice for each case
    choice.each(function (i){
        $(this).css('border', '1px solid black');
        $(this).text(quest[idx].choice[i]);
    })
}
