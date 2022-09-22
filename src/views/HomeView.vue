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
import {getLogin} from '../../src/api/login'
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
    
  }
};
</script>
