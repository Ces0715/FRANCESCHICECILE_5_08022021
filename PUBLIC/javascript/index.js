function afficherProduits(){
  console.log("test");
}

afficherProduits();

fetch("http://localhost:3000/api/teddies")
.then(response => response.json())
.then(response => alert(JSON.stringify(response)))
.catch(error => alert("Erreur : " + error));

function afficherProduits(){
  document.getElementsByClassName("row");
  document.getElementById('teddies').style.height = 'auto';
}


