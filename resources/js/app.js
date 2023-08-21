import Vue from 'vue'
import Vuex from 'vuex'
import TodoApp from './components/TodoApp'
import store from './store'

Vue.component('TodoApp', TodoApp)

Vue.use(Vuex)
const appStore = new Vuex.Store(store)

new Vue({
    el: '#app',
    store: appStore
})
