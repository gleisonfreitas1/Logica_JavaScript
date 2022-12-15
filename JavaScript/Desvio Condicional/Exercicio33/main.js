function precificacao (){

     valor1 = parseFloat(document.getElementById("valor1").value)
    valor2 = parseFloat(document.getElementById("valor2").value)
    

     

     if(valor1 > valor2){
          alert("O primeiro valor é maior")
     }
     else if(valor1 == valor2){
          alert("Os valores informados são iguais")
     }
     else{
          alert("O segundo valor é maior") 
     };
}