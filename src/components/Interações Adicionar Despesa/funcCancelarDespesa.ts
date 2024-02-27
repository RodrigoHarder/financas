import { validaAvancoPreFormDespesa } from "./validaAvancoPreFormDespesa.js"
import { verificaDespesa } from "./validaSubFormularioDespesa.js"
import { verificaInputsDespesa } from "./validaSubFormularioDespesa.js"
import { resetarDespesa } from "./funcResetarDespesa.js"

export function cancelaDespesa() {
    const btnVoltarInicio = document.querySelector('#bnt_inicio_card_addDespesa') as HTMLDivElement

    btnVoltarInicio.addEventListener('click', () => {
        const data = document.querySelector('#input_data') as HTMLInputElement
        const titulo = document.querySelector('#input_titulo') as HTMLInputElement
        const opcao = document.querySelector('input[name="opcao_despesa"]:checked') as HTMLInputElement
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

        validaAvancoPreFormDespesa()
        verificaDespesa()
        verificaInputsDespesa()
        resetarDespesa()
    })
}
