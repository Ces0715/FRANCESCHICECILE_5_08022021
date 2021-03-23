
/*Antoine info*/
function listeProduits(){
  console.log("test");
}
listeProduits();
fetch("http://localhost:3000/api/teddies")
.then(response => response.json())
.then(response => alert(JSON.stringify(response)))
.catch(error => alert("Erreur : " + error));

function displayArticle(){
  document.getElementById("teddies").innerHTML +='<article class="teddy"><span id="name"></span><span id="_id"></span><span id="imageUrl"></span><span id="description"></span></article>'
}


/*recuperation données*/
const produits = fetch ("http://localhost:3000/api/teddies");
produits.then (async (responseData) =>{
  console.log(responseData);

const articles =await responseData.json();
//boucle teddies
for(let i = 0; i < articles.length; i++){
  const article = articles[i];
  displayArticle(article)
  console.log(article); 
  console.log(articles);    
//données ok
}

//affichage teddies
function displayArticle(article){
document.getElementById("teddies").innerHTML +=`<div class="row mb-3">     
<div class=" col-sm-6 col-lg-6 themed-grid-col"> <h2 id="name">${article.name }</h2> 
<p id="id">${article._id }</p>
<p id="description"> ${article.description }</div class> 
<div class="col-sm-6 col-lg-6 themed-grid-col"> <a href="./produit.html?id=${article._id }">
<img width="300"  src = "${article.imageUrl}">`;
}
})

//template autre solution
//function displayArticle(article){
//const templateElt = document.getElementById("templateArticle")
//var clone = document.importNode(template.content,true)
//cloneElt.getElementById("teddies").textContent = article.name
//cloneElt.getElementById("teddies").textContent = article.description
//document.getElementById("teddies").appenChild(cloneElt)
 

//recuperation chaine de requete dans url
const queryString_url_id = window.location.search;
console.log(queryString_url_id);


// methode1 pour extraire l 'id
//const leId = queryString_url_id.slice(1);
//console.log(leId);


// methode2 pour extraire l 'id
//const urlSearchParams = new URLSearchParams(queryString_url_id);
//console.log(urlSearchParams);
//const leId = urlSearchParams.get("id");
//console.log(leId);


//affichage du produit selectionné par son id
//methode 1 avec fetch
//let article = await fetch (`http://localhost:3000/api/teddies/${id}`);
//Uncaught SyntaxError: await is only valid in async functions and the top level bodies of modules


  
