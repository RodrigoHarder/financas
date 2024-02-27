const dadosSalvos = [];
function carregarEntradas() {
    const datasSalvas = JSON.parse(localStorage.getItem('DadosEntrada')) || [];
    datasSalvas.forEach((dados) => {
        const partes = dados.data.split('/');
        const data = new Date(parseInt(partes[2]), parseInt(partes[1]) - 1, parseInt(partes[0]));
        const valor = dados.valor.replace('R$', '').replace('.', '').replace(',', '.');
        dadosSalvos.push({ data, valor: parseFloat(valor) });
    });
}
export function verificaEntradasPassadas() {
    const dataAtual = new Date();
    const mesAtual = dataAtual.getMonth() + 1;
    const anoAtual = dataAtual.getFullYear();
    let somaValores = 0;
    dadosSalvos.forEach((entrada) => {
        const mesData = entrada.data.getMonth() + 1;
        const anoData = entrada.data.getFullYear();
        if (anoData < anoAtual || (anoData === anoAtual && mesData < mesAtual)) {
            somaValores += entrada.valor;
        }
    });
    return somaValores;
}
function verificarMudancasLocalStorage() {
    const novosDados = JSON.parse(localStorage.getItem('DadosEntrada')) || [];
    if (JSON.stringify(novosDados) !== JSON.stringify(dadosSalvos)) {
        dadosSalvos.length = 0; // Limpa dados salvos para recarregar caso não usar ele sempre vai somar a cada verificação
        carregarEntradas();
    }
}
//
export function verifEntradasMesesPassados() {
    const btnEnviarEntrada = document.querySelector('#btn_enviar_formulario_entrada');
    btnEnviarEntrada.addEventListener('click', verificarMudancasLocalStorage),
        setInterval(verificarMudancasLocalStorage, 1000);
}
verifEntradasMesesPassados();
