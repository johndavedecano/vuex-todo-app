const reducer = {
  namespaced: true,
  state: {
    items: [],
  },
  actions: {
    create({ commit }, data) {
      commit('CREATE', data)
    },
    destroy({ commit }, itemId) {
      commit('DESTROY', itemId)
    },
  },
  mutations: {
    CREATE: (state, payload) => {
      state.items = state.items.concat([payload])
    },
    DESTROY: (state, itemId) => {
      state.items = state.items.filter(i => i.id !== itemId)
    },
  },
  getters: {
    items: state => state.items,
    total: state => state.items.length,
  },
}

export default reducer
