import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

// Importation des composants FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone, faCheck, faGraduationCap, faCode, faTools, faBriefcase } from '@fortawesome/free-solid-svg-icons'

// Importation des vues
import Home from './views/Home.vue'
import About from './views/About.vue'
import Skills from './views/Skills.vue'
import Projects from './views/Projects.vue'
import Experience from './views/Experience.vue'
import Education from './views/Education.vue'
import Contact from './views/Contact.vue'

// Importation des animations
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()


// Configuration de FontAwesome
library.add(
  faLinkedin,
  faGithub,
  faEnvelope,
  faPhone,
  faCheck,
  faGraduationCap,
  faCode,
  faTools,
  faBriefcase
)

// Configuration du router
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/skills', component: Skills },
  { path: '/projects', component: Projects },
  { path: '/experience', component: Experience },
  { path: '/education', component: Education },
  { path: '/contact', component: Contact },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition
  } else if (to.hash) {
    return {
      el: to.hash,
      behavior: 'smooth'
    }
  } else {
    return { top: 0, behavior: 'smooth' }
  }
}

})

// Création de l'application
const app = createApp(App)

// Initialisation des animations
AOS.init({
  duration: 1000,
  once: true,
  mirror: false
})

// Utilisation des plugins
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)

// Montage de l'application
app.mount('#app')
