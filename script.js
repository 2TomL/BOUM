// Initial render
document.addEventListener('DOMContentLoaded', function () {
    const langSelect = document.getElementById('languageSelect');
    if (langSelect) {
        langSelect.addEventListener('change', function () {
            setLanguage(this.value);
        });
        setLanguage('nl');
    }
});
// Scroll-zoom effect voor home-sectie (vloeiend)
let lastScrollY = 0;
let ticking = false;
function updateHomeZoom() {
    const home = document.getElementById('home');
    if (!home) return;
    const maxZoom = 0.05;
    const maxScroll = window.innerHeight;
    let factor = Math.min(lastScrollY / maxScroll, 1) * maxZoom;
    home.style.transform = `scale(${1 + factor})`;
    ticking = false;
}

window.addEventListener('scroll', function() {
    lastScrollY = window.scrollY || window.pageYOffset;
    if (!ticking) {
        window.requestAnimationFrame(updateHomeZoom);
        ticking = true;
    }
});
// Taalkeuze functionaliteit
document.addEventListener('DOMContentLoaded', function() {
    var langSelect = document.getElementById('languageSelect');
    if (langSelect) {
        langSelect.addEventListener('change', function() {
            setLanguage(this.value);
            renderFaqAccordion(this.value);
        });
        setLanguage('nl');
        renderFaqAccordion('nl');
    }
    
    // Hamburger menu functionaliteit
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.add('closing');
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
                setTimeout(() => {
                    navMenu.classList.remove('closing');
                }, 500);
            } else {
                hamburger.classList.add('active');
                navMenu.classList.add('active');
            }
        });
        
        // Sluit menu bij klik op link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.add('closing');
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
                setTimeout(() => {
                    navMenu.classList.remove('closing');
                }, 500);
            });
        });
    }
});

// Accordion Menu functionaliteit
document.addEventListener('DOMContentLoaded', function() {
    const accSlides = document.querySelectorAll(".acc-slide");
    accSlides.forEach(s => s.classList.remove("active"));
    accSlides.forEach((slide, index, allSlides) => {
        slide.addEventListener("click", () => {
            if (slide.classList.contains("active")) {
                allSlides.forEach(s => s.classList.remove("active"));
                return;
            }
            allSlides.forEach(s => s.classList.remove("active"));
            slide.classList.add("active");
        });
    });
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('formMessage');

    if (name && email && message) {
        formMessage.textContent = 'Bedankt voor je bericht, ' + name + '!';
        formMessage.style.color = '#000';
        this.reset();
    } else {
        formMessage.textContent = 'Vul alle velden in aub.';
        formMessage.style.color = 'red';
    }
});
