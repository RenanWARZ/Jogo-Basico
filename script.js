const mario = document.querySelector('.mario');  /*selecionando a class mario */
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump'); /* aqui ele está adicionando a class jump, para pode fazer a animação */

    setTimeout(() => {
        mario.classList.remove('jump'); /* aqui estamos removendo a animação assim que acabar de animar, ou seja, a hora que acabar os 500ms, ele remove e começa denovo */
    }, 800);
}

const loop = setInterval(() =>{
    
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const gameOverBtn = document.getElementById('gameOverBtn');
    
    if(pipePosition <= 150 && pipePosition > 0 && marioPosition < 100 ){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src='https://github.com/RenanWARZ/Jogo-Basico/blob/main/lose.gif?raw=true';
        mario.style.width ='155px'
        mario.style.marginLeft = '0px'


        clearInterval(loop);

        gameOverBtn.style.display = 'block';

        
    }

}, 10)
    document.addEventListener('keydown',jump); /* aqui colocamos para apertar uma tecla para pular */

    function restartGame() {
        location.reload();
    }