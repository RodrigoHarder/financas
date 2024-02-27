import { verificaEntradasPassadas } from '../Interação Card Entradas/vlrEntradas.js';
import { verificaDespesasPassadas } from '../Interação Card Despesas/vlrDespesas.js';
import { FormatacaoMonetaria } from '../../types/formatacaoMonetaria.js';
export function saldoMesesAnteriores() {
    const saldo = document.querySelector('#saldo_meses-anteriores');
    setInterval(() => {
        const entradasPassadas = verificaEntradasPassadas();
        const despesasPassadas = verificaDespesasPassadas();
        const saldoMesesPassados = computarSaldoAnteriores(despesasPassadas, entradasPassadas);
        saldo.innerHTML = saldoMesesPassados.toString();
        if (saldo) {
            const valor = saldo.textContent;
            const valorNumerico = parseFloat(valor);
            const saldoFormatado = FormatacaoMonetaria.formatarMoeda(valorNumerico);
            saldo.innerText = saldoFormatado;
        }
    }, 1000);
}
function computarSaldoAnteriores(entrada, despesa) {
    return despesa - entrada;
}
