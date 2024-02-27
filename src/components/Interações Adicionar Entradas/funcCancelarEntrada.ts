import { validaAvancoPreFormEntrada } from './verificaAvancoFormEntrada.js'
import { verificaEntrada } from './validaSubFormularioEntrada.js'
import { verificaInputsEntrada } from './validaSubFormularioEntrada.js'
import { resetarEntrada } from './funcResetarEntrada.js'

export function cancelaEntrada() {
    const btnVoltarInicio = document.querySelector('#bnt_inicio_card_addDinheiro') as HTMLDivElement

    btnVoltarInicio.addEventListener('click', () => {
        const data = document.querySelector('#input_data') as HTMLInputElement
        const titulo = document.querySelector('#input_titulo') as HTMLInputElement
        const opcao = document.querySelector('input[name="opcao_entrada"]:checked') as HTMLInputElement
        const valor = document.querySelector('#input_valor') as HTMLInputElement

        const formulario = document.querySelector('#formulario') as HTMLDivElement
        const btnsApagar = formulario.querySelectorAll('button')
        btnsApagar.forEach((input) => {
            input.style.display = 'none'
        })

        data.value = ""
        titulo.value = ""
        opcao.checked = false
        valor.value = ""

        resetarEntrada()
        verificaEntrada()
        verificaInputsEntrada()
        validaAvancoPreFormEntrada()
    })
}