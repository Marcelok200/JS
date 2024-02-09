function criarCalculadora(){
    return {
        display: document.querySelector('.display'),


        iniciar(){
            this.mostrarNum()
            this.resultadoEnter()

        },

        mostrarNum(){
            document.addEventListener('click', (e)=> {
                const el = e.target;
                if(el.classList.contains('btn_Num')){
                    this.btnParaDisplay(el.innerText) ;
                   
                }

                if(el.classList.contains('btn_Clean')){
                    this.display.value = "" ;
                   
                }

                if(el.classList.contains('btn_del')){
                    this.apagarUm();
                }
                if (el.classList.contains('btn_eq')){
                    this.resultado();
                }
            })
        },

        apagarUm(){
            this.display.value = this.display.value.slice(0,-1)
        },

        btnParaDisplay(valor){
            this.display.value += valor;
        },

        resultado(){
            let conta = this.display.value;
            try {
                conta = eval(conta);
                if (!conta){
                    alert('Valor invalido');
                }
            this.display.value = String(conta)
            } catch (error) {
                alert('Valor invalido')
            }
        },

        resultadoEnter(){
            document.addEventListener('keyup', (e)=>{
                if(e.keyCode === 13){
                    this.resultado()
                }
            })
        }


    }

}

const Calculadora = criarCalculadora();
Calculadora.iniciar();


