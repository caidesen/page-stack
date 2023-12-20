import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";
import Page1 from './page/page-1.vue'
import Page2 from './page/page-2.vue'
import Page3 from './page/page-3.vue'
import Page4 from './page/page-4.vue'
import plugin from "./plugin/index.js";


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '1',
            children: [
                {
                    path: '1',
                    name: '1',
                    component: Page1
                },
                {
                    path: '2',
                    name: '2',
                    component: Page2
                }, {
                    path: '3',
                    name: '3',
                    component: Page3
                }, {
                    path: '4',
                    name: '4',
                    component: Page4
                }
            ]
        }
    ]
})
createApp(App).use(router).use(plugin).mount('#app')
