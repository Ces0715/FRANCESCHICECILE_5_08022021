/*Norbert*/
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

 /*Arold*/
    console.log(utilisateur[1]);
    const txtName1 = utilisateur[1].name;
    console.log(txtName1);
    const txtDescription1 = utilisateur[1].description1;
    console.log(txtDescription1);
    const txtPrice1 = utilisateur[1].price;
    console.log(txtPrice1);
    const txtImage1 = utilisateur[1].imageUrl;
    console.log(txtImage1);
    const txtColors1 = utilisateur[1].colors;
    console.log(txtColors1);
    const txtId1 = utilisateur[1]._id;
    console.log(txtId1);

    /*Lenny carl*/
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

    /*Gustav*/
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


    /*Garfunkel*/
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


/*affichage */
const affichageColors =document.querySelector("#colors");
console.log(affichageColors);
const affichagePrice =document.querySelector("#price");
console.log(affichagePrice);
const affichageDescription =document.querySelector("#description");
console.log(affichageDescription);
const affichageName =document.querySelector("#name");
console.log(affichageName);
const affichageImage =document.querySelector("#image");
console.log(affichageImage);
const affichageId =document.querySelector("#id");
console.log(affichageId);


    /* affichege donnéees*/
    
    affichagePrice.innerHTML =txtPrice;
    affichagePrice.innerHTML =txtPrice1;
    affichagePrice.innerHTML =txtPrice2;
    affichagePrice.innerHTML =txtPrice3;
    affichagePrice.innerHTML =txtPrice4;

    affichageId.innerHTML =txtId;
    affichageId.innerHTML =txtId1;
    affichageId.innerHTML =txtId2;
    affichageId.innerHTML =txtId3;
    affichageId.innerHTML =txtId4;

    affichageDescription.innerHTML = txtDescription;
    affichageDescription.innerHTML = txtDescription1;
    affichageDescription.innerHTML = txtDescription2;
    affichageDescription.innerHTML = txtDescription3;
    affichageDescription.innerHTML = txtDescription4;
   
   
    affichageName.innerHTML =txtName;
    affichageName.innerHTML =txtName1;
    affichageName.innerHTML =txtName2;
    affichageName.innerHTML =txtName3;
    affichageName.innerHTML =txtName4;


    


    
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
  
  }
  
  })
  
  })