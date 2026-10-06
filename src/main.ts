let puntuacion : number = 0;

const numeroPuntuacion = document.querySelector('.numero-puntuacion') as HTMLElement;



function muestraPuntuacion(puntos: number):void {
 if (numeroPuntuacion !== null && numeroPuntuacion !== undefined && numeroPuntuacion instanceof HTMLElement) {
    numeroPuntuacion.textContent = puntos.toString().padStart(2, '0');
    } 
}



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
  


function generarNumeroAleatorio(): number {
  return Math.floor(Math.random() * 10 + 1);
}

function ajustaValorCarta(numero: number): number {
  return numero > 7 ? numero + 2 : numero;
}

function dameCarta(): number {
  const numero = generarNumeroAleatorio();
  return ajustaValorCarta(numero);
}


const cartaElement = document.querySelector<HTMLImageElement>('#back-card');


function obtenCartaUrl(carta: number): string {
  switch (carta) {
    case 1:
      return carta1;
    case 2:
      return carta2;
    case 3:
      return carta3;
    case 4:
      return carta4;
    case 5:
      return carta5;
    case 6:
      return carta6;
    case 7:
      return carta7;
    case 10:
      return cartasota;
    case 11:
      return cartacaballo;
    case 12:
      return cartarey;
    default:
      return "";
  }
}

function pintaCartaEnHtml(url: string): void {
  if (cartaElement !== null && cartaElement !== undefined && cartaElement instanceof HTMLImageElement) {
    cartaElement.src = url;
  }
}


function mostrarCarta(carta: number): void {
  pintaCartaEnHtml(obtenCartaUrl(carta));
}


function calculaPuntosCarta(carta: number): number {
  return carta > 7 ? 0.5 : carta;
}

function sumaPuntos(actual: number, nuevos: number): number {
  return actual + nuevos;
}

function actualizarPuntuacion(carta: number): void {
  const puntosCarta = calculaPuntosCarta(carta);
  puntuacion = sumaPuntos(puntuacion, puntosCarta);
  muestraPuntuacion(puntuacion);

  const mensaje = HasSuperadoPuntuacionMaxima(puntuacion);
  muestraMensaje(mensaje);
  gestionargameover(puntuacion);
}


if (botonPideCarta !== null && botonPideCarta !== undefined && botonPideCarta instanceof HTMLButtonElement) {
  botonPideCarta.addEventListener('click', () => {const carta = dameCarta(); mostrarCarta(carta); actualizarPuntuacion(carta);});
}



const PUNTUACION_MAXIMA : number = 7.5;

const HasSuperadoPuntuacionMaxima = (puntuacion: number): string => {
  let mensajePuntuacion = "";
  if (puntuacion > PUNTUACION_MAXIMA) {
        mensajePuntuacion = "GAME OVER";
    }
    return mensajePuntuacion;
};


const gestionargameover : (puntuacion: number) => void = (puntuacion) => {
  if (puntuacion > PUNTUACION_MAXIMA) {
    desactivarBotones();
  }
}

const mensajeElement = document.querySelector('.mensaje-resultado') as HTMLElement;

function muestraMensaje(mensaje: string): void {
  if (mensajeElement !== null && mensajeElement !== undefined && mensajeElement instanceof HTMLElement) {
    mensajeElement.textContent = mensaje;
  }
}


type Estados =
| "Has sido muy conservador"
| "Te ha entrado el canguelo eh?"
| "Casi casi..."
| "¡ Lo has clavado! ¡Enhorabuena!"

const botonPlantarse = document.querySelector<HTMLButtonElement>('#boton-plantarse');

function mensajeEstado(puntuacion: number): Estados {
   if (puntuacion < 5) {
    return "Has sido muy conservador";
  } else if (puntuacion < 6) {
    return "Te ha entrado el canguelo eh?";
  } else if (puntuacion < 7.5) {
    return "Casi casi...";
  } else {
    return "¡ Lo has clavado! ¡Enhorabuena!";
  }
  }



if (botonPlantarse !== null && botonPlantarse !== undefined && botonPlantarse instanceof HTMLButtonElement) {
  botonPlantarse.addEventListener('click', () => {
    const estado = mensajeEstado(puntuacion);
    muestraMensaje(estado);
    desactivarBotones();
    if (botonHabriaPasado) {
  botonHabriaPasado.disabled = false;
}
  });
}

const desactivarBotones = (): void => {
 if (botonPlantarse !== null && botonPlantarse !== undefined && botonPlantarse instanceof HTMLButtonElement) {
    botonPlantarse.disabled = true;
  }
  if (botonPideCarta !== null && botonPideCarta !== undefined && botonPideCarta instanceof HTMLButtonElement) {
    botonPideCarta.disabled = true;
  }
} 

const botonNuevaPartida = document.querySelector<HTMLButtonElement>('#nueva-partida');

function reiniciarJuego(): void {
  puntuacion = 0;
  muestraPuntuacion(puntuacion);
  muestraMensaje("");

 if (cartaElement !== null && cartaElement !== undefined && cartaElement instanceof HTMLImageElement) {
    cartaElement.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
  }

 if (botonHabriaPasado !== null && botonHabriaPasado !== undefined && botonHabriaPasado instanceof HTMLButtonElement) {
  botonHabriaPasado.disabled = true;
}
}

const activarBotones = (): void => {
  if (botonPlantarse !== null && botonPlantarse !== undefined && botonPlantarse instanceof HTMLButtonElement) {
    botonPlantarse.disabled = false;
  }
  if (botonPideCarta !== null && botonPideCarta !== undefined && botonPideCarta instanceof HTMLButtonElement) {
    botonPideCarta.disabled = false;
  }
}



if (botonNuevaPartida !== null && botonNuevaPartida !== undefined && botonNuevaPartida instanceof HTMLButtonElement) {
  botonNuevaPartida.addEventListener('click', () => {
    reiniciarJuego();
    activarBotones();
  });
}




const botonHabriaPasado = document.querySelector<HTMLButtonElement>('#boton-habria-pasado');

function simulaQueHabriaPasado(): string {
  const cartaSimulada = dameCarta();
  const puntosSimulados = puntuacion + calculaPuntosCarta(cartaSimulada);

  if (puntosSimulados > PUNTUACION_MAXIMA) {
    return `Habrías sacado un ${cartaSimulada} y te habrías pasado con ${puntosSimulados} puntos.`;
  } else {
    return `Habrías sacado un ${cartaSimulada} y te habrías quedado en ${puntosSimulados} puntos.`;
  }
}

if (botonHabriaPasado !== null && botonHabriaPasado !== undefined && botonHabriaPasado instanceof HTMLButtonElement) {
  botonHabriaPasado.addEventListener('click', () => {
    const resultado = simulaQueHabriaPasado();
    muestraMensaje(resultado);
    botonHabriaPasado.disabled = true;
  });
}



document.addEventListener("DOMContentLoaded", () => {
  muestraPuntuacion(puntuacion);
  if (botonHabriaPasado !== null && botonHabriaPasado !== undefined && botonHabriaPasado instanceof HTMLButtonElement) {
    botonHabriaPasado.disabled = true;
  }
});