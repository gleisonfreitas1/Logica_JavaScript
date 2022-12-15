function soma(){

    salarioAtual = parseInt(document.getElementById("salarioAtual").value);
    reajuste = parseInt(document.getElementById("reajuste").value);

    reajuste = reajuste*salarioAtual/100
    salarioNovo = reajuste + salarioAtual

    alert(
    salarioNovo
    )
}