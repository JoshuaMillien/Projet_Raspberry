var open = require ('open');


// open(url) permet de lancer ce qu'on recupère dans un nouvel onglet
var fs = require("fs");
var contents = fs.readFileSync('categories.json','utf8');
var obj = JSON.parse(contents);

// Lecture du fichier de configuration
var fileConf = fs.readFileSync('config.json','utf8');
var config = JSON.parse(fileConf);

function alterner(cptT,cptE,s){      //Focntion pour afficher evenements + theses
    setInterval(function(){
        if ((cptE>s) && (cptT>s))
            cptE=cptT=0;          // si n dépasse le nombre de pages que l'on veut
                            // on le remet à 0 ==> retour au début du cycle
        console.log(obj.categories.evenements[cptE++]);
        setTimeout(function(){
            console.log(obj.categories.theses[cptT++]); // pour ouvrir un onglet, remplacer les console.log par open.open
        },config.vitesse/2); // Temps du setInterval / 2
    },config.vitesse);
}

function alternerEvent(cptE,s){
    setInterval(function(){
        if (cptE>s)
            cptE=0;
        console.log(obj.categories.evenements[cptE++]);
    },config.vitesse);
}

function alternerTheses(cptT,s){
    setInterval(function(){
        if (cptT>s)
            cptT=0;
        console.log(obj.categories.theses[cptT++]);
    },config.vitesse);
}


if (config.categorie == "evenements")
    alternerEvent(0,config.nombrePages-1);
if (config.categorie == "theses")
    alternerTheses(0,config.nombrePages-1);
if (config.categorie == "evenements + theses"){
    console.log(obj.categories.evenements[0]);
    setTimeout(function(){          // on commence le défilement afin d'éviter d'attendre au début
        console.log(obj.categories.theses[0]);
    },config.vitesse/2);                        // temps du setInterval / 2
    alterner(1,1,config.nombrePages-1);                   // on commence à 1 étant donné qu'on commence à défiler ci-dessus
}







exports.alterner = alterner;
