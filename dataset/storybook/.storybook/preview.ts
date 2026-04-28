import { setup } from '@storybook/vue3'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import '../src/assets/style.css'

setup((app) => {
  app.use(PrimeVue, {
    theme: {
      preset: Aura
    }
  })
})