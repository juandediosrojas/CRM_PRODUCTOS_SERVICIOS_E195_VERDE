import { onAuthStateChanged } from "firebase/auth";
import { AgGridVue } from "ag-grid-vue3";
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { auth } from "./firebase.js";
import fontawesome from "./plugins/fontawesome";

import App from './App.vue'
import router from './router'

let app;
let pinia;
 

onAuthStateChanged(auth, (user) => {
    if (!app) {
        app = createApp(App);
        pinia = createPinia();
    
        fontawesome(app);
        app.use(pinia);
        app.use(router);

        app.mount('#app');
    
}});
