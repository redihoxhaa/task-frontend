<script>
// IMPORTS
import { DateTime } from "luxon";

export default {
    props: ['task'],
    methods: {

        // Funzione per trasformare la data
        formatDueDateLeft(futureDateString) {
            const targetDate = new Date(futureDateString);
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference <= 0) {
                return ["", ""];
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

            const formattedDays = `${days} D`;
            const formattedHours = `${hours} H`;
            const formattedOutput = [formattedDays, formattedHours];
            return formattedOutput;
        }
    }
};
</script>

<template>
    <div class="task row" v-if="task.category_id"
        :style="{ backgroundColor: task.category.bg_color_hex, color: task.category.text_color_hex }">
        <i class="fa-solid fa-check" v-if="task.status == 1"></i>
        <div class="col-10 d-flex flex-column justify-content-center">
            <div class="title">{{ task.title }}</div>
            <span class="description">{{ task.description }}</span>
        </div>
        <div class="col-2 d-flex flex-column justify-content-center align-items-center">
            <div class="due-date text-uppercase d-flex flex-column justify-content-center align-items-center"
                v-if="task.status == 1"><span class="done">Done</span></div>
            <div class="due-date d-flex flex-column justify-content-center align-items-center" v-else>
                <template v-if="new Date(task.due_date) > new Date()">
                    <span class="days">
                        {{ formatDueDateLeft(task.due_date)[0] }}
                    </span>
                    <span class="hours">
                        {{ formatDueDateLeft(task.due_date)[1] }}
                    </span>
                    <span>left</span>
                </template>
                <template v-else>
                    <span v-if="new Date(task.due_date) < new Date()" class="expired">Expired</span>
                    <span v-else class="completed">Completed</span>
                </template>
            </div>
        </div>
    </div>

    <div class="task row" v-else>
        <i class="fa-solid fa-check" v-if="task.status == 1"></i>
        <div class="col-10 d-flex flex-column justify-content-center">
            <div class="title">{{ task.title }}</div>
            <span class="description">{{ task.description }}</span>
        </div>
        <div class="col-2 d-flex flex-column justify-content-center align-items-center">
            <div class="due-date text-uppercase d-flex flex-column justify-content-center align-items-center"
                v-if="task.status == 1"><span class="done">Done</span></div>
            <div class="due-date d-flex flex-column justify-content-center align-items-center" v-else>
                <template v-if="new Date(task.due_date) > new Date()">
                    <span class="days">
                        {{ formatDueDateLeft(task.due_date)[0] }}
                    </span>
                    <span class="hours">
                        {{ formatDueDateLeft(task.due_date)[1] }}
                    </span>
                    <span>left</span>
                </template>
                <template v-else>
                    <span v-if="new Date(task.due_date) < new Date()" class="expired">Expired</span>
                    <span v-else class="completed">Completed</span>
                </template>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as *;


.task {
    padding: 20px 10px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba($color: black, $alpha: 0.2);
    position: relative;
    overflow: hidden;
    color: $our-black;

    .fa-check {
        position: absolute;
        font-size: 160px;
        top: -39px;
        left: -30px;
        opacity: 0.1;
        z-index: 2;
        color: $our-black !important;

    }

    .title {
        font-weight: 500;
        letter-spacing: -1px;
    }

    .description {
        filter: opacity(0.5);
        font-size: 12px;
        letter-spacing: -0.3px;
    }

    .done {
        color: inherit;
    }

    .due-date {
        font-size: 14px;
        letter-spacing: -1px;
        font-weight: 700;
        line-height: 17px;
        filter: opacity(0.6);

        .hours {
            filter: opacity(0.5);
        }
    }
}
</style>
