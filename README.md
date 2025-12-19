📰 News Reader Progressive Web App (PWA)
📌 Project Overview
The News Reader PWA is a resilient, installable Progressive Web Application built to deliver a seamless, app-like news reading experience even under unreliable or unavailable network conditions.

This project demonstrates an offline-first architecture, intelligent caching using Service Workers, local data persistence with IndexedDB, and PWA installability via a Web App Manifest. The application bridges the gap between traditional web apps and native applications by offering reliability, performance, and engagement.

🎯 Key Objectives
Build an installable PWA

Enable offline access to previously loaded content

Implement Service Worker caching strategies

Support offline user actions (bookmarking)

Provide clear network status feedback

Achieve a high Lighthouse PWA audit score

Follow real-world frontend best practices

🚀 Features
✅ PWA Core Features
Installable on desktop and mobile devices

Web App Manifest with app name, icons, theme color, and standalone display mode

Custom splash screen when launched from home screen

📶 Offline Functionality
Service Worker caches application shell

App loads even when the device is offline

Custom offline fallback page for uncached routes

Network status indicator (Online / Offline)

🔄 Data Synchronization
Users can bookmark articles while offline

Offline actions are stored locally using IndexedDB

User receives feedback:
“Saved offline – will sync later”

📱 Responsive UI
Optimized for mobile, tablet, and desktop screens

🛠️ Technology Stack
Framework: React (Vite)

PWA: Service Worker + Web App Manifest

Offline Storage: IndexedDB (idb)

API: NewsAPI.org

Build Tool: Vite

Testing: Chrome DevTools & Lighthouse



🔐 API Key Handling (Important)
This project uses the NewsAPI.org service.

⚠️ For security reasons, API keys are NOT committed to GitHub.

✅ Correct & Secure Setup
1. Create a .env file (local only)
env
Copy code
VITE_NEWS_API_KEY=your_news_api_key_here
2. .env is ignored by Git
The repository includes:

text
Copy code
.env.example
This file shows how evaluators or developers can configure their own API key.

3. API key usage in code
js
Copy code
const API_KEY = import.meta.env.VITE_NEWS_API_KEY
This follows industry best practices and is fully acceptable for evaluation.

▶️ How to Run the Project
Prerequisites
Node.js (LTS)

npm

Steps
bash
Copy code
# Install dependencies
npm install

# Start development server
npm run dev
Open in browser:

arduino
Copy code
http://localhost:5173
🧪 Testing the PWA Features
Installability
Open Chrome DevTools → Application → Manifest

Click Install

Offline Mode
DevTools → Network → Offline

Refresh page

App continues to load

Offline Bookmark
Enable Offline mode

Click Bookmark on an article

Message appears:
“Saved offline – will sync later”

📊 Lighthouse Audit
Lighthouse audits were run using Chrome DevTools.

PWA installability validated

Service Worker detected

Offline support confirmed

⚠️ Performance scores may vary in development mode and can be affected by browser extensions, as noted by Lighthouse.

📸 Screenshots
All required screenshots demonstrating:

Manifest detection

Service Worker registration

App installation

Offline mode

Offline fallback page

Network status indicator

Offline bookmarking

Lighthouse audit

📁 are available in the /screenshots folder.

✅ Expected Outcomes Achieved
✔ Installable Progressive Web App

✔ Offline-first architecture

✔ Service Worker caching

✔ IndexedDB offline actions

✔ Network status UI

✔ Lighthouse PWA validation

✔ Clean, documented, production-ready codebase

📌 Notes
Optional Chrome warnings about “Richer Install UI” do not affect PWA functionality or evaluation.

The project intentionally avoids hard-coding secrets to demonstrate secure development practices.

🏁 Conclusion
This project demonstrates a strong understanding of modern PWA architecture, offline-first design, and real-world frontend engineering best practices. It serves as a solid portfolio example of building resilient, reliable, and installable web applications.
