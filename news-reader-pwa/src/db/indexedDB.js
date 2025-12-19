import { openDB } from 'idb'

export const dbPromise = openDB('news-db', 1, {
  upgrade(db) {
    db.createObjectStore('bookmarks', { keyPath: 'url' })
    db.createObjectStore('syncQueue', { autoIncrement: true })
  }
})
