<template>
  <div class="home">
    <img alt="communify logo" src="../assets/communify.png" width="350" />
    <HelloWorld msg="Default Boilerplate Template" />
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
