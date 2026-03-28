'use client';

import { useState } from 'react';
import Link from 'next/link';
import { LogIn, Menu, X, Phone } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Thuê xe tự lái', href: '#vehicles' },
  { label: 'Bảng giá', href: '#pricing' },
  { label: 'Quy trình', href: '#process' },
  { label: 'Hỏi đáp', href: '#faq' },
  { label: 'Liên hệ', href: '#contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-secondary text-white">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-xl font-bold no-underline text-white">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-secondary font-black text-sm">
            GF
          </span>
          Green Future
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-300 hover:text-primary transition-colors no-underline"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:19001877"
            className="flex items-center gap-1.5 text-sm text-primary font-semibold no-underline"
          >
            <Phone size={16} />
            1900 1877
          </a>
          <Link
            href="/login"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-secondary font-semibold text-sm hover:bg-primary-dark transition-colors no-underline"
          >
            <LogIn size={16} />
            Đăng nhập
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden p-2 text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-secondary-light border-t border-white/10 px-6 pb-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-2 text-sm text-gray-300 hover:text-primary no-underline"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/login"
            className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-secondary font-semibold text-sm no-underline"
            onClick={() => setMobileOpen(false)}
          >
            <LogIn size={16} />
            Đăng nhập
          </Link>
        </div>
      )}
    </header>
  );
}
