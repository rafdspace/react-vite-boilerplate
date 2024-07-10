import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Vite + React + Emotion</div>,
  },
  {
    path: "/test",
    element: <div>Hello test!</div>,
  },
]);

const Routes = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default Routes;
