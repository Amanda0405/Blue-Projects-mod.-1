const prompt = require('prompt-sync')();
let candA = 0;
let candB = 0;
let candC = 0;
let votB = 0;
let votN = 0;
var res = "sim"
do{
    console.log("Olá, ")
    var res = prompt("Tem alguém para votar? ") 
       

let anoNascimento = +prompt("Digite seu ano de nascimento: ")
let voto = + prompt("Vote: '1' candidato A.\n'2' candidato B. '3' candidato C. \n'4' para votar em branco \n E '5' para anular seu voto. ")

var autorizacao = autorizaVoto(anoNascimento);


 function autorizaVoto(anoNascimento){
    var anoAtual = new Date().getFullYear();
    
    if(anoAtual - anoNascimento > 16){
        return "Voto obrigatorio";
    }
    else if(anoAtual - anoNascimento === 16){
       return "Voto opcional";
    }
    else if (anoAtual - anoNascimento < 16){ 
       return "Negado";
    }
}


function votacao(autorizacao, voto){
   
     
     if (voto == 1){
        candA = candA += 1;
        }
        else if (voto == 2){
        candB = candB += 1;
        }
        else if (voto == 3){
        candC = candC += 1;
        }
        else if (voto == 4){
        votB = votB += 1;
        }
        else if(voto == 5){
        votN = votN += 1;
        }  
        if(autorizacao === "Negado"){
            console.log("Você não pode votar");
        
             } else {
             
            } 
    }
votacao(autorizacao, voto);
} while (res === "sim");




let cands = [candA, candB, candC, votB, votN];

console.log(cands);
