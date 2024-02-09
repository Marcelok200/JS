function retornaHora(segundos){
    const horaRetorno = new Date (segundos*1000)
    return horaRetorno.toLocaleTimeString('pt-BR',{
        hour12:false,
        timeZone: 'UTC'
    });
}


const container = document.querySelector('.container');
const relogio = container.querySelector('.relogio');
const pausar = container.querySelector('.pausar');
const zerar = container.querySelector('.zerar');

let segundos = 0;
let timer;

document.addEventListener ('click', function (e){
    const el = e.target;
    if(el.classList.contains('iniciar')){
        clearInterval (timer);
        iniciarRelogio();
        relogio.classList.remove('pausado')
    }

    if(el.classList.contains('pausar')){
        clearInterval (timer);
        relogio.classList.add('pausado')
    }

    if(el.classList.contains('zerar')){
        clearInterval (timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0;
        relogio.classList.remove('pausado')
        
    }
})

function iniciarRelogio(){
        timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = retornaHora(segundos);
    }, 1000);
}


