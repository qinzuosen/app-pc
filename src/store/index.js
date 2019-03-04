import Vue from "vue";
import Vuex from 'vuex';
import a from './modules/a';
Vue.use(Vuex)

let store = new Vuex.Store({
    modules:{
        a:a
    }
})
export default store