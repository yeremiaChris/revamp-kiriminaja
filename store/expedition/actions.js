export default {
  async fetchExpeditionData({ commit }) {
    try {
      const { data } = await this.$axios.get(`/photos`);
      console.log(data);
      commit(
        "GET_EXPEDITION_DATA",
        data.slice(0, 3).map((item) => item.url)
      );
    } catch (error) {
      throw new Error(error);
    }
  },
};
