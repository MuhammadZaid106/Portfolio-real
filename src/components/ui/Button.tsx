import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  showArrow?: boolean;
  href?: string;
  children: React.ReactNode;
}

const Button = React.forwardRef<any, ButtonProps>(
  ({ children, variant = 'primary', size = 'md', showArrow = false, className = '', href, ...props }, ref) => {
    // Size styles
    const sizeStyles = {
      sm:  'px-4 py-2 text-sm gap-1.5',
      md:  'px-6 py-2.5 text-sm gap-2',
      lg:  'px-8 py-3.5 text-base gap-2.5',
    }[size];

    // Base styles
    const baseStyles = `group inline-flex items-center justify-center font-sans font-semibold rounded-full
      transition-all duration-300 ease-out
      focus-visible:outline-2 focus-visible:outline-offset-2
      disabled:opacity-50 disabled:pointer-events-none
      active:scale-[0.97] cursor-pointer ${sizeStyles}`;

    // Variant styles
    const variantStyles: Record<string, string> = {
      // Mint green → on hover: near-black bg + mint text
      primary: `
        bg-[#52c48a] text-[#0f1a14]
        border border-transparent
        hover:bg-[#18181b] hover:text-[#52c48a]
        shadow-sm hover:shadow-[0_0_18px_rgba(82,196,138,0.18)]
      `,
      // Semi-transparent white border → on hover: near-black bg + mint text
      outline: `
        bg-white/5 border border-white/30 text-white
        backdrop-blur-sm
        hover:bg-[#18181b]/90 hover:text-[#52c48a] hover:border-[#18181b]
      `,
      // Dark pill button
      secondary: `
        bg-[#18181b] text-white border border-white/10
        hover:bg-[#27272a] hover:border-white/20
      `,
      ghost: `
        text-foreground px-4 py-2 rounded-lg
        hover:bg-black/5 hover:text-foreground
      `,
    };

    const combinedClasses = `${baseStyles} ${variantStyles[variant] ?? ''} ${className}`;

    const content = (
      <>
        <span>{children}</span>
        {showArrow && (
          <ArrowUpRight
            className="w-4 h-4 transition-transform duration-300 ease-out
              group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        )}
      </>
    );

    if (href) {
      // If href is present, render Next.js Link instead of button
      return (
        <Link href={href} className={combinedClasses} {...(props as any)}>
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        className={combinedClasses}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;