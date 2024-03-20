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
  methods: {
    methods: {
    }
  },
  mounted() { },
}
</script>

<template>
  <footer class="mobile d-flex d-md-none justify-content-between align-items-center">

    <!-- Collegamento home -->
    <router-link class="" :to="{ name: 'home' }">
      <i class=" fa-solid fa-house"></i>
    </router-link>

    <!-- Collegamento aggiungi task -->
    <router-link class="add-btn" :to="{ name: 'add-task' }">
      <i class=" fa-solid fa-plus"></i>
    </router-link>

    <!-- Collegamento categorie -->
    <router-link class="" :to="{ name: 'categories' }">
      <i class=" fa-solid fa-grip"></i>
    </router-link>
  </footer>

  <footer class="desktop d-none d-md-flex justify-content-between align-items-center">

    <div class="container d-flex  justify-content-between align-items-center">
      <!-- Collegamento home -->
      <router-link class="" :to="{ name: 'home' }">
        <i class=" fa-solid left-icon fa-house house-btn me-4"></i>
      </router-link>

      <!-- Collegamento categorie -->
      <router-link class="" :to="{ name: 'categories' }">
        <i class=" fa-solid left-icon fa-grip categories-btn"></i>
      </router-link>

      <!-- Collegamento aggiungi task -->
      <router-link class="add-btn ms-auto" :to="{ name: 'add-task' }">
        <i class=" fa-solid fa-plus"></i>
      </router-link>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
// USES
@use '../assets/scss/partials/variables' as *;

.mobile {

  height: 90px;
  box-shadow: 0 0 10px rgba($color: black, $alpha: 0.2);
  background-color: $our-white;
  padding: 0 45px;
  position: fixed;
  z-index: 999;
  bottom: 0;
  left: 0;
  right: 0;

  .add-btn {

    background-color: $our-orange;
    border-radius: 20px;
    margin-bottom: 55px;
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

.desktop {

  height: 60px;
  background-color: $our-white;
  box-shadow: 0 0 10px rgba($color: black, $alpha: 0.2);


  position: fixed;
  z-index: 999;
  bottom: 0;
  left: 0;
  right: 0;

  .categories-btn,
  .house-btn {
    background-color: $our-white;
  }

  .add-btn {

    background-color: $our-orange;
    border-radius: 20px;
    margin-bottom: 40px;
    box-shadow: 0 0 10px rgba($color: black, $alpha: 0.2);

    i {
      font-size: 32px;
      color: $our-white;
      padding: 20px 25px;

    }
  }

  .left-icon {
    padding: 20px 25px;
    color: $our-black;
    margin-bottom: 40px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba($color: black, $alpha: 0.2);
    font-size: 24px;
  }


}
</style>
