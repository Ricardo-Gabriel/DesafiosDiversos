let vitoria = 101;
let derrota = 0;


function defineRank(vitoria,derrota){
    
    let pontosRank = vitoria - derrota
    if(pontosRank <=10){
        console.log(`O Herói tem de saldo de ${pontosRank} está no nível de Ferro`);
    }else if(pontosRank <=20){
        console.log(`O Herói tem de saldo de ${pontosRank} está no nível de Bronze`);
    }else if(pontosRank <=50){
        console.log(`O Herói tem de saldo de ${pontosRank} está no nível de Prata`);
    }
    else if(pontosRank <=80){
        console.log(`O Herói tem de saldo de ${pontosRank} está no nível de Ouro`);
    }
    else if(pontosRank <=90){
        console.log(`O Herói tem de saldo de ${pontosRank} está no nível de Diamante`);
    }
    else if(pontosRank <=100){
        console.log(`O Herói tem de saldo de ${pontosRank} está no nível de Lendário`);
    }
    else if(pontosRank >100){
        console.log(`O Herói tem de saldo de ${pontosRank} está no nível de Imortal`);
    }
    
}

defineRank(vitoria,derrota)
