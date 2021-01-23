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
        "answer" : "Il est son neveu adoptif.",
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
        "answer" : "Aragorn a pour surnom Grand-pas, mais il en a d'autre...",
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
        "answer" : "Le pain elfique, une bouchée suffit à nourrir un adulte pour la journée.",
        "pict" : "url('')",
    },
    {
        "txt" : "Avec quelle créature combat Gandalf sur le pont la mine ?",
        "good" : 3,
        "choice" : ["un dragon", "un orque", "un balrog", "Sauron"],
        "answer" : "Il combat le balrog et lui dit : :\"Vous ne passerz-pas !\"",
        "pict" : "url('')",
    }
]

$('#container').css('background-color', "#ff7f5080");
// set display
$('.screen2').hide();
$('#nbr').text(quest.length); // number of quest

// start
$('#start').click(function (){
    $('.screen1').hide();
    //=> function nextQuest param idx = 0;
    $('.screen2').slideDown(800);
    nextQuest(0);
});

let idx = 0;
let score = 0;
let choice = $('.case');
let goodAns = [];

choice.click(function (){
    if($(this).index() === quest[idx].good){
        $(this).css('border', '2px solid green');
        score++;
    }
    else {
        $(this).css('border', '2px solid red');
        let arr = goodAns.push(quest[idx].answer);
    }
    console.log(goodAns);
})


// function display the question index=idx
function nextQuest(idx){
    $('#questNbr').show().text('Question ' + (idx + 1));
    $('#quest').text(quest[idx].txt);
// one choice for each case
    choice.each(function (i){
        $(this).text(quest[0].choice[i]);
    })
}
