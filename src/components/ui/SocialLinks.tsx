"use client";

import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { useState } from "react";

const socials = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/MuhammadZaid106",
    hoverBg: "#24292e",
    hoverText: "#ffffff",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/zaidnaeemdev/",
    hoverBg: "#0a66c2",
    hoverText: "#ffffff",
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com/",
    hoverBg: "#1d9bf0",
    hoverText: "#ffffff",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://instagram.com/zaid.devv",
    hoverBg: "#e1306c",
    hoverText: "#ffffff",
  },
];

function SocialButton({
  icon: Icon,
  label,
  href,
  hoverBg,
  hoverText,
}: (typeof socials)[0]) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="w-11 h-11 rounded-xl border shadow-sm flex items-center justify-center transition-all duration-300"
      style={{
        backgroundColor: hovered ? hoverBg : "#ffffff",
        color: hovered ? hoverText : "#5c6c64",
        borderColor: hovered ? "transparent" : "#e5e7eb",
        boxShadow: hovered ? "0 4px 12px rgba(0,0,0,.15)" : undefined,
      }}
    >
      <Icon className="w-5 h-5" />
    </a>
  );
}

export default function SocialLinks() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
      <p className="text-[#5c6c64] text-sm font-sans">Find me on:</p>
      <div className="flex items-center gap-4">
        {socials.map((s) => (
          <SocialButton key={s.label} {...s} />
        ))}
      </div>
    </div>
  );
}
