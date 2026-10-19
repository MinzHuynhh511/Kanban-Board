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
| **Bật / Tắt chế độ Scrum** | Bấm nút **⚡ Scrum: Bật / Tắt** trên thanh Header để chuyển đổi giữa chế độ Kanban đơn giản và Scrum nâng cao |
| **Bật / Tắt tự động nhảy gợi ý** | Bấm nút **⏸️ / ▶️** trong mục *💡 Bạn có biết?* để tạm dừng hoặc bật tự động chuyển mẹo |
| **Xem hướng dẫn từng bước trên màn hình** | Bấm nút **❓ Hướng dẫn** trên thanh Header để bật tour dẫn dắt thao tác trực quan |
| **Ghi chú Standup** | Chuyển sang tab **Sprint**, bấm nút **＋** ở mục Daily Standup |
| **Thêm User Story vào Backlog** | Chuyển sang tab **Backlog**, bấm nút **＋** để tạo câu chuyện người dùng mới |
| **Đưa Story vào Sprint** | Trong tab Backlog, bấm **➡️ Đưa vào Sprint** tại thẻ story tương ứng |
| **Ghi nhận Retrospective** | Chuyển sang tab **Retro**, bấm **＋** tại mục Tốt, Cải thiện hoặc Hành động |
| **Cấu hình / Đóng Sprint** | Bấm biểu tượng ⚙️ ở mục Sprint hiện tại để chỉnh sửa hoặc nhấn **Kết thúc Sprint** |

---

## 🎯 Hướng dẫn & Phương pháp làm việc hiệu quả với Kanban + Scrum (Scrumban)

Nếu bạn là người mới bắt đầu hoặc muốn tối ưu hóa hiệu suất làm việc hàng ngày, đây là cẩm nang các phương pháp thực tiễn đã được kiểm chứng giúp bạn đạt năng suất cao nhất mà không bị căng thẳng, quá tải.

### 1. Vòng đời vận hành một Sprint chuẩn (Scrumban Workflow)
```text
[Ý tưởng mới] ➡️ [Product Backlog] ➡️ [Sprint Planning: Chọn & Đưa vào To Do]
                                                    ⬇️
[Cải tiến Kaizen (Retro)] ⬅️ [Done: Hoàn tất] ⬅️ [Doing: Tối đa 2-3 việc (WIP)]
```

* **Giai đoạn 1: Thu thập ý tưởng vào Backlog (Grooming)**:
  * Khi nảy ra ý tưởng mới, tính năng mới hoặc yêu cầu phát sinh, **đừng đưa ngay vào To Do**. Hãy mở tab **Backlog** và thêm vào danh sách User Story kèm tiêu chí hoàn thành (Acceptance Criteria).
  * Điều này giúp bảng Kanban của bạn luôn gọn gàng, tập trung vào việc hiện tại và tránh bị ngập trong hàng chục đầu việc chưa được gạn lọc.

* **Giai đoạn 2: Lập kế hoạch Sprint (Sprint Planning)**:
  * Đầu mỗi tuần hoặc mỗi chu kỳ Sprint (thường từ 1 đến 2 tuần), mở tab Backlog.
  * Ước lượng độ phức tạp (Story Points: 1, 2, 3, 5, 8).
  * Bấm nút **`➡️ Đưa vào Sprint`** cho những việc có độ ưu tiên cao nhất, vừa với năng lực Velocity của bạn (ví dụ: mục tiêu 14–20 SP/Sprint).

* **Giai đoạn 3: Vận hành hàng ngày (Execution & Flow)**:
  * **Họp Daily Standup 5 phút mỗi sáng**: Tự điểm lại: (1) Hôm qua xong gì? (2) Hôm nay cam kết làm gì? (3) Đang bị kẹt ở đâu?
  * Chỉ kéo **1 việc duy nhất** từ *To Do* sang *Doing* khi bạn sẵn sàng bắt tay vào làm.

* **Giai đoạn 4: Đánh giá & Cải tiến liên tục (Retrospective & Kaizen)**:
  * Khi hết thời gian Sprint, bấm biểu tượng ⚙️ rồi chọn **Kết thúc Sprint**.
  * Chuyển sang tab **Retro** để ghi lại: Điều gì làm tốt (🌸), điều gì làm chậm tiến độ (🍂), và hành động sửa đổi cụ thể cho Sprint tới (🎋).

---

### 2. Các nguyên tắc vàng để tối đa hóa hiệu suất

