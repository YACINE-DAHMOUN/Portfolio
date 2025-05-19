<template>
  <div class="section about-section">
    <div class="container">
      <h2 data-aos="fade-down">À propos de moi</h2>

      <div class="about-content" data-aos="fade-up">
        <div class="about-image">
          <img src="/img/profile.jpg" alt="Yacine Dahmoun" />
        </div>

        <div class="about-description">
          <p>
            En formation développement web et web mobile au titre RNCP 5 à DonkeySchool, je suis à la
            recherche d'un stage de 2 à 6 mois pour mettre en pratique mes compétences en front-end et back-end.
          </p>
          <p>
            Mon parcours professionnel varié m'a permis de développer une grande adaptabilité et un sens aigu de la
            résolution de problèmes. J'ai notamment travaillé comme technicien réseau informatique et chef d'équipe
            installateur en Algérie, avant de devenir auto-entrepreneur en rénovation intérieure en France.
          </p>
          <p>
            Créatif, rigoureux et organisé, je suis prêt à relever des défis au sein d'une équipe dynamique.
            Ma double compétence technique et managériale me permet d'aborder les projets avec une vision globale
            et de m'adapter rapidement à différents environnements de travail.
          </p>
        </div>
      </div>

      <div class="personal-info" data-aos="fade-up" data-aos-delay="200">
        <div class="info-item">
          <h3>Passions</h3>
          <p>Nouvelles technologies, développement web, résolution de problèmes</p>
        </div>

        <div class="info-item">
          <h3>Objectifs</h3>
          <p>Devenir développeur fullstack spécialisé dans les applications web modernes et performantes</p>
        </div>

        <div class="info-item">
          <h3>Langues</h3>
          <p>Français (natif), Arabe (natif), Anglais (intermédiaire)</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutView'
}
</script>

<style scoped>
.about-section {
  background-color: var(--white);
}

.about-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin-bottom: 40px;
}

.about-image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid var(--primary-color);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.about-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.about-description {
  max-width: 800px;
  text-align: left;
}

.about-description p {
  margin-bottom: 15px;
  font-size: 1.1rem;
  line-height: 1.7;
}

.personal-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 40px;
}

.info-item {
  background-color: var(--bg-color);
  padding: 20px;
  border-radius: 10px;
  box-shadow: var(--card-shadow);
  transition: transform 0.3s ease;
}

.info-item:hover {
  transform: translateY(-5px);
}

.info-item h3 {
  color: var(--primary-color);
  margin-bottom: 10px;
  font-size: 1.3rem;
}

@media (min-width: 768px) {
  .about-content {
    flex-direction: row;
    justify-content: center;
    text-align: left;
  }

  .about-image {
    margin-right: 30px;
  }
}
</style>
