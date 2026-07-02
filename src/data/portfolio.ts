export type ProjectId = 'tareFacil'
export type SocialKey = 'github' | 'linkedin' | 'email'

export interface ProjectMeta {
  id: ProjectId
  tags: string[]
  url?: string
  repo?: string
}

export interface SocialMeta {
  key: SocialKey
  url: string
  icon: string
}

export const portfolio = {
  name: 'Paulo Ricardo',
  age: 25,
  yearsExperience: 4,
  email: 'pm10023080@gmail.com',
  skills: [
    'Laravel',
    'JavaScript',
    'MySQL',
    'PostgreSQL',
    'Node.js',
    'Tailwind CSS',
  ],
  projects: [
    {
      id: 'tareFacil',
      tags: ['Laravel', 'JavaScript', 'Tailwind CSS', 'MySQL'],
      url: 'https://demo-tarefacil.netlify.app/',
    },
  ] satisfies ProjectMeta[],
  socials: [
    { key: 'github', url: 'https://github.com', icon: 'code' },
    { key: 'linkedin', url: 'https://linkedin.com', icon: 'work' },
    { key: 'email', url: 'mailto:pm10023080@gmail.com', icon: 'email' },
  ] satisfies SocialMeta[],
}
