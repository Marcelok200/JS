const btnCarregarApi = document.querySelector('.carregarAPI');
const id__Pokemon = document.querySelector('#cod__pokemon');
const btnPrevent = document.querySelector('.prevent');
const btnNext = document.querySelector('.next');
const nomePokemon = document.querySelector('.nome__Pokemon');
const condPokemon = document.querySelector('.id__pokemon');

let contador = 1; // Inicializa o contador com 1

btnPrevent.addEventListener('click', () => {
    if (id__Pokemon.value !== "") {
        const valorPokemon = parseInt(id__Pokemon.value); // Convertendo o valor do campo para um número inteiro
        if (!isNaN(valorPokemon)) { // Verifica se o valor é um número
            contador = valorPokemon; // Atualiza o contador com o valor do campo
        }
    }
    id__Pokemon.value = "";
    contador--
    carregarAPI(contador)
});

btnNext.addEventListener('click', () => {
    if (id__Pokemon.value !== "") {
        const valorPokemon = parseInt(id__Pokemon.value); // Convertendo o valor do campo para um número inteiro
        if (!isNaN(valorPokemon)) { // Verifica se o valor é um número
            contador = valorPokemon; // Atualiza o contador com o valor do campo
        }
    }
    id__Pokemon.value = "";
    contador++
    carregarAPI(contador);
});



btnCarregarApi.addEventListener('click', () => {
    contador = 1

    carregarAPI(id__Pokemon.value);

});

function carregarAPI(valor) {
    const url = `https://pokeapi.co/api/v2/pokemon/${valor}`;
    fetch(url)
        .then(resposta => {
            if (!resposta.ok) {
                throw new Error('A API não foi carregada com sucesso!');
            }
            return resposta.json();
        })
        .then(jsonConvertido => {
            condPokemon.innerText = jsonConvertido.id;
            nomePokemon.innerText = jsonConvertido.name.toUpperCase();
            let img = jsonConvertido.sprites.front_default;
            document.querySelector('.img__Pokemon').setAttribute('src', img);
            console.log(jsonConvertido);
        })
        .catch(erro => {
            console.error(erro);
        });
}

// Carrega a API quando a página é carregada
document.addEventListener('DOMContentLoaded', () => {
    carregarAPI(contador);
});
