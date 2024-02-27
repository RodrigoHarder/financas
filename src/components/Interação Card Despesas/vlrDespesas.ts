import { comparaDatas } from '../../types/comparacaoDatas.js'

const dadosSalvos: {data: Date, valor: number}[] = []

function carregarDespesas() {
    const dadosLocais = JSON.parse(localStorage.getItem('DadosDespesas')) || []

    dadosLocais.forEach((dados) => {
        const partes = dados.data.split('/')
        const data = new Date(parseInt(partes[2]), parseInt(partes[1]) - 1, parseInt(partes[0]))

        const valor = dados.valor.replace('R$', '').replace('.', '').replace(',', '.')

        dadosSalvos.push({data, valor: parseFloat(valor)})
    })
}

export function verificaDespesasPassadas() {
    
    let somaValores = 0

    dadosSalvos.forEach((despesa) => {
        const resultado = comparaDatas(despesa)

        if (resultado === 'saldoAnterior') {
            somaValores += despesa.valor
        }
    })

    return somaValores
}

export function verificaDespesasAtuais() {

    let somaValores = 0 

    dadosSalvos.forEach((despesa) => {
        const resultado = comparaDatas(despesa)

        if (resultado === 'SaldoAtual') {
            somaValores += despesa.valor
        }
    })

    return somaValores
}

export function verificaDespesasPrevistas() {
    
    let somaValores = 0

    dadosSalvos.forEach((despesa) => {
        const resultado = comparaDatas(despesa)

        if(resultado === 'SaldoPrevisto') {
            somaValores += despesa.valor
        }
    })

    return somaValores
}

function verificaMudancasLocalStorage() {
    const novosDados = JSON.parse(localStorage.getItem('DadosDespesas')) || []

    if (JSON.stringify(novosDados) !== JSON.stringify(dadosSalvos)) {
        dadosSalvos.length = 0
        
        carregarDespesas()
    }
}

//
export function verificaEntradaDasDespesas() {
    const btnEnviarDespesas = document.querySelector('#btn_enviar_formulario_despesa') as HTMLButtonElement

    btnEnviarDespesas.addEventListener('click', verificaMudancasLocalStorage),setInterval(verificaMudancasLocalStorage, 1000)
}

verificaEntradaDasDespesas()