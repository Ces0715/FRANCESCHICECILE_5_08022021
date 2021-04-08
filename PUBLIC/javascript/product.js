//recuperation chaine de requete dans url
const queryString_url_id = window.location.search;
console.log(queryString_url_id);

// methode2 pour extraire l 'id
const urlSearchParams = new URLSearchParams(queryString_url_id);
console.log(urlSearchParams);
const id = urlSearchParams.get("id");
console.log(id);

//affichage du produit selectionné par son id
//methode 1 avec fetch en mettant l'id a la fin de l url
const response = fetch (`http://localhost:3000/api/teddies/${id}`);
response.then(async(data)=>{
    const article = await data.json();
     
//preparation structure HTML pour affichage produit

afficherProduit(article);
 function afficherProduit(article) {
  document.getElementById("produit").innerHTML += 
  `<div class="row mb-3">     
      <div class=" col-sm-6 col-lg-6 themed-grid-col"> 
        <h2 id="name">${article.name}</h2> 
        <p id="id">Reférence:${article._id}</p>
        <p id="price">Prix: ${article.price/100} €</p> 
        <form>
        <label for ="option_couleur"> Choisir la couleur : </label>
          <select name ="option_couleur" id = "option_couleur> </select>   
        </form>

        <form>
          <label for ="option_quantité"> Choisir la quantité : </label>
            <select name ="option_quantité" id ="option_quantité">    
            </select>  
        </form>
      </div>
      <div class="col-sm-6 col-lg-6 themed-grid-col"> 
        <a href="./panier.html?id=${'_id'}">
        <img width="300"  src = "${article.imageUrl}">
        <button id ="btn-envoyer" type="submit name="btn-envoyer">Ajouter au panier</button>
      </div> `;


const choixCouleur = document.querySelector("#option_couleur");
console.log(choixCouleur);
const choixForm = choixCouleur.value;
console.log(choixForm);


const choixNombre = document.querySelector("#option_quantité");
console.log(choixNombre);
const choixForm2 = choixNombre.value;
console.log(choixForm2);

//selection bouton pour l'ajout au panier
const btnPanier = document.querySelector("#btn-envoyer");
console.log(btnPanier);

//ecouter le bouton et envoyer au panier
btnPanier.addEventListener("click",(event)=>{
  event.preventDefault();
  btnPanier.innerHTML = "cliqué";
//recuperation valeur du formulaire
//--------------------------------------------------

let optionsProduit = {
  name: article.name,
  id:article._id,
  price:article.price /100,
  option_couleur:choixForm,
  option_quantité:choixForm2,
  }
console.log(optionsProduit);

//-----------------------------------------------------------------------------------
// LOCAL STORAGE
//declaration variable pour mettre key et value dans le local storage
let produitLocal = JSON.parse(localStorage.getItem("produit"));
console.log(produitLocal);

//fonction fenetre pop up
const popupConfirm = () =>{
  if(window.confirm( `${article.name}option :${choixForm} ajouté au panier Consultez le panier ou retour accueil` )){
    window.location.href = "panier.html";
  }
  else{
    window.location.href = "index.html"
  }
}
//fonction ajout du produit selectionné dans le localStorage
const ajoutProduitLocalStorage =() =>{
  produitLocal.push(optionsProduit);  
// transformation en format JSON et envoi dans la key "produit" du local Storage
localStorage.setItem("produit", JSON.stringify(produitLocal));
};

//si produits deja dans local storage
if(produitLocal){
  ajoutProduitLocalStorage();
  popupConfirm();
}
//si pas de produits
else{
  produitLocal =[];
  ajoutProduitLocalStorage();
  popupConfirm();
}
}) 

//-----------------------------------------------------------
function afficherProduit(article) {
  document.getElementById("produit").innerHTML += 
  `<div class="row mb-3">     
      <div class=" col-sm-6 col-lg-6 themed-grid-col"> 
        <h2 id="name">${article.name}</h2> 
        <p id="id">Reférence:${article._id}</p>
        <p id="price">Prix: ${article.price/100} €</p> 
        <form>
        <label for ="option_couleur"> Choisir la couleur </label>
          <select name ="option_couleur" id = "option_couleur>
            <option value ="option1"> option1</option>
            <select name="choix" id="choix"> </select> 
        </form>
        <form>
          <label id="selectQuantity"> Quantité :
            <select name ="quantity" id ="choose"></select> 
          </label>
        </form>
      </div>
      <div class="col-sm-6 col-lg-6 themed-grid-col"> 
        <a href="./panier.html?id=${'_id'}">
        <img width="300"  src = "${article.imageUrl}">
        <button id ="btn-envoyer" type="submit name="btn-envoyer">Ajouter au panier</button>
      </div> `;
      
}

  //les options couleurs du produit
  const optionCouleur = article.colors;
  console.log(optionCouleur);
  let structureOptions = "";
  // boucle for pour afficher options couleur
  for(let j = 0; j < optionCouleur.length; j++){
    structureOptions +=  `<option value = "${j}"> ${optionCouleur[j]}  </option> `;         
  }
  
  //choixCouleur.innerHTML = structureOptions;
  
  
  // choisir nombre
  let optionNombre = ['1', '2', '3', '4', '5'];
  let structureNombre =[];
  // ou let structureNombre ="";
  for (let k = 0; k < optionNombre.length; k++){
    structureNombre += `<option value = "${k}">${optionNombre[k]}  </option> `;         
  }
  //console.log(structureNombre);
  
  choixNombre.innerHTML = structureNombre;
};
});
