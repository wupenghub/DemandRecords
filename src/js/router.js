import VueRouter from 'vue-router';
import selectComponent from '../router/common/selectComponent.vue';
var vueRouter = new VueRouter({
    routes: [
        {
            path: '/',
            component:selectComponent

        }
    ]
});
export default vueRouter;