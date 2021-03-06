/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import 'babel-polyfill';
import Vue from 'vue';
import vuetify from '../plugins/vuetify';
import tinycolor from 'tinycolor2';
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/dist/vuetify.min.css';

Vue.config.productionTip = false;

window.Vue = require('vue');
window.Vuetify = require('vuetify');
window.Tinycolor = require('tinycolor2');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));
Vue.component('app', require('./components/App.vue').default);
Vue.component('sticky-header', require('./components/StickyHeader.vue').default);
Vue.component('my-footer', require('./components/MyFooter.vue').default);
Vue.component('log-in-form', require('./components/LogInForm.vue').default);
Vue.component('sign-up-form', require('./components/SignUpForm.vue').default);
Vue.component('introduction', require('./components/Introduction.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    vuetify,
    el: '#home',
});

Object.defineProperty(Vue.prototype, '$tinycolor', { value: tinycolor });

export default app;
