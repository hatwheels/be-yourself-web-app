import Vue from 'vue'
import Vuetify from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#FFF4FF',
        secondary: '#E84FB5',
        accent: '#FFE5FD',
        info: '#756f75',
        // error: '#f44336',
        // warning: '#ffc107',
        // success: '#3f51b5',
      }
    },
  },
  icons: {
    iconfont: 'mdi',
  },
});