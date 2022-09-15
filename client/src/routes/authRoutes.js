import { Admin, Basket } from "../pages";
import { ADMIN_ROUTE, BASKET_ROUTE } from "../utils";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
  {
    path: BASKET_ROUTE,
    Component: Basket,
  },
];
