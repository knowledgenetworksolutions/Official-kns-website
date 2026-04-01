# Official KNS Consultancy Website

Welcome to the **Official KNS Consultancy Website** repository. This is a professional, responsive, and modern web application built for Knowledge Network Systems (KNS).

## 🚀 Current Status: Production Ready

The codebase has undergone a comprehensive **CI/CD Stabilization & Linting Resolution** phase. As of April 2026, the project is:
- **100% ESLint Clean**: Adheres strictly to `next/core-web-vitals` standards.
- **Build Verified**: Successfully generates all 56 static pages with zero errors.
- **Optimized**: Cleaned of all temporary audit reports and build artifacts.

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS, Framer Motion (for animations), and Lucide React (for icons).
- **Backend**: Next.js Serverless Functions.
- **Database**: Extensible architecture ready for PostgreSQL, MongoDB, or other enterprise-grade databases.
- **Deployment**: Configured for **Netlify** / **Vercel** with native `netlify.toml` support.

## ✨ Key Features

- **Hero Section**: Dynamic 5-image sliding animation with tech-themed transitions.
- **Service Specializations**: Dedicated modules for **Cybersecurity**, **Digital Transformation**, **Telecommunications**, and **Digital Skills**.
- **Responsive Design**: Mobile-first, high-performance UI using Tailwind CSS.
- **Brand Palette**:
  - **Primary Mauve**: `#E0B0FF`
  - **Secondary**: White `#FFFFFF`
  - **Accent**: Charcoal Gray `#333333`

## 👨‍💻 Team

- **Lead Developer**: Abdul Salim Gani

## 📦 Project Structure

```text
/
├── app/                  # Next.js 14 App Router routes (about, services, contact, etc.)
├── components/           # Reusable UI components (Navbar, Hero, Testimonials, Footer)
├── public/               # Static assets (images, fonts, branding)
├── lib/                  # Utilities (e.g., readingTime.ts, security-helpers)
├── package.json          # Project dependencies and scripts
└── netlify.toml          # Netlify build and deployment config
```

## 🛠️ Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run Lint Check**:
   ```bash
   npm run lint
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Production Build Verification**:
   ```bash
   npm run build
   ```

## 🤝 Contribution Guidelines

We maintain a high standard for code quality and UI performance.

1. **Branch Management**: Use `feature/` or `bugfix/` prefixes.
2. **Entity Escaping**: Ensure all `'`, `&`, and `"` characters in JSX are escaped (e.g., `&apos;`, `&amp;`) to maintain build stability.
3. **Build Integrity**: All PRs must pass `npm run build` without errors before merging.
4. **Review Process**: All changes are reviewed by the **Lead Developer (Abdul Salim Gani)**.

## 📄 License

This project is proprietary and confidential.

---

> **Built for Knowledge Network Systems (KNS)**
