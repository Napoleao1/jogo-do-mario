


const mario = document.querySelector('.mario');// selecionando  a classe do mario

const jump = () => { 
    mario.classList.add('jump'); // adicionando a classe jump para imagem "mario
    
    setTimeout(() => {
    mario.classList.remove('jump');  

    }, 500)
}

const pipe = document.querySelector('.pipe');

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px',''); // conversão de string para number

    console.log(marioPosition);

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition <= 80){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);
    }

}, 10)


document.addEventListener('keydown', jump);