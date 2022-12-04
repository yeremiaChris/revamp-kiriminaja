export default {
  async fetchCarouselData({ commit }) {
    try {
      const { data } = await this.$axios.get(`/posts`);
      commit("GET_CAROUSEL_DATA", data.slice(0, 3));
    } catch (error) {
      throw new Error(error);
    }
  },
};
