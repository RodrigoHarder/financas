const dadosSalvos = [];
function carregarDespesas() {
    const dadosLocais = JSON.parse(localStorage.getItem('DadosDespesas')) || [];
    dadosLocais.forEach((dados) => {
        const partes = dados.data.split('/');
        const data = new Date(parseInt(partes[2]), parseInt(partes[1]) - 1, parseInt(partes[0]));
        const valor = dados.valor.replace('R$', '').replace('.', '').replace(',', '.');
        dadosSalvos.push({ data, valor: parseFloat(valor) });
    });
}
export function verificaDespesasPassadas() {
    const dataAtual = new Date();
    const mesAtual = dataAtual.getMonth() + 1;
    const anoAtual = dataAtual.getFullYear();
    let somaValores = 0;
    dadosSalvos.forEach((despesa) => {
        const mesData = despesa.data.getMonth() + 1;
        const anoData = despesa.data.getFullYear();
        if (anoData < anoAtual || (anoData === anoAtual && mesData < mesAtual)) {
            somaValores += despesa.valor;
        }
    });
    return somaValores;
}
function verificaMudancasLocalStorage() {
    const novosDados = JSON.parse(localStorage.getItem('DadosDespesas')) || [];
    if (JSON.stringify(novosDados) !== JSON.stringify(dadosSalvos)) {
        dadosSalvos.length = 0;
        carregarDespesas();
    }
}
//
export function verificaEntradaDasDespesas() {
    const btnEnviarDespesas = document.querySelector('#btn_enviar_formulario_despesa');
    btnEnviarDespesas.addEventListener('click', verificaMudancasLocalStorage), setInterval(verificaMudancasLocalStorage, 1000);
}
verificaEntradaDasDespesas();
