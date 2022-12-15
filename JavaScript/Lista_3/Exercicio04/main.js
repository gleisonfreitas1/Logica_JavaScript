function soma(){
  cotacao = parseFloat(document.getElementById("cotacao").value) 
  dolar = parseFloat(document.getElementById("dolar").value) 

  resultado = cotacao * dolar

  convercao.value = resultado

}