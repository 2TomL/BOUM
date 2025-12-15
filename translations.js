const translations = {
    nl: {
        home: "Home",
        menu: "Menu",
        about: "About",
        faq: "FAQ",
        contact: "Contact",
        welcome: "BOUM Baguette",
        intro: "Modern café & brasserie",
        menuContent: "Hier komt het menu.",
        aboutContent: "Over deze website.",
        faqContent: "Veelgestelde vragen.",
        contactContent: "Contact",
        name: "Naam:",
        email: "E-mail:",
        message: "Bericht:",
        send: "Verstuur",
        fillAll: "Vul alle velden in aub.",
        thanks: "Bedankt voor je bericht, ",
        // Menu categorieën
        starters: "Starters",
        sandwiches: "Sandwiches",
        coffee: "Bij de Koffie",
        drinks: "Drinks",
        // Starters items
        olives: "Olijven",
        ham: "Portie Italiaanse Ham",
        cheese: "Kaas Plankje",
        soup: "Soep van de Dag",
        // Sandwiches items
        clubSandwich: "Club Sandwich",
        croquemonsieur: "Croque Monsieur",
        baguette: "Baguette Jambon Fromage",
        panini: "Panini Italië",
        // Bij de Koffie items
        tiramisu: "Tiramisu",
        brownie: "Brownie",
        applepie: "Appeltaart",
        mousse: "Chocolade Mousse",
        // Drinks items
        espresso: "Espresso",
        cappuccino: "Cappuccino",
        latte: "Latte Macchiato",
        wine: "Wijn (glas)",
        prosecco: "Prosecco (glas)",
        soda: "Frisdrank"
    },
    en: {
        home: "Home",
        menu: "Menu",
        about: "About",
        faq: "FAQ",
        contact: "Contact",
        welcome: "BOUM Baguette",
        intro: "Modern café & brasserie",
        menuContent: "Here is the menu.",
        aboutContent: "About this website.",
        faqContent: "Frequently asked questions.",
        contactContent: "Contact",
        name: "Name:",
        email: "Email:",
        message: "Message:",
        send: "Send",
        fillAll: "Please fill in all fields.",
        thanks: "Thank you for your message, ",
        // Menu categories
        starters: "Starters",
        sandwiches: "Sandwiches",
        coffee: "With Coffee",
        drinks: "Drinks",
        // Starters items
        olives: "Olives",
        ham: "Italian Ham Platter",
        cheese: "Cheese Board",
        soup: "Soup of the Day",
        // Sandwiches items
        clubSandwich: "Club Sandwich",
        croquemonsieur: "Croque Monsieur",
        baguette: "Ham & Cheese Baguette",
        panini: "Italian Panini",
        // With Coffee items
        tiramisu: "Tiramisu",
        brownie: "Brownie",
        applepie: "Apple Pie",
        mousse: "Chocolate Mousse",
        // Drinks items
        espresso: "Espresso",
        cappuccino: "Cappuccino",
        latte: "Latte Macchiato",
        wine: "Wine (glass)",
        prosecco: "Prosecco (glass)",
        soda: "Soft Drink"
    },
    fr: {
        home: "Accueil",
        menu: "Menu",
        about: "À propos",
        faq: "FAQ",
        contact: "Contact",
        welcome: "BOUM Baguette",
        intro: "Café & brasserie moderne",
        menuContent: "Voici le menu.",
        aboutContent: "À propos de ce site.",
        faqContent: "Questions fréquemment posées.",
        contactContent: "Contact",
        name: "Nom:",
        email: "E-mail:",
        message: "Message:",
        send: "Envoyer",
        fillAll: "Veuillez remplir tous les champs.",
        thanks: "Merci pour votre message, ",
        // Menu catégories
        starters: "Entrées",
        sandwiches: "Sandwichs",
        coffee: "Avec le Café",
        drinks: "Boissons",
        // Entrées items
        olives: "Olives",
        ham: "Assiette de Jambon Italien",
        cheese: "Plateau de Fromages",
        soup: "Soupe du Jour",
        // Sandwichs items
        clubSandwich: "Club Sandwich",
        croquemonsieur: "Croque Monsieur",
        baguette: "Baguette Jambon Fromage",
        panini: "Panini Italien",
        // Avec le Café items
        tiramisu: "Tiramisu",
        brownie: "Brownie",
        applepie: "Tarte aux Pommes",
        mousse: "Mousse au Chocolat",
        // Boissons items
        espresso: "Espresso",
        cappuccino: "Cappuccino",
        latte: "Latte Macchiato",
        wine: "Vin (verre)",
        prosecco: "Prosecco (verre)",
        soda: "Boisson Gazeuse"
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
    
    // Menu categorieën vertalen
    const startersLabel = document.querySelector('.acc-starters .acc-label');
    const sandwichesLabel = document.querySelector('.acc-main .acc-label');
    const coffeeLabel = document.querySelector('.acc-desserts .acc-label');
    const drinksLabel = document.querySelector('.acc-drinks .acc-label');
    
    if (startersLabel) startersLabel.textContent = t.starters;
    if (sandwichesLabel) sandwichesLabel.textContent = t.sandwiches;
    if (coffeeLabel) coffeeLabel.textContent = t.coffee;
    if (drinksLabel) drinksLabel.textContent = t.drinks;
    
    // Menu items vertalen
    const menuItems = document.querySelectorAll('.acc-menu-items .menu-item');
    const itemKeys = [
        // Starters
        'olives', 'ham', 'cheese', 'soup',
        // Sandwiches
        'clubSandwich', 'croquemonsieur', 'baguette', 'panini',
        // Bij de Koffie
        'tiramisu', 'brownie', 'applepie', 'mousse',
        // Drinks
        'espresso', 'cappuccino', 'latte', 'wine', 'prosecco', 'soda'
    ];
    
    menuItems.forEach((item, index) => {
        if (itemKeys[index] && t[itemKeys[index]]) {
            const priceSpan = item.querySelector('span');
            const price = priceSpan ? priceSpan.outerHTML : '';
            item.innerHTML = t[itemKeys[index]] + ' ' + price;
        }
    });
    
    console.log('Language set to:', lang);
}

window.setLanguage = setLanguage;
window.translations = translations;
