# Đề tổng hợp các năm khác

Website trắc nghiệm tự ôn Kinh tế y tế / Quản lý tài chính, chạy bằng HTML/CSS/JavaScript thuần. Không cần framework, thư viện, tài khoản hay máy chủ.

## Ngân hàng câu hỏi

Ngân hàng hiện có **127 câu** sau khi gộp bộ đề K21 với các tài liệu ôn tập bổ sung và loại các câu trùng rõ ràng. Câu hỏi được xáo trộn mỗi lượt; phương án cũng được trộn nhưng mã đáp án nội bộ được giữ đúng.

Sau khi nộp bài, mỗi câu hiện đáp án đúng, giải thích và trường **Tham chiếu** với tên tài liệu và số trang PDF/scan khi xác định được. Đối với các nội dung không có trong sáu PDF bài giảng, nguồn sẽ trỏ đến tài liệu đề ôn tập hoặc ghi rõ khi không tìm thấy đối chiếu trực tiếp. Một số bảng/câu từ ảnh scan mờ hoặc có ghi chú tay được đánh dấu để người học kiểm tra lại bản gốc.

## Chạy trên máy tính

1. Tải và giải nén `De_Tong_Hop_Cac_Nam_Khac.zip`.
2. Mở `index.html` bằng Chrome, Edge hoặc Firefox.
3. Chọn số câu và bấm **Trộn đề & bắt đầu**.

Website hoạt động offline.

## Đưa lên GitHub Pages

1. Tạo repository mới trên GitHub, ví dụ `de-tong-hop-cac-nam-khac`.
2. Upload các file website vào thư mục gốc: `index.html`, `style.css`, `questions.js`, `app.js`. Có thể upload thêm `README.md`, `LICENSE.txt` và `NGUON_THAM_CHIEU.md` để lưu tài liệu hướng dẫn/nguồn.
3. Vào **Settings → Pages**.
4. Ở **Build and deployment**, chọn **Deploy from a branch**.
5. Chọn branch `main`, thư mục `/(root)`, rồi bấm **Save**.
6. Đợi GitHub Pages xuất bản. URL thường có dạng `https://TEN-TAI-KHOAN.github.io/de-k21-ktyt/`.

## Tính năng

- Trộn thứ tự câu hỏi và phương án mỗi lượt.
- Chọn 10, 15, 20 hoặc toàn bộ ngân hàng.
- Điều hướng trực tiếp bằng danh sách số câu.
- Giữ câu trả lời khi chuyển qua lại giữa các câu.
- Chấm điểm, xem đáp án đúng, lời giải và tham chiếu.
- Bắt đầu lượt mới hoặc chỉ ôn những câu sai.
- Giao diện thích ứng với máy tính và điện thoại.

## Thêm hoặc sửa câu hỏi

Mở `questions.js`. Mỗi câu có cấu trúc như sau:

```js
{
  id: "new-001",                // ID duy nhất
  topic: "Chủ đề",
  question: "Nội dung câu hỏi?",
  options: [
    { id: "a", text: "Phương án A" },
    { id: "b", text: "Phương án B" },
    { id: "c", text: "Phương án C" },
    { id: "d", text: "Phương án D" }
  ],
  answer: "b",                  // ID của đáp án đúng
  explanation: "Giải thích đáp án.",
  source: "Tên file, trang PDF/slide"
}
```

Mã đáp án (`a`/`b`/`c`/`d`) được gắn với nội dung phương án trước khi xáo trộn, nên không thay đổi nó khi chỉnh thứ tự hiển thị. Mỗi câu mới cần có ID riêng.

## Lưu ý về độ chính xác

Câu hỏi đã được chuẩn hóa câu chữ và so trùng theo nội dung, nhưng với các bản scan có bảng số liệu mờ hoặc ký hiệu viết tay, đối chiếu lại tài liệu gốc trước khi học thuộc đáp án. Các khái niệm chưa tìm thấy trực tiếp trong slide sẽ không được ghi là nội dung slide; trường `source` nêu rõ nguồn thay thế hoặc giới hạn đối chiếu.
