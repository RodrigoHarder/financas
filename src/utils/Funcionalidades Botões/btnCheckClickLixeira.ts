export function checkClickLixeira() {
    const btnLixeira = document.querySelectorAll('.lixeira') as NodeListOf<HTMLButtonElement>

    btnLixeira.forEach((btn) => {
        btn.addEventListener('click', (event) => {
            event.stopPropagation()
        })
    })
}