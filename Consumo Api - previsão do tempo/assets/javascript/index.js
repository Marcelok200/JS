const containerPrincipal = document.querySelector('.container');
const formulario = containerPrincipal.querySelector('#formulario');
const btnEnvio = formulario.querySelector('#btnEnvio');

formulario.addEventListener('submit', prevenirEvento);

function prevenirEvento(e){
    e.preventDefault();
    temperatura();
}

function envioCep() {
    const inputCep = formulario.querySelector('#cep').value.replace(/\D+/g, "");
    const urlCep = `http://api.openweathermap.org/geo/1.0/zip?zip=${inputCep},BR&lang=pt_br&appid=8c8e46eab9f9c59522aaef7e6d5773b0`;

    return fetch(urlCep)
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao buscar dados do CEP');
        }
        return response.json();
    })
    .then (respostaJson =>{
        return respostaJson;
    })
    .catch(error => {
        console.error('Erro ao buscar dados do CEP:', error);
    });
}

function temperatura(){
    envioCep().then(cep => {
        const lat = cep.lat;
        const lon = cep.lon;
        const cidade = cep.name;
        const urlTemperatura = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=pt_br&appid=8c8e46eab9f9c59522aaef7e6d5773b0&units=metric`;

        fetch(urlTemperatura)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao buscar dados de temperatura');
            }
            return response.json();
        })
        .then(temperatura => {
            const resultadoPrevisao = containerPrincipal.querySelector('.resultadoPrevisao');
            const weather = [...temperatura.weather]
            resultadoPrevisao.innerHTML = `
                <div class="resultadosTemperatura">
                    <p>Temp. Atual: ${temperatura.main.temp}°C</p>
                    <p>Temp. Máxima: ${temperatura.main.temp_max}°C</p>
                    <p>Temp. Mínima: ${temperatura.main.temp_min}°C</p>
                </div>
                
                <h2>Clima atual na cidade de ${cidade}</h2>

                <div class = "clima">
                    <p>${weather[0].description}</p>
                    <img src = "https://openweathermap.org/img/wn/${weather[0].icon}@2x.png" alt = "Foto do tipo climatico">
                
                </div>`;
        })
        .catch(error => {
            console.error('Erro ao buscar dados de temperatura:', error);
        });
    })
    .catch(error => {
        console.error('Erro ao buscar dados do CEP:', error);
    });
}
