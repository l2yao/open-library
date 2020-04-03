module.exports = {
  title: '佛說大乘無量壽莊嚴清淨平等覺經會集本',
  tagline: '作者：夏蓮居',
  url: 'https://l2yao.github.io',
  baseUrl: '/infinite-life-sutra/',
  favicon: 'img/favicon.ico',
  organizationName: 'l2yao', // Usually your GitHub org/user name.
  projectName: 'infinite-life-sutra', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '佛說大乘無量壽莊嚴清淨平等覺經會集本',
      logo: {
        //alt: 'My Site Logo',
        //src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/sutra1',
          activeBasePath: 'docs',
          label: '经本',
          position: 'left',
        },
        //{to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://zh.wikisource.org/wiki/%E4%BD%9B%E8%AA%AA%E5%A4%A7%E4%B9%98%E7%84%A1%E9%87%8F%E5%A3%BD%E8%8E%8A%E5%9A%B4%E6%B8%85%E6%B7%A8%E5%B9%B3%E7%AD%89%E8%A6%BA%E7%B6%93%E6%9C%83%E9%9B%86%E6%9C%AC',
          label: '源文件',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '參考網站',
          items: [
            {
              label: '佛說大乘無量壽莊嚴清淨平等覺經',
              href: 'http://www.amtb.org.tw/pdf/CH02-02-01.pdf',
            },
            {
              label: '佛說大乘無量壽莊嚴清淨平等覺經解',
              href: 'http://www.amtb.org.tw/pdf/HZ02-36-03.pdf',
            },
            {
              label: '佛說大乘無量壽莊嚴清淨平等覺經科註',
              href: 'http://www.amtb.org.tw/pdf/HZ02-39-04.pdf',
            },
            {
              label: '大乘無量壽經科會眉註合刊',
              href: 'http://www.amtb.org.tw/pdf/02-01jy.pdf',
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
