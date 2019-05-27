<template>
  <div>
    <div class="main" v-scroll-spy>
      <div>
        <AboutMe></AboutMe>
      </div>
      <div>
        <Experience></Experience>
      </div>
      <div>
        <Skills></Skills>
      </div>
      <div>
        <Portfolio></Portfolio>
      </div>
    </div>
    <ScrollNav></ScrollNav>
  </div>
</template>

<script>
import ScrollNav from "./ScrollNav.vue";
import AboutMe from "./AboutMe.vue";
import Experience from "./Experience.vue";
import Skills from "./Skills.vue";
import Portfolio from "./Portfolio.vue";

export default {
  components: {
    ScrollNav,
    AboutMe,
    Experience,
    Skills,
    Portfolio
  },
  data() {
    return {
      text: `
        Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla
        tempor. Laborum consequat non elit enim exercitation cillum aliqua
        consequat id aliqua. Esse ex consectetur mollit voluptate est in duis
        laboris ad sit ipsum anim Lorem. Incididunt veniam velit elit elit veniam
        Lorem aliqua quis ullamco deserunt sit enim elit aliqua esse irure. Laborum
        nisi sit est tempor laborum mollit labore officia laborum excepteur
        commodo non commodo dolor excepteur commodo. Ipsum fugiat ex est consectetur
        ipsum commodo tempor sunt in proident.
      `
    };
  }
};
</script>

<style>
.sidebar {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 180px;
  background: #f378de;
  height: 100%;
}
.menu {
  padding: 0;
  list-style: none;
}
.current-section {
  padding-top: 50px;
}
.current-section input {
  max-width: 3em;
}
.menu-item {
  margin-bottom: 20px;
  text-align: center;
  color: white;
}
.menu-item a {
  cursor: pointer;
  font-family: "Sacramento", cursive;
  font-size: 1.7rem;
  display: block;
}
.menu-item img {
  width: 60px;
}
.main {
  margin-left: 180px;
  padding: 0 50px;
  font-size: 25px;
  background: #f5f5f5;
}
.active {
  background: #E91E63;
  padding-left: 5px;
  transition: all 0.5s;
}
</style>
