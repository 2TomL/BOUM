// FAQ Accordion simple version
function setupFaqAccordion() {
    let questions = document.querySelectorAll(".question");
    
    questions.forEach(question => {
        question.addEventListener("click", event => {
            const active = document.querySelector(".question.active");
            if(active && active !== question) {
                active.classList.toggle("active");
                active.nextElementSibling.style.maxHeight = 0;
            }
            question.classList.toggle("active");
            const answer = question.nextElementSibling;
            if(question.classList.contains("active")){
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                answer.style.maxHeight = 0;
            }
        });
    });
}

// Initial render
document.addEventListener('DOMContentLoaded', function () {
    const lang = (document.getElementById('languageSelect')?.value) || 'nl';
    window.currentLanguage = lang;
    setupFaqAccordion();
    setLanguage(lang);
    
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
    
    // Language selection
    const langSelect = document.getElementById('languageSelect');
    if (langSelect) {
        langSelect.addEventListener('change', function() {
            window.currentLanguage = this.value;
            setLanguage(this.value);
        });
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
    
    // Accordion Menu functionaliteit (Menu items)
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
    
    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            const formMessage = document.getElementById('formMessage');
            const t = window.translations[window.currentLanguage || 'nl'];

            if (name && email && message) {
                formMessage.textContent = (t.thanks || 'Thank you for your message, ') + name + '!';
                formMessage.style.color = '#4CAF50';
                this.reset();
            } else {
                formMessage.textContent = t.fillAll || 'Please fill in all fields';
                formMessage.style.color = '#f44336';
            }
        });
    }
});
