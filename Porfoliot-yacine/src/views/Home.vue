<template>
  <div class="home" >
    <div class="hero">
      <div class="container">
        <div class="hero-content" data-aos="fade-up">
          <h1>Bienvenue sur mon Portfolio</h1>
          <div class="profile-image">
            <img src="/img/profile.jpg" alt="Yacine Dahmoun" />
          </div>
          <p>Développeur Web & Mobile passionné</p>
          <div class="cta-buttons">
            <router-link to="/about" class="btn btn-primary">En savoir plus</router-link>
            <router-link to="/contact" class="btn btn-secondary">Me contacter</router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="quick-info" data-aos="fade-up" data-aos-delay="200">
        <div class="info-card">
          <font-awesome-icon :icon="['fas', 'code']" class="info-icon" />
          <h3>Développement Web</h3>
          <p>Création de sites et applications web modernes avec les dernières technologies</p>
        </div>

        <div class="info-card">
          <font-awesome-icon :icon="['fas', 'tools']" class="info-icon" />
          <h3>Fullstack</h3>
          <p>Maîtrise des technologies front-end et back-end pour des solutions complètes</p>
        </div>

        <div class="info-card">
          <font-awesome-icon :icon="['fas', 'graduation-cap']" class="info-icon" />
          <h3>En Formation</h3>
          <p>Actuellement en formation développement web et mobile (RNCP Niveau 5)</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
.hero {
  background: linear-gradient(135deg, var(--primary-dark), var(--primary-color));
  color: var(--white);
  padding: 80px 0;
  text-align: center;
}

.hero-content h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.hero-content p {
  font-size: 1.2rem;
  margin-bottom: 30px;
}

.profile-image {
  width: 150px;
  height: 150px;
  margin: 0 auto 20px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid var(--white);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
}

.profile-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;
}

.btn-primary {
  background-color: var(--secondary-color);
  color: var(--text-color);
}

.btn-primary:hover {
  background-color: #e0a800;
  transform: translateY(-3px);
}

.btn-secondary {
  background-color: transparent;
  color: var(--white);
  border: 2px solid var(--white);
}

.btn-secondary:hover {
  background-color: var(--white);
  color: var(--primary-color);
  transform: translateY(-3px);
}

.quick-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 40px 0;
}

.info-card {
  background-color: var(--white);
  padding: 30px 20px;
  border-radius: 10px;
  box-shadow: var(--card-shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
}

.info-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--card-hover-shadow);
}

.info-icon {
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 15px;
}

.info-card h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: var(--primary-color);
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2rem;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .btn {
    width: 100%;
    max-width: 200px;
  }
}
</style>
