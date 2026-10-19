# 📋 看板 Kanban & Scrum Board — Japanese Zen / Agile

> **Ứng dụng quản lý công việc kết hợp Kanban Board và phương pháp Agile / Scrum theo phong cách Zen Nhật Bản (和風 - Wabi-sabi).**  
> Giao diện êm dịu cho mắt, hỗ trợ kéo thả Sticky Note trực quan, tích hợp đầy đủ công cụ Scrum và song ngữ Việt — Anh.

---

## 🌟 Tổng quan

Ứng dụng được thiết kế nhằm giải quyết vấn đề quản lý công việc thường ngày của cá nhân và nhóm phát triển phần mềm:
* **Bên trái**: Bảng **Kanban Board** trực quan giúp theo dõi luồng công việc thời gian thực với các thẻ Sticky Note giấy Washi kéo thả linh hoạt.
* **Bên phải**: Bảng điều khiển **Agile & Scrum** chuyên sâu giúp lập kế hoạch theo Sprint, quản lý Product Backlog, vẽ biểu đồ Burndown Chart và họp cải tiến liên tục (Kaizen / Retrospective).
* **Trải nghiệm thị giác**: Sử dụng bảng màu truyền thống Nhật Bản (和色 - Wairo) dịu mắt, chống chói lóa và loại bỏ hoàn toàn hiện tượng mỏi mắt khi làm việc nhiều giờ liền.
* **Chuẩn tiếng Việt 100%**: Sử dụng font chữ `Be Vietnam Pro` kết hợp `Patrick Hand`, không bị lỗi font hay đứt gãy dấu câu tiếng Việt.

---

## 🚀 Các tính năng chính

### 1. 📋 Kanban Board (Luồng công việc trực quan)
* **3 Cột trạng thái tiêu chuẩn**:
  * **待機 · Cần làm (To Do)**: Nơi tiếp nhận công việc cần thực hiện trong Sprint.
  * **進行 · Đang làm (Doing)**: Các công việc đang được xử lý (hỗ trợ kiểm soát WIP - Work in Progress).
  * **完了 · Hoàn thành (Done)**: Các công việc đã hoàn tất (tự động gạch ngang tiêu đề).
* **Kéo & Thả Sticky Note (Drag & Drop)**:
  * Kéo thả mượt mà trên Desktop và hỗ trợ cảm ứng trên thiết bị di động.
  * Hiệu ứng nghiêng nhẹ ngẫu nhiên và dán băng keo washi trang trí thủ công.
* **6 Gam màu giấy Washi dịu mắt**:
  * 📜 **和紙 Washi**: Trắng kem tự nhiên
  * 🌸 **桜 Sakura**: Hồng phấn nhạt
  * 🍵 **抹茶 Matcha**: Xanh trà êm dịu
  * 🌊 **藍 Ai**: Xanh chàm thanh tĩnh
  * 🪻 **藤 Fuji**: Tím hoa tử đằng
  * 🪵 **琥珀 Kohaku**: Vàng hổ phách trầm ấm
* **Thông tin chi tiết trên mỗi Note**:
  * Điểm độ phức tạp: **Story Points** (1, 2, 3, 5, 8, 13 SP theo dãy Fibonacci).
  * Nhãn mức độ ưu tiên: **Thấp** (🟢), **Trung bình** (🟡), **Cao** (🔴).
  * Hạn chót công việc kèm biểu tượng cảnh báo khi quá hạn (⚠️).

---

### 2. ⚡ Agile & Scrum Panel (Bảng điều khiển Scrum bên phải)

Bảng Scrum bên phải được chia làm 3 tab điều hướng tiện lợi:

#### 🏃 Tab 1: Sprint hiện tại (スプリント)
* **Vòng tiến độ (Progress Ring)**: Hiển thị trực quan tỷ lệ % hoàn thành công việc của Sprint.
* **Mục tiêu Sprint (Sprint Goal)**: Nhắc nhở trọng tâm mục tiêu mà nhóm cần đạt được.
* **Story Points & Velocity**: Thống kê tổng số điểm đã làm / tổng số điểm cam kết, kèm tốc độ trung bình (Velocity).
* **Biểu đồ Burndown Chart**:
  * Vẽ tự động bằng HTML5 Canvas theo thời gian thực.
  * So sánh giữa **Đường lý tưởng (Ideal line)** và **Đường thực tế (Actual line)** để đánh giá nguy cơ trễ hạn.
* **Daily Standup (朝会)**:
  * Nơi ghi chép nhanh biên bản họp đầu ngày (Hôm qua làm gì? Hôm nay làm gì? Có vướng mắc/blocker gì không?).
* **Cấu hình & Kết thúc Sprint (⚙️)**:
  * Tùy chỉnh ngày bắt đầu, ngày kết thúc và mục tiêu.
  * Bấm **Kết thúc Sprint**: Tự động lưu thống kê vào lịch sử, tính toán lại Velocity và khởi tạo Sprint mới.

