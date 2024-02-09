const elemento = [
    {tag: 'p', texto: 'Qualquer texto'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'footer', texto: 'Frase 4'},
];

const div = document.createElement('div');


for (let i = 0; i < elemento.length; i++ ){
    const {tag, texto}=elemento[i];
    const criarTag = document.createElement(tag);
    criarTag.innerHTML = texto;
    div.appendChild(criarTag);
    

}

const section = document.querySelector ('.container');
section.appendChild(div)