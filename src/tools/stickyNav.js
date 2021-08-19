const nav = document.querySelector('.nav__list');

export function stickyNav() {
    window.addEventListener('scroll', () => {
        nav.classList.toggle('nav__list--sticky', window.scrollY > 0);
    });
}
