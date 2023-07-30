/***************************************************************** MENU BURGER NAVBAR ******************************************************/

const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar")


menu.addEventListener('click', (e) => {
    navbar.classList.toggle("active")
})


// AJOUT/SUPPRESSION DE TEXTE IMPORTÉ DU FICHIER JSON VIA FETCH AVEC LE BOUTON VOIR PLUS/VOIR MOINS

const ajoutText = document.querySelector(".ajoutText")
const ajoutText2 = document.querySelector(".ajoutText2")
const ajoutText3 = document.querySelector(".ajoutText3")

const span1 = document.createElement("span")
const span2 = document.createElement("span")
const span3 = document.createElement("span")

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
        span1.innerText = data.textes[0].texte1
        span2.innerText = data.textes[1].texte2
        span3.innerText = data.textes[2].texte3
     
    })
}
getJson()

ajoutText.append(span1)
ajoutText2.append(span2)
ajoutText3.append(span3)

const voirPlus = document.querySelector(".voirPlus")
const voirPlus2 = document.querySelector(".voirPlus2")
const voirPlus3 = document.querySelector(".voirPlus3")


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

// Carrousel

let carousels = document.querySelectorAll('.carousel');

carousels.forEach(function(carousel) {
let figure = carousel.querySelector('figure'),
    nav = carousel.querySelector('.carouselBtn'),
    numImages = figure.childElementCount,
    theta = 2 * Math.PI / numImages,
    currImage = 0;

nav.addEventListener('click', onClick, true);

function onClick(e) {
    e.stopPropagation();

    let t = e.target;
    if (t.tagName.toUpperCase() != 'BUTTON')
    return;

    if (t.classList.contains('suivant')) {
        currImage++;
    } else {
        currImage--;
    }
    figure.style.transform = `rotateY(${currImage * -theta}rad)`;
}
});
