import { defineCustomElements } from "../loader";
import { setStencilDocJson } from "@pxtrn/storybook-addon-docs-stencil";
import docJson from "./stencil-docs.json";
import { extractArgTypesFactory } from "@pxtrn/storybook-addon-docs-stencil";

import "../dist/tokens/tokens.css";

defineCustomElements();

if (docJson) setStencilDocJson(docJson);

export const parameters = {
  actions: { argTypesRegex: "^on.*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    hideNoControlsWarning: true,
  },
  docs: {
    extractArgTypes: extractArgTypesFactory({ dashCase: true }),
  },
};
