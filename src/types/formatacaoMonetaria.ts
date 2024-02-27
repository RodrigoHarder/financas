export class FormatacaoMonetaria {
    static formatarMoeda(valor: number): string {
        const formatoMoeda = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });

        return formatoMoeda.format(valor);
    }
}
