<script>
// IMPORTS
import Button from '../components/utilities/Button.vue';
import ButtonOutline from '../components/utilities/ButtonOutline.vue';


// /IMPORTS

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
            <div class="login-form text-center d-flex flex-column">
                <h5 class="text-uppercase">Sign Up</h5>
                <input type="text" class="input mb-3" placeholder="Username">
                <input type="email" class="input mb-3" placeholder="Email">
                <input type="password" class="input mb-3" placeholder="Password">
                <input type="password" class="input mb-3" placeholder="Confirm Password">
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
    background-color: $our-blue;
    width: 100vw;
    height: 100vh;

    .container {
        color: $our-white;


        .top-part {

            h1 {
                margin-bottom: -30px;
                font-size: 20px;
            }

            .giant-font {
                font-size: 90px;
                font-weight: 600;
                color: $our-orange;
            }

            .slogan {
                font-size: 12px;
                letter-spacing: 2px;
                color: $our-light-grey;

            }


        }

        .login-form {
            h5 {
                letter-spacing: 2px;
                font-size: 14px;
            }
        }
    }
}
</style>
