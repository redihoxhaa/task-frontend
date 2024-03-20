<script>
// IMPORTS
import Button from './utilities/Button.vue';

export default {
  props: [],
  components: { Button },
  data() {
    return {

    }
  },
  methods: {},
  mounted() { },
}
</script>

<template>
  <footer class="d-flex justify-content-between align-items-center px-5">
    <i class="fa-solid fa-house"></i>
    <router-link class="add-btn" :to="{ name: 'add-task' }">
      <i class="fa-solid fa-plus"></i>
    </router-link>
    <i class="fa-solid fa-list"></i>
  </footer>
</template>

<style lang="scss" scoped>
// USES
@use '../assets/scss/partials/variables' as *;

footer {

  height: 60px;
  box-shadow: 0 0 10px rgba($color: black, $alpha: 0.2);
  background-color: $our-white;

  position: fixed;
  z-index: 999;
  bottom: 0;
  left: 0;
  right: 0;

  .add-btn {

    background-color: $our-orange;
    border-radius: 20px;
    margin-bottom: 60px;
    box-shadow: 0 0 10px rgba($color: black, $alpha: 0.2);

    i {
      font-size: 32px;
      color: $our-white;
      padding: 20px 30px;

    }
  }

  i {
    color: $our-black;
    font-size: 24px;
  }


}
</style>
