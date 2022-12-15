function precificacao (){

    valor1 = parseFloat(document.getElementById("valor1").value)
    valor2 = parseFloat(document.getElementById("valor2").value)
    valor3 = parseFloat(document.getElementById("valor3").value)

     

     if(valor1 >= valor2 + valor3){
          alert("os valore informados não formam um triangulo")
     }
     else if(valor2 >= valor1 + valor3){
          alert("os valore informados não formam um triangulo")
     }
     else if(valor3 >= valor1 + valor2){
          alert("os valore informados não formam um triangulo")
     }  
     else{
          alert("os valore informados formam um triangulo")
     } 
}
