export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"heroImage\":\"/img/logo.png\",\"heroImageDark\":\"/img/logo_dark.png\",\"heroAlt\":\"Oh this is MyBlog\",\"heroText\":\"ZyKunのBlog\",\"tagline\":\"一名Coder的手记\",\"actions\":[{\"text\":\"Want the source code?\",\"link\":\"https://github.com/ZyKunn/MyBlog\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"Past lives couldn't ever come between us\"},{\"title\":\"Some time the dreamers finally wake up\"},{\"title\":\"Don't wake me up, I'm not dreaming\"}],\"footer\":\"既往不恋 纵情向前\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
