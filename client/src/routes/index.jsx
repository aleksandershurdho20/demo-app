import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./config";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, component: Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;