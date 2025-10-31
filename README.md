# Portfolio Website - B.M. Khashrul Alam

A modern, responsive portfolio website showcasing backend engineering expertise in E-Commerce platforms, ERP systems, Laravel, Microservices, and AI Integration.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with smooth animations
- **Interactive Skills Network**: Canvas-based visualization of technical expertise
- **Contact Form**: EmailJS integration for sending messages
- **SEO Optimized**: Comprehensive meta tags, structured data, and sitemap
- **Performance Optimized**: Lazy loading, optimized assets
- **Accessibility**: Semantic HTML, ARIA labels where needed

## 📁 File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
├── profile.png         # Profile image
├── favicon.svg         # Favicon
├── site.webmanifest    # PWA manifest
├── browserconfig.xml   # Windows tile configuration
├── robots.txt          # Search engine crawler rules
├── sitemap.xml         # Sitemap for SEO
└── README.md           # This file
```

## 🔧 Setup & Configuration

### EmailJS Configuration

1. **Sign up for EmailJS** (free): https://www.emailjs.com
2. **Create Email Service**:
   - Go to Email Services → Add New Service
   - Choose Gmail or your email provider
   - Connect `khashrul.cse@gmail.com`
3. **Create Email Template**:
   - Go to Email Templates → Create New Template
   - Use these variables:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{subject}}` - Message subject
     - `{{message}}` - Message content
   - Set recipient to: `khashrul.cse@gmail.com`
4. **Update `script.js`**:
   - Line 515: Replace `YOUR_PUBLIC_KEY` with your EmailJS Public Key
   - Line 545: Replace `YOUR_SERVICE_ID` with your Service ID
   - Line 545: Replace `YOUR_TEMPLATE_ID` with your Template ID

### Domain Configuration

Before going live, update these URLs:

1. **In `index.html`**:
   - Line 51: Update `url` meta tag with your domain
   - Line 29: Update `og:url` with your domain
   - Replace all instances of `https://khashrul.com` with your actual domain

2. **In `sitemap.xml`**:
   - Replace `https://khashrul.com` with your actual domain
   - Update `<lastmod>` dates to current date

## 🌐 Deployment

### Option 1: GitHub Pages (Free)

1. Push code to GitHub repository
2. Go to Settings → Pages
3. Select branch and folder (usually `main` and `/root`)
4. Your site will be available at `https://username.github.io/repository-name`

### Option 2: Netlify (Free, Recommended)

1. Create account at https://www.netlify.com
2. Connect GitHub repository or drag & drop folder
3. Netlify automatically deploys
4. Update custom domain if needed

### Option 3: Vercel (Free)

1. Create account at https://vercel.com
2. Import GitHub repository
3. Automatic deployments on push

### Option 4: Traditional Web Hosting

1. Upload all files via FTP/SFTP to your web server
2. Ensure `index.html` is in root directory
3. Configure domain DNS settings

## 🔒 Security Considerations

- ✅ All external scripts use HTTPS
- ✅ EmailJS uses secure API calls
- ✅ No sensitive data exposed in code
- ✅ Form validation in place
- ⚠️ **TODO**: Add Content Security Policy (CSP) headers
- ⚠️ **TODO**: Implement rate limiting for contact form

## ⚡ Performance Optimizations

- ✅ Minified external libraries
- ✅ Optimized images (consider WebP format)
- ✅ Efficient canvas rendering
- ⚠️ **TODO**: Consider lazy loading images
- ⚠️ **TODO**: Add service worker for offline support

## 📝 Before Going Live Checklist

- [ ] Configure EmailJS with your credentials
- [ ] Update all domain URLs to your actual domain
- [ ] Update sitemap.xml with correct domain and dates
- [ ] Test contact form functionality
- [ ] Verify all links work correctly
- [ ] Test on multiple devices/browsers
- [ ] Check Google Search Console setup
- [ ] Verify social media previews (Open Graph)
- [ ] Test page load speed (aim for <3 seconds)
- [ ] Ensure HTTPS is enabled
- [ ] Backup your code

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with custom properties
- **JavaScript (ES6+)**: Interactive functionality
- **Canvas API**: Skills network visualization
- **EmailJS**: Contact form email service
- **Google Fonts**: Typography

## 📧 Contact

- **Email**: khashrul.cse@gmail.com
- **Phone**: 01921328498
- **LinkedIn**: https://www.linkedin.com/in/b-m-khashrul-alam-2547a196/
- **GitHub**: https://github.com/khashrul

## 📄 License

All rights reserved © 2025 B.M. Khashrul Alam

