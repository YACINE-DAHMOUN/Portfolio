<template>
  <div class="home">
    <!-- Section Hero avec effet parallax -->
    <div class="hero">
      <div class="hero-bg"></div>
      <div class="container">
        <div class="hero-content" data-aos="fade-up">
          <div class="profile-section">
            <div class="profile-image">
              <img src="/img/profile.jpg" alt="Yacine Dahmoun" />
              <div class="profile-ring"></div>
            </div>
            <div class="profile-info">
              <h1>
                <span class="greeting">Salut, je suis</span>
                <span class="name">Yacine Dahmoun</span>
              </h1>
              <p class="tagline">
                <span class="typed-text">Développeur Web & Mobile passionné</span>
                <span class="cursor">|</span>
              </p>
            </div>
          </div>

          <div class="cta-buttons">
            <router-link to="/about" class="btn btn-primary">
              <span>Découvrir mon parcours</span>
              <span class="icon-arrow">→</span>
            </router-link>
            <router-link to="/contact" class="btn btn-secondary">
              <span>Collaborons ensemble</span>
              <span class="icon-plane">✈</span>
            </router-link>
          </div>

          <!-- Stats rapides -->
          <div class="hero-stats" data-aos="fade-up" data-aos-delay="400">
            <div class="stat-item">
              <span class="stat-number">1+</span>
              <span class="stat-label">Années d'expérience</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">5+</span>
              <span class="stat-label">Projets réalisés</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">5+</span>
              <span class="stat-label">Technologies maîtrisées</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Section Services/Compétences avec carousel -->
    <section class="services-section">
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <h2>Ce que je fais</h2>
          <p>Des solutions numériques complètes adaptées à vos besoins</p>
        </div>

        <div class="skills-carousel" data-aos="fade-up" data-aos-delay="200">
          <div class="carousel-container" ref="carouselContainer">
            <div class="carousel-track" :style="{ transform: `translateX(-${currentSlide * slideWidth}px)` }">
              <div class="skill-card" v-for="(skill, index) in skills" :key="index">
                <div class="skill-icon">
                  <font-awesome-icon :icon="skill.icon" />
                </div>
                <h3>{{ skill.title }}</h3>
                <p>{{ skill.description }}</p>
                <div class="skill-tags">
                  <span v-for="tag in skill.tags" :key="tag" class="tag">{{ tag }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Navigation du carousel -->
          <div class="carousel-nav">
            <button @click="prevSlide" class="nav-btn prev" :disabled="currentSlide === 0">
              <span>‹</span>
            </button>
            <button @click="nextSlide" class="nav-btn next" :disabled="currentSlide >= maxSlide">
              <span>›</span>
            </button>
          </div>

          <!-- Indicateurs -->
          <div class="carousel-indicators">
            <button
              v-for="(_, index) in Math.ceil(skills.length / visibleSlides)"
              :key="index"
              @click="goToSlide(index)"
              :class="['indicator', { active: Math.floor(currentSlide / visibleSlides) === index }]"
            ></button>
          </div>
        </div>

        <!-- Section Technologies -->
        <div class="tech-stack" data-aos="fade-up" data-aos-delay="400">
          <h3>Technologies que j'utilise</h3>
          <div class="tech-grid">
            <div v-for="tech in technologies" :key="tech.name" class="tech-item" :title="tech.name">
              <img :src="tech.logo" :alt="tech.name" />
              <span>{{ tech.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section CTA finale -->
    <section class="final-cta">
      <div class="container">
        <div class="cta-content" data-aos="zoom-in">
          <h2>Prêt à donner vie à votre projet ?</h2>
          <p>Discutons de votre prochaine idée et créons quelque chose d'extraordinaire ensemble</p>
          <router-link to="/contact" class="btn btn-cta">
            <span>Commençons maintenant</span>
            <span class="icon-rocket">🚀</span>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      currentSlide: 0,
      slideWidth: 320,
      visibleSlides: 3,
      skills: [
  {
    icon: 'code',
    title: 'Développement Frontend',
    description: 'Création d\'interfaces utilisateur modernes et responsive avec Angular, Vue.js et les technologies web standards.',
    tags: ['Angular', 'Vue.js', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript']
  },
  {
    icon: 'server',
    title: 'Développement Backend',
    description: 'Conception d\'APIs robustes et d\'applications web avec Symfony et PHP, suivant les meilleures pratiques.',
    tags: ['Symfony', 'PHP', 'API REST', 'Architecture MVC']
  },


  {
    icon: 'tools',
    title: 'Intégration Full-Stack',
    description: 'Intégration complète entre frontend et backend, de la base de données à l\'interface utilisateur.',
    tags: ['Full-Stack', 'API Integration', 'Database Design', 'Security']
  },
  {
    icon: 'code-branch',
    title: 'Développement & Maintenance',
    description: 'Versionning, tests, débogage et maintenance continue pour assurer la qualité du code.',
    tags: ['Git', 'Testing', 'Debugging', 'Code Review']
  }
],
      technologies: [
  {
    name: 'Symfony',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg'
  },
  {
    name: 'PHP',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg'
  },
  {
    name: 'Angular',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg'
  },
  {
    name: 'Vue.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg'
  },
  {
    name: 'HTML5',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
  },
  {
    name: 'CSS3',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
  },
  {
    name: 'JavaScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
  },
  {
    name: 'TypeScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
  }
]
    }
  },
  computed: {
    maxSlide() {
      return Math.max(0, this.skills.length - this.visibleSlides);
    }
  },
  mounted() {
    this.updateCarouselSettings();
    window.addEventListener('resize', this.updateCarouselSettings);
    this.startAutoSlide();
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateCarouselSettings);
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  },
  methods: {
    updateCarouselSettings() {
      const width = window.innerWidth;
      if (width < 768) {
        this.visibleSlides = 1;
        this.slideWidth = 280;
      } else if (width < 1024) {
        this.visibleSlides = 2;
        this.slideWidth = 300;
      } else {
        this.visibleSlides = 3;
        this.slideWidth = 320;
      }
    },
    nextSlide() {
      if (this.currentSlide < this.maxSlide) {
        this.currentSlide++;
      } else {
        this.currentSlide = 0; // Retour au début
      }
    },
    prevSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--;
      } else {
        this.currentSlide = this.maxSlide; // Aller à la fin
      }
    },
    goToSlide(index) {
      this.currentSlide = index * this.visibleSlides;
    },
    startAutoSlide() {
      this.autoSlideInterval = setInterval(() => {
        this.nextSlide();
      }, 5000);
    }
  }
}
</script>

