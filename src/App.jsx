import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageLayout from "./pages/PageLayout";
import Box from "./components/atoms/Box";

const HomePage = lazy(() => import("./pages/HomePage"));
const TodoListPage = lazy(() => import("./pages/TodoListPage"));

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PageLayout />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "todos",
          element: <TodoListPage />,
        },
      ],
    },
  ]);

  return;
}

export default App;
