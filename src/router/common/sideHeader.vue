<template>
    <div class="contain">
        <div class="head">
            <div class="clearfix">
                <span>{{this.$store.state.sideObj.title}}</span>
                <a class="icon">
                    <i :class="'fa '+ this.$store.state.sideObj.titleRightIcon "></i>
                </a>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                mainSideObj: {
                    title: '',
                    titleLeftIcon: '',
                    titleRightIcon: ''
                }
            }
        },
        props: [
            'titleObj'
        ]
    }
</script>

<style scoped lang="scss">
    .contain {
        .head {
            padding: 0 20px 0 20px;
            height: 50px;
            font-size: 16px;
            line-height: 50px;

            .icon {
                float: right;
                color: #ccc;
            }

        }

    }

</style>