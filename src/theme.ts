import {
  createMultiStyleConfigHelpers,
  extendTheme,
  type StyleFunctionProps,
  type ThemeConfig,
} from "@chakra-ui/react";
import { tabsAnatomy } from "@chakra-ui/anatomy";
import { mode } from "@chakra-ui/theme-tools";

// Chakra theme configuration

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
  cssVarPrefix: "aiBTC",
};

const colors = {
  orange: {
    50: "#ffeddb",
    100: "#ffd4b0",
    200: "#fcbc81",
    300: "#faa852",
    400: "#f79621",
    500: "#de6f08",
    600: "#ac4a03",
    700: "#7c2c01",
    800: "#4c1500",
    900: "#1e0200",
  },
  darkbg: "#110a01",
};

const fonts = {
  heading: "DM Sans 9pt, Open Sans, sans-serif",
  body: "DM Sans 9pt, Open Sans, sans-serif",
};

const globalStyles = {
  "body, html": {
    bg: "darkbg",
  },
  ".spin": {
    animation: "spin 1s linear infinite",
  },
  "@keyframes spin": {
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
  },
};

const linkStyles = {
  baseStyle: (props: StyleFunctionProps) => ({
    color: mode("orange.600", "orange.300")(props),
    _hover: {
      textDecoration: "underline",
    },
  }),
};

const tabsStyleHelpers = createMultiStyleConfigHelpers(tabsAnatomy.keys);

// Define the base component styles
const tabsBaseStyle = tabsStyleHelpers.definePartsStyle({
  tab: {
    fontWeight: "semibold",
    _selected: (props: StyleFunctionProps) => ({
      borderTop: "5px solid",
      color: mode("orange.600", "orange.300")(props),
    }),
  },
});

// Export the component theme
export const tabsTheme = tabsStyleHelpers.defineMultiStyleConfig({
  baseStyle: tabsBaseStyle,
});

const theme = extendTheme({
  config,
  colors,
  components: {
    Link: linkStyles,
    Tabs: tabsTheme,
  },
  fonts,
  styles: {
    global: globalStyles,
  },
});

export default theme;
