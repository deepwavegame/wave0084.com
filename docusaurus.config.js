// @ts-check
// Note: Chỉnh sửa cấu hình Docusaurus cho Wave0084 Studio - Phiên bản Nâng cấp

const config = {
  title: 'Wave0084 Studio',
  tagline: 'Indie Horror Game Studio & Unity Asset Creator',
  favicon: 'img/favicon.ico',

  url: 'https://deepwavegame.github.io',
  baseUrl: '/wave0084.com/',

  organizationName: 'deepwavegame',
  projectName: 'wave0084.com',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'vi', 'zh', 'ja', 'id'],
    localeConfigs: {
      en: { label: 'English' },
      vi: { label: 'Tiếng Việt' },
      zh: { label: '中文' },
      ja: { label: '日本語' },
      id: { label: 'Bahasa Indonesia' },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: 'docs', // Giữ route mặc định cho docs chung hoặc tool chính
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'WAVE0084',
        logo: {
          alt: 'Wave0084 Logo',
          src: 'img/logo.svg',
          style: { filter: 'drop-shadow(0 0 5px #00e5ff)' },
        },
        items: [
          {to: '/games', label: 'Games', position: 'left'},
          {to: '/tools', label: 'Tools', position: 'left'},
          {to: '/assets', label: 'Assets', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'dropdown',
            label: 'Documentation',
            position: 'left',
            items: [
              {
                type: 'docSidebar',
                sidebarId: 'unitySmartSheetSidebar',
                label: 'Unity Smart Sheet',
              },
              {
                type: 'docSidebar',
                sidebarId: 'simplePaintSidebar',
                label: 'Simple Paint',
              },
            ],
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/deepwavegame',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Studio',
            items: [
              { label: 'Games', to: '/games' },
              { label: 'Tools', to: '/tools' },
              { label: 'Assets', to: '/assets' },
            ],
          },
          {
            title: 'Documentation',
            items: [
              { label: 'Unity Smart Sheet', to: '/docs/tools/unity-smart-sheet/intro' },
              { label: 'Simple Paint', to: '/docs/tools/simple-paint/intro' },
            ],
          },
          {
            title: 'Social',
            items: [
              { label: 'GitHub', href: 'https://github.com/deepwavegame' },
              { label: 'Twitter', href: '#' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Wave0084 Studio. Built with Docusaurus.`,
      },
    }),
};

module.exports = config;
