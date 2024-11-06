let lightMode = localStorage.getItem('theme') === 'light';

function ChangeThemeButton() {
    // Alterna o estado do tema
    lightMode = !lightMode;

    // Atualiza o ícone de tema
    const sunIcon = document.querySelector('#SUN');
    const moonIcon = document.querySelector('#MOON');
    if (lightMode) {
        sunIcon.classList.add('Mode');
        moonIcon.classList.remove('Mode');
    } else {
        moonIcon.classList.add('Mode');
        sunIcon.classList.remove('Mode');
    }

    // Salva a preferência de tema no localStorage
    localStorage.setItem('theme', lightMode ? 'light' : 'dark');

    // Aplica o tema
    changeTheme(lightMode);

    console.log(lightMode);
}

function changeTheme(isLightMode) {
    document.body.className = isLightMode ? 'whitemode' : 'darkmode';
}

// Carrega o tema ao inicializar a página
window.onload = () => {
    lightMode = localStorage.getItem('theme') === 'light';
    changeTheme(lightMode);

    // Atualiza o ícone de tema ao carregar a página
    const sunIcon = document.querySelector('#SUN');
    const moonIcon = document.querySelector('#MOON');
    if (lightMode) {
        sunIcon.classList.add('Mode');
        moonIcon.classList.remove('Mode');
    } else {
        moonIcon.classList.add('Mode');
        sunIcon.classList.remove('Mode');
    }
};


let indice = 0;

function mover(direcao) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    indice += direcao;

    if (indice < 0) {
        indice = totalSlides - 1;
    } else if (indice >= totalSlides) {
        indice = 0;
    }

    const larguraSlide = document.querySelector('.slide').offsetWidth; // Obtém a largura do slide
    const deslocamento = -indice * larguraSlide; // Calcula o deslocamento
    slides.style.transform = `translateX(${deslocamento}px)`;
}