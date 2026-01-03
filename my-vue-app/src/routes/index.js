import { createRouter, createWebHashHistory } from "vue-router";

import Catalog_Page from "../pages/Catalog_Page.vue";
import Cart_Page from "../pages/Cart_Page.vue";

const routes = [
    {path: '/',  component:  Catalog_Page},
    {path: "/cart", component: Cart_Page},
]

const  router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router