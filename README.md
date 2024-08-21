<!--
Code below will create a centered README image that can point at any available public logo or favicon.
<p align="center"><img src="./public/logos/path-to-logo.png" alt="Logo" width="150px" ></p>
-->

# INSERT_TITLE

## Description

INSERT_DESCRIPTION

## Development

Tech stack:

- React + Vite
- Typescript + ESLint
- Chakra UI
- Framer Motion
- Jotai

To run this locally:

1. Clone this repository
2. Run `npx npm-check-updates -u` (optional)
3. Run `npm install`
4. Run `npm run dev`
5. Open [http://localhost:5173](http://localhost:5173) with your browser

Very simple to deploy with Cloudflare Pages or Replit.

### Template Text

This template contains a few values that can be replaced through global search.

Manually reviewing each entry is recommended.

- INSERT_TITLE
- INSERT_DESCRIPTION
- INSERT_URL

### Custom Theme

- `#ffffff` (primary color)

theme file has color schemes (Chakra style)

### Custom Logo

Custom logos are stored in the `public/logos` directory. To add a new logo, follow these steps:

- obtain the image for the desired custom logo
- store the image in the `public/logos` directory
- update the `index.html` file to reference the new logo

### Custom Icons

Custom icons are stored in the `public/` directory. To add a new icon, follow these steps:

- obtain the image for the desired custom icon
- convert the image to the required files [(favicon-generator)](https://www.favicon-generator.org/)
- overwrite the files in the `public/` directory

As long as the files are named correctly, the icon will automatically be updated in all locations.

If there are any issues with the icon, check the following:

- the icon exists in the `public/` directory
- the icon is referenced in the `index.html` file

### Custom Metadata

Hey Meta generator

### Custom Fonts

Custom fonts are stored in the `public/fonts` directory. To add a new font, follow these steps:

- obtain the desired custom font files
- convert the files to woff/woff2 format [(transfonter)](https://transfonter.org/)
- store the woff/woff2 files in the `public/fonts` directory

To use the custom font, follow these steps:

- update `index.html` to preload the `woff2` file
- update `src/fonts.tsx` to include the font in the `fontFaces` array
  - `font-family` is the name of the font (used by the theme)
  - `src` is the path to the `woff2` and `woff` files
- update `src/theme.ts` to include the font in the `fonts` object
