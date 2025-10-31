# 🚀 GitHub Setup Guide

## Step-by-Step Instructions to Push Your Portfolio to GitHub

### Prerequisites
- GitHub account (create at https://github.com if you don't have one)
- Git installed on your computer

### Step 1: Create a New Repository on GitHub

1. Go to https://github.com and sign in
2. Click the **+** icon (top right) → **New repository**
3. Repository name: `portfolio` (or any name you prefer)
4. Description: `Personal portfolio website - Backend Engineer specializing in E-Commerce & ERP Systems`
5. Set to **Public** (for free GitHub Pages hosting)
6. **DO NOT** initialize with README, .gitignore, or license (we already have these)
7. Click **Create repository**

### Step 2: Initialize Git in Your Local Folder

Open terminal/command prompt in your portfolio directory and run:

```bash
# Navigate to your portfolio folder
cd /var/www/html/portfolio

# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Portfolio website"

# Add your GitHub repository as remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Rename main branch (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

### Step 3: Replace Placeholder URLs

After pushing, you'll need to update URLs in your code:

**In `index.html`:**
- Replace `yourusername` with your actual GitHub username in:
  - Line 29: `og:url`
  - Line 51: `url` meta tag
  - Line 88: Schema.org `url`

**In `sitemap.xml`:**
- Replace all `https://khashrul.com` with `https://yourusername.github.io/portfolio`

**In `robots.txt`:**
- Replace `https://khashrul.com` with `https://yourusername.github.io/portfolio`

Then commit these changes:
```bash
git add .
git commit -m "Update URLs with GitHub Pages domain"
git push
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll to **Pages** section (left sidebar)
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**
6. Wait 1-2 minutes for GitHub to build your site
7. Your site will be live at: `https://yourusername.github.io/portfolio`

### Step 5: Set Up Custom Domain (Optional)

If you have a custom domain (e.g., `khashrul.com`):

1. In GitHub Pages settings, add your custom domain
2. Update DNS records:
   - Add CNAME record: `www` → `yourusername.github.io`
   - Or A record: `@` → GitHub IPs (see GitHub Pages docs)
3. Wait for DNS propagation (up to 48 hours)
4. Update all URLs in your code to use custom domain

### Step 6: Configure EmailJS

⚠️ **Important**: EmailJS credentials are NOT in the code (placeholder values).

1. Sign up at https://www.emailjs.com
2. Create email service
3. Create email template
4. Update `script.js`:
   - Line 515: Your Public Key
   - Line 545: Your Service ID
   - Line 545: Your Template ID
5. Commit and push:
   ```bash
   git add script.js
   git commit -m "Configure EmailJS credentials"
   git push
   ```

## 📝 Useful Git Commands

```bash
# Check status
git status

# See what files changed
git diff

# Add specific file
git add filename.html

# Commit changes
git commit -m "Your commit message"

# Push to GitHub
git push

# Pull latest changes (if working from multiple locations)
git pull

# See commit history
git log

# Create new branch
git checkout -b feature-name

# Switch branches
git checkout main
```

## 🔒 Security Notes

- ✅ `.gitignore` is set up to exclude sensitive files
- ✅ EmailJS keys should be configured but code has placeholders
- ⚠️ Never commit `.env` files with API keys
- ⚠️ Review all files before committing

## 📦 What Gets Pushed

All these files will be on GitHub:
- ✅ `index.html` - Main HTML file
- ✅ `styles.css` - Styles
- ✅ `script.js` - JavaScript (with EmailJS placeholders)
- ✅ `profile.png` - Profile image
- ✅ `favicon.svg` - Favicon
- ✅ `robots.txt` - SEO
- ✅ `sitemap.xml` - SEO
- ✅ `site.webmanifest` - PWA
- ✅ `browserconfig.xml` - Windows tiles
- ✅ `README.md` - Documentation

## 🎯 Next Steps After Pushing

1. ✅ Enable GitHub Pages
2. ✅ Update all URLs with your GitHub Pages domain
3. ✅ Configure EmailJS
4. ✅ Test the live site
5. ✅ Submit to Google Search Console (optional)
6. ✅ Share your portfolio!

---

**Quick Start Commands** (copy-paste after creating repo):

```bash
cd /var/www/html/portfolio
git init
git add .
git commit -m "Initial commit: Portfolio website"
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username!

