import { createApp } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import 'normalize.css';
import axios from 'axios';
import VueAxios from 'vue-axios';

import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import './assets/css/main.scss';

library.add(fas);
library.add(fab);
library.add(far);

createApp(App)
  .component('FontAwesomeIcon', FontAwesomeIcon)
  .use(VueAxios, axios)
  .use(router)
  .mount('#app');
