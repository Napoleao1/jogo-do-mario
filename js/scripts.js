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

    if(pipePosition <= 120){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
    }
}, 10)

document.addEventListener('keydown', jump);
