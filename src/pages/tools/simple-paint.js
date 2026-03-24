import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function SimplePaintSales() {
  return (
    <Layout
      title="Simple Paint for Blender"
      description="Addon vẽ Texture 3D cho Blender">
      <main style={{ backgroundColor: '#282828', minHeight: '100vh', padding: '4rem 0' }}>
        <div className="container">
          
          <div className="row">
            <div className="col col--8">
              <h1 style={{ fontSize: '3rem', color: '#ffffff' }}>Simple Paint</h1>
              <p style={{ fontSize: '1.2rem', color: '#d2d2d2' }}>Addon tối ưu hóa quy trình Texture Painting trong Blender dành cho các Indie Developer.</p>
              
              <div className="unity-card" style={{ marginTop: '2rem', marginBottom: '2rem' }}>
                <h3>Tính Năng Nổi Bật</h3>
                <ul style={{ lineHeight: '1.8' }}>
                  <li><strong>Hệ Thống Layer:</strong> Hỗ trợ Blend Modes (Multiply, Overlay, Add...) tương tự Photoshop/Substance Painter.</li>
                  <li><strong>Quản lý Brush:</strong> Giao diện chọn brush nhanh chóng, tích hợp sẵn 50+ alpha brush chuyên dụng cho game kinh dị.</li>
                  <li><strong>Smart Masking:</strong> Tạo mask từ Ambient Occlusion, Curvature, hoặc theo màu tự động.</li>
                  <li><strong>Hiệu suất cao:</strong> Không gây giật lag khi làm việc với texture 4K.</li>
                </ul>
              </div>
              
              <Link className="unity-button" to="/docs/tools/simple-paint/intro">Đọc Tài Liệu Hướng Dẫn</Link>
            </div>
            
            <div className="col col--4">
              <div className="unity-card" style={{ position: 'sticky', top: '100px', backgroundColor: '#1e1e1e', border: '1px solid #ff9900' }}>
                <h3 style={{ textAlign: 'center', color: '#ff9900', fontSize: '2rem', margin: '1rem 0' }}>$15.00</h3>
                <p style={{ textAlign: 'center', fontSize: '0.9rem' }}>Mua một lần. Cập nhật miễn phí.</p>
                <button className="unity-button primary" style={{ width: '100%', padding: '1rem', fontSize: '1.2rem', marginBottom: '1rem', backgroundColor: '#e68a00', borderColor: '#cc7a00' }} onClick={() => alert('Chức năng thanh toán đang được phát triển!')}>Mua trên Gumroad</button>
                <ul style={{ fontSize: '0.9rem', color: '#aaa' }}>
                  <li>Hỗ trợ Blender 3.6+ và 4.0+</li>
                  <li>Định dạng file: .zip addon</li>
                  <li>Phiên bản hiện tại: v2.1</li>
                </ul>
              </div>
            </div>
          </div>
          
        </div>
      </main>
    </Layout>
  );
}
