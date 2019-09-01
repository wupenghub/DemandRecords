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
                    <li v-for="item in categoryModules" @mouseenter="enter(item)" @mouseleave="leave(item)">
                        <router-link :to="item.path" class="item" :key="item.icon">
                            <i :class="'fa '+item.icon+' icon'"></i>
                            <span class="desc">{{item.desc}}</span>
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
                <div class="head">
                    <span>项目</span>
                    <a class="icon">
                        <i class="fa fa-newspaper-o"></i>
                    </a>
                    <search :message="message"></search>
                </div>
            </div>
            <div class="main-body">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import '../../lib/font-awesome-4.7.0/css/font-awesome.min.css';
    import search from '../search/search.vue';

    export default {
        data() {
            return {
                message: '任务名称、编号',
                categoryModules: [
                    {
                        icon: 'fa-comment-o',
                        desc: '消息',
                        path: '/',
                        ref:'message',
                        iconNormal:'fa-comment-o',
                        iconHover:'fa-comment'
                    },
                    {
                        icon: 'fa-newspaper-o',
                        desc: '项目',
                        path: '/home',
                        ref:'project',
                        iconNormal:'fa-newspaper-o',
                        iconHover:'fa-newspaper-o'
                    },
                    {
                        icon: 'fa-calendar',
                        desc: '日历',
                        path: '/home',
                        ref:'calendar',
                        iconNormal:'fa-calendar',
                        iconHover:'fa-calendar-check-o'
                    },
                    {
                        icon: 'fa-folder-open-o',
                        desc: '网盘',
                        path: '/home',
                        ref:'disk',
                        iconNormal:'fa-folder-open-o',
                        iconHover:'fa-folder-open'
                    },
                    {
                        icon: 'fa-cube',
                        desc: '应用',
                        path: '/home',
                        ref:'application',
                        iconNormal:'fa-cube',
                        iconHover:'fa-cubes'
                    }
                ]
            }
        },
        methods: {
            enter(item) {
                item.icon = item.iconHover;
            },
            leave(item) {
                item.icon = item.iconNormal;
            }
        },
        components: {
            search
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
                .head {
                    height: 50px;
                    padding: 0 20px 0 20px;
                    font-size: 16px;
                    line-height: 50px;
                    .icon {
                        float: right;
                        color: #ccc;
                    }
                }
            }
            .main-body {
                margin-left: 240px;
            }
        }
    }
</style>