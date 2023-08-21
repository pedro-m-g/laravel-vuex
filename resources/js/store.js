export const ADD_TODO_ITEM_ACTION = 'addTodoItem'
export const ADD_TODO_ITEM_MUTATION = 'addTodoItem'
export const TODO_ITEMS_STATE = 'todoItems'

export default {
  state: {
        todoItems: []
  },
  actions: {
    addTodoItem(context, todoItem) {
        if (!todoItem) {
            return
        }
        context.commit(ADD_TODO_ITEM_MUTATION, todoItem)
    }
  },
  mutations: {
      addTodoItem(state, todoItem) {
          state.todoItems = [...state.todoItems, todoItem]
    }
  }
}
