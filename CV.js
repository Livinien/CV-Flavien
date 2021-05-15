

// ANIMATION DU MENU HAMBURGER //

const btnMenu = document.querySelector('.btn1')
const lignes = document.querySelector('.navigation');
const wrapper = document.querySelector('.wrapper');
const content = document.querySelector('.content');
const nav = document.querySelectorAll('.nav')


    btnMenu.addEventListener('click', () => {
        console.log("hello");

        btnMenu.classList.toggle('active');
        lignes.classList.toggle('active-menu');
      
        

    })


    // nav.forEach(nav => {

    //     nav.addEventListener('click', () => {

    //         btnMenu.classList.toggle('active')
    //         lignes.classList.toggle('active-menu');
    //     })

    // })

    


// ANIMATION ECRITURE //


const txtAnim = document.querySelector('.txt-animation');

let typewriter = new Typewriter(txtAnim, {

    loop: false,
    deleteSpeed: 20

})

typewriter
.pauseFor(3000)
.changeDelay(20)

.typeString('<strong>I am Junior Web Developer</strong> !')
.pauseFor(1000)
.deleteChars(2)

.typeString('<span style = "color: #da451d;"> HTML</span> /<span style = "color: #05aff4;"> CSS</span> !')
.pauseFor(1000)
.deleteChars(12)

.typeString('<span style = "color: #EA39ff;"> SEO</span> !')
.pauseFor(1000)
.deleteChars(6)

.typeString('<span style = "color: #dec528;"> JavaScript</span> !')
.pauseFor(1000)
.deleteChars(12)

.typeString('<span style = "color: #00a6ff;"> MySQL</span> !')
.pauseFor(1000)
.deleteChars(7)

.start()





// ANIMATION GREENSOCK ET SCROLLMAGIC //





const titre1 = document.querySelector('h1')
const titre2 = document.querySelector('h2')
const titrePortfolio = document.querySelector('.portfolio')
const navigation = document.querySelectorAll('.nav')
const social = document.querySelectorAll('.icon')


const TL1 = gsap.timeline({paused: true});



TL1



.from(titre2, 5, {y: -50, opacity: 0, ease: Power3.easeOut,  duration: 7})

.staggerFrom(titre1, 5, {opacity: 0}, 0.90, '0.75')

.staggerFrom(titrePortfolio, 5, {opacity: 0}, 0.90, '0.75')

.staggerFrom(navigation, 4, {opacity: 0}, 1, '0.80')

.staggerFrom(social, 1, {opacity: 0}, 0.90, '0.75')


window.addEventListener('load', () => {

    TL1.play();

})





