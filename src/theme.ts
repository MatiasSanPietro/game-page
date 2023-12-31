import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({
  config,
  // colors: {
  //   gray: {
  //     50: "#faf5ff",
  //     100: "#e9d8fd",
  //     200: "#d6bcfa",
  //     300: "#b794f4",
  //     400: "#9f7aea",
  //     500: "#805ad5",
  //     600: "#6b46c1",
  //     700: "#553c9a",
  //     800: "#44337a",
  //     900: "#322659",
  //   },
  // },
});

export default theme;
