# Pragya Singh — Portfolio

A modern, responsive portfolio website built with React.js and styled with pure CSS variables and animations.

---

## 🚀 Run Locally

### Prerequisites
- Node.js v16+ installed ([download](https://nodejs.org))
- npm or yarn

### Steps

```bash
# 1. Unzip the folder and enter it
cd pragya-portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm start
```

Your portfolio will open at **http://localhost:3000**

---

## 🌐 Deploy to Vercel (Free Hosting)

### Option A — Via GitHub (Recommended)

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → Sign up/Login with GitHub
3. Click **"New Project"** → Import your repo
4. Vercel auto-detects React → Click **Deploy**
5. Your site is live at `your-name.vercel.app` in ~2 minutes!

### Option B — Via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Build and deploy
npm run build
vercel --prod
```

---

## 📁 Project Structure

```
pragya-portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js       # Sticky nav with smooth scroll
│   │   ├── Hero.js         # Animated hero with typewriter
│   │   ├── About.js        # About + profile card
│   │   ├── Projects.js     # 7 project cards
│   │   ├── Skills.js       # Animated skill bars
│   │   ├── Experience.js   # Internship + certifications
│   │   └── Contact.js      # Contact links + footer
│   ├── hooks/
│   │   └── useInView.js    # Scroll animation hook
│   ├── App.js
│   ├── index.js
│   └── index.css           # Global styles + CSS variables
├── vercel.json
└── package.json
```

---

## ✏️ Customization

| What to change | Where |
|---|---|
| LinkedIn / GitHub links | `Hero.js` and `Contact.js` |
| Resume file | Add `resume.pdf` to `/public/` folder |
| Project details | `Projects.js` → PROJECTS array |
| Skills & levels | `Skills.js` → SKILLS array |
| Experience | `Experience.js` |
| Colors / theme | `index.css` → `:root` CSS variables |

### To add your resume:
Place your PDF file at: `public/resume.pdf`

---

## 🎨 Tech Stack

- **React.js** — Component-based UI
- **Pure CSS** — CSS variables, animations, no Tailwind needed
- **Intersection Observer API** — Scroll-triggered animations
- **Google Fonts** — Syne (display) + DM Sans (body)
- **Vercel** — Zero-config deployment

---

Built with ❤️ for Pragya Singh's placement journey.
