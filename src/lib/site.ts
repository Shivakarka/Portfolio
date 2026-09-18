/**
 * Canonical site origin — the host that actually serves the site with a 200.
 *
 * `shivakarka.tech` (apex) 308-redirects here, so every absolute URL we emit
 * (metadataBase, canonical, sitemap, robots.txt) must use this host.
 */
export const siteUrl = "https://www.shivakarka.tech";