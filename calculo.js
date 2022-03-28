 var n1 = 5;
 var n2 = 5;
 var n3 = 5;
 var n4 = 8;
 var total;
 var media = 4;
 var numero = 1;

//total = ((n1+n2+n3+n4)/media);

// if (total >= 7){
 //    console.log("Aprovado " + total);

// } else if (total >= 5 && total <= 7){
 //   console.log("Recuperação " + total);
// }

// else {
 //   console.log("Reprovado " + total);
 //}

 for(let numero = 1; numero <=10; numero ++){
    console.log(numero);}

    console.log("quantidade de caracteres");
 //total = n1 + n2;
 //total = n1 - n2;
 //total = n1 * n2;
 //total = n1 / n2;
 // total = n1 + n2 / n1;
 //total = n1 % n2;
 //total = n1 ** n2;
 //var soma = n1 + n2 + n3 + n4 ;
 //total = soma / 4;
 //console.log(total)



 var pecasatual = 2;
 var pecaatual = 0;
 var pesodapecaemgramas = 50; 

 if (Listadepecas <= 10){
 console.log("as peças podem ser cadastradas"); //ok
 }

 console.log("quantidade de caracteres"); //ok







 for (let index=0; index < Listadepecas; index++)
 {
 var pecaatual = Listadepecas[index]; 

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
       