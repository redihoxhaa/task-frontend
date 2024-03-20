<script>
// IMPORTS
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import TaskCard from '../components/utilities/TaskCard.vue'


export default {
    props: [],
    components: { Header, Footer, TaskCard },
    data() {
        return {
            tasks: [
                {
                    "id": 1,
                    "user_id": 1,
                    "category_id": 3,
                    "title": "Task importante",
                    "description": "Completare la relazione di progetto",
                    "due_date": "2024-05-14 20:59:30",
                    "status": 1,
                    "created_at": "2024-03-19T16:02:07.000000Z",
                    "updated_at": "2024-03-19T16:02:07.000000Z",
                    "category": {
                        "id": 3,
                        "user_id": 1,
                        "name": "Tasse",
                        "bg_color_hex": "#f2f2f2",
                        "text_color_hex": "#222222",
                        "created_at": "2024-03-19T20:30:17.000000Z",
                        "updated_at": "2024-03-19T20:30:17.000000Z"
                    }
                },
                {
                    "id": 2,
                    "user_id": 1,
                    "category_id": 3,
                    "title": "Task di Mirko",
                    "description": "Completare la relazione di progetto",
                    "due_date": "Thu Mar 26 2024 02:01:00 GMT+0100 (Ora standard dell\’Europa centrale)",
                    "status": 1,
                    "created_at": "2024-03-19T16:38:43.000000Z",
                    "updated_at": "2024-03-19T16:38:43.000000Z",
                    "category": {
                        "id": 3,
                        "user_id": 1,
                        "name": "Svago",
                        "bg_color_hex": "#f2f2f2",
                        "text_color_hex": "#222222",
                        "created_at": "2024-03-19T20:30:17.000000Z",
                        "updated_at": "2024-03-19T20:30:17.000000Z"
                    }
                },
                {
                    "id": 1,
                    "user_id": 1,
                    "category_id": 3,
                    "title": "Task importante",
                    "description": "Completare la relazione di progetto",
                    "due_date": "Thu Mar 26 2024 02:01:00 GMT+0100 (Ora standard dell\’Europa centrale)",
                    "status": 1,
                    "created_at": "2024-03-19T16:02:07.000000Z",
                    "updated_at": "2024-03-19T16:02:07.000000Z",
                    "category": {
                        "id": 3,
                        "user_id": 1,
                        "name": "Lavoro",
                        "bg_color_hex": "#f2f2f2",
                        "text_color_hex": "#222222",
                        "created_at": "2024-03-19T20:30:17.000000Z",
                        "updated_at": "2024-03-19T20:30:17.000000Z"
                    }
                },
                {
                    "id": 2,
                    "user_id": 1,
                    "category_id": 3,
                    "title": "Task di Mirko",
                    "description": "Completare la relazione di progetto",
                    "due_date": "Thu Mar 26 2024 02:01:00 GMT+0100 (Ora standard dell\’Europa centrale)",
                    "status": 1,
                    "created_at": "2024-03-19T16:38:43.000000Z",
                    "updated_at": "2024-03-19T16:38:43.000000Z",
                    "category": {
                        "id": 3,
                        "user_id": 1,
                        "name": "Spesa",
                        "bg_color_hex": "#f2f2f2",
                        "text_color_hex": "#222222",
                        "created_at": "2024-03-19T20:30:17.000000Z",
                        "updated_at": "2024-03-19T20:30:17.000000Z"
                    }
                },
                {
                    "id": 1,
                    "user_id": 1,
                    "category_id": 3,
                    "title": "Task importante",
                    "description": "Completare la relazione di progetto",
                    "due_date": "2024-05-14 20:59:30",
                    "status": 1,
                    "created_at": "2024-03-19T16:02:07.000000Z",
                    "updated_at": "2024-03-19T16:02:07.000000Z",
                    "category": {
                        "id": 3,
                        "user_id": 1,
                        "name": "Affari",
                        "bg_color_hex": "#f2f2f2",
                        "text_color_hex": "#222222",
                        "created_at": "2024-03-19T20:30:17.000000Z",
                        "updated_at": "2024-03-19T20:30:17.000000Z"
                    }
                },
                {
                    "id": 2,
                    "user_id": 1,
                    "category_id": 3,
                    "title": "Task di Mirko",
                    "description": "Completare la relazione di progetto",
                    "due_date": "Thu Mar 26 2024 02:01:00 GMT+0100 (Ora standard dell\’Europa centrale)",
                    "status": 1,
                    "created_at": "2024-03-19T16:38:43.000000Z",
                    "updated_at": "2024-03-19T16:38:43.000000Z",
                    "category": {
                        "id": 3,
                        "user_id": 1,
                        "name": "Allenamento",
                        "bg_color_hex": "#f2f2f2",
                        "text_color_hex": "#222222",
                        "created_at": "2024-03-19T20:30:17.000000Z",
                        "updated_at": "2024-03-19T20:30:17.000000Z"
                    }
                },
                {
                    "id": 1,
                    "user_id": 1,
                    "category_id": 3,
                    "title": "Task importante",
                    "description": "Completare la relazione di progetto",
                    "due_date": "Thu Mar 26 2024 02:01:00 GMT+0100 (Ora standard dell\’Europa centrale)",
                    "status": 1,
                    "created_at": "2024-03-19T16:02:07.000000Z",
                    "updated_at": "2024-03-19T16:02:07.000000Z",
                    "category": {
                        "id": 3,
                        "user_id": 1,
                        "name": "Amici",
                        "bg_color_hex": "#f2f2f2",
                        "text_color_hex": "#222222",
                        "created_at": "2024-03-19T20:30:17.000000Z",
                        "updated_at": "2024-03-19T20:30:17.000000Z"
                    }
                },
            ]
        }
    },
    methods: {
    },
    mounted() { },
}
</script>

<template>

    <div class="wrapper">
        <Header />
        <div class="padder">
            <div class="container px-4 py-4">
                <ul class="tasks-list d-flex flex-column gap-2">
                    <li v-for="task in tasks">
                        <TaskCard :task="task" />
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
    height: 100vh;
    overflow-y: auto;

    .container {
        color: $our-white;
        margin-top: 60px;
        height: calc(100% - 120px);


    }
}
</style>
