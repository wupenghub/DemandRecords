<template>
    <div class="contain">
        <div class="search_box">
            <input type="text" class="search_input" :placeholder="'请输入'+message">
            <i class="fa fa-search icon"></i>
        </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {}
        },
        props:['message']
    }
</script>

<style scoped lang="scss">
    .contain {
        .search_box {
            position: relative;
            height: 35px;
            .search_input {
                padding: 6px 0 6px 36px;
                display: block;
                margin: 0;
                height: 35px;
                width: 100%;
                border-radius: 20px;
                background: #f3f3f3;
                border: 1px solid #f3f3f3;
                outline:none;
                transition: all linear .2s;
                -webkit-text-fill-color: #ccc;
                font-size: 14px;
                position: absolute;

            }
            .search_input:hover {
                border-color: #22d7bb;
                background-color: #fff;
            }
            .icon{
                font-size: 18px;
                position: absolute;
                top:9px;
                left: 10px;
                color: gray;
            }
        }
    }

</style>