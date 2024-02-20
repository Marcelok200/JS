const containerPrincipal = document.querySelector('.container');
const formulario = containerPrincipal.querySelector('#formulario');
const btnEnvio = formulario.querySelector('#btnEnvio');

formulario.addEventListener('submit', previnirEvento);

function previnirEvento(e){
    e.preventDefault();
    temperatura();
}

function envioCep() {
    const inputCep = formulario.querySelector('#cep').value.replace(/\D+/g, "");
    const urlCep = `http://api.openweathermap.org/geo/1.0/zip?zip=${inputCep},BR&appid=8c8e46eab9f9c59522aaef7e6d5773b0`;

    return fetch(urlCep)
    .then(response => response.json())
    .then (respostaJson =>{
        return respostaJson;
    });
}

function temperatura(){
    envioCep().then(cep => {
        const lat = cep.lat;
        const lon = cep.lon;
        const cidade = cep.name
        const urlTemperatura = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=8c8e46eab9f9c59522aaef7e6d5773b0`;

        fetch(urlTemperatura)
        .then(response => response.json())
        .then(temperatura => console.log(temperatura));
        console.log(cidade);
    });
}
