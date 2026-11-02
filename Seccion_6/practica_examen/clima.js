var temperaturas = [25, 28, 22, 30, 18, 24, 27];

function listarTemperaturas() {
    var lista = document.getElementById("lista");
    for (var i = 0; i < temperaturas.length; i++) {
        lista.innerHTML = lista.innerHTML + "<li>" + temperaturas[i] + "</li>";
    }
}

function calcularPromedio() {
    var suma = 0;
    for (var i = 0; i < temperaturas.length; i++) {
        suma = suma + temperaturas[i];
    }
    var promedio = suma / temperaturas.length;
    document.getElementById("resultado").innerHTML = "El promedio es: " + promedio.toFixed(2);
}

function temperaturaMaxima() {
    var maxima = temperaturas[0];
    for (var i = 0; i < temperaturas.length; i++) {
        if (temperaturas[i] > maxima) {
            maxima = temperaturas[i];
        }
    }
    document.getElementById("resultado").innerHTML = "La temperatura maxima es: " + maxima;
}

function hayDiasFrios() {
    var frio = "No";
    for (var i = 0; i < temperaturas.length; i++) {
        if (temperaturas[i] < 20) {
            frio = "Si";
        }
    }
    document.getElementById("resultado").innerHTML = "Hubo dias frios: " + frio;
}

listarTemperaturas();