import { createRouter, createWebHistory } from "vue-router";
import Login from "./pages/Login.vue";
import SignUp from "./pages/SignUp.vue";
import Home from "./pages/Home.vue";
import AddTask from "./pages/AddTask.vue";
import ShowTask from "./pages/ShowTask.vue";
import EditTask from "./pages/EditTask.vue";
import Categories from "./pages/Categories.vue";
import AddCategory from "./pages/AddCategory.vue";
import axios from 'axios';
import { store } from "./store";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "login",
      component: Login,
    },
    {
      path: '/sign-up',
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
      path: "/show-task/:id",
      name: "show-task",
      props: true,
      component: ShowTask,
      meta: { requiresAuth: true } // Specifica che questa rotta richiede autenticazione
    },
    {
      path: "/edit-task/:id",
      name: "edit-task",
      props: true,
      component: EditTask,
      meta: { requiresAuth: true } // Specifica che questa rotta richiede autenticazione
    },
    {
      path: "/categories",
      name: "categories",
      component: Categories,
      meta: { requiresAuth: true } // Specifica che questa rotta richiede autenticazione
    },
    {
      path: "/add-category",
      name: "add-category",
      component: AddCategory,
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
          next(); // Se l'utente è autenticato, prosegui con la navigazione
        } else {
          next({ name: 'login' }); // Se non è autenticato, reindirizza alla pagina di login
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
  const accessToken = store.accessToken; // Ottieni il token di accesso dallo store

  // Se il token di accesso non è presente, l'utente non è autenticato
  if (!accessToken) {
    return Promise.resolve(false);
  }

  // Esegui la chiamata axios per verificare l'autenticazione
  return axios.get(store.serverAPI + store.userAuthURI, {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  })
    .then(response => {
      store.userInfo = response.data;
      return response.data;
    })
    .catch(error => {
      console.error('Errore durante la verifica dell\'autenticazione:', error);
      return false;
    });
}


export { router };