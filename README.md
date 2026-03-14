# Eti Coffee - Hệ thống Nhượng quyền Cà phê Chuyên nghiệp

Chào mừng bạn đến với repo của **Eti Coffee** (v2). Đây là dự án website giới thiệu giải pháp nhượng quyền cà phê pha máy hàng đầu tại Việt Nam.

## 🚀 Hướng dẫn Cài đặt & Setup

Nếu bạn vừa clone dự án này về máy lần đầu, hãy làm theo các bước sau:

### 1. Yêu cầu hệ thống
*   **Node.js**: Phiên bản 20.19.0 hoặc >= 22.12.0 (nên dùng bản LTS mới nhất).
*   **NPM**: Thường đi kèm với Node.js.

### 2. Cài đặt Dependencies
Mở terminal tại thư mục gốc của dự án và chạy lệnh:
```sh
npm install
```

### 3. Chạy môi trường Phát triển (Development)
Để xem website trên máy cục bộ với tính năng Hot-Reload:
```sh
npm run dev
```
Sau đó, truy cập vào link (thường là `http://localhost:5173`) hiển thị trong terminal.

### 4. Build dự án (Production)
Để đóng gói dự án cho việc triển khai (deployment):
```sh
npm run build
```
Thư mục `/dist` sẽ được tạo ra chứa mã nguồn đã tối ưu.

---

## 🛠 Công nghệ sử dụng
*   **Core**: Vue 3 (Composition API)
*   **Build Tool**: Vite
*   **Styling**: Tailwind CSS & SCSS
*   **SEO**: Unhead Vue (`useSeoMeta`, `useHead`)
*   **Animations**: Swiper.js, CSS Animations
*   **Language**: TypeScript

## 📁 Cấu trúc thư mục chính
*   `src/views/`: Chứa các trang chính (Home, Franchise Details).
*   `src/components/`: Các component dùng chung.
*   `public/`: Chứa tài nguyên tĩnh (ảnh, logo, meta images).
*   `index.html`: File HTML gốc với cấu hình Meta SEO.

## 📝 Ghi chú về SEO
Dự án đã được tối ưu hóa SEO với đầy đủ các thẻ Open Graph (OG) cho Zalo/Facebook. Khi thay đổi ảnh preview, hãy thay thế file tại `public/images/meta_image.png` (giữ kích thước 1200x630px để hiển thị đẹp nhất).

---
*Phát triển bởi đội ngũ Eti Coffee.*
