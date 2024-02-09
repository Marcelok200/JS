
function enviarCor(){
    const container = document.querySelector ('.container');
const formulario = container.querySelector('#formulario');
const corEscolhida = formulario.querySelector('#corEscolhida').value;
document.body.style.backgroundColor = corEscolhida;
}