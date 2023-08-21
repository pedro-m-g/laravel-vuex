<template>
    <form @submit.prevent="onSubmit">
        <div class="form-group">
            <input
                type="text"
                class="form-control"
                placeholder="New item..."
                v-model="newTodoItem"
            />
            <button type="submit" class="form-submit-button">
                OK
            </button>
        </div>
    </form>
</template>
<script>
import { mapActions } from'vuex'
import { ADD_TODO_ITEM_ACTION } from '../store';

export default {
    data: () => ({
        newTodoItem: ''
    }),
    methods: {
        onSubmit() {
            this.addTodoItem(this.newTodoItem)
            this.newTodoItem = ''
        },
        ...mapActions([ADD_TODO_ITEM_ACTION])
    }
}
</script>
