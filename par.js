const Listadepecas = ['pecas de teste', 'AB', 'pecas B']
    console.log("quantidade de caracteres"); // OK

    if (Listadepecas.length <=10){
    console.log('as peças podem ser cadastradas');
    }

    console.log('quantidade de caracteres')
    for (let index=0; index < Listadepecas.length; index++){
    const pecaatual = Listadepecas[index];
    if (pecasatual.length<3){
    console.log(pecaatual + 'apeça possui nome inferior a 3 caracteres e não pode ser encontrada')
    }
    else {
    console.log(pecaatual+':a peça pode ser cadastrada')
    }
 
    console.log('peso da peça');
    const pesodapecaemgramas = 50; 

            if(pesodapecaemgramas>=100){
                 console.log('peso suficiente')
            }
        else{
            console.log ('valor insulficiente')
            }