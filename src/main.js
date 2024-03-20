import { createApp } from 'vue'
import '../src/assets/scss/style.scss'
import App from './App.vue'
import '@mdi/font/css/materialdesignicons.css';

import { router } from './router';
import "bootstrap";

// Vuetify
import 'vuetify/styles';
import 'vuetify/dist/vuetify.min.css';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
    components,
    directives,
});


createApp(App).use(router).use(vuetify).mount('#app');
