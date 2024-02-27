import { editar } from "../../utils/Funcionalidades Botões/btnEditarCampos.js";
import { checkClickLixeira } from '../../utils/Funcionalidades Botões/btnCheckClickLixeira.js';
const cardEntrada = document.querySelector('#card_entradas');
let click = false;
function checkClick() {
    const btnLixeira = cardEntrada.querySelectorAll('.lixeira');
    btnLixeira.forEach((btn) => {
        if (click == false) {
            btn.style.display = 'none';
        }
        else {
            btn.style.display = 'flex';
        }
    });
}
export function funcBtnEditarEntradas() {
    const btnEditar = cardEntrada.querySelector('#icone_editarEntrada');
    editar(btnEditar, cardEntrada);
    btnEditar.addEventListener('click', () => {
        click = true;
        checkClickLixeira();
    });
}
export function validaCliqueEntrada() {
    document.addEventListener('click', (event) => {
        if (!cardEntrada.contains(event.target)) {
            click = false;
        }
        checkClick();
    });
}
