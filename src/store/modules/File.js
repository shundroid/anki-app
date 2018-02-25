import readFile from '@/lib/fileReader'
import marked from 'marked'

const state = {
  file: null,
  md: ''
}

const mutations = {
  SET_FILE (state, file) {
    state.file = file
  },
  SET_MD (state, md) {
    state.md = md
  }
}

const actions = {
  readFile ({ commit }, file) {
    commit('SET_FILE', file)
    readFile(file).then(text => {
      commit('SET_MD', marked(text))
    })
  }
}

export default {
  state,
  mutations,
  actions
}
