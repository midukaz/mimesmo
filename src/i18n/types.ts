export type AppLocale = 'pt-BR' | 'en' | 'es' | 'fr'

export interface ProjectTranslation {
  title: string
  description: string
}

export interface LocaleMessages {
  nav: {
    home: string
    about: string
    skills: string
    projects: string
    contact: string
  }
  hero: {
    greeting: string
    contactBtn: string
    projectsBtn: string
  }
  about: {
    title: string
  }
  skills: {
    title: string
  }
  projects: {
    title: string
    viewSite: string
    code: string
    items: {
      taskApp: ProjectTranslation
      dashboard: ProjectTranslation
      landing: ProjectTranslation
    }
  }
  contact: {
    title: string
    description: string
    nameLabel: string
    emailLabel: string
    messageLabel: string
    submitBtn: string
    nameRequired: string
    emailRequired: string
    emailInvalid: string
    messageRequired: string
    success: string
    error: string
    subject: string
  }
  social: {
    github: string
    linkedin: string
    email: string
  }
  footer: {
    rights: string
  }
  errors: {
    web3formsKey: string
    sendFailed: string
  }
  portfolio: {
    title: string
    origin: string
    residence: string
    languages: string
    age: string
    experience: string
    bio: string
    about: string
  }
  language: {
    label: string
  }
}
