<template>
  <div class="section projects-section">
    <div class="container">
      <h2 data-aos="fade-down">Projets</h2>

      <div class="projects-container">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="project-card"
          data-aos="fade-up"
          :data-aos-delay="200 + (index * 100)"
        >
          <div class="project-content">
            <h3>{{ project.title }}</h3>
            <p class="project-description">{{ project.description }}</p>

            <div class="project-tech">
              <span v-for="(tech, techIndex) in project.technologies" :key="techIndex" class="tech-tag">
                {{ tech }}
              </span>
            </div>

            <div class="project-links" v-if="project.links && project.links.length > 0">
              <a
                v-for="(link, linkIndex) in project.links"
                :key="linkIndex"
                :href="link.url"
                target="_blank"
                class="project-link"
              >
                {{ link.text }}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="more-projects" data-aos="fade-up" data-aos-delay="600">
        <h3>Autres projets en cours</h3>
        <p>
          Je travaille constamment sur de nouveaux projets pour améliorer mes compétences.
          N'hésitez pas à consulter mon profil GitHub pour découvrir mes dernières réalisations.
        </p>
        <a href="https://github.com/YACINE-DAHMOUN" target="_blank" class="github-link">
          <font-awesome-icon :icon="['fab', 'github']" /> Voir mon GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectsView',
  data() {
    return {
      projects: [
        {
          title: 'Minnie Tamagotchi',
          description: 'Application web événementielle permettant aux utilisateurs de créer, partager et rejoindre des événements locaux. Implémentation d\'un système de gestion utilisateur, de création d\'événements et d\'un tableau de bord administrateur.',
          technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
          links: [
            { text: 'GitHub', url: 'https://github.com/YACINE-DAHMOUN/Minnie-Tamagotchi' },
            { text: 'Live Demo', url: 'https://minnie-luna.netlify.app' }
          ]
        },
          {
          title: 'HomeCook',
          description: 'Application web d\'aide de cuisine a domicile permettant auc utilisateurs de trouver des recettes et planifié leurs repas en fonction des ingrédients présents dans leur cuisine. Intégration d\'un système de recherche avancée, de gestion des recettes et d\'un calendrier de repas.',
          technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
          links: [
            { text: 'GitHub', url: 'https://github.com/YACINE-DAHMOUN/HomeCookApp' }
          ]
        },
        {
          title: 'Cycleschailley.fr',
          description: 'Site vitrine pour un magasin de cycles, conçu avec WordPress et personnalisé selon les besoins du client. Implémentation d\'un catalogue de produits, d\'un système de prise de rendez-vous et d\'une interface administrateur simplifiée.',
          technologies: ['WordPress', 'PHP', 'CSS', 'JavaScript'],
          links: [
            { text: 'Site Web', url: 'https://cycleschailley.fr/' },
          ]
        },
        {
          title: 'Portfolio Vue.js',
          description: 'Ce portfolio créé avec Vue.js et Vite, présentant mes compétences, projets et expériences professionnelles dans une interface moderne et réactive.',
          technologies: ['Vue.js', 'JavaScript', 'HTML', 'CSS', 'Vite'],
          links: [
            { text: 'GitHub', url: 'https://github.com/YACINE-DAHMOUN/Portfolio' }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.projects-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 25px;
  margin: 40px 0;
}

.project-card {
  background: var(--white);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: var(--card-shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--card-hover-shadow);
}

.project-content {
  padding: 25px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.project-card h3 {
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-bottom: 15px;
}

.project-description {
  color: var(--text-color);
  margin-bottom: 20px;
  flex-grow: 1;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.tech-tag {
  background-color: rgba(74, 144, 226, 0.1);
  color: var(--primary-color);
  padding: 4px 10px;
  border-radius: 15px;
  font-size: 0.8rem;
}

.project-links {
  display: flex;
  gap: 15px;
  margin-top: auto;
}

.project-link {
  display: inline-block;
  padding: 8px 15px;
  background-color: var(--primary-color);
  color: var(--white);
  text-decoration: none;
  border-radius: 5px;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;
}

.project-link:hover {
  background-color: var(--primary-dark);
}

.more-projects {
  margin-top: 40px;
  padding: 30px;
  background-color: var(--bg-color);
  border-radius: 10px;
  box-shadow: var(--card-shadow);
  text-align: center;
}

.more-projects h3 {
  color: var(--primary-color);
  margin-bottom: 15px;
  font-size: 1.4rem;
}

.more-projects p {
  margin-bottom: 20px;
}

.github-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  background-color: #333;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.github-link:hover {
  background-color: #000;
}
</style>
