import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const dataUri = document.querySelector('input[data-uri]');
const app = createApp(App)
app.provide('$baseUri', dataUri ? dataUri.getAttribute('data-uri') : "")
app.mount('#app')
