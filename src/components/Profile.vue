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

export default {
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
