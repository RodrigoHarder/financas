import { criarElementosEntrada } from '../Interações Adicionar Entradas/criacaoDadosEntrada.js';
import { formatoData } from '../../utils/Validações Formulários/validaData.js';
const btnfiltraData = document.querySelector("#filtro_data_entradas");
const dadosSalvos = [];
export function carregarEntradas() {
    const dadosSalvosLocal = JSON.parse(localStorage.getItem('DadosEntrada'));
    dadosSalvosLocal.forEach((dados) => {
        const titulo = dados.titulo;
        const opcao = dados.opcao;
        const data = new Date(dados.data);
        const valor = dados.valor;
        dadosSalvos.push({ titulo, opcao, data, valor });
    });
}
function btnFiltrarPorData() {
    let clicado = false;
    btnfiltraData.addEventListener('click', () => {
        const iconeSeta = document.querySelector('#icone_data_entradas');
        const elementoPai = document.querySelector('.dados_entradas');
        if (!clicado) {
            const dados = entradasRecentesParaAntiga(dadosSalvos);
            while (elementoPai.firstChild) {
                elementoPai.removeChild(elementoPai.firstChild);
            }
            dados.forEach((dados) => {
                const dataFormatada = formatoData(dados.data);
                const elementos = criarElementosEntrada(dados.titulo, dados.opcao, dataFormatada, dados.valor);
                iconeSeta.style.transform = 'rotate(180deg)';
                elementoPai.appendChild(elementos);
            });
            clicado = true;
        }
        else {
            const dados = entradasAntigasParaRecentes(dadosSalvos);
            while (elementoPai.firstChild) {
                elementoPai.removeChild(elementoPai.firstChild);
            }
            dados.forEach((dados) => {
                const dataFormatada = formatoData(dados.data);
                const elementos = criarElementosEntrada(dados.titulo, dados.opcao, dataFormatada, dados.valor);
                iconeSeta.style.transform = 'rotate(0deg)';
                elementoPai.appendChild(elementos);
            });
            clicado = false;
        }
    });
}
function entradasRecentesParaAntiga(dados) {
    dados = dadosSalvos.slice();
    dados.sort((a, b) => b.data.getTime() - a.data.getTime());
    return dados;
}
function entradasAntigasParaRecentes(dados) {
    dados = dadosSalvos.slice();
    dados.sort((a, b) => a.data.getTime() - b.data.getTime());
    return dados;
}
export function teste() {
    carregarEntradas();
    btnFiltrarPorData();
}
