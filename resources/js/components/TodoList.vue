<template>
    <section class="todo-list">
        <TodoListItem
            v-for="(item, index) in items"
            :key="index"
            :item="item"
        />
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
