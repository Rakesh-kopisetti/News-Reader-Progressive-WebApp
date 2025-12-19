import { useEffect, useState } from 'react'

export default function NetworkStatus() {
  const [online, setOnline] = useState(navigator.onLine)

  useEffect(() => {
    window.addEventListener('online', () => setOnline(true))
    window.addEventListener('offline', () => setOnline(false))
  }, [])

  return (
    <div>
      {online ? '🟢 Online' : '🔴 Offline'}
    </div>
  )
}
