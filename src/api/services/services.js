import api from '../config'

export default {
  getServices() {
    return api.get('/services/')
  },
  updateServices(data) {
    return api.put('/services/', data)
  }
}