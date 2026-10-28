let notas = [7, 4, 8, 9, 6];

function listarNotas(lista) {
    for (let nota of lista) {
        document.getElementById("lista").innerHTML += "<li>" + nota + "</li>";
    }
}

function calcularPromedio(lista) {
    let suma = 0;
    for (let nota of lista) {
        suma = suma + nota;
    }
    let promedio = suma / lista.length;
    document.getElementById("promedio").innerHTML = promedio;
}

function notaMasAlta(lista) {
    let mayor = 0;
    for (let nota of lista) {
        if (nota > mayor) {
            mayor = nota;
        }
    }
    document.getElementById("mayor").innerHTML = mayor;
}

function hayAplazados(lista) {
    let respuesta = "No";
    for (let nota of lista) {
        if (nota < 4) {
            respuesta = "Si";
        }
    }
    document.getElementById("aplazo").innerHTML = respuesta;
}

listarNotas(notas);