import type { Config } from './types'

export const config: Config = {
  settings: {
    title: 'bracy.dev status',
    url: 'https://status.bracy.dev',
    displayDays: 90,
    collectResponseTimes: true,
  },
  monitors: [
    {
      id: 'bracy.dev',
      url: 'https://bracy.dev',
      description: 'Main platform and services.',
      followRedirect: true,
    },
    {
      id: 'notes.bracy.dev',
      url: 'https://notes.bracy.dev',
      description: 'Documentation and resources.',
    },
    {
      id: 'testing.bracy.dev',
      url: 'https://testing.bracy.dev',
      description: 'QA and feature testing.',
    },
  ],
}
