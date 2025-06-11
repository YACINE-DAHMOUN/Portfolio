<template>
  <div class="section experience-section">
    <div class="container">
      <h2 data-aos="fade-down">Expériences Professionnelles</h2>

      <div class="timeline">
        <div
          v-for="(experience, index) in experiences"
          :key="index"
          class="timeline-item"
          :class="{'timeline-right': index % 2 !== 0, 'timeline-left': index % 2 === 0}"
          data-aos="fade-up"
          :data-aos-delay="200 + (index * 100)"
        >
          <div class="timeline-content">
            <div class="timeline-date">{{ experience.period }}</div>
            <h3>{{ experience.title }}</h3>
            <h4>{{ experience.company }}</h4>
            <p>{{ experience.description }}</p>

            <div v-if="experience.skills && experience.skills.length" class="timeline-skills">
              <span v-for="(skill, skillIndex) in experience.skills" :key="skillIndex" class="skill-tag">
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="experience-summary" data-aos="fade-up" data-aos-delay="600">
        <div class="cta-content">
          <h3>Compétences acquises</h3>
          <ul class="skill-list">
            <li>Gestion de projets et planification</li>
            <li>Résolution de problèmes complexes</li>
            <li>Coordination d'équipes techniques</li>
            <li>Communication client et service</li>
            <li>Adaptabilité et polyvalence</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExperienceView',
  data() {
    return {
      experiences: [
        {
          title: 'Stage Développeur Web',
          company: 'DonkeyShcool',
          period: 'Avril - Mai 2024',
          description: 'Stage de 8 semaines en développement web fullstack. Participation à la création d\'applications web, intégration de fonctionnalités front-end et back-end, et collaboration avec l\'équipe de développement.',
          skills: [ 'Angular  et Symfony', 'Développement Web','Amélioration du code existant', 'Intégration de nouvelles fonctionnalités', 'Tests et débogage', 'Collaboration en équipe','Relation client', 'Organisation',]
        },
        {
          title: 'Auto-entrepreneur',
          company: 'Indépendant',
          period: '2019 - 2024',
          description: 'Entrepreneur en rénovation intérieure et décoration. Gestion de projets de rénovation pour des clients particuliers, coordination avec différents corps de métier, et réalisation de travaux de décoration et d\'aménagement.',
          skills: ['Gestion de projet', 'Relation client', 'Organisation']
        },
        {
          title: 'Chef d\'équipe Installateur',
          company: 'Ministère de l\'Éducation (Algérie)',
          period: '2014 - 2017',
          description: 'Gestion de projets d\'installation de réseaux et armoires informatiques. Supervision d\'une équipe technique, planification des interventions et coordination avec les différents établissements scolaires.',
          skills: ['Management', 'Réseaux', 'Infrastructure IT']
        },
        {
          title: 'Technicien Réseau Informatique',
          company: 'Entreprise de services informatiques',
          period: '2012 - 2014',
          description: 'Installation et maintenance de réseaux informatiques. Configuration de matériel réseau, dépannage et support technique pour les clients professionnels.',
          skills: ['Support technique', 'Maintenance', 'Installation']
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Variables CSS unifiées */
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

.timeline {
  position: relative;
  max-width: 1200px;
  margin: 40px auto;
}

.timeline::after {
  content: '';
  position: absolute;
  width: 6px;
  background-color: var(--primary-color);
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
  border-radius: 3px;
}

.timeline-item {
  padding: 10px 40px;
  position: relative;
  width: 50%;
  box-sizing: border-box;
}

.timeline-left {
  left: 0;
}

.timeline-right {
  left: 50%;
}

.timeline-content {
  padding: 20px;
  background-color: var(--white);
  position: relative;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-soft);
  transition: var(--transition);
  border: 1px solid #e2e8f0;
}

.timeline-content:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-hover);
}

.timeline-left .timeline-content::after {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  right: -50px;
  background-color: var(--white);
  border: 4px solid var(--primary-color);
  top: 15px;
  border-radius: 50%;
  z-index: 1;
}

.timeline-right .timeline-content::after {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  left: -50px;
  background-color: var(--white);
  border: 4px solid var(--primary-color);
  top: 15px;
  border-radius: 50%;
  z-index: 1;
}

.timeline-date {
  display: inline-block;
  background-color: var(--primary-color);
  color: var(--white);
  padding: 5px 15px;
  border-radius: 5px;
  font-size: 0.9rem;
  margin-bottom: 15px;
}

.timeline-content h3 {
  color: var(--primary-color);
  margin-bottom: 5px;
  font-size: 1.3rem;
}

.timeline-content h4 {
  color: var(--text-color);
  margin-bottom: 15px;
  font-size: 1rem;
  font-weight: normal;
  font-style: italic;
}

.timeline-content p {
  margin-bottom: 15px;
  color: var(--text-color);
}

.timeline-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.skill-tag {
  background-color: rgba(102, 126, 234, 0.1);
  color: var(--primary-color);
  padding: 4px 10px;
  border-radius: 15px;
  font-size: 0.8rem;
}

.experience-summary {
  padding: 100px 0;
  background: var(--gradient-primary);
  text-align: center;
  position: relative;
  overflow: hidden;
}

.experience-summary::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><radialGradient id="grad1" cx="50%" cy="50%" r="50%"><stop offset="0%" style="stop-color:rgba(255,255,255,0.1);stop-opacity:1" /><stop offset="100%" style="stop-color:rgba(255,255,255,0);stop-opacity:1" /></radialGradient></defs><circle cx="200" cy="300" r="150" fill="url(%23grad1)"/><circle cx="800" cy="700" r="200" fill="url(%23grad1)"/><circle cx="600" cy="200" r="100" fill="url(%23grad1)"/></svg>') no-repeat center center;
  background-size: cover;
  opacity: 0.3;
}

.cta-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
}

.cta-content h3 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 40px;
  color: #2d3748;
}

.skill-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  list-style-type: none;
  padding: 0;
  max-width: 600px;
  margin: 0 auto;
}

.skill-list li {
  position: relative;
  padding-left: 25px;
  margin-bottom: 10px;
  color: #2d3748;
  font-size: 1.1rem;
  opacity: 0.9;
  text-align: left;
}

.skill-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #2d3748;
  font-weight: bold;
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .timeline::after {
    left: 31px;
  }

  .timeline-item {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
  }

  .timeline-right {
    left: 0;
  }

  .timeline-left .timeline-content::after,
  .timeline-right .timeline-content::after {
    left: -36px;
  }

  .experience-summary {
    padding: 60px 0;
  }

  .cta-content h3 {
    font-size: 2rem;
  }

  .skill-list {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .skill-list li {
    text-align: center;
    padding-left: 20px;
  }
}
</style>
