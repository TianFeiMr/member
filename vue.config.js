const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    port:8888,
    host:"localhost",
    open:false,
    https:false
  }
});
