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

  alerter(value) {
    alert( `${value}:chiffres non autorisés \n caractères compris entre 3 et 20`);
  }
  regExNomPrenomVille(value) {
    return /^([A-Za-z]{3,20})?([-]{0,1})?([A-Za-z]{3,20})$/.test(value);
  }
  regExCodePostal(value) {
    return /^[0-9]{5}$/.test(value);

  }
  controlePrenom() {
    //controle du prenom
    const lePrenom = this.prenom;
    if (this.regExNomPrenomVille(lePrenom)) {
      console.log("ok");
      return true;
    } else {
      console.log("ko");
      this.alerter("Prenom");
      return false;
    }
  }
  controleNom() {
    //controle du nom
    const leNom = this.nom;
    if (this.regExNomPrenomVille(leNom)) {
      console.log("ok");
      return true;
    } else {
      console.log("ko");
      this.alerter("Nom");
      return false;
    }
  }

  controleCodePostal() {
    //controle du code postal
    const leCodePostal = this.codepostal;
    if (this.regExCodePostal(leCodePostal)) {
      console.log("ok");
      return true;
    } else {
      console.log("ko");
      alert("Le code postal doit etre composé de 5 chiffres");
      return false;
    }
  }

  regExEmail(value) {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value);
  }

  controleEmail() {
    //controle de mail
    const leEmail = this.mail;
    if (this.regExEmail(leEmail)) {
      console.log("ok");
      return true;
    } else {
      console.log("ko");
      alert(" l'Email n'est pas correct");
      return false;
    }
  }

  regExAdresse(value) {
    return /^[A-Za-z0-9\s]{5,50}$/.test(value);
  }

  controleAdresse() {
    //controle de l'adresse
    const leAdresse = this.adresse;
    if (this.regExAdresse(leAdresse)) {
      console.log("ok");
      return true;
    } else {
      console.log("ko");
      alert(" l'adresse n'est pas correcte");
      return false;
    }
  }

  //controle validité du formulaire avant envoi dans le LS
  validityForm() {
    if (this.controlePrenom() && this.controleNom() && this.controleCodePostal() && this.controleEmail() && this.controleAdresse()) {
      //******mettre l'objet formulaireValues dans le localstorage****** */
      localStorage.setItem("formulaireValues", JSON.stringify(this));
    } else {
      alert("Veuillez bien remplir le formulaire");
    }

  }
}



