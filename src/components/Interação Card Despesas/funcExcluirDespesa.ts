import { editar } from "../../utils/Funcionalidades Botões/btnEditarCampos.js"
import { checkClickLixeira } from '../../utils/Funcionalidades Botões/btnCheckClickLixeira.js'

const cardDespesa = document.querySelector('#card_despesas') as HTMLDivElement

let click = false

function checkClick() {
    const btnLixeira = cardDespesa.querySelectorAll('.lixeira') as NodeListOf<HTMLButtonElement>

    btnLixeira.forEach((btn) => {
        if (click == false) {
            btn.style.display = 'none'
        }
    })
}

export function funcBtnBtnEditarDespesas() {
    const btnEditar = cardDespesa.querySelector('#icone_editarDespesa') as HTMLButtonElement
    
    editar(btnEditar, cardDespesa)
    
    btnEditar.addEventListener('click', () => {
        click = true
        checkClickLixeira()
    })
}

export function validaCliqueDespesa() {
    document.addEventListener('click', (event) => {
        if (!cardDespesa.contains(event.target as Node)) {
            click = false
        }
        checkClick()
    })
}