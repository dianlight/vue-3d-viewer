//Imports
import App from './App.vue';
import Viewer from '../main.js';
import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import Sidebar from 'primevue/sidebar';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';


const app = createApp(App);
//Vue plugins
app.use(Viewer);
app.use(PrimeVue);
app.component(Sidebar);

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