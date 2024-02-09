function verificarvar(comparar){
    if (comparar === undefined || comparar=== null) {
        return "curto-circuito" ;
    }

    else{
        return "Tudo certo"
    }
    
}

let comparar=1;

console.log(verificarvar(comparar))