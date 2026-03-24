import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';

function ToolCard({ title, accent, description, docLink, salesLink }) {
  return (
    <div className="col col--6" style={{ marginBottom: '2rem' }}>
      <div className="unity-card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <div style={{ height: '120px', backgroundColor: '#050505', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: `2px solid ${accent}`, marginBottom: '1.5rem', borderRadius: '2px' }}>
          <h2 style={{ color: accent, margin: '0', fontSize: '1.5rem', letterSpacing: '2px', fontWeight: '800' }}>{title}</h2>
        </div>
        <h3 style={{ fontSize: '1.2rem', color: '#ffffff' }}>{title}</h3>
        <p style={{ color: '#aaa', fontSize: '0.9rem', lineHeight: '1.6', flexGrow: 1 }}>{description}</p>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
          <Link className="unity-button primary" to={salesLink} style={{ flex: 1 }}>
            <Translate id="tools.view_specs">SPECIFICATIONS</Translate>
          </Link>
          <Link className="unity-button" to={docLink} style={{ flex: 1 }}>
            <Translate id="tools.view_docs">DOCUMENTATION</Translate>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Tools() {
  return (
    <Layout
      title="Tools & Addons"
      description="Professional Unity Packages & Blender Addons">
      <main className="container" style={{ padding: '6rem 0' }}>
        <h1 className="section-title">TECHNICAL <span>SOLUTIONS</span></h1>
        <p style={{ textAlign: 'center', marginBottom: '5rem', fontSize: '1.1rem', color: '#888', maxWidth: '800px', margin: '0 auto 5rem' }}>
          Battle-tested toolsets developed during the production of our horror titles. Optimized for performance and workflow efficiency.
        </p>
        
        <div className="row">
          <ToolCard 
            title="Unity Smart Sheet"
            accent="#00e5ff"
            description="Manage complex game data sets within Unity via a familiar spreadsheet interface. Sync directly with Google Sheets for collaborative design cycles."
            docLink="/docs/tools/unity-smart-sheet/intro"
            salesLink="/tools/unity-smart-sheet"
          />
          <ToolCard 
            title="Simple Paint"
            accent="#ffb400"
            description="Accelerate texture painting within Blender. A simplified, high-speed layering system designed for rapid environment prototyping."
            docLink="/docs/tools/simple-paint/intro"
            salesLink="/tools/simple-paint"
          />
        </div>
      </main>
    </Layout>
  );
}
