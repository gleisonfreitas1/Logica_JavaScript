function precificacao (){

    valor1 = parseFloat(document.getElementById("valor1").value)
   
    if(valor1 > 0){
        alert("O numero informado é positivo")
    }
    else if(valor1 == 0){
        alert("O numero informado foi 0")
    }
    else{
        alert("O numero informado é negativo")
    }
    
}
