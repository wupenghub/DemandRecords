<template>
    <div id="contain">
        <projectHead :headInfo="info"></projectHead>
    </div>

</template>

<script>
    import projectHead from '../project/projectHeader.vue';
    export default {
        data() {
            return {}
        },
        props: ['info'],
        components:{
            projectHead
        }
    }
</script>

<style scoped lang="scss">


</style>