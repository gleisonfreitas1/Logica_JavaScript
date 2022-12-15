function soma(){

    numero1 = parseInt(document.getElementById("primeiroValor").value);
    numero2 = parseInt(document.getElementById("segundoValor").value);

    auxiliar =  numero2
    numero2 = numero1
    numero1 = auxiliar 

    
    primeiroValor.value = numero1;
    segundoValor.value = numero2;
}