function soma(){
  valor1 = parseFloat(document.getElementById("valor1").value) 
  valor2 = parseFloat(document.getElementById("valor2").value) 
  valor3 = parseFloat(document.getElementById("valor3").value) 

  quadrados = (valor1 + valor2 + valor3)**2

  resultado.value = quadrados

}