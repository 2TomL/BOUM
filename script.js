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
            html += `<div class="faq-group">
                <button class="faq-category">${cleanTitle}</button>
                <div class="faq-group-content">
                    <button class="faq-question">${cat.q1}</button>
                    <div class="faq-answercont"><div class="faq-answer">${cat.a1}</div></div>
                    ${cat.q2 ? `<button class="faq-question">${cat.q2}</button><div class="faq-answercont"><div class="faq-answer">${cat.a2}</div></div>` : ''}
                    ${cat.q3 ? `<button class="faq-question">${cat.q3}</button><div class="faq-answercont"><div class="faq-answer">${cat.a3}</div></div>` : ''}
                    ${cat.q4 ? `<button class="faq-question">${cat.q4}</button><div class="faq-answercont"><div class="faq-answer">${cat.a4}</div></div>` : ''}
                </div>
            </div>`;
    });
    faqAccordion.innerHTML = html;
    setupFaqAccordion();
}

function setupFaqAccordion() {
    // Category (section) accordion
    const faqCategories = document.querySelectorAll('.faq-category');
    const faqGroups = document.querySelectorAll('.faq-group-content');
    
    faqCategories.forEach(cat => cat.classList.remove('active'));
    faqGroups.forEach(g => g.style.maxHeight = null);
    
    faqCategories.forEach((catBtn, idx) => {
        catBtn.addEventListener('click', function () {
            faqCategories.forEach((b, i) => {
                if (b !== catBtn) {
                    b.classList.remove('active');
                    if (faqGroups[i]) faqGroups[i].style.maxHeight = null;
                }
            });
            catBtn.classList.toggle('active');
            if (faqGroups[idx]) {
                if (catBtn.classList.contains('active')) {
                    faqGroups[idx].style.maxHeight = faqGroups[idx].scrollHeight + 'px';
                } else {
                    faqGroups[idx].style.maxHeight = null;
                }
            }
        });
    });
    
    // Question accordion - only one answer open per category
    const allFaqGroups = document.querySelectorAll('.faq-group-content');
    allFaqGroups.forEach(group => {
        const questions = group.querySelectorAll('.faq-question');
        const answers = group.querySelectorAll('.faq-answercont');
        
        questions.forEach((btn, i) => {
            btn.classList.remove('active');
            answers[i].style.maxHeight = null;
            
            btn.addEventListener('click', function (e) {
                e.stopPropagation();
                
                // Close all other answers in this group
                questions.forEach((b, j) => {
                    if (b !== btn) {
                        b.classList.remove('active');
                        answers[j].style.maxHeight = null;
                    }
                });
                
                // Toggle current answer
                btn.classList.toggle('active');
                if (btn.classList.contains('active')) {
                    answers[i].style.maxHeight = answers[i].scrollHeight + 'px';
                } else {
                    answers[i].style.maxHeight = null;
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