#### 🛑 Nguyên lý 1: "Stop Starting, Start Finishing" (Dừng bắt đầu, hãy kết thúc)
* **Sai lầm phổ biến**: Mở cùng lúc 5–6 việc trong cột *Doing*, nhảy qua nhảy lại giữa các đầu việc khiến việc nào cũng dở dang, não bộ bị phân mảnh (Context Switching).
* **Quy tắc vàng**: Thiết lập giới hạn **WIP (Work In Progress)**. Luôn giữ cột *Doing* ở mức **tối đa 2 đến 3 việc**. Chỉ khi một việc đã chuyển sang *Done*, bạn mới được phép kéo việc tiếp theo vào *Doing*.

#### 🍕 Nguyên lý 2: Quy tắc chia nhỏ công việc (Task Slicing)
* **Vấn đề**: Một công việc quá lớn (ví dụ: "Viết toàn bộ ứng dụng") sẽ gây tâm lý chần chừ, khó bắt đầu và dễ trễ hạn.
* **Quy tắc vàng**: Bất kỳ công việc nào có Story Points $\ge 8$, hãy chia nhỏ thành 2–3 thẻ Sticky Note nhỏ hơn (từ 1 đến 3 SP). Một công việc lý tưởng là việc có thể hoàn thành trong vòng nửa ngày đến 1 ngày làm việc.

#### ⏱️ Nguyên lý 3: Kết hợp kỹ thuật Pomodoro & Timeboxing
* Chọn 1 Sticky Note trong cột *Doing*.
* Đặt đồng hồ 25 phút tập trung sâu tuyệt đối (không lướt web, không mở mạng xã hội).
* Nghỉ ngơi 5 phút. Sau 4 chu kỳ Pomodoro, bạn sẽ hoàn thành xong Sticky Note đó một cách nhẹ nhàng!

#### 🎨 Nguyên lý 4: Quy ước màu sắc Washi thông minh (Color Coding)
Sử dụng 6 gam màu giấy Washi Nhật Bản để nhận diện trực quan tức thì:
* 🌸 **Sakura (Hồng)**: Việc khẩn cấp, việc có hạn chót gấp, lỗi nghiêm trọng cần sửa ngay.
* 🍵 **Matcha (Xanh trà)**: Tính năng mới, sáng tạo, phát triển cốt lõi.
* 🌊 **Ai (Chàm)**: Cải tiến kỹ thuật, dọn dẹp mã nguồn, nghiên cứu tài liệu.
* 📜 **Washi (Trắng kem)**: Công việc thường nhật, hành chính, vận hành.
* 🪵 **Kohaku (Hổ phách)**: Gặp gỡ khách hàng, họp hành, báo cáo.
* 🪻 **Fuji (Tím)**: Ý tưởng đang thử nghiệm, kế hoạch dài hạn.

#### 📉 Nguyên lý 5: Đọc và làm chủ biểu đồ Burndown Chart
* **Đường màu lam (Ideal Line)**: Tốc độ tiêu thụ điểm công việc lý tưởng theo kế hoạch từ ngày bắt đầu đến ngày kết thúc.
* **Đường màu cam (Actual Line)**: Số Story Points còn lại thực tế mỗi ngày.
  * *Nằm dưới đường lam*: Bạn đang vượt tiến độ 🎉.
  * *Nằm trên đường lam*: Có dấu hiệu trễ hạn ⚠️. Cần họp Standup để loại bỏ blocker hoặc thương lượng giảm bớt các task không cần thiết ra khỏi Sprint.

---

### 3. Checklist từng ngày cho người mới bắt đầu (Beginner Daily Routine)

* [ ] **Đầu tuần (Thứ Hai)**: Mở tab *Sprint*, đặt mục tiêu rõ ràng (Sprint Goal). Chọn 4–6 task từ *Backlog* đưa vào *To Do*.
* [ ] **Mỗi sáng (8h30 - 9h00)**: Đọc 1 gợi ý tại widget **"💡 Bạn có biết?"**. Bấm dấu ＋ tại *Daily Standup* để ghi chú 2 câu ngắn về mục tiêu trong ngày.
* [ ] **Trong ngày**: Duy trì tối đa 2 việc tại *Doing*. Kéo sang *Done* ngay khi hoàn thành để cảm nhận sự tưởng thưởng não bộ (Dopamine reward).
* [ ] **Cuối tuần (Thứ Sáu)**: Kiểm tra biểu đồ Burndown Chart. Vào tab *Retro* viết ít nhất 1 điều tốt và 1 điều cần rút kinh nghiệm. Nhấn **Kết thúc Sprint** để sẵn sàng cho tuần mới đầy năng lượng!

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
