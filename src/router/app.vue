<template>
    <div class="container">
        <div class="content">
            <frame_component></frame_component>
        </div>
    </div>
</template>

<script>
    import frame_component from './frameComponent/frameComponent.vue';

    export default {
        data() {
            return {}
        },
        components: {
            frame_component
        },
        watch: {
            $route(to, from) {
                this.renderPage();
            }
        },
        mounted() {
            this.renderPage();
        },
        methods: {
            renderPage() {
                if (this.$route.path == '/message') {
                    this.initPage();
                } else if (this.$route.path.indexOf('/project')!=-1) {
                    this.initPage();
                    this.$router.push({path: '/project/projectSideMiddleContent'});
                } else if (this.$route.path == '/calendar') {
                    this.initPage();
                } else if (this.$route.path == '/cloudDisk') {
                    this.initPage();
                } else if (this.$route.path == '/application') {
                    this.initPage();
                } else {

                }
            },
            initPage() {
                this.$store.state.currentModule = this.$store.state.moduleObjList.filter(item => {
                    return this.$route.path.indexOf(item.path)!=-1;
                });
                this.$store.state.moduleObjList.forEach(item => {
                    /*if (item.path == this.$route.path) {
                        item.showTriangle = true;
                    } else {
                        item.showTriangle = false;
                    }*/
                    if (this.$route.path.indexOf(item.path)!=-1) {
                        item.showTriangle = true;
                    } else {
                        item.showTriangle = false;
                    }
                });
//                this.$store.state.currentModule.showTriangle = true;
                console.log(this.$store.state.currentModule.length)
                if (this.$store.state.currentModule[0]) {
                    this.$store.commit('updateSideInfo', {
                        title: this.$store.state.currentModule[0].desc,
                        titleRightIcon: this.$store.state.currentModule[0].iconNormal,
                        placeHolder: '请输入信息'
                    });
                }
            }
        }
    }
</script>

<style scoped>
    .container {
        margin: 0;
        padding: 0;
    }
</style>