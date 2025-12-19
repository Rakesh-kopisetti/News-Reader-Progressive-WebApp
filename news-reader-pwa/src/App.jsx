import NetworkStatus from './components/NetworkStatus'
import NewsList from './components/NewsList'

export default function App() {
  return (
    <>
      <h1>News Reader PWA</h1>
      <NetworkStatus />
      <NewsList />
    </>
  )
}
