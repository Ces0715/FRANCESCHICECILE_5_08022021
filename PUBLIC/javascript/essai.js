 // envoi des données au serveur
 const fetchData = fetch("http://localhost:3000/api/teddies/order", {
    method: "POST",
    body: JSON.stringify(send),
    headers: {
        "Content-Type": "application/json",
    },
});
console.log(fetchData);

//voir le resultat du serveur dans la console
fetchData.then(async (response) => {
     //si promesse non resolu il faut gerer l 'erreur
    try {
        const contenu = await response.json();
        
        
        if (response.ok) {

            // mettre id dans LS
            localStorage.setItem("responseId", products);
            //window.location = "confirmation.html";

        } else {
            alert(`probleme avec le serveur: erreur ${response.status}`)
       }

    } catch (e) {
        alert(`erreur du catch ${e}`);
    }
   
})
