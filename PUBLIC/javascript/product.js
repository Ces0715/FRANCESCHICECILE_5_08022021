//recuperation chaine de requete dans url
const queryString_url_id = window.location.search;
console.log(queryString_url_id);


// methode1 pour extraire l 'id
const leId = queryString_url_id.slice(1);
console.log(leId);


// methode2 pour extraire l 'id
//const urlSearchParams = new URLSearchParams(queryString_url_id);
//console.log(urlSearchParams);

//const leId = urlSearchParams.get("id");
//console.log(leId);

//affichage du produit selectionné par son id
//methode 1 avec fetch
//let response = await fetch (`http://localhost:3000/api/teddies/${id}`);
//Uncaught SyntaxError: await is only valid in async functions and the top level bodies of modules


//methode 2 avec .find()
console.log(articles);
console.log(article);