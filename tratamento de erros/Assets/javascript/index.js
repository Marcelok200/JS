/*var num;
try {
    num=prompt('Digite um valor');
    if (num > 10){
        throw new Error("Valor invalido");
    }
    document.write("valor: "+num);

} catch (e) {
    document.write("ERRO: " + e.message);
}*/

function retonaHora(data){
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando uma instância de Date.');
    }

    if (!data){
        data = new Date ();
    }
    return data.toLocaleTimeString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });

}


try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retonaHora();
    console.log(hora)
}  catch (e) {
    // Tratar erro
    console.error(e); // Use console.error para imprimir o erro.
}finally{
    console.log('Tenha um bom dia');
}

