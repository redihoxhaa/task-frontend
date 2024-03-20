<script>
// IMPORTS
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import TaskCard from '../components/utilities/TaskCard.vue'
import axios from 'axios';
import { store } from '../store';

export default {
    props: [],
    components: { Header, Footer, TaskCard },
    data() {
        return {
            tasks: null,
        }
    },
    methods: {
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Imposta lo scrolling fluido
            });
        },

        getTasks() {
            axios.get(store.serverAPI + store.tasksURI, {
                headers: {
                    'Authorization': `Bearer ${store.accessToken}`
                }
            })
                .then(response => {
                    console.log(response.data);
                    this.tasks = response.data;
                })
                .catch(error => {
                    // Gestisci gli errori durante la richiesta
                    console.error('Error while fetching tasks:', error);
                    throw error; // Rilancia l'errore per gestirlo nel chiamante
                });
        }
    },
    mounted() {
        this.scrollToTop();
        this.getTasks();
    },
}
</script>

<template>

    <div class="wrapper">
        <Header />
        <div class="padder">
            <div class="container px-4 py-4">
                <ul class="tasks-list row g-4">
                    <li v-for="task in  tasks" :key="task.id" class="col-12 col-md-6 px-4">
                        <router-link :to="{ name: 'show-task', params: { id: task.id } }">
                            <TaskCard :task="task" />
                        </router-link>
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
    overflow-y: auto;

    .container {
        color: $our-white;
        margin-top: 60px;
        height: calc(100% - 120px);

    }
}
</style>
