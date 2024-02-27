const formularioDespesa = document.querySelector('#card_addDespesa') as HTMLDivElement
const titulo = formularioDespesa.querySelector('#input_titulo') as HTMLInputElement
const valor = formularioDespesa.querySelector('#input_valor') as HTMLInputElement
const data = formularioDespesa.querySelector('#input_data') as 
HTMLInputElement

export function verificaDespesa() {
    const btnSubFormulario = document.querySelector('#btn_enviar_formulario_despesa') as HTMLButtonElement
    const dataValida = data.value.split('/').reverse().join('-')
    const dataConvertida = new Date(dataValida)
    const anoValido = dataConvertida.getFullYear().toString().length === 4

    if (titulo.value === '' || valor.value === '' || valor.value === 'R$ NaN' || data.value === '' || !anoValido || isNaN(dataConvertida.getTime())) {
        btnSubFormulario.style.display = 'none'
    } else {
        btnSubFormulario.style.display = 'block'
    }    
}


export function verificaInputsDespesa() {
    titulo.addEventListener('input', verificaDespesa);
    valor.addEventListener('input', verificaDespesa);
    data.addEventListener('input', verificaDespesa);
}
