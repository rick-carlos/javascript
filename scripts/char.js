console.log("arquivo javascript carregando com sucesso");

const personagem = document.getElementById('personagem');
let posicao = 0;

function moverPersonagem(direction){
    posicao += direction;
    personagem.style.left = posicao + 'px';


}


document.addEventListener('keydown', function(event) {
    if (event.key === 'd' || event.key === 'D'){
        moverPersonagem(10);
    }
    else if (event.key === 'a' || event.key === 'A'){
        moverPersonagem(-10);
    }
});
