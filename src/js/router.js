import VueRouter from 'vue-router';
import selectComponent from '../router/common/selectComponent.vue';

var vueRouter = new VueRouter({
    routes: [
        {
            path: '/',
            redirect:'/project'
        },
        {
            path: '/project',
            components:{
                'selectComponent':selectComponent
            }

        }
    ]
});
export default vueRouter;