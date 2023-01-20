
// ORACIÓN

// ¡Dios mío, Todo Poderoso! Ante ti vengo a alabar y magnificar tu nombre, a decirte que seas mi Padre y guía. Te otorgo mi vida, mis metas y sueños, para que, por medio de tu gloria la suerte y el dinero lleguen a mí, la plenitud y felicidad que solo puede venir de tu gracia, en mi vida, familia, negocios, relaciones y profesión, renueva mi mundo y haz de mí lo que sea tu voluntad siempre.

// Señor, no me dejes recorrer el camino solo. Guía mis pases con tu infinita sabiduría y poder, y dame más bien el privilegio de andar con tu majestuosa compañía, dándote siempre las gracias y aceptando con alegría lo que tengas deparado para mí. Te suplico Padre, que me des el impulso necesario para tener suerte y alcanzar mis metas monetarias.

// Te agradezco eternamente por todas las veces que me has acompañado y dado lo mejor para mí, aunque a simple vista no me he dado cuenta de ello. Síguelo haciendo en mi día a día, porque en mi corazón tengo plena confianza de que me escuchas y que estás ahí, bendiciéndome para que me sonría la suerte, lo sé puesto que siempre estás atento a las necesidades de tus hijos. Te lo pido por los méritos de nuestro señor Jesucristo, Amén.

const numeroOne4 = document.querySelector('.numero-one4');
const numeroTwo4 = document.querySelector('.numero-two4');
const numeroThree4 = document.querySelector('.numero-three4');
const numeroFour4 = document.querySelector('.numero-four4');

const numeroOne3 = document.querySelector('.numero-one3');
const numeroTwo3 = document.querySelector('.numero-two3');
const numeroThree3 = document.querySelector('.numero-three3');

const botonLimpiar = document.querySelector('[dataButtonClean]');
const botonGenerarNumber = document.querySelector('[dataNumeroButton]');

const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');

const hours1 = document.querySelector('.hours-1');
const hours2 = document.querySelector('.hours-2');
const hours3 = document.querySelector('.hours-3');
const hours4 = document.querySelector('.hours-4');
const hours5 = document.querySelector('.hours-5');
const hours6 = document.querySelector('.hours-6');
const hours7 = document.querySelector('.hours-7');
const hours8 = document.querySelector('.hours-8');
const hours9 = document.querySelector('.hours-9');


const button = document.querySelector('.button');

// Números aleatorios 4 cifras

const numAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1));
}

let numberOneFour = numAleatorio(0, 9);
let numberTwoFour = numAleatorio(0, 9);
let numberThreeFour = numAleatorio(0, 9);
let numberFourFour = numAleatorio(0, 9);

// Números aleatorios 3 cifras

let numberOneThree = numAleatorio(0, 9);
let numberTwoThree = numAleatorio(0, 9);
let numberThreeThree = numAleatorio(0, 9);

// Generar números - Function

const GenerateNumeros = () => {

    // 4 cifras

    setInterval(() => {
        numeroOne4.innerText = `${numberOneFour}`;
    }, 1000);

    setInterval(() => {
        numeroTwo4.innerText = `${numberTwoFour}`;
    }, 2000);

    setInterval(() => {
        numeroThree4.innerText = `${numberThreeFour}`;
    }, 3000);

    setInterval(() => {
        numeroFour4.innerText = `${numberFourFour}`;
    }, 4000);

    // 3 cifras

    setInterval(() => {
        numeroOne3.innerText = `${numberOneThree}`;
    }, 5000);

    setInterval(() => {
        numeroTwo3.innerText = `${numberTwoThree}`;
    }, 6000);

    setInterval(() => {
        numeroThree3.innerText = `${numberThreeThree}`;
    }, 7000);
}

// LIMPIAR - FUNCTION

const Clean = () => {
    location.reload();
}

botonGenerarNumber.addEventListener('click', () => {
    GenerateNumeros();
});

botonLimpiar.addEventListener('click', Clean);

// NUMEROS CON POSIBILAD DE GANAR

const content_back = [one, two, three, four, five, six, seven, eight, nine];
let i_aleatorio = numAleatorio(0, content_back.length - 1);

const numberSeleccionados = () => {

    const hora = new Date();

    if(i_aleatorio == 0){
        one.style = 'background-color: #12b103';
        hours1.style = 'display: block; font-size: .7rem; margin-top: 0.5rem; color: white';
        hours1.innerText = `Seleccionado a las ${hora.getHours()}:${hora.getMinutes()}`;
    } else if(i_aleatorio == 1){
        two.style = 'background-color: #12b103';
        hours2.style = 'display: block; font-size: .7rem; margin-top: 0.5rem; color: white';
        hours2.innerText = `Seleccionado a las ${hora.getHours()}:${hora.getMinutes()}`;
    } else if(i_aleatorio == 2){
        three.style = 'background-color: #12b103';
        hours3.style = 'display: block; font-size: .7rem; margin-top: 0.5rem; color: white';
        hours3.innerText = `Seleccionado a las ${hora.getHours()}:${hora.getMinutes()}`;
    } else if(i_aleatorio == 3){
        four.style = 'background-color: #12b103';
        hours4.style = 'display: block; font-size: .7rem; margin-top: 0.5rem; color: white';
        hours4.innerText = `Seleccionado a las ${hora.getHours()}:${hora.getMinutes()}`;
    } else if(i_aleatorio == 4){
        five.style = 'background-color: #12b103';
        hours5.style = 'display: block; font-size: .7rem; margin-top: 0.5rem; color: white';
        hours5.innerText = `Seleccionado a las ${hora.getHours()}:${hora.getMinutes()}`;
    } else if(i_aleatorio == 5){
        six.style = 'background-color: #12b103';
        hours6.style = 'display: block; font-size: .7rem; margin-top: 0.5rem; color: white';
        hours6.innerText = `Seleccionado a las ${hora.getHours()}:${hora.getMinutes()}`;
    } else if(i_aleatorio == 6){
        seven.style = 'background-color: #12b103';
        hours7.style = 'display: block; font-size: .7rem; margin-top: 0.5rem; color: white';
        hours7.innerText = `Seleccionado a las ${hora.getHours()}:${hora.getMinutes()}`;
    } else if(i_aleatorio == 7){
        eight.style = 'background-color: #12b103';
        hours8.style = 'display: block; font-size: .7rem; margin-top: 0.5rem; color: white';
        hours8.innerText = `Seleccionado a las ${hora.getHours()}:${hora.getMinutes()}`;
    } else if(i_aleatorio == 8){
        nine.style = 'background-color: #12b103';
        hours9.style = 'display: block; font-size: .7rem; margin-top: 0.5rem; color: white';
        hours9.innerText = `Seleccionado a las ${hora.getHours()}:${hora.getMinutes()}`;
    }
}

button.addEventListener('click', numberSeleccionados);

const suerteNum = document.querySelector('.suerte-num');
const numsEstablecidos = document.querySelector('.nums-establecidos');
const sectContent = document.querySelector('.sect-content');

suerteNum.addEventListener('click', () => {
    numsEstablecidos.style = 'display: none';
    sectContent.style = 'display: block';
})