<style scoped>
/* Variables CSS personnalisées */
:root {
  --primary-color: #667eea;
  --primary-dark: #4c63d2;
  --secondary-color: #f093fb;
  --white: #ffffff;
  --text-color: #2d3748;
  --card-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  --card-hover-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --gradient-secondary: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  --gradient-accent: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  --shadow-soft: 0 10px 40px rgba(0, 0, 0, 0.1);
  --shadow-hover: 0 20px 60px rgba(0, 0, 0, 0.15);
  --border-radius: 20px;
  --transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.home {
  overflow-x: hidden;
}

/* Section Hero améliorée */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: var(--gradient-primary);
  color: #4a2d2d;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><radialGradient id="grad1" cx="50%" cy="50%" r="50%"><stop offset="0%" style="stop-color:rgba(255,255,255,0.1);stop-opacity:1" /><stop offset="100%" style="stop-color:rgba(255,255,255,0);stop-opacity:1" /></radialGradient></defs><circle cx="200" cy="300" r="150" fill="url(%23grad1)"/><circle cx="800" cy="700" r="200" fill="url(%23grad1)"/><circle cx="600" cy="200" r="100" fill="url(%23grad1)"/></svg>') no-repeat center center;
  background-size: cover;
  opacity: 0.3;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.profile-section {
  margin-bottom: 40px;
}

.profile-image {
  position: relative;
  width: 200px;
  height: 200px;
  margin: 0 auto 30px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: var(--shadow-soft);
  transition: var(--transition);
}

.profile-image::before {
  content: '';
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  background: var(--gradient-accent);
  border-radius: 50%;
  z-index: -1;
  animation: rotate 10s linear infinite;
}

.profile-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--transition);
}

.profile-image:hover {
  transform: scale(1.05);
}

.profile-image:hover img {
  transform: scale(1.1);
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.profile-info h1 {
  font-size: clamp(2rem, 5vw, 3.5rem);
  margin-bottom: 20px;
  line-height: 1.2;
}

.greeting {
  display: block;
  font-size: 0.6em;
  font-weight: 300;
  opacity: 0.9;
  margin-bottom: 10px;
}

.name {
  display: block;
  font-weight: 700;
  background: linear-gradient(45deg, #3537b9, #8299b5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.tagline {
  font-size: 1.3rem;
  margin-bottom: 40px;
  opacity: 0.9;
}

.cursor {
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 60px;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 30px;
  border-radius: var(--border-radius);
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: var(--transition);
  position: relative;
  overflow: hidden;
}

.btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: var(--transition);
}

.btn:hover::before {
  left: 100%;
}

.btn-primary {
  background: var(--gradient-secondary);
  color: #4a2d2d;
  box-shadow: var(--shadow-soft);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-hover);
}

.btn-secondary {
  background: transparent;
  color: rgb(68, 35, 35);
  border: 2px solid rgba(255,255,255,0.3);
  backdrop-filter: blur(10px);
}

.btn-secondary:hover {
  background: rgba(255,255,255,0.1);
  border-color: #4a2d2d;
  transform: translateY(-3px);
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
}

