import registerIcon from './register-icon'
import type { App } from 'vue'

export const globalRegister = {
  install(app: App) {
    app.use(registerIcon)
  }
}
