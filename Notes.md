# General Notes

## Pre-rendering and Data Fetching

- Next.js pre renders all javascript and converts it into HTML
  - This allows you to still view the site even if JS is disabled
  - Also allows for faster load times
- Next.js has two forms of pre rendering
  - Static Generation
    - Generates the HTML at build time
  - Server-side Rendering
    - Generates the HTML on each request
- Next.js allows you to choos which pre rendering you want to do on a page by page basis! How freaking neat.
- Recommended times for Static Generation
  - Whenever possible, allows the page to be built once and served by CDN, which makes it faster
- Recommended times for Server-side
  - Whenever you have frequently updated data, even though it will be slow it will ensure that the page stays up to date with the latest data

- SWR is used for fetching data on the client side. Created by next.js team and handles caching, revalidation, focus, tracking, refetching on interval and more.
  - Should be used in private user specific pages


## Dynamic Routes

- Allows you to create dynamically named url routes
- Check out [id].js for an example of this being used


## Api Routes

- Checkout pages/api for more info and examples
- DO NOT FETCH Api Route from getStaticProps or getStaticPaths
- One use case would be creating a post method that can get called from a form that will save the data to the database. This route will not be apart of client bundle so it is safe.
- API routes can be dynamic

## Custom Fonts

- To add custom fonts you must install `@next/font`
- Checkout the custom font added in the `_app.js` file
- Some things to note is that you can use `@next/font/google` to use any google font without having to download
