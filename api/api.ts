export async function api(path : string) {
  const API_URL = process.env.WORDPRESS_API_URL+path;
  const res = await fetch(API_URL, {
    next: {revalidate:60}
  })
  const globalData = await res.json()
  return globalData
}