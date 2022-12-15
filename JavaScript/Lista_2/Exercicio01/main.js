function soma(){
anos = 0
meses = 0
dias = 0

anos = parseInt(document.getElementById("anos").value);
meses = parseInt(document.getElementById("meses").value);
dias = parseInt(document.getElementById("dias").value);



resultado = (anos*365)+(meses*30)+dias

alert(resultado)
}