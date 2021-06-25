//recuperation chaine de requete dans url
const queryString_url_id = window.location.search;

// methode pour extraire l 'id
const urlSearchParams = new URLSearchParams(queryString_url_id);
const id = urlSearchParams.get("id");

//affichage du produit selectionné par son id en utilisant la methode fetch en mettant l'id a la fin de l url
const response = fetch(`http://localhost:3000/api/teddies/${id}`);
response.then(async (data) => {
  const article = await data.json();

  //adapter le formulaire au nombre d'options couleurs et quantite de chaque produit
  afficherProduit(article);
  afficherCouleur(article);
  afficherQuantite();

  //selection dans le DOM du  bouton pour l'ajout au panier
  const btnPanier = document.querySelector("#btn-envoyer");

  //ecouter le bouton et envoyer le panier
  btnPanier.addEventListener("click", (event) => {
    event.preventDefault();
    btnPanier.innerHTML = "cliqué";

    const choixCouleur = document.querySelector("#option_couleur");
    const choixForm = choixCouleur.value;
    const choixNombre = document.querySelector("#option_quantité");
    const choixForm2 = choixNombre.value;

    //Récuperation des valeurs du formulaire
    let optionsProduit = {
      name: article.name,
      id: article._id,
      imageUrl: article.imageUrl,
      price: (article.price * choixForm2) / 100,
      option_couleur: choixForm,
      option_quantité: choixForm2,
    }

    //--------------------------- LOCAL STORAGE-------------------------------------------------
    //declaration de la variable pour mettre la key et la value dans le local storage
    let produitLocal = JSON.parse(localStorage.getItem("produit"));

    //fonction fenetre pop up de confirmation
    const popupConfirm = () => {
      if (window.confirm(`${article.name} option :${choixForm} quantité :${choixForm2} ajouté au panier. Consultez le panier ou retour accueil`)) {
        window.location.href = "panier.html";
      }
      else {
        window.location.href = "index.html";
        localStorage.removeItem("produit");
      }
    }

    //FACTORISATION DU CODE (fonction ajout du produit selectionné dans le localStorage)
    const ajoutProduitLocalStorage = () => {
      produitLocal.push(optionsProduit);
      // transformation en format JSON et envoi dans la key "produit" du local Storage
      localStorage.setItem("produit", JSON.stringify(produitLocal));
    };
    //si produits deja enregistré dans local storage(if) sinon (else)
    if (produitLocal) {
    }
    else
      produitLocal = [];
    ajoutProduitLocalStorage();
    popupConfirm();
  })
});

function afficherProduit(article) {
  //preparation structure HTML pour affichage produit
  document.getElementById("produit").innerHTML +=
  `<div class="row mb-3">     
      <div class=" col-sm-6 col-lg-6 themed-grid-col"> 
        <h2 id="name">${article.name}</h2> 
        <p id="price"><span class ="gras">Son prix : ${article.price / 100}</span> €</p> 
        <form>
          <label for ="option_couleur"> Choisir la couleur:
          <select name="choix" id="option_couleur" > </select>
          </label> 
        </form>
        <form>
          <label for ="option_quantité"> Choisir la quantité :
          <select name ="quantity" id ="option_quantité"></select> 
          </label>
        </form>  
      </div>
      <div class="col-sm-6 col-lg-6 themed-grid-col">  
        <a href="./panier.html">
        <img width="300"  src = "${article.imageUrl}">
        <button id ="btn-envoyer" type="submit name="btn-envoyer">Ajouter au panier</button>  
      </div> `;
}

function afficherCouleur(article) {
  const optionCouleur = article.colors;
  let structureOptions = "";

  // boucle for pour afficher options couleur
  for (let j = 0; j < optionCouleur.length; j++) {
    structureOptions += 
    `<option value = "${optionCouleur[j]}">${optionCouleur[j]} </option> `;
  }
  //selection id des couleurs
  const choixCouleur = document.querySelector("#option_couleur");
  choixCouleur.innerHTML = structureOptions;
}

function afficherQuantite() {
  let structureNombre = [];
  for (let k = 1; k < 10; k++) {
    structureNombre +=
      `<option value = "${k}">${k} </option> `;
  }
  //selection id quantité
  const choixNombre = document.querySelector("#option_quantité");
  choixNombre.innerHTML = structureNombre;
}