// // new object -> Object.prototype

// const objA = {
//     chaveA: 'A'
//     // __proto__: Object.prototype
// };

// const objB = {
//     chaveB: 'B'
//     // __proto__: objA
// };


// const objC = new Object();
// objC.chaveC = 'C';

// Object.setPrototypeOf (objB, objA);
// Object.setPrototypeOf (objC, objB);
// console.log(objC.chaveB)


function Produto (nome, preco){
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.desconto = function (percentual){
    this.preco = this.preco - (this.preco * (percentual/100))
};

Produto.prototype.aumento = function (percentual){
    this.preco = this.preco + (this.preco * (percentual/100))
};

const prod01 = new Produto('Guarda-Roupas', 1500);


const prod02 = {
    nome: 'Caneca',
    preco: 49
}

Object.setPrototypeOf(prod02, Produto.prototype)

const prod03 = Object.create(Produto.prototype);
prod03.preco = 150

prod03.aumento(10);

console.log(prod03)