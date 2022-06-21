import api from '../config'

export default {
  getAboutUs() {
    return api.get('/about-us/')
  },
  updateHero(data) {
    return api.put('/about-us/', data)
  }
}