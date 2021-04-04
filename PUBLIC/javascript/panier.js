//declaration variable pour mettre key et value dans le local storage
let produitLocal = JSON.parse(localStorage.getItem("produit"));
console.log(produitLocal);

// affichage produits panier-- selection classe ou injection code html
const produitPanier = document.querySelector("#panier");
console.log(produitPanier);

// si panier vide..afficher "panier vide"(=== null)
if(produitLocal=== null){
const panierVide = `
<div class ="panier vide">
    <div> Le panier est vide </div>
</div>
`;
produitPanier.innerHTML = panierVide;

} else{
    // si panier pas vide : afficher produits dans local storage
    let structureProduitPanier =[];
    for (l= 0; l < produitLocal.lenght; l++){
    
        structureProduitPanier = structureProduitPanier +`
        
        `

    }
    
}