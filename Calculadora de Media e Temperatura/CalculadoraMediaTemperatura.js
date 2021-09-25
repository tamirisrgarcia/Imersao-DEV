function media(){
    let nome = document.querySelector('#nome').value;
    let primeiraNota = Number(document.querySelector('#primeiraNota').value);
    let segundaNota =  Number(document.querySelector('#segundaNota').value);
    let terceiraNota = Number(document.querySelector('#terceiraNota').value);
    let quartaNota =   Number(document.querySelector('#quartaNota').value);
    
    let notaFinal = (primeiraNota+segundaNota+terceiraNota+quartaNota)/4;
    let nota = notaFinal.toFixed(1);
    
    if (nota < 7) {
      document.querySelector('.result').innerHTML = `Olá, ${nome}. Sua média final foi de: ${nota}. Infelizmente você não atingiu a média mínima para aprovação. Continue estudando!`
    } else {
      document.querySelector('.result').innerHTML = `Olá, ${nome}. Sua média final foi de: ${nota}. Parabéns, você foi aprovado!`
    }
  }
  
  function convertF(){
    var tempF= document.getElementById("grauf").value;
    
   if(tempF.length === 0){
      document.getElementById("grauc").value = undefined;
       return;
   }
     
    var tempC = (Number(tempF) - 32) / 1.8;
      document.getElementById("grauc").value = tempC
  } 
  
  function convertC(){
    var tempC= document.getElementById("grauc").value;
    
    if(tempC.length === 0){
      document.getElementById("grauf").value = undefined;
       return;
    }
    
    var tempF = Number(tempC) * 1.8 + 32;
      document.getElementById("grauf").value = tempF;
  }  