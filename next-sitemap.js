/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.jamessingleton.me',
  generateRobotsTxt: true, // (optional)
  // ...other options
}
