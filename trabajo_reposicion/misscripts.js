function recomendar() {
    
    var presupuesto = document.getElementById("presupuesto").value;
    var personas = document.getElementById("personas").value;
    var actividad = document.getElementById("actividad").value;
    var resultado = document.getElementById("resultado");

    
    if (presupuesto == "") {
        resultado.innerHTML = "Error: presupuesto vacio";
        return;
    }
    if (presupuesto) {
        resultado.innerHTML = "Error: presupuesto no valido";
        return;
    }
    if (presupuesto < 0) {
        resultado.innerHTML = "Error: presupuesto negativo";
        return;
    }
    if (personas == "") {
        resultado.innerHTML = "Error: cantidad de personas vacia";
        return;
    }
    if (personas <= 0) {
        resultado.innerHTML = "Error: las personas deben ser mayor que cero";
        return;
    }
    if (actividad == "") {
        resultado.innerHTML = "Error: seleccione una actividad";
        return;
    }

    presupuesto = (presupuesto);
    personas = (personas);

    
    var recomendacion = "";

    switch (actividad) {
        case "deportes":
            if (presupuesto < 8000) {
                recomendacion = "Caminata recreativa";
            } else if (presupuesto <= 15000) {
                recomendacion = "Alquiler de cancha";
            } else {
                recomendacion = "Actividad deportiva especializada";
            }
            break;

        case "entretenimiento":
            if (presupuesto < 8000) {
                recomendacion = "Actividad economica";
            } else if (presupuesto <= 15000) {
                recomendacion = "Entrada al cine";
            } else {
                recomendacion = "Concierto o espectaculo";
            }
            break;

        case "turismo":
            if (presupuesto < 8000) {
                recomendacion = "Visita a parque publico";
            } else if (presupuesto <= 15000) {
                recomendacion = "Tour local";
            } else {
                recomendacion = "Excursion de dia completo";
            }
            break;

        case "familiares":
            if (presupuesto < 8000) {
                recomendacion = "Picnic familiar";
            } else if (presupuesto <= 15000) {
                recomendacion = "Salida recreativa";
            } else {
                recomendacion = "Parque tematico o actividad especial";
            }
            break;
    }


    var descuento = 0;

    if (personas <= 4) {
        descuento = 0;
    } else if (personas <= 8) {
        descuento = 10;
    } else {
        descuento = 15;
    }

   
    var monto = presupuesto * descuento / 100;
    var final = presupuesto - monto;

    
    resultado.innerHTML =
        "Actividad recomendada: " + recomendacion + "<br>" +
        "Cantidad de personas: " + personas + "<br>" +
        "Descuento grupal: " + descuento + " %<br>" +
        "Monto del descuento: ₡" + monto + "<br>" +
        "Presupuesto final: ₡" + final;
}

function reiniciar() {
    document.getElementById("presupuesto").value = "";
    document.getElementById("personas").value = "";
    document.getElementById("actividad").value = "";
    document.getElementById("resultado").innerHTML = "";
}