'use client';

import { useState } from 'react';
import Link from 'next/link';
import { LogIn, Search } from 'lucide-react';
import { Button } from '@/components/ui';

const RENTAL_TABS = [
  { id: 'day', label: 'Thuê ngày' },
  { id: 'month', label: 'Thuê tháng', badge: 'Đặc quyền' },
  { id: 'year', label: 'Thuê năm', badge: 'Đặc quyền' },
] as const;

const CITIES = [
  'Chọn tỉnh/Thành phố',
  'Hà Nội',
  'TP. Hồ Chí Minh',
  'Đà Nẵng',
];

export default function Header() {
  const [rentalType, setRentalType] = useState<string>('day');
  const [city, setCity] = useState('');
  const [pickupDate, setPickupDate] = useState('2026-03-15');
  const [pickupTime, setPickupTime] = useState('08:00');
  const [returnDate, setReturnDate] = useState('2026-03-16');
  const [returnTime, setReturnTime] = useState('08:00');

  return (
    <header style={{ borderBottom: '1px solid var(--color-border)', background: 'var(--color-bg)' }}>
      <div className="container" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              fontSize: '1.25rem',
              fontWeight: 700,
              color: 'var(--color-text)',
              textDecoration: 'none',
            }}
          >
            Vehicle Rental
          </Link>

          {/* Right: Login + Search block */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <Button variant="ghost" size="md">
              <LogIn size={16} strokeWidth={2} aria-hidden />
              Đăng nhập
            </Button>

            {/* Search block — tabs + location + dates + CTA */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'flex-end',
                gap: '0.75rem',
                padding: '0.75rem 1rem',
                background: 'var(--color-bg-subtle)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--color-border)',
              }}
            >
              {/* Tabs */}
              <div style={{ display: 'flex', gap: '0.25rem', flexWrap: 'wrap' }}>
                {RENTAL_TABS.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setRentalType(tab.id)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                      padding: '0.5rem 0.75rem',
                      fontSize: 13,
                      fontWeight: 500,
                      color: rentalType === tab.id ? 'var(--color-accent-text)' : 'var(--color-text-secondary)',
                      background: rentalType === tab.id ? 'var(--color-accent-bg)' : 'transparent',
                      border: 'none',
                      borderRadius: 'var(--radius-sm)',
                      cursor: 'pointer',
                    }}
                  >
                    {tab.label}
                    {tab.badge && (
                      <span
                        style={{
                          fontSize: 10,
                          padding: '0.1rem 0.35rem',
                          background: 'var(--color-accent-text)',
                          color: '#fff',
                          borderRadius: 4,
                        }}
                      >
                        {tab.badge}
                      </span>
                    )}
                  </button>
                ))}
              </div>

              {/* City */}
              <div style={{ minWidth: 160 }}>
                <label
                  style={{
                    display: 'block',
                    fontSize: 12,
                    color: 'var(--color-text-muted)',
                    marginBottom: '0.25rem',
                  }}
                >
                  Tỉnh/Thành phố
                </label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  style={{ minHeight: 36 }}
                  aria-label="Chọn tỉnh/thành phố"
                >
                  {CITIES.map((c) => (
                    <option key={c} value={c === CITIES[0] ? '' : c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {/* Pickup date + time */}
              <div style={{ display: 'flex', gap: '0.25rem', alignItems: 'flex-end' }}>
                <div style={{ minWidth: 120 }}>
                  <label
                    style={{
                      display: 'block',
                      fontSize: 12,
                      color: 'var(--color-text-muted)',
                      marginBottom: '0.25rem',
                    }}
                  >
                    Ngày nhận xe
                  </label>
                  <div style={{ display: 'flex', gap: 4 }}>
                    <input
                      type="date"
                      value={pickupDate}
                      onChange={(e) => setPickupDate(e.target.value)}
                      style={{ minHeight: 36 }}
                      aria-label="Ngày nhận xe"
                    />
                    <input
                      type="time"
                      value={pickupTime}
                      onChange={(e) => setPickupTime(e.target.value)}
                      style={{ width: 70, minHeight: 36 }}
                      aria-label="Giờ nhận xe"
                    />
                  </div>
                </div>
                <div style={{ minWidth: 120 }}>
                  <label
                    style={{
                      display: 'block',
                      fontSize: 12,
                      color: 'var(--color-text-muted)',
                      marginBottom: '0.25rem',
                    }}
                  >
                    Ngày trả xe
                  </label>
                  <div style={{ display: 'flex', gap: 4 }}>
                    <input
                      type="date"
                      value={returnDate}
                      onChange={(e) => setReturnDate(e.target.value)}
                      style={{ minHeight: 36 }}
                      aria-label="Ngày trả xe"
                    />
                    <input
                      type="time"
                      value={returnTime}
                      onChange={(e) => setReturnTime(e.target.value)}
                      style={{ width: 70, minHeight: 36 }}
                      aria-label="Giờ trả xe"
                    />
                  </div>
                </div>
              </div>

              <Button variant="primary" size="lg" leftIcon={Search}>
                Tìm kiếm xe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
