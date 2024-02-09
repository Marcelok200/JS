// let list = ['maria', 'joão',   'Marcelo', 'Eduardo'];
// let fatia = list.slice(2,)

// console.log(fatia)


// const nome = list.join(' ')
// console.log(nome)
// const array = nome.split(' ');
// console.log(array)


// const numeros = [5,50,80,1,2,3,8,7,11,15,22,27];
// const novo = [];

// for(let i = 0; i< numeros.length; i++){
//     if(numeros[i] >= 10){
//         novo.push(numeros[i])
//     }
// }

// console.log(novo);

let pessoa = [
    {nome: 'Marcelo', idade: 27},
    {nome: 'Gustavo', idade: 28},
    {nome: 'Edvan', idade: 30},
    {nome: 'Edu', idade: 29},
    {nome: 'Francisco', idade: 34},
    {nome: 'Welligton', idade: 29}
];

const pessoasFilter = pessoa.filter((valor, indice)=>{
    valor.id = indice;
    valor.texte = 'Marcelo'
    return valor.idade > 27;
});



let temperaturasCelsius = [25, 32, 18, 40];

let temperaturasFahrenheit = temperaturasCelsius.map(temp => ({ celsius: temp, fahrenheit: (temp * 9/5) + 32 }));
// Output: [{ celsius: 25, fahrenheit: 77 }, { celsius: 32, fahrenheit: 89.6 }, { celsius: 18, fahrenheit: 64.4 }, { celsius: 40, fahrenheit: 104 }]

console.log(temperaturasFahrenheit)
