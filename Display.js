// Pour plus de lisibilité pour obj, aller voir fichier categories.json

var obj = JSON.parse('{"categories" : {"evenements":["https://www.lgi2a.univ-artois.fr/spip/fr/evenements/prix-du-meilleur-papier-doctorant-a-lfa-2017-pour-nathalie-helal-et-pauline" , "https://www.lgi2a.univ-artois.fr/spip/fr/evenements/gsc-2018-4th-international-conference-on-green-supply-chain" , "https://www.lgi2a.univ-artois.fr/spip/fr/evenements/prix-du-meilleur-poster-pour-nathalie-helal-jrda-2017"],"theses" :["https://www.lgi2a.univ-artois.fr/spip/fr/travaux/these-de-yu-lin-huang","https://www.lgi2a.univ-artois.fr/spip/fr/travaux/these-de-siti-mutmainah","https://www.lgi2a.univ-artois.fr/spip/fr/travaux/these-de-cecilia-daquin"]}}');
/*

Ces 3 lignes permettent de lire un fichier json et de récupérer
ses infos avec : jsonContent.categories.evenements[0] ...
Problème : Le window.open ne fonctionne pas avec cette méthode.

*/
var fs = require("fs");
var contents = fs.readFileSync('categories.json','utf8');
var jsonContent = JSON.parse(contents);

function charger(lien){
  window.open(lien,"width=500","height=800");
}
function alternerEvent(n,s){
  var m = s;
  setInterval(function(){
    if (n<0) n=m;
    charger(jsonContent.categories.evenements[n]);
    alternerEvent(n-1,s);
  },3000);
}

alternerEvent(2,2); // les chiffres doivent être égaux !!
function alternerTheses(n,s){
  var m = s;
  setInterval(function(){
    if (n<0) n=m;
    charger(obj.categories.theses[n]);
    alternerTheses(n-1,s);
  },3000);
}

//alternerTheses(2,2); // Les chiffres doivent être égaux !!
/*
evenements :
Page 1 : https://www.lgi2a.univ-artois.fr/spip/fr/evenements/prix-du-meilleur-papier-doctorant-a-lfa-2017-pour-nathalie-helal-et-pauline
Page 2 : https://www.lgi2a.univ-artois.fr/spip/fr/evenements/gsc-2018-4th-international-conference-on-green-supply-chain
Page 3 : https://www.lgi2a.univ-artois.fr/spip/fr/evenements/prix-du-meilleur-poster-pour-nathalie-helal-jrda-2017
Page 4 : https://www.lgi2a.univ-artois.fr/spip/fr/evenements/journee-regionale-des-doctorants-en-automatique-jrda-2017
Page 5 : https://www.lgi2a.univ-artois.fr/spip/fr/evenements/prix-du-meilleur-papier-etudiant-pour-pauline-minary-a-belief-2016
Page 6 : https://www.lgi2a.univ-artois.fr/spip/fr/evenements/mosim-2016-session-pilotage-des-systemes-de-production-de-soins-en-milieu
*/
