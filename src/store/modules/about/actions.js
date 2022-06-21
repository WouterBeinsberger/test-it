import api from "@/api";

export default {
  async loadAboutUs(context) {
    const aboutUs = await api.about.getAboutUs();
    context.commit('setAboutUs', aboutUs.data);
  },
  async updateAboutUs(_, payload) {
    await api.about.updateAboutUs(payload);
  }
}