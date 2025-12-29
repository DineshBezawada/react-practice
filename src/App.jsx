import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "./features/home";
import { Suspense, lazy, useContext } from "react";
import NotFound from "./features/notFound";
import { themeContext } from "./contexts/themeContext";
import Navbar from "./components/navbar";
const About = lazy(() => import(`./features/about`));

const SuspenseComponent = (Component) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,   // App is the layout
    children: [
      {
        index: true,     // default route at "/"
        element: <Home />,
      },
      {
        path: "about",
        element: SuspenseComponent(About),
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  const {theme} = useContext(themeContext);
  console.log(theme,"theme");
  return (
    <div className={theme === "light" ? "light-theme" : "dark-theme"}>
      <Navbar/>
      <Outlet/>
    </div>
  );
}

export default App;
