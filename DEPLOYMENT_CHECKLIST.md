# 🚀 Deployment Checklist

## Critical - Must Do Before Going Live

### ✅ EmailJS Configuration
- [ ] Sign up at https://www.emailjs.com
- [ ] Create email service (Gmail/Outlook)
- [ ] Create email template with variables: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`
- [ ] Update `script.js` line 515: Replace `YOUR_PUBLIC_KEY`
- [ ] Update `script.js` line 545: Replace `YOUR_SERVICE_ID`
- [ ] Update `script.js` line 545: Replace `YOUR_TEMPLATE_ID`
- [ ] Test contact form sends email successfully

### ✅ Domain & URLs
- [ ] Replace `https://khashrul.com` with your actual domain in:
  - `index.html` line 29 (og:url)
  - `index.html` line 51 (url meta)
  - `index.html` line 88 (schema url)
  - `sitemap.xml` (all URLs)
  - `robots.txt` (sitemap URL)
- [ ] Update `<lastmod>` dates in `sitemap.xml` to current date

### ✅ Files Verification
- [x] ✅ `favicon.svg` - Created
- [x] ✅ `site.webmanifest` - Created
- [x] ✅ `browserconfig.xml` - Created
- [x] ✅ `robots.txt` - Created
- [x] ✅ `sitemap.xml` - Created
- [x] ✅ `README.md` - Created

## Important - Strongly Recommended

### ✅ SEO Optimization
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify Google Search Console ownership
- [ ] Test Open Graph previews (use: https://www.opengraph.xyz/)
- [ ] Test Twitter Card previews
- [ ] Add `og:image` meta tag for social sharing (recommended: 1200x630px)

### ✅ Performance
- [ ] Test page speed with Google PageSpeed Insights
- [ ] Optimize `profile.png` image (compress, consider WebP)
- [ ] Consider lazy loading images
- [ ] Enable GZIP compression on server
- [ ] Enable browser caching

### ✅ Security
- [ ] Ensure HTTPS is enabled (required for EmailJS)
- [ ] Add Content Security Policy (CSP) headers
- [ ] Consider rate limiting for contact form
- [ ] Remove any test/development endpoints

### ✅ Testing
- [ ] Test contact form on multiple devices
- [ ] Test all navigation links
- [ ] Test skills network hover effects
- [ ] Test responsive design (mobile, tablet, desktop)
- [ ] Test on different browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test email sending functionality
- [ ] Verify all social links work

### ✅ Analytics (Optional but Recommended)
- [ ] Add Google Analytics tracking code
- [ ] Set up Google Search Console
- [ ] Consider adding heatmap tool (Hotjar, etc.)

## Nice to Have - Future Improvements

- [ ] Add service worker for offline support (PWA)
- [ ] Implement dark/light theme toggle
- [ ] Add blog section
- [ ] Add testimonials section
- [ ] Add download resume button
- [ ] Add certificate/achievements section
- [ ] Add animations library (Framer Motion, GSAP)
- [ ] Add multi-language support
- [ ] Add Google Analytics events tracking
- [ ] Optimize canvas rendering performance

## Post-Deployment

- [ ] Monitor Google Search Console for indexing issues
- [ ] Check server logs for errors
- [ ] Monitor EmailJS usage (free tier limits)
- [ ] Set up uptime monitoring
- [ ] Backup code regularly
- [ ] Keep dependencies updated

---

## Quick Test Commands

```bash
# Check HTML validation
# Use: https://validator.w3.org/

# Check CSS validation
# Use: https://jigsaw.w3.org/css-validator/

# Check mobile-friendliness
# Use: https://search.google.com/test/mobile-friendly

# Check page speed
# Use: https://pagespeed.web.dev/
```

---

**Last Updated**: January 2025
**Domain to Update**: Replace `khashrul.com` with your actual domain

