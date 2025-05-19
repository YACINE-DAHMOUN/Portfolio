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
</template>

<script>
export default {
  name: 'ExperienceView',
  data() {
    return {
      experiences: [
        {
          title: 'Auto-entrepreneur',
          company: 'Indépendant',
          period: '2018 - 2024',
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
  border-radius: 10px;
  box-shadow: var(--card-shadow);
  transition: transform 0.3s ease;
}

.timeline-content:hover {
  transform: translateY(-5px);
  box-shadow: var(--card-hover-shadow);
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
}

.timeline-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.skill-tag {
  background-color: rgba(74, 144, 226, 0.1);
  color: var(--primary-color);
  padding: 4px 10px;
  border-radius: 15px;
  font-size: 0.8rem;
}

.experience-summary {
  background-color: var(--bg-color);
  padding: 25px;
  border-radius: 10px;
  box-shadow: var(--card-shadow);
  margin-top: 60px;
}

.experience-summary h3 {
  color: var(--primary-color);
  margin-bottom: 15px;
  font-size: 1.4rem;
  text-align: center;
}

.skill-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
  list-style-type: none;
  padding: 0;
}

.skill-list li {
  position: relative;
  padding-left: 25px;
  margin-bottom: 10px;
}

.skill-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--primary-color);
  font-weight: bold;
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
}
</style>