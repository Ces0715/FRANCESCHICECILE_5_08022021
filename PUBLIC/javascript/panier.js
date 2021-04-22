//declaration variable pour mettre key et value dans le local storage
let produitLocal = JSON.parse(localStorage.getItem("produit"));
console.log(produitLocal);

// affichage produits panier-- selection id ou injection code html
const produitPanier = document.querySelector("#panier");

let structureProduitPanier = [];
// si panier vide..afficher "panier vide"(=== null)
if (produitLocal === null || produitLocal == 0) {
    const panierVide =
        `<div class=" col-sm-6 col-lg-6 themed-grid-col">
    <h2> Le panier est vide</h2>
</div>`;
    produitPanier.innerHTML = panierVide;

} else {
    // si panier pas vide : afficher produits dans local storage
    for (let l = 0; l < produitLocal.length; l++) {

        structureProduitPanier +=
            ` <div class="row mb-3">
        <div class=" col-12">    
                <p id="name">Nom du produit :${produitLocal[l].name}</p> 
                <p id="price">Prix: ${produitLocal[l].price} €</p>  
                <p id = "couleur" >Couleur : ${produitLocal[l].option_couleur}</p>
                <p id = "quantité" >Quantité : ${produitLocal[l].option_quantité}</p>  
                <button class="btn-supprimer">Supprimer </button>
            </div>      
        </div>  `;
    }
    produitPanier.innerHTML = structureProduitPanier;
}


//------------------------------fin affichage produits panier--------------------------------------------------


// ---------------------CREATION BOUTON SUPPRIMER L ARTICLE----------------------------------------
//selection des references des boutons btn-supprimer

let btn_supprimer = document.querySelectorAll(".btn-supprimer");
console.log(btn_supprimer);

for (let m = 0; m < btn_supprimer.length; m++) {
    btn_supprimer[m].addEventListener("click", (event) => {
        event.preventDefault();

        // selection id qui va etre supprimer en cliquant sur le bouton
        let id_select_suppression = produitLocal[m].id;
        console.log("id_select_suppression");
        console.log(id_select_suppression);

        //methode filter pour selectionner ce qu il faut garder et suprimer le reste
        produitLocal = produitLocal.filter(el => el.id !== id_select_suppression);

        // on envoie la variable dans le local storage
        // transformation en format JSON et envoi dans la key "produit" du local Storage
        localStorage.setItem("produit", JSON.stringify(produitLocal));

        // creer alerte pour avertir de la suppression du produit et rechargement de la page
        alert("produit supprimé du panier");
        window.location.href = "panier.html";
    })
}

//-------------------BOUTON POUR VIDER COMPLETEMENT LE PANIER--------------------------
// code HTML du bouton
const btn_tout_supprimer =
    `<button class = "btn_tout_supprimer"> Vider le panier</button>`;

//insertion du bouton dans HTML du panier
produitPanier.insertAdjacentHTML("beforeend", btn_tout_supprimer);

//selection reference du bouton
const btn_sup = document.querySelector(".btn_tout_supprimer");

// ------suppression key "produit" du localstorage--------
btn_sup.addEventListener('click', (e) => {
    e.preventDefault;
    //methode .removeItem pour vider localstorage
    localStorage.removeItem("produit");
    alert("le panier est vidé");
    //rechargement page
    window.location.href = "panier.html";
});

//----------------------------FIN POUR LE BOUTON------------------------------------------

//-------------------------------MONTANT TOTAL------------------------------------------------

// variable pour mettre les prix qui sont dans le panier
let prixTotal = [];

// chercher les prix du panier avec boucle for
for (let n = 0; n < produitLocal.length; n++) {
    let prixProduitsPanier = produitLocal[n].price;

    // mettre prix dans variable "prixTotal"
    prixTotal.push(prixProduitsPanier)
}

// addition des prix -- methode reduce
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const total = prixTotal.reduce(reducer);

// code HTML et injection pour afficher prix total
const affichPrixTotal = `<div class = "prix_total"> Prix total :${total}€ </div>`
produitPanier.insertAdjacentHTML("beforeend", affichPrixTotal);

