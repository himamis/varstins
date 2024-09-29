// @ts-check
import { defineConfig } from "astro/config";

import { integrations } from "./common.config.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://himamis.github.io",
  base: "varstins",
  integrations: integrations,
});
