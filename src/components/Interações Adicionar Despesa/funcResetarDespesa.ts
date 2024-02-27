export function resetarDespesa() {
    const preFormulario = document.querySelector('#pre_formulario_despesa') as HTMLDivElement
    const formulario = document.querySelector('.form_despesa') as HTMLDivElement
    const btnVoltarInicio = document.querySelector('#bnt_inicio_card_addDespesa') as HTMLDivElement
    const btnVoltar = document.querySelector('#bnt_voltar_pagina_despesa') as HTMLDivElement
    const tituloAddDinheiro = document.querySelector('#titulo_addDespesa') as HTMLTitleElement
    const btnAddEntrada = document.querySelector('#add_despesas') as HTMLElement

    preFormulario.style.display = 'none'
    formulario.style.display = 'none'
    btnVoltarInicio.style.display = 'none'
    btnVoltar.style.display = 'none'
    tituloAddDinheiro.style.display = 'block'
    btnAddEntrada.style.display = 'block'
}