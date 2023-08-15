import Vue from 'vue'
import Vuex from 'vuex'
import ExampleComponent from './components/ExampleComponent'
import store from './store'

Vue.component('ExampleComponent', ExampleComponent)

Vue.use(Vuex)
const appStore = new Vuex.Store(store)

new Vue({
    el: '#app',
    store: appStore
})
