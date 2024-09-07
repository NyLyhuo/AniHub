import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import './assets/style.css'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronLeft, faChevronRight, faFilm, faHome, faMoon, faPaw, faSearch, faSun, faTv, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import Home from './Views/Home.vue'

library.add(faFilm, faSearch, faTv, faHome, faPaw, faMoon, faSun, faChevronLeft, faChevronRight)

const routes = [
    {path: '/', component: Home},
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})


const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')
