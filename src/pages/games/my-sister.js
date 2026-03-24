import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import games from '@site/src/data/games';

export default function MySisterGame() {
  const gameData = games.find(g => g.id === 'my-sister');
  
  return (
    <Layout
      title="My Sister - Em Gái Tôi"
      description="Trang chủ của tựa game kinh dị My Sister">
      <main style={{ backgroundColor: '#111111', color: '#d2d2d2', minHeight: '100vh', paddingBottom: '4rem' }}>
        
        {/* Header Hero cho Game */}
        <header className="hero mystery-bg" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <h1 className="horror-title" style={{ fontSize: '5rem', marginBottom: '1rem' }}>MY SISTER</h1>
          <h2 style={{ color: '#aaa', fontWeight: 'normal', letterSpacing: '1px' }}>EM GÁI TÔI</h2>
          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
            <a className="unity-button primary" href="#trailer" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>Xem Trailer</a>
            {gameData?.steam && (
              <Link className="unity-button btn-steam" to={gameData.steam} style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>STEAM</Link>
            )}
            {gameData?.itch && (
              <Link className="unity-button btn-itch" to={gameData.itch} style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>ITCH.IO</Link>
            )}
          </div>
        </header>

        <div className="container" style={{ marginTop: '4rem' }}>
          {/* Cốt truyện */}
          <section className="row" style={{ marginBottom: '4rem' }}>
            <div className="col col--8 col--offset-2">
              <h2 className="section-title">Câu chuyện</h2>
              <div className="unity-card" style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                <p>
                  Bạn vào vai một người anh trai xa nhà lâu năm. Một ngày, bạn nhận được một bức thư kì lạ được cho là từ người mẹ quá cố, nói rằng <b>em gái bạn cần sự giúp đỡ</b>. 
                </p>
                <p>
                  Bỏ qua những linh cảm chẳng lành, bạn trở về ngôi nhà gỗ nằm sâu trong cánh rừng sương mù. Không một bóng người, không một âm thanh sự sống, chỉ có những dòng tin nhắn bằng máu và những mảnh ký ức méo mó đang dần nuốt chửng bạn.
                </p>
                <p style={{ color: '#ff3333', fontStyle: 'italic', marginTop: '2rem', textAlign: 'center' }}>
                  "Anh đã hứa sẽ không bao giờ bỏ rơi em..."
                </p>
              </div>
            </div>
          </section>

          {/* Tính năng */}
          <section className="row" style={{ marginBottom: '4rem' }}>
            <div className="col col--12">
              <h2 className="section-title" style={{ display: 'block' }}>Đặc Điểm Nổi Bật</h2>
              <div className="row">
                <div className="col col--4">
                  <div className="unity-card" style={{ height: '100%' }}>
                    <h3>Đồ Họa Ám Ảnh</h3>
                    <p>Sử dụng công nghệ ánh sáng tiên tiến trên Unity HDRP, mang lại không gian chân thực và tăm tối đến nghêt thở.</p>
                  </div>
                </div>
                <div className="col col--4">
                  <div className="unity-card" style={{ height: '100%' }}>
                    <h3>Âm Thanh Đa Chiều</h3>
                    <p>Hệ thống âm thanh không gian (Spatial Audio) 3D cho phép bạn nghe rõ từng tiếng bước chân hay hơi thở của thế lực đang săn lùng bạn.</p>
                  </div>
                </div>
                <div className="col col--4">
                  <div className="unity-card" style={{ height: '100%' }}>
                    <h3>Giải Đố Tâm Lý</h3>
                    <p>Không chỉ chạy trốn, bạn cần phải tìm hiểu và chắp vá những mảnh ký ức thông qua hệ thống giải đố dựa trên các hiện tượng siêu nhiên.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Trailer Mockup */}
          <section id="trailer" className="row" style={{ marginBottom: '4rem' }}>
            <div className="col col--10 col--offset-1">
              <h2 className="section-title">Trailer</h2>
              <div style={{ backgroundColor: '#000', paddingBottom: '56.25%', position: 'relative', border: '1px solid #333' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <p style={{ color: '#666' }}>[Video Player Mockup]</p>
                </div>
              </div>
            </div>
          </section>
          
        </div>
      </main>
    </Layout>
  );
}
