function soma(){
  cotacao = parseFloat(document.getElementById("cotacao").value) 
  real = parseFloat(document.getElementById("real").value) 

  resultado = real / cotacao  

  convercao.value = resultado

}