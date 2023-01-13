(async () => {

input = [];

await fetch('https://randomuser.me/api/')
    .then(resp => resp.json())
    .then(resp => input.push(resp.results[0]))
    .catch((e)=> console.log('error API no consumida'))

console.log('checkpoint')
console.log(input)

const name = input[0].name.first
const lastname = input[0].name.last
const fullName = name + ' ' + lastname
const email = input[0].email
const city = input[0].location.city
const country = input[0].location.country
const phone = input[0].phone
const perfilImg = input[0].picture.large

/* ----------------------------------------------*/
let perfil = document.getElementById('pic')

let tituloA = document.getElementById('tituloA')
let tituloB = document.getElementById('tituloB')

let iPersona = document.getElementById('iPersona')
let iMail = document.getElementById('iMail')
let iInfo = document.getElementById('iInfo')
let iContacto = document.getElementById('iContacto')

// let contactBox = document.getElementById('contactBox') creo que esta no va
let contactForm = document.getElementById('contactForm')

const triangle = document.getElementById('triangulo')
const triangleInv = document.getElementById('trianguloInv')

/* ----------------------------------------------*/

tituloB.innerHTML = fullName
pic.src = perfilImg


iPersona.addEventListener('mouseover', function(){
    tituloA.innerHTML = "<strong>Hola, me llamo</strong>"
    tituloB.innerHTML = fullName
})

iMail.addEventListener('mouseover', function(){
    tituloA.innerHTML = "<strong>mi correo electronico es</strong>"
    tituloB.innerHTML = email
})

iInfo.addEventListener('mouseover', function(){
    tituloA.innerHTML = `<strong>soy de ${city}</strong>`
    tituloB.innerHTML = country
})

iContacto.addEventListener('mouseover', function(){
    tituloA.innerHTML = "<strong>mi numero de telefono es</strong>"
    tituloB.innerHTML = phone
})

/* ----------------------------------------------*/

triangle.addEventListener('click', function(){
    if(contactForm.style.display === 'none'){
    contactForm.style.display='block'
    triangle.style.display='none'
    triangleInv.style.display ='block'
    } else {
    contactForm.style.display='none'
    triangle.style.display='block'
    triangleInv.style.display ='none' 
    }
})
triangleInv.addEventListener('click', function(){
    if(contactForm.style.display === 'none'){
    contactForm.style.display='block'
    triangle.style.display='none'
    triangleInv.style.display ='block'
    } else {
    contactForm.style.display='none'
    triangle.style.display='block'
    triangleInv.style.display ='none' 
    }
})

/* ----------------------------------------------*/

})();
