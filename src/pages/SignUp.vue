<script>
// IMPORTS
import Button from '../components/utilities/Button.vue';
import ButtonOutline from '../components/utilities/ButtonOutline.vue';
import axios from 'axios';
import { store } from '../store';

export default {
    props: [],
    components: { Button, ButtonOutline },
    data() {
        return {
            store,
            username: '',
            email: '',
            password: '',
            errorMessage: ''
        }
    },
    methods: {
        registerUser() {
            // Controllo se tutti i campi sono compilati
            if (!this.username || !this.email || !this.password) {
                this.errorMessage = "Please fill in all fields.";
                return; // Interrompi l'esecuzione del metodo se un campo non è compilato
            }

            axios.post(this.store.serverAPI + this.store.signupURI, {
                name: this.username,
                email: this.email,
                password: this.password
            })
                .then(response => {
                    this.store.accessToken = response.data.token;
                    this.$router.push('/home');
                })
                .catch(error => {
                    console.error(error);
                    // Gestione degli errori
                    if (error.response && error.response.status === 401 && error.response.data.message) {
                        this.errorMessage = "Email is already in use. Please use a different email.";
                    } else {
                        this.errorMessage = "An error occurred. Please try again later.";
                    }
                });
        },
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    },
    mounted() {
        this.scrollToTop();
    },
}
</script>

<template>
    <div class="wrapper d-flex align-items-center">
        <div class="container d-flex flex-column align-items-center justify-content-center">
            <div class="top-part text-center pb-4">
                <h1>Welcome to</h1>
                <div class="giant-font">.tASK</div>
                <h5 class="slogan text-uppercase">Unveil Your Productivity Secrets</h5>
            </div>
            <div class="sign-up-form text-center d-flex flex-column">
                <div class="input-group">
                    <i class="fa-solid fa-user"></i>
                    <input type="text" class="input mb-3" placeholder="Username *" v-model="username">
                </div>
                <div class="input-group">
                    <i class="fa-solid fa-envelope"></i>
                    <input type="email" class="input mb-3" placeholder="Email *" v-model="email">
                </div>
                <div class="input-group">
                    <i class="fa-solid fa-lock"></i>
                    <input type="password" class="input mb-3" placeholder="Password *" v-model="password">
                </div>
                <!-- Aggiunta del messaggio di errore -->
                <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
                <Button buttonText="Sign Up" buttonClass="text-uppercase mt-4" @click="registerUser" />
            </div>
            <div class="bottom-part mt-5 d-flex flex-column align-items-center">
                <div class="mb-3">Already have an account?</div>
                <ButtonOutline buttonText="Log in" buttonClass="text-uppercase" buttonRedirect="login" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
// USES
@use '../assets/scss/partials/variables' as *;

.wrapper {
    background-color: $our-white;
    width: 100vw;
    height: 100vh;

    .container {
        color: $our-black;


        .top-part {

            h1 {
                margin-bottom: -30px;
                font-size: 20px;
            }

            .giant-font {
                font-size: 90px;
                font-weight: 700;
                letter-spacing: -3px;
                color: $our-orange;
            }

            .slogan {
                font-size: 12px;
                letter-spacing: 2px;
                color: $our-light-grey;

            }


        }

        .sign-up-form {

            .input-group {

                position: relative;

                i {
                    position: absolute;
                    bottom: 52%;
                    font-size: 12px;
                    left: 10px;
                    filter: opacity(0.6);
                }

            }
        }

        .error-message {
            color: red;
            margin-top: 10px;
            font-size: 12px;
        }
    }
}
</style>
