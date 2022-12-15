function precificacao (){

    salario_inicial = parseFloat(document.getElementById("salario_inicial").value)
    valor_vendas = parseFloat(document.getElementById("valor_vendas").value)

    if(valor_vendas > 1500){

        comissao1 = 1500*3/100
        comissao2 = (valor_vendas-1500)*5/100
        salario_final.value = salario_inicial+comissao1+comissao2

    }

    
}
