<script>
// IMPORTS
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import ButtonOutline from '../components/utilities/ButtonOutline.vue';
import '@vuepic/vue-datepicker/dist/main.css'
import axios from 'axios';
import { store } from '../store';


export default {
    props: [],
    components: { Header, Footer, VueDatePicker, ButtonOutline },
    data() {
        return {
            categories: null,
        }
    },
    methods: {

        getCategories() {
            axios.get(store.serverAPI + store.categoriesURI, {
                headers: {
                    'Authorization': `Bearer ${store.accessToken}`
                }
            })
                .then(response => {
                    console.log(response.data);
                    this.categories = response.data;
                })
                .catch(error => {
                    // Gestisci gli errori durante la richiesta
                    console.error('Error while fetching categories:', error);
                    throw error; // Rilancia l'errore per gestirlo nel chiamante
                });
        },

        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Imposta lo scrolling fluido
            });
        },
    },
    mounted() {
        this.getCategories();
        this.scrollToTop();
    }
}
</script>

<template>

    <div class="wrapper">
        <Header />

        <div class="container d-flex align-items-center justify-content-center px-4 py-4">
            <div class="padder">
                <div class="btn-container d-flex flex-column align-items-center mt-4">
                    <ButtonOutline buttonText="Add Category" buttonRedirect="add-category" />
                </div>
                <ul class="categories row g-4 pt-3">
                    <li v-for=" category in categories" class="col-12 col-md-6 px-4">
                        <div class="category"
                            :style="{ backgroundColor: category.bg_color_hex, color: category.text_color_hex }">{{
                        category.name }}
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <Footer />
    </div>


</template>

<style lang="scss" scoped>
// USES
@use '../assets/scss/partials/variables' as *;
@use '../assets/scss/partials/reset' as *;



.wrapper {
    background-color: $our-white;


    .container {

        color: $our-white;
        margin-top: 60px;
        height: calc(100% - 120px);

        .categories {


            .category {
                color: $our-black;
                padding: 20px 30px;
                width: 100%;
                box-shadow: 0 0 10px rgba($color: black, $alpha: 0.2);
                border-radius: 8px;
            }
        }

    }
}
</style>
