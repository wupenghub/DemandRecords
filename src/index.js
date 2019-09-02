import Vue from 'vue';
import appVue from './router/app.vue';
import VueRouter from 'vue-router';
import router from './js/router.js'
import VueResource from 'vue-resource';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vuex from 'vuex'

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        sideObj: {
            title: '',
            titleLeftIcon: '',
            titleRightIcon: ''
        }
    },
    mutations: {
        updateSideInfo(state, sideObj) {
            state.sideObj.title = sideObj.title ? sideObj.title : state.sideObj.title;
            state.sideObj.titleLeftIcon = sideObj.titleLeftIcon ? sideObj.titleLeftIcon : state.sideObj.titleLeftIcon;
            state.sideObj.titleRightIcon = sideObj.titleRightIcon ? sideObj.titleRightIcon : state.sideObj.titleRightIcon;
        }
    }
});

var vue = new Vue({
    el: '#app',
    router,
    store,
    render: DemandRecorde => DemandRecorde(appVue)
});