const { getBlogs } = require('./blogs')
const getsiteMap = async () => {
  const blogs = await getBlogs()
  const sitemaps = blogs.reduce((groups, blog) => {
    const yearOfDate = new Date(blog.createdAt).getFullYear() // its have to createdAt property,
    // after create sitemap index sorted with year for a good sorting, use required updatedAt property all other soring
    // process remaining
    if (!groups[yearOfDate]) {
      groups[yearOfDate] = []
    }
    const dateOfMonth = `${yearOfDate}/${
      new Date(blog.updatedAt).getMonth() + 1 // getMonth started from 0
    }`
    if (
      groups[yearOfDate].length > 0 &&
      groups[yearOfDate][groups[yearOfDate].length - 1].path ===
        `${dateOfMonth}.xml` // if exist month of sitemap index then we know that and add new blog slug to its month index
    ) {
      groups[yearOfDate][groups[yearOfDate].length - 1].routes.push(
        `blog/${blog.slug}`
      )
    } else {
      // if do not created any required month of year we create this one
      groups[yearOfDate].push({
        path: `${dateOfMonth}.xml`, // getMonth started from 0
        routes: [`blog/${blog.slug}`],
        lastmod: `${blog.updatedAt}`,
        exclude: ['**/**'],
      })
    }

    return groups
  }, {})

  const sortAndGroupSiteMap = Object.keys(sitemaps)
    .map((date) => {
      return {
        path: `/${date}.xml`,
        sitemaps: [...sitemaps[date]],
        lastmod: sitemaps[date].sort(
          (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
        )[0].lastmod, // after ordering by date decreasing then we need last last modified and its first record
      }
    })
    .sort(
      (a, b) => new Date(b.lastmod) - new Date(a.lastmod) // (b - a) sorted newest post place to first for year of lastmod
    )
  sortAndGroupSiteMap.push({
    path: '/main.xml',
    lastmod: sortAndGroupSiteMap[0].lastmod, // we know need to pick up first lastmod in decreased sorting from all nested sitemap
    exclude: ['**/admin/**'],
  })
  const siteMapFinish = {
    path: '/sitemap.xml',
    hostname: `${process.env.domain}`,
    exclude: ['**/admin/**'],
  }
  siteMapFinish.sitemaps = sortAndGroupSiteMap
  return siteMapFinish
}

exports.getsiteMap = getsiteMap

const sitemap = async (req, res) => {
  const siteMap = await getsiteMap()
  res.json(siteMap)
}
exports.sitemap = sitemap
