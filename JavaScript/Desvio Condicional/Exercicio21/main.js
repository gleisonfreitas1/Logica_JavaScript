function precificacao (){

    inicio = parseFloat(document.getElementById("inicio").value)
    final = parseFloat(document.getElementById("final").value)
    
    periodo = final - inicio

    if(periodo < 0 ){
        duracao.value = periodo + 24
    }
    else{
        duracao.value = periodo
    }

    
}
