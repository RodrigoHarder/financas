import { criarElementosDespesa } from './criacaoDadosDespesa.js';
const btnEnviarDespesa = document.querySelector('#btn_enviar_formulario_despesa');
import { formatoData } from '../../utils/Validações Formulários/validaData.js';
import { validaAvancoPreFormDespesa } from './validaAvancoPreFormDespesa.js';
import { verificaDespesa } from './validaSubFormularioDespesa.js';
import { verificaInputsDespesa } from './validaSubFormularioDespesa.js';
import { resetarDespesa } from './funcResetarDespesa.js';
export function enviarElementosDespesa() {
    btnEnviarDespesa.addEventListener('click', () => {
        const despesaContainer = document.querySelector('#card_addDespesa');
        const titulo = despesaContainer.querySelector('#input_titulo');
        const opcao = despesaContainer.querySelector('input[name="opcao_despesa"]:checked');
        const data = despesaContainer.querySelector('#input_data');
        const dataFormatada = formatoData(new Date(data.value));
        const valor = despesaContainer.querySelector('#input_valor');
        const novoElemento = criarElementosDespesa(titulo.value, opcao.value, dataFormatada, valor.value);
        const despesaUsuario = document.querySelector('.dados_despesas');
        despesaUsuario.appendChild(novoElemento);
        const dadosDespesas = {
            titulo: titulo.value,
            opcao: opcao.value,
            data: dataFormatada,
            valor: valor.value
        };
        const itensSalvos = JSON.parse(localStorage.getItem('DadosDespesas')) || [];
        itensSalvos.push(dadosDespesas);
        localStorage.setItem('DadosDespesas', JSON.stringify(itensSalvos));
        const formulario = document.querySelector('#formulario');
        const btnsApagar = formulario.querySelectorAll('button');
        btnsApagar.forEach((input) => {
            input.style.display = 'none';
        });
        data.value = "";
        titulo.value = "";
        opcao.checked = false;
        valor.value = "";
        resetarDespesa();
        verificaDespesa();
        verificaInputsDespesa();
        validaAvancoPreFormDespesa();
    });
}
