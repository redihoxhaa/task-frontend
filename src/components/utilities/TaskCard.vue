<script>
// IMPORTS
import { DateTime } from "luxon";

export default {
    props: ['task'],
    methods: {
        // Funzione per trasformare la data
        formatDueDate(dueDateString) {
            const isoDueDateString = dueDateString.replace(" ", "T");

            const dueDate = DateTime.fromISO(isoDueDateString);
            const currentDate = DateTime.now();

            // Se l'orario attuale è dopo mezzanotte, considera un giorno intero
            const adjustedCurrentDate = currentDate.hour < 12 ? currentDate : currentDate.plus({ days: 1 });

            // Calcola la differenza tra le date aggiornate
            const diff = dueDate.diff(adjustedCurrentDate);

            // Estrai giorni e ore mancanti
            const { days, hours } = diff.shiftTo('days', 'hours');

            // Arrotonda il numero di ore verso l'alto
            const roundedHours = Math.ceil(hours);

            // Formatta l'output
            const formattedDays = `${days} D`;
            const formattedHours = `${roundedHours} H`;
            const formattedOutput = [formattedDays, formattedHours];
            return formattedOutput;
        }
    }
};
</script>

<template>
    <div class="task row" :style="{ backgroundColor: task.category.bg_color_hex, color: task.category.text_color_hex }">
        <div class="col-10 d-flex flex-column justify-content-center">
            <div class="title">{{ task.title }}</div>
            <span class="description">{{ task.description }}</span>
        </div>
        <div class="col-2">
            <div class="due-date d-flex flex-column justify-content-center align-items-center">
                <span class="days">
                    {{ formatDueDate(task.due_date)[0] }}
                </span>
                <span class="hours">
                    {{ formatDueDate(task.due_date)[1] }}
                </span>
                <span>left</span>
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

    .title {
        font-weight: 500;
        letter-spacing: -1px;
    }

    .description {
        filter: opacity(0.5);
        font-size: 12px;
        letter-spacing: -0.3px;
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
