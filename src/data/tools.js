import React from 'react';
import Translate from '@docusaurus/Translate';

const tools = [
  {
    id: 'unity-smart-sheet',
    title: <Translate id="tools.unity-smart-sheet.title">Unity Smart Sheet</Translate>,
    description: (
      <Translate id="tools.unity-smart-sheet.description">
        Powerful data management within Unity Editor. Import, edit, and sync Google Sheets directly to ScriptableObjects.
      </Translate>
    ),
    link: '/tools/unity-smart-sheet',
    docs: '/docs/tools/unity-smart-sheet/intro',
    type: 'Unity Package',
    assetStore: 'https://assetstore.unity.com/packages/slug/example',
    itch: 'https://deepwavegame.itch.io/unity-smart-sheet',
    thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'simple-paint',
    title: <Translate id="tools.simple-paint.title">Simple Paint</Translate>,
    description: (
      <Translate id="tools.simple-paint.description">
        Lightweight 2D painting system for Unity projects. Perfect for prototyping and in-game drawing mechanics.
      </Translate>
    ),
    link: '/tools/simple-paint',
    docs: '/docs/tools/simple-paint/intro',
    type: 'Unity Package',
    assetStore: 'https://assetstore.unity.com/packages/slug/example-2',
    itch: 'https://deepwavegame.itch.io/simple-paint',
    thumbnail: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'blender-horror-exporter',
    title: 'Horror Asset Exporter',
    description: 'Automated pipeline for exporting horror-ready assets from Blender to Unity with optimized LODs.',
    link: '#',
    docs: '#',
    type: 'Blender Addon',
    blenderMarket: 'https://blendermarket.com/products/example',
    itch: 'https://deepwavegame.itch.io/horror-exporter',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
  }
];

export default tools;
