function precificacao (){

    quant_maca = parseFloat(document.getElementById("quantidade").value)
    console.log(quant_maca)

    if (quant_maca == 12){
        preco.value = quant_maca
    }
    else{
        preco.value = "R$ "+ quant_maca*1.3
    }

   
}
