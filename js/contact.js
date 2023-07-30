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