function meuEscopo() {
    const form = document.querySelector('.form_dados_pessuais');
    const resultado = document.querySelector('.resultado');

    const dados_pessoais = [];
    form.addEventListener('submit', receberEventoForm);

        function receberEventoForm(evento) {
            evento.preventDefault();
            const nome = form.querySelector('.nome').value;
            const sobrenome = form.querySelector('.sobrenome').value;
            const peso =form.querySelector('.peso').value;
            const altura = form.querySelector('.altura').value;
            
            dados_pessoais.push(
                {
                    nome: nome,
                    sobrenome: sobrenome,
                    peso: peso,
                    altura: altura
                }
            )


            resultado.innerHTML += `<p>${nome}  ${sobrenome} ${peso} ${altura}</p>`; 

        }
    
}

meuEscopo();