function criarCalculadora(){
    return {
        display: document.querySelector('.display'),


        inicia(){
            this.cliqueBotoes();
            this.realizaContaEnter();
        },
        apagaUm(){
            this.display.value = this.display.value.slice(0,-1)
        },

        realizaConta(){
            let conta = this.display.value;


            
            try {
                conta = eval(conta);
                    if(!conta){
                    alert ('Conta inválida')
                    return;
                }
                this.display.value = String(conta);
            }catch(e){
                alert('Conta inválida');
                return;

            }

        },
        realizaContaEnter(){
            this.display.addEventListener('keyup', (e)=>{
                if(e.keyCode === 13){
                    this.realizaConta()
                }
            })
        },
        cliqueBotoes(){
            document.addEventListener('click',e =>{
                const el = e.target;
                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')){
                    this.display.value = "";
                }

                if(el.classList.contains('btn-del')){
                    this.apagaUm();
                }

                if(el.classList.contains('btn-eq')){
                    this.realizaConta();
                }

            })
        },
        btnParaDisplay(valor){
            this.display.value += valor;
        }
    }
}
const calculadora = criarCalculadora();
calculadora.inicia();