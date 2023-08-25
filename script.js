const adhesion = document.getElementById('catfish-adhesion');
const closeBtn = document.getElementById('catfish-close');
    setTimeout(() => {
        adhesion.classList.add('active');
    }, 3000);

    closeBtn.addEventListener('click', () => {
        adhesion.classList.remove('active');
    });