//----------------afficher formulaire-----------------------

const afficherFormulaire = () => {
    //selection element DOM pour positionner le formulaire
    const formulaire = document.querySelector("#formulaire");
    const structureFormulaire =
        `<div id="formulaire">
            <h2>Remplir le formulaire pour valider la commande</h2>
            <form class="border p-5">
                <div class="form-group">
                    <div class="row">
                        <div class="col-md-6">
                            <label for="nom">Nom</label>
                            <input id="nom" class="form-control" type="text" name="" placeholder="Entrer votre nom">
                        </div>
                        <div class="col-md-6">
                            <label for="prenom">Prénom</label>
                            <input id="prenom" class="form-control" type="text" name="" placeholder="Entrer votre prénom">
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="row">
                        <div class="col-md-6">
                            <label for="mail">Mail</label>
                            <input id="mail" class="form-control" type="text" name="" placeholder="Entrer votre mail">
                        </div>
                        <div class="col-md-6">
                            <label for="numero">Numéro</label>
                            <input id="numero" class="form-control" type="text" name="" placeholder="Entrer votre numéro">
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="row">
                        <div class="col-md-6">
                            <label for="mail">Adresse</label>
                            <input id="adresse" class="form-control" type="text" name="" placeholder="Entrer votre adresse">
                        </div>
                        <div class="col-md-6">
                            <label for="ville">Code postal</label>
                            <input id="codepostal" class="form-control" type="text" name="" placeholder="Entrer le code postal">

                            <label for="ville">Ville</label>
                            <input id="ville" class="form-control" type="text" name="" placeholder="Entrer la ville">
                        </div>
                    </div>
                </div> 
                <button id ="envoyerFormulaire" type = "submit" name="envoyerFormulaire">Confirmation de commande</button>
            </form>
        </div>
        </div>`;

    //injection HTML du formulaire
    formulaire.insertAdjacentHTML("afterend", structureFormulaire);
};
//appeler la fonction pour affichage du formulaire
afficherFormulaire();

// selection bouton envoyer formulaire-----------
const btnEnvoyerFormulaire = document.querySelector("#envoyerFormulaire");
//----------------addEventlistener pour afficher------------
btnEnvoyerFormulaire.addEventListener("click", (e) => {
    e.preventDefault();

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
    console.log(formulaireValues);

    // recuperation des valeurs du formulaire
    //const formulaireValues ={
    //nom : document.querySelector("#nom").value,
    // prenom : document.querySelector("#prenom").value,
    // mail : document.querySelector("#mail").value,
    // numero : document.querySelector("#numero").value,
    //adresse : document.querySelector("#adresse").value,
    //codepostal : document.querySelector("#codepostal").value,
    //ville : document.querySelector("#ville").value,
    //}
    //******mettre l'objet formulaireValues dans le localstorage****** */
    localStorage.setItem("formulaireValues", JSON.stringify(formulaireValues));

    // value du formulaire et produits a mettre dans un objet pour l'envoyer au serveur
    const aEnvoyer = {
        produitLocal,
        formulaireValues,
    }
    // envoyer l'objet aEnvoyer vers le serveur
});

//*******CONTENU DU LS DANS LES CHAMPS DU FORMULAIRE*********/
// mettre la key du ls dans une variable
const dataLocalStorage = localStorage.getItem("formulaireValues");

//convertir la chaine de caractere en objet JS
const dataLocalStorageObject = JSON.parse(dataLocalStorage);


// mettre les value du ls dans les champs du formulaire
document.querySelector("#nom").setAttribute('value',dataLocalStorageObject.nom);
document.querySelector("#prenom").setAttribute('value',dataLocalStorageObject.prenom);
document.querySelector("#mail").setAttribute('value',dataLocalStorageObject.mail);
document.querySelector("#numero").setAttribute('value',dataLocalStorageObject.numero);
document.querySelector("#adresse").setAttribute('value',dataLocalStorageObject.adresse);
document.querySelector("#codepostal").setAttribute('value',dataLocalStorageObject.codepostal);
document.querySelector("#ville").setAttribute('value',dataLocalStorageObject.ville);

