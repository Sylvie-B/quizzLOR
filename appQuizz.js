let quest = [
    {
        "text" : "Qui est Frodon ?",
        "good" : 0,
        "choice" : [
            "Un hobbit de la Comtée",
            "Le jardinier de Bilbon",
            "Un magicien",
            "Un futur pilote de X-Wing"
        ],
        "answer" : "Frodon est un hobbit de la Comtée.",
        "pict" : "url('')",
    },
    {
        "text" : "Quel est son lien de parenté avec Bilbon ?",
        "good" : 3,
        "choice" : [
            "Frère",
            "Aucun lien",
            "Fils",
            "Neveu",
        ],
        "answer" : "Il est son neveu adoptif.",
        "pict" : "url('')",
    },
    {
        "text" : "Combien de personne forme la communauté de l'anneau ?",
        "good" : 2,
        "choice" : [
            "3",
            "6",
            "9",
            "12",
        ],
        "answer" : "A leur départ, la communauté est formée de : 1 magicien, " +
            "2 hommes, 1 nain, 1 elfe et 4 hobbits, donc 9 en tout",
        "pict" : "url('')",
    },
    {
        "text" : "Gimli est un ",
        "good" : 1,
        "choice" : [
            "elfe",
            "nain",
            "homme",
            "hobbit",
        ],
        "answer" : "Gimli est le représentant des nains au sein de la communauté.",
        "pict" : "url('')",
    },
    {
        "text" : "Quel est le surnom d'Aragorn ?",
        "good" : 0,
        "choice" : [
            "Grand-pas",
            "Long-bow",
            "Longue-barbe",
            "Roitelet",
        ],
        "answer" : "Aragorn pour surnom Grand-pas, mais il en a d'autre...",
        "pict" : "url('')",
    },
    {
        "text" : "Rendez-vous est donné avec Gandalf à l'auberge :",
        "good" : 1,
        "choice" : [
            "du Dragon vert",
            "du Poney fringant",
            "du Chaudron baveu",
            "de la Cantina",
        ],
        "answer" : "Ils se donnent rendez-vous à l'auberge du Poney fringant",
        "pict" : "url('')",
    },
    {
        "text" : "Combien de nazgul se lancent à leur poursuite",
        "good" : 3,
        "choice" : [
            "1",
            "3",
            "6",
            "9",
        ],
        "answer" : "Les spectres sont au nombre de 9.",
        "pict" : "url('')",
    },
    {
        "text" : "Trouvé l'intrus",
        "good" : 2,
        "choice" : [
            "Gandalf le Blanc",
            "Gandalf le Gris",
            "Gandalf le Brun",
            "Mithrandir",
        ],
        "answer" : "\"Le Brun\" ne fait pas partie des surnoms de Gandalf, mais il en a d'autres...",
        "pict" : "url('')",
    },
    {
        "text" : "Qu'est-ce que le Lembas ?",
        "good" : 1,
        "choice" : [
            "la langue des elfe",
            "du pain elfique",
            "le minerai de la Moria",
            "l'herbe à pipe",
        ],
        "answer" : "Le pain elfique, une bouchée suffit à nourrir un adulte pour la journée.",
        "pict" : "url('')",
    },
    {
        "text" : "Avec quelle créature combat Gandalf sur le pont la mine ?",
        "good" : 3,
        "choice" : [
            "un dragon",
            "un orque",
            "un balrog",
            "Sauron",
        ],
        "answer" : "Il combat le balrog et lui dit : :\"Vous ne passerz-pas !\"",
        "pict" : "url('')",
    }
]

$('#container').css('background-color', "#ff7f5080");
// set display
$('#nbr').text(quest.length);
$('#answer').hide();
// beginning screen to screen question 1

$('#start').click(function (){
    // hidden start button
    $('#start').hide();
    // display first quest (index 0)
    $('#questNbr').show().text('Question ' + 1);
    $('#quest').text(quest[0].text)
    $('#answer').show();
    // one choice for each case
    $('.case').each(function (i){
        $(this).text(quest[0].choice[i]);
    })
})

let goodAns = [];

$('.case').click(function (){
    let a = goodAns.length + 1;
    // display quest index goodAns.length
    $('#questNbr').show().text('Question ' + (a + 1));
    $('#quest').text(quest[a].text)
    $('#answer').show();
    // one choice for each case
    $('.case').each(function (i){
        $(this).text(quest[a].choice[i]);
    })

    console.log(quest[a-1].good);
    let idx = $(this).index();
    console.log(idx);

    if($(this).index() === quest[a-1].good){
        let ref = goodAns.push('Bonne réponse');
    }
    else {
        let ref = goodAns.push(quest[a].answer);
    }


    console.log(goodAns);
    console.log(goodAns.length);
})
