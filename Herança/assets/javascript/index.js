// Primeiro vamos criar um produto.
// Camiseta = cor, Caneca = material
function Produto (nome, preco){
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.aumento = function (valor){
    this.preco += valor
};
Produto.prototype.desconto = function (valor){
    this.preco -= valor
};

function Camiseta (nome, preco, cor){
    Produto.call(this, nome, preco);
    this.cor = cor;
}

Camiseta.prototype = Object.create (Produto.prototype);
Camiseta.prototype.constructor = Camiseta;



function Caneca (nome, preco, material){
    Produto.call (this, nome, preco);
    this.material = material;
};


Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

Caneca.prototype.aumento = function (percentual){
    this.preco = this.preco + (this.preco * (percentual/100));
}


const caneca01 = new Caneca ('Caneca Marcelo', 25, 'Porcelana');

caneca01.aumento(25);
console.log(caneca01);