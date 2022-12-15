function soma(){

    grausF = parseInt(document.getElementById("grausF").value);

    grausC = (grausF - 32)*(5/9)
    
    resposta.value = grausC;
}