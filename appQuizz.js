let quest = [
    {
        "txt" : "Qui est Frodon ?",
        "good" : 0,
        "choice" : ["Un hobbit de la Comtée", "Le jardinier de Bilbon", "Un magicien", "Un futur pilote de X-Wing"],
        "answer" : "Frodon est un hobbit de la Comtée.",
    },
    {
        "txt" : "Quel est son lien de parenté avec Bilbon ?",
        "good" : 3,
        "choice" : ["Frère", "Aucun lien", "Fils", "Neveu"],
        "answer" : "Frodon est le neveu de Bilbon.",
    },
    {
        "txt" : "Combien de personne forme la communauté de l'anneau pendant le conseil d'Elrond ?",
        "good" : 2,
        "choice" : ["3", "6", "9", "12"],
        "answer" : "Ils sont 9 dans la communauté : 1 magicien, 2 hommes, 1 nain, 1 elfe et 4 hobbits.",
    },
    {
        "txt" : "Gimli est un ",
        "good" : 1,
        "choice" : ["elfe", "nain", "homme", "hobbit"],
        "answer" : "Gimli est le représentant des nains au sein de la communauté.",
    },
    {
        "txt" : "Quel est le surnom d'Aragorn ?",
        "good" : 0,
        "choice" : ["Grand-pas", "Long-bow", "Longue-barbe", "Roitelet"],
        "answer" : "Aragorn a pour surnom Grand-pas.",
    },
    {
        "txt" : "Rendez-vous est donné avec Gandalf à l'auberge :",
        "good" : 1,
        "choice" : ["du Dragon vert", "du Poney fringant", "du Chaudron baveu", "de la Cantina"],
        "answer" : "Ils se donnent rendez-vous à l'auberge du Poney fringant.",
    },
    {
        "txt" : "Combien de nazgul se lancent à leur poursuite",
        "good" : 3,
        "choice" : ["1", "3", "6", "9"],
        "answer" : "Les spectres sont au nombre de 9.",
    },
    {
        "txt" : "Trouvé l'intrus",
        "good" : 2,
        "choice" : ["Gandalf le Blanc", "Le trouble paix", "Gandalf le Brun", "Mithrandir"],
        "answer" : "\"Le Brun\" ne fait pas partie des surnoms de Gandalf.",
    },
    {
        "txt" : "Qu'est-ce que le Lembas ?",
        "good" : 1,
        "choice" : ["Un steak de warg", "du pain elfique", "le minerai de la Moria", "l'herbe à pipe"],
        "answer" : "Une bouchée de lembas, le pain elfique, suffit à nourrir un adulte pour la journée.",
    },
    {
        "txt" : "Avec quelle créature combat Gandalf sur le pont la mine ?",
        "good" : 2,
        "choice" : ["un dragon", "un orque", "un balrog", "Sauron"],
        "answer" : "Il combat le balrog.",
    }
]

let pictures = [
    "./imgLord/frodo.jpg",
    "./imgLord/bilbon.jpg",
    "./imgLord/elrond.jpg",
    "./imgLord/communaute.jpg",
    "./imgLord/inTheShadow.jpg",
    "./imgLord/auberge.jpg",
    "./imgLord/nazgul.jpg",
    "./imgLord/moria.jpg",
    "./imgLord/chaudron.jpg",
    "./imgLord/gandalf.jpg",
]

let idx = 0;
let choice = $('.case');
let score = 0;
let goodAns = [];
let wrong = 0;

// call first screen
firstScreen();

// start ==> first quest
$('#start').click(function (){
    $('.screen1').hide();
    nextQuest(0);
    $('.screen2').slideDown(500);
});

// listener click on choices
choice.click(function () {
    if((score + wrong) < 9){        // if answer number index < 9
        check($(this), idx);
        idx++;
        setTimeout(nextQuest, 500, idx);
    }
    else {
        check($(this), idx);        // 10th answer
        $('#answer').hide();
        $('#questNbr').text('votre score est de : ' + score);
        // good answer in screenEnd
        $(goodAns).each(function (index) {
            $('#goodAns').append('<div>' + goodAns[index] + '</div>');
        })
        // end game
        if(wrong < 3){
            $('#quest').text('You are the lord of the quiz');
            $('.side').empty().append('<img alt="logo" src="imgLord/ring.png"/>');
            console.log("<3 : " + wrong);
        }
        else if(wrong < 8){
            $('#quest').text('Relisez vos slides !');
            $('.side').empty().append('<img alt="logo" src="imgLord/ring.png"/>');
            console.log("<8 : " + wrong);
            $('#screenEnd').slideDown(500);
        }
        else {
            $('#quest').text('Les réponses étaient :');
            $('.side').empty().append('<img alt="logo" src="imgLord/endGame.jpg"/>');
            console.log("else : " + wrong);
            $('#screenEnd').slideDown(500);
        }
        $('#restart').slideDown(500);
    }
})


$('#restart').click(function (){
    firstScreen();
    $('#goodAns').empty();
})

// first screen
// show screen 1 // begin text // value score idx arr to 0
// hide screen 2 // screen end
function firstScreen (){
    $('.side').empty().append('<img alt="logo" src="./imgLord/lordOfTheRings.jpg"/>');
    $('.screen1').show();
    $('.screen2').hide();
    $('#screenEnd').hide();
    $('#restart').hide();
    $('#nbr').text(quest.length); // number of quest
    idx = 0;
    score = 0;
    goodAns = [];
    wrong = 0;
}

// check user answer
function check(userChoice,idx){
    if (userChoice.index() === quest[idx].good) {
        userChoice.css('border', '2px solid green');
        score++;
    }
    else {
        userChoice.css('border', '2px solid red');
        wrong = goodAns.push(quest[idx].answer);  // score = quest.length - wrong
    }
}

// function display the question index=idx
function nextQuest(idx){
    $('.side').empty().append("<img alt='logo' src='" + pictures[idx] + "'/>");
    $('#questNbr').text('Question ' + (idx + 1));
    $('#quest').text(quest[idx].txt);
// one choice for each case
    choice.each(function (i){
        $(this).css('border', '1px solid black');
        $(this).text(quest[idx].choice[i]);
    })
}

