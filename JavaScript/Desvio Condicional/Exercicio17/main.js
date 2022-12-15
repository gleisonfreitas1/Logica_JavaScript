function precificacao (){

    nota_1 = parseFloat(document.getElementById("nota_1").value)
    nota_2 = parseFloat(document.getElementById("nota_2").value)
    
    nota_final.value = (nota_1 + nota_2)/2

    if(nota_final.value >= 6){
        alert("Parabens você passou de ano")
    }
    else{
        alert("infelismente você reprovou de ano")
    }
   
}
