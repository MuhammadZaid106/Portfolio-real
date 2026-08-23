# 💻 Zaid — Full-Stack Developer Portfolio

Welcome to the official repository of my personal portfolio website. Built with premium aesthetics, fluid interactive animations, and a modern high-tech design language.

🚀 **Live Site:** [zaidn.vercel.app](https://zaidn.vercel.app/)

---

## 🛠️ Technology Stack

This website is engineered using state-of-the-art web technologies for maximum performance, clean developer experience, and design excellence:

- **Core Framework:** Next.js 16 (App Router)
- **Programming Language:** TypeScript
- **Styling Engine:** Tailwind CSS & Custom CSS
- **Animation System:** Framer Motion (Fluid micro-interactions & entrance animations)
- **Iconography:** Lucide Icons & React Icons (granularity optimized)
- **Form Submissions:** Resend API integration (secured via dynamic server API routes)

---

## ✨ Features

- **Dynamic Navigation:** Header automatically tracks active paths (`/`, `/about`, `/work`, `/services`, `/contact`) using custom React hooks & `usePathname`.
- **Sleek Custom 404 Page:** High-tech error template with interactive navigation redirects.
- **Contact & Project Intake Form:** Fully responsive mobile-ready layout with loading states, inline error catches, and dynamic email routing.
- **Portfolio Showcase:** Displays live-deployed production websites including e-commerce platforms, real estate hubs, and travel portals.
- **High-Performance:** 100% static generation for content pages combined with serverless API dynamic routing.

---

## 📁 File Structure

```bash
├── src
│   ├── app
│   │   ├── about            # About page route
│   │   ├── contact          # Contact page route
│   │   ├── services         # Services page route
│   │   ├── work             # Work portfolio page route
│   │   ├── api/contact      # Contact form API backend (Resend)
│   │   ├── layout.tsx       # Global wrappers & metadata
│   │   └── not-found.tsx    # Custom 404 error page
│   ├── components
│   │   ├── layout           # Header & Footer modules
│   │   ├── sections/home    # Modular homepage component sections
│   │   └── ui               # Reusable UI primitives (Button, FadeIn, etc.)
│   └── data                 # Static content configuration data
```

---

## ⚙️ Environment Variables Setup

To run the contact form submissions, create a `.env.local` file in the root directory and add your Resend API configuration:

```env
RESEND_API_KEY=your_resend_api_key_here
CONTACT_EMAIL=your_inbox_email_here
```

---

## 🚀 Getting Started

Follow these steps to run the project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/MuhammadZaid106/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Run the development server:**
   ```bash
   pnpm dev
   ```

4. **Open the browser:**
   Go to [http://localhost:3000](http://localhost:3000) to view your local deployment.

---

## 🔗 Project Showcase

A selection of live client projects displayed on my portfolio:

- 🛒 [Pegador Streetwear E-Commerce](https://pegador.vercel.app/)
- ✈️ [Aetheria Travel Booking Portal](https://aetheria-travel.vercel.app/)
- 🏠 [Landly Real Estate Directory](https://landlyrealestate.vercel.app/)
- 🛍️ [AetherMart General Store](https://aethermart.vercel.app/)
- 👤 [Zaid Personal Portfolio](https://zaidn.vercel.app/)

---

## 📬 Contact & Socials

- **Email:** [zaidnaeem106@gmail.com](mailto:zaidnaeem106@gmail.com)
- **LinkedIn:** [zaidnaeemdev](https://www.linkedin.com/in/zaidnaeemdev/)
- **GitHub:** [MuhammadZaid106](https://github.com/MuhammadZaid106)
- **Instagram:** [@zaid.devv](https://instagram.com/zaid.devv)
