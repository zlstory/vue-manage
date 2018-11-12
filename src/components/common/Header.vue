<template>
    <div class="header-content">
        <div class="container">
            <div class="logo">
                管理系统
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'commonHeader',
    data(){
        return{

        }
    }
}
</script>

<style lang="scss" scoped>
    @import '~static/css/variables';

    $header-height:4.5rem;

    .header-content{
        position: relative;
        background: $theme-color;
        height: $header-height;
        width: 100%;
        color: #fff;
    }
    .container{
        width: 1200px;
        margin: 0 auto;
    }
    .logo{
        display: inline-block;
        vertical-align: middle;
        height: $header-height;
        line-height: $header-height;
    }
</style>
