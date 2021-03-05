function listeProduits(){
  console.log("test");
}

listeProduits();

fetch("http://localhost:3000/api/teddies")
.then(response => response.json())
.then(response => alert(JSON.stringify(response)))
.catch(error => alert("Erreur : " + error));

const promise1 = fetch("http://localhost:3000/api/teddies");
promise1
.then((response) =>{
  console.log(response);
  const teddiesData = response.json();
  console.log(teddiesData);

  teddiesData.then((utilisateur) => {
  console.log(utilisateur)
  });
})




function async (listeProduits) {
  const articles = await (getArticles)  
  displayArticles(articles)
  console.log (articles)
}


function getArticles(){
return fetch("http://localhost:3000/api/teddies")
.then(function(httpBodyResponse){  
  return httpBodyResponse.json()
})
.then(function(articles){
console.log(articles)

})
}
function displayArticles(){
  document.getElementsById("listeProduits")
}

let teddies = document.getElementById("teddies");
alert(teddies.innerHTML);
console.log(teddies);