const burgerNav = document.querySelector('.nav-mobile__burger');
const mobileNavList = document.querySelector('.nav-mobile__list');
const mobileNavLinks = [...document.querySelectorAll('.nav-mobile__link')];

const removeClass = () => {
    burgerNav.classList.remove('nav-mobile__burger--open');
    mobileNavList.classList.remove('nav-mobile__list--visible');
    mobileNavLinks.forEach((item) => {
        item.classList.remove('nav-mobile__link--open');
    });
};

export const mobileNavigationToggle = () => {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            removeClass();
        }
    });

    mobileNavLinks.forEach((item) => {
        item.addEventListener('click', () => {
            removeClass();
        });
    });

    burgerNav.addEventListener('click', () => {
        burgerNav.classList.toggle('nav-mobile__burger--open');
        mobileNavList.classList.toggle('nav-mobile__list--visible');
        mobileNavLinks.forEach((item) => {
            item.classList.toggle('nav-mobile__link--open');
        });
    });
};
