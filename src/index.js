import Vue from 'vue';
import appVue from './router/app.vue';
import VueRouter from 'vue-router';
import router from './js/router.js'
import VueResource from 'vue-resource';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(ElementUI);
var vue = new Vue({
    el:'#app',
    router,
    render:DemandRecorde=>DemandRecorde(appVue)
});