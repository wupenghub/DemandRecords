import VueRouter from 'vue-router';
import selectComponent from '../router/common/selectComponent.vue';
var vueRouter = new VueRouter({
    routes: [
        {
            path: '/project',
            component:selectComponent

        }
    ]
});
export default vueRouter;