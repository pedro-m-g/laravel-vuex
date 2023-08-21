<template>
    <section class="todo-list">
        <TodoListItem
            v-for="(item, index) in todoItems"
            :key="index"
            :item="item"
        />
    </section>
</template>
<script>
import { mapState } from 'vuex'
import { TODO_ITEMS_STATE } from '../store';

export default {
    computed: {
        ...mapState([TODO_ITEMS_STATE])
    }
}
</script>
