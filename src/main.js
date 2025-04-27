import './scss/main.scss';

import { createApp } from 'vue';
import App from './App.vue';
import Lenis from 'lenis';

createApp(App).mount('#app');

// Initialize Lenis
const lenis = new Lenis({
	autoRaf: true
});
