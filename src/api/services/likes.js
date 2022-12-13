import api from '../config'

export default {
  getLikes() {
    return api.get('/likes/')
  },
  updateLikes(data) {
    return api.put('/likes/', data)
  }
}