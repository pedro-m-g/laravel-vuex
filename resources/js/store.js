export const ADD_TODO_ITEM_ACTION = 'addTodoItem'
export const DELETE_TODO_ITEM_ACTION = 'deleteTodoItem'

export const ADD_TODO_ITEM_MUTATION = 'addTodoItem'
export const DELETE_TODO_ITEM_MUTATION = 'deleteTodoItem'

export const TODO_ITEMS_STATE = 'todoItems'

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
