import { reactive } from 'vue'

export const store = reactive({

    serverAPI: 'http://127.0.0.1:8000/api',
    loginURI: '/auth/login',
    signupURI: '/auth/register',
    tasksURI: '/tasks',
    userAuthURI: '/user',
    categoriesURI: '/categories',
    accessToken: '',
    userInfo: null,

});

// redi.hoxha1996@gmail.com