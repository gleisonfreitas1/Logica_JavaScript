function precificacao (){

    saldo = parseFloat(document.getElementById("saldo").value)
    debitos = parseFloat(document.getElementById("debitos").value)
    credito = parseFloat(document.getElementById("credito").value)

    saldo_atual.value = saldo - debitos + credito

    if(saldo_atual.value < 0){
        alert("seu saldo está negativo, entre em contato para fazer uma negociação.")

    }
    else{
        alert("seu saldo está positivo.")
    }

    
}
