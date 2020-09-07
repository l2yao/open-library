module.exports = {
  title: '中国传统文化图书馆',
  tagline: '',
  url: 'https://l2yao.github.io',
  baseUrl: '/open-library/',
  favicon: 'img/favicon.ico',
  organizationName: 'l2yao', // Usually your GitHub org/user name.
  projectName: 'open-library', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '中国传统文化图书馆',
      logo: {
        //alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/ru',
          activeBasePath: 'docs',
          label: '经本',
          position: 'left',
        },
        //{to: 'blog', label: 'Blog', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '參考網站',
          items: [
            {
              label: '淨空老法師專集網站',
              href: 'http://www.amtb.org.tw/',
            },
            {
              label: '世界数字图书馆主页',
              href: 'https://www.wdl.org/zh/',
            },
            {
              label: 'Kanseki Repository',
              href: 'https://www.kanripo.org/',
            },
            {
              label: '中国哲学书电子化计划',
              href: 'https://ctext.org/zhs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Long Yao, Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
