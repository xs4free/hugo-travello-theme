# hugo-travello-theme
A theme for Hugo static site generator

loosly based on:
- [Activello theme][2] by ColorLib.com
- [blog theme][3] from Bootstrap

Special thanks to the following websites/blogposts:
- [Realfavicongenerator.net][12] for generating favico's and head-html.
- [Hugo Easy Gallery][13] by Li-Wen Yip
- [Hugo Page Resources][14] by Regis Philibert
- [How to create a full-page hero image (HTML & CSS)][17] by Ethan

#TODO
- [ ] Add form-loading elements to post-comment
- [ ] Improve layout post-comment below post and response (dialog) after submitted comment
- [ ] Add widget newest comments
- [ ] Replace [img-alt with figcaption-tag][9]
- [ ] Add widget newest posts
- [ ] Add [archive pages][4] and update Archive-widget
- [ ] Add [(client side) search functionality][7]
- [ ] Add [related content][1]
- [ ] Add share on social media links
- [ ] Update links in Social Media widget
- [ ] Display categories on single blog page
- [ ] Add widget categories
- [ ] Add widget subscribe to this blog
- [ ] Add translations using i18n like [hugo-universal-theme][5]
- [ ] Add privacy policy
- [ ] Add cookie consent
- [ ] Add scroll-to-top button on bottom-right of every page
- [ ] Add [roles][6] to html-elements
- [ ] Add Facebook OpenGraph tags to head
- [ ] Remove https://www.google.com/recaptcha/api.js from List.html scriptblock (only needed for single.html) 
- [ ] Add Gulp + Webpack using [Victor Hugo][8] (alsof checkout deployment to Netlify)
- [ ] Add minimal config.toml settings to readme
- [ ] When multiple posts on the home-page contain a gallery, only shown images from one post in PhotoSwipe after clicking on a image
- [ ] Add notify me support for comments
- [ ] Implement [Facebook rectangular gallery style][16] image gallery
- [ ] Add Disqus comments
- [x] ~~Add post banner~~
- [X] ~~Add homepage content (instead of /posts)~~
- [X] ~~Disable featured posts~~
- [X] ~~Disable categories on list-page~~
- [X] ~~Hide subscribe link on list-page~~
- [X] ~~Change blog title on list-page and add subtitle~~
- [X] ~~Replace big featured post with image slider (flexslider)~~
- [x] ~~Display categories in list above blog-items (works as a nice seperator between items)~~
- [X] ~~Change fonts to match [Activello theme][2]~~
- [X] ~~Add RSS feed (also in widget)~~
- [X] ~~Add comments (extract from wordpress-export.xml)~~
- [X] ~~Fix Javascript error on Index-page in Staticman.js on line 9: Uncaught TypeError: Cannot set property 'disabled' of null~~
- [X] ~~[Fix time below comments (no seperator between minutes and seconds)][11]~~
- [X] ~~Add favicon.ico to prevent 404 error in Chrome~~
- [X] ~~Add website ico and Apple ico to head~~
- [X] ~~Add post image gallery (extract from wordpress-export.xml) using [Hugo Easy Gallery][13]~~
- [x] ~~Move banner property in frontend-matter to resources~~
- [x] ~~Resize banner using [Hugo image processing][15]~~
- [x] ~~Fix hiding gallery titles when multiple rows and last row contains less than 3 images~~
- [x] ~~Fix clicking on image in gallery on page/2 and onwards (only works on home-page now)~~
- [x] ~~Fix comments when using Hugo Page Resource (no comments are visible)~~
- [x] ~~Hide posts with 'draft: true'~~
- [x] ~~Update [404.html page][10]~~
- [x] ~~Add comment-count below blogs on list-page~~
- [x] ~~Add post new comment form~~
- [x] ~~Enable reply to comment button besides comments~~

[1]: https://gohugo.io/content-management/related/
[2]: https://github.com/puikinsh/activello
[3]: https://getbootstrap.com/docs/4.1/examples/blog/
[4]: https://blog.atj.me/2017/10/generate-yearly-and-monthly-archive-pages-with-hugo-sections/
[5]: https://github.com/devcows/hugo-universal-theme
[6]: https://stackoverflow.com/questions/10403138/what-is-the-purpose-of-the-role-attribute-in-html
[7]: https://gist.github.com/eddiewebb/735feb48f50f0ddd65ae5606a1cb41ae#sample
[8]: https://github.com/netlify/victor-hugo
[9]: https://www.junian.net/hugo-image-figure-wrap/
[10]: https://gohugo.io/templates/404/
[11]: https://gohugohq.com/howto/hugo-dateformat/
[12]: https://realfavicongenerator.net
[13]: https://github.com/liwenyip/hugo-easy-gallery/
[14]: https://regisphilibert.com/blog/2018/01/hugo-page-resources-and-how-to-use-them/
[15]: https://gohugo.io/content-management/image-processing/
[16]: https://en.support.wordpress.com/gallery/#examples-of-gallery-styles
[17]: https://codetheweb.blog/2017/12/07/fullscreen-image-hero/