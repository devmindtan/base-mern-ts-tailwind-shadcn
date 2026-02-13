# Chủ đề:
Ứng dụng Học máy trong Dự đoán Lưu lượng và Phát triển Giao diện Ra quyết định Hỗ trợ Giao thông Đô thị

## Mô tả dự án:
Ứng dụng web sử dụng Machine Learning để dự đoán lưu lượng giao thông đô thị và cung cấp giao diện hỗ trợ ra quyết định cho việc quản lý giao thông. Hệ thống thu thập và phân tích dữ liệu từ camera và sensors để:
- Giám sát lưu lượng giao thông thời gian thực
- Dự đoán tình trạng giao thông tại các điểm quan trọng
- Đưa ra khuyến nghị tự động để tối ưu hóa luồng giao thông
- Phát hiện và cảnh báo ùn tắc tiềm năng
- Hỗ trợ ra quyết định cho việc điều chỉnh đèn tín hiệu và phân luồng

## Các mô hình ML được sử dụng:
- **LSTM (Long Short-Term Memory)** - Dự đoán lưu lượng theo chuỗi thời gian
- **Random Forest** - Phân loại mức độ ùn tắc
- **XGBoost** - Phát hiện điểm ùn tắc tiềm năng
- **CNN (Computer Vision)** - Phân tích hình ảnh từ camera giao thông

# Công nghệ sử dụng trong dự án:
**Core Technologies**
- React 19.1.1 - Framework JavaScript chính
- TypeScript - Ngôn ngữ lập trình với type safety
- Vite - Build tool & development server hiện đại
**Styling & UI**
- Tailwind CSS v4 - Utility-first CSS framework
- Shadcn UI (style: new-york) - Component library dựa trên Radix UI
- Radix UI - Headless UI primitives
- Lucide React & Tabler Icons - Icon libraries
- next-themes - Quản lý theme (dark/light mode)
- tailwindcss-animate - CSS animations
**Features & Utilities**
- React Router DOM v7 - Client-side routing
- TanStack Table (React Table) - Data table management
- Recharts - Charting library
- DnD Kit - Drag and drop functionality
- Zod - Schema validation
- Sonner - Toast notifications
- Vaul - Drawer component
**Luồng chạy chính:**
1. index.html → Entry point, load script từ main.tsx
2. src/main.tsx → Khởi tạo React app
   - Render App component vào #root element
   - Wrap trong StrictMode
3. src/App.tsx → Core application logic
   - Tạo browser router với base path /user
   - Setup layout với SidebarProvider, AppSidebar, và SiteHeader
   - Định nghĩa các routes cho ứng dụng dự đoán lưu lượng giao thông:
     - /user (index) → Dashboard - Tổng quan hệ thống
     - /user/dashboard → Dashboard
     - /user/lifecycle → Giám Sát Lưu Lượng (Traffic Monitoring)
     - /user/analytics → Phân Tích Dự Đoán (Predictive Analytics)
     - /user/projects → Mô Hình ML (ML Models Management)
     - /user/team → Đội Ngũ Phát Triển
     - /user/data-library → Dữ Liệu Giao Thông (Traffic Data)
     - /user/reports → Báo Cáo Giao Thông (Traffic Reports)
     - /user/word-assistant → Hỗ Trợ Ra Quyết Định (Decision Support System)
     - /user/settings → Cài Đặt
     - /user/help → Trung Tâm Hỗ Trợ
     - /user/search → Tìm Kiếm
4. Layout Structure: SidebarProvider → AppSidebar + SidebarInset (với SiteHeader và main content)

**Cấu trúc Pages:**
- src/pages/dashboard.tsx - Trang chủ hiển thị tổng quan lưu lượng giao thông với biểu đồ và bảng dữ liệu
- src/pages/lifecycle.tsx - **Giám Sát** - Theo dõi lưu lượng giao thông thời gian thực tại các điểm quan trọng
- src/pages/analytics.tsx - **Phân Tích** - Dự đoán lưu lượng giao thông dựa trên mô hình Machine Learning
- src/pages/projects.tsx - **Mô Hình ML** - Quản lý và theo dõi các mô hình dự đoán (LSTM, Random Forest, XGBoost, CNN)
- src/pages/team.tsx - **Đội Ngũ** - Quản lý thành viên tham gia dự án (ML Engineer, Data Scientist, Developers)
- src/pages/data-library.tsx - **Dữ Liệu** - Thư viện dữ liệu giao thông (streaming, historical, weather, training data)
- src/pages/reports.tsx - **Báo Cáo** - Báo cáo và phân tích lưu lượng theo tháng, tuần, và đặc biệt
- src/pages/word-assistant.tsx - **Hỗ Trợ** - Khuyến nghị tự động dựa trên AI (điều chỉnh đèn, cảnh báo ùn tắc)
- src/pages/setting.tsx - Cài đặt hệ thống
- src/pages/help.tsx - Trung tâm hỗ trợ với tài liệu hướng dẫn và FAQ
- src/pages/search.tsx - Tìm kiếm dữ liệu, báo cáo và thông tin giao thông

