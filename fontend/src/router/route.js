import { createRouter, createWebHistory } from "vue-router";
import Service from '../view/Service.vue';
import Portfolio from '../view/Portfolio.vue';
import Home from '../view/Home.vue';
import About from '../view/About.vue';
import PortFolioDetails from '../view/PortFolioDetails.vue';
import ContactUs from '../view/ContactUs.vue';
import BlogsVue from "@/view/Blogs.vue";
import BlogVue from "@/view/Blog.vue";

export default createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path:'/',
            name: 'home',
            component: Home,
        },
        {
            path:'/about',
            name:'about',
            component:About
        },
        {
            path:'/service',
            name:'service',
            component:Service
        },
        {
            path:'/portfolio',
            name:'portfolio',
            component:Portfolio
        },
        {
            path:'/portfolio/details/:id',
            name:'portfolio-detail',
            component:PortFolioDetails
        },
        {
            path:'/contact',
            name:'contact',
            component:ContactUs
        },
        {
            path:'/blogs',
            name:'blogs',
            component:BlogsVue
        },
        {
            path:'/blog/:slug',
            name: 'blog-details',
            component:BlogVue,
        }
    ],
    scrollBehavior() {
        document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
    }
})
