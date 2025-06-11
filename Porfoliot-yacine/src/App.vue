<template>
  <header class="portfolio-header">
    <div class="container">
      <h1 data-aos="fade-down">Yacine DAHMOUN </h1>
      <p data-aos="fade-up">Développeur Web Fullstack Junior</p>
      <nav data-aos="fade-in" data-aos-delay="300">
        <ul>
          <li v-for="item in menuItems" :key="item.path">
            <router-link :to="item.path">{{ item.name }} </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>

  <main>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>

  <footer>
    <p>© {{ currentYear }} Yacine Dahmoun - Tous droits réservés.</p>
  </footer>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      menuItems: [
        { path: '/', name: 'Accueil' },
        { path: '/about', name: 'À propos' },
        { path: '/skills', name: 'Compétences' },
        { path: '/projects', name: 'Projets' },
        { path: '/experience', name: 'Expériences' },
        { path: '/education', name: 'Études' },
        { path: '/contact', name: 'Contact' }
      ],
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

<style>
/* Variables CSS */
:root {
  --primary-color: #1a2838;
  --primary-dark: #0036b3f1;
  --secondary-color: #FFC107;
  --text-color: #333333;
  --bg-color: #F4F4F4;
  --white: #FFFFFF;
  --section-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  --card-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  --card-hover-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}


/* Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  line-height: 1.6;
  color: var(--text-color);
  background: var(--bg-color);
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Header */
.portfolio-header {
  background: linear-gradient(to right, var(--primary-color), var(--primary-dark));
  color: var(--white);
  text-align: center;
  padding: 30px 0;
}

.portfolio-header h1 {
  font-size: 2.8rem;
  margin-bottom: 10px;
}

.portfolio-header p {
  font-size: 1.3rem;
}

.portfolio-header nav ul {
  list-style: none;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
}

.portfolio-header nav ul li a {
  text-decoration: none;
  color: var(--white);
  font-weight: bold;
  font-size: 1rem;
  transition: color 0.3s ease;
  padding: 5px 10px;
}

.portfolio-header nav ul li a:hover,
.portfolio-header nav ul li a.router-link-active {
  color: var(--secondary-color);
}

/* Sections communs */
.section {
  padding: 60px 20px;
  text-align: center;
  background: var(--white);
  margin: 20px 0;
  box-shadow: var(--section-shadow);
  border-radius: 10px;
}

.section h2 {
  font-size: 2rem;
  color: var(--primary-color);
  margin-bottom: 20px;
  position: relative;
}

.section h2::after {
  content: "";
  display: block;
  width: 60px;
  height: 3px;
  background: var(--secondary-color);
  margin: 10px auto 0;
  border-radius: 5px;
}

/* Footer */
footer {
  background: #333;
  color: var(--white);
  text-align: center;
  padding: 10px 0;
  font-size: 0.9rem;
}

/* Animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .portfolio-header h1 {
    font-size: 2rem;
  }

  .portfolio-header p {
    font-size: 1rem;
  }
}
</style>
