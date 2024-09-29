// @ts-check
import purgecss from "astro-purgecss";

import playformCompress from "@playform/compress";

import playformInline from "@playform/inline";

import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
export const integrations = [
  robotsTxt(),
  sitemap(),
  purgecss(),
  playformInline({
    Critters: {
      publicPath: "/varstins",
      logLevel: "info",
    },
  }),
  playformCompress(),
];
