import Hero from './services/hero.js'
import About from './services/about.js'
import Services from './services/services.js'
import Likes from './services/likes.js'

const apiFactory = {
  hero: Hero,
  about: About,
  services: Services,
  likes: Likes
}

export default apiFactory
