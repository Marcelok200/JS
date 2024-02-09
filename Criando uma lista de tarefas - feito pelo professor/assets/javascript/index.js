const inputTarefa = document.querySelector('.input-nova-tarefa');
const btnTarefa = document.querySelector('.btn-add-tarefa');
const tarefas = document.querySelector('.tarefas');



function criaLi(){
    const li = document.createElement ('li');
    return li
}

function limparInput(){
    inputTarefa.value = " ";
    inputTarefa.focus();

}

inputTarefa.addEventListener('keypress', function(e){
     if (e.keyCode === 13){
        if (inputTarefa.value === "") return
        criaTarefa(inputTarefa.value)
        limparInput()
    }
})

function criaTarefa(textoInput){
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild (li)
    limparInput();
    criarBtnApagar (li);
    salvarTarefas();


}

function criarBtnApagar (li){
    li.innerText += " "
    const btnApagar = document.createElement ('button');
    btnApagar.innerText = "Apagar"
    li.appendChild (btnApagar);
    // btnApagar.classList.add ('apagar')
    btnApagar.setAttribute ('class', 'apagar')



}

document.addEventListener ('click', function (e){
    const el = e.target;
    if (el.classList.contains ('apagar')){
        el.parentElement.remove()
        salvarTarefas()
    }
})

btnTarefa.addEventListener ('click', function (){
    if (!inputTarefa.value) return
    criaTarefa(inputTarefa.value)
})

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li')
    const listaDeTarefas = [];
    for (let tarefa of liTarefas){
        let tarefasText = tarefa.innerText;
        tarefasText = tarefasText.replace('Apagar', '').trim() ;
        listaDeTarefas.push(tarefasText);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
    for(let tarefas of listaDeTarefas){
    criaTarefa(tarefas);

    }
}

adicionaTarefasSalvas()