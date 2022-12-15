function soma(){

total = parseInt(document.getElementById("total").value);
brancos = parseInt(document.getElementById("brancos").value);
nulos = parseInt(document.getElementById("nulos").value);
candidato1 = parseInt(document.getElementById("candidato1").value);
candidato2 = parseInt(document.getElementById("candidato2").value);
candidato3 = parseInt(document.getElementById("candidato3").value);
validos = total - brancos - nulos

candidato1 = candidato1/validos*100
candidato2 = candidato2/validos*100
candidato3 = candidato3/validos*100

validos = validos/total*100
brancos = brancos/total*100
nulos = nulos/total*100



document.write(
    total,"%", "<br>",
    validos,"%","<br>",
    brancos,"%", "<br>",
    nulos,"%","<br>","<br>",

    candidato1,"%","<br>",
    candidato2,"%","<br>",
    candidato3,"%","<br>"
    )
}