let chiffreMystere = Math.floor(Math.random() * 10);
let success =  false;
let count = 0 ;
  console.log(chiffreMystere);

  while(!success) {
   
     let saisiUser = prompt ("entrer un nombre compris ente entre 0 et 9") ;
   if(saisiUser=chiffreMystere) {
success= true;
 alert ("bravo , vous avez trouvé le chiffre mystere");
   } else {
    alert ("faux , veuillez choisir un autre chiffre");

    count +=1;
    if (count == 3){
        alert ("vous avez epuisé le nombre autorisé");
        break;

    }
  
   }
  }