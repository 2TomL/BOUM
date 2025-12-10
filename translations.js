const translations = {
    nl: {
        home: "Home",
        menu: "Menu",
        about: "About",
        faq: "FAQ",
        contact: "Contact",
        welcome: "Welkom bij BOUM Baguette",
        intro: "Dit is een volledig witte, minimalistische en reactieve site.",
        menuContent: "Hier komt het menu.",
        aboutContent: "Over deze website.",
        faqContent: "Veelgestelde vragen.",
        contactContent: "Contact",
        name: "Naam:",
        email: "E-mail:",
        message: "Bericht:",
        send: "Verstuur",
        fillAll: "Vul alle velden in aub.",
        thanks: "Bedankt voor je bericht, "
    },
    en: {
        home: "Home",
        menu: "Menu",
        about: "About",
        faq: "FAQ",
        contact: "Contact",
        welcome: "Welcome to BOUM Baguette",
        intro: "This is a fully white, minimalist and responsive site.",
        menuContent: "Here is the menu.",
        aboutContent: "About this website.",
        faqContent: "Frequently asked questions.",
        contactContent: "Contact",
        name: "Name:",
        email: "Email:",
        message: "Message:",
        send: "Send",
        fillAll: "Please fill in all fields.",
        thanks: "Thank you for your message, "
    },
    fr: {
        home: "Accueil",
        menu: "Menu",
        about: "À propos",
        faq: "FAQ",
        contact: "Contact",
        welcome: "Bienvenue chez BOUM Baguette",
        intro: "Ceci est un site entièrement blanc, minimaliste et réactif.",
        menuContent: "Voici le menu.",
        aboutContent: "À propos de ce site.",
        faqContent: "Questions fréquemment posées.",
        contactContent: "Contact",
        name: "Nom:",
        email: "E-mail:",
        message: "Message:",
        send: "Envoyer",
        fillAll: "Veuillez remplir tous les champs.",
        thanks: "Merci pour votre message, "
    }
};

function setLanguage(lang) {
    const t = translations[lang];
    const homeLink = document.querySelector('a[href="#home"]');
    const menuLink = document.querySelector('a[href="#menu"]');
    const aboutLink = document.querySelector('a[href="#about"]');
    const faqLink = document.querySelector('a[href="#faq"]');
    const contactLink = document.querySelector('a[href="#contact"]');
    const homeH1 = document.querySelector('#home h1');
    const homeP = document.querySelector('#home p');
    const menuH2 = document.querySelector('#menu h2');
    const aboutH2 = document.querySelector('#about h2');
    const aboutP = document.querySelector('#about p');
    const faqH2 = document.querySelector('#faq h2');
    const faqP = document.querySelector('#faq p');
    const contactH2 = document.querySelector('#contact h2');
    const nameLabel = document.querySelector('label[for="name"]');
    const emailLabel = document.querySelector('label[for="email"]');
    const messageLabel = document.querySelector('label[for="message"]');
    const submitButton = document.querySelector('#contactForm button');
    
    if (homeLink) homeLink.textContent = t.home;
    if (menuLink) menuLink.textContent = t.menu;
    if (aboutLink) aboutLink.textContent = t.about;
    if (faqLink) faqLink.textContent = t.faq;
    if (contactLink) contactLink.textContent = t.contact;
    if (homeH1) homeH1.textContent = t.welcome;
    if (homeP) homeP.textContent = t.intro;
    if (menuH2) menuH2.textContent = t.menu;
    if (aboutH2) aboutH2.textContent = t.about;
    if (aboutP) aboutP.textContent = t.aboutContent;
    if (faqH2) faqH2.textContent = t.faq;
    if (faqP) faqP.textContent = t.faqContent;
    if (contactH2) contactH2.textContent = t.contact;
    if (nameLabel) nameLabel.textContent = t.name;
    if (emailLabel) emailLabel.textContent = t.email;
    if (messageLabel) messageLabel.textContent = t.message;
    if (submitButton) submitButton.textContent = t.send;
}

window.setLanguage = setLanguage;
window.translations = translations;
