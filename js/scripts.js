const mario = document.querySelector('.mario')// selecionando  a classe do mario

const jump = () => {
    mario.classList.add('jump') // adicionando a classe jump para imagem "mario"
}


document.addEventListener('keydown', jump);
