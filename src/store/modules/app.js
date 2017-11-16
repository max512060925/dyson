const app = {
  state: {
    index: 0
  },
  mutations: {
    saveIndex: (state,index) => {
      state.index=index
    }
  }
};

export default app;
