# gatsby-plugin-error-pages
Create custom 403, 500, or any HTTP error code pages with Gatsby, just like Gatsby does for 404 pages.

### Usage
#### Install
First, install the plugin.

`npm install --save gatsby-plugin-error-pages`

#### Config
Second, set up the `gatsby-config.js` with the plugin.
```javascript
module.exports = {
  plugins: [
    `gatsby-plugin-error-pages`
  ]
}
```

#### Pages
Lastly, create files in your `pages/` directory that are _valid HTTP error codes_ (100 - 599).  **Note:** this plugin skips 404 since Gatsby already does it.
```
-- src/
---- pages/
------ 403.js
------ 500.js
------ ... other pages
```

#### Routes
Note that this plugin does not stop the route from automatically being created, as Gatsby does.  So adding a `500.js` will result in a `/500.html` and a `/500/`.  This route can still be used for programmatic navigation if needed in your site.

### About
Normally, for any file listed in the `src/pages/` directory, Gatsby creates a route for that page, like `src/pages/search.js` becomes `/search/` when your site is published.  One exception to this is the `404` page, which Gatsby grabs and also creates a `/404.html` file at the root of the `public` directory.  Most servers automatically look for HTTP error codes at their root, so if it returns 404, then the `404.html` is there and served.

This plugin does the same thing for whatever other HTTP error codes you wish.  So if you want a custom 500 error page, add a `500.js` in pages, and Gatsby will generate a `500.html` at the root, which your server should serve in case of a 500 error.