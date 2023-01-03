
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

const infoBreve = document.querySelector('.info-breve');

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

// GENERAR LOTERIA O CHANCE

const chanceLoteria = () => {
    const loterias = ['Dorado Mañana', 'Culona Día', 'Astro Sol', 'Caribeña Día', 'Sinuano Día', 'Paisita Día', 'Chontico Día', 'El pijao de Oro', 'Dorado Tarde', 'Cafeterito Tarde', 'Paisita Noche', 'Chontico Noche', 'Cafeterito Noche', 'Dorado Noche', 'Motilon Noche', 'Caribeña Noche', 'Sinuano Noche', 'Fantastica Noche', 'Culona Noche', 'Astro Luna'];

    const longitud = loterias.length;
    let opcionElegida = numAleatorio(0, longitud);

    if(loterias[opcionElegida] == undefined){
        opcionElegida = numAleatorio(0, 17);
    }
    
    infoBreve.innerText = `Apueste los números anteriores en el chance: ${loterias[opcionElegida]}`;
}

botonGenerarNumber.addEventListener('click', () => {
    GenerateNumeros();
    chanceLoteria();
});

botonLimpiar.addEventListener('click', Clean);



