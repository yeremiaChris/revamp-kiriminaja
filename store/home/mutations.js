export default {
  GET_CAROUSEL_DATA(state, payload) {
    state.carouselData = payload;
  },
  SET_LOADING(state, payload) {
    state.isLoading = payload;
  },
};
