import { createRouter, createWebHistory } from "vue-router";
import Login from "./pages/Login.vue";
import SignUp from "./pages/SignUp.vue";
import Home from "./pages/Home.vue";
import AddTask from "./pages/AddTask.vue";
import ShowTask from "./pages/ShowTask.vue";
import axios from 'axios';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "login",
      component: Login,
    },
    {
      path: '/sing-up',
      name: 'sign-up',
      component: SignUp,
    },
    {
      path: "/home",
      name: "home",
      component: Home,
      meta: { requiresAuth: true } // Specifica che questa rotta richiede autenticazione
    },
    {
      path: "/add-task",
      name: "add-task",
      component: AddTask,
      meta: { requiresAuth: true } // Specifica che questa rotta richiede autenticazione
    },
    {
      path: "/show-task",
      name: "show-task",
      component: ShowTask,
      meta: { requiresAuth: true } // Specifica che questa rotta richiede autenticazione
    }
  ],
});

// Guarda di navigazione per autenticare l'utente e permettere l'accesso ad alcune rotte
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    checkAuthentication()
      .then(isAuthenticated => {
        if (isAuthenticated) {
          next();
        } else {
          next({ name: 'login' });
        }
      })
      .catch(error => {
        console.error('Errore durante la verifica dell\'autenticazione:', error);
        next({ name: 'login' });
      });
  } else {
    next();
  }
});

// Funzione per verificare l'autenticazione dell'utente
function checkAuthentication() {
  return axios.get('/api/user')
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error('Errore durante la verifica dell\'autenticazione:', error);
      return false;
    });
}

export { router };