<template>
    <div class="container">
        <div class="flex justify-center my-6">
            <h1 class="text-4xl font-bold text-gray-500">Lista de Tarefas</h1>
        </div>

        <form class="flex items-center px-4 bg-gray-900 h-15 rounded-sm border-l-2 border-green-400 mb-3">
                <input
                    v-model="input"
                    placeholder="Adicione uma tarefa ..."
                    type="text"
                    class=" bg-gray-900 placeholder-gray-500 text-gray-500 font-light focus:outline-none block w-full appearance-none leading-normal py-3 pr-3"
                >

                <button
                    @click.prevent="addTarefa"
                    class=" text-green-400 text-xs font-semibold focus:outline-none"
                    type="submit" >
                    ADICIONAR

                </button>

            </form>

            <div>
                <TarefaCard v-for="tarefa in $store.state.tarefas" :key="tarefa.id"  :tarefa="tarefa"/>
            </div>



    </div>

</template>

<script>
import TarefaCard from './components/TarefaCard.vue';




export default {

  name: 'App',
  components: {
    TarefaCard

    },

    data() {
    return {
        newtarefa: {},
        input: '',
        id : 1,

    }
  },

    methods: {
        addTarefa() {

            this.newtarefa = {
                id: this.id++,
                descricao: this.input,
                concluida: false,
                criadoEm: new Date(),
            };
            this.$store.dispatch('setTarefa', this.newtarefa);
            console.log('Tarefa adicionada', this.newtarefa);
            this.input = '';

        }
    }


}
</script>

<style>

:root{
    --bg-color: #12151d;
    --bg-color-light: #ffffff;
    --bg-card-task: #bec1cb;
    --bg-input-task: #0a0d13;
    --text-add-task: #22c55d;
    --border-input-task: #1c9337;
    --icon-checked: #269e4f;
    --icon-delete: #e83f5b;
    --icon-trash: #6f727d;

    --loblolly: rgba(188,195,203,1);
    --woodsmoke: rgba(19,20,27,1);
    --emerald: rgba(50,195,93,1);
    --shuttle-gray: rgba(103,105,113,1);
    --waterloo-: rgba(127,130,141,1);
    --trout: rgba(72,75,85,1);
    --killarney: rgba(53,92,69,1);
    --tuna: rgba(59,61,70,1);
    --hemp: rgba(140,116,116,1);

}



.btn-add-task {
    background-color: transparent;
    color: var(--text-add-task);
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 1rem;
    outline: none;
    font-weight: 300;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
}
.btn-add-task:focus, .input-task {
    outline: none !important;
}

.container {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.bg-gray-900 {
    background-color: var(--bg-input-task);
}

.input-task {
    max-width: 350px;
    height: 50px;
    border: none;
    border-left: 1px solid var(--text-add-task);

    padding: 0 10px;
    background: var(--bg-input-task);
    color: var(--shuttle-gray);
    font-size: 1.2rem;
    font-weight: 500;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  color: #e1e1e1;
  background: var(--bg-color);
}
</style>
