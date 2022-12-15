function soma(){

    valor = parseInt(document.getElementById("valor").value);
    taxa = parseInt(document.getElementById("taxa").value);
    tempo = parseInt(document.getElementById("tempo").value);
    

    parcela = valor+((valor*taxa/100)*tempo)
    
    resposta.value = parcela;
}