# Uptrend X


```
/root
  ├── /backend
  └── /frontend
```

## Getting Started

### Setup

Follow these steps to set up and run the project:

1. **Navigate to the `backend` directory:**

   ```bash
   cd backend
   ```

2. **Install backend dependencies:**

   ```bash
   npm install
   ```

3. **Build the backend:**

   ```bash
   npm run build
   ```

4. **Start the backend server:**

   ```bash
   npm run backend
   ```

   The backend server will start on its configured port (e.g., `http://localhost:3000`).

5. **Open a new terminal window/tab and navigate to the `frontend` directory:**

   ```bash
   cd frontend
   ```

6. **Install frontend dependencies:**

   ```bash
   npm install
   ```

7. **Start the frontend development server:**

   ```bash
   npm run dev
   ```

   The frontend development server will start on its configured port (e.g., `http://localhost:5173`).

### Project Structure

- **`/backend`**: Contains the backend server code.
  - **`/models`**: Mongoose models for MongoDB.
  - **`/routes`**: Express routes.
  - **`/controllers`**: Request handlers.
  - **`index.ts`**: Main server file.
  
- **`/frontend`**: Contains the frontend code.
  - **`/components`**: React components.
  - **`/pages`**: Page components.
  - **`/styles`**: CSS or Tailwind styles.
  - **`index.tsx`**: Main entry point for the React application.


### Troubleshooting

- Ensure that both backend and frontend servers are running on different ports to avoid conflicts.
- Check console output for any errors during the build or runtime and resolve them as needed.

---
