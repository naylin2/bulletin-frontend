import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({

  state: {
    posts: [],
  },

  getters: {
    posts: state => {
        return state.posts;
    }
  },

  mutations: {
    // set posts
    SET_ITEMS (state, posts) {
        state.posts = posts
    },
  },

  actions: {
    // load posts
    async loadPosts ({ commit }) {
      axios.get("http://localhost:3000/posts") 
      .then(response => {
        commit('SET_ITEMS', response.data)
      })
      .catch(e => {
        this.error.push(e)
        })
    },
  },
  
  modules: {
  }
})
