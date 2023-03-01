import Hero from './services/hero.js'
import About from './services/about.js'
import Services from './services/services.js'
import Likes from './services/likes.js'
import Contact from './services/contact.js'

const apiFactory = {
  hero: Hero,
  about: About,
  services: Services,
  likes: Likes,
  contact: Contact
}

export default apiFactory
