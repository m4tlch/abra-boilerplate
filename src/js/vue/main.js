import Vue from 'vue';
import router from '../vue/router';

import Content from '../vue/components/Content.vue'


new Vue({
    el: '#content',
    components: {
        'app-content': Content
    },
    router
});

