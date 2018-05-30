# How To Update schmitzlab.info From ButterCMS

## Pages

Pages are categorized into `Primary Page`, `Page`, and `Home`. When creating new pages, it's recommended to only use the `Page` category to create a generic page. New pages created with `Home` or `Primary Page` will not be displayed unless manually configured on the frontend via Vue.

### Page

Every `page` has the following:
* title - The title that's shown on the browser tab
* content - Primary content on the page. Can add images, embeds, links, and more.
* Every page can also have an optional featured image. Even though you can add more than one in ButterCMS, only the first featured image will be displayed. *You cannot have more than one featured image*.

New pages will automatically be displayed on the `More` navigation tab.

### Homepage

The `Homepage` can have multiple slides with the same qualities as `featured image` from `page`.

Do not create more pages of type `Homepage`. They will not displayed.

### Primary Page
Do not create more pages of type `Primary Page`.

## Blog Posts
Blog posts are displayed on the `/blog` section of the site.

### Categories and Tags
Categories and tags from blog posts automatically generate pages under the `/blog/category/:category` and `/blog/tag/:tag` where `:tag` and `:category` are the name of your tag in slug form.

### Blog About
On the blog, there is an about description on the sidebar. You can edit the `title` and `description` from the `Blog` workspace.

## Logo and Footer Links
You can customize the Logo and Footer Links from the `Logo and Footer`.

## Annoucements, Publications, People, and Projects
You can add to these collections under the `Collections` workspace. These collections are shown on the homepage as well as their individual primary pages.

### Limits
You can also set limits on how many items are displayed on the homepage for each under the `Collections` workspace.


For more information, contact kevin.a.cunanan@gmail.com.
