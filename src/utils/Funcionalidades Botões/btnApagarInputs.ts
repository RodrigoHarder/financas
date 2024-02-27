import { verificaEntrada } from '../../components/Interações Adicionar Entradas/validaSubFormularioEntrada.js'

export function btnApagar() {
    const cardAddEntradaCardAddDespesas = [...document.querySelectorAll('#card_addEntrada'), ...document.querySelectorAll('#card_addDespesa')] as HTMLDivElement[]

    cardAddEntradaCardAddDespesas.forEach((evento) => {
        const formulario = evento.querySelector('#formulario') as HTMLDivElement
        const inputsFormulario = formulario.querySelectorAll('input')
        const btnsApagar = formulario.querySelectorAll('button')
    
        inputsFormulario.forEach((input, index) => {
            input.addEventListener('input', () => {
    
                btnsApagar[index].style.display = 'block'
    
                if (input.value === '' || input.value === 'R$ 0,00' || input.value === 'R$ NaN') {
                    btnsApagar[index].style.display = 'none'
                }
            })
            input.addEventListener('anoInvalido', () => {
                btnsApagar[index].style.display = 'none'
            })
    
        })
    
        btnsApagar.forEach((button, index) => {
            button.addEventListener('click', () => {
                inputsFormulario[index].value = ''
                inputsFormulario[index].type = 'text'
                button.style.display = 'none'
                verificaEntrada()
            })
        })
    })
}