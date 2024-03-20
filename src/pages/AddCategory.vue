<script>
// IMPORTS
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import { VColorPicker } from '../../node_modules/vuetify/lib/components';

import Button from '../components/utilities/Button.vue';
import ButtonOutline from '../components/utilities/ButtonOutline.vue';
import axios from 'axios';
import { store } from '../store';



export default {
    props: [],
    components: { Header, Footer, Button, ButtonOutline, VColorPicker },
    data() {
        return {
            name: null,
            bg_color_hex: null,
            text_color_hex: null,
            formSubmitted: false
        }
    },
    methods: {

        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Imposta lo scrolling fluido
            });
        },

        validateForm() {
            let isValid = true;

            if (!this.name) {
                isValid = false;
            }

            return isValid;
        },

        submitForm() {
            this.formSubmitted = true;

            if (!this.validateForm()) {
                return; // Exit if form is not valid
            }



            axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
            const newCategory = {
                name: this.name,
                bg_color_hex: this.bg_color_hex,
                text_color_hex: this.text_color_hex
            };

            console.log(newCategory);

            axios.post(store.serverAPI + store.categoriesURI, newCategory, {
                headers: {
                    'Authorization': `Bearer ${store.accessToken}`
                }
            })
                .then(response => {

                    console.log('New category created:', response.data);
                    this.$router.push('/categories');

                })
                .catch(error => {
                    // Gestisci gli errori durante la richiesta
                    console.error('Error while creating new category:', error);
                    throw error; // Rilancia l'errore per gestirlo nel chiamante
                });
        }
    },
    mounted() {
        this.scrollToTop();
    }
}
</script>

<template>

    <div class="wrapper">
        <Header />

        <div class="container d-flex align-items-center justify-content-center px-4 py-4">
            <div class="padder">
                <div class="add-card d-flex flex-column py-4 px-4">
                    <h2 class="pb-4">new .cATEGORY</h2>
                    <div class="group pb-4 mt-5">
                        <input type="text" class="inputV2" v-model="name">
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Category name *</label>
                        <span v-if="formSubmitted && !name" class="error">Name is required</span>
                    </div>
                    <div class="row jusitfy-content-center g-4 mt-5 mb-5">
                        <div class="col-12 col-md-6 d-flex justify-content-center">
                            <ButtonOutline buttonText="Background Color" data-bs-toggle="modal"
                                data-bs-target="#backgroundModal" />
                        </div>
                        <div class="col-12 col-md-6 d-flex justify-content-center">
                            <ButtonOutline buttonText="Text Color" data-bs-toggle="modal" data-bs-target="#textModal" />
                        </div>
                    </div>



                    <!-- Modal -->
                    <div class="modal fade" id="backgroundModal" tabindex="-1" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Background Color
                                    </h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body d-flex justify-content-center">
                                    <v-color-picker hide-inputs v-model="bg_color_hex"></v-color-picker>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Modal -->
                    <div class="modal fade" id="textModal" tabindex="-1" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Text Color</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body d-flex justify-content-center">
                                    <v-color-picker hide-inputs v-model="text_color_hex"></v-color-picker>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div class="save-btn mt-5 pb-3 text-end">
                        <Button buttonText="Save" class="edit-btn" @click="submitForm" />
                    </div>
                </div>
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

        .add-card {
            border-radius: 8px;
            box-shadow: 0 0 10px rgba($color: black, $alpha: 0.2);
            background-color: $our-whiter;

            .modal {
                color: $our-black;
            }

            h2 {
                color: $our-orange;
                font-size: 40px;
                font-weight: 700;
                letter-spacing: -3px;

            }

            .custom-label {
                font-size: 14px;
                font-weight: 600;
                color: $our-light-grey;
                letter-spacing: -0.8px;

            }

            select {
                height: 38px;
                border-color: $our-border-grey;
                border-radius: 3px;
                transition: all 0.2s ease-in;
                font-size: 12px;

                &:hover {
                    border-color: $our-border-hover-grey;
                }

            }

            .error {
                color: red;
                font-size: 12px;
                margin-top: 5px;
            }
        }

    }
}
</style>
