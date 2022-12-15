function soma(){

    tempoViagem = parseInt(document.getElementById("tempoViagem").value);
    velocidadeMedia = parseInt(document.getElementById("velocidadeMedia").value);

    distancia = tempoViagem * velocidadeMedia
    combustivel = Math.round(distancia/12)
    
    resposta.value = combustivel;
}