import Vue from 'vue'
import Vuex from 'vuex'

import TodoApp from './components/TodoApp'
import CreateTodoForm from './components/CreateTodoForm'

import store from './store'

Vue.component('TodoApp', TodoApp)
Vue.component('CreateTodoForm', CreateTodoForm)

Vue.use(Vuex)
const appStore = new Vuex.Store(store)

new Vue({
    el: '#app',
    store: appStore
})
