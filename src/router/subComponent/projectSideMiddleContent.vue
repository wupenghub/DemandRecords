<template>
    <div class="contain">
        <div class="item" v-for="item in sideDirectories">
            <div class="single_item" @click="openFolder(item)">
                <i v-show="item.sonList&&item.sonList.length>0"
                   :class="[item.open?'fa fa-sort-desc icon':'fa fa-caret-right icon']">
                </i>
                <i v-show="!item.sonList||item.sonList.length==0" :class="[item.icon]"></i>
                {{item.desc}}
            </div>
            <projectSideMiddleContent v-if="item.sonList&&item.sonList.length>0&&item.open"
                                      :sideDirectories="item.sonList"></projectSideMiddleContent>
        </div>
    </div>
</template>

<script>
    import projectSideMiddleContent from './projectSideMiddleContent.vue';

    export default {
        name: 'projectSideMiddleContent',
        data() {
            return {}
        },
        methods: {
            openFolder(item) {
                item.open = !item.open;

            }
        },
        components: {
            projectSideMiddleContent
        },
        props: [
            'sideDirectories'
        ]
    }
</script>

<style scoped lang="scss">
    .contain {
        margin-top: 10px;
        .item {
            padding: 10px 20px;
            .icon {
                font-size: 15px;
                display: inline-block;
                margin: 0 3px 0 5px;
                width: 10px;
                height: 21px;
                color: #aaa;
                text-align: center;
            }
            .single_item{
                cursor: pointer;
            }
            .single_item:hover{
                color: #22d7bb;
            }
        }
    }
</style>