const cards = Array.from(document.querySelectorAll(".card-case"));

cards.forEach(card => {
    card.addEventListener("click", (e) => {
        e.target.classList.toggle('_isActive');
    })
})




