'use client';

import { useState } from 'react';
import {
  Search,
  Car,
  Battery,
  Shield,
  Clock,
  ChevronDown,
  ChevronUp,
  Zap,
  Users,
  MapPin,
  CalendarDays,
  FileText,
  CreditCard,
  KeyRound,
  Phone,
  ArrowRight,
} from 'lucide-react';

/* ── Data ── */
const RENTAL_TABS = [
  { id: 'day', label: 'Thuê ngày' },
  { id: 'month', label: 'Thuê tháng' },
  { id: 'year', label: 'Thuê năm' },
] as const;

const CITIES = ['Hà Nội', 'TP. Hồ Chí Minh', 'Đà Nẵng', 'Hải Phòng', 'Nha Trang'];

const VEHICLES = [
  { name: 'VF 3', seats: 4, priceDay: 590_000, priceMonth: 9_900_000, priceYear: 118_800_000, tag: 'Phổ biến', image: '🚗' },
  { name: 'VF 6S', seats: 5, priceDay: 1_100_000, priceMonth: 16_500_000, priceYear: 198_000_000, tag: null, image: '🚙' },
  { name: 'VF 6 Plus', seats: 5, priceDay: 1_250_000, priceMonth: 18_700_000, priceYear: 224_400_000, tag: null, image: '🚙' },
  { name: 'VF 7S', seats: 5, priceDay: 1_700_000, priceMonth: 20_400_000, priceYear: 244_800_000, tag: 'Hot', image: '🚘' },
  { name: 'VF 8 Eco', seats: 5, priceDay: 1_700_000, priceMonth: 20_400_000, priceYear: 244_800_000, tag: null, image: '🚘' },
  { name: 'VF 8 Plus', seats: 5, priceDay: 1_800_000, priceMonth: 22_100_000, priceYear: 265_200_000, tag: 'Premium', image: '🚘' },
  { name: 'VF 9 Eco', seats: 7, priceDay: 2_400_000, priceMonth: 28_350_000, priceYear: 340_200_000, tag: null, image: '🚐' },
  { name: 'VF 9 Plus', seats: 7, priceDay: 2_600_000, priceMonth: 31_400_000, priceYear: 376_800_000, tag: 'Cao cấp', image: '🚐' },
];

const FEATURES = [
  { icon: Battery, title: '100% Xe điện', desc: 'Thân thiện môi trường, vận hành êm ái' },
  { icon: Shield, title: 'Bảo hiểm toàn diện', desc: 'An tâm mọi hành trình với bảo hiểm đầy đủ' },
  { icon: Clock, title: 'Hỗ trợ 24/7', desc: 'Đội ngũ kỹ thuật sẵn sàng mọi lúc' },
  { icon: Zap, title: 'Giao xe nhanh', desc: 'Nhận xe trong 2h tại các depot trên toàn quốc' },
];

const PROCESS_STEPS = [
  { icon: CalendarDays, title: 'Đặt xe online', desc: 'Chọn xe, ngày nhận/trả trên website hoặc app' },
  { icon: FileText, title: 'Xác nhận thông tin', desc: 'Chuẩn bị CCCD, bằng lái và ký hợp đồng' },
  { icon: CreditCard, title: 'Thanh toán & đặt cọc', desc: 'Thanh toán online hoặc tại quầy, đặt cọc linh hoạt' },
  { icon: KeyRound, title: 'Nhận xe & trải nghiệm', desc: 'Nhận xe tại depot hoặc giao tận nơi' },
];

const FAQS = [
  {
    q: 'Thuê xe tự lái 1 ngày bao nhiêu tiền?',
    a: 'Giá dao động từ 590.000 — 2.600.000 VND/ngày tùy dòng xe. Gói thuê dài hạn (tháng, năm) sẽ tiết kiệm hơn đáng kể.',
  },
  {
    q: 'Cần giấy tờ gì để thuê xe?',
    a: 'Bạn chỉ cần CCCD/CMND còn hiệu lực và Giấy phép lái xe hạng B trở lên. Không cần hộ khẩu.',
  },
  {
    q: 'Gói thuê có giới hạn km không?',
    a: 'Gói ngày: tối đa 300km/ngày. Gói tháng: 3.000km/tháng. Vượt quá sẽ tính phí 3.000 VND/km.',
  },
  {
    q: 'Có hỗ trợ giao xe tận nơi không?',
    a: 'Có. Chúng tôi hỗ trợ giao/nhận xe tận nơi trong bán kính 15km từ depot với phí từ 100.000 VND.',
  },
  {
    q: 'Phí phụ thu cuối tuần là bao nhiêu?',
    a: 'Phụ phí cuối tuần (Thứ 7, Chủ Nhật) và ngày lễ: 100.000 VND/ngày.',
  },
];

const formatPrice = (n: number) => n.toLocaleString('vi-VN');

