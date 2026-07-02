import type { LocaleMessages } from '../types'

const ptBR: LocaleMessages = {
  nav: {
    home: 'Início',
    about: 'Sobre',
    skills: 'Habilidades',
    projects: 'Projetos',
    contact: 'Contato',
  },
  hero: {
    greeting: 'Olá, eu sou',
    contactBtn: 'Entrar em contato',
    projectsBtn: 'Ver projetos',
  },
  about: {
    title: 'Sobre mim',
  },
  skills: {
    title: 'Habilidades',
  },
  projects: {
    title: 'Projetos',
    viewSite: 'Ver site',
    code: 'Código',
    items: {
      tareFacil: {
        title: 'TareFácil',
        description:
          'Organize suas tarefas, eventos e rotinas em um só lugar, com interface simples e prática.',
      },
    },
  },
  contact: {
    title: 'Contato',
    description:
      'Quer conversar sobre um projeto ou oportunidade? Preencha o formulário abaixo ou envie um e-mail para {email}.',
    nameLabel: 'Seu nome *',
    emailLabel: 'Seu e-mail *',
    messageLabel: 'Sua mensagem *',
    submitBtn: 'Enviar mensagem',
    nameRequired: 'Informe seu nome',
    emailRequired: 'Informe seu e-mail',
    emailInvalid: 'E-mail inválido',
    messageRequired: 'Escreva uma mensagem',
    success: 'Mensagem enviada! Em breve entrarei em contato.',
    error: 'Erro ao enviar mensagem.',
    subject: 'Contato do portfólio — {name}',
  },
  social: {
    github: 'GitHub',
    linkedin: 'LinkedIn',
    email: 'E-mail',
  },
  footer: {
    rights: 'Todos os direitos reservados.',
  },
  errors: {
    web3formsKey: 'Configure VITE_WEB3FORMS_ACCESS_KEY no arquivo .env para enviar mensagens.',
    sendFailed: 'Não foi possível enviar a mensagem.',
  },
  portfolio: {
    title: 'Desenvolvedor Full Stack',
    origin: 'Natural de Cabo Verde',
    residence: 'Moro no Brasil',
    languages: 'Português (fluente) · Inglês (básico)',
    education: 'Graduado em Análise e Desenvolvimento de Sistemas — Estácio',
    age: '{age} anos',
    experience: '{years} anos na área',
    bio: 'Desenvolvedor cabo-verdiano de 25 anos, morando no Brasil, com 4 anos de experiência criando soluções web modernas.',
    about:
      'Sou Paulo Ricardo, natural de Cabo Verde e atualmente moro no Brasil. Sou graduado em Análise e Desenvolvimento de Sistemas pela Estácio, com 4 anos de experiência na área de tecnologia. Fluente em português e com conhecimentos básicos de inglês, trabalho com Laravel, JavaScript, Node.js e bancos de dados como MySQL e PostgreSQL, sempre buscando entregar código limpo e soluções que resolvem problemas reais.',
  },
  language: {
    label: 'Idioma',
  },
}

export default ptBR
