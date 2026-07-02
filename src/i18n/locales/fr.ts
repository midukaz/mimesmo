import type { LocaleMessages } from '../types'

const fr: LocaleMessages = {
  nav: {
    home: 'Accueil',
    about: 'À propos',
    skills: 'Compétences',
    projects: 'Projets',
    contact: 'Contact',
  },
  hero: {
    greeting: 'Bonjour, je suis',
    contactBtn: 'Me contacter',
    projectsBtn: 'Voir les projets',
  },
  about: {
    title: 'À propos de moi',
  },
  skills: {
    title: 'Compétences',
  },
  projects: {
    title: 'Projets',
    viewSite: 'Voir le site',
    code: 'Code',
    items: {
      tareFacil: {
        title: 'TareFácil',
        description:
          'Organisez vos tâches, événements et routines en un seul endroit, avec une interface simple et pratique.',
      },
    },
  },
  contact: {
    title: 'Contact',
    description:
      'Vous souhaitez parler d\'un projet ou d\'une opportunité ? Remplissez le formulaire ou envoyez un e-mail à {email}.',
    nameLabel: 'Votre nom *',
    emailLabel: 'Votre e-mail *',
    messageLabel: 'Votre message *',
    submitBtn: 'Envoyer le message',
    nameRequired: 'Indiquez votre nom',
    emailRequired: 'Indiquez votre e-mail',
    emailInvalid: 'E-mail invalide',
    messageRequired: 'Écrivez un message',
    success: 'Message envoyé ! Je vous répondrai bientôt.',
    error: 'Erreur lors de l\'envoi du message.',
    subject: 'Contact portfolio — {name}',
  },
  social: {
    github: 'GitHub',
    linkedin: 'LinkedIn',
    email: 'E-mail',
  },
  footer: {
    rights: 'Tous droits réservés.',
  },
  errors: {
    web3formsKey: 'Configurez VITE_WEB3FORMS_ACCESS_KEY dans le fichier .env pour envoyer des messages.',
    sendFailed: 'Impossible d\'envoyer le message.',
  },
  portfolio: {
    title: 'Développeur Full Stack',
    origin: 'Originaire du Cap-Vert',
    residence: 'J\'habite au Brésil',
    languages: 'Portugais (courant) · Anglais (notions)',
    age: '{age} ans',
    experience: '{years} ans dans le domaine',
    bio: 'Développeur cap-verdien de 25 ans, vivant au Brésil, avec 4 ans d\'expérience dans la création de solutions web modernes.',
    about:
      'Je suis Paulo Ricardo, originaire du Cap-Vert et j\'habite actuellement au Brésil. J\'ai 4 ans d\'expérience dans la technologie, je parle couramment le portugais et j\'ai des notions d\'anglais. Je travaille avec Laravel, JavaScript, Node.js et des bases de données comme MySQL et PostgreSQL, en visant toujours à livrer du code propre et des solutions qui résolvent de vrais problèmes.',
  },
  language: {
    label: 'Langue',
  },
}

export default fr
