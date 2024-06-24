// .vuepress/nav.js
module.exports = [
  { text: '🌱Home', link: '/' },
  {
    text: '🥝Java',
    children: [
      { text: '基础语法', link: '/notes/java/01/' },
      { text: '面向对象编程', link: '/notes/java/02/' },
      { text: '常用类&集合框架', link: '/notes/java/03/' },
      { text: 'JDBC', link: '/notes/java/04/' },
      { text: 'Java高级', link: '/notes/java/05/' },
      { text: 'JavaWeb', link: '/notes/java/06/' }
    ]
  },
  {
    text: '🐍Python',
    children: [{ text: 'Python入门', link: '/notes/python/01/' }]
  },
  {
    text: '🌋微服务',
    children: [
      { text: '实用篇', link: '/notes/microservices/01/' },
      { text: '高级篇', link: '/notes/microservices/02/' }
      // { text: '面试篇', link: '/notes/java/03/' }
    ]
  },
  { text: '🍓Mysql', link: '/notes/mysql/' },
  {
    text: '🍤前端',
    children: [
      { text: 'HTML&CSS', link: '/notes/front-end/01/' },
      { text: 'JavaScript', link: '/notes/front-end/02/' },
      { text: 'JQuery', link: '/notes/front-end/03/' },
      { text: 'Layui', link: '/notes/front-end/04/' },
      { text: 'Vue', link: '/notes/front-end/05/' }
    ]
  },
  {
    text: '🎢Project',
    children: [
      { text: 'Reggie', link: '/notes/project/01/' },
      { text: '51XueCheng', link: '/notes/project/02/' }
    ]
  },
  { text: '🍍随笔', link: '/notes/record/' }
]