.stat-item {
  text-align: center;
  padding: 20px;
  backdrop-filter: blur(10px);
  background: rgba(255,255,255,0.1);
  border-radius: var(--border-radius);
  border: 1px solid rgba(255,255,255,0.2);
}

.stat-number {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  color: #4a2d2d;
  margin-bottom: 5px;
}

.stat-label {
  font-size: 0.9rem;
  opacity: 0.8;
}

/* Section Services avec carousel */
.services-section {
  padding: 100px 0;
  background: linear-gradient(180deg, #f8fafc 0%, #fff 100%);
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-header h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 15px;
}

.section-header p {
  font-size: 1.2rem;
  color: #4a2d2d;
  max-width: 600px;
  margin: 0 auto;
}

.skills-carousel {
  position: relative;
  margin-bottom: 80px;
}

.carousel-container {
  overflow: hidden;
  margin: 0 60px;
}

.carousel-track {
  display: flex;
  gap: 20px;
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.skill-card {
  flex: 0 0 300px;
  background: #4d61c9;
  padding: 40px 30px;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-soft);
  text-align: center;
  transition: var(--transition);
  border: 1px solid #53575e;
}

.skill-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-hover);
}

.skill-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 25px;
  background: var(--gradient-accent);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: rgb(248, 248, 248);
}

.skill-card h3 {
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 15px;
}

.skill-card p {
  color: #ededef;
  line-height: 1.6;
  margin-bottom: 20px;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
}

.tag {
  background: #f1f5f9;
  color: #475569;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

.carousel-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
  pointer-events: none;
}

.nav-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: white;
  border: none;
  box-shadow: var(--shadow-soft);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--transition);
  pointer-events: all;
  color: var(--primary-color);
  font-size: 1.2rem;
}

.nav-btn:hover:not(:disabled) {
  background: var(--primary-color);
  color: white;
  transform: scale(1.1);
}

.icon-arrow, .icon-plane, .icon-rocket {
  font-size: 1.2rem;
  transition: var(--transition);
}

.btn:hover .icon-arrow {
  transform: translateX(5px);
}

.btn:hover .icon-plane {
  transform: translateX(5px) translateY(-2px);
}

.btn:hover .icon-rocket {
  transform: translateY(-3px);
}

.nav-btn span {
  font-size: 1.5rem;
  font-weight: bold;
}

.carousel-indicators {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 30px;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: #cbd5e1;
  cursor: pointer;
  transition: var(--transition);
}

.indicator.active {
  background: var(--primary-color);
  transform: scale(1.2);
}

.icon-arrow, .icon-plane, .icon-rocket {
  font-size: 1.2rem;
  transition: var(--transition);
}

.btn:hover .icon-arrow {
  transform: translateX(5px);
}

.btn:hover .icon-plane {
  transform: translateX(5px) translateY(-2px);
}

.btn:hover .icon-rocket {
  transform: translateY(-3px);
}

.nav-btn span {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

/* Section Technologies */
.tech-stack {
  text-align: center;
}

.tech-stack h3 {
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 40px;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 30px;
  max-width: 800px;
  margin: 0 auto;
}

.tech-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 25px 15px;
  background: white;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-soft);
  transition: var(--transition);
  border: 1px solid #e2e8f0;
}

.tech-item:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-hover);
}

.tech-item img {
  width: 50px;
  height: 50px;
  object-fit: contain;
}

.tech-item span {
  font-weight: 500;
  color: var(--primary-color);
}

/* Section CTA finale */
.final-cta {
  padding: 100px 0;
  background: var(--gradient-primary);
  color: rgb(79, 23, 23);
  text-align: center;
}

.cta-content h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 20px;
}

.cta-content p {
  font-size: 1.3rem;
  opacity: 0.9;
  margin-bottom: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.btn-cta {
  background: var(--gradient-secondary);
  color: rgb(26, 16, 16);
  font-size: 1.2rem;
  padding: 18px 35px;
  box-shadow: var(--shadow-soft);
}

.btn-cta:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: var(--shadow-hover);
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero {
    padding: 40px 0;
    min-height: 80vh;
  }

  .profile-image {
    width: 150px;
    height: 150px;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }

  .btn {
    width: 100%;
    max-width: 280px;
  }

  .hero-stats {
    gap: 20px;
  }

  .stat-item {
    padding: 15px;
    min-width: 100px;
  }

  .carousel-container {
    margin: 0 20px;
  }

  .skill-card {
    flex: 0 0 280px;
    padding: 30px 20px;
  }

  .nav-btn {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }

  .section-header h2 {
    font-size: 2rem;
  }

  .cta-content h2 {
    font-size: 2rem;
  }

  .tech-grid {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 20px;
  }
}

@media (max-width: 480px) {
  .services-section,
  .final-cta {
    padding: 60px 0;
  }

  .skill-card {
    flex: 0 0 260px;
  }

  .carousel-nav {
    display: none;
  }
}
</style>
