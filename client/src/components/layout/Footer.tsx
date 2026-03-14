import Link from 'next/link';
import { Phone, Mail, Facebook, Youtube } from 'lucide-react';

const FOOTER_LINKS = {
  booking: [
    { label: 'Ngắn hạn', href: '#' },
    { label: 'Dài hạn', href: '#' },
    { label: 'Doanh nghiệp', href: '#' },
  ],
  about: [
    { label: 'Về chúng tôi', href: '#' },
    { label: 'Dịch vụ', href: '#' },
    { label: 'Tin tức', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--color-bg-subtle)',
        borderTop: '1px solid var(--color-border)',
        padding: '2.5rem 0 1.5rem',
        marginTop: '3rem',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            marginBottom: '2rem',
          }}
        >
          {/* Brand */}
          <div>
            <Link
              href="/"
              style={{
                fontSize: '1.125rem',
                fontWeight: 700,
                color: 'var(--color-text)',
                textDecoration: 'none',
              }}
            >
              Vehicle Rental
            </Link>
            <p
              style={{
                marginTop: '0.5rem',
                fontSize: 13,
                color: 'var(--color-text-muted)',
                lineHeight: 1.5,
              }}
            >
              Cho thuê xe tự lái — uy tín, chuyên nghiệp.
            </p>
          </div>

          {/* Đặt xe */}
          <div>
            <h4
              style={{
                margin: '0 0 0.75rem',
                fontSize: 14,
                fontWeight: 600,
                color: 'var(--color-text)',
              }}
            >
              Đặt xe
            </h4>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
              {FOOTER_LINKS.booking.map((link) => (
                <li key={link.label} style={{ marginBottom: '0.5rem' }}>
                  <Link
                    href={link.href}
                    style={{
                      fontSize: 13,
                      color: 'var(--color-text-muted)',
                      textDecoration: 'none',
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Giới thiệu */}
          <div>
            <h4
              style={{
                margin: '0 0 0.75rem',
                fontSize: 14,
                fontWeight: 600,
                color: 'var(--color-text)',
              }}
            >
              Giới thiệu
            </h4>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
              {FOOTER_LINKS.about.map((link) => (
                <li key={link.label} style={{ marginBottom: '0.5rem' }}>
                  <Link
                    href={link.href}
                    style={{
                      fontSize: 13,
                      color: 'var(--color-text-muted)',
                      textDecoration: 'none',
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Liên hệ */}
          <div>
            <h4
              style={{
                margin: '0 0 0.75rem',
                fontSize: 14,
                fontWeight: 600,
                color: 'var(--color-text)',
              }}
            >
              Liên hệ
            </h4>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', fontSize: 13, color: 'var(--color-text-muted)' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <Phone size={14} strokeWidth={2} aria-hidden />
                1900 1877
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <Mail size={14} strokeWidth={2} aria-hidden />
                support@example.com
              </li>
            </ul>
            <p style={{ margin: '0.75rem 0 0', fontSize: 12, color: 'var(--color-text-muted)' }}>
              Theo dõi chúng tôi
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
              <a href="#" aria-label="Facebook" style={{ color: 'var(--color-text-muted)' }}>
                <Facebook size={18} strokeWidth={2} />
              </a>
              <a href="#" aria-label="YouTube" style={{ color: 'var(--color-text-muted)' }}>
                <Youtube size={18} strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>

        <div
          style={{
            paddingTop: '1.5rem',
            borderTop: '1px solid var(--color-border)',
            fontSize: 12,
            color: 'var(--color-text-muted)',
            textAlign: 'center',
          }}
        >
          © {new Date().getFullYear()} Vehicle Rental. All rights reserved.
          {' · '}
          <Link href="#" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>
            Điều khoản sử dụng
          </Link>
        </div>
      </div>
    </footer>
  );
}
