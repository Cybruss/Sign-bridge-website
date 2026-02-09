# Sign Bridge - FYP Website

A clean, responsive landing page for the Sign Bridge Final Year Project. It presents the project concept, two-way translation approach, core modules, and team details for examiners.

## 📋 Project Overview

**Sign Bridge** (the project) focuses on:
- Real-time sign language recognition
- On-device processing for privacy
- Dual-hand landmark tracking
- TensorFlow Lite classification
- Bidirectional flow (Sign → Text, Text → Sign)

## 🎯 Features

### ✨ Design
- Soft color palette and clean typography
- Minimal, smooth animations
- High-contrast text for readability
- Fully responsive layout

### 🎨 Sections Included
1. **Hero**
2. **Project Overview**
3. **Related Work**
4. **Problem Statement**
5. **Solution (Sign → Text)**
6. **Solution (Text → Sign)**
7. **Methodology & Architecture**
8. **Main Modules**
9. **Proposal Highlights**
10. **Supervisor & Team**

### ⚙️ Interactive Features
- Smooth scroll navigation
- Mobile hamburger menu
- Scroll reveal animations

### 🔧 Technical Stack
- **HTML5**
- **CSS3** (Grid & Flexbox)
- **Vanilla JavaScript**
- **Font Awesome**
- **Google Fonts** (Poppins + Inter)

## 📁 Project Structure

```
website_sign_bridge/
├── index.html                 # Main HTML file
├── css/
│   ├── style.css             # Main stylesheet
│   └── responsive.css        # Responsive breakpoints
├── js/
│   ├── main.js               # Core functionality
│   └── animations.js         # Advanced animations
├── assets/                   # Images, icons, etc.
└── README.md                 # This file
```

## 🚀 Quick Start

### 1. Installation
No installation required! This is a static website.

Clone or download the repository:
```bash
git clone https://github.com/yourusername/website_sign_bridge.git
cd website_sign_bridge
```

### 2. Local Development
Option A: Using Python (Python 3)
```bash
python -m http.server 8000
# Navigate to http://localhost:8000
```

Option B: Using Node.js (http-server)
```bash
npm install -g http-server
http-server
# Navigate to http://localhost:8080
```

Option C: Using VS Code Live Server
- Install "Live Server" extension in VS Code
- Right-click on `index.html` → "Open with Live Server"

### 3. Production Deployment

#### Deploy to GitHub Pages
```bash
git add .
git commit -m "Deploy Sign Bridge landing page"
git push origin main
```
Then enable GitHub Pages in repository settings.

#### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

#### Use with Google Sites
1. Deploy to Vercel and copy the public URL.
2. Google Sites → Insert → Embed → By URL.
3. Paste the Vercel URL and publish.

## 🎨 Customization

### Change Colors
Edit the CSS variables in `css/style.css` (top of file):
```css
:root {
  --primary-soft: #6B8EF7;
  --secondary-soft: #4ECDC4;
  /* ... */
}
```

### Update Team Members
Edit the Team Section in `index.html` (search for "Project Team"):
```html
<div class="team-card">
    <h3>Your Name</h3>
    <p class="team-role">Your Role</p>
    <p class="team-bio">Your bio</p>
</div>
```

### Add Your Own Content
Simply edit the relevant sections in `index.html`. The structure is self-explanatory with clear comments.

### Modify Navigation Links
Update the nav menu in `index.html` navbar section to add/remove links.

## 📝 Notes
- Replace images in the `assets/` folder with your final assets.
- Keep image names consistent with `index.html` paths.

---

*Last Updated: February 2026*
