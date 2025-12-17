# BOUM Baguette

A modern café & brasserie website built with HTML, CSS and JavaScript.

## 📋 About BOUM Baguette

BOUM Baguette is a professional website for a modern café and brasserie. The site provides complete information about the menu, opening hours, contact details and much more.

**Location:** Demerstraat 15, 3290 Diest  
**Opening Hours:** Wednesday - Saturday, 11:00 - 16:00  
**Phone:** +32 12 34 56 78

---

## ✨ Features

### 🌍 Multi-Language Support
- **Dutch (NL)** - Default language
- **English (EN)** - Fully translated
- **French (FR)** - Fully translated
- Language selection via dropdown in navigation

### 📖 Sections

#### Home
- Hero section with welcome message
- "Order Now" call-to-action button

#### Menu
- **Starters:** Olives, Italian Ham, Cheese Board, Soup of the Day
- **Sandwiches:** Club Sandwich, Croque Monsieur, Ham & Cheese Baguette, Italian Panini
- **With Coffee:** Tiramisu, Brownie, Apple Pie, Chocolate Mousse
- **Drinks:** Espresso, Cappuccino, Latte Macchiato, Wine, Prosecco, Soft Drink
- Expandable accordion system per category
- Print Menu function
- Order button

#### About
- Information about the website

#### FAQ
- Comprehensive frequently asked questions in 4 categories:
  - 🥪 **Ordering** - Ordering process
  - ⏰ **Pickup & Delivery** - Pickup and delivery options
  - 🧾 **Payment** - Payment methods
  - 🌱 **Allergies & Dietary Wishes** - Special dietary requirements

#### Contact
- Two information cards:
  - **Address Information:** Name, opening hours, address, phone number
  - **Contact Form:** Form for messages/inquiries
  - Integrated Google Maps location map

#### Footer
- Credit line: "Made by Tom Lamers 2025"
- Tom Lamers link to portfolio

### 🎯 Interactive Elements

#### Menu Accordion
- Expandable menu categories
- Smooth animations
- Responsive layout

#### FAQ Accordion
- Expandable categories
- Individual questions expand
- Intuitive UI

#### Contact Form
- Fields: Name, Email, Message
- Validation
- Success messages
- Translations supported

#### Hamburger Menu
- Mobile navigation
- Responsive toggle function

### 📱 Responsive Design
- Desktop optimization
- Tablet view
- Mobile view
- Hamburger menu for small screens

### 🎨 Styling
- Modern, clean interface
- Professional color scheme
- Smooth animations and transitions
- Google Fonts integration
- Hover effects on interactive elements

---

## 📁 Project Structure

```
BOUM/
├── index.html           # Main page with all sections
├── style.css            # All styling and responsive design
├── script.js            # Interactivity (menu, form, accordion)
├── translations.js      # Multi-language translations
├── README.md            # This file
└── asstes/              # Images
    ├── home_bg.jpg
    ├── starters.jpg
    ├── main.jpg
    ├── desserts.jpg
    ├── drinks.jpg
    └── language.png
```

---

## 🛠️ Technical Details

### Technologies Used
- **HTML5** - Semantic markup
- **CSS3** - Styling, flexbox, grid, media queries
- **Vanilla JavaScript** - No frameworks needed
- **Google Maps API** - Location map

### Control Functions

#### JavaScript Functions
- `setLanguage(lang)` - Language switching
- `renderFaqAccordion(lang)` - FAQ dynamic rendering
- `setupFaqAccordion()` - FAQ interactivity
- Form validation and submission

#### CSS Classes
- `.contact-flex` - Contact cards layout
- `.simple-accordion` - Menu accordion
- `.faq-accordion-wrapper` - FAQ wrapper
- Responsive breakpoints at 900px

---

## 🌐 Language Support

All of the following elements are automatically translated:

### Navigation & Sections
- Menu items and labels
- Form labels
- Buttons (Order, Send, etc.)
- Contact information (Address, Phone)
- FAQ categories and questions

### Supported Languages
| Language | Code |
|----------|------|
| Dutch | nl |
| English | en |
| French | fr |

---

## 📞 Contact Information

**BOUM baguette**  
Demerstraat 15  
3290 Diest  
Belgium

Phone: [+32 12 34 56 78](tel:+3212345678)  
Opening Hours: Wednesday - Saturday, 11:00 - 16:00

---

## 👨‍💻 Made by

**Tom Lamers** 2025

Portfolio: https://2toml.github.io/TL_Final/

---

## 📄 License

This project is owned by Tom Lamers. All rights reserved.

---

## 🚀 Version History

### v1.0 (December 2025)
- Initial launch
- Complete multi-language support
- Responsive design
- Menu and FAQ system
- Contact form
- Footer with credits
