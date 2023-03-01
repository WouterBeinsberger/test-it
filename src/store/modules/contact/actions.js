import api from "@/api";

export default {
  async loadContact(context) {
    const contact = await api.contact.getContact();
    context.commit('setContact', contact.data);
  },
  async updateContact(_, payload) {
    await api.contact.updateContact(payload);
  }
}