<template>
    <div class="todo-list-item">
        <span>{{ todoItem.text }}</span>
        <div>
            <span class="delete-button" @click="onDelete">&times;</span>
        </div>
    </div>
</template>
<script>
export const DELETE_EVENT = 'delete'

export default {
    props: {
        todoItem: Object
    },
    methods: {
        onDelete() {
            this.$emit(DELETE_EVENT, this.todoItem)
        }
    }
}
</script>
