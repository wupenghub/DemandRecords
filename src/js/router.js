import VueRouter from 'vue-router';
import selectComponent from '../router/common/selectComponent.vue';
import projectSideMiddleContent from '../router/subComponent/projectSideMiddleContent.vue';

var vueRouter = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/project'
        },
        /*{
            path: '/project/projectSideMiddleContent',
            name: 'selectComponent',
            component: selectComponent
        },
        {
            path: '/project/projectSideMiddleContent',
            component: projectSideMiddleContent,
            name: 'projectSideMiddleContent'
        },*/
        {
            path: '/project/projectSideMiddleContent',
            components:{
                selectComponent,
                projectSideMiddleContent
            }
        }
    ]
});
export default vueRouter;