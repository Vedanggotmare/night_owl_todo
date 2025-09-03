# 🌙 Night-Owl Timetable

A simple React app to **track weekly activities** with checkboxes and persistent storage using `localStorage`.
This timetable helps you log tasks like studying, projects, workouts, or exam prep across the week.

---

## 🚀 Features

- 📅 **Auto-generated weekly dates** (Sunday to Saturday).
- ✅ **Checkbox tracking** for multiple activities.
- 💾 **Auto-save to localStorage** (data stays even after page reload).
- 🖥️ **Clean UI** with Tailwind CSS styling.
- ⚡ Fully client-side, no backend required.

---

## 🛠️ Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/night-owl-timetable.git
   cd night-owl-timetable
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the app locally:

   ```bash
   npm start
   ```

4. Open your browser and visit:

   ```
   http://localhost:3000
   ```

---

## 📂 Project Structure

```
night-owl-timetable/
├── src/
│   ├── App.js
│   ├── Timetable.js   # Core timetable component
│   ├── index.js
│   └── ...
├── public/
│   └── index.html
├── package.json
└── README.md
```

---

## ✨ Usage

- Each row = a **date in the current week**.
- Each column = an **activity** (e.g., CG Study, RPi Project, Workout, GATE Prep).
- Tick the checkbox ✅ when you complete the task.
- Your progress is saved automatically in `localStorage`.

---
