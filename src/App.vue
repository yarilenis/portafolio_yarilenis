<template>
  <div id="app">
    <Profile />
  </div>
</template>

<script>
import Profile from "./components/Profile";

export default {
  name: 'app',
  components: {
    Profile
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
@import url('https://fonts.googleapis.com/css?family=Sacramento&display=swap');
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
