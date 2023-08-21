<template>
    <main>
        <h1>TODO app</h1>
        <create-todo-form />
        <section class="todo-list">
            <div v-for="(item, i) in items" :key="i" class="todo-list-item">
                {{ item }}
            </div>
        </section>
    </main>
</template>
<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState(['items'])
    }
}
</script>
