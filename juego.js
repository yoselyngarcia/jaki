function jugar(opcionUsuario) {
    const opciones = ['piedra', 'papel', 'tijeras'];
    const opcionComputadora = opciones[Math.floor(Math.random() * opciones.length)];

    let resultado = "";

    if (opcionUsuario === opcionComputadora) {
        resultado = "¡Es un empate!";
    } else if ((opcionUsuario === 'piedra' && opcionComputadora === 'tijeras') ||
               (opcionUsuario === 'papel' && opcionComputadora === 'piedra') ||
               (opcionUsuario === 'tijeras' && opcionComputadora === 'papel')) {
        resultado = "¡Ganaste!";
    } else {
        resultado = "¡La computadora gana!";
    }

    document.getElementById("resultado").innerText = `Elegiste ${opcionUsuario}. La computadora eligió ${opcionComputadora}. ${resultado}`;
}
