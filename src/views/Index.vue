<template>
    <div>
        <el-container>
            <el-header>
                <img src="https://img.zcool.cn/community/0178d559acb222a801211d25ed8992.png@1280w_1l_2o_100sh.png"
                    alt="">
                <span>积云会员管理系统</span>
                <el-dropdown>
                    <span class="el-dropdown-link">
                        <i class="el-icon-arrow-down el-icon--right" style="color: #fff;">张三</i>
                    </span>
                    <el-dropdown-menu slot="dropdown" @command="handleCommand">
                        <el-dropdown-item icon="el-icon-edit" command="changePass">修改密码</el-dropdown-item>
                        <el-dropdown-item icon="el-icon-s-fold" command="logout">退出登录</el-dropdown-item>

                    </el-dropdown-menu>
                </el-dropdown>
            </el-header>
            <el-container>
                <el-aside width="230px">
                    <el-menu default-active="/index" background-color="#545c64" text-color="#fff"
                        active-text-color="#ffd04b" router>
                        <el-menu-item index="/inde">
                            <i class="el-icon-s-home"></i>
                            <span slot="title">首页</span>
                        </el-menu-item>
                        <el-menu-item index="/member">
                            <i class="el-icon-user-solid"></i>
                            <span slot="title">会员管理</span>
                        </el-menu-item>
                        <el-menu-item index="/supplier">
                            <i class="el-icon-s-cooperation"></i>
                            <span slot="title">供应商管理</span>
                        </el-menu-item>
                        <el-menu-item index="/commodity">
                            <i class="el-icon-s-goods"></i>
                            <span slot="title">商品管理</span>
                        </el-menu-item>
                        <el-menu-item index="/staff">
                            <i class="el-icon-user"></i>
                            <span slot="title">员工管理</span>
                        </el-menu-item>
                    </el-menu>
                </el-aside>
                <el-main>

                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>

export default {
    data() {
        return {

        }
    },
    methods: {
        handleCommand(command) {
            switch (command) {
                case "changePass":
                    this.handleChangePass()
                    break
                case "logout":
                    this.handleLogout()
                    break
            }
        },
        handleChangePass() {
            alert("修改密码")
        },
        async handleLogout() {
            try {
                const response = await this.$store.dispatch("handleLogout")
                setTimeout(() => {
                    this.$router.push("/login")
                }, 100)
                this.$message.success("退出成功")
            } catch (e) {
                console.log(e.message)
            }

        }
    },

    created() {
        console.log(sessionStorage.getItem('token'));
    }
}
</script>
<style lang="scss" scoped>
.el-header {
    background-color: #2d3a4b;
    text-align: center;
    line-height: 60px;
    color: #fff;
    display: flex;
    align-items: center;

    span {
        flex: 1;
    }

    img {
        width: 50px;
        height: 50px;
    }
}

.el-aside {
    background-color: #545c64;
}

.el-main {
    background-color: #fff;
    height: 100vh;
}
</style>