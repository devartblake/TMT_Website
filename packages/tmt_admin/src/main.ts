import { createApp } from 'vue'

import App from '@/App.vue'
import vuetify from '@/plugins/vuetify'
import { loadFonts } from '@/plugins/webfontloader'
import { registerPlugins } from '@core/utils/plugins'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// Styles
import '@core/scss/template/index.scss'
import '@layouts/styles/index.scss'

loadFonts()

// Create vue app
const app = createApp(App)
app.use(vuetify)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)

// Register plugins
registerPlugins(app)

// Mount vue app
app.mount('#app')
