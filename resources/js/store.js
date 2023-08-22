// Vuex actions are the functions we call directly from Vue components
export const ADD_TODO_ITEM_ACTION = 'addTodoItem'
export const DELETE_TODO_ITEM_ACTION = 'deleteTodoItem'

// Vuex mutations are the internal functions responsible for updating state
export const ADD_TODO_ITEM_MUTATION = 'addTodoItem'
export const DELETE_TODO_ITEM_MUTATION = 'deleteTodoItem'

// Vuex state is the only source of truth for the store
export const TODO_ITEMS_STATE = 'todoItems'

// Next ID for new items
let nextID = 1

export default {
  state: {
        todoItems: []
  },
  actions: {
    addTodoItem(context, todoItemText) {
        if (!todoItemText) {
            return
        }
        const todoItem = {
            id: nextID,
            text: todoItemText
        }
        context.commit(ADD_TODO_ITEM_MUTATION, todoItem)
        nextID++
    },
    deleteTodoItem(context, todoItem) {
        if (!todoItem) {
            return
        }
        context.commit(DELETE_TODO_ITEM_MUTATION, todoItem)
    }
  },
  mutations: {
    addTodoItem(state, todoItem) {
        state.todoItems = [...state.todoItems, todoItem]
    },
    deleteTodoItem(state, todoItem) {
        state.todoItems = state.todoItems.filter(eachItem => eachItem.id !== todoItem.id)
    }
  }
}
