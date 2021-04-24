import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home";
import Places from "@/views/Places";
import Restaurants from "@/views/Restaurants";
import Tourism from "@/views/Tourism";
import Celebrations from "@/views/Celebrations";
import CountyMap from "@/views/Map";
const routes = [
    {
        path: "/",
        alias: "/home",
        name: "home",
        component: Home
    },
    {
        path: "/places",
        name: "places",
        component: Places
    },
    {
        path: "/restaurants",
        name: "restaurants",
        component: Restaurants
    },
    {
        path: "/tourism",
        name: "tourism",
        component: Tourism
    },
    {
        path: "/celebrations",
        name: "celebrations",
        component: Celebrations
    },
    {
        path: "/map",
        name: "map",
        component: CountyMap
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
