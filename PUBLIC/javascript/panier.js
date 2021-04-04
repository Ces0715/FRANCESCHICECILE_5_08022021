//declaration variable pour mettre key et value dans le local storage
let produitLocal = JSON.parse(localStorage.getItem("produit"));
console.log(produitLocal);

// affichage produits panier-- selection classe ou injection code html
const produitPanier = document.querySelector("#panier");
console.log(produitPanier);

// si panier vide..afficher "panier vide"(=== null)
if(produitLocal=== null){
console.log("je suis vide");
} else{
    console.log("pas vide");
}