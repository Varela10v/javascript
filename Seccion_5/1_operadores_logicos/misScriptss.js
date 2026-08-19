function calcular (){
      let elementoRespuesta1 = parseFloat(document.getElementById ("respuesta1").value);

    let elementoRespuesta2 = parseFloat(document.getElementById ("respuesta2").value);

    let resultado = elementoRespuesta1 > elementoRespuesta2;
    document.getElementById("elementoRespuesta").innerText = resultado;
}