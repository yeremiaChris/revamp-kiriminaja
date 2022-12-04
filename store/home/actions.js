export default {
  async fetchCarouselData({ commit }) {
    try {
      const { data } = await this.$axios.get(`/posts`);
      commit("GET_CAROUSEL_DATA", data.slice(0, 3));
    } catch (error) {
      throw new Error(error);
    }
  },

  async fetchExpeditionData({ commit }) {
    try {
      const { data } = await this.$axios.get(`/photos`);
      commit(
        "GET_EXPEDITION_DATA",
        data.slice(0, 12).map((item) => item.url)
      );
    } catch (error) {
      throw new Error(error);
    }
  },
};
