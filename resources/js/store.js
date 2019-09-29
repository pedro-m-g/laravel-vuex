export default {
  // These variables are accessible on all components.
  // For example this.$store.items
  state: {
    items: []
  },
  // These methods MUST be the only way to change store state.
  // You call them in components like this.$store.commit('addItem', item)
  mutations: {
    addItem(state, item) {
      state.items.push(item);
    }
  }
}
