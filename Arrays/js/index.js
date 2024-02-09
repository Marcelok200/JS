// const numero = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const maior10 = [];
// for(let i = 0; i< numero.length; i++){
//     if(numero[i] >= 10){
//         maior10.push(numero[i]);
//     }
// }

// console.log(maior10);

// const funcaoFilter = numero.filter((valor)=>{
//     return valor > 10;
// });

// console.log(funcaoFilter)

const nomes = [
    {nome: 'Marcelo' , idade: 27},
    {nome: 'Gustavo' , idade: 29},
    {nome: 'Edu' , idade: 29},
    {nome: 'Edvan' , idade: 30},
    {nome: 'Talles' , idade: 28},
    {nome: 'Francisco' , idade: 34},
    {nome: 'Welligton' , idade: 28},

];

// const nomesFilter = nomes.filter ((valor)=>{
//     return valor.nome.length >= 5;
// });

const pessoaMaisCinquenta = nomes.filter((valor)=>{
    return valor.idade >= 29;
});

console.log(pessoaMaisCinquenta)
