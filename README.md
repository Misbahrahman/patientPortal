
# Patient Management Portal

> A simple portal to manage patient data with developer tools like SQL querying, made with PG-Lite DB, allowing users to store data in-memory.

## 🚀 Live Demo

[View Live Project](https://patient-portal-one.vercel.app/)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Development Process](#development-process)

## ✨ Features

- **Local Database with PG-Lite + IndexedDB**: Utilizes PG-Lite with IndexedDB to store patient data locally, creating an in-memory local database that operates seamlessly even without a server.

- **Multi-Tab Synchronization**: The app supports multiple tabs, ensuring that when a new patient is added in one tab, all other open tabs are automatically updated in real-time, keeping your data consistent across sessions.

- **Inbuilt SQL Editor**: A built-in SQL editor allows developers to write custom queries, giving more control over filtering and accessing patient data based on specific requirements.

- **Patient Management**: Easily manage patient records. You can add new patients with relevant details and organize them for smooth data management.

- **Modern UI/UX**: Features a clean, intuitive user interface designed for ease of use. The design follows the Medblocks theme, offering a professional look while maintaining simplicity and clarity for users.

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Normal CSS-based styling using `index.css`
- **State Management**: UseState and React hooks (no external state management solution)
- **Database**: PG-Lite + IndexedDB for persistent client-side storage and SQL queries.
- **Linting**: ESLint
- **Package Manager**: npm

## 🚦 Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (version 16.0 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Misbahrahman/patientPortal.git
   cd patientPortal
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**

   Navigate to `http://localhost:5173` to view the application.

## 📜 Available Scripts

In the project directory, you can run:

### `npm run dev`
Starts the development server with hot reload at `http://localhost:5173`.

### `npm run build`
Builds the app for production to the `dist` folder. The build is minified and optimized for best performance.

### `npm run preview`
Serves the production build locally for testing before deployment.

### `npm run lint`
Runs ESLint to check for code quality issues and enforce coding standards.

## 🔨 Development Process

### What I Built

1. **Initial Setup**: Started with Vite + React template for fast development experience.
2. **Component Architecture**: Built reusable components following React best practices.
3. **State Management**: Used React's built-in `useState` and hooks for state management.
4. **Styling**: Applied normal CSS-based styling using `index.css` for a clean and simple design.
5. **Database Integration**: Integrated PG-Lite and IndexedDB for local in-memory storage.
6. **New Patient Registration Feature**: Developed a new patient registration feature to allow users to add and manage patient data.
7. **Multi-Tab Synchronization**: Implemented multi-tab synchronization, ensuring that when a new patient is added in one tab, all other tabs automatically update and refresh.
8. **SQL Editor**: Added an inbuilt SQL editor to allow developers to write custom queries for filtering and managing patient data.
9. **UI Ramping Using AI**: Leveraged AI to enhance the UI, ensuring it follows the Medblocks theme for a cohesive, professional look.
10. **Testing**: Performed manual testing to ensure all features worked as expected.
11. **Deployment**: Set up automated deployment to Vercel for continuous delivery.

---

**Built with ❤️ using React and Vite**
