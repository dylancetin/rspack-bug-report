import { defineConfig } from "@rsbuild/core";
export default defineConfig({
  html: {
    template: "template.html",
  },
  output: {
    inlineScripts: true,
  },
});
