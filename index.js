let vitorias = 20
let derrotas = 5
let saldoVitorias = vitorias - derrotas    
if (saldoVitorias < 10) {
            console.log("O Herói tem saldo de " + saldoVitorias + " e está no nível Ferro");
        } 
        else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
            console.log("O Herói tem saldo de " + saldoVitorias + " e está no nível Bronze");
        }   
        else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
            console.log("O Herói saldo de " + saldoVitorias + " e está no nível Prata");
        } 
        else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
            console.log("O Herói tem saldo de " + saldoVitorias + " e está no nível Ouro");
        } 
        else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
            console.log("O Herói tem saldo de " + saldoVitorias + " e está no nível Diamante");
        } 
        else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
            console.log("O Herói tem saldo de " + saldoVitorias + " e está no nível Lendário");
        } 
        else {
            console.log("O Herói tem saldo de " + saldoVitorias + " e está no nível Imortal");
        }
        