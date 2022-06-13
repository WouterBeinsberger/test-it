import api from '../config'

export default {
  getHero() {
    return api.get('/hero/')
  },
  updateHero(data) {
    return api.put('/hero/', data)
  }
}