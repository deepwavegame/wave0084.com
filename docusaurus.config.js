// @ts-check
// Note: Chỉnh sửa cấu hình Docusaurus cho Wave0084 Portfolio

const config = {
  title: 'Wave0084.com',
  tagline: 'Senior Web Developer & DevOps Expert',
  favicon: 'img/favicon.ico',

  // Cấu hình URL cho GitHub Pages
  url: 'https://deepwavegame.github.io',
  // Tên thư mục con trên GitHub Pages (thường khớp với tên repo)
  baseUrl: '/wave0084.com/',

  // Thông tin tổ chức và dự án GitHub
  organizationName: 'deepwavegame',
  projectName: 'wave0084.com',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'vi',
    locales: ['vi'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
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
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Wave0084',
        logo: {
          alt: 'Wave0084 Logo',
          src: 'img/logo.svg',
        },
        items: [
          // Mục Products (Dẫn tới trang tùy chỉnh)
          {to: '/products', label: 'Products', position: 'left'},
          // Mục Documentation (Dẫn tới thư mục docs)
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          // Mục Blog
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/deepwavegame/wave0084.com',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/deepwavegame/wave0084.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Wave0084.com. Built with Docusaurus.`,
      },
    }),
};

module.exports = config;
