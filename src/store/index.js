import { createStore } from 'vuex'

export default createStore({
  state: {
    tarefas:[]
  },
  getters: {
  },
  mutations: {
    addTarefa(state, tar){
        state.tarefas.push(tar)
    },
    removeTarefa (state, tar){
        state.tarefas.splice(state.tarefas.indexOf(tar), 1)
    },
    updateTarefa (state, tar){

        const tarefa = this.state.tarefas.find(t => t.id == tar.id)

        tarefa.descricao = tar.descricao

        state.tarefas.splice(state.tarefas.indexOf(tar), 1, tarefa)

    }
  },
  actions: {
    setTarefa({commit}, tar){
        commit('addTarefa', tar)
    },
    deleteTarefa({commit}, tar){
        commit('removeTarefa', tar)
    },
    editTarefa({commit}, tar){
        commit('updateTarefa', tar)
    },
    concluirTarefa({commit}, tar){
        const tarefa = this.state.tarefas.find(t => t.id == tar)
        tarefa.concluida = !tarefa.concluida
        commit('updateTarefa', tarefa)
    }


  },
  modules: {
  }
})
