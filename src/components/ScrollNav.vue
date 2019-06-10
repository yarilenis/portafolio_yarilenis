<template>
  <div class="sidebar">
    <ul class="menu" v-hello v-scroll-spy-active v-scroll-spy-link>
      <li
        :key="item"
        v-for="item in titles"
        class="menu-item"
      >
        <a>
          <img :src="item.image" :alt="item.name">
          <span class="d-none d-md-block">{{ item.name }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titles: [
        {
          name: "Sobre mi",
          image: "/images/girl.svg"
        },
        {
          name: "Experiencia",
          image: "/images/idea.svg"
        },
        {
          name: "Skills",
          image: "/images/skills.svg"
        },
        {
          name: "Portafolio",
          image: "/images/work.svg"
        }
      ]
    };
  },
  directives: {
    hello: {
      inserted() {
        console.log(`inserted...`);
      },
      componentUpdated() {
        console.log(`componentUpdated....`);
      }
    }
  }
};
</script>
