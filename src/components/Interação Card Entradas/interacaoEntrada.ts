const btnFiltrar = document.querySelector('#filtrar_entrada') as HTMLButtonElement
const cabecalhoCardEntrada = document.querySelector('.cabecalho_card_entradas') as HTMLDivElement
const filtrosCardEntrada = document.querySelector('.filtros_card_entradas') as HTMLDivElement
const btnFecharFiltros = document.querySelector('#icone_fecharFiltros_entrada') as HTMLButtonElement

export function interacaoFiltrarEntrada() {
    btnFiltrar.addEventListener('click', () => {
        cabecalhoCardEntrada.style.display = 'none'
        filtrosCardEntrada.style.display = 'flex'
    })

    btnFecharFiltros.addEventListener('click', () => {
        filtrosCardEntrada.style.display = 'none'
        cabecalhoCardEntrada.style.display = 'flex'
    })
}
