<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/communify.png" width="350" />
    <HelloWorld msg="Chatapp" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
