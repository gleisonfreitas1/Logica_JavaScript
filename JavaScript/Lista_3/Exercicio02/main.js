function soma(){
  largura = parseFloat(document.getElementById("largura").value) 
  comprimento = parseFloat(document.getElementById("comprimento").value) 
  altura = parseFloat(document.getElementById("altura").value)

  area = comprimento * altura * largura

  resposta.value = area

}