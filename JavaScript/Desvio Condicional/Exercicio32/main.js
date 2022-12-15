function precificacao (){

    gols_time1 = parseFloat(document.getElementById("gols_time1").value)
    gols_time2 = parseFloat(document.getElementById("gols_time2").value)
    time1 = document.getElementById("time1").value
    time2 = document.getElementById("time2").value

     

     if(gols_time1 > gols_time2){
          alert("O "+time1+" ganhou a partida de "+gols_time1+" a "+gols_time2)
     }
     else if(gols_time1 == gols_time2){
          alert("O "+time1+" teve um empate com o "+time2)
     }
     else{
          alert("O "+time2+" ganhou a partida de "+gols_time2+" a "+gols_time1) 
     };
}