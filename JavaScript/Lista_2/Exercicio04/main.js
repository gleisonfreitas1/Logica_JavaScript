function soma(){

    custoFabrica = parseInt(document.getElementById("custoFabrica").value);

    imposto = custoFabrica*45/100
    distribuicao = custoFabrica*28/100
    custoFinal = custoFabrica + imposto + distribuicao
    

    resposta.value = custoFinal
}