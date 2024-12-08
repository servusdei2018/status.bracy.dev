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
      description: 'Main site.',
      followRedirect: true,
    },
    {
      id: 'notes.bracy.dev',
      url: 'https://notes.bracy.dev',
      description: 'Note site.',
    },
  ],
}
