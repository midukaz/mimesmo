import type { LocaleMessages } from '../types'

const en: LocaleMessages = {
  nav: {
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
  },
  hero: {
    greeting: "Hi, I'm",
    contactBtn: 'Get in touch',
    projectsBtn: 'View projects',
  },
  about: {
    title: 'About me',
  },
  skills: {
    title: 'Skills',
  },
  projects: {
    title: 'Projects',
    viewSite: 'View site',
    code: 'Code',
    items: {
      taskApp: {
        title: 'Task App',
        description: 'Personal organizer with filters, tags, and local persistence.',
      },
      dashboard: {
        title: 'Analytics Dashboard',
        description: 'Panel with charts and real-time metrics for KPI tracking.',
      },
      landing: {
        title: 'SaaS Landing Page',
        description: 'Responsive conversion page with integrated contact form.',
      },
    },
  },
  contact: {
    title: 'Contact',
    description:
      'Want to talk about a project or opportunity? Fill out the form below or send an email to {email}.',
    nameLabel: 'Your name *',
    emailLabel: 'Your email *',
    messageLabel: 'Your message *',
    submitBtn: 'Send message',
    nameRequired: 'Please enter your name',
    emailRequired: 'Please enter your email',
    emailInvalid: 'Invalid email',
    messageRequired: 'Please write a message',
    success: 'Message sent! I will get back to you soon.',
    error: 'Failed to send message.',
    subject: 'Portfolio contact — {name}',
  },
  social: {
    github: 'GitHub',
    linkedin: 'LinkedIn',
    email: 'Email',
  },
  footer: {
    rights: 'All rights reserved.',
  },
  errors: {
    web3formsKey: 'Set VITE_WEB3FORMS_ACCESS_KEY in the .env file to send messages.',
    sendFailed: 'Could not send the message.',
  },
  portfolio: {
    title: 'Full Stack Developer',
    origin: 'From Cape Verde',
    residence: 'Living in Brazil',
    languages: 'Portuguese (fluent) · English (basic)',
    age: '{age} years old',
    experience: '{years} years in the field',
    bio: 'Cape Verdean developer, 25 years old, living in Brazil, with 4 years of experience building modern web solutions.',
    about:
      'I am Paulo Ricardo, from Cape Verde and currently living in Brazil. I have 4 years of experience in technology, I am fluent in Portuguese and have basic English skills. I work with Laravel, JavaScript, Node.js, and databases like MySQL and PostgreSQL, always aiming to deliver clean code and solutions that solve real problems.',
  },
  language: {
    label: 'Language',
  },
}

export default en
