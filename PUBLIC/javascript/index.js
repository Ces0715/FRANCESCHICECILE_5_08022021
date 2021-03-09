
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

let teddiesData = ['Norbert', 'Arold', 'Lenny et Carl', 'Gustav', 'Garfunkel'];
console.log(teddiesData);
let teddies = document.querySelector('#teddies');
console.log(teddies);