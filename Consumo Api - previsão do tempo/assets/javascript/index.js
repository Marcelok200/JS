const containerPrincipal = document.querySelector('.container');
const formulario = containerPrincipal.querySelector('#formulario');
const btnEnvio = formulario.querySelector('#btnEnvio');
const resultadoPrevisao = containerPrincipal.querySelector('.resultadoPrevisao');
const inputCep = formulario.querySelector('#cep');

formulario.addEventListener('submit', prevenirEvento);

let loading = false;

async function prevenirEvento(e) {
    e.preventDefault();
    if (!loading) {
        loading = true;
        mostrarMensagem('Aguarde...');
        try {
            await temperatura();
        } catch (error) {
            mostrarErro('Erro ao buscar dados: ' + error.message);
        }
        loading = false;
    }
}

async function envioCep() {
    const cep = inputCep.value.replace(/\D+/g, "");
    if (!cep) {
        throw new Error('Por favor, insira um CEP válido.');
    }
    const urlCep = `http://api.openweathermap.org/geo/1.0/zip?zip=${cep},BR&lang=pt_br&appid=8c8e46eab9f9c59522aaef7e6d5773b0`;

    const response = await fetch(urlCep);
    if (!response.ok) {
        throw new Error('Erro ao buscar dados do CEP');
    }
    return await response.json();
}

async function temperatura() {
    const cep = await envioCep();
    const lat = cep.lat;
    const lon = cep.lon;
    const cidade = cep.name;
    const urlTemperatura = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=pt_br&appid=8c8e46eab9f9c59522aaef7e6d5773b0&units=metric`;

    const response = await fetch(urlTemperatura);
    if (!response.ok) {
        throw new Error('Erro ao buscar dados de temperatura');
    }
    const temperatura = await response.json();

    const weather = temperatura.weather ? [...temperatura.weather] : [];
    mostrarResultadoTemperatura(temperatura.main, cidade, weather);
}

function mostrarResultadoTemperatura(temperatura, cidade, weather) {
    resultadoPrevisao.innerHTML = `
        <div class="resultadosTemperatura">
            <p>Temp. Atual: ${temperatura.temp}°C</p>
            <p>Temp. Máxima: ${temperatura.temp_max}°C</p>
            <p>Temp. Mínima: ${temperatura.temp_min}°C</p>
        </div>
        
        <h2>Clima atual na cidade de ${cidade}</h2>

        <div class="clima">
            ${weather.length ? `
                <p>${weather[0].description}</p>
                <img src="https://openweathermap.org/img/wn/${weather[0].icon}@2x.png"
                    alt="Foto do tipo climático">
            ` : ''}
        </div>`;
}

function mostrarMensagem(mensagem) {
    resultadoPrevisao.innerHTML = `<div>${mensagem}</div>`;
}

function mostrarErro(mensagem) {
    resultadoPrevisao.innerHTML = `<div style="color: red;">${mensagem}</div>`;
}
