<script>
// IMPORTS

// /IMPORTS

export default {
  props: [],
  components: {},
  data() {
    return {

    }
  },
  methods: {},
  mounted() { },
}
</script>

<template>
  <footer class="d-flex justify-content-between container align-items-center">
    <div class="logo">tASK.</div>
    <div class="username">Username</div>
  </footer>
</template>

<style lang="scss" scoped>
// USES
@use '../assets/scss/partials/variables' as *;

footer {
  height: 60px;
  background-color: red;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  .logo {
    font-size: 30px;
    color: $our-orange;
    font-weight: 600;
  }
}

span {
  color: $our-white;
}
</style>
