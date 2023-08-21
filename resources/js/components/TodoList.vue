<template>
    <section class="todo-list">
        <TodoListItem
            v-for="todoItem in todoItems"
            :key="todoItem.id"
            :todoItem="todoItem"
            @delete="onDeleteTodoItem"
        />
    </section>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import { DELETE_TODO_ITEM_ACTION, TODO_ITEMS_STATE } from '../store';

export default {
    computed: {
        ...mapState([TODO_ITEMS_STATE])
    },
    methods: {
        onDeleteTodoItem(todoItem) {
            this.deleteTodoItem(todoItem)
        },
        ...mapActions([DELETE_TODO_ITEM_ACTION])
    }
}
</script>
