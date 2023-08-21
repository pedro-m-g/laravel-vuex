import Vue from 'vue'
import Vuex from 'vuex'

import TodoApp from './components/TodoApp'
import CreateTodoForm from './components/CreateTodoForm'
import TodoList from './components/TodoList'
import TodoListItem from './components/TodoListItem'

import store from './store'

const components = {
    TodoApp,
    CreateTodoForm,
    TodoList,
    TodoListItem
}

for (let componentName in components) {
    Vue.component(componentName, components[componentName])
}

Vue.use(Vuex)
const appStore = new Vuex.Store(store)

new Vue({
    el: '#app',
    store: appStore
})
