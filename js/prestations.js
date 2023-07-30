/***************************************************************** MENU BURGER NAVBAR ******************************************************/

const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar")


menu.addEventListener('click', (e) => {
    navbar.classList.toggle("active")
})

// ANIMATIONS SCROLL SPY PAGE PRESTATIONS

const imgDevApp1 = document.querySelector(".devApp1");
const imgDevApp2 = document.querySelector(".devApp2");
const imgDesign1 = document.querySelector(".webDesign1");
const imgDesign2 = document.querySelector(".webDesign2");
const imgNft1 = document.querySelector(".NFT1");
const imgNft2 = document.querySelector(".NFT2");

const largeurEcran = window.innerWidth

window.addEventListener("scroll", () => {
    if (largeurEcran < 940){
        console.log(largeurEcran);
        return
    }else{

            if (window.scrollY > 400 && window.scrollY < 1600) {
                imgDevApp1.style.transform = "translate(0)";
                imgDevApp2.style.transform = "translate(0)";
            }else{
                imgDevApp1.style.transform = "translate(-55rem)";
                imgDevApp2.style.transform = "translate(55rem)";
            }
            if (window.scrollY > 1150 && window.scrollY < 2400) {
                imgDesign1.style.transform = "translate(0)";
                imgDesign2.style.transform = "translate(0)";
            }else{
                imgDesign1.style.transform = "translate(-55rem)";
                imgDesign2.style.transform = "translate(55rem)";
            }
            if (window.scrollY > 2250 && window.scrollY < 3500) {
                imgNft1.style.transform = "translate(0)";
                imgNft2.style.transform = "translate(0)";
            }else{
                imgNft1.style.transform = "translate(-55rem)";
                imgNft2.style.transform = "translate(55rem)";
            }
        }
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
        span4.innerText = data.textes[3].texte4
        span5.innerText = data.textes[4].texte5
        span6.innerText = data.textes[5].texte6
        span7.innerText = data.textes[6].texte7
    })
}
getJson()

const ajoutText4 = document.querySelector(".ajoutText4")
const ajoutText5 = document.querySelector(".ajoutText5")
const ajoutText6 = document.querySelector(".ajoutText6")
const ajoutText7 = document.querySelector(".ajoutText7")
const span4 = document.createElement("span")
const span5 = document.createElement("span")
const span6 = document.createElement("span")
const span7 = document.createElement("span")
ajoutText4.append(span4)
ajoutText5.append(span5)
ajoutText6.append(span6)
ajoutText7.append(span7)

const voirPlus4 = document.querySelector(".voirPlus4");
const voirPlus5 = document.querySelector(".voirPlus5");
const voirPlus6 = document.querySelector(".voirPlus6");
const voirPlus7 = document.querySelector(".voirPlus7");


voirPlus4.addEventListener("click",() =>{

    span4.classList.toggle("afficher")
    if(span4.classList.contains("afficher")){
        span4.style.display = "inline"
        voirPlus4.innerText = "...Voir moins"
        console.log(voirPlus4);
    }else{

        span4.style.display= "none"
        voirPlus4.innerText = "...Voir plus" 

    }
})
voirPlus5.addEventListener("click",() =>{

    span5.classList.toggle("afficher")
    if(span5.classList.contains("afficher")){
        span5.style.display = "inline"
        voirPlus5.innerText = "...Voir moins"
    }else{

        span5.style.display= "none"
        voirPlus5.innerText = "...Voir plus" 

    }
})
voirPlus6.addEventListener("click",() =>{

    span6.classList.toggle("afficher")
    if(span6.classList.contains("afficher")){
        span6.style.display = "inline"
        voirPlus6.innerText = "...Voir moins"
    }else{

        span6.style.display= "none"
        voirPlus6.innerText = "...Voir plus" 

    }
})
voirPlus7.addEventListener("click",() =>{

    span7.classList.toggle("afficher")
    if(span7.classList.contains("afficher")){
        span7.style.display = "inline"
        voirPlus7.innerText = "...Voir moins"
    }else{

        span7.style.display= "none"
        voirPlus7.innerText = "...Voir plus" 

    }
})

const tailleEcran = () => {
    const largeurEcran = window.innerWidth

    if(largeurEcran > 940){
        window.addEventListener("resize", () => {
            span4.style.display = "inline"
            span5.style.display = "inline"
            span6.style.display = "inline"
            span7.style.display = "inline"

        })

    }
    else{
        window.addEventListener("resize", () => {
            span4.style.display = "none"
            span5.style.display = "none"
            span6.style.display = "none"
            span7.style.display = "none"

        })
    }
}
tailleEcran()
window.addEventListener("resize", tailleEcran)

// EFFET DE FLOU SUR LA BANDEROLLE AVEC DÉFILEMENT INFINI POUR LES AVIS CLIENTS

 const listeAvis = document.querySelectorAll(".commentaire")

 listeAvis.forEach(avis => {
    avis.addEventListener(`mouseover`, () =>{
        listeAvis.forEach(otheravis => {
            if(otheravis !== avis) {
                otheravis.style.filter = `blur(5px)`;
            }
        });
    });
    
    avis.addEventListener(`mouseleave`, () =>{
        listeAvis.forEach(avis => {
            avis.style.filter = ``;
        });
    });
});
