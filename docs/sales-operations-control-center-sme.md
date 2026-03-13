# Sales & Operations Control Center cho SME

## 1) Tổng quan sản phẩm

**Sales & Operations Control Center** là một web application theo hướng **all-in-one mini ERP** dành cho doanh nghiệp nhỏ và vừa (SME), tập trung giải quyết bài toán:

- Quản lý khách hàng (CRM mini)
- Quản lý báo giá và đơn hàng
- Điều phối công việc vận hành sau bán
- Theo dõi dòng tiền cơ bản
- Cung cấp dashboard quản trị cho chủ doanh nghiệp

Mục tiêu của phiên bản đầu (MVP) là ưu tiên mạnh vào **Sales + Operations**, sau đó mở rộng dần sang báo cáo và cashflow nâng cao.

---

## 2) Vấn đề business cần giải quyết

Trong nhiều SME, dữ liệu vận hành đang bị phân mảnh:

- Đơn hàng lưu ở Excel
- Khách hàng trao đổi qua Zalo/chat
- Việc vận hành theo dõi trong group chat
- Thu chi ở file riêng
- Báo cáo tổng hợp thủ công

### Hệ quả thường gặp

- Không biết đơn nào đang chậm xử lý
- Không rõ nhân sự nào đang nghẽn việc
- Doanh thu có nhưng dòng tiền thực tế xấu
- Chủ doanh nghiệp không có dashboard nhìn nhanh toàn cục

Ứng dụng này giải quyết trực diện các điểm đau trên bằng một luồng dữ liệu thống nhất từ khách hàng → báo giá → đơn hàng → task vận hành → trạng thái thanh toán.

---

## 3) Vì sao phù hợp với Angular-only

Angular 19 rất phù hợp với bài toán nội bộ doanh nghiệp nhờ các điểm mạnh:

- Form lớn, nhiều business rule
- Dashboard nhiều màn hình
- Role-based UI
- Workflow nhiều trạng thái
- Component tái sử dụng cao
- Phù hợp xây SPA/PWA cho nghiệp vụ nội bộ

### Stack đề xuất (Angular-only)

- **Angular 19 + Signals** cho state/UI reactive
- **Angular Router** cho module hoá màn hình nghiệp vụ
- **Angular Material hoặc PrimeNG** cho UI component enterprise
- **Firebase hoặc Supabase** cho Auth/DB/Storage
- **IndexedDB** cho offline cache/local-first
- **Chart.js hoặc ApexCharts** cho dashboard/KPI

---

## 4) Core modules (phiên bản business)

## 4.1 CRM Mini

Quản lý thông tin khách hàng:

- Thông tin công ty/cá nhân
- Lịch sử giao dịch
- Trạng thái tiềm năng
- Ghi chú chăm sóc
- Lịch follow-up

**Pipeline mẫu:** `Lead → Contacted → Quoted → Won / Lost`

## 4.2 Sales Order Management

Quản lý báo giá và đơn hàng:

- Tạo quotation
- Chuyển quotation thành order
- Theo dõi trạng thái xử lý
- Theo dõi công nợ cơ bản
- Theo dõi deadline giao hàng/bàn giao

**Workflow mẫu:** `Draft → Confirmed → In Progress → Delivered → Paid`

## 4.3 Operations Task Board

Khi đơn hàng được xác nhận, hệ thống tự sinh task vận hành:

- Chuẩn bị hàng
- Xử lý hồ sơ
- Kiểm tra chất lượng
- Bàn giao
- Thu tiền

Ví dụ cho `SO-001`:

1. Call customer
2. Prepare package
3. Confirm delivery
4. Issue invoice

## 4.4 Cashflow Snapshot

Không làm kế toán đầy đủ ngay từ đầu, chỉ cần góc nhìn quản trị nhanh:

- Expected incoming
- Expected outgoing
- Overdue receivables
- Upcoming payables

## 4.5 Management Dashboard

Màn hình điều hành cho chủ doanh nghiệp:

