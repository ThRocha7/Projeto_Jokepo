var escolheuPedra = document.querySelector('#pedra');
var escolheuPapel = document.querySelector('#papel');
var escolheuTesoura = document.querySelector('#tesoura');
var exibirJogada = document.querySelector('#jogadaPc');
var jogadaPlayer

var imagemPedra = document.createElement('img');
imagemPedra.src = 'imagens/pedra.png';
var imagemPapel = document.createElement('img');
imagemPapel.src = 'imagens/papel.png';
var imagemTesoura =  document.createElement('img');
imagemTesoura.src = 'imagens/tesoura.png';

var txtVitoria = document.createElement('p');
var msmVitoria = document.createTextNode('Você ganhou!');
txtVitoria.appendChild(msmVitoria);

var txtDerota = document.createElement('p');
var msmDerota = document.createTextNode('Você perdeu!');
txtDerota.appendChild(msmDerota);

var txtEmpate = document.createElement('p');
var msmEmpate = document.createTextNode('Ninguém ganhou!');
txtEmpate.appendChild(msmEmpate);

escolheuPedra.addEventListener('click', ()=> {
    jogadaPlayer = 0;
    var escolhaPc = jogadaPc();
    lgcJogo(escolhaPc, jogadaPlayer);
})

escolheuPapel.addEventListener('click', ()=> {
    jogadaPlayer = 1;
    var escolhaPc = jogadaPc();
    lgcJogo(escolhaPc, jogadaPlayer);
})

escolheuTesoura.addEventListener('click', ()=> {
    jogadaPlayer = 2;
    var escolhaPc = jogadaPc();
    lgcJogo(escolhaPc, jogadaPlayer);
})

function jogadaPc(){
    const numRandom = Math.floor(Math.random() * 3)
    if(numRandom == 0){
        exibirJogada.appendChild(imagemPedra);
    } else if(numRandom == 1){
        exibirJogada.appendChild(imagemPapel);
    } else{
        exibirJogada.appendChild(imagemTesoura);
    }
    return numRandom
}

function lgcJogo(numRandom, jogadaPlayer){
    if(jogadaPlayer == 0 && numRandom == 0){
        exibirJogada.appendChild(txtEmpate);
    } 
    else if(jogadaPlayer == 0 && numRandom == 1){
        exibirJogada.appendChild(txtDerota);
    }  
    else if(jogadaPlayer == 0 && numRandom == 2){
        exibirJogada.appendChild(txtVitoria);
    } 
    else if(jogadaPlayer == 1 && numRandom == 0){
        exibirJogada.appendChild(txtVitoria);
    } 
    else if(jogadaPlayer == 1 && numRandom == 1){
        exibirJogada.appendChild(txtEmpate);
    } 
    else if(jogadaPlayer == 1 && numRandom == 2){
        exibirJogada.appendChild(txtDerota);
    } 
    else if(jogadaPlayer == 2 && numRandom == 0){
        exibirJogada.appendChild(txtDerota);
    } 
    else if(jogadaPlayer == 2 && numRandom == 1){
        exibirJogada.appendChild(txtVitoria);
    } else if(jogadaPlayer == 2 && numRandom == 2){
        exibirJogada.appendChild(txtEmpate);
    }
}