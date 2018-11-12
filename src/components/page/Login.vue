<template>
    <div class="main-container">
        <div class="register-content">
            <h3>用户登录</h3>
            <el-form ref="form" :model="form1" label-width="80px">
                <el-form-item label="用户名称">
                    <el-input name="userName" v-validate="'required|min:2|max:20'" v-model="form1.name" placeholder="请输入用户名"></el-input>
                    <span v-show="errors.first('userName:required')" class="errorMsg">用户名为必填项</span>
                    <span v-show="errors.first('userName:min')" class="errorMsg">用户名的最小长度为2</span>
                    <span v-show="errors.first('userName:max')" class="errorMsg">用户名的最大长度为20</span>
                </el-form-item>
                <el-form-item label="手机号码">
                    <el-input ref="phoneNum" name="phoneNum" v-validate="'required|phone'" v-model="form1.phone" placeholder="请输入手机号码" @keydown.native="btnYes"></el-input>
                    <span class="errorMsg" v-show="errors.has('phoneNum')">手机号码格式不正确</span>
                </el-form-item>
                <el-form-item label="验 证 码">
                    <el-input ref="vcode" class="vcodeInput" v-model="form1.vcode" placeholder="请输入验证码"></el-input>
                    <el-button v-if="isSend" class="vcodeBtn" type="primary" @click="getNoteValue">{{btnValue}}</el-button>
                    <el-button v-else disabled class="vcodeBtn" type="default">{{btnValue}}</el-button>
                </el-form-item>
                <el-form-item label="输入密码">
                    <el-input type="password" name="password" v-validate="'required'" data-vv-as='密码' :attr="{maxlength:20}" v-model="form1.password1" placeholder="请输入密码"></el-input>
                    <span class="errorMsg" v-show="errors.has('password')">{{ errors.first('password') }}</span>
                </el-form-item>
                <!-- <el-form-item label="确认密码">
                        <el-input type="password" name="rePassword" v-validate="'required|confirmed:password'" :attr="{maxlength:20}" v-model="form1.password2" placeholder="请确认密码"></el-input>
                        <span class="errorMsg" v-show="errors.has('rePassword')">两次密码输入不一致</span>
                    </el-form-item> -->
            </el-form>
            <el-button type="default" @click="onSubmit">立即注册</el-button>
            <el-button type="primary" @click="onLogin">马上登录</el-button>
        </div>
        <div class="login-content" v-show="userState">
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                form1: {
                    name: '',
                    phone: '',
                    vcode: '',
                    password1: '',
                    password2: '',
                    email: ''
                },
                //用户状态以显示登录or注册
                userState: false,
                //获取验证码按钮
                btnValue: '获取验证码',
                //计时器初始值
                times: 10,
                //通过isSend改变验证码按钮的状态
                isSend: true,
                validation: {
                    result: {}
                }
            }
        },
        methods: {
            //判断手机号为11位数时解除按钮的禁用
            btnYes() {
                if (this.$refs.phoneNum.value.length == "10") {
                    this.btnBoolen = false
                }
            },
            //点击获取验证码
            getNoteValue() {
                let vcode = this.$refs.vcode.value; //获取输入框验证码的值
                //显示倒计时                        
                let timer = setInterval(() => {
                    if (this.times == 0) {
                        clearTimeout(timer);
                        this.btnValue = "获取验证码";
                        this.isSend = true;
                        return
                    } else {
                        this.times--;
                        this.isSend = false;
                        this.btnValue = this.times + "s重新发送";
                    }
                }, 1000)
                this.axios.get('https://www.easy-mock.com/mock/5be24977cb28261bb54fedf5/example/vcode')
                    .then((response) => {
                        if (response.status == 200) {
                            let rightCode = response.data.number;
                            console.log(rightCode) //显示得到的验证码
                        }
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            },
            onSubmit() {
                let _this = this;
                console.log('暂无注册')
                //   location.href = `/#/login`
                this.$validator.validateAll().then((result) => {
                    console.log(result) // true
                    if (result) {
                        //提交数据
                        let param = {
                            userName: _this.form1.name,
                            password: _this.form1.password1,
                            phoneNum: _this.form1.phone,
                            vcode: _this.form1.vcode
                        }
                    }
                })
            },
            onLogin() {
                let _this = this
                this.$validator.validateAll().then((result) => {
                        if (result) {
                            localStorage.setItem('ms_username',this.form1.name);
                            this.$router.push('/');
                        }else{
                            return false;
                        }
                    })
                }
            }
        }
</script>

<style lang="scss" scoped>
    @import '~static/css/variables';
    .main-container {
        position: relative;
        width: 100%;
        height: 100%;
        background: #34a9bd;
    }
    .main-container {
        .register-content,
        .login-content {
            width: 400px;
            position: absolute;
            left: 50%;
            top: 50%;
            margin-left: -200px;
            margin-top: -200px;
            background: #ffffff;
            border-radius: 5px;
            border: 1px solid #ffffff;
            padding: 30px 20px;
            text-align: center;
        }
        .vcodeInput {
            width: 203px;
        }
        .vcodeBtn {
            width: 112px;
        }
        .errorMsg {
            color: $font-red;
            position: absolute;
            top: 30px;
            text-align: left;
            left: 0px;
        }
    }
</style>
