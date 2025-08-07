# Dr. Hamed - Faculty Profile Website

A professional, responsive faculty profile website built for GitHub Pages deployment.

## 🌟 Features

### Core Functionality
- **Multi-page Navigation**: Home, Research, Publications, Awards, Service, Teaching, and Contact pages
- **Dark/Light Theme Toggle**: User-friendly theme switcher with persistent preferences
- **Advanced Search**: Smart search functionality across publications and research projects
- **Responsive Design**: Optimized for all devices from mobile to desktop

### Professional Design
- **Apple-level Aesthetics**: Clean, sophisticated design with attention to detail
- **Smooth Animations**: Subtle micro-interactions and hover effects
- **Typography Excellence**: Inter font family with carefully chosen spacing
- **Professional Color Scheme**: Blue primary color with complementary accents

### GitHub Pages Compatible
- **Pure Static Website**: No build process required
- **Standard HTML/CSS/JS**: Works perfectly with GitHub Pages
- **External CDN Resources**: Font Awesome icons and Google Fonts
- **Optimized Performance**: Fast loading and smooth interactions

## 📁 Project Structure

```
├── css/
│   └── styles.css          # Main stylesheet with comprehensive theming
├── images/                 # Directory for local images
├── js/
│   └── main.js            # Core functionality and theme management
├── scripts/               # Additional scripts directory
├── index.html             # Home page with biography and social links
├── research.html          # Research projects and lab information
├── publications.html      # Academic publications and citations
├── awards.html           # Awards, honors, and recognition
├── service.html          # Professional service activities
├── teaching.html         # Teaching experience and philosophy
├── contact.html          # Contact information and form
└── README.md             # This file
```

## 🚀 GitHub Pages Deployment

### Quick Setup
1. **Fork or Clone** this repository to your GitHub account
2. **Enable GitHub Pages** in repository settings
3. **Select Source**: Choose "Deploy from a branch" and select `main` branch
4. **Custom Domain** (optional): Add your custom domain in settings

### Customization
1. **Update Personal Information**: Edit the HTML files with your details
2. **Replace Profile Image**: Add your photo to the `images/` folder and update the src
3. **Update Social Links**: Modify the social media links in the header
4. **Add Your Content**: Update research projects, publications, and other sections

### File Locations to Update
- `index.html`: Biography, education, interests, and social links
- `research.html`: Research projects and lab information
- `publications.html`: Your publications and papers
- `awards.html`: Awards and recognition
- `service.html`: Professional service activities
- `teaching.html`: Courses and teaching philosophy
- `contact.html`: Contact information and office details

## 🎨 Design System

### Color Palette
- **Primary**: #2563eb (Professional Blue)
- **Secondary**: #1e40af (Deep Blue)
- **Accent**: #f59e0b (Warm Gold)
- **Success**: #10b981 (Success Green)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: 600 weight, 120% line height
- **Body**: 400 weight, 160% line height

### Responsive Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ⚡ Features

### Theme Toggle
- Persistent dark/light mode preference
- Smooth transitions between themes
- Moon/sun icon toggle

### Search Functionality
- Real-time search across content
- Keyboard shortcut support (Ctrl+K)
- Modal interface with results

### Social Media Integration
- LinkedIn, GitHub, Email, Google Scholar, ORCID
- Hover effects with brand colors
- Professional icon styling

## 📱 Mobile Responsive

- Touch-friendly navigation
- Optimized layouts for all screen sizes
- Collapsible menu for mobile devices
- Fast loading on mobile networks

## 🔧 Browser Support

- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile**: iOS Safari 14+, Chrome Mobile 90+
- **GitHub Pages**: Fully compatible with GitHub's hosting

## 📈 Performance

- **Lightweight**: Minimal external dependencies
- **Fast Loading**: Optimized CSS and JavaScript
- **CDN Resources**: Google Fonts and Font Awesome via CDN
- **Efficient Code**: Modern JavaScript with proper event handling

## 🛠️ Customization Guide

### Adding Your Photo
1. Add your photo to the `images/` folder
2. Update the `src` attribute in `index.html`:
   ```html
   <img src="images/your-photo.jpg" alt="Dr. Hamed Profile Picture">
   ```

### Updating Social Links
Replace the `#` placeholders with your actual URLs:
```html
<a href="https://linkedin.com/in/yourusername" class="social-link linkedin">
<a href="https://github.com/yourusername" class="social-link github">
<a href="mailto:your.email@university.edu" class="social-link email">
```

### Modifying Colors
Update the CSS custom properties in `css/styles.css`:
```css
:root {
  --primary-color: #your-color;
  --secondary-color: #your-secondary-color;
}
```

## 📧 Contact Form

The contact form is ready for integration with:
- **Formspree**: Add your Formspree endpoint
- **Netlify Forms**: Works automatically if deployed on Netlify
- **GitHub Pages**: Consider using a third-party form service

## 🚀 Going Live

1. **Push to GitHub**: Commit all your changes
2. **Enable Pages**: Go to Settings > Pages in your repository
3. **Select Source**: Choose "Deploy from a branch"
4. **Select Branch**: Choose `main` (or `master`)
5. **Wait**: GitHub will build and deploy your site
6. **Visit**: Your site will be available at `https://yourusername.github.io/repository-name`

## 📄 License

This project is designed as a professional template for academic use. Feel free to customize and use for your faculty profile.

---

**Perfect for GitHub Pages deployment with professional academic design and modern web standards.**