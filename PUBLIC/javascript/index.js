
/*Antoine info*/
function listeProduits(){
  console.log("test");
}
listeProduits();
fetch("http://localhost:3000/api/teddies")
.then(response => response.json())
.then(response => alert(JSON.stringify(response)))
.catch(error => alert("Erreur : " + error));


/*affichage couleurs*/
const affichageCouleurs =document.querySelector("#colors");
console.log(affichageCouleurs);
const affichagePrix =document.querySelector("#price");
console.log(affichagePrix);



/*recuperation données*/
const produits = fetch("http://localhost:3000/api/teddies");
produits.then((response) =>{
  console.log(response);
  const teddiesData = response.json();
  console.log(teddiesData);

  teddiesData.then((utilisateur) => {
    console.log(utilisateur[0]);
    const txtName = utilisateur[0].name;
    console.log(txtName);
    const txtDescription = utilisateur[0].description;
    console.log(txtDescription);
    const txtPrice = utilisateur[0].price;
    console.log(txtPrice);
    const txtImage = utilisateur[0].imageUrl;
    console.log(txtImage);
    const txtColors = utilisateur[0].colors;
    console.log(txtColors);
    const txtId = utilisateur[0]._id;
    console.log(txtId);

    console.log(utilisateur[1]);
    const txtName1 = utilisateur[1].name;
    console.log(txtName1);
    const txtDescription1 = utilisateur[1].description;
    console.log(txtDescription1);
    const txtPrice1 = utilisateur[1].price;
    console.log(txtPrice1);
    const txtImage1 = utilisateur[1].imageUrl;
    console.log(txtImage1);
    const txtColors1 = utilisateur[1].colors;
    console.log(txtColors1);
    const txtId1 = utilisateur[1]._id;
    console.log(txtId1);

    console.log(utilisateur[2]);
    const txtName2 = utilisateur[2].name;
    console.log(txtName2);
    const txtDescription2 = utilisateur[2].description;
    console.log(txtDescription2);
    const txtPrice2 = utilisateur[2].price;
    console.log(txtPrice2);
    const txtImage2 = utilisateur[2].imageUrl;
    console.log(txtImage2);
    const txtColors2 = utilisateur[2].colors;
    console.log(txtColors2);
    const txtId2 = utilisateur[2]._id;
    console.log(txtId2);

    console.log(utilisateur[3]);
    const txtName3 = utilisateur[3].name;
    console.log(txtName3);
    const txtDescription3 = utilisateur[3].description;
    console.log(txtDescription3);
    const txtPrice3 = utilisateur[3].price;
    console.log(txtPrice3);
    const txtImage3 = utilisateur[3].imageUrl;
    console.log(txtImage3);
    const txtColors3 = utilisateur[3].colors;
    console.log(txtColors3);
    const txtId3 = utilisateur[3]._id;
    console.log(txtId3);


    console.log(utilisateur[4]);
    const txtName4 = utilisateur[4].name;
    console.log(txtName4);
    const txtDescription4 = utilisateur[4].description;
    console.log(txtDescription4);
    const txtPrice4 = utilisateur[4].price;
    console.log(txtPrice4);
    const txtImage4 = utilisateur[4].imageUrl;
    console.log(txtImage4);
    const txtColors4 = utilisateur[4].colors;
    console.log(txtColors4);
    const txtId4 = utilisateur[4]._id;
    console.log(txtId4);


    /* affichege donnéees*/
    affichageCouleurs.innerHTML = txtColors1;
    affichagePrix.innerHTML =txtPrice1;
  });
  })

 









/*essai*/
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