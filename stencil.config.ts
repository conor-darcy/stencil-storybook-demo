import { Config } from "@stencil/core";
import { postcss } from "@stencil-community/postcss";
import autoprefixer from "autoprefixer";
import postcssNesting from "postcss-nesting";

export const config: Config = {
  namespace: "stencil-storybook-demo",
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader",
    },
    {
      type: "dist-custom-elements",
    },
    {
      type: "docs-readme",
    },
    {
      type: "www",
      serviceWorker: null, // disable service workers
    },
    {
      type: "docs-json",
      file: ".storybook/stencil-docs.json",
    },
  ],
  plugins: [
    postcss({
      plugins: [autoprefixer(), postcssNesting()],
    }),
  ],
};
