/*const container = document.querySelector ('.container');
const form = container.querySelector('#Formulario');
form.addEventListener('submit', envioForm);
function envioForm(e){
    e.preventDefault();

    const num01 =parseFloat ( form.querySelector('#N01').value);
    const num02 =parseFloat ( form.querySelector('#N02').value);
    
    const maior = (MaiorNum(num01, num02))

    const maiorNum =criarelemento();
    maiorNum.innerHTML = `O maior n umero digitado é ${maior}`;
    container.appendChild(maiorNum)


}

function MaiorNum (num01, num02){
    return Math.max(num01, num02);
}

function criarelemento(){
    const p = document.createElement('p');
    return p;
}*/

/*
function ePaisagem (largura , altura){
    return largura > altura? `Está no modo paisagem`: `Está no modo retrato`;
}

console.log (ePaisagem(10, 15));

*/



function fizzBuzz (Num){
    if (Num % 5 === 0 && Num % 3 === 0){
        return 'FizzBuzz';
    }
    if (Num % 3 === 0){
         return 'Fizz';
    }

    if (Num % 5 === 0){
        return 'Buzz';
    }
    
    return Num;


}

console.log (fizzBuzz(15))

for(let i = 0; i< 100; i++){
    console.log (i, fizzBuzz(i))
}
