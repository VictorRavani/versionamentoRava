    var Listadepecas = 5; 
    console.log("quantidade de caracteres"); //ok

    var pecasatual = 2;
    var pecaatual = 0;
    var pesodapecaemgramas = 50; 
   
    if (Listadepecas <= 10){
    console.log("as peças podem ser cadastradas"); //ok
    }
   
    console.log("quantidade de caracteres"); //ok

    for (let index=0; index < Listadepecas; index++){
      var pecaatual = Listadepecas + index; 
    }
      if (pecasatual.length < 3){
      console.log(pecaatual + "apeça possui nome inferior a 3 caracteres e não pode ser encontrada");
      }


      else {
          console.log(pecaatual + ":a peça pode ser cadastrada");
          }
          console.log("peso da peça");
         
                  if(pesodapecaemgramas>=100){
                       console.log("peso suficiente!");
                     }
                  else{
                     console.log ("valor insulficiente");
                  }