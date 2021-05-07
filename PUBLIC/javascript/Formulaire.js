//******************************************************************************************** */
//CREATION CLASSE POUR CREER UN OBJET CONTENANT LES VALEURS DU FORMULAIRE



class Formulaire {
    constructor() {
        this.nom = document.querySelector("#nom").value;
        this.prenom = document.querySelector("#prenom").value;
        this.mail = document.querySelector("#mail").value;
        this.numero = document.querySelector("#numero").value;
        this.adresse = document.querySelector("#adresse").value;
        this.codepostal = document.querySelector("#codepostal").value;
        this.ville = document.querySelector("#ville").value;
    }
}

     // appel de l 'instance de classe Formulaire pour creer l'objet formulairevalues(recup des valeurs)
const formulaireValues = new Formulaire();

  
  
  
  //**************************************GESTION VALIDER FORMULAIRE****************************************************/
  
  const alerter = (value) => {
    return `${value}:chiffres non autorisés \n caractères compris entre 3 et 20`;
  }
  const regExNomPrenomVille = (value) => {
    return /^([A-Za-z]{3,20})?([-]{0,1})?([A-Za-z]{3,20})$/.test(value);
  }
  const regExCodePostal = (value) => {
    return /^[0-9]{5}$/.test(value);
  }
  const regExEmail = (value) => {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value);
  }
  
  const regExAdresse = (value) => {
    return /^[A-Za-z0-9\s]{5,50}$/.test(value);
  }
  
  function controlePrenom() {
    //controle du prenom
    const lePrenom = formulaireValues.prenom;
    if (regExNomPrenomVille(lePrenom)) {
        console.log("ok");
        return true;
    } else {
        console.log("ko");
        alert(alerter("Prenom"));
        return false;
    }
  };
  
  function controleNom() {
    //controle du nom
    const leNom = formulaireValues.nom;
    if (regExNomPrenomVille(leNom)) {
        console.log("ok");
        return true;
    } else {
       console.log("ko");
        alert(alerter("Nom"));
        return false;
    }
  };
  
  function controleCodePostal() {
    //controle du code postal
    const leCodePostal = formulaireValues.codepostal;
    if (regExCodePostal(leCodePostal)) {
        console.log("ok");
        return true;
    } else {
        console.log("ko");
       alert("Le code postal doit etre composé de 5 chiffres");
        return false;
    }
  };
  
  function controleEmail() {
    //controle de mail
    const leEmail = formulaireValues.mail;
    if (regExEmail(leEmail)) {
        console.log("ok");
        return true;
    } else {
        console.log("ko");
       alert(" l'Email n'est pas correct");
        return false;
    }
  };
  
  function controleAdresse() {
    //controle de l'adresse
    const leAdresse = formulaireValues.adresse;
    if (regExAdresse(leAdresse)) {
        console.log("ok");
        return true;
    } else {
        console.log("ko");
       alert(" l'adresse n'est pas correcte");
        return false;
    }
  };
   
    //controle validité du formulaire avant envoi dans le LS
  
    if (controlePrenom() && controleNom() && controleCodePostal() && controleEmail() && controleAdresse()) {
        //******mettre l'objet formulaireValues dans le localstorage****** */
        localStorage.setItem("formulaireValues", JSON.stringify(formulaireValues));
        //window.location.href = "confirmation.html";
    } else {
        alert("Veuillez bien remplir le formulaire");
    }
  
    //**************************************GESTION VALIDER FORMULAIRE****************************************************/
  
    // creation objet du formulaire et produits a mettre dans un objet pour l'envoyer au serveur
    const aEnvoyer = {
        produitLocal,
        formulaireValues,
    };
    console.log(aEnvoyer);
  
  
    const url = 'http://localhost:3000/api/teddies/order';
    console.log(url);
    
    let fetchData = {
        method: 'POST',
        body: aEnvoyer,
        headers: new Headers()
      }
      console.log(fetchData);
      
      fetch(url, fetchData)
  .then(function() {
    // Handle response you get from the server
  });
     
  
  
  //*******CONTENU DU LS DANS LES CHAMPS DU FORMULAIRE*********/
  // mettre la key du ls dans une variable
  const dataLocalStorage = localStorage.getItem("formulaireValues");
  
  
  //convertir la chaine de caractere en objet JS
  const dataLocalStorageObject = JSON.parse(dataLocalStorage);
  
  //creer une fonction 
  function donneesLs(input) {
    if(dataLocalStorageObject == null){
  console.log("pas de valeur au local storage");
    }
    else{
        document.querySelector(`#${input}`).value = dataLocalStorageObject[input];  
    };       
  }
  donneesLs("nom");
  donneesLs("prenom");
  donneesLs("mail");
  donneesLs("numero");
  donneesLs("adresse");
  donneesLs("codepostal");
  donneesLs("ville");