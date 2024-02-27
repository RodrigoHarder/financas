export function manipulacaoDespesas() {
    const cardAddDespesa = document.querySelector('.card_addDespesas');
    const tituloCardAddDespesa = cardAddDespesa.querySelector('#titulo_addDespesa');
    const btnAddDespesa = cardAddDespesa.querySelector('#add_despesas');
    const preFormulario = cardAddDespesa.querySelector('#pre_formulario_despesa');
    const btnVoltarInicio = cardAddDespesa.querySelector('#bnt_inicio_card_addDespesa');
    const btnProximoFormulario = cardAddDespesa.querySelector('#btn_prox_formulario');
    const formulario = cardAddDespesa.querySelector('#formulario');
    const btnVoltar = cardAddDespesa.querySelector('#bnt_voltar_pagina_despesa');
    //btnAddDespesa.style.display = 'none'
    //formulario.style.display = 'block'
    btnAddDespesa.addEventListener('click', () => {
        btnAddDespesa.style.display = 'none';
        tituloCardAddDespesa.style.display = 'none';
        preFormulario.style.display = 'flex';
        btnVoltarInicio.style.display = 'block';
    });
    btnVoltarInicio.addEventListener('click', () => {
        preFormulario.style.display = 'none';
        formulario.style.display = 'none';
        btnVoltarInicio.style.display = 'none';
        btnVoltar.style.display = 'none';
        tituloCardAddDespesa.style.display = 'block';
        btnAddDespesa.style.display = 'block';
    });
    btnProximoFormulario.addEventListener('click', () => {
        if (btnProximoFormulario.classList.contains('btn_prox_form')) {
            preFormulario.style.display = 'none';
            formulario.style.display = 'block';
            btnVoltar.style.display = 'block';
        }
        else {
            console.log('Usuário não selecionou campo válido');
        }
    });
    btnVoltar.addEventListener('click', () => {
        formulario.style.display = 'none';
        btnVoltar.style.display = 'none';
        preFormulario.style.display = 'flex';
    });
}
