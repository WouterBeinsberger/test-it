import api from '../config'

export default {
  getContact() {
    return api.get('/contact/')
  },
  updateContact(data) {
    return api.put('/contact/', data)
  }
}