# Frontend design system

Giao diện dùng font chữ, nút (button) và icon theo phong cách tham chiếu (dashboard Navattic / Interactive Demos): gọn, sáng, outline icons.

---

## 1. Font chữ

- **Font:** [Inter](https://fonts.google.com/specimen/Inter) (Google Font), load qua `next/font/google`.
- Đã gắn vào `layout.tsx` với biến CSS `--font-inter`; `globals.css` dùng `var(--font-sans)` cho `body`.
- Cỡ chữ mặc định 14px; heading dùng `font-weight: 600`.

---

## 2. Buttons

Component: `src/components/ui/Button.tsx`.

**Variants:**

| Variant     | Mô tả                         | Dùng khi                    |
|------------|--------------------------------|-----------------------------|
| `primary`  | Nền xám đậm, chữ trắng        | CTA chính (vd: "Tạo mới")   |
| `secondary`| Nền xám nhạt, chữ đậm         | Hành động phụ (vd: "Lọc")   |
| `ghost`    | Không nền, hover nền nhạt     | Link dạng nút (vd: "Bỏ qua")|

**Sizes:** `sm` | `md` | `lg`.

**Icon:** Hỗ trợ `leftIcon` và `rightIcon` (component từ `lucide-react`).

**Ví dụ:**

```tsx
import { Button } from '@/components/ui';
import { Plus, Filter, ExternalLink } from 'lucide-react';

<Button variant="primary" leftIcon={Plus}>
  Create demo
</Button>
<Button variant="secondary" leftIcon={Filter}>
  Filters
</Button>
<Button variant="ghost" rightIcon={ExternalLink}>
  Explore
</Button>
```

---

## 3. Icons

- **Thư viện:** [lucide-react](https://lucide.dev/) — icon dạng outline, đồng bộ với style ảnh tham chiếu.
- Dùng trực tiếp trong JSX: `import { IconName } from 'lucide-react';`
- Khi dùng trong `Button`: truyền component (vd `Plus`, `Filter`) vào `leftIcon` / `rightIcon`.

Một số icon thường dùng: `Plus`, `Filter`, `Search`, `Settings`, `User`, `LayoutGrid`, `BarChart3`, `Palette`, `ExternalLink`, `MoreHorizontal`, `HelpCircle`.

---

## 4. Design tokens (globals.css)

- **Nền:** `--color-bg`, `--color-bg-subtle`, `--color-bg-muted`, `--color-bg-active`.
- **Chữ:** `--color-text`, `--color-text-secondary`, `--color-text-muted`.
- **Viền:** `--color-border`, `--color-border-focus`.
- **Nút:** `--btn-primary-*`, `--btn-secondary-*`, `--btn-ghost-*`.
- **Accent (nav active):** `--color-accent-bg`, `--color-accent-text`.
- **Bo góc:** `--radius-sm`, `--radius-md`, `--radius-lg`.

Có thể tùy chỉnh theme bằng cách đổi giá trị các biến trong `:root`.
