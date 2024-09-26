// @ts-check
import { defineConfig } from 'astro/config';

import purgecss from 'astro-purgecss';

import playformCompress from '@playform/compress';

import playformInline from '@playform/inline';

// https://astro.build/config
export default defineConfig({
  site: 'https://himamis.github.io/varstins',
  integrations: [
    purgecss(), 
    playformInline({
    Critters: {
      logLevel: "info"
    }
  }), 
  playformCompress()
]
});