#### 📦 Tab 2: Product Backlog (バックログ)
* Quản lý kho **User Stories** theo chuẩn Agile (`"Là người dùng, tôi muốn..."`).
* Ghi chú tiêu chí chấp nhận (**Acceptance Criteria**) và ước lượng Story Points.
* **Chuyển đổi 1-Click (`➡️ Đưa vào Sprint`)**: Tự động biến User Story thành thẻ Sticky Note trên cột *To Do* của Kanban Board.
* **Lịch sử Sprint (Sprint History)**: Xem lại kết quả và vận tốc của các Sprint đã hoàn thành.

#### 🔄 Tab 3: Retrospective (振り返り - Cải tiến liên tục Kaizen)
Mô hình họp đúc kết kinh nghiệm sau mỗi Sprint theo chuẩn KPT (Keep - Problem - Try):
* 🌸 **Tốt (Keep — うまくいったこと)**: Những điều làm tốt cần phát huy.
* 🍂 **Cải thiện (Problem — 改善すべきこと)**: Những khó khăn, bất cập cần tháo gỡ.
* 🎋 **Hành động (Try/Action — アクション)**: Các cam kết hành động cụ thể cho Sprint tiếp theo.

---

### 3. 🌐 Song ngữ Tiếng Việt & Tiếng Anh
* Nút chuyển đổi nhanh **[ VI | EN ]** ngay trên thanh tiêu đề.
* Chuyển ngữ toàn diện: Tiêu đề cột, các tab Scrum, modal, biểu đồ Burndown, nhãn trạng thái và thông báo toast.
* Tự động lưu tùy chọn ngôn ngữ vào trình duyệt.

### 4. 💾 Tự động lưu trữ (Local Storage)
* Mọi thao tác (thêm/sửa/xóa task, kéo thả cột, cấu hình Sprint, ghi chú standup, retro) đều được **lưu tự động vào LocalStorage**.
* Không lo mất dữ liệu khi tải lại trang (`F5`) hoặc tắt trình duyệt.

---

## 📖 Hướng dẫn sử dụng

| Thao tác | Cách thực hiện |
|---|---|
| **Thêm công việc mới** | Bấm nút **＋ Thêm việc** ở góc trên phải hoặc nhấn phím tắt **`Ctrl + N`** |
| **Chỉnh sửa công việc** | Di chuột vào Sticky Note và bấm biểu tượng ✏️ ở góc trên note |
| **Xóa công việc** | Di chuột vào Sticky Note và bấm biểu tượng ✕ |
| **Di chuyển trạng thái** | Kéo và thả Sticky Note sang các cột *To Do*, *Doing* hoặc *Done* |
| **Chuyển ngôn ngữ** | Nhấp vào nút **VI** hoặc **EN** trên thanh Header |
| **Ghi chú Standup** | Chuyển sang tab **Sprint**, bấm nút **＋** ở mục Daily Standup |
| **Thêm User Story vào Backlog** | Chuyển sang tab **Backlog**, bấm nút **＋** để tạo câu chuyện người dùng mới |
| **Đưa Story vào Sprint** | Trong tab Backlog, bấm **➡️ Đưa vào Sprint** tại thẻ story tương ứng |
| **Ghi nhận Retrospective** | Chuyển sang tab **Retro**, bấm **＋** tại mục Tốt, Cải thiện hoặc Hành động |
| **Cấu hình / Đóng Sprint** | Bấm biểu tượng ⚙️ ở mục Sprint hiện tại để chỉnh sửa hoặc nhấn **Kết thúc Sprint** |

---

## 📁 Cấu trúc tệp

```text
Kanbanboard/
│
├── index.html       # Cấu trúc giao diện: Header, Kanban 3 cột, Scrum Panel & các Modal
├── style.css        # Giao diện Wabi-sabi Nhật Bản, bảng màu dịu mắt, hiệu ứng Sticky note
├── app.js           # Engine xử lý: Drag & Drop, Canvas Burndown, Scrum logic, i18n đa ngữ
└── README.md        # Hướng dẫn chi tiết tính năng và cách sử dụng
```

---

## 🛠️ Công nghệ sử dụng
* **HTML5**: Cấu trúc ngữ nghĩa (Semantic markup), Canvas 2D API cho biểu đồ Burndown.
* **CSS3**: Bố cục CSS Grid / Flexbox hiện đại, Custom Properties (Variables), hiệu ứng Glassmorphism và Washi paper shadow.
* **Vanilla JavaScript (ES6+)**: Xử lý logic thuần không phụ thuộc thư viện ngoài, tối ưu hiệu năng và tốc độ tải trang.
* **Google Fonts**: `Be Vietnam Pro` (chống lỗi font tiếng Việt), `Patrick Hand` (chữ viết tay ghi chú), `Noto Sans JP` & `Noto Serif JP` (phong cách Nhật Bản).

---

*Chúc bạn có những giờ làm việc tập trung, hiệu quả và luôn duy trì tinh thần cải tiến liên tục (Kaizen)!* 🌸
