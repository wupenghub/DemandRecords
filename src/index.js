import Vue from 'vue';
import appVue from './router/app.vue';
import VueRouter from 'vue-router';
import router from './js/router.js';
import VueResource from 'vue-resource';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vuex from 'vuex';

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        sideTitleObj: {
            title: '',
            titleLeftIcon: '',
            titleRightIcon: '',
            showSearch: true,
            placeHolder: ''
        },
        moduleObjList: [],
        currentModule:{}
    },
    mutations: {
        updateSideInfo(state, sideTitleObj) {
            state.sideTitleObj.title = sideTitleObj.title ? sideTitleObj.title : state.sideTitleObj.title;
            state.sideTitleObj.titleLeftIcon = sideTitleObj.titleLeftIcon ? sideTitleObj.titleLeftIcon : state.sideTitleObj.titleLeftIcon;
            state.sideTitleObj.titleRightIcon = sideTitleObj.titleRightIcon ? sideTitleObj.titleRightIcon : state.sideTitleObj.titleRightIcon;
            state.sideTitleObj.placeHolder = sideTitleObj.placeHolder ? sideTitleObj.placeHolder : state.sideTitleObj.placeHolder;
            state.sideTitleObj.showSearch = sideTitleObj.showSearch == undefined ? state.sideTitleObj.showSearch : sideTitleObj.showSearch;
        },
        updateModuleList(state, moduleList) {
            state.moduleObjList = [];
            if (moduleList)
                state.moduleObjList = state.moduleObjList.concat(moduleList);
        }
    }
});

var vue = new Vue({
    el: '#app',
    router,
    store,
    render: DemandRecorde => DemandRecorde(appVue)
});