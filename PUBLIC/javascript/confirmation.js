//recuperation id de la commande du LS
const responseId = localStorage.getItem("responseId");

// recuperation du prix total
const prixT = localStorage.getItem("prixTotal");

//structure html de la page
// selection element du DOM
const prixTotalHtml = document.querySelector("#confirmation");
const structureConfirmation =
  `<div class="row mb-3">
      <div class=" col-12"> 
        <h2>Orinoco vous remercie pour votre commande</h2>
        <p>Nous avons le plaisir de vous informer que votre commande a bien été enregistrée. Vous trouverez ci-dessous le récapitulatif de votre commande. En espérant vous revoir très vite</p>
    </div>
    <div class=" col-12">
      <h2> Récapitulatif de votre commande </h2>
      <p> ${responseId} a bien été prise en compte</p>
    <p>Le montant de votre commande est de : ${prixT}€</p>
    <p class="gras">Au plaisir de vous revoir</p>
</div>
</div>`;

// injection html
prixTotalHtml.insertAdjacentHTML("afterbegin", structureConfirmation);