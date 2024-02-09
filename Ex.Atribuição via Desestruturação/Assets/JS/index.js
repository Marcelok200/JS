// const array = [1, 2];
// const [n1, n2] = array;
// console.log(n1,n2);

// const person = {
//     nome: 'Alice',
//     age: '30'
// }

// const {nome, age: idade}=person;
// console.log(nome, idade);

// const arrayAni = [1, [2 , 3], 4];
// // const [, [um, dois]] =arrayAni;
// const [pos1, pos2, pos3]= arrayAni;

// console.log(pos2[1]);

// Desestruture o objeto e atribua as variáveis firstName, lastName e age aos valores correspondentes dentro do objeto nestedObject.
const nestedObject = {
    person: {
      firstName: 'John',
      lastName: 'Doe',
      age: 25
    }
  };

  const {person:{firstName, lastName}}=nestedObject;
  console.log(firstName, lastName)