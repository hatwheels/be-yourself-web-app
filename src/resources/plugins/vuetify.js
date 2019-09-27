import Vue from 'vue';
import Vuetify from 'vuetify';
import '@mdi/font/css/materialdesignicons.css';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.lightBlue,
        secondary: '#E84FB5',
        accent: colors.green,
        // error: '#f44336',
        // warning: '#ffc107',
        // info: '#03a9f4',
        // success: '#3f51b5',
      }
    },
  },
  icons: {
    iconfont: 'mdi',
  },
});