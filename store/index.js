export const state = () => ({
  theme: "Light",
});

export const getters = {
  getTheme(state) {
    return state.theme;
  },
};

export const mutations = {
  SET_THEME(state, payload) {
    state.theme = payload;
  },
};

export const actions = {
  setTheme({ commit }, payload) {
    commit("SET_THEME", payload);
  },
};
