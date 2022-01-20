export default (context, inject) => {
  const dynamicMetaCreator = (metaInfos) => {
    return [
      // Blog
      {
        hid: 'blog_description',
        name: 'description',
        content: metaInfos.limitedTitleForDescription,
      },
      // Twitter
      {
        hid: 'twitter_title',
        name: 'twitter:title',
        content: process.env.NAV_TITLE,
      },
      {
        hid: 'twitter_description',
        name: 'twitter:description',
        content: metaInfos.limitedTitleForDescription,
      },
      {
        hid: 'twitter_image',
        name: 'twitter:image',
        content: metaInfos.image,
      },
      // Facebook
      {
        hid: 'og_title',
        property: 'og:title',
        content: process.env.NAV_TITLE,
      },
      {
        hid: 'og_description',
        property: 'og:description',
        content: metaInfos.limitedTitleForDescription,
      },
      {
        hid: 'og_image',
        property: 'og:image',
        content: metaInfos.image,
      },
      {
        hid: 'og_url',
        property: 'og:url',
        content: `${process.env.domain}${metaInfos.path}`,
      },
      {
        hid: 'og_site_name',
        property: 'og:site_name',
        content: `${process.env.domain}`.replace(/https?:\/\//g, ''),
      },
    ]
  }
  inject('dynamicMetaCreator', dynamicMetaCreator)
  // context.$dynamicMetaCreator = dynamicMetaCreator // For Nuxt <= 2.12
}
