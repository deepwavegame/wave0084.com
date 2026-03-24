// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // Sidebar cho Unity Smart Sheet
  unitySmartSheetSidebar: [
    {
      type: 'category',
      label: 'Unity Smart Sheet',
      link: {
        type: 'generated-index',
        title: 'Unity Smart Sheet Documentation',
        description: 'Hướng dẫn sử dụng toàn diện cho Unity Smart Sheet plugin.',
        slug: '/unity-smart-sheet',
      },
      items: ['tools/unity-smart-sheet/intro'],
    },
  ],

  // Sidebar cho Simple Paint
  simplePaintSidebar: [
    {
      type: 'category',
      label: 'Simple Paint',
      link: {
        type: 'generated-index',
        title: 'Simple Paint Documentation',
        description: 'Hướng dẫn sử dụng toàn diện cho Simple Paint Blender addon.',
        slug: '/simple-paint',
      },
      items: ['tools/simple-paint/intro'],
    },
  ],
};

module.exports = sidebars;
