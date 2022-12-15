function calculo(){
    nota1 = parseFloat(document.getElementById("matematica").value);
    nota2 = parseFloat(document.getElementById("portugues").value);
    nota3 = parseFloat(document.getElementById("filosofia").value);

    notaFinal = (nota3*2 + nota2*3 + nota1*5)/10

    resposta.value = notaFinal

}