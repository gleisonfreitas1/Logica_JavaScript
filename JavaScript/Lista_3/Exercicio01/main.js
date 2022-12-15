function soma(){
  valor1 = parseFloat(document.getElementById("valor1").value) 
  valor2 = parseFloat(document.getElementById("valor2").value) 
  valor3 = parseFloat(document.getElementById("valor3").value)

  resposta1 = valor1 + valor2
  resposta2 = valor1 + valor3
  resposta3 = valor2 + valor3
  
  resposta4 = valor1 * valor2
  resposta5 = valor1 * valor3
  resposta6 = valor2 * valor3


  document.write(
    valor1,"+",valor2,"=",resposta1,"<br>",
    valor1,"+",valor3,"=",resposta2,"<br>",
    valor2,"+",valor3,"=",resposta3,"<br>",
    
    valor1,"X",valor2,"=",resposta4,"<br>",
    valor1,"X",valor3,"=",resposta5,"<br>",
    valor2,"X",valor3,"=",resposta6,
  )

}