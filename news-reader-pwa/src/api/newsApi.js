const API_KEY = import.meta.env.VITE_NEWS_API_KEY

export async function fetchNews() {
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=technology&language=en&apiKey=${API_KEY}`
  )
  const data = await res.json()
  return data.articles
}
