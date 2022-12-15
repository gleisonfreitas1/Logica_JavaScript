function precificacao (){

    quant_estoque = parseFloat(document.getElementById("quant_estoque").value)
    quantidade_max = parseFloat(document.getElementById("quantidade_max").value)
    quantidade_min = parseFloat(document.getElementById("quantidade_min").value)

    media = (quantidade_max + quantidade_min)/2

    if (quant_estoque < media){
        alert("Seu estoque esta a baixo da media, você deveria comprar mais produtos.")
    }
    else{
        alert("Não é necessario efetuar compras para o estoque.")
    }
    
}
