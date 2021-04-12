//declaration variable pour mettre key et value dans le local storage
let produitLocal = JSON.parse(localStorage.getItem("produit"));
console.log(produitLocal);

// affichage produits panier-- selection classe ou injection code html
const produitPanier = document.querySelector("#panier");

// si panier vide..afficher "panier vide"(=== null)
if(produitLocal=== null){
    const panierVide = 
`<div class=" col-sm-6 col-lg-6 themed-grid-col">
    <h2> Le panier est vide</h2>
</div>`;

produitPanier.innerHTML = panierVide;

} else{
    // si panier pas vide : afficher produits dans local storage
    let structureProduitPanier =[];
    
    for (l= 0; l < produitLocal.length; l++) {
        //console.log(produitLocal.length);  
  structureProduitPanier = structureProduitPanier + 
        `<div class="row mb-3">     
            <div class=" col-sm-6 col-lg-6 themed-grid-col"> 
                <h2>Les produits sélectionnés</h2>
                <p>Nom</p>
                <p>Quantité ${produitLocal[l].name}</p>
            </div>
            <div class="col-sm-6 col-lg-6 themed-grid-col">  
                <p>Montant total</p>
                <p>Vider le panier</p>
            </div>   
        </div>
    
        `;
}

        if(l === produitLocal.lenght){
    // injection html dans la page panier
    produitPanier.innerHTML = structureProduitPanier;

    }
}
