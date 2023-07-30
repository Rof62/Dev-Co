/***************************************************************** MENU BURGER NAVBAR ******************************************************/

const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar")


menu.addEventListener('click', (e) => {
    navbar.classList.toggle("active")
})

/******************************************************************* PAGE PRESTATIONS **********************************************************/

// ANIMATIONS SCROLL SPY PAGE PRESTATIONS

const imgDevApp1 = document.querySelector(".devApp1");
const imgDevApp2 = document.querySelector(".devApp2");
const imgDesign1 = document.querySelector(".webDesign1");
const imgDesign2 = document.querySelector(".webDesign2");
const imgNft1 = document.querySelector(".NFT1");
const imgNft2 = document.querySelector(".NFT2");

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

const largeurEcran = window.innerWidth

window.addEventListener("scroll", () => {
    if (largeurEcran < 940){
        return;
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
        span1.innerText = data.textes[0].texte1
        span2.innerText = data.textes[1].texte2
        span3.innerText = data.textes[2].texte3
        span4.innerText = data.textes[3].texte4
        span5.innerText = data.textes[4].texte5
        span6.innerText = data.textes[5].texte6
        span7.innerText = data.textes[6].texte7
    })
}
getJson()

const ajoutText = document.querySelector(".ajoutText")
const ajoutText2 = document.querySelector(".ajoutText2")
const ajoutText3 = document.querySelector(".ajoutText3")
const ajoutText4 = document.querySelector(".ajoutText4")
const ajoutText5 = document.querySelector(".ajoutText5")
const ajoutText6 = document.querySelector(".ajoutText6")
const ajoutText7 = document.querySelector(".ajoutText7")
const span1 = document.createElement("span")
const span2 = document.createElement("span")
const span3 = document.createElement("span")
const span4 = document.createElement("span")
const span5 = document.createElement("span")
const span6 = document.createElement("span")
const span7 = document.createElement("span")
ajoutText.append(span1)
ajoutText2.append(span2)
ajoutText3.append(span3)
ajoutText4.append(span4)
ajoutText5.append(span5)
ajoutText6.append(span6)
ajoutText7.append(span7)


const voirPlus = document.querySelector(".voirPlus")
const voirPlus2 = document.querySelector(".voirPlus2")
const voirPlus3 = document.querySelector(".voirPlus3")
const voirPlus4 = document.querySelector(".voirPlus4");
const voirPlus5 = document.querySelector(".voirPlus5");
const voirPlus6 = document.querySelector(".voirPlus6");
const voirPlus7 = document.querySelector(".voirPlus7");

voirPlus.addEventListener("click",() =>{
    
    span1.classList.toggle("afficher")
    if(span1.classList.contains("afficher")){
        span1.style.display = `inline`
        voirPlus.innerText = "...Voir moins"
    }else{
        
        span1.style.display= "none"
        voirPlus.innerText = "...Voir plus" 
        
    }
})
voirPlus2.addEventListener("click",() =>{
    
    span2.classList.toggle("afficher")
    if(span2.classList.contains("afficher")){
        span2.style.display = `inline`
        voirPlus2.innerText = "...Voir moins"
    }else{
        
        span2.style.display= "none"
        voirPlus2.innerText = "...Voir plus" 
        
    }
})
voirPlus3.addEventListener("click",() =>{
    
    span3.classList.toggle("afficher")
    if(span3.classList.contains("afficher")){
        span3.style.display = `inline`
        voirPlus3.innerText = "...Voir moins"
    }else{
        
        span3.style.display= "none"
        voirPlus3.innerText = "...Voir plus" 
        
    }
})

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





/******************************************************************* PAGE PORTFOLIO **********************************************************/



// const button1 = document.querySelector(".button1")
// const container = document.querySelector(".container")

// let textes;
// let texteAffiche = false


//      fetch("textes.json")
//     .then((response) => response.json())
//     .then((data) => {
//         textes = data;
//     })
//     .catch((error) => {
//         console.error("Une erreur s'est produite lors du chargement du fichier JSON : ", error);
//       });

// const afficherTexte = (cle) =>{
//     container.textContent = textes[cle]
//     container.classList.add("visible")
//     texteAffiche = true
// }

// const masquerTexte = () =>{
//     container.textContent = ""
//     container.classList.remove("visible")
//     texteAffiche = false
// }

// button1.addEventListener("click", () =>{
    
//     if(texteAffiche){
//         masquerTexte()
//     }else{
//         afficherTexte("texte1")   
//     }
// })

//----------------- Animation translate de nos technologie et modification du texte au "Click"

const iconify1 = document.querySelector(".iconify1")
const iconify2 = document.querySelector(".iconify2")
const iconify3 = document.querySelector(".iconify3")

const divTechnologies1 = document.querySelector(".technologie1")
const divTechnologies2 = document.querySelector(".technologie2")
const divTechnologies3 = document.querySelector(".technologie3")

divTechnologies1.addEventListener("click", () =>{
    
    iconify1.style.transition = `.8s all ease-in-out`
    iconify1.classList.toggle ("moved")
    // Définir le texte en fonction de l'état de la classe "moved"
    if (iconify1.classList.contains("moved")) {
        divTechnologies1.innerText = "Ne plus voir les technologie";
        
      } 
      else {
        divTechnologies1.innerText = "Voir technologie utiliser :";
        
      }
})

divTechnologies2.addEventListener("click", () =>{  
    iconify2.style.transition = `.8s ease-in-out`
    iconify2.classList.toggle ("moved") 
    if (iconify2.classList.contains("moved")) {
      divTechnologies2.innerText = "Ne plus voir les technologie";
      
    } 
    else {
      divTechnologies2.innerText = "Voir technologie utiliser :";
      
    }
})

divTechnologies3.addEventListener("click", () =>{
    iconify3.style.transition = `.8s all ease-in-out`
    iconify3.classList.toggle ("moved")
    if (iconify3.classList.contains("moved")) {
        divTechnologies3.innerText = "Ne plus voir les technologie";
        
      } 
      else {
        divTechnologies3.innerText = "Voir technologie utiliser :";
        
      }
})

// ECOUTEURS D'EVENEMENTS AU CLICK SUR LES BOUTONS VOIR PLUS/VOIR MOINS 



voirPlus.addEventListener("click",() =>{
    
    span1.classList.toggle("afficher")
    if(span1.classList.contains("afficher")){
        span1.style.display = `inline`
        voirPlus.innerText = "...Voir moins"
    }else{
        
        span1.style.display= "none"
        voirPlus.innerText = "...Voir plus" 
        
    }
})
voirPlus2.addEventListener("click",() =>{
    
    span2.classList.toggle("afficher")
    if(span2.classList.contains("afficher")){
        span2.style.display = `inline`
        voirPlus2.innerText = "...Voir moins"
    }else{
        
        span2.style.display= "none"
        voirPlus2.innerText = "...Voir plus" 
        
    }
})
voirPlus3.addEventListener("click",() =>{
    
    span3.classList.toggle("afficher")
    if(span3.classList.contains("afficher")){
        span3.style.display = `inline`
        voirPlus3.innerText = "...Voir moins"
    }else{
        
        span3.style.display= "none"
        voirPlus3.innerText = "...Voir plus" 
        
    }
})

/************************************************************* PAGE CONTACT ************************************************************/
