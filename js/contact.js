/***************************************************************** MENU BURGER NAVBAR ******************************************************/

const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar")


menu.addEventListener('click', (e) => {
    navbar.classList.toggle("active")
})









// PAGE CONTACT - VOLETS ROULANTS
firstQuestion.addEventListener("click",() => {
    if(firstParagrapheVolet.style.display !== "block"){
        firstParagrapheVolet.style.display="block";
        firstCaret.style.transform="rotate(-0.5turn)";
    }else{
        firstParagrapheVolet.style.display="none"
        firstCaret.style.transform="rotate(0turn)";
    }
})

secondQuestion.addEventListener("click",() => {
    if(secondParagrapheVolet.style.display !== "block"){
        secondParagrapheVolet.style.display="block"
        secondCaret.style.transform="rotate(-0.5turn)";

    }else{
        secondParagrapheVolet.style.display="none"
        secondCaret.style.transform="rotate(0turn)";
    }
})

thirdQuestion.addEventListener("click",() => {
    if(thirdParagrapheVolet.style.display !== "block"){
        thirdParagrapheVolet.style.display="block"
        thirdCaret.style.transform="rotate(-0.5turn)";
    }else{
        thirdParagrapheVolet.style.display="none"
        thirdCaret.style.transform="rotate(0turn)";
    }
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