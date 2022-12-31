
// En el nombre poderoso de Jesucristo, que se haga tu voluntad mi Dios:)

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

    chanceLoteria();
}

// LIMPIAR - FUNCTION

const Clean = () => {
    location.reload();
}

// GENERAR LOTERIA O CHANCE

const chanceLoteria = () => {
    const loterias = ['Dorado Mañana', 'Caribeña Día', 'Sinuano Día', 'Paisita Día', 'Chontico Día', 'El pijao de Oro', 'Dorado Tarde', 'Cafeterito Tarde', 'Paisita Noche', 'Chontico Noche', 'Cafeterito Noche', 'Dorado Noche', 'Motilon Noche', 'Caribeña Noche', 'Sinuano Noche'];
    const longitud = loterias.length;
    const opcionElegida = numAleatorio(0, longitud);

    infoBreve.innerText = `Apueste los números anteriores en la lotería o chance: ${loterias[opcionElegida]}`;
}

botonGenerarNumber.addEventListener('click', GenerateNumeros);
botonLimpiar.addEventListener('click', Clean);



