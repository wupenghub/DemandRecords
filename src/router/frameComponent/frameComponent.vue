<template>
    <div id="contain">
        <section class="app-nav-area">
            <div class="top_area">
                <a class="top">
                    <img src="../../image/team_logo_default.png"/>
                </a>
            </div>
            <div class="middle_area">
                <ul>
                    <li v-for="item in $store.state.moduleObjList">
                        <router-link :to="item.path" class="item" :key="item.icon"
                                     @mouseenter.native="enter(item)" @mouseleave.native="leave(item)">
                            <i :class="'fa '+item.icon+' icon'"></i>
                            <span class="desc">{{item.desc}}</span>
                            <i v-show="item.showTriangle" class="fa fa-caret-left triangle"></i>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="bottom_area">
                <a class="item">
                    <i class="fa fa-question-circle"></i>
                </a>
                <a class="avatar-default" style="background-color: rgb(45, 188, 255);">吴鹏</a>
            </div>
        </section>
        <div class="app-box">
            <div class="main-body-side">
                <sideHeader></sideHeader>
                <div class="middle">
                    <router-view :sideDirectories="sideDirectories" @fun="getInfo"></router-view>
                </div>
            </div>
            <div class="main-body">
                <selectComponent :info="itemInfo"></selectComponent>
            </div>
        </div>
    </div>
</template>

<script>
    import '../../lib/font-awesome-4.7.0/css/font-awesome.min.css';
    import sideHeader from '../common/sideHeader.vue';
    import selectComponent from '../common/selectComponent.vue'

    export default {
        data() {
            return {
                categoryModules: [
                    {
                        icon: 'fa-comment-o',
                        desc: '消息',
                        path: '/message',
                        ref: 'message',
                        iconNormal: 'fa-comment-o',
                        iconHover: 'fa-comment',
                        showTriangle: false
                    },
                    {
                        icon: 'fa-newspaper-o',
                        desc: '项目',
                        path: '/project',
                        ref: 'project',
                        iconNormal: 'fa-newspaper-o',
                        iconHover: 'fa-newspaper-o',
                        showTriangle: false
                    },
                    {
                        icon: 'fa-calendar',
                        desc: '日历',
                        path: '/calendar',
                        ref: 'calendar',
                        iconNormal: 'fa-calendar',
                        iconHover: 'fa-calendar-check-o',
                        showTriangle: false
                    },
                    {
                        icon: 'fa-folder-open-o',
                        desc: '网盘',
                        path: '/cloudDisk',
                        ref: 'disk',
                        iconNormal: 'fa-folder-open-o',
                        iconHover: 'fa-folder-open',
                        showTriangle: false
                    },
                    {
                        icon: 'fa-cube',
                        desc: '应用',
                        path: '/application',
                        ref: 'application',
                        iconNormal: 'fa-cube',
                        iconHover: 'fa-cubes',
                        showTriangle: false
                    },
                ],
                titleObj: {
                    title: '',
                    titleLeftIcon: '',
                    titleRightIcon: ''
                },
                sideDirectories: [
                    {
                        desc: '工作',
                        icon: 'fa fa-caret-right icon',
                        sonList: [
                            {
                                desc: '我的任务',
                                icon: 'fa fa-user icon',
                                path: '/project/projectSideMiddleContent/selectComponent',
                                open: true,
                                menuCode:'1'
                            },
                            {
                                desc: '统计报表',
                                icon: 'fa fa-pie-chart icon',
                                path: '/project/projectSdeMiddleContent/statisticalReport',
                                open: true,
                                menuCode:'2'
                            },
                            {
                                desc: '工时视图',
                                icon: 'fa fa-bar-chart icon',
                                path: '/',
                                open: true,
                                menuCode:'3'
                            },
                            {
                                desc: '时间视图',
                                icon: 'fa fa-tasks icon',
                                path: '/',
                                open: true,
                                menuCode:'4'
                            },
                            {
                                desc: '人员视图',
                                icon: 'fa fa-address-card icon',
                                path: '/',
                                open: true,
                                menuCode:'5'
                            },
                            {
                                desc: '日历视图',
                                icon: 'fa fa-calendar icon',
                                path: '/',
                                open: true,
                                menuCode:'6'
                            }
                        ],
                        open: true
                    },
                    {
                        desc: '项目',
                        icon: 'fa fa-caret-right icon',
                        path: '/',
                        sonList: [
                            {
                                desc: '示例项目',
                                icon: 'fa fa-newspaper-o icon',
                                path: '/',
                                open: true,
                                menuCode:'7'
                            }
                        ],
                        open: true
                    },
                    {
                        desc: '配置中心',
                        icon: 'fa fa-gear icon',
                        path: '/',
                        sonList: [],
                        open: true,
                        menuCode:'8'
                    },
                    {
                        desc: '回收站',
                        icon: 'fa fa-bitbucket icon',
                        path: '/',
                        sonList: [],
                        open: true,
                        menuCode:'9'
                    }
                ],
                itemInfo:{}
            }
        },
        created() {
            this.$store.commit('updateModuleList', this.categoryModules);
        },
        methods: {
            enter(item) {
                item.icon = item.iconHover;
            },
            leave(item) {
                item.icon = item.iconNormal;

            },
            getInfo(item){
                this.itemInfo = item;
            }
        },
        components: {
            sideHeader,
            selectComponent
        }
    }
</script>

<style scoped lang="scss">

    #contain {
        .app-nav-area {
            background: #22d7bb;
            width: 70px;
            height: 100%;
            padding: 0;
            position: fixed;
            .top_area {
                .top {
                    height: 50px;
                    text-align: center;
                    display: block;
                    margin: 18px 0 18px 0;
                    img {
                        display: inline-block;
                        height: 50px;
                        line-height: 50px;
                    }
                }
            }
            .middle_area {
                ul {
                    list-style: none;
                    padding: 0;
                    li {
                        list-style: none;
                        .item {
                            height: 70px;
                            text-align: center;
                            display: block;
                            text-decoration: none;
                            position: relative;
                            > * {
                                transition: all linear .4s;
                            }
                            i.icon {
                                font-size: 24px;
                                color: white;
                                line-height: 70px;
                                display: inline-block;
                            }
                            .desc {
                                line-height: 25px;
                                font-size: 12px;
                                color: white;
                                display: none;
                            }
                            .triangle {
                                position: absolute;
                                top: 25px;
                                right: 0;
                                font-size: 16px;
                                color: white;
                            }
                        }
                        .item:hover {
                            background: rgb(24, 191, 164);
                            cursor: pointer;
                            i.icon {
                                line-height: 40px;
                            }
                            span.desc {
                                display: block;
                                line-height: 25px;
                            }
                        }
                    }
                }

            }
            .bottom_area {
                position: absolute;
                bottom: 0;
                text-align: center;
                padding-bottom: 15px;
                margin: 0 auto;
                width: 70px;
                .item {
                    height: 70px;
                    text-align: center;
                    display: block;
                    i {
                        font-size: 24px;
                        color: white;
                        line-height: 70px;
                    }
                }
                .avatar-default {
                    display: inline-block;
                    border-radius: 24px;
                    width: 48px;
                    height: 48px;
                    background-color: rgb(45, 188, 255);
                    font-size: 14px;
                    color: white;
                    line-height: 48px;
                    margin-top: 10px;
                }
            }
        }
        .app-box {
            padding-left: 70px;
            .main-body-side {
                position: fixed;
                width: 239px;
                background-color: #fff;
                height: 100%;
                overflow: auto;
                .head {

                }
            }
            .main-body {
                margin-left: 240px;
            }
        }
    }
</style>