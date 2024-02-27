export function editar(click, card) {
    let ouvinte = false

    if (click) {
        click.addEventListener('click', () => {
            const btnLixeira = card.querySelectorAll('.lixeira') as NodeListOf<HTMLButtonElement>
            btnLixeira.forEach((btn) => {
                if (btn.style.display === 'none') {
                    btn.style.display = 'flex'
                } else {
                    btn.style.display = 'none'
                }
            })
        })
        ouvinte = true
    }
}