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
        components:{
            frame_component
        },
        watch: {
            "$route.path": function (newval) {
                console.log(newval)
            }
        }
    }
</script>

<style scoped>
    .container{
        margin: 0;
        padding: 0;
    }
</style>