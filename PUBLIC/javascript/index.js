
/*recuperation données*/
const produits = fetch("http://localhost:3000/api/teddies");
produits.then(async (responseData) => {
 
  const articles = await responseData.json();
  //boucle teddies
  for (let i = 0; i < articles.length; i++) {
    //const article = articles[i];
    displayArticle(articles[i])
    //données ok
    console.log(articles);
  }

  //affichage teddies
  
})

function displayArticle(article) {
  document.getElementById("teddies").innerHTML += 
`<div class="row mb-3">     
  <div class=" col-sm-6 col-lg-6 themed-grid-col"> 
    <h2 id="name">${article.name}</h2> 
    <p id="id">${article._id}</p>
    <p id="description"> ${article.description}</p> 
  </div>
  <div class="col-sm-6 col-lg-6 themed-grid-col"> 
    <a href="./produit.html?id=${article._id}">
    <img width="300"  src = "${article.imageUrl}">
  </div> `;
}














