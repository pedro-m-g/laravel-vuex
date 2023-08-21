<template>
    <section class="todo-list">
        <div v-for="(item, i) in items" :key="i" class="todo-list-item">
            {{ item }}
        </div>
    </section>
</template>
<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState(['items'])
    }
}
</script>
