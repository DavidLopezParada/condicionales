let puntuacion : number = 0;

const numeroPuntuacion = document.querySelector('.numero-puntuacion') as HTMLElement;



function muestraPuntuacion():void {
 if (numeroPuntuacion) {
    numeroPuntuacion.textContent = puntuacion.toString().padStart(2, '0');
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

function dameCarta(): number {
  let numeroRandom : number = Math.floor(Math.random() * 10 + 1);
  if (numeroRandom > 7) {
    numeroRandom += 2;
  }
  return numeroRandom;
}


const cartaElement = document.querySelector<HTMLImageElement>('#back-card');

function mostrarCarta(carta: number): void {
    switch (carta) {
      case 1:
        if (cartaElement) {
          cartaElement.src = carta1;
        }
        break;
      case 2:
        if (cartaElement) {
          cartaElement.src = carta2;
        }
        break;
      case 3:
        if (cartaElement) {
          cartaElement.src = carta3;
        }
        break;
      case 4:
        if (cartaElement) {
          cartaElement.src = carta4;
        }
        break;
      case 5:
        if (cartaElement) {
          cartaElement.src = carta5;
        }
        break;

      case 6:
        if (cartaElement) {
          cartaElement.src = carta6;
        }
        break;

      case 7:
        if (cartaElement) {
          cartaElement.src = carta7;
        }
        break;

      case 10:
        if (cartaElement) {
          cartaElement.src = cartasota;
        }
        break;

      case 11:
        if (cartaElement) {
          cartaElement.src = cartacaballo;
        }
        break;

      case 12:
        if (cartaElement) {
          cartaElement.src = cartarey;
        }
        break;

    }
}



function sumarPuntos(carta: number): void {
  switch (carta) {
    case 1:
      puntuacion += 1;
      break;
    case 2:
      puntuacion += 2;
      break;
    case 3:
      puntuacion += 3;
      break;
    case 4:
      puntuacion += 4;
      break;
    case 5:
      puntuacion += 5;
      break;
    case 6:
      puntuacion += 6;
      break;
    case 7:
      puntuacion += 7;
      break;
    case 10:
      puntuacion += 0.5;
      break;
    case 11:
      puntuacion += 0.5;
      break;
    case 12:
      puntuacion += 0.5;
      break;
  }
}


function actualizarPuntuacion(carta: number): void {
  sumarPuntos(carta);
  muestraPuntuacion();

  const mensaje = HasSuperadoPuntuacionMaxima(puntuacion);
  muestraMensaje(mensaje);
  gestionargameover(puntuacion);
}


if (botonPideCarta) {
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
  if (mensajeElement) {
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



if (botonPlantarse) {
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
 if (botonPlantarse) {
    botonPlantarse.disabled = true;
  }
  if (botonPideCarta) {
    botonPideCarta.disabled = true;
  }
} 

const botonNuevaPartida = document.querySelector<HTMLButtonElement>('#nueva-partida');

function reiniciarJuego(): void {
  puntuacion = 0;
  muestraPuntuacion();
  muestraMensaje("");

 if (cartaElement) {
    cartaElement.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
  }

 if (botonHabriaPasado) {
  botonHabriaPasado.disabled = true;
}
}

const activarBotones = (): void => {
  if (botonPlantarse) {
    botonPlantarse.disabled = false;
  }
  if (botonPideCarta) {
    botonPideCarta.disabled = false;
  }
}



if (botonNuevaPartida) {
  botonNuevaPartida.addEventListener('click', () => {
    reiniciarJuego();
    activarBotones();
  });
}


function valorPuntos(carta: number): number {
  switch (carta) {
    case 1: return 1;
    case 2: return 2;
    case 3: return 3;
    case 4: return 4;
    case 5: return 5;
    case 6: return 6;
    case 7: return 7;
    case 10: return 0.5;
    case 11: return 0.5;
    case 12: return 0.5;
    default: return 0;
  }
}

const botonHabriaPasado = document.querySelector<HTMLButtonElement>('#boton-habria-pasado');

function simulaQueHabriaPasado(): string {
  const cartaSimulada = dameCarta();
  const puntosSimulados = puntuacion + valorPuntos(cartaSimulada);

  if (puntosSimulados > PUNTUACION_MAXIMA) {
    return `Habrías sacado un ${cartaSimulada} y te habrías pasado con ${puntosSimulados} puntos.`;
  } else {
    return `Habrías sacado un ${cartaSimulada} y te habrías quedado en ${puntosSimulados} puntos.`;
  }
}

if (botonHabriaPasado) {
  botonHabriaPasado.addEventListener('click', () => {
    const resultado = simulaQueHabriaPasado();
    muestraMensaje(resultado);
    botonHabriaPasado.disabled = true;
  });
}



document.addEventListener("DOMContentLoaded", () => {
  muestraPuntuacion();
  if (botonHabriaPasado) {
    botonHabriaPasado.disabled = true;
  }
});