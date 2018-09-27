let pagesCreated = ['/404.html'];
exports.onCreatePage = ({ page, actions }) => {
  // See if page already exists (we ignore 404 since Gatsby already does this).
  if(pagesCreated.includes(page.path)) return;

  // Regex to check if valid HTTP code (100-599).
  const validHTTPRegex = /^[1-5][0-9][0-9]$/;
  const cleanHTTPCode = page.path.replace(/\//g, '');

  // If page is a valid HTTP code, create it.
  if (validHTTPRegex.test(cleanHTTPCode)) {
    actions.createPage({
      ...page,
      path: `/${cleanHTTPCode}.html`,
    });
    // And push to array of created pages.
    pagesCreated.push(page.path);
  }
};