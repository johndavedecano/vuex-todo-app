import http from './../http'

const reducer = {
  namespaced: true,
  state: {
    items: [],
  },
  actions: {
    fetch({ commit }) {
      http.get('/todo').then(resp => {
        commit('FETCH', resp.data)
      })
    },
    create(context, data) {
      return http.post('/todo', data)
    },
    destroy({ commit }, itemId) {
      return http.delete('/todo/' + itemId).then(resp => {
        commit('DESTROY', resp.data)
      })
    },
  },
  mutations: {
    CREATE: (state, payload) => {
      state.items = state.items.concat([payload])
    },
    DESTROY: (state, itemId) => {
      state.items = state.items.filter(i => i.id !== itemId)
    },
    FETCH: (state, items) => {
      state.items = items
    },
  },
  getters: {
    items: state => state.items,
    total: state => state.items.length,
  },
}

export default reducer
