# Official KNS Consultancy Website

Welcome to the **Official KNS Consultancy Website** repository. This is a professional, responsive, and modern web application built for Knowledge Network Systems (KNS).

## 🚀 Tech Stack

- **Frontend**: Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS, Framer Motion (for animations), and Lucide React (for icons). The frontend environment runs natively in the browser with server-side rendering support.
- **Backend**: Next.js Serverless Functions. The server environment uses Node.js (v20) and handles API routing and server-side logic through Next.js deployment capabilities.
- **Database**: State and data logic is structured to be extensible. Once an active database (e.g., PostgreSQL, MongoDB) is connected, queries run securely via the backend. Environment variables handle the connection details on the hosting platform.

## 🌐 Deployment & Architecture

- **Where it runs**:
  - **Frontend & Backend**: The application is configured and actively deployed on **Netlify** (managed natively via `netlify.toml`). Netlify seamlessly handles the static frontend assets on its global Edge network alongside the Next.js server actions / SSR via serverless functions.
- **URLs**:
  - **Production URL**: *(Configured within the Netlify Dashboard — mapped to the official KNS domain)*
  - **Local URL**: `http://localhost:3000`

## ✨ Key Features

- **Hero Section**: Includes a **5-image sliding animation** that continuously loops from left to right (20s duration, featuring tech themes: meetings, data center, cybersecurity, cloud computing, IT training).
- **Responsive Design**: Mobile-first UI using modern paradigms.
- **Color Scheme**:
  - **Primary Mauve**: `#E0B0FF`
  - **Secondary**: White `#FFFFFF`
  - **Accent**: Charcoal Gray `#333333`
- **Sections**: Detailed routing for About, Services (Cybersecurity, Partner Services, Digital Transformation, etc.), Training, Gallery, Contact, and Auth.

## 👨‍💻 Team

- **Lead Developer**: Abdul Salim Gani

## 📦 Project Structure

```text
/
├── app/                  # Next.js 14 App Router routes (about, services, contact, etc.)
├── components/           # Reusable UI components (Navbar, Hero, Testimonials, Footer)
├── public/               # Static assets (images, fonts, formatting)
├── lib/                  # Utilities (e.g., readingTime.ts)
├── package.json          # Project dependencies and scripts
└── netlify.toml          # Netlify build and deployment config
```

## 🛠️ Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Navigate to the site**: Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🤝 How to Contribute

We welcome contributions from other developers to enhance the platform!

1. **Branch**: Check out a new branch (`git checkout -b feature/your-feature-name` or `bugfix/issue-description`).
2. **Develop**: Write your code. Make sure to adhere to the existing UI paradigms, TypeScript strictness, and Tailwind utility standards.
3. **Test**: Run `npm run dev` and ensure there are no errors in our components or animations. Additionally, ensure `npm run build` succeeds locally without warnings.
4. **Commit**: Keep commits clean and descriptive.
   ```bash
   git commit -m "feat: implement dynamic routing for blog"
   ```
5. **Push and PR**: Push your changes to your branch and open a Pull Request against the main repository branch.
6. **Review**: The **Lead Developer (Abdul Salim Gani)** or another maintainer will review your code. Address any requested changes, and once approved, your code will be merged into production!

## 📄 License

This project is proprietary and confidential.

---

> **Built for Knowledge Network Systems (KNS)**
