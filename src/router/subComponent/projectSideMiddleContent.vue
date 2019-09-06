<template>
    <div class="contain">
        <ul>
            <li v-for="item in sideDirectories" @click="openFolder(item)">
                <i v-show="item.sonList&&item.sonList.length>0"
                   :class="[item.open?'fa fa-caret-right icon':'fa fa-sort-desc icon']">
                </i>
                <i v-show="!item.sonList||item.sonList.length==0" :class="[item.icon]"></i>
                {{item.desc}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                sideDirectories: [
                    {
                        desc: '工作',
                        icon: 'fa fa-caret-right icon',
                        path: '/',
                        sonList: [1],
                        open: true
                    },
                    {
                        desc: '项目',
                        icon: 'fa fa-caret-right icon',
                        path: '/',
                        sonList: [1],
                        open: false
                    },
                    {
                        desc: '配置中心',
                        icon: 'fa fa-gear icon',
                        path: '/',
                        sonList: [],
                        open: false
                    },
                    {
                        desc: '回收站',
                        icon: 'fa fa-bitbucket icon',
                        path: '/',
                        sonList: [],
                        open: false
                    }
                ]
            }
        },
        methods: {
            openFolder(item) {
                item.open = !item.open;
            }
        }
    }
</script>

<style scoped lang="scss">
    .contain {
        margin-top: 10px;
        ul {
            li {
                height: 38px;
                line-height: 18px;
                padding: 10px 20px;
                cursor: pointer;
                .icon {
                    font-size: 15px;
                    display: inline-block;
                    margin: 0 3px 0 5px;
                    width: 10px;
                    height: 21px;
                    color: #aaa;
                    text-align: center;
                }
            }
            li:hover {
                background: #f3f3f3;
            }
        }
        .space {
            padding-left: 19px;
        }
    }
</style>