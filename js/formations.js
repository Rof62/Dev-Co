/***************************************************************** MENU BURGER NAVBAR ******************************************************/

const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar")


menu.addEventListener('click', (e) => {
    navbar.classList.toggle("active")
})


/***************************************************************** MODAL CONNEXION ******************************************************/
const connexionNav = document.querySelector(".connexion")
const flipCard = document.querySelector(".flip-card")
const inscriptionBtn = document.querySelector(".sinscrire")
const flipCardInner = document.querySelector(".flip-card-inner")
const connexionBtn = document.querySelector(".connexionBtn")
const flipCardBack = document.querySelector(".flip-card-back")
const flipCardFront = document.querySelector(".flip-card-front")
const connexionResponsive = document.querySelector("#connexionResponsive")


connexionNav.addEventListener("click", () => {
    if (flipCard.style.visibility === "visible") {
    flipCard.style.visibility="hidden"
    flipCard.style.transform="translate(-50%,-50%) scale(0)"

    } else {
      flipCard.style.visibility = "visible";
      flipCard.style.transform="translate(-50%,-50%) scale(1)"
    }
  });

  connexionResponsive.addEventListener("click", () => {
    if (flipCard.style.visibility === "visible") {
    flipCard.style.visibility="hidden"
    flipCard.style.transform="translate(-50%,-50%) scale(1)"
    } else {
      flipCard.style.visibility = "visible";
      flipCard.style.transform="translate(-50%,-50%) scale(1)"
    }
  });

    inscriptionBtn.addEventListener("click", () => {
        flipCardInner.style.transform="rotateY(180deg)"
    })
    connexionBtn.addEventListener("click",()=>{
        flipCardInner.style.transform="rotateY(0)"
    })

    


    flipCard.addEventListener("click", (e) => {
        e.stopPropagation();
      });


        window.addEventListener("click",(e)=>{
        if(flipCard.style.visibility === "visible" && e.target !== flipCardFront && e.target !==connexionNav && e.target !== connexionResponsive ){
            flipCard.style.visibility="hidden"
            flipCard.style.transform="translate(-50%,-50%) scale(0)"    
       }})

       //  MODAL PANIER ACHAT
const panierBtn = document.querySelector(".panier")
const modalPanier = document.querySelector(".panierAchat")
const closePanierBtn = document.querySelector(".closePanier")
panierBtn.addEventListener("click", () =>{
  modalPanier.style.visibility="visible"
})

closePanierBtn.addEventListener("click",() => {
  modalPanier.style.visibility="hidden"
})

// Cartes flip
const arrow = document.querySelector(".arrow");
const arrowBack = document.querySelector(".arrowBack");
const arrow2 = document.querySelector(".arrow2");
const arrowBack2 = document.querySelector(".arrowBack2");
const arrow3 = document.querySelector(".arrow3");
const arrowBack3 = document.querySelector(".arrowBack3");
const arrow4 = document.querySelector(".arrow4");
const arrowBack4 = document.querySelector(".arrowBack4");

arrow.addEventListener("click", () => {
    cardHtml.classList.toggle("is-flipped");
})

arrowBack.addEventListener("click",()=>{
    cardHtml.classList.toggle("is-flipped")
})


arrow2.addEventListener("click", () => {
    cardJava.classList.toggle("is-flipped");
})

arrowBack2.addEventListener("click",()=>{
    cardJava.classList.toggle("is-flipped")
})


arrow3.addEventListener("click", () => {
    cardFront.classList.toggle("is-flipped");
})

arrowBack3.addEventListener("click",()=>{
    cardFront.classList.toggle("is-flipped")
})


arrow4.addEventListener("click", () => {
    cardFull.classList.toggle("is-flipped");
})

arrowBack4.addEventListener("click",()=>{
    cardFull.classList.toggle("is-flipped")
})

    // AJOUT/SUPPRESSION DE TEXTE IMPORTÉ DU FICHIER JSON VIA FETCH AVEC LE BOUTON VOIR PLUS/VOIR MOINS

    const url = "../json/data.json"
    const getJson = async () => {
        await fetch(url, {
            method : "GET",
            headers :{
                "Accept":"applications/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            span8.innerText = data.textes[7].texte8
        })
    }
    getJson()

    const ajoutText8 = document.querySelector(".ajoutText8")

    const span8 = document.createElement("span")
    span8.style.display="none"

    ajoutText8.append(span8)

    const voirPlus8 = document.querySelector(".voirPlus8");


    voirPlus8.addEventListener("click",() =>{
    
        span8.classList.toggle("afficher")
        if(span8.classList.contains("afficher")){
            span8.style.display = "inline"
            voirPlus8.innerText = "...Voir moins"
        }else{
            span8.style.display= "none"
            voirPlus8.innerText = "...Voir plus" 
    
        }
    })
    
    const tailleEcran = () => {
        const largeurEcran = window.innerWidth
    
        if(largeurEcran > 940){
            window.addEventListener("resize", () => {
                span8.style.display = "inline"
    
            })
    
        }
        else{
            window.addEventListener("resize", () => {
                span8.style.display = "none"
    
            })
        }
    }
    tailleEcran()
    window.addEventListener("resize", tailleEcran)