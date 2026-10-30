import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { getPosts, postHref } from '../utils/posts';

export const GET: APIRoute = async ({ site }) => {
  const posts = await getPosts('en');
  return rss({
    title: 'Yatan Blumenthal Vargas',
    description: 'Essays and unfinished thoughts.',
    site: site!,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      categories: post.data.tags,
      link: postHref(post),
    })),
    customData: '<language>en</language>',
  });
};
