<template>
    <div id="contain">
        <div class="head_top">
            <div class="title_desc clearfix">
                <i :class="[headInfo.icon]"></i>
                <span class="title_name">{{headInfo.desc}}</span>
            </div>
            <projectHeaderTab></projectHeaderTab>
        </div>
        <div class="head_bottom">
            <a class="active_task">活动任务</a>
            <a class="complete_task">完成任务</a>
        </div>
    </div>

</template>

<script>
    import projectHeaderTab from './projectHeaderTab.vue';

    export default {
        data() {
            return {}
        },
        props: ['headInfo'],
        components: {
            projectHeaderTab
        }

    }
</script>

<style scoped lang="scss">
    #contain {
        width: 100%;
        .head_top {
            position: relative;
            height: 50px;
            border-bottom: 1px solid #eeeeee;
            background: #fff;
            line-height: 50px;
            padding: 0 15px 0 15px;
            .title_desc {
                display: inline-block;
                position: absolute;
                left: 15px;
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
        }
        .head_bottom {
            padding: 0 15px;
            height: 38px;
            background: #fff;
            line-height: 38px;
            > * {
                cursor: pointer;
            }
            > *:hover {
                color: #22d7bb;
            }
            .active_task {
                display: inline-block;
                padding-right: 20px;
                border-right: 1px solid #ccc;
                margin-left: 35px;
            }
            .complete_task {
                padding-left: 20px;
                display: inline-block;
            }
        }
    }

</style>