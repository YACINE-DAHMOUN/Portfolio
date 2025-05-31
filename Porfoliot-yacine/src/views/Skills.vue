<template>
  <div class="section skills-section">
    <div class="container">
      <h2 data-aos="fade-down">Compétences</h2>

      <div class="skills-container">
        <div class="skill-category" data-aos="fade-up" data-aos-delay="200">
          <div class="skill-header">
            <font-awesome-icon :icon="['fas', 'code']" class="skill-icon" />
            <h3>Front-end</h3>
          </div>
          <ul class="skill-list">
            <li v-for="(skill, index) in frontendSkills" :key="index">
              <span class="skill-name">{{ skill }}</span>
              <span class="skill-check"><font-awesome-icon :icon="['fas', 'check']" /></span>
            </li>
          </ul>
        </div>

        <div class="skill-category" data-aos="fade-up" data-aos-delay="300">
          <div class="skill-header">
            <font-awesome-icon :icon="['fas', 'code']" class="skill-icon" />
            <h3>Back-end</h3>
          </div>
          <ul class="skill-list">
            <li v-for="(skill, index) in backendSkills" :key="index">
              <span class="skill-name">{{ skill }}</span>
              <span class="skill-check"><font-awesome-icon :icon="['fas', 'check']" /></span>
            </li>
          </ul>
        </div>

        <div class="skill-category" data-aos="fade-up" data-aos-delay="400">
          <div class="skill-header">
            <font-awesome-icon :icon="['fas', 'tools']" class="skill-icon" />
            <h3>Outils</h3>
          </div>
          <ul class="skill-list">
            <li v-for="(skill, index) in tools" :key="index">
              <span class="skill-name">{{ skill }}</span>
              <span class="skill-check"><font-awesome-icon :icon="['fas', 'check']" /></span>
            </li>
          </ul>
        </div>
      </div>

      <div class="learning-section" data-aos="fade-up" data-aos-delay="500">
        <h3>En cours d'apprentissage</h3>
        <div class="learning-skills">
          <span v-for="(skill, index) in learningSkills" :key="index" class="learning-tag">
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillsView',
  data() {
    return {
      frontendSkills: [
        'HTML & CSS',
        'JavaScript / TypeScript',
        'Angular',
        'Vue.js',
        'UX / UI Design'
      ],
      backendSkills: [
        'PHP',
        'Node.js',
        'Symfony',
        'MySQL',
        'API RESTful'
      ],
      tools: [
        'Docker',
        'Git',
        'WordPress',
        'VS Code',
        'Npm/Yarn'
      ],
      learningSkills: [
        'Vue.js 3',
        'Nuxt.js',
        'C#',
        'ASP.NET Core',
      ]
    }
  }
}
</script>

<style scoped>
.skills-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin: 40px 0;
}

.skill-category {
  background-color: var(--white);
  border-radius: 10px;
  box-shadow: var(--card-shadow);
  padding: 25px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.skill-category:hover {
  transform: translateY(-10px);
  box-shadow: var(--card-hover-shadow);
}

.skill-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  justify-content: center;
}

.skill-icon {
  font-size: 1.8rem;
  color: var(--primary-color);
  margin-right: 15px;
}

.skill-header h3 {
  font-size: 1.5rem;
  color: var(--primary-color);
}

.skill-list {
  list-style: none;
  padding: 0;
}

.skill-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.skill-list li:last-child {
  border-bottom: none;
}

.skill-name {
  font-size: 1rem;
}

.skill-check {
  color: var(--secondary-color);
}

.learning-section {
  margin-top: 40px;
  padding: 20px;
  background-color: var(--bg-color);
  border-radius: 10px;
  box-shadow: var(--card-shadow);
}

.learning-section h3 {
  color: var(--primary-color);
  margin-bottom: 20px;
  font-size: 1.3rem;
}

.learning-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.learning-tag {
  background-color: var(--primary-color);
  color: var(--white);
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  transition: transform 0.3s ease;
}

.learning-tag:hover {
  transform: scale(1.05);
  background-color: var(--primary-dark);
}
</style>
