import { criarElementosEntrada } from './criacaoDadosEntrada.js'

export function exibirDadosEntradasSalvos() {
    const itensSalvos = JSON.parse(localStorage.getItem('DadosEntrada')) || []
    const entradasUsuario = document.querySelector('.dados_entradas') as HTMLDivElement

    itensSalvos.forEach((element) => {
        const elementoRecuperado = criarElementosEntrada(element.titulo, element.opcao, element.data, element.valor)
        entradasUsuario.appendChild(elementoRecuperado)
    })
}