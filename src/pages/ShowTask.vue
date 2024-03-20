<script>
// IMPORTS
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import Button from '../components/utilities/Button.vue';
import { DateTime } from "luxon";
import axios from 'axios';
import { store } from '../store';

export default {
    props: [],
    components: { Header, Footer, Button },
    data() {
        return {
            store,
            task: null,
        }
    },
    methods: {

        getTask() {
            axios.get(store.serverAPI + store.tasksURI + '/' + this.$route.params.id, {
                headers: {
                    'Authorization': `Bearer ${store.accessToken}`
                }
            })
                .then(response => {

                    this.task = response.data;
                })
                .catch(error => {
                    // Gestisci gli errori durante la richiesta
                    console.error('Error while fetching tasks:', error);
                    throw error; // Rilancia l'errore per gestirlo nel chiamante
                });
        },

        formattedCreateDate(dateString) {

            const dateTime = DateTime.fromISO(dateString, { zone: 'utc' });
            const formattedDate = dateTime.toFormat("LLL dd yyyy, HH:mm:ss a");
            return formattedDate;
        },

        formattedDueDate(dateString) {

            const formattedDateString = dateString.replace(" GMT", "").split(" (")[0];

            // Analizza la data usando la libreria Date
            const date = new Date(formattedDateString);

            const formattedDate = DateTime.fromJSDate(date).toFormat("LLL dd yyyy, HH:mm:ss a");
            return formattedDate; // Output: Mar 21 2024, 02:01:00 AM

        },

        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Imposta lo scrolling fluido
            });
        }

    },
    mounted() {
        this.scrollToTop();
        this.getTask();
    }
}
</script>

<template>

    <div class="wrapper">
        <Header />

        <div class="container d-flex align-items-center justify-content-center px-4 py-4">
            <div class="padder">
                <div class="task-card d-flex flex-column py-4 px-4" v-if="task">
                    <h2 class="pb-4">your .tASK</h2>
                    <div class="info d-flex flex-column">
                        <div class="create-date text-end pb-4">created: {{ formattedCreateDate(task.created_at) }}</div>
                        <h4 class="task-title pb-2">{{ task.title }}</h4>
                        <p class="task-description p-3 mb-4">{{ task.description }}</p>
                        <div class="category pb-4" v-if="task.category"><span class="label">Category:</span> {{
                    task.category.name }}</div>
                        <div class="due-date d-flex justify-content-end">due date: {{ formattedDueDate(task.due_date) }}
                        </div>
                        <div class="div d-flex justify-content-end">
                            <Button buttonText="Edit" buttonRedirect="edit-task" class="edit-btn mt-5"
                                :taskId="task.id" />
                        </div>
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

        .padder {
            padding-bottom: 80px !important;


            .task-card {
                border-radius: 8px;
                box-shadow: 0 0 10px rgba($color: black, $alpha: 0.2);
                background-color: $our-whiter;


                h2 {
                    color: $our-orange;
                    font-size: 40px;
                    font-weight: 700;
                    letter-spacing: -3px;

                }

                .info {

                    color: $our-black;

                    .create-date,
                    .due-date {
                        color: $our-light-grey;
                        font-size: 10px;
                    }

                    .task-title {
                        font-size: 20px;
                    }

                    .task-description {
                        font-size: 14px;
                        border-bottom: 1px solid $our-border-grey;
                        color: $our-grey;
                    }

                    .edit-btn {
                        width: fit-content;
                    }

                    .category {
                        font-size: 14px;

                        .label {
                            font-size: 14px;
                            color: $our-orange;
                            font-weight: 700;
                            letter-spacing: -1px;
                        }
                    }
                }


            }
        }

    }
}
</style>
