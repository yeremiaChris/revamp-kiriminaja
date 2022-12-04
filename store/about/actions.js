export default {
  async fetchTeamsData({ commit }) {
    try {
      const { data } = await this.$axios.get(`/photos`);
      commit("GET_TEAMS_DATA", data.slice(0, 12));
    } catch (error) {
      throw new Error(error);
    }
  },
};
