import { getBlogPosts } from 'app/blog/utils'
import { getProjects } from 'app/projects/data'
import { siteConfig } from 'app/site-config'

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export async function GET() {
  const baseUrl = siteConfig.baseUrl
  const blogItems = getBlogPosts().map((post) => ({
    title: post.metadata.title,
    link: `${baseUrl}/blog/${post.slug}`,
    description: post.metadata.summary || '',
    publishedAt: post.metadata.publishedAt,
    guid: `${baseUrl}/blog/${post.slug}`,
  }))

  const projectItems = getProjects().map((project) => ({
    title: project.name,
    link: `${baseUrl}/projects/${project.slug}`,
    description: project.summary,
    publishedAt: project.publishedAt || new Date().toISOString(),
    guid: `${baseUrl}/projects/${project.slug}`,
  }))

  const itemsXml = [...blogItems, ...projectItems]
    .sort((a, b) => {
      if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
        return -1
      }
      return 1
    })
    .map((item) => {
      return `<item>
  <title>${escapeXml(item.title)}</title>
  <link>${item.link}</link>
  <guid>${item.guid}</guid>
  <description>${escapeXml(item.description)}</description>
  <pubDate>${new Date(item.publishedAt).toUTCString()}</pubDate>
</item>`
    })
    .join('\n')

  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(siteConfig.name)}</title>
    <link>${baseUrl}</link>
    <description>${escapeXml(siteConfig.description)}</description>
    <language>en-ie</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/rss" rel="self" type="application/rss+xml" />
    ${itemsXml}
  </channel>
</rss>`

  return new Response(rssFeed, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate=86400',
    },
  })
}
