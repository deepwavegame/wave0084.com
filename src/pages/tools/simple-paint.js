import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import tools from '@site/src/data/tools';

export default function SimplePaintSales() {
  const toolData = tools.find(t => t.id === 'simple-paint');

  return (
    <Layout
      title="Simple Paint for Unity"
      description="Hệ thống vẽ 2D mạnh mẽ cho game Unity">
      <main style={{ backgroundColor: '#1a1a1a', minHeight: '100vh', padding: '4rem 0' }}>
        <div className="container">
          <div className="row">
            <div className="col col--12">
              <h1 className="horror-title" style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>SIMPLE PAINT</h1>
            </div>
          </div>
          
          <div className="row">
            <div className="col col--7">
              <div style={{ backgroundColor: '#000', paddingBottom: '56.25%', position: 'relative', borderRadius: '4px', overflow: 'hidden', border: '1px solid #333' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <p style={{ color: '#444' }}>[ Simple Paint Promo Video ]</p>
                </div>
              </div>
              
              <div style={{ marginTop: '2.5rem' }}>
                <h2>Vẽ Trực Tiếp Lên Texture</h2>
                <p>Simple Paint cung cấp API đơn giản để bạn có thể tích hợp tính năng vẽ (drawing/painting) vào trò chơi của mình. Cho dù đó là vẽ lên tường, ký tên lên giấy hay tạo ra các vết máu, Simple Paint đều xử lý mượt mà.</p>
                
                <div className="row" style={{ marginTop: '2rem' }}>
                  <div className="col col--6">
                    <div className="unity-card">
                      <h4>Tối Ưu Shader</h4>
                      <p>Sử dụng GPU để vẽ, đảm bảo FPS không bị sụt giảm ngay cả trên mobile.</p>
                    </div>
                  </div>
                  <div className="col col--6">
                    <div className="unity-card">
                      <h4>Nhiều Loại Cọ</h4>
                      <p>Hỗ trợ Texture Brush, cho phép tạo ra các hiệu ứng vẽ chân thực.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col col--5">
              <div className="unity-card" style={{ borderTop: '4px solid #00e5ff' }}>
                <h3>Bắt đầu ngay</h3>
                <p style={{ color: '#888' }}>Tích hợp hệ thống vẽ chuyên nghiệp vào dự án Unity của bạn chỉ trong vài phút.</p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '2rem' }}>
                  {toolData?.assetStore && (
                    <Link className="unity-button btn-unity" style={{ width: '100%', padding: '1rem', fontSize: '1rem' }} to={toolData.assetStore}>
                      BUY ON ASSET STORE
                    </Link>
                  )}
                  {toolData?.itch && (
                    <Link className="unity-button btn-itch" style={{ width: '100%', padding: '1rem', fontSize: '1rem' }} to={toolData.itch}>
                      BUY ON ITCH.IO
                    </Link>
                  )}
                  <Link className="unity-button" style={{ width: '100%', padding: '1rem', fontSize: '1rem' }} to="/docs/tools/simple-paint/intro">
                    DOCUMENTATION
                  </Link>
                </div>

                <div style={{ marginTop: '2.5rem', backgroundColor: '#222', padding: '1.5rem', borderRadius: '4px' }}>
                  <h4 style={{ marginBottom: '1rem' }}>Yêu cầu hệ thống</h4>
                  <ul style={{ fontSize: '0.85rem', color: '#aaa', paddingLeft: '1.2rem' }}>
                    <li>Unity 2020.3 LTS trở lên.</li>
                    <li>Hỗ trợ Built-in, URP và HDRP.</li>
                    <li>Hoạt động trên Windows, Mac, iOS và Android.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
