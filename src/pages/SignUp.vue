<script>
// IMPORTS
import Button from '../components/utilities/Button.vue';
import ButtonOutline from '../components/utilities/ButtonOutline.vue';

export default {
    props: [],
    components: { Button, ButtonOutline },
    data() {
        return {

        }
    },
    methods: {},
    mounted() { },
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
                    <input type="text" class="input mb-3" placeholder="Username">
                </div>
                <div class="input-group">
                    <i class="fa-solid fa-envelope"></i>
                    <input type="email" class="input mb-3" placeholder="Email">
                </div>
                <div class="input-group">
                    <i class="fa-solid fa-lock"></i>
                    <input type="password" class="input mb-3" placeholder="Password">
                </div>
                <div class="input-group">
                    <i class="fa-solid fa-lock"></i>
                    <input type="password" class="input mb-3" placeholder="Password">
                </div>
                <Button buttonText="Sign Up" buttonClass="text-uppercase mt-4" />
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
    }
}
</style>
