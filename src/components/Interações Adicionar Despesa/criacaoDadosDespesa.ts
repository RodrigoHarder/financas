import { btnExcluirDespesasSalvas } from '../Interação Card Despesas/excluirDadosSalvosDespesas.js'

export function criarElementosDespesa(titulo, opcao, data, valor) {
    const dadosUsuario = document.createElement('li')
    dadosUsuario.classList.add('dados_despesa_usuario')

    dadosUsuario.innerHTML = `
    <span id = "nome_despesa">${titulo}</span>
    <div>/</div>
    <span id = "destino_despesa">${opcao}</span>
    <span id = "data_despesa">${data}</span>
    `

    const valorDespesa = document.createElement('div')
    valorDespesa.classList.add('valor_despesa')

    valorDespesa.innerHTML = `
        <span id = "valor_despesa">${valor}</span>
    `

    const dadoDespesas = document.createElement('div')
    dadoDespesas.classList.add('dados_despesas_container')
    dadoDespesas.appendChild(dadosUsuario)
    dadoDespesas.appendChild(valorDespesa)

    const btnLixeira = btnExcluirDespesasSalvas(dadoDespesas)
    valorDespesa.appendChild(btnLixeira)

    return dadoDespesas
}