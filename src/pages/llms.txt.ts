import type { APIRoute } from 'astro';
import { getPosts, postHref } from '../utils/posts';

export const GET: APIRoute = async ({ site }) => {
  const posts = await getPosts();
  const date = (d: Date) => d.toISOString().slice(0, 10);

  const lines = [
    '# Yatan Blumenthal Vargas',
    '',
    '> Operator and builder working on brain health, practical products, and human systems. Based in Cartagena, Colombia. Writes about honing agency — for yourself, your kids, and your aging parents.',
    '',
    'Currently Operations Steward at CerebrumDAO (biotech funding focused on neurodegeneration), building small products at Guacamaya Lab, running Casa Gaviota in Barú, Colombia, and supporting founders through Founder Institute. Previously COO at BetahausX and co-founder of Hardware.co.',
    '',
    '## Essays & Writing',
    '',
    ...posts.map((post) => {
      const lang = post.id.split('/')[0];
      const desc = post.data.description ? `: ${post.data.description}` : '';
      return `- [${post.data.title}](${new URL(postHref(post), site)}) (${date(post.data.date)}, ${lang})${desc}`;
    }),
    '',
    '## Links',
    '',
    `- [Home (English)](${new URL('/', site)})`,
    `- [Inicio (Español)](${new URL('/es/', site)})`,
    `- [Writing archive](${new URL('/writing/', site)})`,
    `- [RSS (English)](${new URL('/rss.xml', site)})`,
    `- [RSS (Español)](${new URL('/es/rss.xml', site)})`,
    '- [GitHub](https://github.com/yatanco)',
    '- [LinkedIn](https://linkedin.com/in/yatanblumenthal)',
    '- [X](https://x.com/yatanco)',
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
