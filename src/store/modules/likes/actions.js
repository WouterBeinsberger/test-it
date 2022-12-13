import api from "@/api";

export default {
  async loadLikes(context) {
    const likes = await api.likes.getLikes();
    context.commit('setLikes', likes.data);
  },
  async updateLikes(_, payload) {
    await api.likes.updateLikes(payload);
  }
}