const sectionCards = document.getElementById('additionsCards');


export function getDlcList(response) {
    
    for (let i = 0; i < response.results.length; i++) {
        // Criação de cards
        const dlcCard = document.createElement("div");
        dlcCard.classList.add("dlcCard");
        sectionCards.append(dlcCard);
        
        // Imagens
        const dlcImg = document.createElement("img");
        dlcImg.classList.add("dlcImg");
        dlcImg.src = response.results[i].background_image;
        dlcCard.append(dlcImg);
        
        // Titulos
        const dlcTitle = document.createElement("h2");
        dlcCard.append(dlcTitle);
        dlcTitle.textContent = response.results[i].name;
        
        // Data de lançamento
        const dlcDate = document.createElement("p");
        dlcDate.classList.add("dlcDate");
        dlcDate.innerHTML = response.results[i].released;
        dlcCard.append(dlcDate);
        
        // Recomendação
        const dlcNote = document.createElement("p");
        dlcNote.classList.add("dlcNote");
        dlcNote.innerHTML = response.results[i].ratings[0].title.toUpperCase();
        dlcCard.append(dlcNote);
    }
}