/* ── Page ── */
export default function Home() {
  const [rentalType, setRentalType] = useState<string>('day');
  const [city, setCity] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const getPrice = (v: (typeof VEHICLES)[number]) => {
    if (rentalType === 'month') return v.priceMonth;
    if (rentalType === 'year') return v.priceYear;
    return v.priceDay;
  };
  const getPriceLabel = () => {
    if (rentalType === 'month') return '/tháng';
    if (rentalType === 'year') return '/năm';
    return '/ngày';
  };

  return (
    <>
      {/* ══════════ HERO ══════════ */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="container py-16 md:py-24 relative z-10">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-6">
              <Zap size={14} />
              100% Xe điện — Xanh & Hiện đại
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
              Cho thuê xe điện tự lái
              <span className="text-primary"> uy tín, chuyên nghiệp</span>
            </h1>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              Trải nghiệm dòng xe điện VinFast cao cấp với gói thuê linh hoạt theo ngày, tháng, năm.
              Không cần hộ khẩu — thủ tục nhanh gọn — giao xe tận nơi.
            </p>
          </div>

          {/* Search box */}
          <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6 max-w-4xl">
            {/* Tabs */}
            <div className="flex gap-1 mb-4">
              {RENTAL_TABS.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setRentalType(tab.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    rentalType === tab.id
                      ? 'bg-primary text-secondary'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 items-end">
              <div>
                <label className="block text-xs text-gray-500 mb-1">Thành phố</label>
                <div className="relative">
                  <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="pl-9!"
                    aria-label="Chọn thành phố"
                  >
                    <option value="">Chọn thành phố</option>
                    {CITIES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs text-gray-500 mb-1">Ngày nhận xe</label>
                <input type="date" defaultValue="2026-03-28" aria-label="Ngày nhận xe" />
              </div>

              <div>
                <label className="block text-xs text-gray-500 mb-1">Giờ nhận</label>
                <input type="time" defaultValue="08:00" aria-label="Giờ nhận xe" />
              </div>

              <div>
                <label className="block text-xs text-gray-500 mb-1">Ngày trả xe</label>
                <input type="date" defaultValue="2026-03-29" aria-label="Ngày trả xe" />
              </div>

              <button
                type="button"
                className="flex items-center justify-center gap-2 h-10 px-5 rounded-lg bg-primary text-secondary font-semibold text-sm hover:bg-primary-dark transition-colors"
              >
                <Search size={16} />
                Tìm xe
              </button>
            </div>
          </div>
        </div>

        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/3" />
      </section>

      {/* ══════════ FEATURES ══════════ */}
      <section className="py-16 bg-surface">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="flex items-start gap-4 p-5 rounded-xl bg-white border border-gray-100"
              >
                <div className="shrink-0 w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
                  <f.icon size={22} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">{f.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ VEHICLES ══════════ */}
      <section id="vehicles" className="py-16">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Đội xe điện VinFast</h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Đa dạng dòng xe từ 4 đến 7 chỗ, phù hợp mọi nhu cầu di chuyển nội thành và đường dài.
            </p>
          </div>

          {/* Rental type filter */}
          <div className="flex justify-center gap-2 mb-8" id="pricing">
            {RENTAL_TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setRentalType(tab.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  rentalType === tab.id
                    ? 'bg-primary text-secondary'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Vehicle grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VEHICLES.map((v) => (
              <div
                key={v.name}
                className="card-hover relative bg-white rounded-2xl border border-gray-100 overflow-hidden"
              >
                {v.tag && (
                  <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-primary text-secondary text-[10px] font-bold uppercase">
                    {v.tag}
                  </span>
                )}

                {/* Image placeholder */}
                <div className="h-40 bg-linear-to-br from-gray-50 to-gray-100 flex items-center justify-center text-5xl">
                  {v.image}
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{v.name}</h3>
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Users size={12} />
                      {v.seats} chỗ
                    </span>
                    <span className="flex items-center gap-1">
                      <Battery size={12} />
                      Điện
                    </span>
                  </div>

                  <div className="flex items-end justify-between">
                    <div>
                      <span className="text-lg font-bold text-primary">{formatPrice(getPrice(v))}</span>
                      <span className="text-xs text-gray-400 ml-1">VND{getPriceLabel()}</span>
                    </div>
                    <button
                      type="button"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-secondary text-white text-xs font-medium hover:bg-secondary-light transition-colors"
                    >
                      Đặt xe
                      <ArrowRight size={12} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-gray-400 mt-6">
            * Giá đã bao gồm VAT, bảo dưỡng, bảo trì đường bộ. Phụ phí cuối tuần: 100.000 VND/ngày.
          </p>
        </div>
      </section>

      {/* ══════════ PROCESS ══════════ */}
      <section id="process" className="py-16 bg-surface">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Quy trình thuê xe đơn giản</h2>
            <p className="text-gray-500">Chỉ 4 bước để có xe điện trong tay</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step, i) => (
              <div key={step.title} className="relative text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-4">
                  <step.icon size={28} className="text-primary" />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-secondary text-white text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ FAQ ══════════ */}
      <section id="faq" className="py-16">
        <div className="container max-w-2xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Câu hỏi thường gặp</h2>
            <p className="text-gray-500">Giải đáp các thắc mắc phổ biến về dịch vụ thuê xe</p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-200 bg-white overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors"
                >
                  {faq.q}
                  {openFaq === i ? (
                    <ChevronUp size={16} className="shrink-0 text-gray-400" />
                  ) : (
                    <ChevronDown size={16} className="shrink-0 text-gray-400" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section className="py-16 hero-gradient">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Sẵn sàng trải nghiệm xe điện?
          </h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Đặt xe ngay hôm nay để nhận ưu đãi đặc biệt cho khách hàng mới.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#vehicles"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-secondary font-semibold text-sm hover:bg-primary-dark transition-colors no-underline"
            >
              <Car size={18} />
              Đặt xe ngay
            </a>
            <a
              href="tel:19001877"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-white font-semibold text-sm hover:bg-white/10 transition-colors no-underline"
            >
              <Phone size={18} />
              Gọi 1900 1877
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
