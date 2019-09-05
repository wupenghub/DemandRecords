import VueRouter from 'vue-router';
import selectComponent from '../router/common/selectComponent.vue';
import projectSideMiddleContent from '../router/subComponent/projectSideMiddleContent.vue';

var vueRouter = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/project'
        },
        {
            path: '/project/projectSideMiddleContent',
            components: {
                projectSideMiddleContent,
                selectComponent
            }

        }
    ]
});
export default vueRouter;