export type Project = {
  slug: string
  name: string
  timeframe: string
  publishedAt?: string
  summary: string
  description: string[]
  technologies: string[]
  highlights: string[]
  images?: {
    src: string
    alt: string
  }[]
  links?: {
    href: string
    label: string
  }[]
  status?: string
}

export const projects: Project[] = [
  {
    slug: 'max',
    name: 'Max',
    timeframe: 'Most recent project',
    publishedAt: '2026-05-16',
    summary:
      'A free, privacy focused and local-first strength training app I built to solve my own frustrations with workout trackers.',
    description: [
      'I built Max because the apps I kept reaching for, especially Strong and Hevy, gated useful features like analytics and routines behind subscriptions and pushed everyone through account creation.',
      'Max takes a different approach. It is free, local-first, and designed to work without requiring an account, while still giving you serious workout logging, progression tracking, and useful analytics.',
    ],
    technologies: [
      'React Native',
      'Expo',
      'TypeScript',
      'Supabase',
      'PowerSync',
      'SQLite',
      'PostHog',
    ],
    highlights: [
      'Built to avoid paywalled analytics and routines in existing lifting apps',
      'Local-first workout logging with no account required for core usage',
      'Anonymous product analytics through PostHog instead of user accounts',
    ],
    images: [
      {
        src: '/projects/max/max-1.png',
        alt: 'Max app home screen showing an active pull day session',
      },
      {
        src: '/projects/max/max-2.png',
        alt: 'Max app active workout screen showing three sets of lat pulldown completed on pull day',
      },
      {
        src: '/projects/max/max-3.png',
        alt: 'Max app analytics screen showing progress charts for performance tracking',
      },
      {
        src: '/projects/max/max-4.png',
        alt: 'Max app base exercises list with bench press and bicep curl selected',
      },
    ],
    links: [
      {
        href: 'https://www.maxlifting.app/',
        label: 'Visit site',
      },
      {
        href: 'https://apps.apple.com/ie/app/max-unlimited-workout-tracker/id6755911915',
        label: 'Visit iOS store',
      }
    ],
    status: 'Live',
  },
  {
    slug: 'buck',
    name: 'Buck',
    timeframe: '09/2023 - Archived',
    publishedAt: '2024-01-01',
    summary:
      "A men's mental fitness app focused on structured exercises, moderated community features, and gamified progress tracking.",
    description: [
      'Buck was a mobile app built to make mental health work feel more practical, consistent, and approachable for men.',
      'The product combined guided exercises, social accountability, and progression systems, with subscriptions and App Store distribution handled on iOS.',
    ],
    technologies: ['React Native', 'Expo', 'TypeScript', 'Convex', 'RevenueCat'],
    highlights: [
      'Designed and developed the mobile app and real-time backend experience',
      'Built moderated community features and personalised mental fitness exercises',
      'Implemented subscriptions, in-app purchases, and app store optimisation',
    ],
    images: [
      {
        src: '/projects/buck/buck-1.png',
        alt: 'Buck Today screen with daily challenge and reflection flow',
      },
      {
        src: '/projects/buck/buck-2.png',
        alt: 'Buck Discover screen showing exercises, quotes, and community entry points',
      },
      {
        src: '/projects/buck/buck-3.png',
        alt: 'Buck Community screen showing moderated social discussion and posting',
      },
    ],
    status: 'Archived',
  },
]

export function getProjects() {
  return projects
}

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}
