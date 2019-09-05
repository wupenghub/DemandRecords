<template>
    <div class="contain">
        <ul>
            <li v-for="item in sideDirectories">
                <i v-show="item.sonList&&item.sonList.length>0" class="fa fa-caret-right icon"></i>
                <i :class="item.icon"></i>
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
                        sonList: []
                    },
                    {
                        desc: '项目',
                        icon: 'fa fa-caret-right icon',
                        path: '/',
                        sonList: []
                    },
                    {
                        desc: '配置中心',
                        icon: 'fa fa-gear icon',
                        path: '/',
                        sonList: []
                    },
                    {
                        desc: '回收站',
                        icon: 'fa fa-bitbucket icon',
                        path: '/',
                        sonList: []
                    }
                ]
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
                    text-align: left;
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