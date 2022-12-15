function precificacao (){

    valor1 = parseFloat(document.getElementById("valor1").value)
    valor2 = parseFloat(document.getElementById("valor2").value)
    valor3 = parseFloat(document.getElementById("valor3").value)

    maior_valor.value = valor1
   
    if(maior_valor.value < valor2){
        
        maior_valor.value = valor2

        if(maior_valor.value < valor3){
            maior_valor.value = valor3
        }
        
    }else if (maior_valor.value < valor3){
        maior_valor = valor3
    }
   

    
   
}
