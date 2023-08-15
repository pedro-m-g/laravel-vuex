<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1>TODO app</h1>
                <form @submit.prevent="item ? addItem(item) : null ">
                    <div class="form-group">
                        <input
                            type="text"
                            class="form-control"
                            placeholder="New item..."
                            v-model="item"
                        />
                        <button
                            type="submit"
                            class="btn btn-primary"
                        >
                            OK
                        </button>
                    </div>
                </form>
                <ul class="list-group">
                    <li
                        v-for="(item, i) in items"
                        :key="i"
                        class="list-group-item"
                    >
                        {{ item }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
    data() {
        return {
            item: ''
        }
    },
    computed: {
        ...mapState([
            'items'
        ])
    },
    methods: {
        ...mapMutations([
            'addItem'
        ])
    }
}
</script>
