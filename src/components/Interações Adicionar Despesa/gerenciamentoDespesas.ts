import { manipulacaoDespesas } from './interacoesCardDespesa.js'
import { validaAvancoPreFormDespesa } from './validaAvancoPreFormDespesa.js'
import { enviarElementosDespesa } from './enviarDadosDespesa.js'
import { verificaInputsDespesa } from './validaSubFormularioDespesa.js'
import { cancelaDespesa } from './funcCancelarDespesa.js'
import { exibirDadosDespesasSalvas } from './obterDespesasSalvas.js'
import { funcBtnBtnEditarDespesas } from '../Interação Card Despesas/funcExcluirDespesa.js'
import { validaCliqueDespesa } from '../Interação Card Despesas/funcExcluirDespesa.js'

export function chamadasDespesas() {
    manipulacaoDespesas()
    validaAvancoPreFormDespesa()
    cancelaDespesa()
    enviarElementosDespesa()
    exibirDadosDespesasSalvas()
    verificaInputsDespesa()
    funcBtnBtnEditarDespesas()
    validaCliqueDespesa()
}