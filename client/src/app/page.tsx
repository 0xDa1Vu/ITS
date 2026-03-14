import { Breadcrumb } from '@/components/layout';

export default function Home() {
  return (
    <div className="container" style={{ paddingTop: '1rem', paddingBottom: '2rem' }}>
      <Breadcrumb
        items={[
          { label: 'Trang chủ', href: '/' },
          { label: 'Thuê xe tự lái', href: '#' },
          { label: 'Thuê xe theo ngày' },
        ]}
      />

      {/* Hero */}
      <section className="section">
        <h1 style={{ marginBottom: '1rem', fontSize: '1.75rem' }}>
          Đơn vị cho thuê xe điện tự lái — uy tín, chuyên nghiệp
        </h1>
        <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7, maxWidth: '720px' }}>
          Bạn đang tìm kiếm một phương tiện di chuyển tiện lợi, linh hoạt và hoàn toàn chủ động? Thuê xe tự lái
          là giải pháp lý tưởng — đa dạng gói theo ngày, tháng, năm; thuê không cần hộ khẩu; đội xe hiện đại,
          bảo dưỡng định kỳ.
        </p>
      </section>

      {/* Dịch vụ */}
      <section className="section">
        <h2 className="section-title">Dịch vụ cho thuê xe tự lái chuyên nghiệp</h2>
        <ul style={{ paddingLeft: '1.25rem', color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
          <li><strong>Đa dạng dòng xe điện</strong> — từ 4 chỗ đến 7 chỗ, phù hợp nội thành và đi xa.</li>
          <li><strong>Gói thuê linh hoạt</strong> — theo ngày, tháng, năm; tự lái hoặc kèm tài xế.</li>
          <li><strong>Xe bảo dưỡng định kỳ</strong> — an toàn, vận hành êm ái mọi cung đường.</li>
          <li><strong>Đội ngũ tài xế chuyên nghiệp</strong> — phục vụ đúng giờ, có thể giao tiếp tiếng Anh (gói cao cấp).</li>
        </ul>
      </section>

      {/* Bảng giá */}
      <section className="section">
        <h2 className="section-title">Bảng giá thuê xe ô tô tự lái</h2>
        <p style={{ color: 'var(--color-text-muted)', marginBottom: '1rem', fontSize: 13 }}>
          Giá thuê trọn gói (đã bao VAT, bảo dưỡng, bảo trì đường bộ). Gói ngày: tối đa 300km/ngày; gói tháng: 3000km/tháng.
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table className="price-table">
            <thead>
              <tr>
                <th>Loại xe</th>
                <th>Số chỗ</th>
                <th>Giá/ngày (VND)</th>
                <th>Giá/tháng (VND)</th>
                <th>Giá/năm (VND)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>VF 3</td><td>4 chỗ</td><td>590.000</td><td>9.900.000</td><td>118.800.000</td></tr>
              <tr><td>VF 6S</td><td>5 chỗ</td><td>1.100.000</td><td>16.500.000</td><td>198.000.000</td></tr>
              <tr><td>VF 6 Plus</td><td>5 chỗ</td><td>1.250.000</td><td>18.700.000</td><td>224.400.000</td></tr>
              <tr><td>VF 7S / VF 7 Plus</td><td>5 chỗ</td><td>1.700.000</td><td>20.400.000</td><td>244.800.000</td></tr>
              <tr><td>VF 8 Eco</td><td>5 chỗ</td><td>1.700.000</td><td>20.400.000</td><td>244.800.000</td></tr>
              <tr><td>VF 8 Plus</td><td>5 chỗ</td><td>1.800.000</td><td>22.100.000</td><td>265.200.000</td></tr>
              <tr><td>VF 9 Eco</td><td>7 chỗ</td><td>2.400.000</td><td>28.350.000</td><td>340.200.000</td></tr>
              <tr><td>VF 9 Plus</td><td>7 chỗ</td><td>2.600.000</td><td>31.400.000</td><td>376.800.000</td></tr>
            </tbody>
          </table>
        </div>
        <p style={{ marginTop: '0.75rem', fontSize: 12, color: 'var(--color-text-muted)' }}>
          * Phụ phí cuối tuần (Thứ 7, Chủ Nhật): 100.000 VND/ngày.
        </p>
      </section>

      {/* Quy trình */}
      <section className="section">
        <h2 className="section-title">Quy trình thuê xe điện</h2>
        <ol style={{ paddingLeft: '1.25rem', color: 'var(--color-text-secondary)', lineHeight: 1.9 }}>
          <li><strong>Đặt xe qua website:</strong> Chọn mẫu xe → Đặt xe → Điền thông tin đăng ký và thanh toán.</li>
          <li><strong>Đặt xe qua app:</strong> Thuê xe nhanh qua ứng dụng.</li>
          <li><strong>Liên hệ hotline:</strong> Gọi 1900 1877 để được tư vấn và đặt xe.</li>
        </ol>
        <p style={{ color: 'var(--color-text-muted)', fontSize: 13, marginTop: '0.5rem' }}>
          Khách hàng chuẩn bị giấy tờ và phí đặt cọc; nhận xe tại depot hoặc dịch vụ giao xe tận nơi (có phí).
        </p>
      </section>

      {/* FAQ */}
      <section className="section">
        <h2 className="section-title">Giải đáp thắc mắc thường gặp</h2>
        <dl style={{ margin: 0 }}>
          <dt style={{ fontWeight: 600, color: 'var(--color-text)', marginTop: '1rem' }}>
            Thuê xe tự lái 1 ngày bao nhiêu tiền?
          </dt>
          <dd style={{ margin: '0.25rem 0 0', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
            Giá dao động từ 590.000 — 2.600.000 VND/ngày tùy dòng xe.
          </dd>

          <dt style={{ fontWeight: 600, color: 'var(--color-text)', marginTop: '1rem' }}>
            Thuê xe tự lái không cần hộ khẩu được không?
          </dt>
          <dd style={{ margin: '0.25rem 0 0', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
            Được. Chỉ cần CCCD/CMND và bằng lái xe hợp lệ.
          </dd>

          <dt style={{ fontWeight: 600, color: 'var(--color-text)', marginTop: '1rem' }}>
            Gói thuê có giới hạn km không?
          </dt>
          <dd style={{ margin: '0.25rem 0 0', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
            Gói ngày: tối đa 300km/ngày; gói tháng: 3000km/tháng.
          </dd>
        </dl>
      </section>
    </div>
  );
}
