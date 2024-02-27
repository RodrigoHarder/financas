import { criarElementosDespesa } from './criacaoDadosDespesa.js'
import { dados } from '../../types/dadosInputs.js'

const btnEnviarDespesa = document.querySelector('#btn_enviar_formulario_despesa') as HTMLButtonElement

import { formatoData } from '../../utils/Validações Formulários/validaData.js'
import { validaAvancoPreFormDespesa } from './validaAvancoPreFormDespesa.js'
import { verificaDespesa } from './validaSubFormularioDespesa.js'
import { verificaInputsDespesa } from './validaSubFormularioDespesa.js'
import { resetarDespesa } from './funcResetarDespesa.js'

export function enviarElementosDespesa() {
    btnEnviarDespesa.addEventListener('click', () => {
        
        const despesaContainer = document.querySelector('#card_addDespesa') as HTMLDivElement
        const titulo = despesaContainer.querySelector('#input_titulo') as HTMLInputElement
        const opcao = despesaContainer.querySelector('input[name="opcao_despesa"]:checked') as HTMLInputElement
        const data = despesaContainer.querySelector('#input_data') as HTMLInputElement
        const dataFormatada = formatoData(new Date(data.value))
        const valor = despesaContainer.querySelector('#input_valor') as HTMLInputElement

        const novoElemento = criarElementosDespesa(titulo.value, opcao.value, dataFormatada, valor.value)

        const despesaUsuario = document.querySelector('.dados_despesas') as HTMLDivElement
        despesaUsuario.appendChild(novoElemento)

        const dadosDespesas: dados = {
            titulo: titulo.value,
            opcao: opcao.value,
            data: dataFormatada,
            valor: valor.value
        }

        const itensSalvos = JSON.parse(localStorage.getItem('DadosDespesas')) || []

        itensSalvos.push(dadosDespesas)

        localStorage.setItem('DadosDespesas', JSON.stringify(itensSalvos))

        const formulario = document.querySelector('#formulario') as HTMLDivElement
        const btnsApagar = formulario.querySelectorAll('button') as NodeListOf<HTMLButtonElement>
        btnsApagar.forEach((input) => {
            input.style.display = 'none'
        })

        data.value = ""
        titulo.value = ""
        opcao.checked = false
        valor.value = ""

        resetarDespesa()
        verificaDespesa()
        verificaInputsDespesa()
        validaAvancoPreFormDespesa()
    })
}