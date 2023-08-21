<template>
    <main>
        <h1>TODO app</h1>
        <form @submit.prevent="submitCreateTodoForm">
            <div class="form-group">
                <input
                    type="text"
                    class="form-control"
                    placeholder="New item..."
                    v-model="newItem"
                />
                <button type="submit" class="form-submit-button">OK</button>
            </div>
        </form>
        <section class="todo-list">
            <div v-for="(item, i) in items" :key="i" class="todo-list-item">
                {{ item }}
            </div>
        </section>
    </main>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
    data() {
        return {
            newItem: ''
        }
    },
    computed: {
        ...mapState([
            'items'
        ])
    },
    methods: {
        submitCreateTodoForm() {
            if (!this.newItem) {
                return
            }
            this.addItem(this.newItem)
            this.newItem = ''
        },
        ...mapMutations([
            'addItem'
        ])
    }
}
</script>
