export function resetarDespesa() {
    const preFormulario = document.querySelector('#pre_formulario_despesa');
    const formulario = document.querySelector('.form_despesa');
    const btnVoltarInicio = document.querySelector('#bnt_inicio_card_addDespesa');
    const btnVoltar = document.querySelector('#bnt_voltar_pagina_despesa');
    const tituloAddDinheiro = document.querySelector('#titulo_addDespesa');
    const btnAddEntrada = document.querySelector('#add_despesas');
    preFormulario.style.display = 'none';
    formulario.style.display = 'none';
    btnVoltarInicio.style.display = 'none';
    btnVoltar.style.display = 'none';
    tituloAddDinheiro.style.display = 'block';
    btnAddEntrada.style.display = 'block';
}
