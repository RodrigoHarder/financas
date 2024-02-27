import { comparaDatas } from '../../types/comparacaoDatas.js'

const dadosSalvos: { data: Date, valor: number }[] = []

function carregarEntradas() {
    const datasSalvas = JSON.parse(localStorage.getItem('DadosEntrada')) || []

    datasSalvas.forEach((dados) => {
        const partes = dados.data.split('/')
        const data = new Date(parseInt(partes[2]), parseInt(partes[1]) - 1, parseInt(partes[0]))

        const valor = dados.valor.replace('R$', '').replace('.', '').replace(',', '.')

        dadosSalvos.push({ data, valor: parseFloat(valor) })
    })
}

export function verificaEntradasPassadas() {
    
    let somaValores = 0

    dadosSalvos.forEach((entrada) => {
        const resultado = comparaDatas(entrada)
        
        if (resultado === 'saldoAnterior') {
            somaValores += entrada.valor
        }
    })

    return somaValores
}

export function verificaEntradasAtuais() {
    let somaValores = 0

    dadosSalvos.forEach((entrada) => {
        const resultado = comparaDatas(entrada)

        if (resultado === 'SaldoAtual') {
            somaValores += entrada.valor
        }
    })

    return somaValores
}

export function verificaEntradasPrevistas() {
    let somaValores = 0

    dadosSalvos.forEach((entrada) => {
        const resultado = comparaDatas(entrada)

        if (resultado === 'SaldoPrevisto') {
            somaValores += entrada.valor
        }
    })

    return somaValores
}

function verificarMudancasLocalStorage() {
    const novosDados = JSON.parse(localStorage.getItem('DadosEntrada')) || []
    
    if (JSON.stringify(novosDados) !== JSON.stringify(dadosSalvos)) {
        dadosSalvos.length = 0 // Limpa dados salvos para recarregar caso não usar ele sempre vai somar a cada verificação
        carregarEntradas()
    }
}

//
export function verifEntradasMesesPassados() {
    const btnEnviarEntrada = document.querySelector('#btn_enviar_formulario_entrada') as HTMLButtonElement
    
    btnEnviarEntrada.addEventListener('click', verificarMudancasLocalStorage),
    setInterval(verificarMudancasLocalStorage, 1000)
}

verifEntradasMesesPassados()