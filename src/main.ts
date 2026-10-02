let puntuacion : number = 0;

const puntuacionDisplay = document.querySelector('.numero-puntuacion') as HTMLElement;



function muestraPuntuacion():void {
 if (puntuacionDisplay && puntuacionDisplay instanceof HTMLElement) {
    puntuacionDisplay.textContent = puntuacion.toString().padStart(2, '0');
    } 
}

muestraPuntuacion();


const carta1 = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg"
const carta2 = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg"
const carta3 = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg"
const carta4 = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg"
const carta5 = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg"
const carta6 = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg"
const carta7 = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg"
const cartasota = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg"
const cartacaballo = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg"
const cartarey = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg"

const botonPideCarta = document.querySelector<HTMLButtonElement>('#boton-puntuacion');

function dameCarta(): string {
  const cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, cartasota, cartacaballo, cartarey];
  const indiceAleatorio = Math.floor(Math.random() * cartas.length);
  return cartas[indiceAleatorio];
}



const cartaElement = document.querySelector<HTMLImageElement>('#back-card');

function mostrarCarta(): void {
    const nuevaCarta = dameCarta();
    if (cartaElement) {
        cartaElement.src = nuevaCarta;
    }
}

if (botonPideCarta) {
  botonPideCarta.addEventListener('click', mostrarCarta);
}