let lastScrollTop = 0; // pour mémoriser la position précédente
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if(scrollTop > lastScrollTop){
        // scroll vers le bas -> cacher navbar
        navbar.style.top = "-160px"; 
    } else {
        // scroll vers le haut -> montrer navbar
        navbar.style.top = "0px";
    }

    lastScrollTop = scrollTop;
});

// controle de commande de menu
function ouvrirFormulaire(plat) {
    document.getElementById("nomPlat").innerText = plat;
    document.getElementById("formulaireModal").style.display = "flex";
}

function fermerFormulaire() {
    document.getElementById("formulaireModal").style.display = "none";
}

// Optional : fermer en cliquant en dehors
window.onclick = function(event) {
    if (event.target == document.getElementById("formulaireModal")) {
        fermerFormulaire();
    }
}

// Envoi du formulaire
document.getElementById("commandeForm").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Commande enregistrée Merci! Vous allez recevoir un sms pour valider le paiemnt.");
    fermerFormulaire();
});


