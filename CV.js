

// ANIMATION DU MENU HAMBURGER //

const btnMenu = document.querySelector('.btn1')
const lignes = document.querySelector('.navigation');
const wrapper = document.querySelector('.wrapper');
const content = document.querySelector('.content');
const nav = document.querySelectorAll('.nav')
const allItemNav = document.querySelectorAll('.nav-menu-item')


    btnMenu.addEventListener('click', () => {
        

        btnMenu.classList.toggle('active')
        wrapper.classList.toggle('active-menu')
        content.classList.toggle('active-menu')
        lignes.classList.toggle('active-menu')
        
        

    })


if(window.matchMedia('(max-width: 980px)')) {

    allItemNav.forEach(item => {

        item.addEventListener('click', () => {
            
            btnMenu.classList.toggle('active')
            wrapper.classList.toggle('active-menu');
            content.classList.toggle('active-menu')
            lignes.classList.toggle('active-menu')
            
        })

    })


}

 

    


// ANIMATION ECRITURE //


const txtAnim = document.querySelector('.txt-animation');

let typewriter = new Typewriter(txtAnim, {

    loop: false,
    deleteSpeed: 20

})

    typewriter
    .pauseFor(3000)
    .changeDelay(20)

    .typeString('<strong>I am Junior Web Developer</strong> ')
    .pauseFor(1000)
    .deleteChars(1)

    .typeString('<span style = "color: #da451d;"> HTML</span> /<span style = "color: #05aff4;"> CSS</span> ')
    .pauseFor(1000)
    .deleteChars(12)

    .typeString('<span style = "color: #EA39ff;"> SEO</span> ')
    .pauseFor(1000)
    .deleteChars(6)

    .typeString('<span style = "color: #c6a822;"> JavaScript</span> ')
    .pauseFor(1000)
    .deleteChars(12)

    .typeString('<span style = "color: #00a6ff;"> MySQL</span> ')
    .pauseFor(1000)
    .deleteChars(8)

    .start()




// ANIMATION CONTACT //


const input_fields = document.querySelectorAll('input');

for(let i = 0; i < input_fields.length; i++) {

    let field = input_fields[i];

    

    field.addEventListener('input', (e) => {

        if(e.target.value !== '') {

            e.target.parentNode.classList.add('animation')

        } else if (e.target.value == '') {

            e.target.parentNode.classList.remove('animation')

        }

    })

}






// ANIMATION GREENSOCK ET SCROLLMAGIC //




    const titre1 = document.querySelector('h1')
    const titre2 = document.querySelector('h2')
    const titrePortfolio = document.querySelector('.social')
    const navigation = document.querySelectorAll('.nav')
    const social = document.querySelectorAll('.logo')


    const TL1 = gsap.timeline({paused: true});



    TL1


    .from(titre2, 5, {y: -50, opacity: 0, ease: Power3.easeOut, duration: 7})

    .staggerFrom(titre1, 5, {opacity: 0}, 0.90, '0.75')

    .staggerFrom(titrePortfolio, 5, {opacity: 0}, 0.90, '0.75')

    .staggerFrom(navigation, 4, {opacity: 0}, 1, '0.80')

    .staggerFrom(social, 1, {opacity: 0}, 0.90, '0.75')


    window.addEventListener('load', () => {

        TL1.play();

    })








// ANIMATION PORTFOLIO //


const portfolio = document.querySelector('.portfolio')
const titlePortfolio = document.querySelector('.title-port');
const itemPortfolio = document.querySelectorAll('.vague1');


const tlPortfolio = new TimelineMax();


tlPortfolio

.from(titlePortfolio, {y: -50, opacity: 0, duration: 1})
.staggerFrom(itemPortfolio, 1, {opacity: 0}, 0.5, '-=0.5')


const controller = new ScrollMagic.Controller();

const scene2 = new ScrollMagic.Scene({

    triggerElement: portfolio,
    triggerHook: 0.5,
    reverse: false

})


.setTween(tlPortfolio)
.addIndicators()
.addTo(controller)




// VAGUE 2 //


const itemPortfolio2 = document.querySelectorAll('.vague2');


const tlPortfolio2 = new TimelineMax();


tlPortfolio2

.staggerFrom(itemPortfolio2, 1, {opacity: 0}, 0.2, '-=0.5')



const scene3 = new ScrollMagic.Scene({

    triggerElement: itemPortfolio,
    triggerHook: 0.2,
    reverse: false

})


.setTween(tlPortfolio2)
.addIndicators()
.addTo(controller)








