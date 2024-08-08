document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide"); // Seleciona todos os slides
    const radioButtons = document.querySelectorAll('input[type="radio"]'); // Seleciona botões de controle
    const slider = document.querySelector(".slider"); // Seleciona o contêiner do slider

    let currentSlide = 0; // Índice do slide atual
    const slideInterval = 2000; // Tempo de exibição de cada slide (2 segundos)
    let slideTimer;

    // Função para exibir o slide atual
    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active')); // Esconde todos os slides
        radioButtons.forEach(radio => radio.checked = false); // Desmarca todos os botões

        slides[n].classList.add('active'); // Mostra o slide atual
        radioButtons[n].checked = true; // Marca o botão correspondente
    }

    // Função para avançar automaticamente para o próximo slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length; // Incrementa e reinicia o índice se necessário
        showSlide(currentSlide);
    }

    // Inicia o intervalo de mudança automática de slides
    slideTimer = setInterval(nextSlide, slideInterval);

    // Permite navegação manual através dos botões de rádio
    radioButtons.forEach(function(radio, index) {
        radio.addEventListener('click', function() {
            clearInterval(slideTimer); // Para o avanço automático
            showSlide(index); // Mostra o slide selecionado
            slideTimer = setInterval(nextSlide, slideInterval); // Reinicia o avanço automático
        });
    });

    // Variáveis para arraste
    let isDragging = false;
    let startPos = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let animationID;

    // Eventos de arraste do mouse
    slider.addEventListener('mousedown', startDragging);
    slider.addEventListener('mouseup', stopDragging);
    slider.addEventListener('mousemove', drag);

    // Eventos de toque em dispositivos móveis
    slider.addEventListener('touchstart', startDragging);
    slider.addEventListener('touchend', stopDragging);
    slider.addEventListener('touchmove', drag);

    // Inicia o arraste
    function startDragging(e) {
        isDragging = true; // Marca que está arrastando
        startPos = getPositionX(e); // Pega a posição inicial do cursor/toque
        animationID = requestAnimationFrame(animation); // Começa a animação de arraste
    }

    // Termina o arraste
    function stopDragging() {
        isDragging = false; // Marca que parou de arrastar
        cancelAnimationFrame(animationID); // Para a animação

        const movedBy = currentTranslate - prevTranslate; // Calcula a distância movida

        // Decide o próximo slide com base na direção do arraste
        if (movedBy < -100 && currentSlide < slides.length - 1) currentSlide += 1;
        if (movedBy > 100 && currentSlide > 0) currentSlide -= 1;

        setPositionByIndex(); // Ajusta posição do slide
        slideTimer = setInterval(nextSlide, slideInterval); // Reinicia o avanço automático
    }

    // Manipula o arraste
    function drag(e) {
        if (isDragging) {
            const currentPosition = getPositionX(e); // Pega a posição atual do cursor/toque
            currentTranslate = prevTranslate + currentPosition - startPos; // Calcula nova posição
        }
    }

    // Determina a posição X do evento
    function getPositionX(event) {
        return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
    }

    // Atualiza a posição do slider na tela
    function animation() {
        setSliderPosition();
        if (isDragging) requestAnimationFrame(animation); // Continua a animação se ainda estiver arrastando
    }

    // Aplica a transformação de posição ao slider
    function setSliderPosition() {
        slider.style.transform = `translateX(${currentTranslate}px)`;
    }

    // Define a posição com base no índice atual do slide
    function setPositionByIndex() {
        currentTranslate = currentSlide * -window.innerWidth;
        prevTranslate = currentTranslate;
        setSliderPosition();
    }
});


const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
  document.body.classList.toggle('dark')
  
  

})



document.addEventListener('DOMContentLoaded', () => {
    const chk = document.getElementById('chk');
    const targetElement = document.querySelector('.bateristas_favoritos');

    chk.addEventListener('change', () => {
        targetElement.classList.toggle('dark');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const chk = document.getElementById('chk');
    const targetElement1 = document.querySelector('footer');

    chk.addEventListener('change', () => {
        targetElement1.classList.toggle('dark');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const chk = document.getElementById('chk');
    const targetElement = document.querySelector('#escritaind');

    chk.addEventListener('change', () => {
        targetElement.classList.toggle('dark');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const chk = document.getElementById('chk');
    const targetElement = document.querySelector('#bemvindo');

    chk.addEventListener('change', () => {
        targetElement.classList.toggle('dark');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const chk = document.getElementById('chk');
    const targetElement = document.querySelector('.sobre2');

    chk.addEventListener('change', () => {
        targetElement.classList.toggle('dark');
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const chk = document.getElementById('chk');
    const targetElement = document.querySelector('.parte1');

    chk.addEventListener('change', () => {
        targetElement.classList.toggle('dark');
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const chk = document.getElementById('chk');
    const targetElement = document.querySelector('.parte2');

    chk.addEventListener('change', () => {
        targetElement.classList.toggle('dark');
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const chk = document.getElementById('chk');
    const targetElements = document.querySelectorAll('h5');

    chk.addEventListener('change', () => {
        targetElements.forEach(element => {
            element.classList.toggle('dark');
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const chk = document.getElementById('chk');
    const targetElements = document.querySelectorAll('a');

    chk.addEventListener('change', () => {
        targetElements.forEach(element => {
            element.classList.toggle('dark');
        });
    });
});


