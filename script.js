const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
        const body = accordion.querySelector('.accordion-body');
        body.classList.toggle('active');
    })
})

function toggleAnswerBox() {
    const answerBox = document.querySelector('.accordion-body');
    const background = document.querySelector('#duvidas');

    if (answerBox.style.maxHeight) {
        answerBox.style.maxHeight = null;
    } else {
        const newHeight = answerBox.scrollHeight;
        answerBox.style.maxHeight = newHeight + 'px';
       
        const totalHeight = document.querySelectorAll('.accordion-body').length * newHeight;
        background.style.height = totalHeight + 'px';
    }
}