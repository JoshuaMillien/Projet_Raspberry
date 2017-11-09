// afficher un nouvel onglet renvoyant vers openclassrooms
function charger(lien){
  window.open(lien,"width=500","height=800");
}
//charger("https://openclassrooms.com/courses/dynamisez-vos-sites-web-avec-javascript/la-gestion-du-temps-3");

// Affiche le site 5 secondes après le lancement du script
/*setTimeout(function() {
    charger("https://openclassrooms.com/courses/");
  },5000);
*/


function alterner(){
    var myWindow = charger("https://w3schools.com");
    setInterval(function(){
        setTimeout(function(){
            charger("https://openclassrooms.com");
        },1500);
        setTimeout(function(){
            charger("http://www.tomsguide.fr/forum/id-553302/resolu-javascript-ouvrir-url-fenetre-courante.html");
        },6500);
    },10000);
}

// L'écart des temps entre les setTimeout() doit être égal à la moitié de celui de l'intervalle

alterner();


