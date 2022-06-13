import api from "@/api";

export default {
  async loadHero(context) {
    const hero = await api.hero.getHero();
    context.commit('setHero', hero.data);
  }
}