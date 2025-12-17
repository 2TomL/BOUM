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
    // Question accordion (inside open section only)
    const allFaqGroups = document.querySelectorAll('.faq-group-content');
    allFaqGroups.forEach(group => {
        const questions = group.querySelectorAll('.faq-question');
        const answers = group.querySelectorAll('.faq-answercont');
        if (questions.length && answers.length) {
            questions.forEach((btn, i) => {
                btn.classList.remove('active');
                answers[i].style.maxHeight = null;
                btn.addEventListener('click', function () {
                    questions.forEach((b, j) => {
                        if (b !== btn) {
                            b.classList.remove('active');
                            answers[j].style.maxHeight = null;
                        }
                    });
                    btn.classList.toggle('active');
                    if (btn.classList.contains('active')) {
                        answers[i].style.maxHeight = answers[i].scrollHeight + 'px';
                        setTimeout(() => {
                            group.style.maxHeight = group.scrollHeight + 'px';
                        }, 10);
                    } else {
                        answers[i].style.maxHeight = null;
                        setTimeout(() => {
                            group.style.maxHeight = group.scrollHeight + 'px';
                        }, 10);
                    }
                });
            });
        }
    });
}

// Initial render
document.addEventListener('DOMContentLoaded', function () {
    const lang = (document.getElementById('languageSelect')?.value) || 'nl';
    renderFaqAccordion(lang);
    const langSelect = document.getElementById('languageSelect');
    if (langSelect) {
        langSelect.addEventListener('change', function () {
            renderFaqAccordion(langSelect.value);
        });
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
