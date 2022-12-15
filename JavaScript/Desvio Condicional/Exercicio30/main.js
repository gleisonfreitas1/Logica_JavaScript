function precificacao (){

    valor1 = parseFloat(document.getElementById("valor1").value)
    valor2 = parseFloat(document.getElementById("valor2").value)
    valor3 = parseFloat(document.getElementById("valor3").value)

    maior1 = valor1
   
   if(maior1 <= valor2){
        maior2 = maior1
        maior1 = valor2  
   }
   else{
        maior2 = valor2
   }

   if(maior1 <= valor3){
        maior3 = maior2
        maior2 = maior1
        maior1 = valor3   
   }
   else if(maior2 <= valor3){
        maior3 = maior2
        maior2 = valor3
   }
   else{
     maior3 = valor3
   }
   
   alert(
     "A ordem crecente dos valores é: " + maior3 +","+ maior2 +","+ maior1 +"."

   )

    
   
}
