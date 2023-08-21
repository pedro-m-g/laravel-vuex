<template>
    <form @submit.prevent="onSubmit">
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
</template>
<script>
import { mapMutations } from'vuex'

export default {
    data: () => ({
        newItem: ''
    }),
    methods: {
        onSubmit() {
            if (!this.newItem) {
                return
            }
            this.addItem(this.newItem)
            this.newItem = ''
        },
        ...mapMutations(['addItem'])
    }
}
</script>