**Sidebar Navigation Structure:**
- **Main Navigation** (NavMain):
  - Bảng điều khiển - Tổng quan hệ thống
  - Giám sát - Theo dõi real-time traffic
  - Phân tích - ML predictions & analytics
  - Mô hình ML - Quản lý ML models
  - Đội ngũ - Team management
- **Documents** (NavDocuments):
  - Dữ liệu - Traffic data library
  - Báo cáo - Traffic reports
  - Hỗ trợ - AI-powered decision support
- **Secondary Navigation** (NavSecondary):
  - Cài đặt - Settings
  - Liên hệ - Help & documentation
  - Tìm Kiếm - Global search
- **User Section** (NavUser):
  - User profile và settings

**Key Components:**
- src/components/app-sidebar.tsx - Sidebar navigation chính
- src/components/site-header.tsx - Header của ứng dụng
- src/components/nav-main.tsx - Main navigation items
- src/components/nav-documents.tsx - Documents navigation
- src/components/nav-secondary.tsx - Secondary navigation
- src/components/nav-user.tsx - User menu
- src/components/data-table.tsx - Reusable data table component
- src/components/chart-area-interactive.tsx - Interactive chart component
- src/components/section-cards.tsx - Section cards component
- src/components/ui/* - Shadcn UI components (40+ components)

**Development:**
- `npm run dev` - Khởi động Vite dev server
- `npm run build` - Build production
- `npm run lint` - Chạy ESLint
- `npm run preview` - Preview production build

## Tính năng chính của các Page:

### 1. Dashboard (src/pages/dashboard.tsx)
- Hiển thị tổng quan về hệ thống
- Các card thống kê: Total Revenue, Subscriptions, Sales, Active Now
- Biểu đồ lưu lượng giao thông tương tác (ChartAreaInteractive)
- Bảng dữ liệu chi tiết (DataTable)

### 2. Giám Sát Lưu Lượng (src/pages/lifecycle.tsx)
- Theo dõi lưu lượng thời gian thực tại 4+ điểm quan trọng
- Hiển thị trạng thái: Bình thường, Cảnh báo, Ùn tắc
- Số phương tiện hiện tại và thời gian cập nhật cuối
- Giao diện card với icon và badge màu sắc

### 3. Phân Tích Dự Đoán (src/pages/analytics.tsx)
- Dự đoán lưu lượng theo khung giờ
- Hiển thị độ chính xác trung bình của mô hình (91.2%)
- Danh sách dự đoán với địa điểm và độ tin cậy
- Cảnh báo điểm dự báo ùn tắc cao

### 4. Mô Hình ML (src/pages/projects.tsx)
- Quản lý 4 mô hình: LSTM, Random Forest, XGBoost, CNN
- Hiển thị độ chính xác, trạng thái, thời gian huấn luyện
- Phân loại: Deep Learning, Machine Learning, Computer Vision
- Chức năng: Xem chi tiết, Huấn luyện lại

### 5. Đội Ngũ (src/pages/team.tsx)
- Danh sách 6 thành viên dự án
- Vai trò: ML Engineer, Data Scientist, Backend/Frontend Dev, DevOps, PM
- Thông tin liên hệ: Email, Phone
- Chuyên môn của từng thành viên

### 6. Dữ Liệu Giao Thông (src/pages/data-library.tsx)
- 6 bộ dữ liệu: Streaming, Historical, Weather, Event, Training, Labels
- Thông tin: Nguồn, Kích thước, Số bản ghi, Thời gian cập nhật
- Trạng thái: Hoạt động, Đang xử lý, Lưu trữ
- Chức năng: Xem chi tiết, Truy xuất, Import mới

### 7. Báo Cáo Giao Thông (src/pages/reports.tsx)
- Báo cáo theo: Tháng, Tuần, Đặc biệt, Kỹ thuật
- Hiển thị: Loại báo cáo, Khoảng thời gian, Kích thước file
- Trạng thái: Hoàn thành, Đang xử lý
- Chức năng: Xem trước, Tải xuống

### 8. Hỗ Trợ Ra Quyết Định (src/pages/word-assistant.tsx)
- Khuyến nghị tự động dựa trên AI
- 3 mức ưu tiên: Cao, Trung bình, Thấp
- Nội dung: Điều chỉnh đèn, Cảnh báo lưu lượng, Tối ưu luồng, Bảo trì
- Hiển thị: Tác động dự kiến, Độ tin cậy
- Chức năng: Áp dụng, Bỏ qua

### 9. Trung Tâm Hỗ Trợ (src/pages/help.tsx)
- Tài liệu hướng dẫn sử dụng
- Câu hỏi thường gặp (FAQ)
- Thông tin liên hệ: Email, Hotline, Live Chat
- Phân loại theo chuyên mục

### 10. Tìm Kiếm (src/pages/search.tsx)
- Tìm kiếm toàn cục trong hệ thống
- Lịch sử tìm kiếm gần đây
- Truy cập nhanh: Vị trí, Dự đoán, Báo cáo
- Badge phân loại kết quả