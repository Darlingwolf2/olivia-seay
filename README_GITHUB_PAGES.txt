OLIVIA SEAY ARTIST WEBSITE — GITHUB PAGES PACKAGE

Upload the CONTENTS of this folder to the ROOT of the GitHub repository
darlingwolf2/olivia-seay (not the enclosing folder itself).

This package has paths configured for:
https://darlingwolf2.github.io/olivia-seay/

Files:
- index.html — homepage
- work/index.html — Work page
- about/index.html — About page
- assets/ — image assets
- *.css and *.js — site styling and behavior

Content notes:
- artworks.js holds every work. The Work page shows all of them in order.
  The homepage shows only the works that have a "home" number, in that order.
- Artwork "Ceiling zero" is still a placeholder (no image or details yet).
  To fill it in, add the image to /assets and add  image: "/olivia-seay/assets/filename.jpg"
  plus the dimensions, medium and date to its line in artworks.js.

If you later connect a custom domain, the /olivia-seay/ path prefix will need
to be removed from the HTML paths (or the site configured for the domain root).
