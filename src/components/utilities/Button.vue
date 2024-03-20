<script>
export default {
    name: "ButtonToLink",
    props: {
        buttonRedirect: {
            default: "",
        },
        buttonText: {
            type: String,
            default: "Click me",
        },
        buttonClass: {
            type: String,
        },
        buttonIcon: {
            type: String,
            default: '',
        },
        taskId: {
            type: String,
            default: null,
        },
    },
    methods: {
    }
};
</script>

<template>
    <router-link class="button default" :class="buttonClass"
        :to="{ name: buttonRedirect, params: { id: this.taskId } }">
        <i v-if="buttonIcon" class="icon"> {{ buttonIcon }}</i>
        <span class="p-0 m-0">{{ buttonText }}</span>

    </router-link>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as *;


.button {
    padding: 10px 24px;
    border: none;
    height: fit-content;
    border-radius: 10px;
    text-decoration: none;
    color: $our-white;
    font-size: 14px;
    font-weight: 600;
    transition: all 0.2s ease-in;
}

.default {
    background-color: $our-orange;

    &:hover {
        transition: background-color 0.2s ease-in-out;
        background-color: $our-orange-hover;
    }
}

.outline {
    border: 1px solid $our-orange;
    background-color: #00000000;

    &:hover {
        transition: all 0.2s ease-in-out;
        background-color: $our-orange-hover;
        border: 1px solid $our-orange-hover;
        color: $our-white;
    }
}

.black {
    background-color: #222222;
    color: #fff;

    &:hover {
        transition: background-color 0.2s ease-in-out;
        background-color: #1b1b1b;
    }
}

.black-outline {
    border: 1px solid #222222;
    background-color: #00000000;

    &:hover {
        transition: all 0.2s ease-in-out;
        background-color: #00000006;
        border: 1px solid $our-orange-hover;
    }
}
</style>
