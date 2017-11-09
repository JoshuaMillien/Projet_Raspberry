// afficher un nouvel onglet renvoyant vers openclassrooms
function charger(lien){
  window.open(lien,"width=500","height=800");
}
/*

    Affiche le site 5 secondes après le lancement du script

    setTimeout(function() {
        charger("https://openclassrooms.com/courses/");
      },5000);
  
*/

/*

    La fonction alterner() lance une page blanche ( titre= un exemple ), ouvrir un onglet w3schools, puis ouvrir
    une fenetre a part qui fait defiler les sites selon un laps de temps.
    
*/

function alterner(){
    // L'écart des temps entre les setTimeout() doit être égal à la moitié de celui de l'intervalle
    
    var win = window.open("https://w3schools.com");
    setTimeout(function(){
        win.close();// Le premier onglet va se fermer après 500 ms.
    },500);
    
    
    setInterval(function(){
        setTimeout(function(){
            charger("https://openclassrooms.com");
        },1500);
        setTimeout(function(){
            charger("http://www.tomsguide.fr/forum/id-553302/resolu-javascript-ouvrir-url-fenetre-courante.html");
        },6500);
    },10000);
}

alterner();


