import React from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  ExternalLink,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#04100b] text-white pt-20 pb-6 relative overflow-hidden border-t border-gray-900">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#52c48a]/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/5">
          {/* Left Info Panel (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <span className="text-4xl font-bold tracking-tight text-green-500 font-sans">
                Zaid<span className="text-[#ffffff]">.</span>
              </span>
              <p className="text-gray-400 text-xs sm:text-sm font-sans mt-3 leading-relaxed max-w-sm">
                Full-Stack Developer building high-performance, responsive web
                products for startups and enterprises globally.
              </p>
            </div>

            {/* Direct contact items */}
            <div className="space-y-3 font-sans">
              <a
                href="tel:+923294633734"
                className="flex items-center gap-3 text-sm text-gray-300 hover:text-[#52c48a] transition-colors group w-fit"
              >
                <Phone className="w-4 h-4 text-[#52c48a]" />
                <span>+92 329 4633734</span>
              </a>
              <a
                href="mailto:zaidnaeem106@gmail.com"
                className="flex items-center gap-3 text-sm text-gray-300 hover:text-[#52c48a] transition-colors group w-fit"
              >
                <Mail className="w-4 h-4 text-[#52c48a]" />
                <span>zaidnaeem106@gmail.com</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[
                {
                  icon: <Github className="w-4 h-4" />,
                  href: "https://github.com/MuhammadZaid106",
                  label: "GitHub",
                },
                {
                  icon: <Linkedin className="w-4 h-4" />,
                  href: "https://www.linkedin.com/in/zaidnaeemdev/",
                  label: "LinkedIn",
                },
                {
                  icon: <FaWhatsapp className="w-4 h-4" />,
                  href: "https://wa.me/923294633734",
                  label: "WhatsApp",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-[#52c48a] hover:text-[#0a0f0d] hover:border-[#52c48a] transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links (8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-xs font-medium text-green-500 uppercase tracking-widest font-sans">
                Services
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-400 font-sans">
                <li>
                  <a
                    href="/services"
                    className="hover:text-white transition-colors"
                  >
                    Web Apps
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="hover:text-white transition-colors"
                  >
                    E-Commerce
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="hover:text-white transition-colors"
                  >
                    SaaS Dashboards
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="hover:text-white transition-colors"
                  >
                    AI Integrations
                  </a>
                </li>
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="space-y-4">
              <h4 className="text-xs font-medium text-green-500 uppercase tracking-widest font-sans">
                Tech Stack
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-400 font-sans">
                <li>
                  <span className="hover:text-white transition-colors cursor-default">
                    Next.js / React
                  </span>
                </li>
                <li>
                  <span className="hover:text-white transition-colors cursor-default">
                    TypeScript
                  </span>
                </li>
                <li>
                  <span className="hover:text-white transition-colors cursor-default">
                    Tailwind CSS
                  </span>
                </li>
                <li>
                  <span className="hover:text-white transition-colors cursor-default">
                    Node / Python
                  </span>
                </li>
              </ul>
            </div>

            {/* Process */}
            <div className="space-y-4">
              <h4 className="text-xs font-medium text-green-500 uppercase tracking-widest font-sans">
                Solutions
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-400 font-sans">
                <li>
                  <span className="hover:text-white transition-colors cursor-default">
                    Staff Augmentation
                  </span>
                </li>
                <li>
                  <span className="hover:text-white transition-colors cursor-default">
                    Dedicated Contract
                  </span>
                </li>
                <li>
                  <span className="hover:text-white transition-colors cursor-default">
                    Remote Consulting
                  </span>
                </li>
                <li>
                  <span className="hover:text-white transition-colors cursor-default">
                    Full-Stack Delivery
                  </span>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h4 className="text-xs font-medium text-green-500 uppercase tracking-widest font-sans">
                Company
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-400 font-sans">
                <li>
                  <a
                    href="/about"
                    className="hover:text-white transition-colors"
                  >
                    About Me
                  </a>
                </li>
                <li>
                  <a
                    href="/work"
                    className="hover:text-white transition-colors"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/MuhammadZaid106"
                    target="_blank"
                    rel="noopener"
                    className="hover:text-white transition-colors flex items-center gap-1"
                  >
                    Open Source <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Global Offices Area (Clean minimal grid, no emoji flags for platform safety) */}
        <div className="py-10 grid grid-cols-2 md:grid-cols-5 gap-6 border-b border-white/5">
          {[
            { region: "United States", city: "San Francisco, CA" },
            { region: "United Kingdom", city: "London, EC1A" },
            { region: "Germany", city: "Berlin, Mitte" },
            { region: "Canada", city: "Toronto, ON" },
            { region: "Pakistan", city: "Lahore, Punjab" },
          ].map((loc) => (
            <div key={loc.region} className="font-sans space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#52c48a]" />
                <span className="text-xs font-bold text-white/90">
                  {loc.region}
                </span>
              </div>
              <p className="text-[11px] text-gray-400 leading-relaxed pl-3.5">
                {loc.city}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-gray-400">
          <p>&copy; {currentYear} Zaid. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
