function evaluarCompra(cantidadDisponible) {
    let elementoRespuesta = document.getElementById("decision");

    let elementoCantidad = document.getElementById("textoCantidad");
    let cantidadComprada = elementoCantidad.value;

    if (parseInt(cantidadComprada) == cantidadDisponible) {
        alert("Hola mundo");
    }
}