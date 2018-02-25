import readFile from '@/lib/fileReader'

const state = {
  readingFile: null
}

const mutations = {
  READ_FILE (state, file) {
    state.readingFile = file
  }
}

const actions = {
  readFile ({ commit }, file) {
    readFile(file).then(file => {
      commit('READ_FILE')
    })
  }
}

export default {
  state,
  mutations,
  actions
}
