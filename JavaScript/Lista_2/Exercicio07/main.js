function soma(){

    raio = parseInt(document.getElementById("raio").value);
    altura = parseInt(document.getElementById("altura").value);

    area = Math.PI*raio**2*altura
    
    resposta.value = area;
}