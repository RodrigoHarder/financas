import { criarElementosDespesa } from './criacaoDadosDespesa.js'

export function exibirDadosDespesasSalvas() {
    const itensSalvos = JSON.parse(localStorage.getItem('DadosDespesas')) || []
    const despesasUsuario = document.querySelector('.dados_despesas') as HTMLDivElement

    itensSalvos.forEach((element) => {
        const elementoRecuperado = criarElementosDespesa(element.titulo, element.opcao, element.data, element.valor)
        despesasUsuario.appendChild(elementoRecuperado)
    })
}