const sectionPrincipal = document.querySelector ('#container');
const dataCompleta =sectionPrincipal.querySelector('h1');
dataCompleta.innerHTML = "";
const data = new Date();

const diaSemana = data.getDay();

const mes = data.getMonth();


function diaSemanaFuncao (diaSemana){
        let diaSemanaTexto;
        switch (diaSemana){
            case 0:
                diaSemanaTexto = 'Domingo';
                return diaSemanaTexto;
        

            case 1:
                diaSemanaTexto = 'Segunda-Feira';
                return diaSemanaTexto;

            case 2:
                diaSemanaTexto = 'Terça-Feira';
                return diaSemanaTexto;

            case 3:
                diaSemanaTexto = 'Quarta-Feira';
                return diaSemanaTexto;

            case 4:
                diaSemanaTexto = 'Quita-Feira';
                return diaSemanaTexto;
                
            case 5:
                diaSemanaTexto = 'Sexta-Feira';
                return diaSemanaTexto;

            case 6:
                diaSemanaTexto = 'Sábado';
                return diaSemanaTexto;

            default:
                diaSemanaTexto = 'Dia invalido';
                return diaSemanaTexto;
        
    }


}

function verMes(mes){
    const mesAtual = mes;
    const listMes = ['Janeiro', 'Fevereiro', 'Março', 'Abri', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return listMes[mesAtual];
}

function zeroEsquerda(data){
    return data  >= 10? data : `0${data}` 

}




dataCompleta.innerHTML = `${diaSemanaFuncao(diaSemana)}, ${data.getDate()} de ${verMes(mes)}  de  ${data.getFullYear()} ${zeroEsquerda(data.getHours())}:${zeroEsquerda (data.getMinutes())}`;

