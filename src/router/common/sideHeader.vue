<template>
    <div class="contain">
        <div class="head">
            <span>{{this.$store.state.sideTitleObj.title}}</span>
            <a class="icon">
                <i :class="'fa '+ this.$store.state.sideTitleObj.titleRightIcon "></i>
            </a>
            <search v-show="$store.state.sideTitleObj.showSearch"></search>
        </div>
    </div>

</template>

<script>
    import search from '../search/search.vue';

    export default {
        data() {
            return {}
        },
        components: {
            search
        },
        props: []
    }
</script>

<style scoped lang="scss">
    .contain {
        .head {
            padding: 0 20px 0 20px;
            font-size: 16px;
            line-height: 50px;
            .icon {
                float: right;
                color: #ccc;
            }

        }

    }

</style>