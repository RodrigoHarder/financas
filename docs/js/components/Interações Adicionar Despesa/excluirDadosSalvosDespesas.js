export function btnExcluirDespesasSalvas(dados) {
    const btnLixeira = document.createElement('button');
    btnLixeira.classList.add('lixeira');
    btnLixeira.style.display = 'none';
    btnLixeira.addEventListener('click', () => {
        dados.remove();
        const itensSalvos = JSON.parse(localStorage.getItem('DadosDespesas')) || [];
        const remove = itensSalvos.findIndex((element) => {
            return (element.data === dados.querySelector('#data_despesa').textContent &&
                element.titulo === dados.querySelector('#nome_despesa').textContent &&
                element.opcao === dados.querySelector('#destino_despesa').textContent &&
                element.valor === dados.querySelector('#valor_despesa').textContent);
        });
        if (remove !== -1) {
            itensSalvos.splice(remove, 1);
            localStorage.setItem('DadosDespesas', JSON.stringify(itensSalvos));
        }
    });
    return btnLixeira;
}
