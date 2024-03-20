<script>
// IMPORTS
import { store } from '../store';
// /IMPORTS

export default {
  props: [],
  components: {},
  data() {
    return {
      store,
    }
  },
  methods: {},
  mounted() { },
}
</script>

<template>
  <header class="d-flex justify-content-between align-items-center px-4">
    <div class="container d-flex justify-content-between align-items-center">
      <router-link class="logo" :to="{ name: 'home' }">.tASK</router-link>
      <div class="username">{{ this.store.userInfo.name }}</div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
// USES
@use '../assets/scss/partials/variables' as *;

header {
  height: 60px;
  box-shadow: 0 0 10px rgba($color: black, $alpha: 0.2);

  position: fixed;
  z-index: 999;
  background-color: $our-white;
  top: 0;
  left: 0;
  right: 0;

  .logo {
    font-size: 30px;
    color: $our-orange;
    font-weight: 700;
    letter-spacing: -3px;
    text-decoration: none;
  }

  .username {
    color: $our-black;
  }
}
</style>
