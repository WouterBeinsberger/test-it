import api from "@/api";

export default {
  async loadServices(context) {
    const services = await api.services.getServices();
    context.commit('setServices', services.data);
  },
  async updateServices(_, payload) {
    await api.services.updateServices(payload);
  }
}