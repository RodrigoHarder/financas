import { editar } from "../../utils/Funcionalidades Botões/btnEditarCampos.js";
const cardDespesa = document.querySelector('#card_despesas');
export function funcBtnBtnEditarDespesas() {
    const btnEditar = cardDespesa.querySelector('#icone_editarDespesa');
    editar(btnEditar, cardDespesa);
}
let click = false;
function checkClick() {
    const btnLixeira = cardDespesa.querySelectorAll('.lixeira');
    btnLixeira.forEach((btn) => {
        if (click == false) {
            btn.style.display = 'none';
        }
    });
}
export function validaCliqueDespesa() {
    cardDespesa.addEventListener('click', () => {
        click = true;
        checkClick();
    });
    document.addEventListener('click', (event) => {
        if (!cardDespesa.contains(event.target)) {
            click = false;
        }
        checkClick();
    });
}
