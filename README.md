# Donezo Dashboard

Donezo Dashboard is a modern, responsive web application for project and task management. Built with a robust frontend stack, it provides users with an intuitive interface to visualize key metrics, track progress, and manage workflows effectively.

## Features

- **User Authentication**: Secure login system with protected routes to safeguard dashboard data.
- **Interactive Dashboard**: A comprehensive overview of project statistics including user metrics, revenue, and growth analytics.
- **Data Visualization**: Rich charts and graphs powered by **Recharts**, including a stacked bar chart for user analytics and a half-pie chart for conversion rates.
- **Component-Based Architecture**: A clean and maintainable codebase using React components for UI elements like cards, navigation, and forms.
- **Efficient Data Fetching**: Optimized data handling using **SWR** for fetching, caching, and revalidating remote data.
- **Time Tracking**: An integrated stopwatch component to track time spent on tasks.

## Tech Stack

- **Framework**: [React](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Routing**: [React Router](https://reactrouter.com/)
- **Data Fetching**: [SWR](https://swr.vercel.app/)
- **Charting**: [Recharts](https://recharts.org/)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (version 22 or later)
- npm

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/ztanvir/donezo-dashboard.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd donezo-dashboard
    ```
3.  **Install NPM packages:**
    ```sh
    npm install
    ```
4.  **Set up environment variables:**

    Create a `.env` file in the root of the project and add your API endpoint. The application uses this variable to communicate with the backend.

    ```env
    VITE_API_ENDPOINT=http://your-api-url.com
    ```

5.  **Run the development server:**
    ```sh
    npm run dev
    ```
    Your application will be available at `http://localhost:5173`.

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Runs the app in development mode.
- `npm run build`: Builds the app for production to the `dist` folder.
- `npm run lint`: Lints the project files using ESLint.
- `npm run check-types`: Performs a static type check using the TypeScript compiler.
- `npm run preview`: Serves the production build locally to preview it.

## Project Structure

The project follows a standard React application structure, with key logic separated for clarity and maintainability.

```
src/
├── components/     # Reusable UI components (Navbar, Sidebar, LoginForm)
├── context/        # React context for global state (UserContext)
├── layouts/        # Layout components for different page structures
├── lib/            # Core application logic (e.g., ProtectedUserRoute)
├── pages/          # Top-level page components for routes (Home, Dashboard)
│   ├── dashboard/  # Components specific to the dashboard page
│   └── home/       # Components specific to the home/login page
├── services/       # API call definitions and data fetching logic (api.ts)
├── types.ts        # Global TypeScript type definitions
└── main.tsx        # Application entry point and router setup
```

## Continuous Integration

This project uses GitHub Actions for Continuous Integration. The workflow is defined in `.github/workflows/reactCi.yml` and is triggered on every push to the `main` and `denzoSpa` branches.

The CI pipeline performs the following checks to ensure code quality and stability:

1.  **Install Dependencies**: Installs all required `npm` packages.
2.  **Check Style**: Runs `npm run lint` to enforce code style.
3.  **Check Types**: Runs `npm run check-types` to validate TypeScript types.
4.  **Check Build**: Runs `npm run build` to ensure the project builds successfully for production.
