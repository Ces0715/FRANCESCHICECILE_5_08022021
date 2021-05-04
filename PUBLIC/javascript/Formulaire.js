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


    alerter  (value)  {
        return `${value}:chiffres non autorisés \n caractères compris entre 3 et 20`;
    }

     regExNomPrenomVille(value) {
        return /^([A-Za-z]{3,20})?([-]{0,1})?([A-Za-z]{3,20})$/.test(value);
    }
     controlePrenom() {
        //controle du prenom
        const lePrenom = formulaireValues.prenom;
        if (this.regExNomPrenomVille(lePrenom)) {
            console.log("ok");
            return true;
        } else {
            console.log("ko");
            alert(alerter("Prenom"));
            return false;
        }
    }

     controleNom() {
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
    }


    regExCodePostal(value)  {
        return /^[0-9]{5}$/.test(value);
    }

     controleCodePostal() {
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
    }

     regExEmail (value)  {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value);
    }

     controleEmail() {
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
    }

    regExAdresse (value){
        return /^[A-Za-z0-9\s]{5,50}$/.test(value);
    }

     controleAdresse() {
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
    }


    
}


// appel de l 'instance de classe Formulaire pour creer l'objet formulairevalues(recup des valeurs)
const formulaireValues = new Formulaire();


    //controle validité du formulaire avant envoi dans le LS
    if (controlePrenom() && controleNom() && controleCodePostal() && controleEmail() && controleAdresse()) {
        //******mettre l'objet formulaireValues dans le localstorage****** */
        localStorage.setItem("formulaireValues", JSON.stringify(formulaireValues));
    } else {
        alert("Veuillez bien remplir le formulaire");
    }