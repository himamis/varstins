// @ts-check
import { defineConfig } from "astro/config";

import { integrations } from "./common.config.mjs";

export default defineConfig({
  site: "https://www.varstins.ro/",
  integrations: integrations,
});
