import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import Home from '../components/Home.vue';
import Blog from '../components/Blog.vue';

export default new Router({
    routes: [
        { path: '/', name: 'Home', component: Home },
        { path: '/Blog', name: 'blog', component: Blog },
    ],
    mode: 'history',
})
