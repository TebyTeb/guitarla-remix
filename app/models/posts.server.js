export async function getPosts() {
  const response = await fetch(`${process.env.API_URL}/posts?populate=imagen`)
  return await response.json()
}