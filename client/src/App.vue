<template>
  <div id="app" :class="{ blackbg:isDark }">
    <button @click="setBlack" class="margin5">Darkmode</button>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/chat">Chat</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data: () => ({
    isDark: false,
  }),
  methods: {
    setBlack() {
      this.isDark = this.isDark === false ? true : false;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

  .blackbg {
    background-color: rgb(31, 30, 30);
  }
</style>
