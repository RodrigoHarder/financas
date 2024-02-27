import { verificaEntradasPassadas } from '../Interação Card Entradas/vlrEntradas.js';
import { verificaDespesasPassadas } from '../Interação Card Despesas/vlrDespesas.js';
import { verificaEntradasAtuais } from '../Interação Card Entradas/vlrEntradas.js';
import { verificaDespesasAtuais } from '../Interação Card Despesas/vlrDespesas.js';
import { verificaEntradasPrevistas } from '../Interação Card Entradas/vlrEntradas.js';
import { verificaDespesasPrevistas } from '../Interação Card Despesas/vlrDespesas.js';
import { FormatacaoMonetaria } from '../../types/formatacaoMonetaria.js';
export function saldoMesesAnteriores() {
    const saldoAnterior = document.querySelector('#saldo_meses-anteriores');
    const saldoAtual = document.querySelector('#saldo_mes-atual');
    const saldoPrevisto = document.querySelector('#saldo_mes-previsto');
    setInterval(() => {
        const entradasPassadas = verificaEntradasPassadas();
        const despesasPassadas = verificaDespesasPassadas();
        const entradasAtuais = verificaEntradasAtuais();
        const despesasAtuais = verificaDespesasAtuais();
        const entradasPrevistas = verificaEntradasPrevistas();
        const despesasPrevistas = verificaDespesasPrevistas();
        const saldosAnteriores = computaSaldoAnterior(despesasPassadas, entradasPassadas);
        saldoAnterior.innerHTML = saldosAnteriores.toString();
        if (saldoAnterior) {
            const valor = saldoAnterior.textContent;
            const valorNumerico = parseFloat(valor);
            const saldoFormatado = FormatacaoMonetaria.formatarMoeda(valorNumerico);
            saldoAnterior.innerText = saldoFormatado;
        }
        const conteudoSaldoAnterior = formataStringParaNumero(saldoAnterior);
        const saldosAtuais = computaSaldoAtual(conteudoSaldoAnterior, entradasAtuais, despesasAtuais);
        saldoAtual.innerHTML = saldosAtuais.toString();
        if (saldoAtual) {
            const valor = saldoAtual.textContent;
            const valorNumerico = parseFloat(valor);
            const saldoFormatado = FormatacaoMonetaria.formatarMoeda(valorNumerico);
            saldoAtual.innerText = saldoFormatado;
        }
        const conteudoSaldo = formataStringParaNumero(saldoAtual);
        const saldosPrevistos = computaSaldoPrevisto(conteudoSaldo, entradasPrevistas, despesasPrevistas);
        saldoPrevisto.innerHTML = saldosPrevistos.toString();
        if (saldoPrevisto) {
            const valor = saldoPrevisto.textContent;
            const valorNumerico = parseFloat(valor);
            const saldoFormatado = FormatacaoMonetaria.formatarMoeda(valorNumerico);
            saldoPrevisto.innerText = saldoFormatado;
        }
    }, 1000);
}
// Func que tira todos os caracteres especiais
function formataStringParaNumero(vlr) {
    let valor = vlr.textContent;
    valor = parseFloat(valor.replace(/[^\d,-]/g, ''));
    return valor;
}
function computaSaldoAnterior(entrada, despesa) {
    return despesa - entrada;
}
function computaSaldoAtual(saldoAnterior, saldoAtual, despesaAtual) {
    return saldoAnterior + saldoAtual - despesaAtual;
}
function computaSaldoPrevisto(saldoAtual, saldoPrevisto, despesaPrevista) {
    return saldoAtual + saldoPrevisto - despesaPrevista;
}
