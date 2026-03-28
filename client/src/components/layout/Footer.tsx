import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Youtube } from "lucide-react";

const FOOTER_LINKS = {
  booking: [
    { label: "Thuê xe ngắn hạn", href: "#" },
    { label: "Thuê xe dài hạn", href: "#" },
    { label: "Thuê xe doanh nghiệp", href: "#" },
    { label: "Thuê xe có tài xế", href: "#" },
  ],
  about: [
    { label: "Về chúng tôi", href: "#" },
    { label: "Dịch vụ", href: "#" },
    { label: "Tin tức", href: "#" },
    { label: "Tuyển dụng", href: "#" },
  ],
  support: [
    { label: "Hướng dẫn thuê xe", href: "#" },
    { label: "Chính sách bảo hiểm", href: "#" },
    { label: "Điều khoản sử dụng", href: "#" },
    { label: "Chính sách bảo mật", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer id="contact" className="bg-secondary text-white">
      {/* Main footer */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-bold no-underline text-white mb-4"
            >
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-secondary font-black text-sm">
                GF
              </span>
              Green Future
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-4 max-w-sm">
              Tiên phong trong lĩnh vực cung cấp dịch vụ trải nghiệm xe điện cao
              cấp. Đa dạng gói thuê linh hoạt theo ngày, tháng, năm.
            </p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-primary shrink-0" />
                1900 1877
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-primary shrink-0" />
                da1vu912.dev@gmail.com
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-primary shrink-0 mt-0.5" />
                02 Võ Oanh, Quận Bình Thạnh, TP. Hồ Chí Minh
              </li>
            </ul>
          </div>

          {/* Đặt xe */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">Đặt xe</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.booking.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-primary transition-colors no-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Giới thiệu */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">
              Giới thiệu
            </h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.about.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-primary transition-colors no-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hỗ trợ */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">Hỗ trợ</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-primary transition-colors no-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Green Future. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-500 hover:text-primary transition-colors"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="text-gray-500 hover:text-primary transition-colors"
            >
              <Youtube size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
