# Official KNS Consultancy Website: Digital Transformation for West Africa

Welcome to the **Official KNS Consultancy Website** repository. This platform is the digital flagship of Knowledge Network Systems (KNS), a premier technology, telecommunications, and cybersecurity consultancy firm driving innovation across Sierra Leone and the Mano River region.

## 🚀 Project Overview

The KNS Consultancy Website is a high-performance, responsive web application designed to serve as a one-stop hub for digital transformation services. Recognized as the **"Digital Skills Champion 2025"** by the Ministry of Communication, Technology & Innovation (MoCTI), KNS leverages this platform to empower citizens, support institutional digital growth, and secure national digital ecosystems.

### Core Service Modules
- **Cybersecurity & Threat Analysis**: SOC operations, SecOps advisory, and penetration testing.
- **Digital Skills & IC3 Training**: Global certification pathways (Pearson VUE, Certiport).
- **Telecommunications Engineering**: Fiber-optic design, MPLS networks, and enterprise connectivity.
- **Customer Experience & Inbound Support**: Professional call-center and managed support operations.
- **Enterprise & Digital Strategy**: Driving national initiatives like the **"Big 5" Innovation Challenge**.

---

## ✨ 2026 Modernization & UI/UX Enhancements

The platform has undergone a significant visual and functional upgrade to ensure a premium, production-ready experience:

### 🎨 Visual & Section Upgrades
- **About KNS**: Fully modernized with high-resolution hero imagery (`KNS-TECH-HUB`) and a sleek, two-column responsive layout.
- **Blog & News**: Integrated contextually relevant visuals for key awards (MOCTI 2025), cybersecurity training, and official event invitations.
- **Hero Interactivity**: Optimized the scrolling image track to **60vw** for a more immersive, widescreen storytelling experience.

### 🔔 Production-Ready Notifications
- **Animated Toast System**: Replaced standard browser `alert()` popups with a custom, high-performance Toast notification system built with **Framer Motion**.
- **Context-Aware Feedback**: Standardized Success, Error, and Info messages across all forms (Contact, Newsletter, and Sharing).

### 📈 Content Updates
- **Big 5 Innovation Challenge**: Officially documented KNS's invitation by the Ministry of Communication, Technology, and Innovation (MoCTI) to lead digital solutions in Sierra Leone.

---

## 🌐 Hosting & Infrastructure

The application is architected for maximum resilience and high availability, specifically optimized for regional delivery.

- **Primary Production Host**: **Sector Link** (`kns.sl`)
- **Git Remote Target**: `sectorlink` (git@kns.sl:kns-website.git)
- **Deployment Strategy**:
  - Hosted on **Sector Link's Infrastructure**, providing localized, low-latency access for West African stakeholders.
  - Next.js 14 App Router architecture ensures fast server-side rendering (SSR) and static site generation (SSG) on the Sector Link network.
  - Verified for production on **Node.js v20+** environments.

---

## 🏗️ Architecture & Technology Stack

- **Framework**: [Next.js 14.2](https://nextjs.org/) (App Router)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS (Mobile-first, Responsive)
- **Animations**: Framer Motion (Optimized sliding Hero and entry transitions)
- **Icons**: Lucide React (Tree-shaken)
- **Optimization**: Standardized next/image utilization with AVIF/WebP support.

---

## 👨‍💻 Team & Leadership

- **Co-Founders**: Desmond Macfoy (CEO) & Chinedu D. G. Nwaefuna (CISO)
- **Lead Developer**: Abdul Salim Gani
- **Contributors**: Future technology leaders dedicated to African digital resilience.

---

## 🛠️ Local Development

1. **Clone the Project**:
   ```bash
   git clone https://github.com/Officialsalim12/KNS_WEBSITE.git
   cd KNS_WEBSITE
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run Development Server**:
   ```bash
   npm run dev
   ```

4. **Verify Build**:
   ```bash
   npm run build
   ```

---

## 🤝 Professional Contribution Guide

We maintain high architectural and coding standards. Please follow these guidelines:

### 1. Branching Strategy
- **`main`**: Stable, production-ready branch (Sector Link branch).
- **`feature/name`**: New feature development.
- **`bugfix/description`**: Targeted issue resolution.

### 2. Coding Standards
- **Component Integrity**: Keep UI components reusable and separate from business logic.
- **Entity Escaping**: **WARNING:** All special characters (`'`, `"`, `&`) in JSX text must be escaped (e.g., `&apos;`, `&amp;`) to maintain build compliance.
- **Server Components**: Prefer Server Components by default. Use `"use client"` only for client-side interactivity.

### 3. Submission Checklist
- [ ] Run `npm run lint` and ensure ZERO errors/warnings.
- [ ] Run `npm run build` and ensure the production build completes with **Exit Code 0**.
- [ ] Verify responsiveness on Mobile and Desktop viewports.
- [ ] Ensure all images use `next/image` with proper `alt` descriptions.

### 4. Pull Requests
Open a PR against the `main` branch. The **Lead Developer (Abdul Salim Gani)** or a board member will review the changes before they are synced to the **Sector Link** production environment.

---

## 📄 License

This project is proprietary and confidential.

> **Empowering a Smarter Digital Future for Sierra Leone.**
