$('#container').css('background-color', "#ff7f5080");

let quest = [
    {
        "text" : "Qui est Frodon ?",
        "good" : 1,
        "choice" : [
            "Un hobbit de la Comtée",
            "Le jardinier de Bilbon",
            "Un magicien",
            "Un pilote futur X-Wing"
        ],
        "answer" : "1 - Frodon est un hobbit de la Comtée.",
        "pict" : "url('')",
    },
    {
        "text" : "Quel est son lien de parenté avec Bilbon ?",
        "good" : 4,
        "choice" : [
            "Frère",
            "Aucun lien",
            "Fils",
            "Neveu",
        ],
        "answer" : "2 - Il est son neveu adoptif.",
        "pict" : "url('')",
    },
    {
        "text" : "Combien de personne forme la communauté de l'anneau ?",
        "good" : 3,
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
        "good" : 2,
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
        "good" : 1,
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
        "good" : 2,
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
        "good" : 4,
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
        "good" : 3,
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
        "good" : 2,
        "choice" : [
            "la langue des elfe",
            "du pain elfique",
            "le minerai de la Moria",
            "l'herbe à pipe",
        ],
        "answer" : "",
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
        "answer" : "",
        "pict" : "url('')",
    }
]

console.log(quest);
