
import { updateAppConfig } from '#app'
import { defuFn } from 'C:/Users/Himanshu Khandelwal/Downloads/Engineering/Personal/Rawat-Paints-Electricals/node_modules/.pnpm/defu@6.1.2/node_modules/defu/dist/defu.mjs'

const inlineConfig = {
  "nuxt": {
    "buildId": "d2875479-3938-446d-bd16-b3609ffb0507"
  }
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}



export default /* #__PURE__ */ defuFn(inlineConfig)
