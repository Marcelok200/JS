const paragrafos = document.querySelector ('.paragrafos');
const ps = paragrafos.querySelectorAll ('p');

const estilosBody = getComputedStyle(document.body);
const backgroundBody = estilosBody.backgroundColor;
for (let valor of ps){
    valor.style.backgroundColor = backgroundBody;
    valor.style.color = 'white'
    valor.style.padding = '5px'
}
