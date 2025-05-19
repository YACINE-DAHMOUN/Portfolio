<template>
  <div class="section education-section">
    <div class="container">
      <h2 data-aos="fade-down">Formation</h2>
      
      <div class="education-container">
        <div 
          v-for="(education, index) in educations" 
          :key="index" 
          class="education-card"
          data-aos="fade-up"
          :data-aos-delay="200 + (index * 100)"
        >
          <div class="education-icon">
            <font-awesome-icon :icon="['fas', 'graduation-cap']" />
          </div>
          
          <div class="education-period">{{ education.period }}</div>
          
          <div class="education-content">
            <h3>{{ education.degree }}</h3>
            <h4>{{ education.institution }}</h4>
            <p>{{ education.description }}</p>
            
            <div v-if="education.skills && education.skills.length" class="education-skills">
              <span v-for="(skill, skillIndex) in education.skills" :key="skillIndex" class="skill-tag">
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="certifications" data-aos="fade-up" data-aos-delay="500">
        <h3>Certifications complémentaires</h3>
        <div class="cert-container">
          <div class="cert-card" v-for="(cert, index) in certifications" :key="index">
            <h4>{{ cert.name }}</h4>
            <p>{{ cert.issuer }} - {{ cert.year }}</p>
          </div>
        </div>
      </div>
      
      <div class="education-summary" data-aos="fade-up" data-aos-delay="600">
        <h3>Objectifs d'apprentissage</h3>
        <p>
          Je suis passionné par l'apprentissage continu et je cherche constamment à développer 
          mes compétences dans le domaine du développement web. Mes objectifs pour les mois à venir sont :
        </p>
        <ul>
          <li>Approfondir mes connaissances en développement front-end avec Vue.js et React</li>
          <li>Renforcer mes compétences en développement back-end avec Node.js</li>
          <li>Apprendre les bonnes pratiques de déploiement continu et d'intégration</li>
          <li>Explorer le développement d'applications mobiles cross-platform</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EducationView',
  data() {
    return {
      educations: [
        {
          degree: 'Formation Développeur Web',
          institution: 'DonkeySchool Paris',
          period: 'En cours',
          description: 'Titre RNCP Niveau 5 Développeur Web et Web Mobile. Formation intensive couvrant le développement front-end et back-end, ainsi que les méthodes agiles et la gestion de projet.',
          skills: ['HTML/CSS', 'JavaScript', 'PHP', 'Node.js', 'Angular', 'Symfony']
        },
        {
          degree: 'BTS Commerce International',
          institution: 'Institut International de Management',
          period: '2008 - 2011',
          description: 'Formation en commerce international avec spécialisation en marketing et négociation. Apprentissage des techniques de prospection et développement commercial à l\'international.',
          skills: ['Marketing', 'Négociation', 'Gestion de projet']
        },
        {
          degree: 'Baccalauréat Scientifique',
          institution: 'Lycée',
          period: '2008',
          description: 'Obtention du baccalauréat scientifique avec option mathématiques.',
          skills: ['Logique', 'Analyse', 'Résolution de problèmes']
        }
      ],
      certifications: [
        {
          name: 'Web Development Fundamentals',
          issuer: 'Plateforme en ligne',
          year: '2023'
        },
        {
          name: 'Introduction à JavaScript',
          issuer: 'OpenClassrooms',
          year: '2023'
        }
      ]
    }
  }
}
</script>

<style scoped>
.education-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 40px 0;
}

.education-card {
  background-color: var(--white);
  border-radius: 10px;
  box-shadow: var(--card-shadow);
  padding: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.education-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--card-hover-shadow);
}

.education-icon {
  width: 60px;
  height: 60px;
  background-color: var(--primary-color);
  color: var(--white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  position: absolute;
  top: -30px;
  left: 30px;
}

.education-period {
  position: absolute;
  top: 20px;
  right: 30px;
  background-color: var(--secondary-color);
  color: var(--text-color);
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: bold;
}

.education-content {
  margin-top: 25px;
}

.education-card h3 {
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-bottom: 5px;
}

.education-card h4 {
  font-size: 1.1rem;
  color: var(--text-color);
  font-weight: normal;
  margin-bottom: 15px;
}

.education-card p {
  margin-bottom: 15px;
}

.education-skills {
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

.certifications {
  margin-top: 60px;
  padding: 30px;
  background-color: var(--bg-color);
  border-radius: 10px;
  box-shadow: var(--card-shadow);
}

.certifications h3 {
  text-align: center;
  color: var(--primary-color);
  margin-bottom: 20px;
  font-size: 1.4rem;
}

.cert-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.cert-card {
  background-color: var(--white);
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.cert-card:hover {
  transform: translateY(-3px);
}

.cert-card h4 {
  color: var(--primary-color);
  margin-bottom: 5px;
  font-size: 1.1rem;
}

.cert-card p {
  font-size: 0.9rem;
  color: var(--text-color);
}

.education-summary {
  margin-top: 40px;
  padding: 30px;
  background-color: var(--white);
  border-radius: 10px;
  box-shadow: var(--card-shadow);
}

.education-summary h3 {
  color: var(--primary-color);
  margin-bottom: 15px;
  font-size: 1.4rem;
  text-align: center;
}

.education-summary p {
  margin-bottom: 15px;
}

.education-summary ul {
  padding-left: 20px;
}

.education-summary li {
  margin-bottom: 10px;
}

@media (max-width: 768px) {
  .education-icon {
    position: relative;
    top: 0;
    left: 0;
    margin-bottom: 15px;
  }
  
  .education-period {
    position: relative;
    top: 0;
    right: 0;
    display: inline-block;
    margin-bottom: 15px;
  }
  
  .education-content {
    margin-top: 0;
  }
}
</style>