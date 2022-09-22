<template>
    <div class="login">
        <div class="login-form">
            <h2>积云会员管理系统</h2>
            <br>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="账号" prop="username">
                    <el-input v-model="ruleForm.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="ruleForm.password"></el-input>
                </el-form-item>
            </el-form>
            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            ruleForm: {
                username: "",
                password: ""
            },
            rules: {
                username: [
                    { required: true, message: '请输入账号', trigger: 'blur' },
                    { min: 5, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },

                ],
            }
        }
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    if (this.ruleForm.username == "admin" || this.ruleForm.password == "admin") {
                        this.$message({
                            message: '登陆成功',
                            type: 'success'
                        });
                        this.$axios.post('/api/login', { username: this.ruleForm.username, password: this.ruleForm.password }).then(res => {
                            console.log(res);
                            console.log(res.data.data.token);

                            sessionStorage.setItem('token', res.data.data.token)
                            setTimeout(() => {
                                sessionStorage.getItem('token')
                            }, 2000)
                        })
                        this.$router.push('./index')
                    } else {
                        this.$message.error('账号或密码错误');
                    }
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    },
    created() {

    }
}
</script>
<style lang="scss" scoped>
.login {
    width: 100%;
    height: 100vh;
    background-image: url('http://vue.mengxuegu.com/img/login.b665435f.jpg');
    overflow: hidden;
}

.login-form {
    width: 350px;
    background-color: rgba(255, 255, 255, 0.8);
    margin: 160px auto;
    border-radius: 20px;
    padding: 28px;

    h2 {
        width: 100%;
        text-align: center;
    }
}

.box-card {
    width: 500px;
    height: 300px;
    border-radius: 10px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

}
</style>
