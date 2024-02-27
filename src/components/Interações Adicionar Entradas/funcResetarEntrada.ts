export function resetarEntrada() {
    const preFormulario = document.querySelector('#pre_formulario_entrada') as HTMLDivElement
    const formulario = document.querySelector('.form_entrada') as HTMLDivElement
    const btnVoltarInicio = document.querySelector('#bnt_inicio_card_addDinheiro') as HTMLDivElement
    const btnVoltar = document.querySelector('#bnt_voltar_pagina_entrada') as HTMLDivElement
    const tituloAddDinheiro = document.querySelector('#titulo_addDinheiro') as HTMLTitleElement
    const btnAddEntrada = document.querySelector('#add_entrada') as HTMLElement

    preFormulario.style.display = 'none'
    formulario.style.display = 'none'
    btnVoltarInicio.style.display = 'none'
    btnVoltar.style.display = 'none'
    tituloAddDinheiro.style.display = 'block'
    btnAddEntrada.style.display = 'block'
}