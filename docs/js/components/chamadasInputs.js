import { chamadasEntradas } from './Interações Adicionar Entradas/gerenciamentoEntradas.js';
import { chamadasCardEntrada } from './Interação Card Entradas/gerenciamentoCardEntradas.js';
chamadasEntradas();
chamadasCardEntrada();
import { chamadasDespesas } from './Interações Adicionar Despesa/gerenciamentoDespesas.js';
chamadasDespesas();
// Chamadas Globais
import { inputTitulo } from '../utils/Inputs/inputTitulo.js';
import { inputValor } from '../utils/Inputs/inputValor.js';
import { inputData } from '../utils/Inputs/inputData.js';
import { btnApagar } from '../utils/Funcionalidades Botões/btnApagarInputs.js';
import { msgErroPreForm } from '../utils/mensagensErro.js';
import { msgErroFormulario } from '../utils/mensagensErro.js';
inputTitulo();
inputValor();
inputData();
btnApagar();
msgErroPreForm();
msgErroFormulario();
