import { getCollection, type CollectionEntry } from 'astro:content';

export type Lang = 'en' | 'es';

export async function getPosts(lang?: Lang) {
  return (await getCollection('writing', ({ id, data }) => !data.draft && (!lang || id.startsWith(`${lang}/`))))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function postHref(post: CollectionEntry<'writing'>) {
  const [lang, slug] = post.slug.split('/');
  return lang === 'en' ? `/writing/${slug}/` : `/${lang}/writing/${slug}/`;
}
