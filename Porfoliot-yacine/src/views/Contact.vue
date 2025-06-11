<template>
  <div class="section contact-section">
    <div class="container">
      <h2 data-aos="fade-down">Contact</h2>

      <div class="contact-container">
        <div class="contact-info" data-aos="fade-right" data-aos-delay="200">
          <h3>Restons en contact</h3>
          <p>
            Je suis actuellement à la recherche de missions freelance, de projets ou de nouvelles opportunités dans le développement web.
            N'hésitez pas à me contacter pour discuter de votre projet ou d'une opportunité professionnelle.
          </p>

          <div class="contact-methods">
            <div class="contact-item">
              <div class="contact-icon">
                <font-awesome-icon :icon="['fas', 'envelope']" />
              </div>
              <div class="contact-details">
                <h4>Email</h4>
                <a href="mailto:yacine.dahmoun15@gmail.com">yacine.dahmoun15@gmail.com</a>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-icon">
                <font-awesome-icon :icon="['fas', 'phone']" />
              </div>
              <div class="contact-details">
                <h4>Téléphone</h4>
                <a href="tel:+33767244276">07 67 24 42 76</a>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-icon">
                <font-awesome-icon :icon="['fab', 'linkedin']" />
              </div>
              <div class="contact-details">
                <h4>LinkedIn</h4>
                <a href="https://www.linkedin.com/in/yacine-dahmoun-020679327" target="_blank">linkedin.com/in/yacine-dahmoun</a>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-icon">
                <font-awesome-icon :icon="['fab', 'github']" />
              </div>
              <div class="contact-details">
                <h4>GitHub</h4>
                <a href="https://github.com/YACINE-DAHMOUN" target="_blank">github.com/YACINE-DAHMOUN</a>
              </div>
            </div>
          </div>
        </div>

        <div class="contact-form-container" data-aos="fade-left" data-aos-delay="400">
          <h3>Envoyez-moi un message</h3>

          <!-- Formulaire Netlify Forms -->
          <form
            class="contact-form"
            @submit.prevent="handleSubmit"
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            <!-- Champs cachés pour Netlify -->
            <input type="hidden" name="form-name" value="contact" />

            <!-- Champ anti-spam caché -->
            <div style="display: none;">
              <label>Don't fill this out if you're human: <input name="bot-field" /></label>
            </div>

            <div class="form-group">
              <label for="name">Nom</label>
              <input
                type="text"
                id="name"
                name="name"
                v-model="formData.name"
                placeholder="Votre nom"
                required
              />
            </div>

            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                v-model="formData.email"
                placeholder="Votre email"
                required
              />
            </div>

            <div class="form-group">
              <label for="subject">Sujet</label>
              <input
                type="text"
                id="subject"
                name="subject"
                v-model="formData.subject"
                placeholder="Sujet de votre message"
                required
              />
            </div>

            <div class="form-group">
              <label for="message">Message</label>
              <textarea
                id="message"
                name="message"
                v-model="formData.message"
                placeholder="Votre message"
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" class="btn-primary" :disabled="submitting">
              <span v-if="submitting">
                <font-awesome-icon :icon="['fas', 'spinner']" spin />
                Envoi en cours...
              </span>
              <span v-else>
                <font-awesome-icon :icon="['fas', 'paper-plane']" />
                Envoyer
              </span>
            </button>

            <div v-if="formMessage" :class="['form-message', formMessage.type]">
              {{ formMessage.text }}
            </div>
          </form>
        </div>
      </div>

      <div class="location-info" data-aos="fade-up" data-aos-delay="600">
        <h3>Localisation</h3>
        <p>
          <font-awesome-icon :icon="['fas', 'map-marker-alt']" />
          Paris, France
        </p>
        <p class="availability">
          <font-awesome-icon :icon="['fas', 'calendar-check']" />
          Disponible pour des projets à distance ou en présentiel, en freelance ou toute autre opportunités
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactView',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      submitting: false,
      formMessage: null
    }
  },
  methods: {
  // Dans votre Contact.vue, remplacez la méthode handleSubmit par ceci :

async handleSubmit() {
  this.submitting = true;
  this.formMessage = null;

  try {
    // Méthode plus simple et plus fiable
    const formData = new URLSearchParams();
    formData.append('form-name', 'contact');
    formData.append('name', this.formData.name);
    formData.append('email', this.formData.email);
    formData.append('subject', this.formData.subject);
    formData.append('message', this.formData.message);

    const response = await fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString()
    });

    // Vérifier si la réponse est OK
    if (response.ok || response.status === 200) {
      // Réinitialiser le formulaire
      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };

      // Rediriger vers la page de succès
      this.$router.push('public/success');

    } else {
      // Log pour debug
      console.log('Response status:', response.status);
      console.log('Response text:', await response.text());
      throw new Error(`HTTP ${response.status}`);
    }

  } catch (error) {
    console.error('Erreur complète:', error);
    this.formMessage = {
      type: 'error',
      text: 'Une erreur est survenue. Veuillez essayer de m\'envoyer un email directement.'
    };
  } finally {
    this.submitting = false;
  }
}
}
}
</script>

