import Auth from "../pages/Auth";
import Dashboard from "../pages/Dashboard";

export const routes = [
  {
    path: "/",
    component: Auth,
  },
  {
    path: "/dashboard",
    component: Dashboard,
  },
];
