let acumulador = 0;
for(let i = 100; i > 1; i--){
    let numString = i.toString();
    for(let y = numString.length; y >= 0; y--){
        if(numString[y] == 7 ){
            if (numString[y] != numString[y+1]){
                console.log(numString)
            }
            acumulador += 1;
            continue
        }

    }
    
}

console.log(acumulador)



