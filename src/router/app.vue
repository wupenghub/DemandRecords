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
            "$route.path": function (newval) {
                this.$store.state.currentModule = this.$store.state.moduleObjList.filter(item => {
                    return newval == item.path;
                });
                this.$store.state.moduleObjList.forEach(item => {
                    if (item.path == newval) {
                        item.showTriangle = true;
                    } else {
                        item.showTriangle = false;
                    }
                });
                this.$store.state.currentModule.showTriangle = true;
                this.$store.state.moduleObjList.forEach(item => {
                });
                this.$store.commit('updateSideInfo', {
                    title: this.$store.state.currentModule[0].desc,
                    titleRightIcon: this.$store.state.currentModule[0].iconNormal,
                    placeHolder: '请输入信息'
                });
                if (newval == '/message') {

                } else if (newval == '/project') {

                } else if (newval == '/calendar') {

                } else if (newval == '/cloudDisk') {

                } else if (newval == '/application') {

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