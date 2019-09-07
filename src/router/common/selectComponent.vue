<template>
    <div id="contain">
        <div class="head_top">
            <i :class="[info.icon]"></i>
            <span class="title_name">{{info.desc}}</span>
        </div>
        <div class="head_bottom">

        </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {}
        },
        props: ['info']
    }
</script>

<style scoped lang="scss">
    #contain {
        width: 100%;
        .head_top {
            height: 50px;
            border-bottom: 1px solid #eeeeee;
            background: #fff;
            line-height: 50px;
            padding: 0 15px 0 15px;
            .icon {
                font-size: 20px;
                color: #22d7bb;
                padding: 5px;
            }
            .title_name {
                padding: 5px;
                font-size: 16px;
            }
        }
        .head_bottom {
            height: 38px;
            background: #fff;
        }
    }

</style>