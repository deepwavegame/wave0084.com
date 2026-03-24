import React from 'react';
import Layout from '@theme/Layout';

/**
 * Note: Trang Danh sách Sản phẩm (Product Grid)
 * Sử dụng Tailwind CSS (nếu có) hoặc các class mặc định của Docusaurus
 */
export default function Products() {
  const products = [
    {
      id: 1,
      name: 'Ai-Projection-Painter-Tool',
      description: 'Công cụ vẽ tranh AI cho Blender, hỗ trợ quy trình làm việc PBR mượt mà.',
      image: 'https://via.placeholder.com/300x200', // Thay bằng đường dẫn ảnh thực tế sau
      url: 'https://github.com/deepwavegame/Ai-Projection-Painter-Tool'
    },
    {
      id: 2,
      name: 'COD-Render',
      description: 'Hệ thống tự động đổ bóng và xuất hình ảnh chất lượng cao cho các mô hình Call of Duty.',
      image: 'https://via.placeholder.com/300x200',
      url: 'https://github.com/deepwavegame/COD-Render'
    },
    {
      id: 3,
      name: 'Deepwave Unity Core',
      description: 'Bộ khung nền tảng cho việc phát triển Game và App trên Unity, tối ưu hiệu suất.',
      image: 'https://via.placeholder.com/300x200',
      url: 'https://github.com/deepwavegame/com.deepwave.core'
    }
  ];

  return (
    <Layout title="Sản phẩm của Wave0084" description="Danh sách các công cụ và sản phẩm nổi bật của chúng tôi">
      <main className="container margin-vert--xl">
        <h1 className="text--center">Our Products</h1>
        <p className="text--center margin-bottom--xl">Những sản phẩm tâm huyết giúp bạn tối ưu hóa quy trình sáng tạo.</p>
        
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col col--4 margin-bottom--lg">
              <div className="card shadow--md">
                <div className="card__image">
                  <img src={product.image} alt={product.name} title={product.name} />
                </div>
                <div className="card__body">
                  <h3>{product.name}</h3>
                  <small>{product.description}</small>
                </div>
                <div className="card__footer">
                  <a href={product.url} target="_blank" rel="noopener noreferrer" className="button button--primary button--block">
                    Xem chi tiết
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
