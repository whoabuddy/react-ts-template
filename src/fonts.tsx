import { Global, css } from "@emotion/react";

const customFonts = css`
  @font-face {
    font-family: "Santa Catarina Regular";
    src: url("/fonts/SantaCatarina-Regular.woff2") format("woff2"),
      url("/fonts/SantaCatarina-Regular.woff") format("woff");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
`;

export default function CustomFonts() {
  return <Global styles={customFonts} />;
}
