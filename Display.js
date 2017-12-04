var open = require ('openurl');

// open.open(url) permet de lancer ce qu'on recupère dans un nouvel onglet
var fs = require("fs");
var contents = fs.readFileSync('categories.json','utf8');
var obj = JSON.parse(contents);

function timer(cptT,cptE,s){      //
    setInterval(function(){
        if ((cptE>s) && (cptT>s))
            cptE=cptT=0;          // si n dépasse le nombre de pages que l'on veut
                            // on le remet à 0 ==> retour au début du cycle
        open.open(obj.categories.evenements[cptE++]);
        setTimeout(function(){
            open.open(obj.categories.theses[cptT++]);
        },3000); // Temps du setInterval / 2
    },6000);
}
exports.timer = timer;
/*
console.log(obj.categories.evenements[0]);
setTimeout(function(){          // on commence le défilement afin d'éviter d'attendre au début
    console.log(obj.categories.theses[0]);
},3000);                        // temps du setInterval / 2
//timer(1,1,2);                   // on commence à 1 étant donné qu'on commence à défiler ci-dessus
*/
