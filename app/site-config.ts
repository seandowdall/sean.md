export const siteConfig = {
  name: 'Sean Dowdall',
  description: 'Portfolio, projects and writing from Sean Dowdall.',
  baseUrl:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
    'http://localhost:3000',
}
