const text = ' ANDERSON';
const headline = document.querySelector('.header__text-wrapper h1');

let time = performance.now();
let index = 0;

export const typingHeadline = (currentTime) => {
    if (currentTime - time > 300) {
        time = currentTime;
        headline.textContent += text[index];
        index++;

        if (index === text.length) {
            index = 0;
            return setTimeout(() => {
                headline.textContent = 'THOMAS';
                requestAnimationFrame(typingHeadline);
            }, 5000);
        }
    }

    requestAnimationFrame(typingHeadline);
};
