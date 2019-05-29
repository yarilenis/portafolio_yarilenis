import AboutMe from './AboutMe.vue';
import Experience from './Experience.vue';
import Portfolio from './Portfolio.vue';
import Profile from './Profile.vue';
import ScrollNav from './ScrollNav.vue';
import Skills from './Skills.vue';
import CardShadow from './CardShadow.vue';

const components = {
  AboutMe,
  Experience,
  Portfolio,
  Profile,
  ScrollNav,
  Skills,
  CardShadow,
};

components.install = (Vue) => {
  // Register components
  Object.keys(components).forEach((componentName) => {
    const component = components[componentName];
    if (component && componentName !== 'install') {
      Vue.component(componentName, component);
    }
  });
};

export default components;
