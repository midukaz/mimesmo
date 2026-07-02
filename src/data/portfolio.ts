export type ProjectId = 'taskApp' | 'dashboard' | 'landing'
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
      id: 'taskApp',
      tags: ['Vue', 'Quasar', 'TypeScript'],
      repo: 'https://github.com',
    },
    {
      id: 'dashboard',
      tags: ['Vue', 'Node.js', 'Chart.js'],
      url: 'https://example.com',
    },
    {
      id: 'landing',
      tags: ['Quasar', 'Vite', 'CSS'],
      url: 'https://example.com',
    },
  ] satisfies ProjectMeta[],
  socials: [
    { key: 'github', url: 'https://github.com', icon: 'code' },
    { key: 'linkedin', url: 'https://linkedin.com', icon: 'work' },
    { key: 'email', url: 'mailto:pm10023080@gmail.com', icon: 'email' },
  ] satisfies SocialMeta[],
}
