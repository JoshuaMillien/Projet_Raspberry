# Installation de NodeJs

Pour installer NodeJs sur Raspbian ou ubuntu, réaliser ces commandes : 
"curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -"  
puis,   
"sudo apt-get install -y nodejs".

### Module open

Pour ouvrir une fenêtre avec NodeJs, nous avons besoin du module open qui n'est pas toujours présent.
Si vous ne l'avez pas, lancer la commande "npm install open --save".


# Lancer le programme

Pour lancer le programme, lancer la commande "node Display.js". Le défilement devrait se réaliser à l'intérieur de la console.
## Les sockets

On peut également lancer le fichier testSock.js avec la même commande que précédemment. Nous pouvons avec ce fichier nous connecter en localhost:8080 sur le navigateur.

# Les fichiers
### Display.js

C'est le fichier principal du projet. Il implémente les fonctions de timer permettant l'alternance entre les différents liens.  
Il charge les fichiers categories.json et config.json au début.  
Il inclut les modules fs(FileSystem) permettant de lire un fichier à part et le module open qui permet d'ouvrir un lien.  

### testSock.js
Ce fichier importe également différents modules. Le module http permettant de créer le serveur localhost dans la page index.html.  
Le module fs est encore une fois importé pour lire le fichier index.html.  
Ensuite, nous trouvons le module socket.io permettant de gèrer le serveur.  
Lorsqu'un client se connecte au serveur, le ficher Display.js ( importé au début ) s'exécute.

### Fichier de configuration : config.json

Il comporte trois catégories : catégories, nombre de pages et vitesse (vitesse de défilement entre chaque pages).  
Dans catégories il faudra écrire soit : evenements, theses ( sans accent ).  
Le nombre de pages est celui que vous voulez tant qu'il y a des pages à afficher.  
La vitesse devra être donnée en millisecondes.



