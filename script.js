//Popup Logik
    const popup = document.getElementById('descriptionPopup');
    let popupContent;
    if (popup) {
        popupContent = popup.querySelector('.description-content');
    }

    // Bild klick = Beschreibung laden
    if (popup && popupContent) {
        const triggers = document.querySelectorAll('.popup-trigger');

        triggers.forEach(trigger => {
            trigger.addEventListener('click', () => {
            const id = trigger.dataset.popup;
            const content = document.getElementById(id);
            if (content) {
                popupContent.innerHTML = content.innerHTML;
                popup.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
            });
        });

        popup.addEventListener('click', () => {
            popup.classList.remove('active');
            document.body.style.overflow = '';
        });
    }



//Button Logik
const carousel = document.querySelector('.carousel');
const projects = document.querySelectorAll('.project');

if (carousel && projects.length > 0) {
    carousel.style.width = `${projects.length * 100}vw`;

    const nextBtn = document.querySelector('.carousel-button.next');
    const prevBtn = document.querySelector('.carousel-button.prev');
    let currentIndex = 0;

    // Start-Slide aus URL lesen
    const urlParams = new URLSearchParams(window.location.search);
    const slideParam = parseInt(urlParams.get('slide'));
    if (!isNaN(slideParam) && slideParam >= 0 && slideParam < projects.length) {
        currentIndex = slideParam;
    }

    function updateCarousel() {
        const offset = -currentIndex * window.innerWidth;
        carousel.style.transform = `translateX(${offset}px)`;

        const currentProject = projects[currentIndex];
        currentProject.scrollTo(0, 0);
    }

    nextBtn?.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % projects.length;
        updateCarousel();
    });

    prevBtn?.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + projects.length) % projects.length;
        updateCarousel();
    });

    window.addEventListener('resize', updateCarousel);
    updateCarousel(); // wichtig!
}

