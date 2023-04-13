import { createStore } from 'vuex'

const store = createStore({
  state: {
    user: {},
    left: [],
    asidewidth: '250px'
  },
  mutations: {
    user(state, obj) {
      state.user = obj
    },
    left(state, menu) {
      state.left = menu
    },
    ce(state) {
      state.asidewidth = state.asidewidth == '200px' ? '64px' : '200px'
    }
  },
  getters: {},
  actions: {}
})

export default store
