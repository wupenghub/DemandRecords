import VueRouter from 'vue-router';
import projectSideMiddleContent from '../router/subComponent/menuNode.vue';

var vueRouter = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/project'
        },
        {
            path: '/project/projectSideMiddleContent',
            component: projectSideMiddleContent
        }
    ]
});
export default vueRouter;