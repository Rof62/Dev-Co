/***************************************************************** MENU BURGER NAVBAR ******************************************************/

const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar")


menu.addEventListener('click', (e) => {
    navbar.classList.toggle("active")
})


/***************************************************************** MODAL CONNEXION ******************************************************/
const connexionNav = document.querySelectorAll(".connexion")
const flipCard = document.querySelector(".flip-card")
const inscriptionBtn = document.querySelector(".sinscrire")
const flipCardInner = document.querySelector(".flip-card-inner")
const connexionBtn = document.querySelector(".connexionBtn")
const flipCardBack = document.querySelector(".flip-card-back")
const flipCardFront = document.querySelector(".flip-card-front")


for(let button of connexionNav){
    button.addEventListener("click", () => {
        if (flipCard.style.visibility === "visible") {
        flipCard.style.visibility="hidden"
        } else {
          flipCard.style.visibility = "visible";
          flipCard.style.transform="translate(-50%,-50%) scale(1)"
        }
      });
}


    inscriptionBtn.addEventListener("click", () => {
        flipCardInner.style.transform="rotateY(180deg)"
    })
    connexionBtn.addEventListener("click",()=>{
        flipCardInner.style.transform="rotateY(0)"
    })

    window.addEventListener("click",(e)=>{
        if(flipCard.style.visibility === "visible" && e.target !== flipCardFront && e.target !== connexionNav){
            flipCard.style.visibility="hidden"
            flipCard.style.transform="translate(-50%,-50%) scale(0)"
            
        }
    })

    flipCard.addEventListener("click", (e) => {
        e.stopPropagation();
      });
