export async function apiPost(path: string, body: any = {}) {
  const API_URL = process.env.WORDPRESS_API_URL + path;

  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });

  return res.json();
}
