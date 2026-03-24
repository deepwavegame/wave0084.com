import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import tools from '@site/src/data/tools';

export default function UnitySmartSheetSales() {
  const toolData = tools.find(t => t.id === 'unity-smart-sheet');

  return (
    <Layout
      title="Unity Smart Sheet"
      description="Quản lý dữ liệu Unity bằng Spreadsheet">
      <main style={{ backgroundColor: '#282828', minHeight: '100vh', padding: '4rem 0' }}>
        <div className="container">
          
          <div className="row">
            <div className="col col--8">
              <h1 style={{ fontSize: '3rem', color: '#ffffff' }}>Unity Smart Sheet</h1>
              <p style={{ fontSize: '1.2rem', color: '#d2d2d2' }}>Giải pháp quản lý dữ liệu toàn diện cho game bằng giao diện Spreadsheet ngay trong Unity Editor.</p>
              
              <div className="unity-card" style={{ marginTop: '2rem', marginBottom: '2rem' }}>
                <h3>Tại sao chọn Unity Smart Sheet?</h3>
                <ul style={{ lineHeight: '1.8' }}>
                  <li>Chỉnh sửa dữ liệu nhanh chóng mà không cần mở Excel hay Google Sheets.</li>
                  <li>Tự động Serialize dữ liệu sang ScriptableObject hoặc JSON.</li>
                  <li>Hỗ trợ làm việc nhóm qua Google Sheets Sync.</li>
                  <li>Validation dữ liệu ngay khi nhập.</li>
                </ul>
              </div>
              
              <Link className="unity-button" to="/docs/tools/unity-smart-sheet/intro">Đọc Tài Liệu Hướng Dẫn</Link>
            </div>
            
            <div className="col col--4">
              <div className="unity-card" style={{ position: 'sticky', top: '100px', backgroundColor: '#1e1e1e', border: '1px solid #3d8bff' }}>
                <h3 style={{ textAlign: 'center', color: '#3d8bff', fontSize: '2rem', margin: '1rem 0' }}>$24.99</h3>
                <p style={{ textAlign: 'center', fontSize: '0.9rem' }}>Thanh toán một lần. Hỗ trợ cập nhật trọn đời.</p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
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
                </div>

                <ul style={{ fontSize: '0.9rem', color: '#aaa', marginTop: '2rem' }}>
                  <li>Yêu cầu Unity 2021.3+</li>
                  <li>Kích thước: 2.5 MB</li>
                  <li>Phiên bản hiện tại: v1.2.0</li>
                </ul>
              </div>
            </div>
          </div>
          
        </div>
      </main>
    </Layout>
  );
}
