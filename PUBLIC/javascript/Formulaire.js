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
    alert(`${value}:chiffres non autorisés \n caractères compris entre 3 et 20`);
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
      return true;
    } else {
      this.alerter("Prenom");
      return false;
    }
  }
  controleNom() {
    //controle du nom
    const leNom = this.nom;
    if (this.regExNomPrenomVille(leNom)) {
      return true;
    } else {
      this.alerter("Nom");
      return false;
    }
  }

  controleCodePostal() {
    //controle du code postal
    const leCodePostal = this.codepostal;
    if (this.regExCodePostal(leCodePostal)) {
      return true;
    } else {
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
      return true;
    } else {
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
      return true;
    } else {
      alert(" l'adresse n'est pas correcte");
      return false;
    }
  }

  //controle validité du formulaire avant envoi dans le LS
  validityForm() {
    if (this.controlePrenom() && this.controleNom() && this.controleCodePostal() && this.controleEmail() && this.controleAdresse()) {
      //******mettre l'objet formulaireValues dans le localstorage****** */
      localStorage.setItem("formulaireValues", JSON.stringify(this));
      localStorage.setItem("prixTotal", JSON.stringify(somme));

    } else {
      alert("Veuillez bien remplir le formulaire");
    }
  }
}


//recuperation id de la commande du LS
const responseId = localStorage.getItem("responseId");
console.log(`responseId : ${responseId}`);

// recuperation du prix total
const prixT = localStorage.getItem("prixTotal");
console.log(`prixTotal : ${prixT}`);

//structure html de la page
// selection element du DOM
const prixTotalHtml = document.querySelector("#confirmation");
const structureConfirmation =
  `<div class="row mb-3">
<div class=" col-12"> 
    <h2>Orinoco vous remercie pour votre commande</h2>
    <p>Nous avons le plaisir de vous informer que votre commande a bien été enregistrée. Vous trouverez ci-dessous le récapitulatif de votre commande. En espérant vous revoir très vite</p>
</div>
<div class=" col-12">
    <h2> Récapitulatif de votre commande </h2>
    <p>Votre commande numéro : <span class ="gras">${responseId}</span> a bien été prise en compte</p>
    <p>Le montant de votre commande est de : <span class ="gras">${prixT}</span>€</p>
    <p class="gras">Au plaisir de vous revoir</p>
</div>
</div>`;

// injection html
prixTotalHtml.insertAdjacentHTML("afterbegin", structureConfirmation);