import React from "react";

import { addDecorators } from "@storybook/react";
import Center from "../src/components/Center/Center";
import { ThemeProvider, theme, CSSReset, Box } from "@chakra-ui/core";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },

  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

/* addDecorators((story) => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <Box m="4">{story()}</Box>
  </ThemeProvider>
)); */

export const decorators = [
  (story) => (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Box m="4">{story()}</Box>
    </ThemeProvider>
  ),
];
