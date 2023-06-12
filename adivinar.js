const generarNumeroAleatorio = () => {
    numeroGenerado =  Math.floor(Math.random() * 100) + 1;
    console.log("El numero aleatorio es : " +numeroGenerado);
    return numeroGenerado;
}

const verificarAdivinanza = (numeroSecreto, numeroAdivinado) => {
    if (numeroAdivinado == numeroSecreto) {
        console.log("Felicidatociones, has adivinado el numero!!");
    } else if (numeroAdivinado > numeroSecreto) {
        console.log('El numero secreto es menor. Sigue intentando!');
    } else {
        console.log('El numero secreto es mayor. Sigue intentando!');
    }
};

module.exports = {
    generarNumeroAleatorio,
    verificarAdivinanza
}