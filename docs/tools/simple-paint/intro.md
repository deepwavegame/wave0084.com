---
sidebar_position: 1
---

# Simple Paint: Hướng Dẫn Sử Dụng

**Simple Paint** là addon dành cho Blender giúp việc vẽ texture (Texture Painting) trở nên dễ dàng và mang lại kết quả chuyên nghiệp chỉ trong vài cú click, tối ưu đặc biệt cho các workflow Indie Game và Horror Game.

## Cài đặt Addon

1. Mở Blender.
2. Vào **Edit > Preferences > Add-ons**.
3. Nhấn nút **Install...** và chọn file `simple_paint_v2.zip` mà bạn đã tải về.
4. Đánh dấu tick để kích hoạt **Wave0084: Simple Paint**.

## Giao diện làm việc (UI)

Sau khi cài đặt, bạn nhấn phím `N` trên bàn phím trong cửa sổ 3D Viewport. Một tab mới mang tên **Simple Paint** sẽ xuất hiện ở thanh công cụ bên phải.

## Các tính năng cơ bản

### 1. Hệ thống Layer (Layer System)
Cho phép bạn xếp chồng các lớp màu sắc, rỉ sét, hoặc vết máu.
- Nhấn **+ Add Layer** để tạo lớp mới.
- Chọn **Blend Mode** (Multiply để làm tối, Add để phát sáng).

### 2. Smart Masks (Mặt nạ thông minh)
Rất hữu ích để tạo độ mài mòn, gỉ sét cho môi trường kinh dị.
- **Edge Wear:** Tự động tạo mask ở các góc cạnh của mô hình (dựa trên Curvature).
- **Dirt/Grime:** Tự động điền màu vào các khe nứt (dựa trên Ambient Occlusion).

### 3. Horror Brush Pack
Trong thẻ **Brush Settings**, bạn sẽ thấy bộ sưu tập hơn 50 cọ vẽ chuyên dụng:
- Vết xước kim loại
- Vết máu (tươi và khô)
- Vết bẩn bùn đất

## Quy trình vẽ cơ bản
1. Chọn object của bạn.
2. Nhấn nút **Setup Material** trong Simple Paint. Addon sẽ tự động tạo Base Color layer.
3. Thêm một layer mới, chọn Brush máu và bắt đầu vẽ trực tiếp lên mô hình!
