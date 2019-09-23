import Vue from 'vue';
import Vuetify from 'vuetify';
import '@mdi/font/css/materialdesignicons.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#8bc34a',
        secondary: '#cddc39',
        accent: '#4caf50',
        error: '#f44336',
        warning: '#ffc107',
        info: '#03a9f4',
        success: '#3f51b5',
      }
    },
  },
  icons: {
    iconfont: 'mdi',
  },
});