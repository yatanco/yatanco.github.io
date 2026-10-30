import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://yatan.co',
  output: 'static',
  integrations: [sitemap({ filter: (page) => !page.startsWith('https://yatan.co/cal') })],
});