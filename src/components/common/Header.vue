<template>
    <div class="header-content">
        <div class="container">
           
            <div class="logo">
                管理系统
            </div>
             <div class="collapse-btn">
                <i class="el-icon-menu"></i>
            </div>
            <div class="header-right">
                <div class="uesr-msg">
                    <i class="iconfont icon-uesr"></i>
                    <span>欢迎您：</span>
                   {{userName}}
                </div>
                <div class="login-out">
                    <i class="iconfont icon-loginout"></i>
                    退出
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'commonHeader',
        data() {
            return {
                name:"admin"
            }
        },
        computed:{
            userName(){
                 let username = localStorage.getItem('ms_username');
                return username ? username : this.name;
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~static/css/variables';
    .header-content {
        position: relative;
        background: $theme-color-d;
        height: $header-height;
        line-height: $header-height;
        width: 100%;
        font-size: $font-large-x;
        color: #fff;
    }
    .collapse-btn,
    .logo,
    .uesr-msg,
    .login-out {
        display: inline-block;
        vertical-align: middle;
        height: $header-height;
        line-height: $header-height;
        cursor: pointer;
    }
    .collapse-btn {
        padding: 0 4px;
    }
    .logo {
        width: $sideBar-width;
        text-align: center;
        font-weight: bold;
    }
    .header-right {
        float: right;
        margin-right: 50px;
        font-size: $font-nomal;
    }
    .login-out{
        margin-left: 20px;
        font-size: $font-medium;
    }
</style>
