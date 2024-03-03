import { Global, css } from "@emotion/react";

const dmSans = css`
  @font-face {
    font-family: "DM Sans 9pt";
    src: url("/fonts/DMSans-9ptRegular.woff2") format("woff2"),
      url("/fonts/DMSans-9ptRegular.woff") format("woff");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: "DM Sans 9pt";
    src: url("/fonts/DMSans-9ptItalic.woff2") format("woff2"),
      url("/fonts/DMSans-9ptItalic.woff") format("woff");
    font-weight: normal;
    font-style: italic;
    font-display: swap;
  }
`;

export default function CustomFonts() {
  return <Global styles={dmSans} />;
}
