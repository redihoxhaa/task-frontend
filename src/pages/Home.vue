<script>
// IMPORTS
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'


// /IMPORTS

export default {
    props: [],
    components: { Header, Footer },
    data() {
        return {

        }
    },
    methods: {},
    mounted() { },
}
</script>

<template>

    <div class="wrapper">
        <Header />
        <Footer />
    </div>


</template>

<style lang="scss" scoped>
// USES
@use '../assets/scss/partials/variables' as *;

.wrapper {
    background-color: $our-blue;
    width: 100vw;
    height: 100vh;

    .container {
        color: $our-white;
    }
}
</style>
