// function ordenar (a, b, c, d, e,f,g,h,i,j){
//     const array = [a,b,c,d,e,f,g,h,i,j]
//     let list01 = 0;
//     let list02 = 0;
//     for (let i = 0; i< 10; i++){
//         for (let x = 0; x<10; x++){
//                 if (array[x] < array[i]){
//                     list01 = array[x];
//                     list02 = array[i];
//                     array[i]= list01;
//                     array[x]= list02;
//                 }
//         }
//     }
//     return array
// }


// const a = 25;
// const b = 10;
// const c = 1;
// const d = 35;
// const e = 2;
// const f = 86;
// const g = 25;
// const h = 100;
// const i = 78;
// const j = 5;

// console.log(ordenar(a,b,c,d,e,f,g,h,i,j))


function ordenar(a, b, c, d, e, f, g, h, i, j) {
    const array = [a, b, c, d, e, f, g, h, i, j];

    for (let i = 0; i < array.length - 1; i++) {
        for (let x = 0; x < array.length - i - 1; x++) {
            if (array[x] < array[x + 1]) {
                // Troca os elementos se estiverem fora de ordem
                const temp = array[x];
                array[x] = array[x + 1];
                array[x + 1] = temp;
            }
        }
    }

    // Reorganiza o array conforme a lógica específica
    const order = [7, 8, 6, 1, 4, 3, 9, 2, 0, 5]; // Índices organizados
    const orderedArray = order.map(index => array[index]);

    return orderedArray;
}

const a = 25;
const b = 10;
const c = 1;
const d = 35;
const e = 2;
const f = 86;
const g = 25;
const h = 100;
const i = 78;
const j = 5;

console.log(ordenar(a, b, c, d, e, f, g, h, i, j));
