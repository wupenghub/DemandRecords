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
                this.$store.state.currentModule = this.$store.state.moduleObjList.filter(item => {
                    return this.$route.path == item.path;
                });
                this.$store.state.moduleObjList.forEach(item => {
                    if (item.path == this.$route.path) {
                        item.showTriangle = true;
                    } else {
                        item.showTriangle = false;
                    }
                });
                this.$store.state.currentModule.showTriangle = true;
                this.$store.commit('updateSideInfo', {
                    title: this.$store.state.currentModule[0].desc,
                    titleRightIcon: this.$store.state.currentModule[0].iconNormal,
                    placeHolder: '请输入信息'
                });
                if (this.$route.path == '/message') {

                } else if (this.$route.path == '/project') {
                    this.$router.push({ name: 'projectSideMiddleContent' });
                } else if (this.$route.path == '/calendar') {

                } else if (this.$route.path == '/cloudDisk') {

                } else if (this.$route.path == '/application') {

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