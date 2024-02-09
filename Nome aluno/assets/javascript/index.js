const nomeAluno = prompt('Digite Seu nome');
if (!nomeAluno){
  alert('Digite seu nome, para validar')
}

let idadeAluno = prompt ('Digite sua idade');
idadeAluno = parseFloat(idadeAluno).value
if (!idadeAluno){
    alert('Digite sua idade, para validar')
  }

if (idadeAluno >= 18){
    alert('Acesso permitido')
}else{
    alert('Acesso negado!')
}