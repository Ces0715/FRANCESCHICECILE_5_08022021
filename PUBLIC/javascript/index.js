
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
produits.then((response) =>{
  console.log(response);
  const teddiesData = response.json();
  console.log(teddiesData);
   
})


/*declaration des teddies*/
let teddiesData = ['Norbert', 'Arold', 'Lenny et Carl', 'Gustav', 'Garfunkel'];
console.log(teddiesData);
let teddies = document.querySelector('#teddies');
console.log(teddies);

/*creation boucle*/
for (let i = 0; i < teddiesData.length; i++) {
  //console.log(teddiesData[i])
  
  teddies.innerHTML += '<div class="row mb-3"><div class="col-sm-6 col-lg-6 themed-grid-col">       <div class=" col-sm-6 col-lg-6 themed-grid-col">' +teddiesData[i]+ '</div class>';

}


let teddy1 = {
  'name' : 'Norbert',
  'id' : '5be9c8541c9d440000665243',
  'description':'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'imageURL':'http://localhost:3000/images/teddy_1.jpg',
  'price':'2900',
  'colors':'"Tan", "Chocolate", "Black", "White"',
}
console.log(teddy1);


let teddy2 = {
  'name' : 'Arold',
  'id' : '5beaa8bf1c9d440000a57d94',
  'description':'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'imageURL':'http://localhost:3000/images/teddy_2.jpg',
  'price':'3900',
  'colors':'"Pale brown", "Dark brown", "White"',
}
console.log(teddy2);

let teddy3 = {
  'name' : 'Lenny and Carl',
  'id' : '5beaaa8f1c9d440000a57d95',
  'description':'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'imageURL':'http://localhost:3000/images/teddy_3.jpg',
  'price':'5900',
  'colors':'" Brown"',
}
console.log(teddy3);

let teddy4 = {
  'name' : 'Gustav',
  'id' : '5beaabe91c9d440000a57d96',
  'description':'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'imageURL':'http://localhost:3000/images/teddy_4.jpg',
  'price':'4500',
  'colors':'" Brown", "Blue", "Pink"',
}
console.log(teddy4);

let teddy5 = {
  'name' : 'Garfunkel',
  'id' : '5beaacd41c9d440000a57d97',
  'description':'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'imageURL':'http://localhost:3000/images/teddy_5.jpg',
  'price':'5500',
  'colors':'" Beige", "Tan", "Chocolate"',
}
console.log(teddy5);


let AllTeddies = ['teddy1', 'teddy2', 'teddy3', 'teddy4', 'teddy5'];
console.log(AllTeddies);
console.log(AllTeddies[0]);
console.log(AllTeddies[1]);
console.log(AllTeddies[2]);
console.log(AllTeddies[3]);
console.log(AllTeddies[4]);



for(let i = 0 ; i < AllTeddies.length  ; i++ ){
	console.log(AllTeddies[i]);
	let nom = AllTeddies[i].name;
	let couleur = AllTeddies[i].colors;
  let id = AllTeddies[i].id;
  let description = AllTeddies[i].description;
  let prix = AllTeddies[i].price;
	
}

