function rand (min = 1, max = 3){
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random () * (max - min + 1) + min)
}

function esperaAi (msg, tempo){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            if (typeof msg !== 'string') reject ('O campo necessariament precisa ser uma string');
            resolve(msg);
        }, tempo);

    });
    
}

// esperaAi ('Buscando BD', rand())
//     .then ((resposta) =>{
//         console.log (resposta);
//         return esperaAi ('Procurando usuário', rand())
//         .then ((resposta)=>{
//             console.log(resposta);
//             return esperaAi (99, rand())
//             .then ((resposta)=>{
//                 console.log('Mostrar usuario')
//             })
//         })
//     }).catch ((e)=>{
//         console.error (e)
//     })

async function execultaPromise(){
    try {
        const fase1 = await esperaAi ('Bucas no banco de dados', rand());
        console.log(fase1);
        const fase2 = await esperaAi ('Usuário encontrado', rand());
        console.log(fase2);
        const fase3 = await esperaAi ('Mostrar usuário', rand());
        console.log(fase3);
        console.log("consulta finalizada");
    } catch (error) {
      console.log(error);
    }
}

execultaPromise();