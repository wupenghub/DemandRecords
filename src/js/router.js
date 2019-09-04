import VueRouter from 'vue-router';
import selectComponent from '../router/common/selectComponent.vue';
import projectSideMiddleContent from '../router/subComponent/projectSideMiddleContent.vue';
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
        },
        {
            path:'/project/projectSideMiddleContent',
            name:'projectSideMiddleContent',
            component:projectSideMiddleContent
        }
    ]
});
export default vueRouter;