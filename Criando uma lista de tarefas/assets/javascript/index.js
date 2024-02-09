const container = document.querySelector('.container');
const formulario = container.querySelector('.formulario');
const minhaLista = container.querySelector('.minhaLista');


formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionarItemLista();
});

function adicionarItemLista() {
    const itemLista = formulario.querySelector('#itemLista').value;
    if (!itemLista) return;
    const btn = criarbtn();
    const novoLi = criarLi();
    novoLi.innerHTML = itemLista;
    novoLi.appendChild(btn)
    minhaLista.appendChild(novoLi);

    btn.addEventListener('click', function(){
        novoLi.remove()
        
    })

    limparInput ();
}

function criarLi() {
    const li = document.createElement('li');
    return li;
}

function criarbtn() {
    const btn = document.createElement('button');
    btn.innerHTML = 'Apagar'
    btn.classList.add('btn_Apagar')
    return btn;
}

function limparInput (){
    const limparTarefas = formulario.querySelector('#itemLista');
    limparTarefas.value = ""
    limparTarefas.focus() 
}

function salvarItensLista(){
    const list = minhaLista.querySelectorAll('li');
    const arrayLista = [];
    for (let itensTarefas of list){
        let itensText = itensTarefas.innerText;
        arrayLista.push(itensText)
    }
    const tarefasJSON = JSON.stringify(arrayLista)
    localStorage.setItem('tarefas', tarefasJSON)

}

