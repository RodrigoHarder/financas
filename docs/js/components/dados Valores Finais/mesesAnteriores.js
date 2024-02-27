import { calcularSomaValores } from '../Interação Card Entradas/recolheValoresPassados.js';
import { FormatacaoMonetaria } from '../../types/formatacaoMonetaria.js';
export function saldoMesesAnteriores() {
    const saldo = document.querySelector('#saldo_meses-anteriores');
    setInterval(() => {
        saldo.innerHTML = calcularSomaValores().toString();
        if (saldo) {
            const valor = saldo.textContent;
            const valorNumerico = parseFloat(valor);
            const saldoFormatado = FormatacaoMonetaria.formatarMoeda(valorNumerico);
            saldo.innerText = saldoFormatado;
        }
    }, 1000);
}
