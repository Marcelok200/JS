const containerPrincipal = document.querySelector('.container');

const formularioIMC = containerPrincipal.querySelector('.form_imc');

const inputPeso = formularioIMC.querySelector('.peso')
const inputAltura = formularioIMC.querySelector('.altura');

const resultadoMessage = document.querySelector('#resultado');

formularioIMC.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log ('Evento previnido')

    resultadoIMC ()

    if(!inputPeso.value){
        inputVazio('Peso invalido.', false)
        return
    }

    if(!inputAltura.value){
        inputVazio('Altura invalido.', false)
        return
    }



});

function resultadoIMC (){
    const imcMessage = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
    const p = criaP();
    resultadoMessage.innerHTML = '';

    const imcValue = calculoImc(inputPeso, inputAltura)

    if ( imcValue > 40){
        p.textContent = `Seu imc é ${imcValue} e você está com ${imcMessage[5]}`
        p.classList.add('errMessage');
        resultadoMessage.appendChild (p)
    }

    else if (imcValue > 35){
        p.textContent = `Seu imc é ${imcValue} e você está com ${imcMessage[4]}`
        p.classList.add('errMessage');
        resultadoMessage.appendChild (p)
    }

    else if (imcValue > 30){
        p.textContent = `Seu imc é ${imcValue} e você está com ${imcMessage[3]}`
        p.classList.add('errMessage');
        resultadoMessage.appendChild (p)
    }

    else if (imcValue > 25){
        p.textContent = `Seu imc é ${imcValue} e você está com ${imcMessage[2]}`
        p.classList.add('valorAceitavel');
        resultadoMessage.appendChild (p)
    }
    else if (imcValue > 18.5){
        p.textContent = `Seu imc é ${imcValue} e você está ${imcMessage[1]}`
        p.classList.add('valorAceitavel');
        resultadoMessage.appendChild (p)
    }else{
        p.textContent = `Seu imc é ${imcValue} e você está ${imcMessage[0]}`
        p.classList.add('errMessage');
        resultadoMessage.appendChild (p)
    }

}

function calculoImc (inputPeso, inputAltura){
    const peso =parseFloat( inputPeso.value);
    const altura = parseFloat ( inputAltura.value);
    const imc = peso / (altura*altura);
    return imc
}

const criaP = ()=>{
    const ps = document.createElement('p')
    return ps
}

function inputVazio (message, isvalid){
    const p = criaP();
    resultadoMessage.innerHTML = '';
    if(isvalid === false){
        p.textContent = message
        p.classList.add('errMessage');

        resultadoMessage.appendChild (p)

    }
}