//recuperation chaine de requete dans url
const queryString_url_id = window.location.search;
console.log(queryString_url_id);


// methode1 pour extraire l 'id
//const leId = queryString_url_id.slice(1);
//console.log(leId);


// methode2 pour extraire l 'id
const urlSearchParams = new URLSearchParams(queryString_url_id);
console.log(urlSearchParams);
const id = urlSearchParams.get("id");
console.log(id);

//affichage du produit selectionné par son id
//methode 1 avec fetch en mettant l'id a la fin de l url
let response = fetch (`http://localhost:3000/api/teddies/${id}`);

//Uncaught SyntaxError: await is only valid in async functions and the top level bodies of modules
console.log(response);




// methode2 avec .find()
console.log(response);

//const idProduitSelect = response.find((element) => element._id ===_id);
//console.log(idProduitSelect);
//marche pas

// preparation code HTML
const position = document.querySelector("#produit");
console.log(position);

const structureProduit = `  <div class="row mb-3">     
<div class=" col-sm-6 col-lg-6 themed-grid-col"> <h2 id="name">${'name' }</h2> 
<p id="id">${'id' }</p>
<p id="description"> ${'description' }</div class> 
<div class="col-sm-6 col-lg-6 themed-grid-col"> <a href="./produit.html?id=${'id' }">
<img width="300"  src = "${'imageUrl'}">
`

//affichage teddies
function displayArticles(article){
    document.getElementById("produit").innerHTML +=`<div class="row mb-3">     
    <div class=" col-sm-6 col-lg-6 themed-grid-col"> <h2 id="name">${article.name }</h2> 
    <p id="id">${article._id }</p>
    <p id="description"> ${article.description }</div class> 
    <div class="col-sm-6 col-lg-6 themed-grid-col"> <a href="./produit.html?id=${article._id }">
    <img width="300"  src = "${article.imageUrl}">`;
    }
console.log(displayArticles);