# 🎬 Movie List App

A simple and interactive **Movie List App** built with **React** and **TypeScript**, using **React Query** for API handling.  
Users can browse movies, mark them as **watched**, and the state persists using **local storage**.

## 🚀 Features
✅ Fetches movies from an external API  
✅ Pagination to navigate through movie lists  
✅ Users can mark movies as **watched** (stored in local storage)  
✅ Responsive and clean UI with **modern styling**  
✅ Fully tested with **Jest & React Testing Library**  
✅ Error handling and retry logic using **React Query**  

---

## 📦 Installation & Running the App
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/yourusername/movielist-app.git
cd movielist-app
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Run the App
```sh
npm start
```
📌 Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Running Tests
```sh
npm test
```
Runs the test suite using **Jest** and **React Testing Library**.

---

## 📦 Building for Production
```sh
npm run build
```
This creates an optimized **production-ready** build in the `build/` folder.

---

## 🚀 Deployment
This app can be deployed using **GitHub Actions**, **Netlify**, or **Vercel**.

---

## 🔧 Tech Stack
- **React + TypeScript**
- **React Query**
- **Jest & React Testing Library**
- **MSW (Mock Service Worker) for API testing**
- **Styled with modern CSS**

---

### 📌 Notes
- The app uses **local storage** to persist watched movies.
- If movies do not load, the app automatically retries with **exponential backoff**.
