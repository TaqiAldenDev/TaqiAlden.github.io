# Taqi Al-Den Portfolio Website

> A modern, responsive portfolio website showcasing skills, projects, and experience as a Back-End & Android Developer.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 🌐 Live Demo

**[View Live Site](#)** ← _Update this link after deployment_

## 📸 Preview

<!-- Add screenshot here after deployment -->
<!-- ![Portfolio Preview](preview.png) -->

## ✨ Features

- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop
- **Dark Theme**: Modern dark theme with glassmorphism effects
- **Smooth Animations**: Scroll-triggered animations and smooth transitions
- **Interactive UI**: Dynamic navigation, typewriter effects, and interactive forms
- **SEO Optimized**: Semantic HTML and proper meta tags for search engines
- **Fast Performance**: Pure HTML/CSS/JavaScript with minimal dependencies

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # Complete CSS with design system
├── script.js           # JavaScript for interactivity
├── assets/
│   ├── images/
│   │   └── projects/   # Project screenshots
│   └── cv/
│       └── Taqi Al-Den.pdf  # Your CV file (ADD THIS)
└── README.md
```

## 🎨 Design System

### Colors
- **Primary**: Navy Dark (#0a192f)
- **Accent Green**: Teal (#64ffda)
- **Accent Orange**: Coral (#ff6b35)
- **Text**: Light Blue-White (#e6f1ff)

### Typography
- **Primary Font**: Inter
- **Monospace Font**: JetBrains Mono

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/portfolio.git

# Navigate to project directory
cd portfolio

# Open in browser
# Simply open index.html in your web browser
# Or use a local server (recommended)
python -m http.server 8000
# Then visit http://localhost:8000
```

## 📝 Setup Instructions

### 1. Add Your CV
Place your CV PDF file in the `assets/cv/` folder and name it `Taqi Al-Den.pdf`. The download link is already configured in the navigation.

### 2. Generate Project Images
To create project screenshot placeholders:
1. Open `assets/images/projects/generate_images.html` in your browser
2. Take screenshots of each section (800x500px recommended)
3. Save them as:
   - `eduwave.png`
   - `graduation-project.png`
   - `autoparts.png`
   - `taskmaster.png`

Alternatively, replace these with actual project screenshots.

### 3. Update Contact Information
In `index.html`, update the following:
- Phone number: Search for `+962123456789` and replace
- Email: Search for `taqi@example.com` and replace
- GitHub URL: Search for `github.com/taqialden` and replace
- LinkedIn URL: Search for `linkedin.com/in/taqialden` and replace

### 4. Optional: Add Profile Image
Replace the icon placeholder in the About section with your photo:
- Add your photo to `assets/images/` (e.g., `profile.jpg`)
- In `index.html`, find the About section and replace the `.image-placeholder` div with:
  ```html
  <img src="assets/images/profile.jpg" alt="Taqi Al-Den">
  ```

## 🌐 Deployment

### Option 1: GitHub Pages (Free)
1. Create a GitHub repository
2. Push all files to the repository
3. Go to Settings → Pages
4. Select main branch as source
5. Your site will be live at `https://yourusername.github.io/repository-name`

### Option 2: Netlify (Free)
1. Create account at netlify.com
2. Drag and drop the entire folder
3. Your site will be live immediately

### Option 3: Vercel (Free)
1. Create account at vercel.com
2. Import repository or upload folder
3. Deploy with one click

## 🛠️ Customization

### Changing Colors
Edit the CSS custom properties in `styles.css`:
```css
:root {
    --color-accent-green: #64ffda;  /* Change accent color */
    --color-accent-orange: #ff6b35; /* Change secondary accent */
    /* ... */
}
```

### Adding New Projects
1. Copy an existing `.project-card` section in `index.html`
2. Update the content (title, description, features, tech tags)
3. Add a project image to `assets/images/projects/`

### Customizing Form Submission
The contact form currently logs to console. To connect it to a backend:
1. Open `script.js`
2. Find the contact form handler
3. Replace the simulated submission with your API call:
```javascript
await fetch('YOUR_API_ENDPOINT', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
});
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Found a bug or have a suggestion? Feel free to open an issue or submit a pull request!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

- **Email**: taqi@example.com _(Update this)_
- **LinkedIn**: [Taqi Al-Den](https://linkedin.com/in/taqialden) _(Update this)_
- **GitHub**: [@taqialden](https://github.com/taqialden) _(Update this)_

## ⭐ Show Your Support

If you found this helpful, please consider giving it a star! ⭐

---

**Built with passion by Taqi Al-Den** 🚀
