const formularioEntrada = document.querySelector('#card_addEntrada') as HTMLDivElement
const titulo = formularioEntrada.querySelector('#input_titulo') as HTMLInputElement
const valor = formularioEntrada.querySelector('#input_valor') as HTMLInputElement
const data = formularioEntrada.querySelector('#input_data') as 
HTMLInputElement

export function verificaEntrada() {
    const btnSubFormulario = document.querySelector('#btn_enviar_formulario_entrada') as HTMLButtonElement
    const dataValida = data.value.split('/').reverse().join('-')
    const dataConvertida = new Date(dataValida)
    const anoValido = dataConvertida.getFullYear().toString().length === 4

    if (titulo.value === '' || valor.value === '' || valor.value === 'R$ NaN' || data.value === '' || !anoValido || isNaN(dataConvertida.getTime())) {
        btnSubFormulario.style.display = 'none'
    } else {
        btnSubFormulario.style.display = 'block'
    }    
}

export function verificaInputsEntrada() {
    titulo.addEventListener('input', verificaEntrada);
    valor.addEventListener('input', verificaEntrada);
    data.addEventListener('input', verificaEntrada);
}
