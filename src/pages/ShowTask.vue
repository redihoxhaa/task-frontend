<script>
// IMPORTS
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import { DateTime } from "luxon";


export default {
    props: [],
    components: { Header, Footer },
    data() {
        return {
            task: {
                "id": 2,
                "user_id": 1,
                "category_id": 3,
                "title": "Pagare la palestra di Karate fino a domani",
                "description": "Completare la relazione di progetto",
                "due_date": "Thu Mar 21 2024 02:01:00 GMT+0100 (Ora standard dell\’Europa centrale)",
                "status": 1,
                "created_at": "2024-03-19T16:38:43.000000Z",
                "updated_at": "2024-03-19T16:38:43.000000Z",
                "category": {
                    "id": 3,
                    "user_id": 1,
                    "name": "nuova categoria",
                    "bg_color_hex": "#f2f2f2",
                    "text_color_hex": "#222222",
                    "created_at": "2024-03-19T20:30:17.000000Z",
                    "updated_at": "2024-03-19T20:30:17.000000Z"
                }
            },
        }
    },
    methods: {

        formattedCreateDate(dateString) {

            const dateTime = DateTime.fromISO(dateString, { zone: 'utc' });
            const formattedDate = dateTime.toFormat("LLL dd yyyy, HH:mm:ss a");
            return formattedDate;
        },

        formattedDueDate(dateString) {

            console.log(dateString)

            const formattedDateString = dateString.replace(" GMT", "").split(" (")[0];

            // Analizza la data usando la libreria Date
            const date = new Date(formattedDateString);

            const formattedDate = DateTime.fromJSDate(date).toFormat("LLL dd yyyy, HH:mm:ss a");
            return formattedDate; // Output: Mar 21 2024, 02:01:00 AM


        }

    },
    mounted() { },
}
</script>

<template>

    <div class="wrapper">
        <Header />
        <div class="container d-flex align-items-center justify-content-center px-4 py-4">
            <div class="task-card d-flex flex-column py-4 px-4">
                <h2 class="pb-4">your .tASK</h2>
                <div class="info d-flex flex-column">
                    <div class="create-date text-end pb-4">created: {{ formattedCreateDate(task.created_at) }}</div>
                    <h4 class="task-title pb-2">{{ task.title }}</h4>
                    <p class="inner-card task-description p-3 mb-5">{{ task.description }}</p>
                    <div class="category pb-4"><span class="label">Category:</span> {{ task.category.name }}</div>
                    <div class="due-date text-end">due date: {{ formattedDueDate(task.due_date) }}</div>

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
    height: 100vh;
    overflow-y: auto;

    .container {
        color: $our-white;
        margin-top: 60px;
        height: calc(100% - 120px);

        .task-card {
            border-radius: 8px;
            box-shadow: 0 0 10px rgba($color: black, $alpha: 0.2);

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
                    font-size: 12px;
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
</style>
