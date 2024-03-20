<script>
// IMPORTS
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import Button from '../components/utilities/Button.vue';
import axios from 'axios';
import { store } from '../store';


export default {
    props: [],
    components: { Header, Footer, VueDatePicker, Button },
    data() {
        return {
            categories: null,
            title: null,
            description: null,
            dueDate: '',
            categoryId: '',
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

        getCategories() {
            axios.get(store.serverAPI + store.categoriesURI, {
                headers: {
                    'Authorization': `Bearer ${store.accessToken}`
                }
            })
                .then(response => {

                    this.categories = response.data;
                })
                .catch(error => {
                    // Gestisci gli errori durante la richiesta
                    console.error('Error while fetching tasks:', error);
                    throw error; // Rilancia l'errore per gestirlo nel chiamante
                });
        },

        validateForm() {
            let isValid = true;

            if (!this.title) {
                isValid = false;
            }

            if (!this.description) {
                isValid = false;
            }

            if (!this.dueDate || new Date(this.dueDate) < new Date()) {
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
            const newTask = {
                title: this.title,
                description: this.description,
                due_date: this.dueDate,
                category_id: this.categoryId.toString(),
                status: false
            };

            axios.post(store.serverAPI + store.tasksURI, newTask, {
                headers: {
                    'Authorization': `Bearer ${store.accessToken}`
                }
            })
                .then(response => {

                    this.$router.push('/home');
                })
                .catch(error => {
                    // Gestisci gli errori durante la richiesta
                    console.error('Error while creating new task:', error);
                    throw error; // Rilancia l'errore per gestirlo nel chiamante
                });
        }
    },
    mounted() {
        this.scrollToTop();
        this.getCategories();
    }
}
</script>

<template>
    <div class="wrapper">
        <Header />

        <div class="container d-flex align-items-center justify-content-center px-4 py-4">
            <div class="padder">
                <div class="add-card d-flex flex-column py-4 px-4">
                    <h2 class="pb-4">New Task</h2>
                    <div class="group pb-4 mt-4">
                        <input type="text" class="inputV2" v-model="title">
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Task title *</label>
                        <span v-if="formSubmitted && !title" class="error">Title is required</span>
                    </div>
                    <div class="group mt-3">
                        <textarea type="text" class="inputV2" v-model="description"></textarea>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Description *</label>
                        <span v-if="formSubmitted && !description" class="error">Description is required</span>
                    </div>

                    <div class="row">
                        <div class="custom-group col-12 mt-3">
                            <div class="custom-label pb-2">Due date *</div>
                            <VueDatePicker v-model="dueDate" teleport-center></VueDatePicker>
                            <span v-if="formSubmitted && (!dueDate || new Date(dueDate) < new Date())" class="error">Due
                                date must be in the future</span>
                        </div>

                        <div class="custom-group col-12  mt-3" v-if="categories && categories.length">
                            <div class="custom-label pb-2">Category</div>
                            <select name="category_id" class="w-100 ps-2" v-if="categories" v-model="categoryId">
                                <option :value="category.id" v-for="category in categories">{{ category.name }}</option>
                            </select>
                        </div>
                    </div>

                    <div class="buttons d-flex justify-content-end align-items-center mt-5 mb-2">
                        <Button buttonText="Save" class="edit-btn " @click="submitForm" />
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
