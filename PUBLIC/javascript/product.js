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
    console.log(article);
    console.log(response);

   for (const propt in article){
     console.log(propt);
     console.log(article[propt]); 
   }




//preparation structure HTML pour affichage produit

  document.getElementById("produit").innerHTML += 
`<div class="row mb-3">     
<div class=" col-sm-6 col-lg-6 themed-grid-col"> 
  <h2 id="name">${article.name}</h2> 
  <p id="id">Reférence:${article._id}</p>
  <p id="price">Prix: ${article.price/100} €</p> 

  <p id="colors"> ${article.color}</p>
  <label id ="labelOptions"> Choisir la couleur
  <select>
            <option>Tan</option>
            <option>Chocolate</option>
            <option>Black</option>
            <option>White</option>
  </select>
  </label> 

  <label id="selectQuantity"> Quantité
    <select name ="quantity" id ="choose">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>             
   </select> 
</label>
</div>

<div class="col-sm-6 col-lg-6 themed-grid-col"> 
  <a href="./produit.html?id=${'_id'}">
  <img width="300"  src = "${article.imageUrl}">
  <button id ="btn-envoyer" type="submit name="btn-envoyer">Ajouter au panier</button>
</div> `;

// selection id du formulaire

//const idForm = document.querySelector("#labelOptions");
//console.log(idForm);
//

//selection bouton pour l'ajout au panier
//const btnPanier = document.querySelector("#btn-envoyer");
//console.log(btnPanier);

//ecouter le bouton
//btnPanier.addEventListener("click",(event)=>{
  ////event.preventDefault();
});

//recup valeurs formulaire
//let optionsProduits = {
 // 'name':id.name
  //price:


