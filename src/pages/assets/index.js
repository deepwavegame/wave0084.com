import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';

function AssetGrid({ children }) {
  return (
    <div className="row" style={{ marginTop: '4rem' }}>
      {children}
    </div>
  );
}

function AssetCard({ title, type, description, price, cta }) {
  return (
    <div className="col col--4" style={{ marginBottom: '2rem' }}>
      <div className="unity-card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <div style={{ height: '180px', backgroundColor: '#050505', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', border: '1px solid #222' }}>
          <span style={{ color: '#333', fontSize: '0.8rem', letterSpacing: '2px' }}>[ PREVIEW_UNAVAILABLE ]</span>
        </div>
        <div style={{ flexGrow: 1 }}>
          <span style={{ color: '#00e5ff', fontSize: '0.7rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px' }}>{type}</span>
          <h3 style={{ marginTop: '0.5rem', fontSize: '1.1rem' }}>{title}</h3>
          <p style={{ color: '#888', fontSize: '0.85rem', lineHeight: '1.5' }}>{description}</p>
        </div>
        <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontWeight: '800', color: '#ffffff' }}>{price}</span>
          <Link className="unity-button primary" to="#" style={{ padding: '0.4rem 0.8rem', fontSize: '0.75rem' }}>{cta}</Link>
        </div>
      </div>
    </div>
  );
}

export default function Assets() {
  return (
    <Layout
      title="Assets"
      description="Game-ready 3D models and textures">
      <main className="container" style={{ padding: '6rem 0' }}>
        <h1 className="section-title"><span>ASSET</span> REGISTRY</h1>
        <p style={{ textAlign: 'center', color: '#888', maxWidth: '700px', margin: '0 auto' }}>
          Production-grade assets optimized for modern rendering pipelines. High-fidelity models, PBR textures, and spatial audio kits.
        </p>
        
        <AssetGrid>
          <AssetCard 
            title="Abandoned Cabin Prop Pack"
            type="3D Models"
            description="50+ low-poly props with high-fidelity PBR textures. Perfect for desolate interior environments."
            price="FREE"
            cta="DOWNLOAD"
          />
          <AssetCard 
            title="Horror Decals & Blood"
            type="Textures"
            description="100+ high-resolution decals. Dried blood, handprints, and ritualistic symbols."
            price="$4.99"
            cta="ACQUIRE"
          />
          <AssetCard 
            title="Creepy Ambient Soundscape"
            type="Audio"
            description="60 minutes of haunting atmospheric drones and localized sound effects for horror settings."
            price="$15.00"
            cta="ACQUIRE"
          />
        </AssetGrid>
      </main>
    </Layout>
  );
}
