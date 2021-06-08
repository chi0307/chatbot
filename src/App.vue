<template>
  <router-view />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  created() {
    const value = `${window.innerHeight}px`;
    document.documentElement.style.setProperty('--real100vh', value);
  },
  components: {},
})
export default class Home extends Vue {}
</script>

<style lang="scss">
:root {
  --real100vh: 100vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
