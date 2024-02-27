import { btnExcluirEntradasSalvas } from '../Interação Card Entradas/excluirDadosSalvosEntradas.js'

export function criarElementosEntrada(titulo, opcao, data, valor) {
    const dadosUsuario = document.createElement('li')
    dadosUsuario.classList.add('dados_entrada_usuario')

    dadosUsuario.innerHTML = `
    <span id = "nome_entrada">${titulo}</span>
    <div>/</div>
    <span id = "destino_entrada">${opcao}</span>
    <span id = "data_entrada">${data}</span>
    `

    const valorEntrada = document.createElement('div')
    valorEntrada.classList.add('valor_entrada')

    valorEntrada.innerHTML = `
        <span id = "valor_entrada">${valor}</span>
    `

    const dadosEntradas = document.createElement('div')
    dadosEntradas.classList.add('dados_entradas_container')
    dadosEntradas.appendChild(dadosUsuario)
    dadosEntradas.appendChild(valorEntrada)

    const btnLixeira = btnExcluirEntradasSalvas(dadosEntradas)
    valorEntrada.appendChild(btnLixeira)

    return dadosEntradas
}