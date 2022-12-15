function soma(){

total = parseInt(document.getElementById("total").value);
brancos = parseInt(document.getElementById("brancos").value);
nulos = parseInt(document.getElementById("nulos").value);
validos = total - brancos - nulos

validos = validos/total*100
brancos = brancos/total*100
nulos = nulos/total*100

document.write(
    total,"%", "<br>",
    validos,"%","<br>",
    brancos,"%", "<br>",
    nulos,"%"
    )
}