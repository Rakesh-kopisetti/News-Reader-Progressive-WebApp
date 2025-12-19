import { useEffect, useState } from 'react'
import { fetchNews } from '../api/newsApi'

export default function NewsList() {
  const [articles, setArticles] = useState([])
  const [offline, setOffline] = useState(!navigator.onLine)

  useEffect(() => {
    window.addEventListener('online', () => setOffline(false))
    window.addEventListener('offline', () => setOffline(true))

    if (navigator.onLine) {
      fetchNews().then(setArticles)
    }
  }, [])

  if (offline && articles.length === 0) {
    return <p>You are offline. No cached news available.</p>
  }

  return (
    <ul>
      {articles.map((a, i) => (
        <li key={i}>
          <h4>{a.title}</h4>
          <button>Bookmark</button>
        </li>
      ))}
    </ul>
  )
}
