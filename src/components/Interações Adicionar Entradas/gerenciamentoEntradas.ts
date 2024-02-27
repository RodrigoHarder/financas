import { saldoMesesAnteriores } from '../dados Valores Finais/valoresCabecalho.js'
import { manipulacaoEntradas } from './interacoesCardEntrada.js'
import { validaAvancoPreFormEntrada } from './verificaAvancoFormEntrada.js'
import { enviarElementosEntrada } from './enviarDadosEntradas.js'
import { verificaInputsEntrada } from './validaSubFormularioEntrada.js'
import { cancelaEntrada } from './funcCancelarEntrada.js'
import { exibirDadosEntradasSalvos } from './obterEntradasSalvas.js'

export function chamadasEntradas() {
    saldoMesesAnteriores()
    manipulacaoEntradas()
    validaAvancoPreFormEntrada()
    enviarElementosEntrada()
    verificaInputsEntrada()
    cancelaEntrada()
    exibirDadosEntradasSalvos()
}