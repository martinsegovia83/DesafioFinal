
const ANCHO = 1000;
const ALTO = 800;

let numeroAleatoria = longitud => {
    return Math.floor(Math.random() * longitud);
}

  // OBTENIENDO DISTANCIA ENTRE DOS PUNTOS (PITAGORAS)


let distancias = (evento, objetivo) => {
    let diffX = evento.offsetX - objetivo.x;
    let diffY = evento.offsetY - objetivo.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

  // CERCANIA CON EL TESORO

    let tesoro = distance => {
    if (distance < 30) {
        return "¡ESTAS DEMASIADO CERCA!";
    } else if (distance < 40) {
        return "¡ESTAS MUY CERCA!";
    } else if (distance < 60) {
        return "¡CERCA!";
    } else if (distance < 100) {
        return "¡MEDIO LEJOS!";
    } else if (distance < 180) {
        return "¡LEJOS!";
    } else if (distance < 360) {
        return "¡MUY LEJOS!";
    } else {
        return "¡MUY MUY LEJOS!";
    }
}


let objetivo = {
    x: numeroAleatoria(ANCHO),
    y: numeroAleatoria(ALTO)
};


let mapas = document.querySelector('#mapa');
let $distance = document.querySelector('#distancia');
let clicks = 0;

mapas.addEventListener('click', function (evento) {
    console.log('click');
    clicks++;
    let distance = distancias(evento, objetivo);
    let distanciaTesoro = tesoro(distance);
    $distance.innerHTML = `<h1>${distanciaTesoro}</h1>`;

    if (distance < 20 ) {
    alert(`Encontré el tesoro en ${clicks} clicks!`);
    location.reload();
    }
});

