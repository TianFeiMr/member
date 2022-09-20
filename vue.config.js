const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    // 端口号
    port:8888,
    // 主机名
    host:"localhost",
    // 启动项目时自动打开浏览器
    open:false,
    // 是否开启https
    https:false,
    // 配置跨域
    proxy:{
      "/api":{
        target:"http://ceshi5.dishait.cn/admin",
        changOrigin:true,
        pathRewrite:{
          "^/api":""
        }
      }
    }
  },
  lintOnSave:false
});
