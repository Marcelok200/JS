const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColor = estilosBody.backgroundColor;


for (let i = 0; i< ps.length; i++){
    ps[i].style.backgroundColor = backgroundColor;
    ps[i].style.color = 'white';
}