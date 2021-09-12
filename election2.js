const prompt = require('prompt-sync')();
let candA = 0;
let candB = 0;
let candC = 0;
let votB = 0;
let votN = 0;

console.log("Olá, ");
let res = prompt("Tem alguém para votar? ");
while(res === "sim"){
console.log('');

console.log('');

if(res === "sim"){
  autorizaVoto()
}

  function autorizaVoto(anoNascimento){

  var anoAtual = 2021
  let cont = 2021 - anoNascimento

    if(cont >= 18){
        return "Voto obrigatorio";
    }
    else if(cont >= 16 && cont){
       return "Voto opcional";
    }
    else if (cont < 16){ 
       return "Negado";
    }
}

autorizaVoto(+prompt("Digite seu ano de nascimento: "));

if(autorizaVoto() === "Voto obrigatorio"){
  votacao();
}else if(autorizaVoto === "Voto opcional"){
  let pergunta = prompt("Voce quer votar sim ou nao?");
  if (pergunta === "sim"){
    votacao()
  }
}
votacao(autorizaVoto);
function votacao(autorizacao, voto){

console.log(`Vote e dê enter para continuar:\n'1' candidato A.\n'2' candidato B.\n'3' candidato C.\n'4' para votar em branco\nE '5' para anular seu voto\n`)

     var voto = +prompt("Digite a opção escolhida: ");

     if (voto == 1){
        candA++
        }
        else if (voto == 2){
        candB++
        }
        else if (voto == 3){
        candC++
        }
        else if (voto == 4){
        votB++
        }
        else if(voto == 5){
        votN++
        }
        if(autorizacao === "Negado"){
            console.log("Você não pode votar");

             } else {
            } 
          }

res = prompt("Tem mais alguem para votar?");


}
   function exibirResultados(){
     console.log('');
     console.log(`candidato A recebeu: ${candA} votos`);
     console.log(`candidato B recebeu: ${candB} votos`);
     console.log(`candidato C recebeu: ${candC} votos`);
     console.log(`Tivemos ${votN} votos nulos`);
     console.log(`Tivemos ${votB} votos brancos`);
     
    };

    exibirResultados();

    if(candA > candB && candA > candC){
        console.log(`Parabens com ${candA} votos o candidato A foi o vencedor das eleições`);
      }else if(candB > candA && candB > candC){
        console.log(`Parabens com ${candB} votos o candidato B foi o vencedor das eleições`);
      }else if(candC > candA && candC > candB){
        console.log(`Parabens com ${candC} votos o candidato C foi o vencedor das eleições`);
      } else if (candA === candB && candA === candC && candB === candC){
          console.log("Tivemos um empate!!")
      }
