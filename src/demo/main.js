//Imports
import App from './App.vue';
import Viewer from '../main.js';
import { createApp } from 'vue';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/lib/components';
import * as directives from 'vuetify/lib/directives';
import { aliases, mdi } from 'vuetify/lib/iconsets/mdi';
import 'vuetify/dist/vuetify.css';
import '@mdi/font/css/materialdesignicons.min.css';


const app = createApp(App);
//Vue plugins
app.use(Viewer);
app.use(createVuetify({
    components,
    directives,
    theme: {
        dark: true
    },
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi
        }
    }
}));

app.mount('#app');

//Vue instance
/*
new Vue({
  el: '#app',
  render: h => h(App),
  vuetify: new Vuetify({
    theme: {
      dark: true
    }
  })
});
*/