import { defaultTheme } from '@vuepress/theme-default'

// 搜索插件
import { docsearchPlugin } from '@vuepress/plugin-docsearch'

// 代码复制插件
import codeCopyPlugin from '@snippetors/vuepress-plugin-code-copy'

export default {
  // 地址
  base: '/MyBlog/',
  // title
  title: 'ZyKunのBlog',
  // 自定义网站 favicon
  head: [['link', { rel: 'icon', href: './img/logo.png' }]],
  theme: defaultTheme({
    sidebarDepth: 5,
    // 是否启用 编辑此页 链接。
    editLink: true,
    // 夜间模式开启/关闭功能
    colorModeSwitch: true,
    // logo
    logo: '/img/logo.png',
    // 为深色模式设置单独的logo地址
    logoDark: '/img/logo_dark.png',
    // 项目仓库的 URL。
    repo: 'https://github.com/ZyKunn',
    // 导航栏
    navbar: require('./nav.js'),
    // 侧边栏
    sidebar: require('./sidebar'),
    // 启用 最近更新时间戳
    lastUpdated: true,
    // 最近更新时间戳 标签的文字
    lastUpdatedText: '上次更新',
    // 启用 贡献者列表
    contributors: true,
    // 贡献者列表 标签的文字
    contributorsText: '贡献者'
  }),
  // Markdown 配置
  markdown: {
    headers: {
      level: [2, 3, 4, 5, 6]
    }
  },
  plugins: [
    // 搜索
    docsearchPlugin({}),
    // 代码复制插件
    codeCopyPlugin({})
  ]
}
