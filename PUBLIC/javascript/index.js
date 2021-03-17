
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
const produits = fetch("http://localhost:3000/api/teddies");
produits.then (async (responseData) =>{
  console.log(responseData);

const articles =await responseData.json();
for(let i = 0; i < articles.length; i++){
  const article = articles[i];
  displayArticle(article)
  console.log(article); 
  console.log(articles);  
//données ok
}


function displayArticle(article){
document.getElementById("teddies").innerHTML +=`<div class="row mb-3"><div class="col-sm-6 col-lg-6 themed-grid-col">      
<div class=" col-sm-6 col-lg-6 themed-grid-col"> <h2 id="name">${article.name } <p id="description">
- ${article.description }</div class>`;
}
})
