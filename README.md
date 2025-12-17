# BOUM Baguette

Een moderne café & brasserie website gebouwd met HTML, CSS en JavaScript.

## 📋 Over BOUM Baguette

BOUM Baguette is een professionele website voor een moderne café en brasserie. De site biedt volledige informatie over het menu, openingstijden, contactgegevens en veel meer.

**Locatie:** Demerstraat 15, 3290 Diest  
**Openingstijden:** Woensdag - Zaterdag, 11:00 - 16:00 uur  
**Telefoon:** +32 12 34 56 78

---

## ✨ Features

### 🌍 Meertaligheid
- **Nederlands (NL)** - Standaard taal
- **Engels (EN)** - Volledig vertaald
- **Frans (FR)** - Volledig vertaald
- Taal-selectie via dropdown in navigatie

### 📖 Secties

#### Home
- Hero-sectie met welkomstbericht
- Call-to-action "Bestel nu" knop

#### Menu
- **Starters:** Olijven, Italiaanse Ham, Kaas Plankje, Soep van de Dag
- **Sandwiches:** Club Sandwich, Croque Monsieur, Baguette Ham & Kaas, Panini Italië
- **Bij de Koffie:** Tiramisu, Brownie, Appeltaart, Chocolade Mousse
- **Drinks:** Espresso, Cappuccino, Latte Macchiato, Wijn, Prosecco, Frisdrank
- Uitklapbaar accordion-systeem per categorie
- Print Menu functie
- Bestel-knop

#### About
- Informatie over de website

#### FAQ
- Uitgebreide veelgestelde vragen in 4 categorieën:
  - 🥪 **Bestellen** - Bestellingsproces
  - ⏰ **Afhalen & Levering** - Pickup- en leveringsopties
  - 🧾 **Betaling** - Betaalmethoden
  - 🌱 **Allergieën & Dieetwensen** - Speciale dieetwensen

#### Contact
- Twee informatiekaders:
  - **Adresinformatie:** Naam, openingstijden, adres, telefoon
  - **Contactformulier:** Formulier voor berichten/vragen
  - Geïntegreerde Google Maps locatiekaart

#### Footer
- Creditleijn: "Gemaakt door Tom Lamers 2025"
- Tom Lamers-link naar portfolio

### 🎯 Interactieve Elementen

#### Menu Accordion
- Uitklapbare menu-categorieën
- Vloeiende animaties
- Responsive layout

#### FAQ Accordion
- Categorieën uitklappen
- Individuele vragen expanderen
- Intuïtieve UI

#### Contactformulier
- Velden: Naam, E-mail, Bericht
- Validatie
- Succesmeldingen
- Vertalingen ondersteund

#### Hamburger Menu
- Mobiele navigatie
- Responsive toggle-functie

### 📱 Responsive Design
- Desktop-optimalisatie
- Tablet-weergave
- Mobiele weergave
- Hamburger menu voor kleine schermen

### 🎨 Styling
- Moderne, schone interface
- Professioneel kleurenschema
- Smooth animaties en transities
- Google Fonts integratie
- Hover-effecten op interactieve elementen

---

## 📁 Projectstructuur

```
BOUM/
├── index.html           # Hoofdpagina met alle secties
├── style.css            # Alle styling en responsive design
├── script.js            # Interactiviteit (menu, formulier, accordion)
├── translations.js      # Meertalige vertalingen
├── README.md            # Dit bestand
└── asstes/              # Afbeeldingen
    ├── home_bg.jpg
    ├── starters.jpg
    ├── main.jpg
    ├── desserts.jpg
    ├── drinks.jpg
    └── language.png
```

---

## 🛠️ Technische Details

### Gebruikte Technologieën
- **HTML5** - Semantische markup
- **CSS3** - Styling, flexbox, grid, media queries
- **Vanilla JavaScript** - Geen frameworks nodig
- **Google Maps API** - Locatiekaart

### Besturingselementen

#### JavaScript Functies
- `setLanguage(lang)` - Taalwissel
- `renderFaqAccordion(lang)` - FAQ dynamisch renderen
- `setupFaqAccordion()` - FAQ interactiviteit
- Formuliervalidatie en verzending

#### CSS Classes
- `.contact-flex` - Contact kaders layout
- `.simple-accordion` - Menu accordion
- `.faq-accordion-wrapper` - FAQ wrapper
- Responsive breakpoints op 900px

---

## 🌐 Taalondersteuning

Alle volgende elementen worden automatisch vertaald:

### Navigatie & Secties
- Menu items en labels
- Form labels
- Buttons (Bestel, Verstuur, etc.)
- Contact informatie (Adres, Telefoon)
- FAQ categorieën en vragen

### Ondersteunde Talen
| Taal | Code |
|------|------|
| Nederlands | nl |
| Engels | en |
| Frans | fr |

---

## 📞 Contact Informatie

**BOUM baguette**  
Demerstraat 15  
3290 Diest  
Belgium

Telefoon: [+32 12 34 56 78](tel:+3212345678)  
Openingstijden: Woensdag - Zaterdag, 11:00 - 16:00 uur

---

## 👨‍💻 Gemaakt door

**Tom Lamers** 2025

Portfolio: https://2toml.github.io/TL_Final/

---

## 📄 Licentie

Dit project is eigendom van BOUM baguette. Alle rechten voorbehouden.

---

## 🚀 Versiegeschiedenis

### v1.0 (December 2025)
- Initiële launch
- Volledige meertalige ondersteuning
- Responsive design
- Menu en FAQ systeem
- Contactformulier
- Footer met credits
