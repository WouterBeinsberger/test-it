import Hero from './services/hero.js'
import About from './services/about.js'
import Services from './services/services.js'

const apiFactory = {
  hero: Hero,
  about: About,
  services: Services
}

export default apiFactory