<style scoped>
/* Vos styles existants restent identiques */
.contact-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin: 40px 0;
}

.contact-info, .contact-form-container {
  background-color: var(--white);
  border-radius: 10px;
  box-shadow: var(--card-shadow);
  padding: 30px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.contact-info:hover, .contact-form-container:hover {
  transform: translateY(-5px);
  box-shadow: var(--card-hover-shadow);
}

.contact-info h3, .contact-form-container h3 {
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-bottom: 20px;
}

.contact-info p {
  margin-bottom: 30px;
  line-height: 1.6;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 15px;
}

.contact-icon {
  width: 45px;
  height: 45px;
  background-color: var(--primary-color);
  color: var(--white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
  transition: transform 0.3s ease;
}

.contact-item:hover .contact-icon {
  transform: scale(1.1);
}

.contact-details h4 {
  font-size: 1.1rem;
  color: var(--text-color);
  margin-bottom: 5px;
}

.contact-details a {
  color: var(--primary-color);
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-details a:hover {
  color: var(--secondary-color);
  text-decoration: underline;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-weight: 600;
  color: var(--text-color);
  font-size: 0.9rem;
}

.form-group input, .form-group textarea {
  padding: 12px 15px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  font-family: inherit;
  font-size: 1rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.form-group input:focus, .form-group textarea:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);
}

.btn-primary {
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.btn-primary:hover:not(:disabled) {
  background-color: var(--primary-hover-color, #3a80d1);
  transform: translateY(-2px);
}

.btn-primary:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.form-message {
  padding: 10px 15px;
  border-radius: 8px;
  font-size: 0.9rem;
  text-align: center;
}

.form-message.success {
  background-color: rgba(72, 187, 120, 0.1);
  color: #2f855a;
  border: 1px solid rgba(72, 187, 120, 0.2);
}

.form-message.error {
  background-color: rgba(245, 101, 101, 0.1);
  color: #c53030;
  border: 1px solid rgba(245, 101, 101, 0.2);
}

.location-info {
  background-color: var(--white);
  border-radius: 10px;
  box-shadow: var(--card-shadow);
  padding: 30px;
  text-align: center;
  margin-top: 30px;
}

.location-info h3 {
  color: var(--primary-color);
  margin-bottom: 15px;
  font-size: 1.4rem;
}

.location-info p {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 10px;
}

.location-info .availability {
  background-color: rgba(74, 144, 226, 0.1);
  padding: 10px 20px;
  border-radius: 20px;
  display: inline-flex;
  margin-top: 10px;
  color: var(--primary-color);
  font-weight: 600;
}

@media (max-width: 992px) {
  .contact-container {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 576px) {
  .contact-item {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .contact-details {
    text-align: center;
  }
}
</style>
