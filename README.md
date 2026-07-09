# 🌤️ Weather App

A modern, minimal weather app built with **React + Tailwind v4** — search any city and get live conditions in a clean glassmorphism UI, with full dark/light mode support.

🔗 [Live Demo](https://ebrahimvatankhah.github.io/weather-react/)

---

## ✨ Features

- 🔍 Debounced city search (no wasted API calls while typing)
- 🌡️ Live temperature, feels-like, humidity & wind
- 🌙 Dark / ☀️ Light theme toggle
- ⚡ Loading & ❌ error states handled gracefully
- 📱 Fully responsive — desktop, tablet & mobile
- 🔐 API key kept out of the repo via `.env`

---

## 🛠️ Tech Stack

| | |
|---|---|
| ⚛️ | React |
| 🎨 | Tailwind CSS v4 |
| ⚡ | Vite |
| 🌐 | OpenWeatherMap API |
| 🚀 | GitHub Actions → GitHub Pages |

---

## 📂 Project Structure

```
src/
 ├─ components/
 │   ├─ SearchBar.jsx
 │   ├─ WeatherCard.jsx
 │   ├─ Loading.jsx
 │   └─ ErrorMessage.jsx
 ├─ pages/
 │   └─ Home.jsx
 ├─ hooks/
 │   └─ useDebounce.js
 ├─ services/
 │   └─ weatherApi.js
 ├─ App.jsx
 └─ main.jsx
```

---

## 🚀 Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/USERNAME/weather-app.git
cd weather-app

# 2. Install dependencies
npm install

# 3. Add your API key
cp .env.example .env
# then open .env and paste your OpenWeatherMap key

# 4. Run locally
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file in the root:

```env
VITE_API_KEY=your_openweathermap_api_key_here
```

> Get a free key at [openweathermap.org](https://openweathermap.org/api) — the classic Current Weather endpoint is free, no credit card required.

---

## 📦 Deployment

Pushes to `main` trigger a GitHub Actions workflow that builds the app (injecting `VITE_API_KEY` from repo secrets) and deploys `dist/` to the `gh-pages` branch. No manual build/deploy steps needed. ⚙️


Ebrahim Vatankhah [portfolio](http://ebrahim-vatankhah.ir/)
