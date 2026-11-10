const numeroSenha = document.queryselector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.queryselectorAll('.parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentarTamanho;

function diminuiTamanho(){
    if (tamanhoSenha > 1){
            //tamanhoSenha = tamanhoSenha = -1;
            tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}
function aumentaTamanho(){
    if (tamanhoSenha < 20){
         //tamanhoSenha = tamanhoSenha+1
         tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    gerarSenha();
}

const campoSenha = document.querySelector('#campoSenha');
const chec

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
geraSenha();

function geraSenha() {
    let senha = '';
    for(let i = 0; < tamanhoSenha;++){
        let numeroAleatorio = Math.random()*letrasMaiusculas.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + letrasMaiusculas[numeroAleatorio];
    }  
}

campoSenha.value = senha;


