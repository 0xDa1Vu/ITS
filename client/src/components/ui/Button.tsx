'use client';

import { type LucideIcon } from 'lucide-react';
import { forwardRef, type ButtonHTMLAttributes } from 'react';

const base =
  'inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-border-focus)] focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';

const variants = {
  primary:
    'bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] hover:bg-[var(--btn-primary-bg-hover)]',
  secondary:
    'bg-[var(--btn-secondary-bg)] text-[var(--btn-secondary-text)] hover:bg-[var(--btn-secondary-bg-hover)]',
  ghost:
    'text-[var(--btn-ghost-text)] hover:bg-[var(--btn-ghost-hover-bg)]',
} as const;

const sizes = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-9 px-4 text-sm',
  lg: 'h-10 px-5 text-sm',
} as const;

export type ButtonVariant = keyof typeof variants;
export type ButtonSize = keyof typeof sizes;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: LucideIcon;
  rightIcon?: LucideIcon;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = '',
      variant = 'primary',
      size = 'md',
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      children,
      ...props
    },
    ref
  ) => {
    const iconSize = size === 'sm' ? 14 : size === 'lg' ? 18 : 16;

    return (
      <button
        ref={ref}
        type="button"
        className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {LeftIcon && <LeftIcon size={iconSize} strokeWidth={2} aria-hidden />}
        {children}
        {RightIcon && <RightIcon size={iconSize} strokeWidth={2} aria-hidden />}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
