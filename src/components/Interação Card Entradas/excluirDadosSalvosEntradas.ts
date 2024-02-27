export function btnExcluirEntradasSalvas(dados) {
    const btnLixeira = document.createElement('button')
    btnLixeira.classList.add('lixeira')
    btnLixeira.style.display = 'none'

    btnLixeira.addEventListener('click', () => {
        dados.remove()
        const itensSalvos = JSON.parse(localStorage.getItem('DadosEntrada')) || []
        const remove = itensSalvos.findIndex((element) => {
            return (
                element.data === dados.querySelector('#data_entrada').textContent &&
                element.titulo === dados.querySelector('#nome_entrada').textContent &&
                element.opcao === dados.querySelector('#destino_entrada').textContent &&
                element.valor === dados.querySelector('#valor_entrada').textContent
                // .textContent usado para obter valor especifico de texto HTML
            )
        })

        if (remove !== -1) {
            itensSalvos.splice(remove, 1)
            localStorage.setItem('DadosEntrada', JSON.stringify(itensSalvos))
        }
    })

    return btnLixeira
}