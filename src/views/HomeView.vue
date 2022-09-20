<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { addMapping } from "_@jridgewell_gen-mapping@0.3.2@@jridgewell/gen-mapping";

export default {
  name: "HomeView",
  data() {
    return {
      a:"admin",
      b:"admin",
    }
  },
  components: {
    HelloWorld,
  },
  created(){
  this.$axios.post('/api/login',{username:this.a,password:this.b}).then(res=>{
    console.log(res);
  })
  }
};
</script>
