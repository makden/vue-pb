import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import Store from './store';

const app = createApp(App);
app.use(Store);
app.mount('#app');
