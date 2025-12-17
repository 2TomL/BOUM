// FAQ Accordion logic (dynamic, multi-language)
function renderFaqAccordion(lang) {
    const faqData = window.translations[lang]?.faqAccordion;
    if (!faqData) return;
    const faqOrder = ['bestellen', 'afhalen', 'betaling', 'allergie'];
    const faqAccordion = document.getElementById('faqAccordion');
    if (!faqAccordion) return;
    let html = '';
    
    faqOrder.forEach(key => {
        const cat = faqData[key];
        if (!cat) return;
        
        let cleanTitle = cat.category.replace(/^([\uD800-\uDBFF][\uDC00-\uDFFF]|[^\w\s])\s*/, '');
        html += `<div class="container">
            <div class="question">${cleanTitle}</div>
            <div class="answercont">
                <div class="faq-item">
                    <div class="faq-question">${cat.q1}</div>
                    <div class="faq-answer">${cat.a1}</div>
                </div>`;
        
        if (cat.q2) {
            html += `<div class="faq-item">
                <div class="faq-question">${cat.q2}</div>
                <div class="faq-answer">${cat.a2}</div>
            </div>`;
        }
        if (cat.q3) {
            html += `<div class="faq-item">
                <div class="faq-question">${cat.q3}</div>
                <div class="faq-answer">${cat.a3}</div>
            </div>`;
        }
        if (cat.q4) {
            html += `<div class="faq-item">
                <div class="faq-question">${cat.q4}</div>
                <div class="faq-answer">${cat.a4}</div>
            </div>`;
        }
        
        html += `</div></div>`;
    });
    
    faqAccordion.innerHTML = html;
    setupFaqAccordion();
}

function setupFaqAccordion() {
    // Categories accordion - only one open at a time
    const categories = document.querySelectorAll('.container > .question');
    const answerContainers = document.querySelectorAll('.container > .answercont');
    
    categories.forEach((category, catIndex) => {
        category.addEventListener('click', function() {
            // Close all other categories
            categories.forEach((cat, idx) => {
                if (idx !== catIndex) {
                    cat.classList.remove('active');
                    answerContainers[idx].style.maxHeight = '0';
                }
            });
            
            // Toggle current category
            category.classList.toggle('active');
            if (category.classList.contains('active')) {
                setTimeout(() => {
                    answerContainers[catIndex].style.maxHeight = answerContainers[catIndex].scrollHeight + 'px';
                }, 10);
            } else {
                answerContainers[catIndex].style.maxHeight = '0';
            }
        });
    });
    
    // Questions accordion within each category - only one answer open per category
    answerContainers.forEach((container) => {
        const questions = container.querySelectorAll('.faq-question');
        
        questions.forEach((question) => {
            question.addEventListener('click', function(e) {
                e.stopPropagation();
                
                // Close all other answers in this category
                questions.forEach((q) => {
                    if (q !== question) {
                        q.classList.remove('active');
                        q.nextElementSibling.style.maxHeight = null;
                    }
                });
                
                // Toggle current answer
                question.classList.toggle('active');
                const answer = question.nextElementSibling;
                if (question.classList.contains('active')) {
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                } else {
                    answer.style.maxHeight = null;
                }
            });
        });
    });
}

// Initial render
document.addEventListener('DOMContentLoaded', function () {
    const lang = (document.getElementById('languageSelect')?.value) || 'nl';
    window.currentLanguage = lang;
    renderFaqAccordion(lang);
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
            renderFaqAccordion(this.value);
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
