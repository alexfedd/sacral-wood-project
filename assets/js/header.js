
const openButton = document.querySelector('.header__mobile-button')
const closeButton = document.querySelector('.header__close-button')

const mobileNavWrapper = document.querySelector('.header__mobile-wrapper');
const mobileNav = document.querySelector('.header__mobile');

openButton.addEventListener('click', () => {
    mobileNav.classList.toggle('header__mobile--opened')
    mobileNavWrapper.classList.toggle('header__mobile-wrapper--opened')
})

mobileNavWrapper.addEventListener('click', (e) => {
    if(e.target === e.currentTarget || e.target.closest('.header__close-button')) {
        mobileNav.classList.toggle('header__mobile--opened')
        mobileNavWrapper.classList.toggle('header__mobile-wrapper--opened')
    }
})
