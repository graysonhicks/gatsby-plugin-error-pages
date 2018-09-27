# gatsby-plugin-error-pages
Create custom 403, 500, or any HTTP error code pages with Gatsby, just like Gatsby does for 404 pages.

### Usage
#### Install
First, install the plugin.

`npm install --save gatsby-plugin-error-pages`

#### Config
Second, set up the `gatsby-config.js` to tell Gatsby what error codes you would like to create custom pages for.
```javascript
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-error-pages`,
      options: {
        // This is a required array of HTTP error code strings and will generate a 403.html and 500.html at the root of the public/ directory.
        pages: ['403', '500']
      }
    }
  ]
}
```

#### Pages
Lastly, create files in your `pages/` directory that match the `pages` listed in `gatsby-config.js`.

```
-- src/
---- pages/
------ 403.js
------ 500.js
------ ... other pages
```

### About
Normally, for any file listed in the `src/pages/` directory, Gatsby creates a route for that page, like `src/pages/search.js` becomes `/search/` when your site is published.  One exception to this is the `404` page, which Gatsby grabs and also creates a `/404.html` file at the root of the `public` directory.  Most servers automatically look for HTTP error codes at their root, so if it returns 404, then the `404.html` is there and served.

This plugin does the same thing for whatever other HTTP error codes you wish to list.  So if you want a custom 500 error page.  Add 500 to the config and a `500.js` in pages, and Gatsby will generate a `500.html` at the root, which your server should serve in case of a 500 error.