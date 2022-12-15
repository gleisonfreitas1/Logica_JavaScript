function precificacao (){

    horas_trab = parseFloat(document.getElementById("horas_trab").value)
    salario_hora = parseFloat(document.getElementById("salario_hora").value)

    horas_extras = horas_trab - 160

    if(horas_extras == 0 ){
        salario_final.value = horas_trab * salario_hora
    }
    else{
        salario_extra = horas_extras*salario_hora + salario_hora*50/100
        salario_final.value = (horas_trab-horas_extras)*salario_hora + horas_extras*(salario_hora + salario_hora*50/100)
        
    }

    
}
