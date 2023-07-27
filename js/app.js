// const menu = document.querySelector(".menu");
// const navbar = document.querySelector(".navbar")


// menu.addEventListener('click', (e) => {
//     navbar.classList.toggle("active")
// })


// // Carrousel

// let carousels = document.querySelectorAll('.carousel');

// carousels.forEach(function(carousel) {
// let figure = carousel.querySelector('figure'),
//     nav = carousel.querySelector('.carouselBtn'),
//     numImages = figure.childElementCount,
//     theta = 2 * Math.PI / numImages,
//     currImage = 0;

// nav.addEventListener('click', onClick, true);

// function onClick(e) {
//     e.stopPropagation();

//     let t = e.target;
//     if (t.tagName.toUpperCase() != 'BUTTON')
//     return;

//     if (t.classList.contains('suivant')) {
//         currImage++;
//     } else {
//         currImage--;
//     }
//     figure.style.transform = `rotateY(${currImage * -theta}rad)`;
// }
// });

// // Scroll Prestations

// const imgDevApp1 = document.querySelector(".devApp1");
// const imgDevApp2 = document.querySelector(".devApp2");

// window.addEventListener("scroll", () => {
//     if (window.scrollY > 320) {
//         imgDevApp1.style.transform = "translate(0)";
//         imgDevApp2.style.transform = "translate(0)";
//     }else{
//         imgDevApp1.style.transform = "translate(-55rem)";
//         imgDevApp2.style.transform = "translate(55rem)";
//     }
// })

// //----------------- Animation translate de nos technologie et modification du texte au "Click"

// const iconify1 = document.querySelector(".iconify1")
// const iconify2 = document.querySelector(".iconify2")
// const iconify3 = document.querySelector(".iconify3")

// const divTechnologies1 = document.querySelector(".technologie1")
// const divTechnologies2 = document.querySelector(".technologie2")
// const divTechnologies3 = document.querySelector(".technologie3")

// divTechnologies1.addEventListener("click", () =>{
    
//     iconify1.style.transition = `.5s all`
//     iconify1.classList.toggle ("moved")
//     // Définir le texte en fonction de l'état de la classe "moved"
//     if (iconify1.classList.contains("moved")) {
//         divTechnologies1.innerText = "Ne plus voir les technologie";
        
//       } 
//       else {
//         divTechnologies1.innerText = "Voir technologie utiliser :";
        
//       }
// })

// divTechnologies2.addEventListener("click", () =>{  
//     iconify2.style.transition = `.5s all`
//     iconify2.classList.toggle ("moved") 
//     if (iconify2.classList.contains("moved")) {
//       divTechnologies2.innerText = "Ne plus voir les technologie";
      
//     } 
//     else {
//       divTechnologies2.innerText = "Voir technologie utiliser :";
      
//     }
// })

// divTechnologies3.addEventListener("click", () =>{
//     iconify3.style.transition = `.5s all`
//     iconify3.classList.toggle ("moved")
//     if (iconify3.classList.contains("moved")) {
//         divTechnologies3.innerText = "Ne plus voir les technologie";
        
//       } 
//       else {
//         divTechnologies3.innerText = "Voir technologie utiliser :";
        
//       }
// })

// // -------------animation qui fait apparître le reste tu texte de la section qui est dans fichier
// // JSON ,en utilisant un button avec un addEvenListener "Click"


// // const button1 = document.querySelector(".button1")
// // const container = document.querySelector(".container")

// // let textes;
// // let texteAffiche = false


// //      fetch("textes.json")
// //     .then((response) => response.json())
// //     .then((data) => {
// //         textes = data;
// //     })
// //     .catch((error) => {
// //         console.error("Une erreur s'est produite lors du chargement du fichier JSON : ", error);
// //       });

// // const afficherTexte = (cle) =>{
// //     container.textContent = textes[cle]
// //     container.classList.add("visible")
// //     texteAffiche = true
// // }

// // const masquerTexte = () =>{
// //     container.textContent = ""
// //     container.classList.remove("visible")
// //     texteAffiche = false
// // }

// // button1.addEventListener("click", () =>{
    
// //     if(texteAffiche){
// //         masquerTexte()
// //     }else{
// //         afficherTexte("texte1")   
// //     }
// // })
