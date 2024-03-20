<script>
// IMPORTS
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'


export default {
    props: [],
    components: { Header, Footer, VueDatePicker },
    data() {
        return {
            date: '',
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
        <div class="container d-flex align-items-center justify-content-center px-4 py-4">
            <div class="add-card d-flex flex-column gap-5 p-5">
                <h2>new .tASK</h2>
                <div class="group">
                    <input type="text" class="inputV2">
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Task name</label>
                </div>
                <div class="group">
                    <textarea type="text" class="inputV2"></textarea>
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label class>Description</label>
                </div>
                <div class="row">
                    <div class="custom-group col-6">
                        <div class="custom-label pb-2">Category</div>
                        <select name="category_id" class="w-100">
                            <option :value="category.id" v-for="category in categories">{{ category.name }}</option>
                        </select>
                    </div>
                    <div class="custom-group col-6">
                        <div class="custom-label pb-2">End date</div>
                        <VueDatePicker v-model="date" teleport-center></VueDatePicker>
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
    height: 100vh;
    overflow-y: auto;

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
                color: $our-orange;
                letter-spacing: -0.8px;
            }

            select {
                height: 38px;
            }
        }

    }
}
</style>
