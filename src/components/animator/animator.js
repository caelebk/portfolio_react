import 'animate.css';

export async function addAnimation(element, animation) {
    new Promise((resolve, reject) => {
        element.classList.add('animate__animated', 'animate__' + animation);
        element.addEventListener('animationend', (event) => {
            event.stopPropagation();
            element.classList.remove('animate__animated', 'animate__' + animation);
            resolve('animation finished');
        },
            { once: true })
    })
}
