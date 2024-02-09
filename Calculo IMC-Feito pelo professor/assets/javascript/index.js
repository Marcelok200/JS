const form = document.querySelector('#formulario');
form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso')
    const inputAltura = e.target.querySelector('#altura')

    const peso = Number(inputPeso.value);
    const altura  = Number(inputAltura.value);
    console.log(peso, altura);

    if(!peso){
        setResultado('Peso inválido', false );
        return;
    }

    if(!altura){
        setResultado('Altura inválido', false );
        return;
    }

    const imc = getImc(peso , altura);
    const nivelImc = getNivelImc (imc);

    const msg = `Seu IMC é ${imc} (${nivelImc}).`;

    setResultado(msg, true);

    console.log(imc, nivelImc)
   


});

function getNivelImc (imc){
    const resultados_imc = ['Abaixo do peso','Peso normal','Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

        if( imc>=39.9) return resultados_imc[5];
        if (imc>=34.9) return resultados_imc[4];
        if (imc>=29.9) return resultados_imc[3];
        if (imc>=24.9) return resultados_imc[2];
        if (imc>=18.5) return resultados_imc[1];
        if (imc<=18) return resultados_imc[0];

}

function getImc(peso, altura){
    const imc=peso/ altura**2
    return imc.toFixed(2);
}

function criaP(){
    const p = document.createElement('p');
    return p;
}



function setResultado(msg, isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaP();

    if (isValid){
        p.classList.remove('CorVermelho');
        p.classList.add('paragra_resultado');
    }else{
        p.classList.add('CorVermelho');
    }

    p.innerHTML= msg
    resultado.appendChild(p);
    
}