import Vue from 'vue';
import appVue from './router/app.vue';
import VueRouter from 'vue-router';
import router from './js/router.js'
import VueResource from 'vue-resource'
Vue.use(VueResource);
Vue.use(VueRouter);
var vue = new Vue({
    el:'#app',
    router,
    render:DemandRecorde=>DemandRecorde(appVue)
});