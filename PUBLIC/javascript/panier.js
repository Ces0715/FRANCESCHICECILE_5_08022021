//declaration variable pour mettre key et value dans le local storage
let produitLocal = JSON.parse(localStorage.getItem("produit"));
console.log(produitLocal);

// affichage produits panier-- selection id ou injection code html
const produitPanier = document.querySelector("#panier");

let structureProduitPanier = [];
// si panier vide..afficher "panier vide"(=== null)
console.log(produitLocal);
if (produitLocal === null || produitLocal.length == 0) {
    const panierVide =
        `<div class=" col-sm-6 col-lg-6 themed-grid-col">
        <h2> Le panier est vide</h2>
    </div>`;
    produitPanier.innerHTML = panierVide;
} else {
    // si panier pas vide : afficher produits dans local storage
    for (let l = 0; l < produitLocal.length; l++) {
        structureProduitPanier +=

`<div class="row mb-3">     
    <div class=" col-sm-6 col-lg-6 themed-grid-col"> 
        <h2 id="name">Nom du produit : ${produitLocal[l].name}</h2> 
<p id="price">Prix: ${produitLocal[l].price} €</p>  
<p id = "couleur" >Couleur : ${produitLocal[l].option_couleur}</p>
<p id = "quantité" >Quantité : ${produitLocal[l].option_quantité}</p>  

</div>
    <div class="col-sm-6 col-lg-6 themed-grid-col"> 
  <img width="300"  src = "${produitLocal[l].imageUrl}">
  <button class="btn-supprimer">Supprimer </button>
</div>
</div> `;
    }
    produitPanier.innerHTML = structureProduitPanier;
}

// ---------------------CREATION BOUTON SUPPRIMER L ARTICLE----------------------------------------
//selection des references des boutons btn-supprimer

let btn_supprimer = document.querySelectorAll(".btn-supprimer");
console.log(btn_supprimer);
for (let m = 0; m < btn_supprimer.length; m++) {
    btn_supprimer[m].addEventListener("click", (event) => {
        event.preventDefault();

        produitLocal = produitLocal.filter(el => el !== produitLocal[m]);

        // envoi de la variable dans le local storage
        // transformation en format JSON et envoi dans la key "produit" du local Storage
        localStorage.setItem("produit", JSON.stringify(produitLocal));

        // creer alerte pour avertir de la suppression du produit et rechargement de la page
        alert("produit supprimé du panier");
        window.location.href = "panier.html";
    })
}

//-------------------CREATION BOUTON POUR VIDER COMPLETEMENT LE PANIER--------------------------
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

//-------------------------------MONTANT TOTAL------------------------------------------------

// variable pour mettre les prix qui sont dans le panier
let somme = 0;
// chercher les prix du panier avec boucle for
for (let n = 0; n < produitLocal.length; n++) {
    let prixProduitsPanier = produitLocal[n].price;
somme = prixProduitsPanier + somme;
}
// code HTML et injection pour afficher prix total
const affichPrixTotal = `<div class = "prix_total"> Prix total :${somme}€ </div>`
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
    window.location.href = "confirmation.html";

//******************************************************************************************** */

    
    // appel de l 'instance de classe Formulaire pour creer l'objet formulairevalues(recup des valeurs)
    const formulaireValues = new Formulaire();

    //**************************************GESTION VALIDER FORMULAIRE****************************************************/

    
    
    
    

    

    

    //controle validité du formulaire avant envoi dans le LS
    if (controlePrenom() && controleNom() && controleCodePostal() && controleEmail() && controleAdresse()) {
        //******mettre l'objet formulaireValues dans le localstorage****** */
        localStorage.setItem("formulaireValues", JSON.stringify(formulaireValues));
    } else {
        alert("Veuillez bien remplir le formulaire");
    }
});


//*******CONTENU DU LS DANS LES CHAMPS DU FORMULAIRE*********/
// mettre la key du ls dans une variable
const dataLocalStorage = localStorage.getItem("formulaireValues");
console.log(dataLocalStorage);

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

  



// creation objet du formulaire et produits a mettre dans un objet pour l'envoyer au serveur
    //const aEnvoyer = {
        //produitLocal,
        //formulaireValues,
    //};
    //function envoiServeur(){
     // envoyer l'objet aEnvoyer vers le serveur
     //const promise1 = fetch( "http://localhost:3000/api/teddies" );
     //console.log(promise01);

//}
