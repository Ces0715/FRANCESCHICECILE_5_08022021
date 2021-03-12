
/*Antoine info*/
function listeProduits(){
  console.log("test");
}
listeProduits();
fetch("http://localhost:3000/api/teddies")
.then(response => response.json())
.then(response => alert(JSON.stringify(response)))
.catch(error => alert("Erreur : " + error));



/*recuperation données*/
const produits = fetch("http://localhost:3000/api/teddies");

produits.then (async (responseData) =>{
  console.log(responseData);
const response =await responseData.json();
console.log(response[0]);  

try{
  /*recup data API*/
  const name = response[0].name;
  const _id = response[0].id;
  const imageUrl = response[0].imageUrl;
  const description = response[0].description;
  console.log(name);
  console.log(_id);
  console.log(imageUrl);
  console.log(description);
}
catch(err){
  console.log(err);
}
})


/*declaration des teddies*/
let teddiesData = ['Norbert', 'Arold', 'Lenny et Carl', 'Gustav', 'Garfunkel'];
console.log(teddiesData);

/* lien avec html*/
let teddies = document.querySelector('#teddies');
console.log(teddies);

/*creation boucle*/
for (let i = 0; i < teddiesData.length; i++) {
  console.log(`Teddy ${teddiesData[i]}`);
  
  //console.log(teddiesData[i])
  
  
 // teddies.innerHTML += '<div class="row mb-3"><div class="col-sm-6 col-lg-6 themed-grid-col">       <div class=" col-sm-6 col-lg-6 themed-grid-col">' +teddiesData[i]+ '</div class>';

}


let teddy1 = {
  'name' : 'Norbert',
  'id' : '5be9c8541c9d440000665243',
  'description':'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'imageURL':'http://localhost:3000/images/teddy_1.jpg',
  'price':'2900',
  'colors':'"Tan", "Chocolate", "Black", "White"',
};




let teddy2 = {
  'name' : 'Arold',
  'id' : '5beaa8bf1c9d440000a57d94',
  'description':'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'imageURL':'http://localhost:3000/images/teddy_2.jpg',
  'price':'3900',
  'colors':'"Pale brown", "Dark brown", "White"',
}


let teddy3 = {
  'name' : 'Lenny and Carl',
  'id' : '5beaaa8f1c9d440000a57d95',
  'description':'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'imageURL':'http://localhost:3000/images/teddy_3.jpg',
  'price':'5900',
  'colors':'" Brown"',
}


let teddy4 = {
  'name' : 'Gustav',
  'id' : '5beaabe91c9d440000a57d96',
  'description':'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'imageURL':'http://localhost:3000/images/teddy_4.jpg',
  'price':'4500',
  'colors':'" Brown", "Blue", "Pink"',
}


let teddy5 = {
  'name' : 'Garfunkel',
  'id' : '5beaacd41c9d440000a57d97',
  'description':'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'imageURL':'http://localhost:3000/images/teddy_5.jpg',
  'price':'5500',
  'colors':'" Beige", "Tan", "Chocolate"',
}



let tabTeddies = [teddy1, teddy2, teddy3, teddy4, teddy5];



for (let i = 0; i < tabTeddies.length; i++) {
  console.log(tabTeddies[i]);
  let nom = tabTeddies[i].name;
  console.log(nom);
  let description = tabTeddies[i].description;
  console.log(description);
  teddies.innerHTML +=`<div class="row mb-3"><div class="col-sm-6 col-lg-6 themed-grid-col">      
   <div class=" col-sm-6 col-lg-6 themed-grid-col"> <h2 id="name">${tabTeddies[i].name } <p id="description">
   - ${tabTeddies[i].description }</div class>`;
  }
