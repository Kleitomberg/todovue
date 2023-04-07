<template>

    <div :class="['rounded-sm mb-2', {'bg-gray-200':!tarefa.concluida,'bg-gray-600':tarefa.concluida}]">
        <div class="flex items-center px-4 py-3 border-b border-gray-400 last:border-b-0">
            <div class="flex items-center justify-center mr-2">
                <button @click="concluir"  :class="{'text-gray-400':!tarefa.concluida,'text-green-600':tarefa.concluida}">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                </button>
            </div>

            <div class="w-full">
                <input @change="update" type="text" placeholder="Digite a sua tarefa" :value="tarefa.descricao" :class="[{'bg-gray-200 text-gray-600':!tarefa.concluida,'bg-gray-600 text-gray-300':tarefa.concluida},' placeholder-gray-500',
    ' font-light', 'focus:outline-none block', 'w-full appearance-none', 'leading-normal mr-3']">
            </div>

            <div class="ml-auto flex items-center
    justify-center">
                <button class="focus:outline-none" @click="removertask">
                    <svg class="ml-3 h-4 w-4 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 7L18.1327 19.1425C18.0579
    20.1891 17.187 21 16.1378 21H7.86224C6.81296 21 5.94208 20.1891 5.86732
    19.1425L5 7M10 11V17M14 11V17M15 7V4C15 3.44772 14.5523 3 14 3H10C9.44772
    3 9 3.44772 9 4V7M4 7H20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name:'TarefaCard',
    props: {

        tarefa: {
            type: Object,
            required: true,
            default: () => ({}),

        }
    },

    methods: {
        removertask() {
            this.$store.dispatch('deleteTarefa', this.tarefa.id)
        },
        concluir() {
            this.$store.dispatch('concluirTarefa', this.tarefa.id)
        },
        update(event) {

            this.$store.dispatch('editTarefa', {id: this.tarefa.id, descricao: event.target.value})
        }


    }


}

</script>

<style scoped>



</style>
