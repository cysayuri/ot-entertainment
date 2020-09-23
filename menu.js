/**
 * Troca a sessão selecionada do menu de acordo com
 * a altura do scroll
 *
 */
window.addEventListener('scroll', (event) => {
    let scroll = this.scrollY

    const SECTION_HEIGHT_CONTACT = 2075
    if ( scroll >= SECTION_HEIGHT_CONTACT ) {
        changeMenuItemSelected('contato')
        return
    }

    const SECTION_HEIGHT_MUSICS  = 1525
    if ( scroll >= SECTION_HEIGHT_MUSICS ) {
        changeMenuItemSelected('musicas')
        return
    }

    const SECTION_HEIGHT_MOVIES  = 980
    if ( scroll >= SECTION_HEIGHT_MOVIES ) {
        changeMenuItemSelected('filmes')
        return
    }

    changeMenuItemSelected('sobre_nos')
})

/**
 * Troca a sessão selecionada no menu
 *
 * @param selected
 */
function changeMenuItemSelected (selected) {
    let item = document.querySelector('.home-navigation__item--selected')

    if ( selected === item.dataset.section ) {
        return
    }

    item.classList.remove('home-navigation__item--selected')

    let newSelected = document.querySelector('.home-navigation__item[data-section="'+selected+'"]')
    newSelected.classList.add('home-navigation__item--selected')
}

let menuSections = document.querySelectorAll('.home-navigation__item')
menuSections.forEach((item) => {
    item.addEventListener('click', (e) => {
        let element = e.target
        if ( (element instanceof SVGElement) || (element instanceof HTMLParagraphElement)) {
            element = element.parentNode
        }

        let section = element.dataset.section
        let top = document.querySelector('.home-section[data-section="'+section+'"]')

        window.scrollTo({
            top: (top.offsetTop - 110),
            behavior: 'smooth'
        })
    })
})