import type { LocaleMessages } from '../types'

const es: LocaleMessages = {
  nav: {
    home: 'Inicio',
    about: 'Sobre mí',
    skills: 'Habilidades',
    projects: 'Proyectos',
    contact: 'Contacto',
  },
  hero: {
    greeting: 'Hola, soy',
    contactBtn: 'Contactar',
    projectsBtn: 'Ver proyectos',
  },
  about: {
    title: 'Sobre mí',
  },
  skills: {
    title: 'Habilidades',
  },
  projects: {
    title: 'Proyectos',
    viewSite: 'Ver sitio',
    code: 'Código',
    items: {
      taskApp: {
        title: 'App de Tareas',
        description: 'Organizador personal con filtros, etiquetas y persistencia local.',
      },
      dashboard: {
        title: 'Dashboard Analytics',
        description: 'Panel con gráficos y métricas en tiempo real para seguimiento de KPIs.',
      },
      landing: {
        title: 'Landing Page SaaS',
        description: 'Página de conversión responsive con formulario de contacto integrado.',
      },
    },
  },
  contact: {
    title: 'Contacto',
    description:
      '¿Quieres hablar sobre un proyecto u oportunidad? Completa el formulario o envía un correo a {email}.',
    nameLabel: 'Tu nombre *',
    emailLabel: 'Tu correo *',
    messageLabel: 'Tu mensaje *',
    submitBtn: 'Enviar mensaje',
    nameRequired: 'Ingresa tu nombre',
    emailRequired: 'Ingresa tu correo',
    emailInvalid: 'Correo inválido',
    messageRequired: 'Escribe un mensaje',
    success: '¡Mensaje enviado! Me pondré en contacto pronto.',
    error: 'Error al enviar el mensaje.',
    subject: 'Contacto del portafolio — {name}',
  },
  social: {
    github: 'GitHub',
    linkedin: 'LinkedIn',
    email: 'Correo',
  },
  footer: {
    rights: 'Todos los derechos reservados.',
  },
  errors: {
    web3formsKey: 'Configura VITE_WEB3FORMS_ACCESS_KEY en el archivo .env para enviar mensajes.',
    sendFailed: 'No se pudo enviar el mensaje.',
  },
  portfolio: {
    title: 'Desarrollador Full Stack',
    origin: 'Natural de Cabo Verde',
    residence: 'Vivo en Brasil',
    languages: 'Portugués (fluido) · Inglés (básico)',
    age: '{age} años',
    experience: '{years} años en el área',
    bio: 'Desarrollador caboverdiano de 25 años, viviendo en Brasil, con 4 años de experiencia creando soluciones web modernas.',
    about:
      'Soy Paulo Ricardo, natural de Cabo Verde y actualmente vivo en Brasil. Tengo 4 años de experiencia en tecnología, hablo portugués con fluidez y tengo conocimientos básicos de inglés. Trabajo con Laravel, JavaScript, Node.js y bases de datos como MySQL y PostgreSQL, buscando siempre entregar código limpio y soluciones que resuelvan problemas reales.',
  },
  language: {
    label: 'Idioma',
  },
}

export default es
