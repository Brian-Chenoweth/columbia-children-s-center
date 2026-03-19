# Columbia Children's Center Website

This repository contains the marketing website for Columbia Children's Center, a preschool and child care center in Santa Maria, California. It is a Gatsby 3 site that serves public-facing program pages, center information, parent resources, a small MDX-backed blog, and local SEO content such as the Santa Maria preschool landing page.

## What The Project Does

- Publishes a static website for `https://columbiachildrenscenter.com`
- Presents preschool program pages for multiple age groups
- Shows center information, team details, philosophy, parent resources, and careers content
- Renders blog content from local `.mdx` files
- Adds SEO metadata and JSON-LD structured data through a shared layout component
- Links visitors to external enrollment/contact flows hosted by Procare

## Stack And Architecture

- Framework: Gatsby `^3.9.0`
- UI: React `17`, React DOM `17`
- Styling: SCSS modules via `gatsby-plugin-sass`
- Images:
  - `gatsby-plugin-image` / `StaticImage`
  - `gatsby-image` with GraphQL image queries in some older components
- Head/SEO: `react-helmet`
- Content sources:
  - File-based Gatsby pages under `src/pages`
  - MDX blog posts under `blog/`
  - JSON data under `src/data/`
- UI libraries:
  - `react-bootstrap` + Bootstrap CSS for navigation
  - MUI icons in the footer
  - `react-slick` for program image sliders
  - `react-scroll-parallax` on the homepage
- Deployment-related pieces:
  - `gatsby-plugin-netlify`
  - `netlify.toml`
  - `src/_headers`

### Runtime Shape

- Gatsby builds pages directly from files in `src/pages`
- Shared site chrome and SEO live in `src/components/layout.js`
- Site-wide metadata is configured in `gatsby-config.js`
- Blog posts are queried from `blog/*.mdx` and rendered on `/blog/`
- Static files in `static/` are copied directly into the built site
- During `gatsby develop`, requests to `/api/*` are proxied to `https://live.childcarecrm.com/import/webImportReceiver.php`

## Prerequisites

- Node.js and npm installed locally
- A Node version compatible with Gatsby 3 and the dependencies in `package.json`

The repository does not include `.nvmrc`, `.node-version`, or an `engines` field in `package.json`, so the exact Node version is not pinned in the repo.

## Install / Setup

1. Install dependencies:

```bash
npm install
```

2. Start the Gatsby development server:

```bash
npm run develop
```

3. Open the local site:

- Default Gatsby dev URL: `http://localhost:8000`
- GraphiQL (usually): `http://localhost:8000/___graphql`

## Local Development Commands

```bash
npm run develop   # start Gatsby dev server
npm run start     # alias of `gatsby develop`
npm run build     # create a production build in `public/`
npm run serve     # serve the most recent production build
npm run clean     # clear Gatsby caches and generated artifacts
```

## Build / Test / Deploy

### Build

```bash
npm run build
```

This runs `gatsby build` and outputs the production site to `public/`.

### Serve A Production Build Locally

```bash
npm run serve
```

### Tests

No automated test scripts are configured in `package.json`.

### Deploy

There is no deploy script in `package.json`.

What is verifiable from the repo:

- `gatsby-plugin-netlify` is installed
- `netlify.toml` exists
- `src/_headers` exists
- `static/robots.txt` and `static/ads.txt` are included in the built output

From the code alone, the exact production deployment workflow is not fully documented. A standard Gatsby deployment would build the site with `npm run build` and publish the `public/` directory.

## Required Environment Variables

No required application environment variables are currently referenced in the source code.

The repo does not contain `.env` files, and a search of the source did not find app-level reads of:

- `process.env.*`
- `GATSBY_*`
- `REACT_APP_*`
- `import.meta.env`

## Important Directories And Files

### Root

- `gatsby-config.js`: site metadata, plugins, sitemap config, Google Analytics config, and the dev proxy
- `package.json`: dependencies and available npm scripts
- `netlify.toml`: Netlify header config
- `static/`: files copied directly to the built site
- `blog/`: MDX blog content

### Source

- `src/pages/`: file-based Gatsby routes
  - `index.js`: homepage
  - `preschool-santa-maria.js`: local SEO landing page
  - `preschool.js`, `young-toddler.js`, `early-years.js`, `kindergarten-readiness.js`: program pages
  - `about/`: about pages
  - `parents/index.js`: parent resources
  - `careers.js`: careers page
  - `blog.js`: MDX blog listing/rendering page
- `src/components/`: shared layout, navigation, footer, program sections, sliders, tuition, staff cards
- `src/components/styles/`: shared SCSS modules
- `src/pages/styles/`: page-level SCSS modules
- `src/data/adayin/`: JSON schedules used in program pages
- `src/data/careers.json`: career data file currently present in the repo
- `src/images/`: logos, staff photos, program images, homepage images, icons
- `src/documents/`: PDFs and other parent-facing documents
- `src/_headers`: response header rules consumed by Netlify/Gatsby Netlify plugin

## External Services And Content

- Google Analytics via `gatsby-plugin-google-analytics`
  - Tracking ID is configured directly in `gatsby-config.js`
- Procare enrollment/contact form links are hard-coded in multiple pages/components
- A Google Docs parent handbook link is hard-coded in the parents page and navigation
- The Gatsby develop server includes a proxy for `childcarecrm.com`, but there is no current frontend code in `src/` that references `/api`

## Known Gaps / TODOs Verified From The Code

- The repository still had the default Gatsby starter README before this rewrite.
- No automated tests are configured.
- No lint script or formatting script is configured in `package.json`.
- Node/npm versions are not pinned in the repo.
- `gatsby build` currently emits repeated SSR warnings about wrapping the app in an `<SSRProvider>`.
- `src/data/careers.json` exists, but the data-driven rendering in `src/pages/careers.js` is commented out, so the page currently uses hard-coded content instead.
- `gatsby-plugin-google-gtag` is installed in `package.json`, but it is not configured in `gatsby-config.js`.
- The develop-time `/api` proxy is configured in `gatsby-config.js`, but no current source file references `/api`, so its present runtime use is unclear from the repo alone.

## Notes On Unclear Areas

- The exact hosting provider and deployment trigger are not fully documented in the repo, although Netlify-related configuration is present.
- The repo does not document which Node version the production environment is expected to use.
