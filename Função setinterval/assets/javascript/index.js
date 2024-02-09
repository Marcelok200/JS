function mostraHora(){
    let data = new Date ();
    return data.toLocaleTimeString('pt-BR',{
        hour12: false
    });
}

// Passando a função como um callback para setInterval
const timer = setInterval(function() {
    console.log(mostraHora());
}, 1000);

setTimeout(() => {
    clearInterval (timer);
}, 5000);