- Doanh thu tháng này
- Số đơn đang xử lý
- Đơn trễ hạn
- Khách hàng mới
- Nhân sự quá tải
- Công nợ đến hạn

---

## 5) Kiến trúc triển khai đề xuất

## Cách 1: Angular + Firebase (ưu tiên MVP nhanh)

- Auth: Firebase Authentication
- Data: Firestore
- File: Firebase Storage
- Hosting: Firebase Hosting

**Phù hợp:** demo, MVP nhanh, startup nhỏ, thời gian ra thị trường ngắn.

## Cách 2: Angular + Supabase (ưu tiên dữ liệu dạng SQL)

- Auth
- Postgres
- Storage
- Realtime

**Phù hợp:** mô hình dữ liệu rõ ràng, query/report business thuận tiện.

## Cách 3: Angular local-first (pure Angular)

- Dữ liệu chính lưu IndexedDB
- Export/import JSON hoặc Excel
- Bổ sung sync server ở giai đoạn sau

**Phù hợp:** bản nội bộ desktop, prototype, portfolio, triển khai sớm cho SME nhỏ.

---

## 6) Tính năng tạo cảm giác “enterprise-grade”

## 6.1 Role-based UI

Vai trò tiêu chuẩn:

- Admin
- Sales
- Operations
- Accountant
- Manager

Mỗi role có menu, quyền thao tác, và action khác nhau.

## 6.2 Rule engine nhẹ

Ví dụ rule:

- Đơn > 50 triệu cần duyệt
- Khách overdue thì chặn tạo đơn mới
- Task trễ > 2 ngày hiển thị cảnh báo đỏ

Có thể implement ở Angular qua:

- Policy service
- Route guard
- Action-level permission directive

## 6.3 Audit trail

Lưu lịch sử thay đổi quan trọng:

- Ai sửa đơn
- Sửa lúc nào
- Đổi trạng thái từ gì sang gì

## 6.4 Reusable form engine

Thiết kế form theo schema/config để tái sử dụng:

- Customer form
- Quotation form
- Order form
- Task form

---

## 7) Cấu trúc thư mục Angular 19 gợi ý

```text
src/app
├── core
│   ├── auth
│   ├── layout
│   ├── guards
│   ├── interceptors
│   └── services
├── shared
│   ├── ui
│   ├── components
│   ├── pipes
│   ├── directives
│   └── utils
├── features
│   ├── dashboard
│   ├── crm
│   ├── quotations
│   ├── orders
│   ├── operations
│   ├── cashflow
│   ├── reports
│   └── settings
└── state
    ├── app.store.ts
    ├── auth.store.ts
    └── filters.store.ts
```

---

## 8) Các màn hình trọng tâm nên ưu tiên

### Dashboard

- KPI cards
- Revenue chart
- Đơn gần trễ hạn
- Task quá hạn
- Top khách hàng

### Customer Detail

- Timeline
- Quotations
- Orders
- Notes
- Receivables

### Order Detail

- Thông tin đơn hàng
- Progress bar theo trạng thái
- Linked tasks
- Payment status
- Activity log

### Manager Console

- Duyệt đơn
- Duyệt giảm giá
- Duyệt ngoại lệ

---

## 9) MVP roadmap đề xuất

## Phase 1 (MVP lõi)

- Login
- Customer CRUD
- Quotation CRUD
- Order CRUD
- Dashboard cơ bản

## Phase 2

- Operations Task Board
- Approval flow
- Audit log

## Phase 3

- Cashflow snapshot
- Reports
- Export Excel/PDF

## Phase 4

- PWA
- Offline-first
- Realtime notifications

---

## 10) Giá trị portfolio và khả năng thương mại

Dự án này vượt xa CRUD thông thường vì có đầy đủ:

- Workflow trạng thái
- Permission theo vai trò
- Dashboard/KPI
- Business rule
- Auditability
- Khả năng offline/realtime

Điều này giúp sản phẩm trông giống một hệ thống thực tế có thể triển khai cho SME, đồng thời tạo portfolio mạnh theo hướng enterprise Angular.
