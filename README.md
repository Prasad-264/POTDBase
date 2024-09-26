# POTDBase - Problem of the Day Aggregator

POTDBase is a web application designed to aggregate and display Problem of the Day (POTD) from multiple competitive programming platforms like LeetCode, GeeksforGeeks, HackerEarth, and CodingNinjas. It offers a single hub for developers to discover and solve daily coding challenges.

## Features

- **Multi-platform Support:** Fetch POTD from various platforms including LeetCode, GeeksforGeeks, HackerEarth, and CodingNinjas.
- **Dark Mode:** Seamless dark mode integration using custom `useDarkMode` hook and `useContext` for global state management.
- **Responsive Design:** UI built with Tailwind CSS for a smooth, responsive experience on both mobile and desktop devices.
- **Challenge Information:** Displays key challenge details such as difficulty, accuracy, total submissions, and topic tags.
- **Dynamic Data Fetching:** APIs to fetch the latest problem of the day with support for multiple platforms.
- **Scalable Code Structure:** Organized in a modular way for better maintainability and scalability.

## Technologies Used

- **Frontend:**
  - React.js
  - Next.js (API routes, server-side rendering)
  - Tailwind CSS (styling)
  
- **Backend:**
  - REST API Integration (LeetCode, GeeksforGeeks, CodingNinjas, etc.)
  
- **State Management:**
  - Context API (for managing dark mode globally)
  
- **Other Tools:**
  - Custom Hooks (e.g., `useDarkMode`)
  - Fetch API (for data retrieval)

## Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

- Node.js (v14 or later)
- npm or yarn (latest version)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/potdbase.git
   cd potdbase
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
    ```bash
    http://localhost:3000
    ```
## Demo

You can view a live demo of the app [here](https://potd-base.vercel.app/).