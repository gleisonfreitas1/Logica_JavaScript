function soma(){
  valor1 = parseFloat(document.getElementById("valor1").value) 
  valor2 = parseFloat(document.getElementById("valor2").value) 


  diferenca = valor1 - valor2 
  quadrado = diferenca**2

  resposta.value = quadrado

}