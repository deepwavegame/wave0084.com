import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';

export default function Games() {
  return (
    <Layout
      title="Games"
      description="Deepwave Game Studio projects">
      <main className="container" style={{ padding: '6rem 0' }}>
        <h1 className="section-title">
          <span>PROJECT</span> REPOSITORY
        </h1>
        
        <div className="row" style={{ marginTop: '4rem' }}>
          <div className="col col--6">
            <div className="unity-card" style={{ padding: '0', overflow: 'hidden' }}>
              <div style={{ height: '300px', backgroundColor: '#050505', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid #222' }}>
                <h2 className="horror-title" style={{ fontSize: '3rem', letterSpacing: '8px' }}>MY SISTER</h2>
              </div>
              <div style={{ padding: '2rem' }}>
                <h3 style={{ color: '#00e5ff' }}>My Sister - Em Gái Tôi</h3>
                <p style={{ color: '#aaa', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  A psychological first-person horror. Explore the distorted memories of a broken home as you search for your missing sibling. Built on Unity HDRP for extreme immersion.
                </p>
                <div style={{ marginTop: '2rem' }}>
                  <Link className="unity-button primary" to="/games/my-sister" style={{ width: '100%' }}>
                    <Translate id="games.view_details">PROTOCOL INITIATE</Translate>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col col--6">
            <div className="unity-card" style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(255,255,255,0.02)', borderStyle: 'dashed' }}>
              <p style={{ color: '#444', letterSpacing: '2px' }}>[ CLASSIFIED PROJECT ]</p>
              <p style={{ color: '#222', fontSize: '0.8rem' }}>Under Development</p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
