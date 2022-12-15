function precificacao (){

    valor1 = parseFloat(document.getElementById("valor1").value)
    valor2 = parseFloat(document.getElementById("valor2").value)
    
    if (valor1 > valor2){
        maior_valor.value = valor1
    }
    else{
        maior_valor.value = valor2
    }   

}
